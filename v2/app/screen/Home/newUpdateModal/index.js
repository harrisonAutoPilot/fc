import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import styles from './style';

const NewUpdateModal = props => {
  const closeModal = () => {
    props.returnBack();
  };


  const CardList = ({
    icon,
    title,
    titleText,
  }) => (
    <View style={styles.inner}>
    <Icon name={icon} size={24} color="rgba(28, 27, 31, 1)" />
    <View style={styles.leftCover}>
      <Text style={styles.storeCaption}>{title}</Text>
      <Text style={styles.storeCaptionText}>
      {titleText}
      </Text>
    </View>
  </View>
  );



  return (
    <Modal
      isVisible={props.checkUpdateModal}
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
      <Pressable
        style={styles.outsideModal}
        onPress={event => {
          if (event.target == event.currentTarget) {
            setShowPaymentOption(false);
          }
        }}>
        <View style={styles.container}>
          <View>
          <View style={styles.topContainer}>
            <View style={styles.topInner}>
              <Image
                source={require('@Assets2/image/google.png')}
                style={styles.googleImg}
              />
             
            </View>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('@Assets2/image/trailing-icon.png')}
                style={styles.logoutImg}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headerText}>Update available</Text>
            <Text style={styles.smText}>Remedial Agent App recommend that you update to the latest version. you can keep using this version and update later.</Text>
          </View>

         <View style={styles.middleContainer}>
          <View>
          <Image
            source={require('@Assets2/image/ic_launcher.png')}
            style={styles.iconImg}
          />
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.appName}>Remedial Agent</Text>
              <View style={styles.levelOneFlex}>
                 <View style={styles.levelTwoFlex}>
                    <Text style={styles.rateText}>5.6 </Text>
                    <Icon name="star" size={12} color="#1B1B1F" style={styles.starText} />
                  </View>
                  <View style={styles.levelTwoFlex}>
                    <Text style={styles.rateText}>   31 MB </Text>
                 
                  </View>
             </View>
          </View>
         </View>
          </View>
         


          <TouchableOpacity
              style={styles.confirmCover}
              onPress={props.proceed}>
              <Text style={styles.confirmText}>Update</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default NewUpdateModal;
