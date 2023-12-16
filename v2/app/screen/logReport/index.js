import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {agentAnalytics} from '@Request2/Auth';
import {cleanAnalytics} from '@Store2/Auth';
import Loader from "@Screen2/loader"
import CallLogs from 'react-native-call-log';
import moment from "moment"

import DurationBottomSheet from '@Screen2/Home/DurationBottomSheet';

// import EmptyOrder from "./emptyOrder";
import {OrderHeader} from '@Component2';
// import { SafeAreaView } from 'react-native-safe-area-context';

const LogReport = props => {
  const dispatch = useDispatch();
  const [objectValues, setObjectValues] = useState();
  const {analyticsData} = useSelector(state => state.auth);
  const [duration, setDuration] = useState('last_6_months');
  const [nextData, setNextData] = useState([])
  const [contactLoading, setContactLoading] = useState(true)
  const [incomingCall, setInComingCall] = useState()
  const [outGoingCall, setOutGoingCall] = useState()
  const [missedCall, setMissedCall] = useState()
  const [blockedCall, setBlockedCall] = useState()
  const [totalCall, setTotalCall] = useState()
  const [todayLog, setTodayLog] = useState()
  const [unKnownedCall, setUnKnownedCall] = useState()
  const [listData, setListDate] = useState([]);
  const [loader, setLoader] = useState(false);
  const [durationName, setDurationName] = useState('Last 6 Months');
  const bottomSheet = useRef();

  const today = moment().format('MMMM D YYYY');

  useEffect(() => {
    dispatch(agentAnalytics({duration}));
  }, []);


console.log("to get today", moment().format('MMMM D YYYY'))


  useEffect(() => {
    async function fetchData() {
      if (Platform.OS != 'ios') {
        try {
          //Ask for runtime permission
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            {
              title: 'Call Log Example',
              message: 'Access your call logs',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setContactLoading(true)
            setLoader(true)
            CallLogs.loadAll().then((c) => {
                  console.log("get all", c)
              let outGoingLength = c.filter((element) => {
                return element?.type === 'OUTGOING'
              }).length;
              setOutGoingCall(outGoingLength)
          
            let missedLength = c.filter((element) => {
              return element?.type === 'MISSED'
            }).length;
            setMissedCall(missedLength)
            let unKnownedLength = c.filter((element) => {
              return element?.type === 'UNKNOWN'
            }).length;
            setUnKnownedCall(unKnownedLength)
            let unBlocked = c.filter((element) => {
              return element?.type === 'BLOCKED'
            }).length;
            setBlockedCall(unBlocked)
            let totalCallLength = c.filter((element) => {
              return element
            }).length;

            setTotalCall(totalCallLength)
           
            // console.log("outgoing length", outGoingLength)
              setListDate(c)
            });

            let inComingLength = listData.filter((element) => {
              return element?.type === 'INCOMING'
            }).length;
            setInComingCall(inComingLength)
            CallLogs.load(100).then((c) => setNextData(c));

            CallLogs.load(2).then((c) => { 
              //let todayCheck = moment(element?.type).format('MMMM D YYYY');

            let todayLogHistory = c.filter((element) => {
              return moment(element?.dateTime).format('MMMM D YYYY') == today
            })
            setTodayLog(todayLogHistory)
            console.log("this is what i got for today", todayLog)
            });

         

            setLoader(false)
            
            setContactLoading(false)
          } else {
            alert('Call Log permission denied');
          }
        } catch (e) {
          alert(e);
        }
      } else {
        alert(
          'Sorry! You cant get call logs in iOS devices because of the security concern',
           
        );
      }
    }
    fetchData();
  }, []);


 

  const returnBack = () => {
    props.navigation.goBack();
  };

  const deDuraionList = () => {
    bottomSheet.current.show();
  };

  const goToContact = () =>{
    props.navigation.navigate("Contact")
  }

  const goToHistory = () =>{
    props.navigation.navigate("CallHistory", {items:nextData})
  }

  

  const changeDuration = item => {
    setDuration(item.type);
    setDurationName(item?.name);
    dispatch(cleanAnalytics);
    bottomSheet.current.close();
    dispatch(agentAnalytics({duration: item.type}));
  };

  const CardList = useCallback(({icon, title, color, count}) => (
    <View style={styles.smCard}>
      <View style={styles.smImgCover}>
        <Icon name={icon} color={color} size={14} />
      </View>
      <View style={styles.smTextCover}>
        <Text style={styles.smCardTitle}>{title}</Text>
        <Text style={styles.smCardCount}>{count}</Text>
      </View>
    </View>
   ), []);

  const MdCardList = useCallback(({ circleStyle, title, image, description, onPress}) => (
  <TouchableOpacity onPress={onPress}>
          <View style={styles.mdCard}>
            <View style={circleStyle}>
              <Image
                style={styles.circleImg}
                source={image}
              />
            </View>
            <View style={styles.mdContentCover}>
              <Text style={styles.mdTitle}>{title}</Text>
              <Text style={styles.mdMiniText}>
              { description}
              </Text>
            </View>
            <Icon
              name="chevron-right"
              color="rgba(118, 118, 128, 1)"
              size={24}
            />
          </View>
        </TouchableOpacity>
        ), []);


        

  const data = {
    //  labels: ["January", "February", "March", "April", "May", "June"],
    labels: analyticsData?.performace?.labels,
    datasets: [
      {
        data: analyticsData?.performace?.data,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [durationName], // optional
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
        <StatusBar hidden />
    <View>
    
      <OrderHeader title="Log Report" onPress={returnBack} />
      <View style={styles.container}>
       
        <View style={styles.cardsContainer}>
          <CardList
            icon="phone-log-outline"
            color="rgba(66, 165, 245, 1)"
            title="Total Calls"
            count={totalCall}
          />
          <CardList
            icon="phone-incoming-outline"
            color="rgba(102, 187, 106, 1)"
            title="Incoming"
            count={incomingCall}
          />
          <CardList
            icon="phone-in-talk-outline"
            color="rgba(92, 107, 192, 1)"
            title="Outgoing"
            count={outGoingCall}
          />
          <CardList
            icon="phone-missed-outline"
            color="rgba(186, 26, 26, 1)"
            title="Missed"
            count={missedCall}
          />
          <CardList
            icon="phone-missed-outline"
            color="rgba(186, 26, 26, 1)"
            title="Blocked"
            count={blockedCall}
          />
          <CardList
            icon="phone-off-outline"
            color="rgba(118, 118, 128, 1)"
            title="Rejected"
            count="0"
          />
          <CardList
            icon="phone-ring-outline"
            color="rgba(255, 167, 38, 1)"
            title="Unknown Calls"
            count={unKnownedCall}
          />
         
        </View>

        <View style={styles.callTitleCover}>
          <Text style={styles.callManagerCaption}>Call Manager</Text>
        </View>


      
      </View>
      <View style={styles.chartContainer}>
          <MdCardList
            image={require('@Assets2/image/contacts.png')}
            description="Contact list with Call information"
            circleStyle={styles.mdCircle}
            title="Contacts"
            onPress={goToContact}
          />
           <MdCardList
            image={require('@Assets2/image/call_log.png')}
            description="Contact list with Call information"
            circleStyle={styles.mdCircleNew}
            title="Call History"
            onPress={goToHistory}
          />
           <Loader isVisible={loader} />
       </View>
     
      

      
    </View>
    </SafeAreaView>
  );
};

export default LogReport;
