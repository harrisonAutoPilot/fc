import 'react-native-gesture-handler';
import React, {useState, useRef} from "react";
import { View,Image, Text,TextInput, TouchableOpacity} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { Calendar } from 'react-native-calendars';
import BottomSheet from "react-native-gesture-bottom-sheet";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker'
import moment from "moment"


const AppointmentDetailBottomSheet = (props) => {
    const bottomSheetCalendar = useRef(null);
    const item = props.poster;
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [showNote, setShowNote] = useState(false)
    const [toDate, setToDate] = useState("")
    const [displayFrom, setDisplayFrom] = useState(true)
    const [displayTo, setDisplayTo] = useState(false)
    const [note, setNote] = useState("")
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [onPick, setOnPick] = useState(false)

    // console.log("the appointment details", item)

    const setPropsPeriod = (id) => {
        // console.log("the period ...", id)
        if(id == 'last_3_months'){
          
           bottomSheetCalendar.current?.show();
           const date = {startDate:startDate, endDate: endDate}
          //  console.log("just to know the start and end date", date)
           props.setPeriod(date && date);
           props.setEnd(endDate)
           props.setStart(startDate)
        }else{
            props.setPeriod(id);
            setStartDate("")
            setEndDate("")
            // console.log("just to know the start and end date", id)
        }  

    };


    const confirmTime = () =>{
      setOnPick(true)
      
    }



   const title =`Pick Appointment time for ${item?.counsellor_name}`;

    return (
  
                 <BottomSheet sheetBackgroundColor="#fff"  hasDraggableIcon ref={props.bottomSheetRefStart} height={450} >

                  <ScrollView style={{flex:1}}>
                  <View style={styles.bottomSheet}>
                        <View style={styles.topContainer}>
                        <Image
                           style={styles.userImg} 
                            source={item?.counsellor_img}
                            resizeMode="cover"
                          />
                        {/* <Image  source={item.poster_img} style={styles.userImg} /> */}
                        <Image
                            style={styles.verImg}
                            source={require('@Assets2/image/verified.png')}
                            />
                        <Text style={styles.userName}>{item?.counsellor_name}</Text>
                        </View>
                        <View style={styles.midContainer}>
                           <Text style={styles.issues}>Appointment Date : {item.appointment_date}</Text>
                            <Text style={styles.issues}>Request Date : {item.request_date}</Text>
                            <Text style={styles.intro}>{item.request_note} </Text>
                            
                        </View>
                        {!onPick ?
                        <>
                        {open ?
                     <View style={{alignItems:'center', justifyContent:'center'}}>
                         <DatePicker
                          modal
                          title={title}
                          open={open}
                          date={date}
                          mode="time"
                          onConfirm={(date) => {
                            //console.log("the time odimnobi", date)
                            // setOnPick(true)
                            confirmTime()
                            setOpen(false)
                            setDate(date)
                            
                          }}
                          onCancel={() => {
                            setOpen(false)
                          }}
                        />
                      </View>
                        :
                        <>
                       { showNote  ?

                        <>
                        <View style={styles.midContainer}>
                        <Text style={styles.issueDate}>Please leave a note regarding your next availability</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder='Add a short note regarding your next availability (optional)'
                            value={note}
                            onChangeText={text=>setNote(text)}
                            multiline={true}
                            numberOfLines={10}
                            />
                            </View>
                            <TouchableOpacity
                          onPress={() => setShowNote(false)}
                            style={styles.confirmCoverChangeV2}>
                                
                                <Text style={styles.confirmText}>Reschedule Appointment Date</Text>
                                <Icon name="calendar" size={16} color="#fff" />
                          </TouchableOpacity>

                        </>
                          :
                          <View style={styles.dateContainer}>


                          <TouchableOpacity
                          onPress={() => setShowNote(true)}
                            style={styles.confirmCoverChange}>
                                
                                <Text style={styles.confirmText}>Reschedule Appointment</Text>
                                <Icon name="calendar" size={16} color="#fff" />
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => setOpen(true)}
                                style={styles.confirmCover}>
                                
                                <Text style={styles.confirmText}>Confirm Appointment</Text>
                                <Icon name="calendar-check" size={16} color="#fff" />
                          </TouchableOpacity>
                          
                          </View>
                            }
                                                </>
                        }
                      </>
                      :
                      <View style={styles.dateContainerTime}>
                        <Text style={styles.appTimeIntro}>The Appointment time is set for </Text>
                        <Text style={styles.appTime}>{moment(item.appointment_date,'DD MM YYYY').format('ddd, ll') + " " + moment(date).format("hh:mm A")}</Text>
                        <View style={styles.dateContainer}>


                          <TouchableOpacity
                          onPress={() =>{ setOpen(true), setOnPick(false)}}
                            style={styles.confirmCoverChange}>
                                
                                <Text style={styles.confirmText}>Change the Appointment Time</Text>
                                <Icon name="calendar" size={16} color="#fff" />
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() => setOpen(true)}
                                style={styles.confirmCover}>
                                
                                <Text style={styles.confirmText}>Confirm Appointment Time</Text>
                                <Icon name="calendar-check" size={16} color="#fff" />
                          </TouchableOpacity>
                          
                          </View>
                      </View>
                      }
              
                    </View>
                  </ScrollView>
    
                </BottomSheet>

    
    
      
    )
};

export default AppointmentDetailBottomSheet;