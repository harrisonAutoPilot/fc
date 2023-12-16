import React, {useState, useEffect,useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {StoreHeader} from '@Component2';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Zcon from 'react-native-vector-icons/MaterialIcons';
// import ViewDocument from '../ViewDocument';
import HeaderComponent from './headerComponent';
import AgentCheckStatusBar from './agentCheckStatusBar';
import {visitStore, leaveVisitedStore,currentVisitedStore} from '@Request2/Store';
import {cleanUpVisitedStoreData,cleanUpCurrentStore} from '@Store2/Stores';
import CheckOutModal from './checkOutModal';
import Loader from '@Screen2/loader';
import Geolocation from 'react-native-geolocation-service';

const StoreDetails = (props, navigation) => {
  const dispatch = useDispatch();
  const items = props?.route?.params?.item;
  const {visitStatus,leaveStatus,currentStoreData, errors} = useSelector(state => state.store);
  const [showDocument, setShowDocument] = useState(false);
  const [agentCheckIn, setAgentCheckIn] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [storeImg, setStoreIMg] = useState('');
  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [location, setLocation] = useState(false);
  const [lat, setLat] = useState(0);
  const [longi, setLongi] = useState(0);
  const [note, setNote] = useState("")


  const returnBack = () => {
    props.navigation.goBack();
  };


 useEffect(() => {
  getLocation()

  }, []);


  const StoreImg = ({item}) => (
    <TouchableOpacity onPress={() => viewDoc(item.url)}>
      <Image source={{uri: `${item.url}`}} style={styles.photoCover} />
    </TouchableOpacity>
  );

  const viewDoc = img => {
    setShowDocument(true);
    setStoreIMg(img);
  };

  const changeStatus = check => {
    console.log('the item', check);

    submit();
  };

  const agentCheckOut = () => {
    setShowCheckInModal(true);
  };

  const checkOutFromStore = () => {
    const data = {store_id: items.id};
    dispatch(leaveVisitedStore(data))
   
  };


  console.log("this is where i check for the status", currentStoreData)

  // this is the permission to get user location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const sendMessage =(text)=>{
    setNote(text)
    console.log("inside home", text)
  }
   


  const submit = () => {
    const data = {
      store_id: items.id,
      longitude: longi,
      latitude: lat,
      note,
    };

    dispatch(visitStore(data));
  };

  useEffect(() => {
    if (visitStatus === 'success') {
      dispatch(currentVisitedStore())
      setAgentCheckIn(true);

    } else if (visitStatus === 'failed') {
      console.log('this is the error', errors?.msg);
      refreshView(errors?.msg)
    }
  }, [visitStatus]);



  useEffect(() => {
    if (leaveStatus === 'success') {
      setShowCheckInModal(false);
       setAgentCheckIn(false);
       dispatch(cleanUpVisitedStoreData())
       dispatch(cleanUpCurrentStore())
    } else if (leaveStatus === 'failed') {
      console.log('this is the error', errors?.msg);
      refreshView(errors?.msg)
    }
  }, [leaveStatus]);

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log('this is the position', position);
            setLocation(position);
            setLat(position?.coords.latitude)
            setLongi(position?.coords.longitude)
           
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  const refreshView = useCallback(msg => {
    wait(100).then(() => {
      setLoader(false);

      setErrMsg(msg);
    });

    wait(4000).then(() => {

      // dispatch(cleanUpVisitedStoreData());

      setErrMsg(null);
    });
  }, []);

  return (
    <View style={styles.container}>
     
      {visitStatus === 'success' || Object.values(currentStoreData).length > 0 ?
      <AgentCheckStatusBar 
      checkOut={agentCheckOut} 
      onPress={returnBack}
      checkInStatus={agentCheckIn}
      changeStatus={changeStatus}
      />  
       : 
      <HeaderComponent
        onPress={returnBack}
        checkInStatus={agentCheckIn}
        changeStatus={changeStatus}
      />
      }
      <View style={styles.titleCover}>
        <Text style={styles.titleText}>STORE INFORMATION</Text>
      </View>
      <View style={styles.cardCover}>
        <View style={styles.iconCover}>
          <Icon name="store" color="#767680" size={24} />
        </View>
        <View style={styles.contentCover}>
          <Text style={styles.nameText}>Store Name</Text>
          <Text style={styles.addressText}>{items?.name}</Text>
        </View>
      </View>

      <View style={styles.cardCover}>
        <View style={styles.iconCover}>
          <Icon name="map-marker-outline" color="#767680" size={24} />
        </View>
        <View style={styles.contentCover}>
          <Text style={styles.nameText}>Store Address</Text>
          <Text style={styles.addressText}>{items?.address}</Text>
        </View>
      </View>

      <View style={styles.photoTitleCover}>
        <Text style={styles.photoTitleText}>STORE PHOTOS</Text>
      </View>

      <View style={styles.photoContainer}>
        <FlatList
          //  horizontal={true}
          data={items?.store_images}
          renderItem={StoreImg}
          keyExtractor={item => item.id}
          numColumns={3}
          ListFooterComponent={<View style={{height: 50}} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* <ViewDocument
        visibleDocument={showDocument}
        returnBack={() => setShowDocument(false)}
        img={storeImg}
      /> */}
      <CheckOutModal
        checkOutModal={showCheckInModal}
        returnBack={() => setShowCheckInModal(false)}
        store={currentStoreData?.name}
        location={currentStoreData?.address}
        sendMessage={sendMessage}
        proceed={checkOutFromStore}
      />

      {errMsg && (
        <View style={styles.toastCover}>
          <View style={styles.errView}>
            <MIcon name="error-outline" size={22} color="#fff" />
            <Text style={styles.errText}>{errMsg}</Text>
          </View>
        </View>
      )}

      <Loader isVisible={loader} />
    </View>
  );
};

export default StoreDetails;
