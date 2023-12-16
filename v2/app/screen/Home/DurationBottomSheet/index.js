import React, { useState,useRef, useEffect, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, View,Text, FlatList } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
// import { OnboardinBtn } from "@Component2";
import MIcon from "react-native-vector-icons/MaterialIcons";
import {data} from "./data"

import styles from "./style";

const DurationBottomSheet = (props) => {
  const [activeId, setActiveId] = useState('Last 6 Months')

  const selectItem = (item) => {
    props.sort(item)
    props.objList(item)
    setActiveId(item)
   
  }

 



  const ListView = ({ item, index }) => {
    return (
        <View>
          { activeId === item?.type ?
          <TouchableOpacity key={item.id} onPress={() => selectItem(item) }>
            <View style={styles.cardCoverActive}>
                <Text style={styles.listText}>{item?.type}</Text>
                <MIcon name="check" size={20} color="#3353CB" />
            </View>
          </TouchableOpacity>
          :
            <TouchableOpacity key={item.id} onPress={() => { selectItem(item) }}>
              <View style={styles.cardCover}>
                  <Text style={styles.listText}>{item?.name}</Text>
              </View>
            </TouchableOpacity>
          }
        </View>
    )
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet  ref={props.bottomSheet} height={290} radius={20} sheetBackgroundColor="#F2F4F7"  hasDraggableIcon={true} >
     
   <View style={styles.bgTitleCover}>
    <Text style={styles.caption}>Search By</Text>

    </View>
  
   <View style={styles.cardContainer}>
  
    <FlatList
        vertical
        data={data}
        renderItem={ListView}
        keyExtractor={item => item.id}
      />
   </View>
   

     </BottomSheet>
    </SafeAreaView>
  );
};



export default DurationBottomSheet;