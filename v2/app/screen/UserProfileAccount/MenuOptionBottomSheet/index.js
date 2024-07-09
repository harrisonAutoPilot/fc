import React, { useState,memo, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";

import Modal from "react-native-modal";
import styles from "./style";
import Icon from "react-native-vector-icons/Feather";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import {useSelector, useDispatch} from 'react-redux';
import {cleanDeleteFeed} from '@Store2/Feed';
import { deleteFeedMedia} from "@Request2/Feed";



const MenuOptionBottomSheet = (props) => {
  const dispatch = useDispatch();
  const {deleteFeedStatus} = useSelector((state) => state.feed);
  const item = props?.data;

  const closeModal = () => {
    props.returnBack();
  };

  const deleteMedia = () => {

    // dispatch(deleteFeedMedia(item.id))
    props.returnBack();
    props.callDelete()
  
  };

  const downoadMedia = () => {
    props.returnBack();
  };

  const shareMedia = () => {

    props.returnBack();
  };

  useEffect(() => {

    if (deleteFeedStatus === "failed") {
      dispatch(cleanDeleteFeed())
   
    
    } else if (deleteFeedStatus === "success") {
      
        dispatch(cleanDeleteFeed())
      
        props.returnBack();
   
    
    }
    
    }, [deleteFeedStatus]);



  return (
    <Modal
      isVisible={props.menuOption}
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
      coverScreen={true}
    >
      <Pressable
        style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            // setShowPaymentOption(false);
          }
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={shareMedia}>
            <View style={styles.menuCard}>
              <View>
                <Icon name="share" size={20} color="#000" />
              </View>
              <View>
                <Text style={styles.menuText}>Share</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={downoadMedia}>
            <View style={styles.menuCard}>
              <View>
                <Icon name="download" size={20} color="#000" />
              </View>
              <View>
                <Text style={styles.menuText}>Download</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteMedia}>
            <View style={styles.menuCard}>
              <View>
                <Icon name="trash" size={20} color="#000" />
              </View>
              <View>
                <Text style={styles.menuText}>Delete</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default memo(MenuOptionBottomSheet);
