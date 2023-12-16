import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "../style";


const LoadingPlaceHolder = () => {
    return (
        <SafeAreaView>
        <View style={styles.mainPH}>
            <View style={styles.headingViewPH} />

            <View style={styles.secondHPH}>
                <View style={styles.secondHVPH} />
                <View style={styles.secondHVPH} />
                <View style={styles.secondHVPH} />
            </View>

            <View style={styles.thirdPH} />

            <View style={styles.fourthPH} />

            <View style={styles.fifthPH} />

            <View style={styles.secondHPH}>
                <View style={styles.sixthPH} />
                <View style={styles.sixthPH} />
            </View>

            <View style={styles.lastPH} />

        </View>
        </SafeAreaView>

    )
};

export default LoadingPlaceHolder