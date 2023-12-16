import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity,  PermissionsAndroid, Image, FlatList, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from "react-native-vector-icons/Feather";

import styles from './style';
import { getStore } from "@Request2/Store";
import { getUserStore, updateCustomerStoreCord} from "@Request2/Store";
import { cleanup } from "@Store2/Stores";
import Geolocation from 'react-native-geolocation-service';
import EmptyStore from './EmptyStore';
import StorePlaceholderLoader from './StorePlaceholderLoader';
import { TransactionHeader } from "@Component2";
import ConfirmUpdate from "./confirmUpdate"


const MyStore = (props) => {

  const dispatch = useDispatch();
  const { status, usersStore,errors, storeUpdate, cordErrors } = useSelector((state) => state.store);
  // const { storeStatus, stores, errors, removeStatus } = useSelector(state => state.store);

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  const [itemInfo, setItemInfo] = useState()

  const [refreshing, setRefreshing] = useState(false);

  const [successMsg, setSuccessMsg] = useState(null);

  const [location, setLocation] = useState(false);

  const [lat, setLat] = useState(0);

  const [longi, setLongi] = useState(0);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  useEffect(() => {
    dispatch(getUserStore(props.route.params?.id))
    return () => dispatch(cleanup());
}, [])


const sendUpdate = (item) =>{
  setItemInfo(item)
  setShowUpdateModal(true)
}

  useEffect(() => {
    getLocation()
    dispatch(getStore());

  }, []);


  const submit = () => {
    const data = {
      store_id: itemInfo.id,
      longitude: longi,
      latitude: lat,
    };
    dispatch(updateCustomerStoreCord(data))
    wait(1000).then(() => {

      setShowUpdateModal(false);
    });
  }


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

  const refreshStore = useCallback(() => {

    setRefreshing(true);

    dispatch(cleanup());

    dispatch(getUserStore(props.route.params?.id))
        .unwrap()
        .then(() => {

            setRefreshing(false);

        }).catch((err) => {
            // handle error here
            
            setRefreshing(false);
          
        })

}, []);



  const returnBack = () => {

    props.navigation.goBack();

  };

  const details = item => {

    props.navigation.navigate('StoreDetails', { item });

  };


  const addStore = () => props.navigation.navigate('AddStore');

  const getRandomColor = str => {
    const colors = [
      '#018091',
      '#03A896',
      '#00C29B',
      '#00AA55',
      '#106D34',
      '#B381B3',
      '#939393',
      '#E3BC00',
      '#D47500',
      '#DC2A2A',
      '#07668C',
    ];
    let numberFromText = function (text) {
      const charCodes = text
        ?.split('')
        .map(char => char.charCodeAt(0))
        .join('');
      return parseInt(charCodes, 10);
    };

    return colors[numberFromText(str) % colors.length];
  };

console.log("this is the store check", usersStore?.stores)

  useEffect(() => {

    if (status === "failed") {

      setErrMsg(errors?.msg);

    }

  }, [status]);


  useEffect(() => {

    if (storeUpdate === "success") {

      setSuccessMsg("Store Update Completed")
      wait(2000).then(() => {
        
        setShowUpdateModal(false);

      });

      wait(4000).then(() => {

        setSuccessMsg(null)
      });


    }else if (storeUpdate === "failed"){
      setErrMsg(cordErrors?.msg);

    }

  }, [storeUpdate]);


  console.log("the stores", usersStore)

  const StoreView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => details(item)}>
        <View style={styles.card}>

          <View
            style={[
              styles.imgCover,
              { backgroundColor: getRandomColor(item?.name) },
            ]}>
            {
              item.status === 1 ?

                <Image
                  source={require("@Assets2/image/ftick.png")}
                  style={styles.badgeStyle}
                />
                :
                null
            }
            <Text style={styles.abvText}>{item?.name.substring(0, 1)}</Text>

          </View>
          <View style={styles.contentCover}>
            <Text style={styles.bgText}>{item.name}</Text>
            <Text style={styles.smText}>{item.address}</Text>
           {item.longitude === "" || item.latitude === "" ?
            <TouchableOpacity  onPress={() => sendUpdate(item)}>
            <View style={styles.updateBtn}>
            <Text style={styles.updateText}>COMPLETE STORE UPDATE</Text>
            </View>
          </TouchableOpacity>
          :
          null}
          </View>
          <View style={styles.arrowCover}>
            <Icon name="chevron-right" color="#767680" size={24} />
          </View>
          
        </View>
           
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <TransactionHeader title="Stores" onPress={returnBack} />

      {usersStore.length > 0 ? (
        <View style={styles.storeContainer}>
          <Text style={styles.storeText}>All Stores</Text>
        </View>
      ) : null}

      <View style={styles.bottom}>

        {status === "pending" || status === "idle"
          ?
          <StorePlaceholderLoader />
          :
          <FlatList
          contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
            vertical
            data={usersStore?.stores}
            keyExtractor={item => item.id}
            renderItem={StoreView}
            ListEmptyComponent={EmptyStore}
            refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={refreshStore} />
          }
          ListFooterComponent={<View style={{paddingBottom: "30%"}}/>}
          />
        }
      </View>


      <View style={styles.addBtn}>
        <TouchableOpacity style={styles.btnInner} onPress={addStore}>
          <Icon name="store" color="#ffffff" size={20} />
          <Text style={styles.addText}>Add New Store</Text>
        </TouchableOpacity>
      </View>

      {errMsg && <View style={styles.toastCover}>
        <View style={styles.errView} >
          <MIcon name="error-outline" size={22} color="#fff" />
          <Text style={styles.errText}>{errMsg}</Text>
        </View>
      </View>}


      {successMsg && <View style={styles.toastCover}>
        <View style={styles.sucView} >
          <FIcon name="trash-2" size={22} color="#fff" />
          <Text style={styles.errText}>{successMsg}</Text>
        </View>
      </View>}

      <ConfirmUpdate
        updateModal={showUpdateModal}
        returnBack={() => setShowUpdateModal(false)}
        proceed={submit}
      />
      
    </View>
  );
};

export default MyStore;
