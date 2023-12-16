import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity,Image, FlatList,SafeAreaView, RefreshControl } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux";


import styles from './style';
import { HomeHeader, OnboardinBtn } from "@Component2";
import { listCart, deleteCart, updateCart, deleteAllCart, deleteMultipleCart } from "@Request2/Cart";
import { commafy } from "@Helper2/func";
import { cleanList, remove, cleanUpdateCart, removeAll, cleanSelected } from "@Store2/Cart";
import Loader from "@Screen2/loader";
import { Increment, Decrement, textInputCart } from "./controllers";
import { ActiveItem, OutOfStock, ListEmptyCart, LoadingPlaceHolder, CartBottomSheet, DealItem } from "./component";




const Cart = (props) => {

    const dispatch = useDispatch();

    const bottomSheetRef = useRef(null);

    const [refreshing, setRefreshing] = useState(false);
    const [trackCartStatus, setTrackCartStatus] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
    const [cartListCopy, setCartListCopy] = useState([]);
    const [loader, setLoader] = useState(false);
    const [removeList, setRemoveList] = useState([]);
    const [showScroll, setShowScroll] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const { items, errors, listItems, cartStatus } = useSelector((state) => state.cart);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const goBack = () => {
        props.navigation.goBack()
    }

    const waitTimeRemoveErr = useCallback(() => {
        wait(4000).then(() => {
            setErrMsg(null);
            dispatch(listCart(1))
        });
    }, []);

    useEffect(() => {
        if (cartStatus == "failed") {
            setErrMsg(errors?.msg);
        }

    }, [cartStatus]);

    useEffect(() => {

        let mappedList = listItems.map((item) => ({
                id: item.id,
                quantity: item.quantity,
                total_amount: item.total_amount,
                product: { ...item.product },
                deal_id: item.deal_id,
                cart_id: item.id,
                deal: { ...item.deal }
            }
        )).sort((a, b) => {
            if (a?.product?.name < b?.product?.name) {
                return -1
            }
            return 0

        })

        if (mappedList.length > 3) {
            setShowScroll(true);
            setTimeout(() => {
                setShowScroll(false);
            }, 3000)
        }

        setCartListCopy(mappedList)

    }, [listItems]);

    const goToSearchCart = () => {

        props.navigation.navigate("SearchCart");
    }


    const navigateToBrowseProducts = () => {

        props.navigation.navigate("Browse");

    };


    const loadMoreCart = () => {

        setTrackCartStatus(true);

        dispatch(listCart(items.carts?.current_page + 1));

    };


    const showBottomSheet = () => {

     setShowDeleteModal(true)

    };

    const closeBottomSheet = () => {

     
        setShowDeleteModal(false)

    };


    const refreshCart = useCallback(() => {

        dispatch(cleanList());

        setErrMsg(null)

        setRefreshing(true);

        setTrackCartStatus(false);

        dispatch(listCart(1))
            .unwrap()
            .then((suc) => {

                setRefreshing(false);

            }).catch((rejectedValueOrSerializedError) => {
                // handle error here
                setRefreshing(false);
            })

    }, []);


    const removeItemFromCart = (id) => {
        let deletedItem = cartListCopy.filter((item => item.id !== id));

        setCartListCopy(deletedItem);

        dispatch(deleteCart(id))
            .unwrap()
            .then(() => {

                dispatch(remove());

                dispatch(cleanList());

                dispatch(listCart(1));

            })
            .catch((err) => {

                setErrMsg(err.msg);

                setTrackCartStatus(false);

                dispatch(cleanList());

                dispatch(remove())

                waitTimeRemoveErr()
            })
    };


    const waitTimeUpdateErr = useCallback(() => {

        wait(3000).then(() => {

            setErrMsg(null);

            dispatch(cleanUpdateCart())

        });

    }, []);


    const updateCartAndRedirect = () => {

        setLoader(true);

        setErrMsg(null);

        dispatch(cleanUpdateCart());

        dispatch(updateCart(cartListCopy))
            .unwrap()
            .then(() => {

                setLoader(false);

                dispatch(cleanList())

                dispatch(listCart(1));

                props.navigation.navigate("CheckOut");

            })
            .catch((err) => {

                setLoader(false);

                setErrMsg(err.msg);

                waitTimeUpdateErr()
            })

    };


    const deleteAllItemsCart = () => {

        closeBottomSheet();

        setLoader(true);

        setTrackCartStatus(false);

        dispatch(deleteAllCart())
            .unwrap()
            .then(() => {
                setLoader(false);

                dispatch(cleanList());

                dispatch(listCart(1));

            })
            .catch(err => {

                setLoader(false);

                setErrMsg(err.msg);

                dispatch(removeAll());

                waitTimeRemoveErr();

            })

    };

    const deleteSelectedItemsCart = () => {

        closeBottomSheet();

        let itemId = { items: removeList }

        setRemoveList([]);

        dispatch(deleteMultipleCart(itemId))
            .unwrap()
            .then(() => {

                dispatch(cleanSelected());

                dispatch(cleanList());

                dispatch(listCart(1));

            })
            .catch(err => {

                setErrMsg(err.msg);

                dispatch(cleanSelected());

                waitTimeRemoveErr();

            })

    };

    const selectedItems = (id) => {

        setRemoveList([...removeList, id]);

    };

    const removeFromRemoveList = (id) => {

        const removed = removeList.filter(item => item !== id);

        setRemoveList(removed);

    };


    const ListItem = ({ item }) => {

        return (

            item.product.out_of_stock || item.product?.stock_count < item.quantity ?

                <OutOfStock
                    item={item}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                    name={item.product.out_of_stock ? "Out of Stock" : "Amount Unavailable"}
                    selectedItems={selectedItems}
                    removeList={removeList}
                    removeFromRemoveList={removeFromRemoveList}
                />
                :
                item.product?.stock_count >= item.quantity &&

                <ActiveItem
                    item={item}
                    Increment={() => Increment(item, cartListCopy, setCartListCopy)}
                    Decrement={() => Decrement(item, cartListCopy, setCartListCopy)}
                    textInputChange={(val) => textInputCart(item, cartListCopy, setCartListCopy, val)}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                    selectedItems={selectedItems}
                    removeList={removeList}
                    removeFromRemoveList={removeFromRemoveList}
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
                    selectedItems={selectedItems}
                    removeList={removeList}
                    removeFromRemoveList={removeFromRemoveList}
                />

                :

                item.product?.stock_count >= item.quantity &&

                <DealItem
                    item={item}
                    RemoveItemFromCart={() => removeItemFromCart(item.id)}
                    selectedItems={selectedItems}
                    removeList={removeList}
                    removeFromRemoveList={removeFromRemoveList}
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
        <SafeAreaView style={styles.safeAreaStyle}>
       

            <HomeHeader>
                <View style={styles.navHeaderContainer}>
                <View style={styles.smFlex}>
                 <TouchableOpacity onPress={goBack}>
                    <Image
                    source={require("@Assets2/image/backArrow.png")}
                    style={styles.backImg}
                    />
                    </TouchableOpacity>
                    <Text style={styles.navHeaderTitle}>Cart({items.carts?.total})</Text>
                 </View>
                    {items.carts?.total > 0 &&
                        <View style={styles.navHeaderIconContainer}>
                            <TouchableOpacity onPress={goToSearchCart}>
                                <Icon name="search" size={22} color="#5A5D72" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.searchView} onPress={showBottomSheet}>
                                <Icon name="more-horiz" size={22} color="#5A5D72" />
                            </TouchableOpacity>

                        </View>
                    }
                </View>
            </HomeHeader>

            {errMsg && <View style={styles.errView} >
                <Icon name="error-outline" size={22} color="#fff" />
                <Text style={styles.errText}>{errMsg}</Text>
            </View>}

            {(cartStatus == "idle" || cartStatus == "pending") && !trackCartStatus ?
                <LoadingPlaceHolder />
                :
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                    data={cartListCopy}
                    renderItem={List}
                    onEndReachedThreshold={0.5}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={refreshCart} />
                    }
                    onEndReached={() => {
                        if (items.carts?.current_page < items.carts?.last_page) {
                            loadMoreCart()
                        }
                    }}
                    ListFooterComponent={cartStatus === "pending" && <LoadingPlaceHolder />}
                    ListEmptyComponent={<ListEmptyCart navigate={navigateToBrowseProducts} />}
                />

            }

            {showScroll &&
                <View style={styles.scrollMoreView}>
                    <Icon name='arrow-downward' size={16} color="#001454" />
                    <Text style={styles.scrollText}>Scroll for more</Text>
                </View>
            }

            {cartListCopy.length ?

                <View style={styles.listBottomView}>
                    <View style={styles.listView}>
                        <Text style={styles.listBottomText}>Total</Text>
                        <Text style={styles.listBottomText}>₦{commafy(items?.total_amount)}</Text>
                    </View>

                    <View style={styles.listBottomBtnView}>
                        <OnboardinBtn
                            title="Check Out"
                            backgroundColor="#3353CB"
                            color="#fff"
                            borderWidth={1}
                            borderColor="rgba(51, 83, 203, 1)"
                            onPress={updateCartAndRedirect}
                        />
                    </View>
                </View> : null
            }

            <Loader isVisible={loader} />
        
            <CartBottomSheet
                deleteModal ={showDeleteModal}
                bottomSheetRef={bottomSheetRef}
                deleteAll={deleteAllItemsCart}
                removeSelected={deleteSelectedItemsCart}
                removeList={removeList}
                returnBack={() => setShowDeleteModal(false)}
            />
     
           

        
        </SafeAreaView>
    )
};

export default Cart;