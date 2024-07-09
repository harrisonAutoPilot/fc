import "react-native-gesture-handler";
import React, { useState, useRef } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { Calendar } from "react-native-calendars";
import BottomSheet from "react-native-gesture-bottom-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";
import RoomCall from "../RoomCall"

const GroupIntroBottomSheet = (props) => {
  const bottomSheetCalendar = useRef(null);
  const item = props.data;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [toDate, setToDate] = useState("");
  const [displayRoom, setDisplayRoom] = useState(false);
  const [displayTo, setDisplayTo] = useState(false);
  const [note, setNote] = useState("");

  const setPropsPeriod = (id) => {

    if (id == "last_3_months") {
      bottomSheetCalendar.current?.show();
      const date = { startDate: startDate, endDate: endDate };

      props.setPeriod(date && date);
      props.setEnd(endDate);
      props.setStart(startDate);
    } else {
      props.setPeriod(id);
      setStartDate("");
      setEndDate("");

    }
  };

  const switchRoom = () =>{
    setDisplayRoom(true)
  }

  return (
    <BottomSheet
      sheetBackgroundColor="#fff"
      ref={props.bottomSheetRefStart}
      hasD
      height={650}
    >
      {!displayRoom ?
      <>
      <View style={{ flex: 1}}>
        <View style={styles.bannerTop}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => props.close()}>
            <Icon name="close" color="#fff" size={15} />
          </TouchableOpacity>
          <Image
            source={item?.image_url}
            style={styles.roomImg}
            resizeMode="contain"
          />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.topTitleCover}>
            <Text style={styles.topTitle}>{item?.title}</Text>
          </View>
          <View style={styles.membersContainer}>
            <View style={styles.imgAvarter}>
            
              <Image
                source={require("@Assets2/image/93114910-cool-vector-hipster-man-character-with-beard-and-glasses.jpg")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
            </View>

            <View style={styles.imgAvarterB}>
              <Image
                source={require("@Assets2/image/43127256-pink-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-young.jpg")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imgAvarterC}>
              <Image
                source={require("@Assets2/image/207247562-hipster-style-design-vector-illustration-eps10-graphicon-orange-background.jpg")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
            </View>
            <View style={styles.memberCover}>
              <Text style={styles.memberCount}>{item?.members} members</Text>
            </View>
          </View>
        </View>
        <View style={styles.timeCover}>
          <Icon
            name="timer-outline"
            size={22}
            color="#000"
            style={styles.loveImg}
          />
          <Text style={styles.timeText}>Every - {item?.time}</Text>
        </View>
        <View style={styles.underMiddleCover}>
          <Image
            source={require("@Assets2/image/Support-Groups-01.png")}
            style={styles.imgAvartar}
            resizeMode="cover"
          />
          <View style={styles.createdCover}>
            <Text style={styles.memberinfo}> Created by @{item?.host}</Text>
            <Text style={styles.memberinfo}> 22/07/2024</Text>
          </View>
        </View>
        <View style={styles.createdCover}>
        <Text style={styles.roomInfoTitle}>Room Info & Rules</Text>
        </View>
        <ScrollView style={{flexGrow:1, width:'98%', alignSelf:'center'}}>
          <View style={styles.rulesCover}>
            <View style={styles.listTag}><Text style={styles.listNumber}>1</Text></View>
            <View><Text style={styles.listItem}>Everyone in the room are to remain faceless with their identity hidden</Text></View>
          </View>
          <View style={styles.rulesCover}>
            <View style={styles.listTag}><Text style={styles.listNumber}>2</Text></View>
            <View><Text style={styles.listItem}>No hate speech and no character defamation</Text></View>
          </View>
    
        </ScrollView>
        
      </View>
        <TouchableOpacity style={styles.joinBtn} onPress={() => switchRoom()}>
          <Text style={styles.joinText}>join</Text>
        </TouchableOpacity>
        </>
        :
        <View style={{ flex: 1}}>
          <RoomCall item={item} meetCode={item?.requestId} return={() => setDisplayRoom(false)} />
        </View>
        }
    </BottomSheet>
  );
};

export default GroupIntroBottomSheet;
