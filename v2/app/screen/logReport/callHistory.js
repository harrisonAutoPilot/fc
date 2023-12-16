import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Linking,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import moment from 'moment'
import ContactPlaceholder from './callPlaceholder'



// import EmptyOrder from "./emptyOrder";
import {OrderHeader} from '@Component2';

const CallHistory = props => {

  const items = props?.route?.params?.items


  const returnBack = () => {
    props.navigation.goBack();
  };

  const viewDetails =(item)=>{
   props.navigation.navigate("CallDetails", {items:item})
    }




  const ContactList = ({ item,index }) => {
    return (
      <TouchableOpacity key={item?.recordID}  onPress={() =>viewDetails(item)}>
    <View style={styles.contactCard} >
    <View style={styles.contactLeft} >
     <View style={styles.letterCoverBig}>
      { item?.type === 'OUTGOING' ?
          <View style={styles.miniContact}>
            <Icon name='phone-in-talk' color="#fff" size={10} />
          </View>
          : item?.type ==='INCOMING' ?
          <View style={styles.miniContact}>
          <Icon name='phone-missed' color="#fff" size={10} />
        </View>
          :
          <View style={styles.miniContact}>
          <Icon name='phone-off-outline' color="#fff" size={10} />
       </View>
       }
          {
             item?.name == "" || item?.name == null ?
             <Icon name="account-circle" color="#fff" size={45} />
             :
             <Text style={styles.letter}>{item?.name?.charAt(0)}</Text>
          }
       
     </View>
    <View style={styles.downCover}>
      {
        item?.name == "" || item?.name == null ?
        <Text style={styles.contactName}>{item?.phoneNumber}</Text>
        :
        <Text style={styles.contactName}>{item?.name}</Text>
      }
     
      <View style={styles.downFlex}>
       <Icon name='phone-outline' color="rgba(0, 155, 210, 1)" size={15} />
       <Text style={styles.contactNumber}>Phone</Text>
      </View>
    </View>
    </View>

    <View style={styles.contactRight}>
      <View>
        <Text style={styles.smDate}>{moment.unix(item?.timestamp / 1000).format("D MMMM")}</Text>
        <Text style={styles.smDuration}>{item?.duration} sec</Text>
      </View>
    </View>
   </View>
   </TouchableOpacity>
    )
  };



 
  return (
    <View style={styles.body}>
      <StatusBar hidden />
      <OrderHeader title="Call History" onPress={returnBack} />
      <View style={styles.container}>
  
 
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={ContactList}
        ListFooterComponent={<View style={{ height: 40 }} />}
        initialNumToRender={8}
        showsVerticalScrollIndicator={false}
        bounces={false}
             
          />
    
     </View>
    </View>
  );
};

export default CallHistory;
