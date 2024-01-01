import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "@Component";
import Zcon from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers } from "@Request2/Customer";
import {request} from "../../../util/request";
import EmptyPending from "./empty/emptyPending"
import FilterBottomSheet from "./FilterBottomSheet";


const Sent = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const bottomSheetS = useRef();
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
      
       const applyFilter =(item)=>{
        setDuration(item)
        bottomSheetS.current.close()
        console.log("what i selected", item)
       }

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




    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = () => {
        setRefreshing(true);
    
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }




    const ListView = ({ item, index }) => {

        return (
            <>
            {item?.type == "sent" ?
            <TouchableOpacity style={styles.sentCard}>
            <View style={styles.sentCardInnerLeft}>
               <View style={styles.calendarCard}>
               <Image
                       source={item?.counsellor_img}
                    style={styles.calendarImg}
                />
              <View style={styles.timerCover}>
              <Acon name="clock-time-three" size={18} color="#D83939" />
              </View>
              </View>
              <View style={styles.sentCardContentLeft}>
                <Text style={styles.counsellorName}>@{item.counsellor_name}</Text>
                <Text style={styles.counselDate}>{item.appointment_date}</Text>
                <View style={styles.bottomMenu}>
                    <View style={styles.smFlex}><View style={styles.statusCover}><Text style={styles.statusText}>{item.status}</Text></View></View>
                    <View style={styles.smFlex}><Acon name="message-reply-text-outline" size={22} color="#000" style={styles.loveImg} /><Text style={styles.countText}>{item.msg_count}</Text></View>
                   
                </View>
            </View>
            </View>
            
            <View>
                <Text style={styles.counselDate}>{item.request_date}</Text>
            </View>
           </TouchableOpacity>
        :
        null
            }
        </>    
        )
    };

    return (
      
           
            <View style={styles.bottomCover}>
            {/* {refreshing || status === "pending" || status === "idle" ? <PlaceholderCard />
                :
                    <>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    vertical
                    scrollEnabled={true}
                    data={customers?.pending?.users }
                    keyExtractor={item => item.id}
                    renderItem={<View />}
                    ListEmptyComponent={EmptyPending}
                    enableEmptySections={true}
                    refreshControl =  {

                    <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        
                    }
                   
                    ref={flatListRef}
                    extraData={customers?.pending?.users}
                />
                    </>
                   }  */}

              
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={request}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={EmptyPending}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                    columnWrapperStyle={styles.column}
                   
                />

              


            </View>
            
    
    )
};

export default Sent;