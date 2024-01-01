import 'react-native-gesture-handler';
import React, {useState, useRef} from "react";
import { View,Image, Text,TextInput, TouchableOpacity} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { Calendar } from 'react-native-calendars';
import BottomSheet from "react-native-gesture-bottom-sheet";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler';


const AppointmentDateBottomSheet = (props) => {
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

    // console.log("the appointment details", item)

    const setPropsPeriod = (id) => {
        console.log("the period ...", id)
        if(id == 'last_3_months'){
          
           bottomSheetCalendar.current?.show();
           const date = {startDate:startDate, endDate: endDate}
           console.log("just to know the start and end date", date)
           props.setPeriod(date && date);
           props.setEnd(endDate)
           props.setStart(startDate)
        }else{
            props.setPeriod(id);
            setStartDate("")
            setEndDate("")
            console.log("just to know the start and end date", id)
        }  

    };



  



    return (
  
                 <BottomSheet sheetBackgroundColor="#fff"  hasDraggableIcon ref={props.bottomSheetRefStart} height={580} >

                  <ScrollView style={{flex:1}}>
                  <View style={styles.bottomSheet}>
                        <View style={styles.topContainer}>
                        <Image
                           style={styles.userImg} 
                            source={item?.poster_img}
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
                            { !showNote  ?
                           <View>
                             <Text style={styles.issueDate}>Pick a Date for Faceless Counseling</Text>
                          </View>
                            :
                            null
                            }
                        </View>
                    { !showNote  ?
                    <Calendar
                        onDayPress={day => {
                        // setFromDate(day?.dateString);
                        // props.startDate(day?.dateString)
                        setStartDate(day?.dateString)
                        setShowNote(true)
                        // props.close()
                        }}
                        // markedDates={{
                        // [fromDate]: {selected: true, disableTouchEvent: true, selectedColor: 'rgba(51, 83, 203, 1)'}
                        // }}
                        markedDates={{
                            '2023-11-04': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-06': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-08': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-10': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-11': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-15': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-22': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-23': {marked: true},
                            '2023-11-24': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-25': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-26': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-27': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-28': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-29': {selected: true, marked: true, selectedColor: 'purple'},
                            '2023-11-30': {selected: true, marked: true, selectedColor: 'purple'},
                          }}
                    />
                      :
                      <View style={styles.dateContainer}>
                     
                     <Text style={styles.issueDateNew}>Selected Date : {startDate}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder='Add a short note to your request (optional)'
                            value={note}
                            onChangeText={text=>setNote(text)}
                            multiline={true}
                            numberOfLines={10}
                            />
                            </View>
                        
                      <TouchableOpacity
                       onPress={() => setShowNote(false)}
                        style={styles.confirmCoverChange}>
                            
                            <Text style={styles.confirmText}>Change Appointment Date</Text>
                            <Icon name="calendar" size={16} color="#fff" />
                      </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.confirmCover}>
                            
                            <Text style={styles.confirmText}>Make Appointment</Text>
                            <Icon name="calendar-check" size={16} color="#fff" />
                      </TouchableOpacity>
                       
                    </View>
                        }
                    </View>
                  </ScrollView>
    
                </BottomSheet>

    
    
      
    )
};

export default AppointmentDateBottomSheet;