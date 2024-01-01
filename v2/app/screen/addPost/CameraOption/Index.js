import React, {useState, useCallback} from 'react';
import {View, Text,Pressable,Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fcon from 'react-native-vector-icons/Feather';
import Zcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { copyFileAssets } from 'react-native-fs';

const CameraOption = props => {
  const [showRetrieve, setShowRetrieve] = useState(false);




  const CardList = useCallback(({
    title,
    onPress,
  }) => (
    <TouchableOpacity onPress={onPress} >
    <View style={styles.cardCover}>
      <View style={styles.circleCover}>
         <Image
            source={require('@Assets2/image/picture.png')}
            style={styles.sgImg}
          />
      </View>
      <Text style={styles.cardTextSm}>{title}</Text>
    </View>
    </TouchableOpacity>
  ), []);


  const CardListBottom = useCallback(({
    title,
    onPress,
  }) => (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.cardCoverSm}>
      <View style={styles.circleCoverSm}>
        <Image
            source={require('@Assets2/image/camera.png')}
            style={styles.sgImg}
          />
      </View>
      <Text style={styles.cardTextSm}>{title}</Text>
    </View>
    </TouchableOpacity>
  ), []);


  return (
 
    <Modal
    isVisible={props.bottomSheet}
    onBackdropPress={props.returnBack}
    onSwipeComplete={() => setShowRetrieve(false)}
    swipeDirection="left"
    animationIn="slideInUp"
    animationInTiming={300}
    animationOut="slideOutDown"
    animationOutTiming={300}
    useNativeDriver={false}
    hasBackdrop={false}
    // backdropColor="rgba(194, 197, 221, 3)"
    backdropOpacity={0.7}
    coverScreen={true}>
    <Pressable
      style={styles.outsideModal}
      onPress={event => {
        if (event.target == event.currentTarget) {
          setShowRetrieve(false);
        }
      }}>
      <View style={styles.body5}>
        <View style={styles.flexCam}>
        <CardList 
            title ="Upload Photo"
            onPress={props.upload}
          />
        <CardListBottom 
            title ="Take a picture"
            onPress={props.camera}
          />    
        </View>
      </View>
      <View style={styles.closeCover}>
        <TouchableOpacity onPress={props.returnBack}>
          <Fcon name="x" size={15} color="rgba(186, 26, 26, 1)" />
        </TouchableOpacity>
      </View>
    </Pressable>
  </Modal>
  );
};

export default CameraOption;
