import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput,
  Linking,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import Toast from 'react-native-toast-message';
import moment from 'moment'
import ContactPlaceholder from './callPlaceholder'
import {callHistoryLog} from "@Request2/Auth"
import disable from "@Helper2/disable";

import {OrderHeader, OnboardinBtn} from '@Component2';

const CallDetails = props => {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [note, setNote] = useState("")
  const items = props?.route?.params?.items

  const { callHistoryStatus,errors, callHistoryData} = useSelector(state => state.auth);

  const returnBack = () => {
    props.navigation.goBack();
  };

  const sendCall =(item)=>{
    Linking.openURL(`tel:${item}`)
    }

console.log("helooooo", items)

if (callHistoryStatus === "success") {

  setSuccessMsg("Call Logged Successfully");

} else if (callHistoryStatus == "failed") {

  setErrMsg(msg);

}

const toastConfig = {
  error: () => (
      <View style={[globalStyles.errMainView, globalStyles.marginTop, { marginHorizontal: 20 }]}>
          <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
      </View>
  ),

  tomatoToast: () => (
      <SuccessMsgViewTwo title={successMsg} />
  )
};


const submit = () =>{
  const data = {
    customer_phone: items.phoneNumber,
    customer_name:items.name,
    // date_time:items?.dateTime?.format('Y-m-d h:iA'),
    duration:items.duration,
    note: note
  };

  dispatch(callHistoryLog(data))
  // console.log("the data", data)
}


 
  return (
    <View style={styles.body}>
     
      <OrderHeader title="Call Details" onPress={returnBack} />
          
      <View style={styles.container}>
  
          <View style={styles.middleStyle}>
                <View style={styles.nameCover}>
                  <Text style={styles.nameText}>{items?.name?.charAt(0)}</Text>
                </View>
                <View style={styles.nameFull}>
                  <Text style={styles.nameTextTitle}>{items?.name}</Text>
                </View>
          </View>

          <View style={styles.midCover}>
              <View style={styles.historyLeft}>
               <View style={styles.roundCover}>
               <Icon name='phone-in-talk' color="rgba(69, 90, 100, 1)" size={16} />
               </View>
               <View>
               <Text style={styles.callType}>{items.type}</Text>
               <View style={styles.downFlex}>
                <Icon name='phone-outline' color="rgba(0, 155, 210, 1)" size={15} />
                <Text style={styles.contactNumber}>Phone</Text>
                </View>
               </View>
              </View>
              <View style={styles.historyRight}>
              <View>
                <Text style={styles.smDate}>{moment.unix(items?.timestamp / 1000).format("D MMMM")}</Text>
                <Text style={styles.smDuration}>{items?.duration} sec</Text>
              </View>
              </View>
          </View>
            <View style={styles.mdLine} />
            <View style={styles.addCover}>
              <Text style={styles.addText}>Add a Note</Text>
              <Text style={styles.addDesc}>Please record the details of your interaction or encounter with this customer.</Text>
            </View>

            <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={note}
              onChangeText={text=>setNote(text)}
              multiline={true}
              numberOfLines={10}
        />
            </View>
           <View style={styles.btnCover}>
           <OnboardinBtn
              title="NEXT"
              onPress={submit}
              backgroundColor="#3353CB"
              color="#fff"
              // disabled={disable(props)}
              disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
               />
           </View>
     </View>
     {errMsg && <View style={styles.toastCover}>
        <View style={styles.errView} >
          <MIcon name="error-outline" size={22} color="#fff" />
          <Text style={styles.errText}>{errMsg}</Text>
        </View>

      </View>}
      {errMsg ? <Toast config={toastConfig} /> : null}
      {successMsg ? <Toast config={toastConfig} /> : null}
    </View>
  );
};

export default CallDetails;
