import React, {useEffect,useCallback, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import VersionCheck from 'react-native-version-check';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from 'toggle-switch-react-native';
import HomeHeaderComponent from './HomeHeaderComponet';
import {visitStore, leaveVisitedStore,currentVisitedStore} from '@Request2/Store';
import {agentCheckin, getUser, getAgentCheckinStatus} from '@Request2/Auth'
import credentials from "@Request2/Credentials";
import {cleanUpVisitedStoreData,cleanUpCurrentStore} from '@Store2/Stores';
import {getAgent} from '@Request2/Agent';
import {getDeals} from '@Request2/Deal';
import styles from './style';
import {getCustomers} from '@Request2/Customer';
import {listCart} from '@Request2/Cart';
import AgentCheckStatusBarr from './agentCheckStatusBar'
import CheckOutModal from '@Screen2/myStore/storeDetails/checkOutModal'
import Loader from '@Screen2/loader';
import NewUpdateModal from './newUpdateModal';


const Home = props => {
  const dispatch = useDispatch();

  const date = new Date();

  const {user, dailyCheckinStatus, dailyCheckinData,myCheckInStatus, myCheckInData, checkInErrors} = useSelector(state => state.auth);

  const {customers} = useSelector(state => state.customer);

  const {visitStatus,leaveStatus,currentStoreData,leaveErrors, errors} = useSelector(state => state.store);

  const [agentCheckIn, setAgentCheckIn] = useState(false);

  const {deals} = useSelector(state => state.deal);

  const [timer, setTimer] = useState(false);

  const [versionStatus, setVersionState] = useState(false);

  const {agent} = useSelector(state => state.agent);

  const [dayTime, setDayTime] = useState(null);

  const [dayTimeImage, setDayTimeImage] = useState(null);

  const [toggleSwitch, setToggleSwitch] = useState(myCheckInData.online);

  const [showDocument, setShowDocument] = useState(false);

  const [showCheckInModal, setShowCheckInModal] = useState(false);

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [storeImg, setStoreIMg] = useState('');

  const [loader, setLoader] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  const [note, setNote] = useState("")

  const redirectToDeals = () => props.navigation.navigate('GenProducts');

  const redirectToCustomerOrders = () => props.navigation.navigate('Order');

  const openNotification = () => props.navigation.navigate('Notification');

  const { items, listItems } = useSelector((state) => state.cart);

  const openCart = () => props.navigation.navigate('Cart');

  const gotoActivity = () => props.navigation.navigate('ActivityReport');

  const redirectToPendingCustomers = () =>
    props.navigation.navigate('CustomersDashboard', {id: 2});

  const redirectToInactiveCustomers = () =>
    props.navigation.navigate('CustomersDashboard', {id: 1});

  useEffect(() => {
    if (user.status === 0) {
      props.navigation.navigate('AwaitVerification');
    }
  }, [user.status]);



const sendMessage =(text)=>{
  setNote(text)
  console.log("inside home", text)
}
 

  useEffect(() => {
   
    Platform.OS === "android" ? checkAndroidUpdate(): checkIosUpdate();

}, [versionStatus]);


useEffect(() => {
  if(versionStatus){
    setShowUpdateModal(true)
  }

}, [versionStatus]);



  const checkAndroidUpdate = async () => {

    try {
        const currentVersion = VersionCheck.getCurrentVersion();
        const res = await fetch(
            `https://play.google.com/store/apps/details?id=${VersionCheck.getPackageName()}&hl=en`
        );
        const text = await res.text();

        const match = text.match(/\[\[\["([\d.]+?)"\]\]/);
        if (match) {
            const latestVersion = match[1].trim();
            if (latestVersion > currentVersion) {
                setVersionState(true)
            } else {
                setVersionState(false)
            }

        } else return null;
    } catch (error) {
        setVersionState(false)
    }

}

const checkIosUpdate = async () => {

    try {
        const currentVersion = VersionCheck.getCurrentVersion();
        const latestVersion = await VersionCheck.getLatestVersion({provider: 'appStore'  })

            if (latestVersion > currentVersion) {
                setVersionState(true)
            } else {
                setVersionState(false)
            }

    } catch (error) {
        setVersionState(false)
    }

}



  const redirectToPlaystore = () => {
    setShowUpdateModal(false)
    const URL = Platform.OS === "android" ? "https://play.google.com/store/apps/details?id=com.rhmagent" : "https://apps.apple.com/us/app/remedial-agent/id1640313629";
    
    Linking.openURL(URL)
      .then(() => {
        console.log('Link Opened');
      })
      .catch(() => {
        Alert.alert('An error occurred');
      });
    }
  



  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

// this is for the check out modal
  const checkOutFromStore = () => {

    const data = {store_id: currentStoreData.id, note};
    dispatch(leaveVisitedStore(data))
   
  };


  const agentCheckOut = () => {
    setShowCheckInModal(true);
  };



  const refreshView = useCallback(msg => {
    wait(100).then(() => {
      setLoader(false);

      setErrMsg(null);
    });

   
  }, []);


 
  useEffect(() => {
    if (myCheckInData?.online == true){
      setToggleSwitch(true)
    }
  
  }, [myCheckInData]);

  useEffect(() => {
    if (leaveStatus === 'success') {
      setShowCheckInModal(false);
      setAgentCheckIn(false);
       dispatch(cleanUpVisitedStoreData());
       dispatch(cleanUpCurrentStore())
       dispatch(currentVisitedStore())
    } else if (leaveStatus === 'failed') {
      refreshView(leaveErrors?.msg)

      console.log("the leave oooo", leaveErrors)

    }
  }, [leaveStatus]);






  useEffect(() => {
    if (dailyCheckinStatus === 'success') {
   
      refreshView()
    } else if (dailyCheckinStatus === 'failed') {
   
      refreshView(errors?.msg)
    }
  }, [dailyCheckinStatus]);

  // agentCheckin 

const SwitchChecking = (isOn) =>{
  setToggleSwitch(isOn)
  if(isOn === true){
    dispatch(agentCheckin())
    dispatch(getAgentCheckinStatus())
  }
}

  useEffect(() => {
 
    if ((date.getHours() > 0 || date.getHours() == 0) && date.getHours() < 12) {
      setDayTime('Good Morning');

      setDayTimeImage(require('@Assets/image/sun.png'));
    } else if (
      (date.getHours() > 12 || date.getHours() == 12) &&
      date.getHours() < 18
    ) {
      setDayTime('Good Afternoon');

      setDayTimeImage(require('@Assets/image/sun.png'));
    } else {
      setDayTime('Good Evening');

      setDayTimeImage(require('@Assets/image/night.png'));
    }

    dispatch(getAgent());

    dispatch(getCustomers());

    dispatch(listCart());

    dispatch(getDeals({no: 1}));
    
    dispatch(getAgentCheckinStatus())

    dispatch(currentVisitedStore())
  }, []);

  const CardList = useCallback(({
    imageOne,
    imageTwo,
    title,
    count,
    style,
    styleOne,
    onPress,
  }) => (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image style={styleOne} source={imageOne} />
      <View style={styles.cardTop}>
        <Image style={styles.smIconImg} source={imageTwo} />
        <Text style={styles.numberText}>{count}</Text>
      </View>

      <View>
        <Text style={styles.captionText}>{title}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
    <View style={styles.container}>
     <View style={styles.check}>
     {visitStatus === 'success' || Object.values(currentStoreData).length > 0 ?
    <AgentCheckStatusBarr checkOut={agentCheckOut} />  
      :
       <StatusBar
        backgroundColor={'rgba(221, 225, 255, 3)'}
        barStyle="dark-content"
      />
       }
     </View>
    
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          colors={['#ffffff', 'rgba(221, 225, 255, 3)']}
          start={{x: 0, y: 2}}
          end={{x: 0, y: 0}}
          style={styles.mainContainer}>
          <HomeHeaderComponent
            picture_url={user?.picture_url}
            dayTime={dayTime}
            dayTimeImage={dayTimeImage}
            userName={user.name}
            onPress={openNotification}
            onPressCart={openCart}
            orderCount={items.carts?.total}
          />

          <View style={styles.toggleCover}>
          <View style={styles.toggleInner}>
          {myCheckInData?.online === true ? 
              <Text style={styles.toggleText}>I'm online</Text>
            : 
              <Text style={styles.toggleTextOff}>I'm offline</Text>
            }
          </View>

            <ToggleSwitch
              isOn={toggleSwitch}
              onColor="rgba(105, 189, 123, 1)"
              offColor="#f5f5f5"
              size="small"
              onToggle={isOn => SwitchChecking(isOn)}
            />
        
          </View>
          <View style={styles.middleContainer}>
            <CardList
              onPress={redirectToPendingCustomers}
              style={styles.innerCard}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/waveGroup1.png')}
              imageTwo={require('@Assets2/image/lab_profile.png')}
              title="NEW & PENDING REGISTRATION"
              count={agent.users_count}
            />

            <CardList
              onPress={redirectToCustomerOrders}
              style={styles.innerCardTwo}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/wave2.png')}
              imageTwo={require('@Assets2/image/inventory_2.png')}
              title="ALL ORDERS"
              count={agent.orders_count}
            />
            <CardList
              onPress={redirectToDeals}
              style={styles.innerCardThree}
              styleOne={styles.waveImg}
              imageOne={require('@Assets2/image/sunWave.png')}
              imageTwo={require('@Assets2/image/Tag.png')}
              title="SPECIAL DEALS"
              count={deals?.total}
            />

            <CardList
              onPress={redirectToInactiveCustomers}
              style={styles.innerCardFour}
              styleOne={styles.waveImg1}
              imageOne={require('@Assets2/image/wave2.png')}
              imageTwo={require('@Assets2/image/account_circle_off.png')}
              title="INACTIVE CUSTOMERS"
              count={customers?.inactive?.count}
            />

            <View style={styles.cardBottom}>
              <View style={styles.bottomCardInner}>
                <Image
                  style={styles.barImg}
                  source={require('@Assets2/image/barr.png')}
                />
                <View style={styles.bottomCardLeft}>
                  <Text style={styles.barText}>
                    Your Weekly Activity/Performance Report is here
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.bottomView}
                  onPress={gotoActivity}>
                  <Icon
                    name="eye"
                    color="#3353CB"
                    style={styles.smEye}
                    size={20}
                  />
                  <Text style={styles.bottomViewText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
     
      
      </ScrollView>
   
    {errMsg && (
        <View style={styles.toastCover}>
          <View style={styles.errView}>
            <MIcon name="error-outline" size={22} color="#fff" />
            <Text style={styles.errText}>{errMsg}</Text>
          </View>
        </View>
      )}

    
    <View style={{overflow:'hidden'}}>
      
      {showCheckInModal && (
        <CheckOutModal
        checkOutModal={showCheckInModal}
        returnBack={() => setShowCheckInModal(false)}
        store={currentStoreData?.name}
        location={currentStoreData?.address}
        sendMessage={sendMessage}
        proceed={checkOutFromStore}
      />
    
      )}

    <NewUpdateModal
        checkUpdateModal={showUpdateModal}
        returnBack={() => setShowUpdateModal(false)}
        proceed={redirectToPlaystore}
      />
    
    </View>
     
  
  <Loader isVisible={loader} />
    </View>
    </SafeAreaView>
  );
};

export default Home;
