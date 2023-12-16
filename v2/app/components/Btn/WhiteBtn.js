import { useLinkProps } from "@react-navigation/native";
import React from "react";

import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";


const WhiteBtn = (props) => {
  return (
    <View >
    <TouchableOpacity onPress={props.onPress} style={styles.btnCoverWhite}>
    <Text style={styles.btnTextWhite}>{props.title}</Text>
    </TouchableOpacity>
    </View>
  );
};



export default WhiteBtn;