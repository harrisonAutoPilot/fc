import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef,useCallback } from "react";

import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { Calendar } from 'react-native-calendars';
import Config from "react-native-config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "react-native-gesture-bottom-sheet";
import {
  getUser,
  createAppointment,
  addAppointmentMessage
} from "@Request2/Auth";
import styles from './style'
import { OnboardinBtn } from "@Component2";
import { cleanSync, cleanCreateAppointment, cleanAddMessage } from "@Store2/Auth";
import LottieView from "lottie-react-native";
import moment from "moment"; // 2.20.1
import Loader from "@Screen2/loader";





const AppointmentDateBottomSheet = (props) => {
  const dispatch = useDispatch();
    const bottomSheetCalendar = useRef(null);
    const {
      user,
      createApStatus,
      createApData,
      createApErrors,
      userDateStatus,
      addMessageStatus,
      addMessageErrors,
      addMessageData
    } = useSelector((state) => state.auth);
    const item = props.poster;
    const userData = props.userData
    const [noteDate, setNoteDate] = useState([])
    // const [startDate, setStartDate] = useState("")
    // const [endDate, setEndDate] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [showNote, setShowNote] = useState(false)
    const [toDate, setToDate] = useState("")
    const [displayFrom, setDisplayFrom] = useState(true)
    const [displayTo, setDisplayTo] = useState(false)
    const [note, setNote] = useState("")
    const [successMsg, setSuccessMsg] = useState(null);
    const [loader, setLoader] = useState(false);
    const [startDate, setStartDate] = useState([]);
    const [endDate, setEndDate] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
    const [listData, setListData] = useState([]);
   
   

    const CalendarPlaceholder = () => {
      return (
        <View style={styles.CalendarPlaceholderContainer}>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                        <View style={styles.dateDot}/>
                     
                        <View style={styles.placeholderBtn} />
                        

                      </View>
      );
    };

    const newNote = note;

      // this is the code to add the selected true
  const objectOutput = {};
  listData?.forEach((element) => {
    objectOutput[element] = {
      selected: true,
      selectedColor: "rgba(22, 160, 133, 1)",
    };
  });

  const pickedDated = (day) => {
    console.log("remember it has been clicked")
    let checker = Object?.values(userData?.available_dates)?.includes(
      day?.dateString
    );

    if (checker) {
      setShowNote(true)
      setShowCalendar(false);
      setNoteDate(day?.dateString)

    } else {
      setNoteDate([])
      setErrMsg("Please select a date you checked in");
      setTimeout(() => {
        setErrMsg(null);
      }, 3000);
    }
    setShowCalendar(false);
  };

  const makeAppointment = () => {
    props.sendNote (note)
    //const data = {counsellor_id:item?.user?.id, set_time: moment(noteDate).format("YYYY-MM-DD HH:mm:ss")}
    props.makeAppoint()
   
   // dispatch(createAppointment(data))

 // console.log("the data sent", note, noteDate, item?.user?.id)
  }




  console.log("hello i am running")


  const MyCalendar = (props) => {
    return (
      <Calendar
        initialDate={startDate}
        minDate={startDate}
        maxDate={endDate}
        disableAllTouchEventsForDisabledDays={true}
        markedDates={objectOutput}
    
        {...props}
       
      />
    );
  };

  useEffect(() => {
    if (userDateStatus === "success") {
      setListData(userData?.available_dates);
      setStartDate(userData?.available_dates[0]);
      setEndDate(userData?.available_dates?.slice(-1)[0]);
    }
  }, [userDateStatus]);



  



    return (
  
                 <BottomSheet sheetBackgroundColor="#fff"  hasDraggableIcon ref={props.bottomSheetRefStart} height={560} >

                  <ScrollView style={{flex:1}}>
                  <View style={styles.bottomSheet}>
                        <View style={styles.topContainer}>
                        <Image
                           style={styles.userImg} 
                           source={{ uri: item?.user?.avatar?.url !== "" ? `${Config.IMG_URL}${item?.user?.avatar?.url}` : null }}
                            resizeMode="cover"
                          />
                        {/* <Image  source={item.poster_img} style={styles.userImg} /> */}
                        <Image
                            style={styles.verImg}
                            source={require('@Assets2/image/verified.png')}
                            />
                        <Text style={styles.userName}>{item?.poster}</Text>
                        </View>
                        <View style={styles.midContainer}>
                            <Text style={styles.intro}>Hello. I offer counselling for the following: </Text>
                            <Text style={styles.issues}>Marriage Dispute (Family)</Text>
                            <Text style={styles.issues}>Relationship </Text>
                            <Text style={styles.issues}>Depression & Addiction</Text>
                            { !props.displayNote  ?
                           <View>
                             <Text style={styles.issueDate}>Pick a Date for Faceless Counseling</Text>
                          </View>
                            :
                            null
                            }
                        </View>
                    { !props.displayNote  ?
                    <View style={{flex:1}}>
                    {userDateStatus == "idle" ||userDateStatus == "pending" ?
                     <CalendarPlaceholder />
                     :
                   <MyCalendar onDayPress={(day) => props.pick(day) } />
                   
                  
                 

                    }
                    </View>

                      :
                      <View style={styles.dateContainer}>
                     
                     <Text style={styles.issueDateNew}>Selected Date : {startDate}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder='Add a short note/ message to your request'
                            value={note}
                            onChangeText={(text) => setNote(text)}
                            multiline={true}
                            numberOfLines={10}
                            />
                            </View>
                        
                      <TouchableOpacity
                       onPress={props.changeAppoint}
                        style={styles.confirmCoverChange}>
                            
                            <Text style={styles.confirmText}>CHANGE APPOINTMENT DATE</Text>
                            <Icon name="calendar" size={16} color="#fff" />
                      </TouchableOpacity>
                        {note == "" || !noteDate ?
                      <View style={styles.disabledCover}>
                            <Text style={styles.confirmText}>Make Appointment</Text>
                            <Icon name="calendar-check" size={16} color="#fff" />
                       </View> 
                       :
                       <TouchableOpacity
                            onPress={makeAppointment}
                            style={styles.confirmCover}>
                            
                            <Text style={styles.confirmText}>Make Appointment</Text>
                            <Icon name="calendar-check" size={16} color="#fff" />
                       </TouchableOpacity> 
                            }
                      
                    </View>
                        }
                    </View>
                  </ScrollView>
    
                </BottomSheet>

    
    
      
    )
};

export default AppointmentDateBottomSheet;