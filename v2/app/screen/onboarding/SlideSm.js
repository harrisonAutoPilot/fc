import React from "react";
import { View, ImageBackground, Text, LogBox, Image, StatusBar } from "react-native";
import styles from "./style";


const SlideSm = ({ item }) => {


    return (
        <View style={styles.coverSm} key={item.key}>
            <View style={styles.imgCoverSm}>
            <Image source={item.img} style={styles.imgSizeSm} />
            </View>
         
        </View>
  


    );
};

export default SlideSm;
