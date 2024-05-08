import React from "react";
import { View, StatusBar, SafeAreaView,Image, TouchableOpacity } from "react-native";
import MIcon from "react-native-vector-icons/MaterialIcons";

import style from "./style";


export default LoginHeaderTC = ({ onPress, children, name, color }) => {

    return (
        <SafeAreaView>

            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

            <View style={style.loginInnerContainer}>
             
                <TouchableOpacity style={style.loginIconContainer} onPress={onPress}>
                  <Image source={require("@Assets2/image/arrow_b.png")} style={style.backArrow2} />
                </TouchableOpacity>
                
            <View style={{width: "84%"}}>
                {children}
            </View>
            </View>
        </SafeAreaView>
    )
}