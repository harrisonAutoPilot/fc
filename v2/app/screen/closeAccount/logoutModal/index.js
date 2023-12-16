import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Pressable } from "react-native";

import Modal from "react-native-modal";
import styles from "./style";


const LogoutModal = (props) => {

  const closeModal = () => {
    props.returnBack();

  }



  return (
    <Modal
      isVisible={props.logoutModal}
      onBackdropPress={closeModal}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      backdropColor="rgba(52, 52, 52, 0.8)"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowPaymentOption(false);
          }
        }} >
       <View style={styles.container}>
    
          <View style={styles.captionCover}>
            <Text style={styles.captionText}>Deleting account will do the following</Text>
            <Text style={styles.captionTextSm}>1. Log you out on all devices</Text>
            <Text style={styles.captionTextSm}>2. Delete all of your account information</Text>
          </View>  
          <View style={styles.optionCover}>
            <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.cancelText}>Cancel</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.confirmCover} onPress={props.proceed}>
               <Text style={styles.confirmText}>Close Account</Text>
           </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default LogoutModal