import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, ScrollView,Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
 import styles from "./style";
import {useForm, Controller} from 'react-hook-form'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const Input = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);

    

    const goBack = () => props.navigation.navigate("Home");


    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

    const getRandomColor = (id) => {
        let ids = parseInt(id)
        let shade;
        if (ids % 2 === 0) {
            shade = "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
        } else {
            shade = `rgb(255, ${(Math.floor(Math.random() * 150))}, 0)`;
        }
        return shade
    }
 
    return (
        <View style={styles.container}>
           
      <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />
        </View>
    )
};

export default Input;