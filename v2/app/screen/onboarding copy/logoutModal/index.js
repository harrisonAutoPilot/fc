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
     <View style={styles.logoutCover}>
        <Image 
          source={require("@Assets2/image/mee.jpg")}
          style={styles.logoutImg}
          />
     </View>
          <View style={styles.captionCover}>
            <Text style={styles.captionText}>Welcome</Text>
            <Text style={styles.smText}>A Safe space to express Feelings & Experiences to help deal with life challenges </Text>
          </View>  
          <TouchableOpacity style={styles.confirmCover} onPress={props.signIn}>
               <Text style={styles.confirmText}>Sign In</Text>
           </TouchableOpacity>
            <TouchableOpacity style={styles.cancelBtn} onPress={props.create}>
                <Text style={styles.cancelText}>Create a Faceless Account</Text>
             </TouchableOpacity>
           
       
        </View>
      </Pressable>
    </Modal>
  )
};

export default LogoutModal