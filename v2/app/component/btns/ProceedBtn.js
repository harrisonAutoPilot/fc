import React from "react";
import { Text, TouchableOpacity,Image } from "react-native";

import styles from "./style"

const ProceedBtn = ({ title, onPress, backgroundColor, color, disabled, disabledBackgroundColor }) => {
    
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.onProceedBtnContainer, { backgroundColor: disabled ? disabledBackgroundColor: backgroundColor }]}>
            <Text style={[styles.continueTitle, {color}]}>{title}</Text>
            <Image 
            source={require("@Assets2/image/right_white_arrow.png")}
            style={styles.rightArrowImg}
            />
        </TouchableOpacity>
    )
};

export default ProceedBtn;

