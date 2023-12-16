import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, Linking, Image, TouchableOpacity, Alert, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { TransactionHeader } from "@Component2";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getAgentManager} from '@Request2/Agent';
import styles from './style';



const ContactManager = (props) => {
  const { managerStatus, manager } = useSelector(state => state.agent);
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(getAgentManager())

  }, [])


  const mobileCall = () => Linking.openURL(`tel:${manager?.manager?.phone}`);

  const sendEmail = () => {

    Linking.openURL(`mailto:${manager?.manager?.email}`);

  }


  

  const ContactList = ({ item, title, desc, icon, cardStyle, onPress }) => {
    return (
      <TouchableOpacity  onPress={onPress}>
        <View style={cardStyle}>
          <View style={styles.leftCover}>
            <View style={styles.imgCover}>
              <Icon name={icon} color="" size={28} />
            </View>
            <View style={styles.contentCover}>
              <Text style={styles.bgText}>{title}</Text>
              <Text style={styles.smText}>{desc}</Text>
            </View>
          </View>
         
        </View>
      </TouchableOpacity>
    )
  }

  const returnBack = () => {

    props.navigation.goBack();

  };


  return (
    <View style={styles.container}>

      <TransactionHeader title="Line Manager" onPress={returnBack} />

      <View style={styles.topContainer}>
        <View style={styles.managerImgCover}>
        <Image
              source={require("@Assets2/image/managerImg.png")}
              style={styles.managerImg}
            />
        </View>
        <Text style={styles.managerName}>{manager?.manager ? manager?.manager?.name : "Loading"}</Text>
      </View>

     <View style={styles.innerContainer}>
     <ContactList
       onPress ={mobileCall}
       title="Phone"
       desc={manager?.manager ? manager?.manager?.phone : "Loading"}
       icon="phone-outline"
       cardStyle={styles.card}
      />

     <ContactList
       onPress ={sendEmail}
       title="Email"
       desc={manager?.manager ? manager?.manager?.email : "Loading"}
       icon="email-outline"
       cardStyle={styles.cardNoLine}
      />
     </View>


    </View>
  );
};

export default ContactManager;
