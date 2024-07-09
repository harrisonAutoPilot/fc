import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  PermissionsAndroid,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { OnboardinBtn } from "@Component2";
import Config from "react-native-config";
import styles from "./style";
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Acon from "react-native-vector-icons/Feather";
import DatePicker from "react-native-date-picker";
import Loader from "@Screen2/loader";
import LottieView from "lottie-react-native";
import {
  cleanUpdateAppointment
} from "@Store2/Auth";
import {
  getConsel,
  getMessages,
  updateAppointment,
} from "@Request2/Auth";

import BottomSheet from "react-native-gesture-bottom-sheet";

const WithdrawalList = (props) => {
  const dispatch = useDispatch();
  // const item = props.item;
  const {
    user,
    conselDataMore,
    updateAppointmentErrors,
    updateAppointmentData,
    updateAppointmentStatus,
    messageData,
    messageErrors,
    } = useSelector((state) => state.auth);
    const [errMsg, setErrMsg] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [successUpdate, setSuccessUpdate] = useState(false);
  const [final, setFinal] = useState(false);
  const [toDate, setToDate] = useState("");
  const [displayFrom, setDisplayFrom] = useState(true);
  const [displayTo, setDisplayTo] = useState(false);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [onPick, setOnPick] = useState(false);


  useEffect(()=> {
    dispatch(cleanUpdateAppointment())

    },[])




  const sheetHeight = Platform.OS === "android" ? 250 : 270;

  return (
    <BottomSheet
      ref={props.bottomSheetWithdrawalList}
      height={sheetHeight}
      radius={10}
      sheetBackgroundColor="#fff"
      hasDraggableIcon={true}
    >
      <ScrollView style={{ flex: 1 }}>
        <View  style={styles.titleCover}>
          <Text style={styles.title}>Counsellor Withdrawal</Text>
        </View>

        <View style={styles.middleCover}>
        <TouchableOpacity>
          <View style={styles.itemCover}>
          <Image
          source={require("@Assets2/image/flag.png")}
          style={styles.flagImg}
         />
            <Text style={styles.itemTitle}>Local Bank</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemCover}>
          <Image
          source={require("@Assets2/image/usa.webp")}
          style={styles.flagImg}
         />
            <Text style={styles.itemTitle}>International Bank</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.itemCover}>
          <Image
          source={require("@Assets2/image/bitcoin.png")}
          style={styles.flagImg}
         />
            <Text style={styles.itemTitle}>Crypto Wallet</Text>
          </View>
        </TouchableOpacity>

        </View>
       
       </ScrollView>
       {/* <View style={styles.footerCover}>
          <Text style={styles.footerText}>Powered By</Text>
          <Image
          source={require("@Assets2/image/toronet.34ed5448.png")}
          style={styles.toroImg}
         />
          
        </View> */}
      {errMsg ?
      <View style={styles.errView} >
          <Icon name="alert-circle-outline" size={22} color="#BA1A1A" />
          <Text style={styles.errText}>{errMsg}</Text>
      </View>
          :
          null
        } 
   
    </BottomSheet>
  );
};

export default WithdrawalList;
