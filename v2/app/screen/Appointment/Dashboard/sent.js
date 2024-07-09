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
import { getCustomers } from "@Request2/Customer";
import {request} from "../../../util/request";
import EmptyAppointment from "./empty/emptyAppointment"
import FilterBottomSheet from "./FilterBottomSheet";
import { ActivityIndicator } from "react-native-paper";
import {cleanGetAppointment,cleanGetMessage} from "@Store2/Auth";
import ViewIncomingDetails from "./ViewIncomingDetails"
import moment from "moment";
import {
    unFollowUser,
    followUser,
    getAvailableDateByUserId,
    getUser,
    createAppointment,
    addAppointmentMessage,
    getFollowers,
    getAppointment,
    getMessages
  } from "@Request2/Auth";


const Sent = (props) => {
    const dispatch = useDispatch();
    const {
        user,
        appointmentData,
        appointmentDataMore,
        appointmentErrors,
        appointmentStatus,
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
    const [itemDetails, setItemDetails] = useState({})
    const bottomSheetRefAppointment = useRef(null);
    const flatListRef = React.useRef()
    

    const { status, errors, customers } = useSelector((state) => state.customer);

    const [objectValues, setObjectValues] = useState()
    const [duration, setDuration] = useState("6 Months")
  
      const returnBack = () => {
          props.navigation.goBack();
        };
  
        const filterList = () => {
          bottomSheetS.current.show();
      
        };
  
        const changeDuration = (item) => {
          setDuration(item)
     
        }
      
     
       const closeAppointmentSheet = () =>{
        bottomSheetRefAppointment.current?.close()
      }

    useEffect(()=> {
      dispatch(cleanGetMessage())
      dispatch(cleanGetAppointment())
    dispatch(getAppointment())
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


    const viewDetails = (item) =>{
      // console.log("the item",item.id )
      const no = item;
      dispatch(getMessages(no))
      bottomSheetRefAppointment?.current?.show()
      setItemDetails(item)
    
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = () => {
        setRefreshing(true);
    
        dispatch(getAppointment());
        wait(2000).then(() => setRefreshing(false));
    }

    const loadMoreAppointment = useCallback(() => {
  
      setTrackCartStatus(true);
  
      dispatch(getAppointment(appointmentData?.current_page + 1));
      setWaiter(true);
      setTimeout(() => {
        setResult(appointmentDataMore);
      }, 500);
    }, [appointmentData?.current_page, trackCartStatus]);
     


    const ListView = ({ item, index }) => {

        return (
        
           
            <TouchableOpacity style={styles.sentCard} onPress={() => viewDetails(item)} key={index}>
            <View style={styles.sentCardInnerLeft}>
               <View style={styles.calendarCard}>
               
              <Image
                style={styles.calendarImg}
              // source={{ uri: item?.counsellor?.avatar?.url !== "" ? `${Config?.IMG_URL}${item?.counsellor?.avatar?.url}` : null}}
              source ={{ uri: item?.counsellor?.user_image_url == null ? `${Config?.IMG_URL}${item?.counsellor?.avatar?.url}` : `${Config?.SPACE_URL}${item?.counsellor?.user_image_url}`}}
              resizeMode="cover"
            />
              <View style={styles.timerCover}>
              <Image
                source={require("@Assets2/image/arrow_1.png")}
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
              {refreshing || appointmentStatus === "pending" || appointmentStatus === "idle" ? <PlaceholderCard />
                :
                    <>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    vertical
                    scrollEnabled={true}
                    data={appointmentData.data}
                    keyExtractor={item => item.id}
                    renderItem={ListView}
                    ListEmptyComponent={EmptyAppointment}
                    enableEmptySections={true}
                    onEndReached={() => {
                      if (appointmentData?.current_page < appointmentData?.last_page) {
                        loadMoreAppointment();
                      }
                    }}
                    refreshControl =  {

                    <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        
                    }
                    ListFooterComponent={
                      appointmentStatus === "pending" && (
                        <ActivityIndicator size="large" animating={true} color="#fff" />
                      )
                    }
                    ref={flatListRef}
                    extraData={appointmentData.data}
                />
                    </>
                   } 

              

                 <ViewIncomingDetails
                    bottomSheetPropspectiveDetails={bottomSheetRefAppointment}
                    returnBackProspective ={closeAppointmentSheet}
                    item={itemDetails}
                  
                    />


            </View>
            
    
    )
};

export default Sent;