import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux";

import styles from './style';
import { LoginHeader } from "@Component2";
import { LoadingPlaceHolder, Delivery, BottomSheet, DateBottomSheet, Payment, Confirmation, OutOfStockBottomSheet } from "./component";
import { getVerifiedStore } from "@Request2/Store";
import { cleanupVerifiedStore } from "@Store2/Stores";
import { getDeliveryOptions } from "@Request2/DeliveryOptions";
import { listPaymentMethod } from "@Request2/PaymentMethod";
import { placeOrder } from "@Request2/CustomerOrder";
import Loader from "@Screen2/loader";
import { cleanPlaceOrder } from "@Store2/CustomerOrder";
import { listCart, getOutOfStockCart, removeOutOfStockCart } from "@Request2/Cart";
import { cleanList, cleanOutOfStock, cleanRemoveOutOfStock } from "@Store2/Cart";
import { getWallet } from "@Request2/Wallet";


const CheckOut = (props) => {
    

    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);

    const dateBottomSheet = useRef(null);

    const OutofStockBottomSheet = useRef(null);


    const [loading, setLoading] = useState(true);

    const [select, setSelect] = useState("1");

    const [storeAddress, setStoreAddress] = useState(null);

    const [delivery, setDelivery] = useState([]);

    const [displayInfo, setDisplayInfo] =  useState([]);

    const [err, setErr] = useState(null);

    const [errMsg, setErrMsg] = useState(null);

    const [deliveryDays, setDeliveryDays] = useState([]);

    const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(null);

    const [paymentId, setPaymentId] = useState(null);

    const [deliveryFee, setDeliveryFee] = useState(0);

    const [deliveryType, setDeliveryType] = useState(null);

    const [loader, setLoader] = useState(false);
    

    // const {deliveryErrors} = useSelector((state) => state.delivery_options);
    const { verifiedStores, errors, verifiedStoresStatus } = useSelector((state) => state.store);

    const { items, outofStockStatus, outofStockData } = useSelector((state) => state.cart);

    const { payment, paymentStatus } = useSelector((state) => state.payment);

    const { wallet } = useSelector((state) => state.wallet);


    const goBack = () => props.navigation.goBack();

    const returnToCart = () => {

        closeOutofStockBottomSheet();

        goBack();

    }


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const waitTimePlaceOrderErr = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

            dispatch(cleanPlaceOrder())

        });

    }, []);


    useEffect(() => {

        dispatch(getVerifiedStore());

        dispatch(listPaymentMethod());

        dispatch(getWallet());

        setTimeout(() => {

            setLoading(false);

        }, 2000);

    }, []);

    useEffect(() => {

        if (verifiedStoresStatus === "failed") {

            setErr(errors.msg);

        } else {

            setErr(null);

        }

    }, [verifiedStoresStatus]);


    useEffect(() => {
        if (outofStockStatus === "failed") {

            setErr(errors.msg);

        } else {

            setErr(null);
            
        }

    }, [outofStockStatus]);


    const sendOrder = () => {

        setLoader(true);

        const details = {
            store_id: storeAddress.id, 
            payment_method_id: paymentId.id,
            delivery_date: selectedDeliveryDate?.id, 
            delivery_type: deliveryType
        };
      

        dispatch(placeOrder(details))
            .unwrap()
            .then(suc => {

                setLoader(false);

                dispatch(cleanList());

               dispatch(listCart(1));

                props.navigation.navigate("CheckOutSuccess");


            })
            .catch(err => {

                setLoader(false);

                setErrMsg(err.msg);

                waitTimePlaceOrderErr();

                if(err.status == 402){

                    OutofStockBottomSheet.current?.present();

                    dispatch(getOutOfStockCart());

                }
            })
    };


    const closeOutofStockBottomSheet = () => {

        OutofStockBottomSheet.current?.close();

        dispatch(cleanOutOfStock());

    };


    const showDropDownBottomSheet = () => {

        bottomSheetCode.current?.present();

        if (verifiedStoresStatus !== "success") {

            dispatch(getVerifiedStore());

        }

    };

    const showDateDropDownBottomSheet = () => {

        dateBottomSheet.current?.present();

    };


    const closeDateDropDownBottomSheet = async () => {

        dateBottomSheet.current?.close();

    };


    const closeDropDownBottomSheet = () => {

        if (verifiedStoresStatus === "failed") {

            dispatch(cleanupVerifiedStore());

        }

        bottomSheetCode.current?.close();
    };


    const clearOutofStock = () => {

        closeOutofStockBottomSheet();

        setLoader(true);

        dispatch(removeOutOfStockCart())
        .unwrap()
        .then(() => {

            dispatch(cleanRemoveOutOfStock());

            dispatch(cleanList());

            dispatch(listCart(1))
            .unwrap()
            .then(() => {
                setLoader(false);

            })
            .catch(err => {
                setLoader(false);

            })

        })
        .catch(err => {
            setErrMsg(err.msg);

            setLoader(false);

            dispatch(cleanRemoveOutOfStock());
        })
    }

    const getDelivery = (id) => {

        dispatch(getDeliveryOptions(id))
            .unwrap()
            .then((suc) => {
                setDelivery(suc)
                setDisplayInfo(suc)
                bottomSheetCode.current?.close();
                console.log("the delivery... changed", suc.days_to_delivery)

                
            })
            .catch((err) => {
                // setErrMsg(err.msg)

                console.log("this is the error", err)
            })

    };

    const changeSelect = (id) => {

        if (id == "1" && storeAddress.id ) {

            setSelect(id);

        }
        else if (id == "2" && select === "3") {

            setSelect(id);

        }

    };



    return (
        loading ?
            <LoadingPlaceHolder />
            :

            <View style={styles.container}>

                <LoginHeader
                    onPress={goBack}
                    name="arrow-back-ios"
                    color="rgba(118, 118, 128, 1)"
                >
                    <View style={styles.navHeader}>
                        <Text style={styles.navTitle}>Checkout</Text>
                    </View>

                </LoginHeader>


                <View style={styles.miniContainer}>
                    <View style={styles.optionView}>

                        <View style={styles.optionTitleView}>
                            {select !== "1" && <Icon name="check-circle" size={20} color="rgba(51, 83, 203, 1)" />}

                            <TouchableOpacity
                                style={[select == "1" ? styles.optionTitleInnnerView : styles.optionTitleInnnerInactiveView]}
                                onPress={() => changeSelect("1")}>
                                <Text style={[select == "1" ? styles.optionActiveTitle : styles.optionTitle]}>Delivery</Text>
                            </TouchableOpacity>

                            <View style={styles.optionTitleIconView}>
                                <Icon name="arrow-forward-ios" color={select !== "1" ? "rgba(51, 83, 203, 1)" : "rgba(118, 118, 128, 1)"} />
                            </View>

                        </View>

                        <View style={styles.optionTitleView}>

                            {select == "3" && <Icon name="check-circle" size={20} color="rgba(51, 83, 203, 1)" />}

                            <TouchableOpacity
                                style={[select == "2" ? styles.optionTitleInnnerView : styles.optionTitleInnnerInactiveView]}
                                onPress={() => changeSelect("2")}>
                                <Text style={[select == "2" ? styles.optionActiveTitle : styles.optionTitle]}>Payment</Text>
                            </TouchableOpacity>

                            <View style={styles.optionTitleIconView}>
                                <Icon name="arrow-forward-ios" style={styles.optionIcon} color={select == "3" ? "rgba(51, 83, 203, 1)" : "rgba(118, 118, 128, 1)"} />
                            </View>
                        </View >

                        <View style={select == "3" && styles.optionTitleInnnerView}>
                            <Text style={[select == "3" ? styles.optionActiveTitle : styles.optionTitle]}>Confirmation</Text>
                        </View>
                    </View>

                    {errMsg && <View style={styles.errView} >
                        <Icon name="error-outline" size={22} color="#fff" />
                        <Text style={styles.errText}>{errMsg}</Text>
                    </View>}

                    {select == "1" ?

                        <Delivery
                            showBottomSheet={showDropDownBottomSheet}
                            // showDateBottomSheet={showDateDropDownBottomSheet}
                            storeAddress={storeAddress}
                            delivery={delivery}
                            deliveryDays={setDeliveryDays}
                            deliveryDate={selectedDeliveryDate?.id}
                            select={setSelect}
                            deliveryFee={setDeliveryFee}
                            deliveryType={deliveryType}
                            setDeliveryType={setDeliveryType}
                            setDeliveryDate={setSelectedDeliveryDate}
                        />
                        :
                        select == "2"
                            ?
                            <Payment
                                payment={payment}
                                status={paymentStatus}
                                setId={setPaymentId}
                                item={paymentId}
                                select={setSelect}
                                wallet={wallet}
                            />
                            :
                            <Confirmation
                                storeAddress={storeAddress}
                                payment={paymentId.display_name}
                                item={items}
                                deliveryFee={deliveryFee}
                                placeOrder={sendOrder}
                                select={setSelect}
                            />

                    }

                </View>

                        <BottomSheet
                            bottomSheetRef={bottomSheetCode}
                            closeBottomSheet={closeDropDownBottomSheet}
                            address={setStoreAddress}
                            codeValue={storeAddress?.id}
                            data={verifiedStores}
                            name="Select Delivery Store"
                            status={verifiedStoresStatus}
                            err={err}
                            deliveryOption={getDelivery}
                        />

                        {/* <DateBottomSheet
                            bottomSheetRefDate={dateBottomSheet}
                            data={deliveryDays}
                            name="Select date"
                            closeBottomSheet={closeDateDropDownBottomSheet}
                            deliveryDate={setSelectedDeliveryDate}
                            codeValue={selectedDeliveryDate?.id}

                        /> */}

                        <OutOfStockBottomSheet
                        bottomSheetRef={OutofStockBottomSheet}
                        data={outofStockData}
                        status={outofStockStatus}
                        err={err}
                        closeBottomSheet={closeOutofStockBottomSheet}
                        returnToCart={returnToCart}
                        clearOutofStock={clearOutofStock}
                        />


               

                <Loader isVisible={loader} />

            </View>
    )
};

export default CheckOut;