import React, { useEffect } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";

import { OnboardinBtn} from "@Component2";
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import { cleanup } from "@Store2/Customer";
import { getCustomerOrders } from "@Request2/CustomerOrder";
import { getCustomers } from "@Request2/Customer";
import { cleanOrder } from "@Store2/CustomerOrder";


const CustomerSuccess = (props) => {

  const dispatch = useDispatch();

  



  const goBack = () => {
    dispatch(cleanup());
    dispatch(cleanOrder())
    dispatch(getCustomerOrders(1));
    dispatch(getCustomers());
    props.navigation.navigate("CustomersDashboard")
  };


  const handleBackButton = () => {
    if (props.navigation.isFocused()) {
      goBack()
      return true;
    }
  };


  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      dispatch(cleanup())
      dispatch(cleanOrder())
      dispatch(getCustomerOrders(1));
      dispatch(getCustomers());
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    }
  }, []);
  

  return (
   <View style={styles.container}>
    <View style={styles.mainCover}>
       <LottieView
            source={require('@Assets2/image/animation_lk72nnsj.json')} autoPlay loop
            style={styles.successImg}
             />
     <View style={styles.middleContainer}>
        <View style={styles.afterTop}>
          <Text style={styles.topText}>Success!!</Text>
          <Text style={styles.downText}>Customer has been registered successfully.</Text>
        </View>

        <View style={styles.sucBtnCover}>
          <OnboardinBtn
              title="Done"
              backgroundColor="#3353CB"
              color="#fff"
              onPress={goBack}
            />
          </View>
      </View>
     
     
      </View>


          
   </View> 
  )
};

export default CustomerSuccess;