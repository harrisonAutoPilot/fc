import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "@Component";
import Zcon from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import Config from "react-native-config";

import {request} from "../../../util/request";
import EmptyScheduled from "./empty/emptyScheduled"
import FilterBottomSheet from "./FilterBottomSheet";
import {cleanGetConsel,cleanGetMessage} from "@Store2/Auth";
import { ActivityIndicator } from "react-native-paper";
import {
  cleanUpdateAppointment
} from "@Store2/Auth";
import ViewIncomingDetails from "./ViewIncomingDetails"
import moment from "moment";
import {
    unFollowUser,
    followUser,
    getAvailableDateByUserId,
    getUser,
    createAppointment,
    addAppointmentMessage,
    getConsel,
    getMessages,
    updateAppointment,
  } from "@Request2/Auth";


const Incoming = (props) => {
    const dispatch = useDispatch();
    const {
        user,
        conselData,
        conselDataMore,
        updateAppointmentErrors,
        updateAppointmentData,
        updateAppointmentStatus,
        conselErrors,
        conselStatus,
        messageData,
        messageErrors,
        } = useSelector((state) => state.auth);
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const [waiter, setWaiter] = useState(false);
    const [trackCartStatus, setTrackCartStatus] = useState(false);
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()
    const bottomSheetRefIncoming = useRef(null);
    const [itemDetails, setItemDetails] = useState({})
  
      const returnBack = () => {
          props.navigation.goBack();
        };
  
    
       const applyFilter =(item)=>{
        setDuration(item)
        bottomSheetS.current.close()
        console.log("what i selected", item)
       }


    useEffect(()=> {
    dispatch(cleanUpdateAppointment())
    dispatch(cleanGetMessage())
    dispatch(cleanGetConsel())
    dispatch(getConsel())
    },[])

    useEffect(()=> {
        setResult(props?.result)
    },[props?.result?.length])

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const closeSheetSort = () => {
        bottomSheetS.current.close();
        setSheetOpen(false)
    }

    useEffect(() => {
        if (search.length > 0) {
            filterOrder();
        }

    }, [search.length]);


    const closeIncomingSheet = () =>{
      bottomSheetRefIncoming?.current?.close()
    }
  

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };


    const viewDetails = (item) =>{
      console.log("the item",item.id )
      const no = item;
      dispatch(getMessages(no))
      bottomSheetRefIncoming?.current?.show()
      setItemDetails(item)
    
    }

    const refreshView = () => {
        setRefreshing(true);
    
        dispatch(getConsel());
        wait(2000).then(() => setRefreshing(false));
    }

    const loadMoreConsel = useCallback(() => {
  
      setTrackCartStatus(true);
  
      dispatch(getConsel(conselData?.current_page + 1));
      setWaiter(true);
      setTimeout(() => {
        setResult(conselDataMore);
      }, 500);
    }, [conselData?.current_page, trackCartStatus]);
     


    const ListView = ({ item, index }) => {

        return (
        
           
            <TouchableOpacity style={styles.sentCard} onPress={() => viewDetails(item)} key={index}>
            <View style={styles.sentCardInnerLeft}>
               <View style={styles.calendarCard}>
               
              <Image
                style={styles.calendarImg}
              source={{ uri: item?.counsellor?.avatar?.url !== "" ? `${Config?.IMG_URL}${item?.counsellor?.avatar?.url}` : null}}
              resizeMode="cover"
            />
              <View style={styles.timerCover}>
              <Image
                source={require("@Assets2/image/down_arrow.png")}
                style={{width:20, height:20}}
                resizeMode="cover"
              />
              </View>
              </View>
              <View style={styles.sentCardContentLeft}>
              <View style={styles.usernameCover}>
                <Text style={styles.counsellorName}>@{item.counsellor?.username}</Text>
                <Image
                source={require("@Assets2/image/badge.png")}
                style={{width:13, height:13, marginTop:4}}
                resizeMode="cover"
              />
              </View>
                  <View style={styles.durationCover}>
                    
                    <View style={styles.smFlexTop}><Acon name="timer-outline" size={12} color="#000" style={styles.loveImg} /><Text style={styles.counselDateText}>{moment(item?.set_time)?.fromNow()}</Text></View>
                   </View>
                <View style={styles.bottomMenu}>
                   
                    <View style={styles.smFlex}><Text style={styles.counselDate}>{moment(item?.created_at,)?.format('Y-MM-D H:m A')}</Text></View>
                   
                </View>
            </View>
            
            </View>
           <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconCover}>
          <Acon name="chat-outline" size={20} color="rgba(60, 60, 67, 0.6)" />
          </TouchableOpacity >
          <TouchableOpacity style={styles.iconCover}>
          <Acon name="dots-horizontal" size={20} color="rgba(60, 60, 67, 0.6)" />
         
          </TouchableOpacity>
           </View>
            <View>
          
            </View>
           </TouchableOpacity>
       
       
        )
    };

    return (
      
           
            <View style={styles.bottomCover}>
              {refreshing || conselStatus === "pending" || conselStatus === "idle" ? <PlaceholderCard />
                :
                    <>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    vertical
                    scrollEnabled={true}
                    data={conselData.data}
                    keyExtractor={item => item.id}
                    renderItem={ListView}
                    ListEmptyComponent={EmptyScheduled}
                    enableEmptySections={true}
                    onEndReached={() => {
                      if (conselData?.current_page < conselData?.last_page) {
                        loadMoreConsel();
                      }
                    }}
                    refreshControl =  {

                    <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        
                    }
                    ListFooterComponent={
                      conselStatus === "pending" && (
                        <ActivityIndicator size="large" animating={true} color="#fff" />
                      )
                    }
                    ref={flatListRef}
                    extraData={conselData.data}
                />
                    </>
                   } 

              
                {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    data={appointmentData.data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={EmptyPending}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                    columnWrapperStyle={styles.column}
                   
                /> */}

                  <ViewIncomingDetails
                    bottomSheetPropspectiveDetails={bottomSheetRefIncoming}
                    returnBackProspective ={closeIncomingSheet}
                    item={itemDetails}
                  
                    />
              


            </View>
            
    
    )
};

export default Incoming;