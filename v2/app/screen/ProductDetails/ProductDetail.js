import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Platform, SafeAreaView, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';


import { cleanNotification } from "@Store2/Product";
import {
    productNotification,
} from "@Request2/Product";
import {getPopularProducts} from '@Request2/PopularProducts';
import {getDeals} from '@Request2/Deal';
import { getKessington } from '@Request2/Kessington';
import { getNewProducts } from '@Request2/NewProducts';
import {getBackInStock} from "@Request2/BackInStock"
import { cleanupAddToCart } from "@Store2/Cart";
import styles from './style';
import Loader from "@Screen2/loader";
import { LoginHeader, HomeDetailsBtn } from "@Component2";
import { commafy } from "@Helper2/func";
import SmallCard from './component/smallCard';
import { addToCart, listCart } from "@Request2/Cart";
import AddToCartSuccessBottomSheet from "./addToCartSuccess";


const ProductDetail = (props) => {


    const dispatch = useDispatch();


    const bottomSheetRef = useRef(null);


    const goBack = () => props.navigation.goBack();

    const goToCart = () => props.navigation.navigate("Cart");


    const result = props.route.params.products;
    const details = props.route.params.details;


    const regex = new RegExp("^0+(?!$)", 'g');


    const [amount, setAmount] = useState(0);

    const [visible, setVisible] = useState(false);

    const [errMsg, setErr] = useState(null);

    const [activeId] = useState(props.activeProductType);

    const [notified, setNotified] = useState(false);


    const { errors, addToCartStatus } = useSelector((state) => state.cart)

    const { notifyStatus, notify, errors: err } = useSelector((state) => state.product);


    const showCartSuccessBottomSheet = () => {

        dispatch(listCart(1));

        bottomSheetRef?.current?.present();

        dispatch(cleanupAddToCart());
    };


    const closeCartSuccessBottomSheet = () => {

        bottomSheetRef.current.close()
    };


    const disabledFunc = () => {

        if (result.max_quantity_per_sale == 0) {
            if (amount == 0 || amount > result.stock_count) {
                return true
            } else {
                return false
            }
        } else if (result.max_quantity_per_sale > 0) {
            if (amount == 0 || amount > result.stock_count || amount > result.max_quantity_per_sale) {
                return true
            } else {
                return false
            }

        }

    };

    const disableIncrementFunc = () => {
        if (result.max_quantity_per_sale == 0) {
            if (amount >= result.stock_count) {
                return true
            } else {
                return false
            }
        } else if (result.max_quantity_per_sale > 0) {
            if (amount >= result.stock_count || amount >= result.max_quantity_per_sale) {
                return true
            } else {
                return false
            }

        }
    };

    const increaseCart = () => {
        setAmount(amount + 1)
    };


    const decreaseCart = () => {
        setAmount(amount - 1);
    };

    const addItemsToCart = () => {
        const cartDetails = { quantity: amount, product_id: result.id }
        setVisible(true);
        dispatch(addToCart(cartDetails));
    };


    const toastConfig = {
        error: () => (
            <View style={styles.errView}>
                <Icon name="error-outline" size={22} color="#fff" />
                <Text style={styles.errText}>{errMsg}</Text>
            </View>
        )
    };


    useEffect(() => {
        if (addToCartStatus === "failed") {
            refreshView(errors?.msg, "")
        } else if (addToCartStatus === "success") {
            setErr(null);
            refreshView("", "Added to Cart");

        }
    }, [addToCartStatus]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((msg, suc) => {
        wait(300).then(() => {
            setVisible(false);

            if (suc) {

                wait(100).then(() => {

                    showCartSuccessBottomSheet();

                })

            } else {

                setErr(msg);

                Toast.show({
                    type: 'error',
                    visibilityTime: 8000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 60
                })

                wait(7000).then(() => {
                    dispatch(cleanupAddToCart());
                    setErr(null)
                })
            }
        })

    }, []);


    const getProductNotification = () => {

        setVisible(true)

        dispatch(productNotification(result.id));
    };



    useEffect(() => {
        if (notifyStatus === "failed") {
            refreshNotifyView(err?.msg, "")
        } else if (notifyStatus === "success") {
            refreshNotifyView("", notify?.message);

            if (activeId === "2") {

                dispatch(getBackInStock());

            } else if (activeId === "3") {

                dispatch(getPopularProducts());

            } else if (activeId === "4") {

                dispatch(getNewProducts());

            } else if (activeId === "5") {

                dispatch(getKessington())

            }

        }
    }, [notifyStatus]);

    useEffect(() => {

        return () => {
            dispatch(cleanNotification());

            setNotified(false);

        }

    }, [])


    const refreshNotifyView = useCallback((msg, suc) => {
        wait(300).then(() => {

            setVisible(false);

            if (suc) {

                setNotified(true);

            } else {
                setErr(msg);

                Toast.show({
                    type: 'error',
                    visibilityTime: 8000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 60
                })

                wait(8000).then(() => {
                    dispatch(cleanNotification());
                    setErr(null)
                })
            }
        })

    }, []);



    return (

        <View style={styles.container}>

            <LoginHeader
                name="arrow-back-ios"
                onPress={goBack}
                color="#767680"
            >
                <View style={styles.navHeader}>
                    <TouchableOpacity onPress={goToCart}>
                        <Mcon name="cart-outline" color="#767680" size={26} />
                    </TouchableOpacity>
                </View>
            </LoginHeader>

            {errMsg ? <Toast config={toastConfig} /> : null}

            <ScrollView bounces={false}>
                <SafeAreaView>

                    <SmallCard img={result.product_images} style={styles.smallCardCover} id="products" />
                    <View style={styles.ccView}>
                        <Icon name="error-outline" size={16} color="#231B00" />
                        <Text style={styles.ccText}>This item is cash & carry</Text>
                    </View>
                    {result.out_of_stock &&
                        <View style={styles.outofStockContainer}>
                            <Text style={styles.outofStockTitle}>OUT OF STOCK</Text>
                        </View>
                    }

                    <View style={styles.productTitleContainer}>
                        <Text style={styles.productTitle}>{result.name}</Text>
                        <Text style={styles.productDesc}>Product details: {result.generic_name}</Text>
                    </View>

                    <View style={styles.detailsContainer}>
                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Category</Text>
                            <Text style={styles.detailsDesc}>{result.category?.display_name}</Text>
                        </View>

                        {result.max_quantity_per_sale > 0 &&
                            <View style={styles.details}>
                                <Text style={styles.detailsTitle}>Max Quantity</Text>
                                <Text style={styles.detailsDesc}>{result.max_quantity_per_sale}</Text>
                            </View>}

                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Available</Text>
                            {!result.out_of_stock ? <Text style={[styles.detailsDesc, { color: "#469D00" }]}>
                                In Stock ({commafy(result.stock_count)})</Text> :
                                <Text style={styles.expiryDetailsDesc}>Out of Stock</Text>}
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Price Per Pack</Text>
                            <Text style={styles.detailsDesc}>&#8358;{commafy(result.price_per_pack)}</Text>
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Carton Quantity</Text>
                            <Text style={styles.detailsDesc}>{result.quantity_per_carton}</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Pack Quantity</Text>
                            <Text style={styles.detailsDesc}>{result.quantity_per_pack}</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Expiry Date</Text>
                            <Text style={styles.expiryDetailsDesc}>{result.expiry_date}</Text>
                        </View>

                    </View>

                    {result.stock_count > 0
                        ?
                        <View style={styles.detailsPriceContainer}>

                            <View style={[styles.details, styles.detailsAddToCart]}>

                                <View style={styles.cartAmountView}>

                                    <TouchableOpacity
                                        style={[styles.detailsIncrementBtn, styles.detailsDecrement]}
                                        disabled={amount < 2 ? true : false}
                                        onPress={decreaseCart}
                                    >
                                        <Text style={[styles.incrementBtnText, amount < 2 && styles.disabledBtn]}>-</Text>
                                    </TouchableOpacity>

                                    <TextInput
                                        style={styles.incrementText}
                                        value={amount.toString()}
                                        onChangeText={(val) => {
                                            val = Number(val.replaceAll(regex, ""))
                                            if (val <= parseInt(result.stock_count)) {
                                                if (result.max_quantity_per_sale !== 0) {
                                                    if (val <= result.max_quantity_per_sale) {
                                                        setAmount(val)
                                                    }
                                                } else {
                                                    setAmount(val)
                                                }
                                            }

                                        }
                                        }
                                        keyboardType="numeric"

                                    />
                                    <TouchableOpacity
                                        style={[styles.detailsIncrementBtn, styles.detailsIncrement]}
                                        onPress={increaseCart}
                                        disabled={disableIncrementFunc() ? true : false}
                                    >
                                        <Text style={[styles.incrementBtnText, disableIncrementFunc() && styles.disabledBtn]}>+</Text>
                                    </TouchableOpacity>

                                </View>

                                <View>
                                    <Text style={styles.amountText}>&#8358;{commafy(parseInt(result.price_per_pack) * amount)}</Text>
                                </View>
                            </View>


                            <HomeDetailsBtn
                                onPress={addItemsToCart}
                                title="Add to Cart"
                                disabled={disabledFunc() ? true : false}
                                disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                            />

                        </View>
                        :
                        <View style={styles.detailsPriceContainer}>

                            {notified ?
                                <HomeDetailsBtn
                                    title="Notification Enabled"
                                    disabled={true}
                                    disabledBackgroundColor="rgba(223, 225, 249, 1)"
                                    backgroundColor="rgba(254, 251, 255, 1)"
                                    color="rgba(23, 27, 44, 1)"
                                    iconName="notifications-off"
                                />
                                :

                                <HomeDetailsBtn
                                    onPress={getProductNotification}
                                    title="Notify me when in stock"
                                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                    backgroundColor="rgba(254, 251, 255, 1)"
                                    borderWidth={1}
                                    borderColor="rgba(51, 83, 203, 1)"
                                    color="rgba(51, 83, 203, 1)"
                                    iconName="notifications-on"
                                />}
                        </View>

                    }

                </SafeAreaView>

            </ScrollView>

            <Loader isVisible={visible} />

            <AddToCartSuccessBottomSheet
                bottomSheet={bottomSheetRef}
                closeBottomSheet={closeCartSuccessBottomSheet}
                data={{ name: result.name, img: result.product_images[0].url }}
                goBack={goBack}
                goToCart={goToCart}

            />

        </View>

    );

};

export default ProductDetail;