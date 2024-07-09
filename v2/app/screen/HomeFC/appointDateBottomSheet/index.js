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
import {Calendar,CalendarProvider} from 'react-native-calendars';
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
      userDateData,
      addMessageData
    } = useSelector((state) => state.auth);
    const item = props.poster;
    const userData = props.userData
    const [noteDate, setNoteDate] = useState([])
    // const [startDate, setStartDate] = useState("")
    // const [endDate, setEndDate] = useState("")
    const [appointmentSuccess, setAppointmentSuccess] = useState(false)
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

  const close = () =>{
    setTimeout(function () {
      setLoader(false);
      setErrMsg(null);
      dispatch(cleanSync());
    }, 4000);

  }

 
  const pickedDated = (day) => {
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


  useEffect(() => {
    if (createApStatus === "failed") {
      setLoader(false);
      setErrMsg(createApErrors?.msg?.message)
      console.log("the response",createApErrors?.msg?.message )
      dispatch(cleanCreateAppointment());
       close()
    } else if (createApStatus === "success") {
      setAppointmentSuccess(true)
        dispatch(cleanCreateAppointment());
          setLoader(false);
          close()

          setTimeout(function () {
            setAppointmentSuccess(false)
            props.close();
          }, 5000);
          
    }
  }, [createApStatus]);
  

const makeAppointment = () => {
  const data = {counsellor_id:item?.user?.id, content:note, set_time: moment(noteDate).format("YYYY-MM-DD HH:mm:ss")}
  console.log("the data", data)
  dispatch(createAppointment(data))
}





  const MyCalendar = (props) => {
    return (
      <CalendarProvider
      date={'2024-06-24'} >
      <Calendar

        initialDate={startDate}
        // minDate={startDate}
        // maxDate={endDate}
        disableAllTouchEventsForDisabledDays={true}
        markedDates={objectOutput}
    
        {...props}
       
      />
      </CalendarProvider>
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
  
                 <BottomSheet sheetBackgroundColor="#fff"  hasDraggableIcon ref={props.bottomSheetRefStart} height={580} >

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
                        <Text style={styles.userName}>{item?.user?.username}</Text>
                        </View>
                        <View style={styles.midContainer}>
                            <Text style={styles.intro}>Hello. I offer counselling for the following: </Text>
                            <Text style={styles.issues}>Marriage Dispute (Family)</Text>
                            <Text style={styles.issues}>Relationship </Text>
                            <Text style={styles.issues}>Depression & Addiction</Text>

                            {!appointmentSuccess ?
                            <>
                            { !showNote  ?
                           <View>
                             <Text style={styles.issueDate}>Pick a Date for Faceless Counseling</Text>
                          </View>
                            :
                            null
                            }
                            </>
                            :
                            null}
                        </View>


                        {!appointmentSuccess ?
                        <View>
                    { !showNote  ?
                    <View style={{flex:1, marginTop:-10}}>
                    {userDateStatus == "idle" ||userDateStatus == "pending" ?
                     <CalendarPlaceholder />
                     :
                   <MyCalendar onDayPress={(day) => pickedDated(day) } />
                
              

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
                       onPress={() => setShowNote(false)}
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


                         <View>

                        
                           
                        </View>
                     </View>
                        }
                    </View>  

                        :
                        <View style={styles.calendarCover}>
                        <LottieView
                          source={require("@Assets2/image/appointment.json")}
                          autoPlay
                          loop
                          // source={require('../../../asset/image/96957-lock.json')}

                          style={styles.successImg}
                        />
                        <Text style={styles.calendarText}>
                         Appointment sent successfully to @{item?.user?.username} you will receive a feed back within the hours
                          </Text>
                          </View>


                      }
                            { errMsg &&
                           <View style={styles.errView} >
                           <Icon name="alert-circle-outline" size={22} color="#BA1A1A" />
                           <Text style={styles.errText}>{errMsg}</Text>
                       </View>}

                    </View>
                   
                  </ScrollView>
    
                </BottomSheet>

    
    
      
    )
};

export default AppointmentDateBottomSheet;