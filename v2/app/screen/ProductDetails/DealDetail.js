import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import LinearGradient from "react-native-linear-gradient";


import { cleanupDealStatus, cleanAllDeal } from "@Store2/Deal";
import { LoginHeader, HomeDetailsBtn } from "@Component2";
import { commafy } from "@Helper2/func";
import SmallCard from './component/smallCard';
import Loader from "@Screen2/loader";
import styles from './style';
import { listCart } from "@Request2/Cart";
import { addDealToCart, getDeals } from "@Request2/Deal";
import AddToCartSuccessBottomSheet from "./addToCartSuccess";


const DealDetail = (props) => {


    const dispatch = useDispatch();


    const bottomSheetDealsRef = useRef(null);


    const result = props.route.params.products;


    const goBack = () => props.navigation.goBack();

    const goToCart = () => props.navigation.navigate("Cart");


    const regex = new RegExp("^0+(?!$)", 'g');


    const [errMsg, setErr] = useState(null);

    const [amount, setAmount] = useState(0);

    const [visible, setVisible] = useState(false);


    const { addDeal, addDealStatus, errors } = useSelector((state) => state.deal);


    useEffect(() => {

        if (addDealStatus === "failed") {
            refreshView(errors?.msg, "");
        } else if (addDealStatus === "success") {
            refreshView("", addDeal.message);
        }

    }, [addDealStatus]);


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const refreshView = useCallback((msg, suc) => {

        if (suc) {

            setVisible(false);

            wait(100).then(() => {

                showCartSuccessBottomSheet();

                dispatch(cleanAllDeal());

                dispatch(getDeals({ id: 1 }));

            })

        } else {

            setVisible(false);

            setErr(msg);

            wait(100).then(() => {

                Toast.show({
                    type: 'error',
                    visibilityTime: 7000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 60
                })
            })

            wait(7000).then(() => {
                dispatch(cleanupDealStatus());
                setErr(null)
            })

        }

    }, []);


    const increaseCartAmount = () => {
        if (parseInt(amount) <= parseInt(result.quantity)) {
            setAmount(parseInt(amount) + 1)
        }
    };


    const decreaseCartAmount = () => {
        if (parseInt(amount) > 0) {
            setAmount(parseInt(amount) - 1)
        }
    };

    const showCartSuccessBottomSheet = () => {

        dispatch(listCart(1));

        bottomSheetDealsRef?.current?.present();

        dispatch(cleanupDealStatus());
    };


    const closeCartSuccessBottomSheet = () => {

        bottomSheetDealsRef.current.close()

    };

    const toastConfig = {
        error: () => (
            <View style={styles.errView}>
                <Icon name="error-outline" size={22} color="#fff" />
                <Text style={styles.errText}>{errMsg}</Text>
            </View>
        )
    };


    const addItemsToCart = () => {

        setVisible(true);

        const cartDetails = { quantity: amount, id: result.id };

        dispatch(addDealToCart(cartDetails));
    };



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

            <ScrollView bounces={false} contentContainerStyle={styles.ScrollView}>
                <SafeAreaView>

                    <SmallCard img={result.product?.product_images} style={styles.smallCardCover} id="deals" />

                    <ImageBackground
                        source={require("@Assets2/image/promoBackground.png")}
                        style={styles.promoContainer}>

                        <LinearGradient
                            colors={['rgba(147, 0, 10, 0.95)', 'rgba(179, 18, 23, 0.95)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <View style={styles.promoInnerContainer}>
                                <Icon name="local-offer" color="#fff" size={26} />
                                <Text style={styles.promoTitle} numberOfLines={1}>{result.title}</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>


                    <View style={styles.productTitleContainer}>
                        <Text style={styles.productTitle}>{result.product?.name}</Text>
                        <Text style={styles.productDesc}>Product details: {result.description}</Text>
                    </View>

                    <View style={styles.detailsContainer}>
                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Category</Text>
                            <Text style={styles.detailsDesc}>{result.product?.category?.display_name}</Text>
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Price Per Pack</Text>
                            <Text style={styles.detailsDesc}>&#8358;{commafy(result.product?.price_per_pack)}</Text>
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Pack Quantity</Text>
                            <Text style={styles.detailsDesc}>{result.quantity}</Text>
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.detailsTitle}>Expiry Date</Text>
                            <Text style={styles.expiryDetailsDesc}>{result.product?.expiry_date}</Text>
                        </View>

                    </View>

                    <View style={styles.detailsPriceContainer}>

                        <View style={[styles.details, styles.detailsAddToCart]}>

                            <View style={styles.cartAmountView}>

                                <TouchableOpacity
                                    style={[styles.detailsIncrementBtn, styles.detailsDecrement]}
                                    disabled={amount == 0 || amount < result.buy ? true : false}
                                    onPress={decreaseCartAmount}>
                                    <Text
                                        style={[styles.incrementBtnText, (amount == 0 || amount < result.buy) && styles.disabledBtn]}>-</Text>
                                </TouchableOpacity>

                                <TextInput
                                    style={styles.incrementText}
                                    value={amount.toString()}
                                    onChangeText={(val) => {
                                        val = val.replaceAll(regex, "")
                                        if (val <= parseInt(result.quantity)) {
                                            setAmount(val.replace(/[^0-9]/g, ''))
                                        }
                                    }
                                    }
                                    keyboardType="numeric"
                                  

                                />
                                <TouchableOpacity
                                    style={[styles.detailsIncrementBtn, styles.detailsIncrement]}
                                    onPress={increaseCartAmount}
                                    disabled={amount >= result.quantity ? true : false}>
                                    <Text style={[styles.incrementBtnText, amount >= result.quantity && styles.disabledBtn]}>+</Text>
                                </TouchableOpacity>

                            </View>

                            <View>
                                <Text style={styles.amountText}>&#8358;{commafy(parseInt(result.product?.price_per_pack) * amount)}</Text>
                            </View>
                        </View>

                        <HomeDetailsBtn
                            onPress={addItemsToCart}
                            title="Add to Cart"
                            disabled={(amount == 0 || amount < result.buy || amount > result.quantity) ? true : false}
                            disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                        />

                    </View>
                </SafeAreaView>

            </ScrollView>

            <Loader isVisible={visible} />

            <AddToCartSuccessBottomSheet
                bottomSheet={bottomSheetDealsRef}
                closeBottomSheet={closeCartSuccessBottomSheet}
                data={{ name: result.product?.name, img: result.product?.product_images[0].url }}
                goBack={goBack}
                goToCart={goToCart}

            />

        </View>

    )
};

export default DealDetail;