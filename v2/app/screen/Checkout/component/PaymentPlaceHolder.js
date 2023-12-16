import React from "react";
import { View } from "react-native";

import styles from "../style";

const PaymentPlaceHolder = () => {

    return (

        <View>
            <View style={styles.paymentView}>
                <View style={styles.paymentPH} />
                <View style={styles.paymentPH2} />
            </View>

            <View style={styles.paymentView}>
                <View style={styles.paymentPH} />
                <View style={styles.paymentPH2} />
            </View>

            <View style={styles.paymentView}>
                <View style={styles.paymentPH} />
                <View style={styles.paymentPH2} />
            </View>
        </View>
    )
};

export default PaymentPlaceHolder;

