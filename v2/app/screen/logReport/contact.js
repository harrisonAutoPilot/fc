import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Linking,
  TextInput,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

import ContactPlaceholder from './callPlaceholder'


// import EmptyOrder from "./emptyOrder";
import {OrderHeader, OrderBottomSheet} from '@Component2';


const Contact = props => {
  const dispatch = useDispatch();
  const [objectValues, setObjectValues] = useState();
  const {analyticsData} = useSelector(state => state.auth);
  const [duration, setDuration] = useState('last_6_months');
  const [contact, setContact] = useState([])
  const [contactLoading, setContactLoading] = useState(true)
  const [durationName, setDurationName] = useState('Last 6 Months');
  const bottomSheet = useRef();

 

  const returnBack = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    setContactLoading(true)
    getContact()
}, []);


const getContact = () =>{
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'Remedial Agent app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
})
    .then((res) => {
        console.log('Permission: ', res);
        Contacts.getAll()
        
            .then((contacts) => {
              setContactLoading(false)
                setContact(contacts)
            })
            .catch((e) => {
                console.log(e);
            });
    })
    .catch((error) => {
        console.error('Permission error: ', error);
    });
}

const sendCall =(item)=>{
Linking.openURL(`tel:${item}`)
}
const sendMessage =(item)=>{
  const operator = Platform.select({ios: '&', android: '?'});
  Linking.openURL(`sms:${operator}`);
}

const sendChat =(item)=>{
    let URL = 'whatsapp://send?text=' + 'Hello' + `&phone='234'${item}`;

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  

}



 ContactList = ({item}) => (
    <View style={styles.contactCard} >
    <View style={styles.contactLeft} key={item.recordID}>
     <View style={styles.letterCover}>
     {typeof(item?.givenName) === 'number' ?
            <Icon name="account-circle" color="#fff" size={45} />
            :
         <Text style={styles.letter}>{item?.givenName?.charAt(0)}</Text>
        }
     </View>
    <View>
      <Text style={styles.contactName}>{item.displayName}</Text>
      <Text style={styles.contactNumber}>{item.phoneNumbers[0]?.number}</Text>
    </View>
    </View>

    <View style={styles.contactRight}>
   <TouchableOpacity onPress={() => sendMessage(item.phoneNumbers[0]?.number)}>
   <Icon name='message-text-outline' color="rgba(118, 118, 128, 1)" size={20} />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => sendCall(item.phoneNumbers[0]?.number)}>
   <Icon name='phone-outline' color="rgba(0, 155, 210, 1)" size={20} />
   </TouchableOpacity>
    <TouchableOpacity onPress={() => sendChat(item.phoneNumbers[0]?.number)}>
    <Icon name='whatsapp' color="rgba(41, 204, 106, 1)" size={20} />
    </TouchableOpacity>
    </View>
   </View>
  );


 
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
    <View style={styles.body}>
      <StatusBar hidden />
      <OrderHeader title="Contacts" onPress={returnBack} />
      <View style={styles.container}>
  

    { contactLoading === true ?  
    <ContactPlaceholder />
        :
      <FlatList
        data={contact}
        keyExtractor={item => item.id}
        renderItem={ContactList}
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={CatelogueCardPlaceholder}
        ListFooterComponent={<View style={{ height: 40 }} />}
       
             
          />
        }
     </View>
    </View>
    </SafeAreaView>
  );
};

export default Contact;
