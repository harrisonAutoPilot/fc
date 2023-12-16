import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text,StatusBar,Dimensions,TouchableOpacity,ScrollView,ActivityIndicator, TextInput, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {LineChart} from "react-native-chart-kit";
import {agentAnalytics} from '@Request2/Auth';
import { cleanAnalytics } from "@Store2/Auth";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { chartConfig } from "./chartConfig";

  const screenWidth = Dimensions.get("window").width;
 
import DurationBottomSheet from "../DurationBottomSheet"

// import EmptyOrder from "./emptyOrder";
import { OrderHeader, OrderBottomSheet } from "@Component2";

const ActivityReport = (props) => {
  const dispatch = useDispatch();
  const [objectValues, setObjectValues] = useState()
  const {analyticsData, analyticStatus} = useSelector(state => state.auth);
  const [duration, setDuration] = useState("last_6_months")
  const [durationName, setDurationName] = useState("Last 6 Months")
  const [refreshing, setRefreshing] = useState(true);

  const [ result, setResult] = useState()

  const bottomSheet = useRef();

  useEffect(() => {
    dispatch(cleanAnalytics())
   dispatch(agentAnalytics({duration}))
   setRefreshing(true);
  }, []);


  useEffect(() => {
    dispatch(agentAnalytics({duration}))
    setRefreshing(true);
   

   }, [duration]);


   const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

     useEffect(() => {

    if (analyticStatus === "success"){

      setResult(analyticsData)
      setRefreshing(false)

      // wait(3000).then(() => {

      // })
  
   
    }

  }, [analyticStatus]);

    const returnBack = () => {
        props.navigation.goBack();
      };

      const deDuraionList = () => {
        bottomSheet.current.show();
    
      };


      const refreshActivity = useCallback(() => {



        setErrMsg(null)

        setRefreshing(true);

        setTrackCartStatus(false);

      

    }, []);


      const changeDuration = (item) => {
        dispatch(cleanAnalytics())
        console.log("the duration check", item)
        setDuration(item.type)
        setDurationName(item?.name)
        dispatch(cleanAnalytics)
        bottomSheet.current.close()
        dispatch(agentAnalytics({duration:item.type}))
      }
    


      const CardList = ({ icon, title, count }) => (
        <View style={styles.smCard}>
                <View style={styles.smImgCover}>
                  <Icon name={icon} color="rgba(118, 118, 128, 1)" size={18} />
                </View>
                <View style={styles.smTextCover}>
                  <Text style={styles.smCardTitle}>{title}</Text>
                  <Text style={styles.smCardCount}>{count}</Text>
                </View>
          </View>
     
    )


    const Spining = () => (
      <View>
       
          <View style={styles.activityInd}>
              <ActivityIndicator color="green"  animating = {refreshing} size="large" />
          </View>
       
      </View>
  )


    const data = {
       labels: result?.performance?.labels ? result?.performance?.labels : ["January", "February", "March", "April", "May", "June"],

      datasets: [
        {
          data: result?.performance?.data ? result?.performance?.data : [0,0,0,0,0,0]
         
        }
      ],
      legend: [durationName], // optional
      
    
    };

    return (
        <View style={styles.body}>
            <StatusBar hidden />
                <OrderHeader
                    title="Activity Report"
                    onPress={returnBack}
                />
              <View style={styles.container}>
                <View style={styles.topTitle}>
                    <Text style={styles.topTitleText}>This is your weekly activity/performance Report</Text>
                </View>
               <View>
               <TouchableOpacity style={styles.dropDownCover} onPress={deDuraionList}>
                  <View style={styles.dropLeft}>
                  
                  <Icon name="calendar-blank-outline" color="rgba(118, 118, 128, 1)" size={24} />
                    <Text style={styles.dropText}>{durationName}</Text>
                  </View>
               
                  <Icon name="chevron-down" color="rgba(118, 118, 128, 1)" size={24} />
                  </TouchableOpacity>
               </View>
                <View style={styles.cardsContainer}>
                     <CardList 
                         icon="archive"
                        title ="TOTAL ORDERS"
                        count ={result?.orders}
                     />
                      <CardList 
                         icon="account-supervisor-circle-outline"
                        title ="REGISTRATION"
                        count ={result?.registrations}
                     />
                      <CardList 
                         icon="tag"
                        title ="TOTAL SALES"
                        count ={result?.sales}
                     />
                      <CardList 
                         icon="clock"
                        title ="AVG. CUST. VISIT"
                        count ={`${result?.visits}/Month`}
                     />
                </View>


                <View style={styles.statisticCover}>
                  <Text style={styles.statisticCaption}>Performance Statistics <Text style={styles.statisticSmCaption}>{durationName}</Text></Text>
                </View>

                <View style={styles.chartContainer}>
                 <ScrollView style={styles.scrollStyle} horizontal={true}>
         
                 <LineChart
                    data={data.length != undefined ? data : data}
                    width={1400}
                    height={260}
                    yAxisInterval={1}
                    animate
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    withDots={false}
                   
               />
             
               </ScrollView>
                </View> 
                { refreshing ? 
                <Spining />
                :
                null
                }
              </View>

              <DurationBottomSheet
                bottomSheet={bottomSheet} 
                props={props}
                objList = {(item) =>  setObjectValues(item)}
                sort={changeDuration}
                />
                
        </View>
    )
};

export default ActivityReport;
