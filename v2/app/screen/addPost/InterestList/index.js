import "react-native-gesture-handler";
import React, { useState, useEffect,useRef } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import BottomSheet from "react-native-gesture-bottom-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import { interestList } from "@Request2/Auth";
import {cleanInterest} from "@Store2/Auth";
import data from "./data"
import { ScrollView } from "react-native-gesture-handler";
// import RoomCall from "../RoomCall"

const InterestListBottomSheet = (props) => {
  const dispatch = useDispatch();
  const { countryCodeStatus, interestListData, interestListStatus, errors } = useSelector((state) => state.auth);
  const bottomSheetCalendar = useRef(null);
  // const item = props.data;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [toDate, setToDate] = useState("");
  const [displayRoom, setDisplayRoom] = useState(false);
  const [displayTo, setDisplayTo] = useState(false);
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState("Family");
  




useEffect(() => {
  dispatch(cleanInterest());
    dispatch(interestList());

}, [])



  const selectCategory = (item) => {
   
    setSelected(item?.display_name);
    props.data(item)
    props.close()
    // bounce()


};

  const RenderItem = ({ item , index}) => {

    return (
    
            <TouchableOpacity
                style={[selected !== item.id ? styles.activeRenderItemContainer : styles.renderItemContainer]}
                onPress={() => selectCategory(item)}>
                <View style={styles.cardContainer}>
                <View style={styles.textCircle}>
                <Text style={styles.singleText}>{item?.display_name?.charAt(0)}</Text>
                </View>
                  <Text style={styles.textStyle}>{item?.display_name}</Text>
                </View>
            
            </TouchableOpacity>
     

    )

}



  return (
    <BottomSheet
      sheetBackgroundColor="#fff"
      ref={props.bottomSheetRefStart}
      // draggable={true}
      hasDraggableIcon={true}
      height={450}
    >
      <View style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.introTitle}>Select a Category for your post</Text>
        </View>
      <FlatList
          data={interestListData}
          showsVerticalScrollIndicator={false}
          vertical
          renderItem={RenderItem}
          keyExtractor={item => item.id}
          // extraData={selected}
      />
      </View>
    </BottomSheet>
  );
};

export default InterestListBottomSheet;
