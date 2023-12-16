import React from "react";
import { View, ImageBackground, Text, LogBox, Image, StatusBar } from "react-native";
import styles from "./style";


const Slide = ({ item }) => {


    return (
        <View style={styles.cover} key={item.key}>
            <View style={styles.imgCover}>
            <Image source={item.img} style={styles.imgSize} />
            </View>
            <View style={styles.textCover}>
              <Text style={styles.slideText}>{item.desc}</Text>
            </View>
        </View>
  


    );
};

export default Slide;
