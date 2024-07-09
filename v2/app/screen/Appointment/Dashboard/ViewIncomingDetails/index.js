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

const ViewIncomingDetails = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
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


  const reschedule = () =>{
    console.log("this is the first reschedule")
    setShowNote(true),
    setOpen(false),
    setOnPick(false),
    setFinal(false);
  }



  const rescheduleFinal = () =>{
    console.log("this is the final reschedule")
    setShowNote(false)
    props?.returnBackProspective()
  }

const initialConfirm = () =>{
  console.log("this is the initial Confirm")
  setOpen(true),
  setShowNote(false)
}

const finalConfirm = () =>{

  console.log("this is the final Confirm" ,item?.id)
  const format1 = "YYYY-MM-DD HH:mm:ss"
  const date1 = moment(item?.set_time, "Y-M-D").format("Y-M-D") +" "+ moment(date).format("HH:mm:ss")
  const new_date = moment(date1).format(format1);

const data = {id:item?.id, set_time:new_date }

  console.log("the data", data)
  

  setOpen(true)

 dispatch(updateAppointment(data))
}

 const middleChangeAppointment = () =>{
  setOpen(true),
  setOnPick(false),
  setFinal(false)
 }



  const confirmTime = () => {
    setOnPick(true);
    console.log(
      "the new time here",
      moment(item?.set_time, "Y-M-D").format("Y-M-D") +
        " " +
        moment(date).format("hh:mm")
    );


  };

  const close  = () =>{
    setTimeout(() => {
      setErrMsg(null);
    }, 4000);
  }

  const closeSuccess  = () =>{
    setTimeout(() => {
      setSuccessUpdate(false)
      props?.returnBackProspective()
    }, 5000);
  }

  

  useEffect(() => {
    if (updateAppointmentStatus == "success") {
        console.log("this is the success")
        
        setSuccessUpdate(true)
        closeSuccess()

    } else if (updateAppointmentStatus == "failed") {

      // refreshView(errors?.msg)
      setErrMsg(updateAppointmentErrors?.msg?.message)
      console.log("this is the error odimnobi", updateAppointmentErrors?.msg?.message)
        close()
    }
  }, [updateAppointmentStatus]);



  const title = `Pick appointment time for @${item?.user?.username}`;

  const sheetHeight = Platform.OS === "android" ? 420 : 450;

  return (
    <BottomSheet
      ref={props.bottomSheetPropspectiveDetails}
      height={sheetHeight}
      radius={1}
      sheetBackgroundColor="#fff"
      hasDraggableIcon={true}
    >
      <ScrollView style={{ flex: 1 }}>

        {!successUpdate ?

        <View style={styles.bottomSheet}>
          <View style={styles.topContainer}>
            <Image
              style={styles.userImg}
              source={{
                uri:
                  item?.counsellor?.avatar?.url !== ""
                    ? `${Config?.IMG_URL}${item?.counsellor?.avatar?.url}`
                    : null,
              }}
              resizeMode="cover"
            />
            {/* <Image  source={item.poster_img} style={styles.userImg} /> */}
            <Image
              style={styles.verImg}
              source={require("@Assets2/image/verified.png")}
            />
            <Text style={styles.userName}>@{item.counsellor?.username}</Text>
          </View>
          <View style={styles.midContainer}>
            <Text style={styles.issues}>
              Appointment Date : {moment(item?.set_time)?.fromNow()}
            </Text>
            <Text style={styles.issues}>
              Request Date : {moment(item?.created_at)?.format("Y-MM-D H:m A")}
            </Text>
            <Text style={styles.intro}>
              Hi. Please i need help with my marriage, we seem to be arguing
              over every little thing. We bearly have sex this days. Thank you
            </Text>
          </View>
          {!onPick ? (
            <>
              {open ? (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <DatePicker
                    modal
                    title={title}
                    open={open}
                    date={date}
                    mode="time"
                    onConfirm={(date) => {
                      // console.log("the time", date)
                      setFinal(true);
                      confirmTime();
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
              ) : (
                <>
                  {showNote ? (
                    <>
                      <View style={styles.midContainer}>
                        <Text style={styles.issueDate}>
                          Please leave a note regarding your next availability
                        </Text>
                      </View>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          placeholder="Add a short note regarding your next availability (optional)"
                          value={note}
                          onChangeText={(text) => setNote(text)}
                          multiline={true}
                          numberOfLines={10}
                        />
                      </View>
                    </>
                  ) : null}
                </>
              )}
            </>
          ) : (
            <View style={styles.dateContainerTime}>
              <Text style={styles.appTimeIntro}>
                The Appointment time is set for{" "}
              </Text>
              <Text style={styles.appTime}>
                {moment(item?.set_time, "Y-M-D").format("ddd, ll") +
                  " " +
                  moment(date).format("hh:mm A")}
              </Text>
              <View style={styles.dateContainer}>
                <TouchableOpacity
                  onPress={() => 
                    middleChangeAppointment()
                    
                  }
                  style={styles.confirmCoverConfirm}
                >
                  <Text style={styles.confirmText}>
                    Change the Appointment Time
                  </Text>
                  <Icon name="calendar" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        :
        <View style={styles.calendarCoverU}>
        <LottieView
          source={require("@Assets2/image/appointment.json")}
          autoPlay
          loop
          // source={require('../../../asset/image/96957-lock.json')}

          style={{marginTop:-40}}
        />
        <Text style={styles.calendarText}>
         Appointment confirmed successfully with @{item?.user?.username}. your faceless counselling has been scheduled
          </Text>
          </View>
        }

      </ScrollView>
      {!successUpdate ?
      <View style={styles.submitBtnContainer}>
        {showNote ? (
          <TouchableOpacity
            onPress={() => rescheduleFinal()}
            style={styles.confirmCoverChangeV3}
          >
            <Text style={styles.confirmText}>Reschedule</Text>
            <Icon name="note" size={16} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => reschedule()}
            style={styles.confirmCoverChange}
          >
            <Text style={styles.confirmText}>Reschedule</Text>
            <Icon name="calendar" size={16} color="#fff" />
          </TouchableOpacity>
        )}
        {final ? (
          <TouchableOpacity
            onPress={() => finalConfirm()}
            style={styles.confirmCoverGreen}
          >
            <Text style={styles.confirmText}>Confirm</Text>
            <Icon name="calendar-check" size={16} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => initialConfirm()}
            style={styles.confirmCover}
          >
            <Text style={styles.confirmText}>Confirm</Text>
            <Icon name="calendar-check" size={16} color="#fff" />
          </TouchableOpacity>
        )}
       
      </View>
        :
        null
      }



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

export default ViewIncomingDetails;
