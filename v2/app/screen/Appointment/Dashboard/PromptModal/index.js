import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Pressable } from "react-native";

import Modal from "react-native-modal";
import styles from "./style";


const PromptModal = (props) => {

  const closeModal = () => {
    props.returnBack();

  }



  return (
    <Modal
      isVisible={props.promptModal}
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
          source={require("@Assets2/image/flat-complain-concept-illustration_23-2148952082.png")}
          style={styles.logoutImg}
          />
     </View>
     <View style={styles.captionMiddle}>
     <Text style={styles.captionText}>Important Notice</Text>
     </View>
          <View style={styles.captionCover}>
          
            <Text style={styles.captionTextSm}>1. This call is strictly a Faceless call ensure not to reveal your identity eg name, location to ensure counselee privacy.</Text>

            <Text style={styles.captionTextSm}>2. Kindly note that counseling sessions should not be recorded without both parties notice.</Text>

            <Text style={styles.captionTextSm}>3.  We have zero tolerance for character defamation. This is a safe space to express Feelings & Experiences to help deal with life challenges.</Text>

          </View>  
          <View style={styles.optionCover}>
            
            <TouchableOpacity style={styles.confirmCover} onPress={props.returnBack}>
               <Text style={styles.confirmText}>OK, GOT IT</Text>
           </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default PromptModal