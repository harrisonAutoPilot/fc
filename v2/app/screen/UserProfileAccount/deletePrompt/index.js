import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";
import styles from "./style";


const DeletePrompt = (props) => {
  const [showProceed, setShowProceed] = useState(false);

  const closeModal = () => {
    props.returnBack();

  }

const proceed = () =>{
  props.proceed();
  setTimeout(() => {
    setShowProceed(true)
  }, 3000);
  

}

  return (
    <Modal
      isVisible={props.deleteModal}
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
      {showProceed ?

   
        <LottieView
          source={require("../../../asset/image/firstDelete3.json")}
          autoPlay
          loop
          style={styles.successImg1}
        />

        :

        <LottieView
          source={require("../../../asset/image/firstDelete1.json")}
          autoPlay
          loop
          style={styles.successImg}
        />

          }
                    
   
     </View>
          <View style={styles.captionCover}>
          
            <Text style={styles.captionTextSm}>Are you sure you want to delete the selected file ?</Text>
          </View>  
          <View style={styles.optionCover}>
            <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
                <Text style={styles.cancelText}>Cancel</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.confirmCover} onPress={proceed}>
               <Text style={styles.confirmText}>Delete</Text>
           </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
};

export default DeletePrompt