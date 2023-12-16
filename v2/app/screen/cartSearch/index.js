import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux";


import styles from './style';
import { HomeHeader } from "@Component2";
import { searchCart, updateCart, listCart, deleteCart } from "@Request2/Cart";
import { ActiveItem, OutOfStock, ListEmptyCart, DealItem } from "./component";
import { cleanSearchCart, cleanList, remove } from "@Store2/Cart";
import { LoadingPlaceHolder } from "@Screen2/Cart/component"
import { Increment, Decrement, textInputCart } from "@Screen2/Cart/controllers";
import Loader from "@Screen2/loader";


const SearchCart = (props) => {


    const dispatch = useDispatch();

    const goBack = () => props.navigation.goBack();


    const [errMsg, setErrMsg] = useState(null);

    const [cartListCopy, setCartListCopy] = useState([]);

    const [trackCartStatus, setTrackCartStatus] = useState(false);

    const [loader, setLoader] = useState(false);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTimeRemoveErr = useCallback(() => {

        wait(4000).then(() => {

            setErrMsg(null);

            dispatch(cleanSearchCart())

        });

    }, []);


    const onChangeText = (val) => {
        console.log(val, "count")

        setTrackCartStatus(false);

        dispatch(cleanSearchCart());

        if (val) {

            const data = { id: 1, name: val }

            dispatch(searchCart(data))
                .unwrap()
                .then((suc) => {

                })
                .catch(err => {

                    setErrMsg(err.msg);

                    waitTimeRemoveErr();
                })
        }
    };


    const loadMoreCart = () => {

        setTrackCartStatus(true);

        dispatch(searchCart(searchCartCurrentData?.current_page + 1));

    };


    const updateCartAndRedirect = () => {

        setLoader(true);

        setErrMsg(null);

        dispatch(updateCart(cartListCopy))
            .unwrap()
            .then((suc) => {

                setLoader(false);

                dispatch(cleanList());

                dispatch(listCart(1))

                props.navigation.navigate("Cart");

            })
            .catch((err) => {

                setLoader(false);

                setErrMsg(err.msg);

                waitTimeUpdateErr()
            })

    };

    const removeItemFromCart = (id) => {
        let deletedItem = cartListCopy.filter((item => item.id !== id));

        setCartListCopy(deletedItem);

        dispatch(deleteCart(id))
            .unwrap()
            .then(() => {

                dispatch(remove());

                dispatch(cleanList())

                dispatch(listCart(1));

            })
            .catch((err) => {

                setErrMsg(err.msg);

                setTrackCartStatus(false);

                dispatch(remove());

                waitTimeRemoveErr()
            })
    };

    const { searchCartData, searchCartCurrentData, searchCartStatus } = useSelector((state) => state.cart);


    useEffect(() => {
        return () => dispatch(cleanSearchCart())

    }, [])


    useEffect(() => {

        let mappedList = searchCartData.map((item) => {
            return {
                id: item.id,
                quantity: item.quantity,
                cart_id: item.id,
                total_amount: item.total_amount,
                product: { ...item.product },
                deal_id: item.deal_id,
                deal: { ...item.deal }
            }
        }).sort((a, b) => {
            if (a?.product?.name < b?.product?.name) {
                return -1
            }

        })

        setCartListCopy(mappedList)

    }, [searchCartData]);



    const ListItem = ({ item }) => {

        return (

            item.product.out_of_stock || item.product?.stock_count < item.quantity ?

                <OutOfStock
                    item={item}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                    name={item.product.out_of_stock ? "Out of Stock" : "Amount Unavailable"}

                />
                :
                item.product?.stock_count >= item.quantity &&

                <ActiveItem
                    item={item}
                    Increment={() => Increment(item, cartListCopy, setCartListCopy)}
                    Decrement={() => Decrement(item, cartListCopy, setCartListCopy)}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                    textInputChange={(val) => textInputCart(item, cartListCopy, setCartListCopy, val)}
                />

        )
    }


    const DealListItem = ({ item }) => {

        return (

            item.product.out_of_stock || item.product?.stock_count < item.quantity ?

                <OutOfStock
                    item={item}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                    name={item.product.out_of_stock ? "Out of Stock" : "Amount Unavailable"}
                />

                :

                item.product?.stock_count >= item.quantity &&

                <DealItem
                    item={item}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                />

        )
    };

    const List = ({ item }) => {
        return (
            item.deal_id === null
                ?
                <ListItem item={item} />
                :
                <DealListItem item={item} />
        )
    }

    return (

        <View style={styles.container}>

            <HomeHeader>
                <View style={styles.homeHeaderView}>
                    <View style={styles.searchView}>
                        <Icon name="search" size={16} color="#767680" />
                        <TextInput
                            placeholder="Search Item"
                            style={styles.searchText}
                            placeholderTextColor="rgba(69, 70, 79, 0.6)"
                            onChangeText={(val) => onChangeText(val)}
                        />
                    </View>

                    <TouchableOpacity onPress={goBack}>
                        <Icon name="close" size={24} color="rgba(90, 93, 114, 1)" />
                    </TouchableOpacity>

                </View>
            </HomeHeader>

            {errMsg && <View style={styles.errView} >
                <Icon name="error-outline" size={22} color="#fff" />
                <Text style={styles.errText}>{errMsg}</Text>
            </View>}

            <View style={styles.resultHeader}>
                <Text style={styles.resultText}>Result</Text>
                {searchCartData.length ?
                    <TouchableOpacity onPress={updateCartAndRedirect}>
                        <Text style={styles.resultBtn}>UPDATE CHANGES</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>

            <FlatList
                data={cartListCopy}
                renderItem={List}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (searchCartCurrentData?.current_page < searchCartCurrentData?.last_page) {
                        loadMoreCart()
                    }
                }}
                ListEmptyComponent={searchCartStatus == "success" && <ListEmptyCart />}
                ListFooterComponent={trackCartStatus && (searchCartStatus == "pending" || searchCartStatus == "idle") ? <LoadingPlaceHolder /> : <View style={{ paddingBottom: 30 }} />}
                showsVerticalScrollIndicator={false}
            />

            <Loader isVisible={loader} />


        </View>
    )
};

export default SearchCart;