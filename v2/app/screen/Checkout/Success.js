import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, Image, StatusBar, BackHandler } from "react-native";
import { useDispatch, useSelector } from "react-redux";


import styles from "./style";
import { OnboardinBtn } from "@Component2";
import { getOrders } from "@Request2/order";

const CheckOutSuccesScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const { placeOrderStatus } = useSelector((state) => state.order);


    const goToOrder = () => {

        navigation.navigate("Order");

    };

    const goToHome = () => {

        navigation.navigate("Home");

    };


    useEffect(() => {

        dispatch(getOrders());

        BackHandler.addEventListener("hardwareBackPress", goToOrder);

        return () => {

            BackHandler.removeEventListener('hardwareBackPress', goToOrder);

        }

    }, []);

    useLayoutEffect(() => {

        if (placeOrderStatus == "idle") {

            navigation.navigate("Home");

        }

    }, [placeOrderStatus])


    return (
        <View style={styles.successContainer}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <View style={styles.successFlexUp}>

                <View style={styles.successImageView}>
                    <Image source={require("@Assets2/image/success_confetti.png")} />
                </View>

            </View>

            <View style={styles.successFlexMiddle}>
                <Text style={styles.successTitle}>Order Confirmed!!</Text>
                <Text style={styles.successDesc}>See summary of order below</Text>
            </View>

            <View style={styles.successFlexDown}>
                <OnboardinBtn
                    backgroundColor="#fff"
                    color="#3353CB"
                    title="View Order Details"
                    onPress={goToOrder}
                    borderColor="#3353CB"
                    borderWidth={1}
                />

                <View style={styles.successBtn}>

                    <OnboardinBtn
                        backgroundColor="#3353CB"
                        color="#fff"
                        title="Done"
                        onPress={goToHome}
                    />

                </View>
            </View>


        </View>
    )
};

export default CheckOutSuccesScreen;