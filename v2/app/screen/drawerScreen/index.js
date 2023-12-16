import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  SafeAreaView,
  Linking,
  ActivityIndicator,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import links from './data';
import midLinks from './midData';
import helpLinks from './helpData';
import legalLinks from './legalData';
import teams from './team'
import styles from './style';
import {logout, getUserDetails} from '@Store2/Auth';
import {getCustomers} from '@Request2/Customer';
import {getPaymentOptions} from '@Request2/paymentOptions';
import {priceList, priceListChemist} from '@Request2/PriceList';
import {cleanupPriceList} from '@Store2/PriceList';
import LogoutModal from './logoutModal';

const DrawerScreen = props => {
  const dispatch = useDispatch();
  const {notification} = useSelector(state => state.notification);
  const {priceStatus, list} = useSelector(state => state.priceList);
  const {customers} = useSelector(state => state.customer);
  const {options} = useSelector(state => state.paymentOptions);
  const [showLoader, setShowLoader] = useState(false);
  const [showPriceList, setShowPriceList] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const [successMsg, setSuccessMsg] = useState(null);

  const [link, setLinks] = useState(links);

  const [TP] = useState('https://remedialhealth.com/terms-of-service');

  const [FAQ] = useState(
    'https://docs.google.com/document/d/1DsXEgk8hqFltod96--XhCD5oTs5Zl7DrZ4toJHKem9I/edit',
  );

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const {user} = useSelector(state => state.auth);

  const messageCount = customers?.pending?.count;

  const getCreditOptions = () => {
    setShowPriceList(!showPriceList);
    dispatch(getPaymentOptions());
  };

  const getRandomColor = str => {
    const colors = [
      '#018091',
      '#03A896',
      '#00C29B',
      '#00AA55',
      '#009FD4',
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

  useEffect(() => {
    dispatch(getUserDetails());
    dispatch(getCustomers());
  }, []);

  const delayTime = () => {
    wait(5000).then(() => {
      setSuccessMsg(null);
      setErrMsg(null);
    });
  };

  useEffect(() => {
    if (priceStatus === 'pending') {
      setShowLoader(true);
    } else if (priceStatus === 'success') {
      setShowLoader(false);
      setSuccessMsg('Pricelist downloaded successfully');
      wait(5000).then(() => {
        dispatch(cleanupPriceList());
        setSuccessMsg(null);
        setErrMsg(null);
      });
    }
  }, [priceStatus]);
  const fileDownload = async () => {
    const localFile = `${RNFS.TemporaryDirectoryPath}/RemedialHealth_Pricelist.xlsx`

    const options = {
      fromUrl: list.path,
      toFile: localFile,
    };
    try {
      await RNFS.downloadFile(options).promise;
      await FileViewer.open(localFile);
    } catch (e) {
      console.log(e);
    }
  };

  const path = FileViewer.open(path, { showOpenWithDialog: true }) // absolute-path-to-my-local-file.
  .then(() => {
    // success
  })
  .catch((error) => {
    // error
  });




  const download = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Access to Storage',
            message: 'Download Price List',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          fileDownload();
        } else {
          console.log('Permission denied');
          setErrMsg('Permission denied');
          delayTime();
        }
      } else {
        fileDownload();
      }
    } catch (err) {
      console.warn(err);
      setErrMsg(err);
      delayTime();
    }
  };

  const getPriceList = id => {
    setShowPriceList(!showPriceList);
    dispatch(priceList(id));
  };
  const getPriceListChemist = () => {
    setShowPriceList(!showPriceList);
    dispatch(priceListChemist());
  };

  const redirectToURL = URL => {
    Linking.openURL(URL)
      .then(() => {
        console.log('Link Opened');
      })
      .catch(() => {
        Alert.alert('An error occurred');
      });
  };

  useEffect(() => {
    if (user.role === 6 || user.role === 1) {
      const data = links.filter(item => item.name !== 'Team');
      setLinks(data);
    }
  }, [user.role]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const logUserOut = () => {
    setShowLogoutModal(false);
    wait(1000).then(() => {
      dispatch(logout());
    });
  };

  const redirectToScreen = route => {
    if (route === 'SignOut') {
      setShowLogoutModal(true);
    } else if (route === 'FAQ') {
      redirectToURL(FAQ);
    } else if (route === 'TP') {
      redirectToURL(TP);
    } else if (route === 'priceList') {
      priceStatus === 'success' ? download : getPriceList();
    } else if (route === 'PendingReg') {
      props.navigation.navigate('CustomersDashboard', {id: 2});
    } else {
      props.navigation.navigate(route);
    }
  };
  const PriceList = ({item}) => (
    <View style={styles.dropInner}>
      <TouchableOpacity onPress={() => getPriceList(item.id)}>
        <View style={styles.dropItem}>
          <Text style={styles.dropList}>Hospital {item.price_increment}%</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const Pharmacy = () => (
    <View style={styles.dropInner}>
      <TouchableOpacity onPress={getPriceList}>
        <View style={styles.dropItem}>
          <Text style={styles.dropList}>Pharmacy</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const Chemist = () => (
    <View style={styles.dropInner}>
      <TouchableOpacity onPress={getPriceListChemist}>
        <View style={styles.dropItem}>
          <Text style={styles.dropListChemist}>Chemist</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const ListComponent = props => {
    const item = props.item;

    return (
      <View>
        <View style={styles.route}>
          <View style={styles.headerCover}>
            <Text style={styles.headerTitle}>Registration</Text>
          </View>
          <FlatList
            data={link}
            renderItem={List}
            listKey={(item, index) => 'D' + index.toString()}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            horizontal={false}
          />
        </View>
        <View style={styles.route}>
          <View style={styles.headerCover}>
            <Text style={styles.headerTitle}>Product</Text>
          </View>
          <FlatList
            data={midLinks}
            renderItem={ListExtra}
            listKey={(item, index) => 'D' + index.toString()}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            horizontal={false}
          />
        </View>

        {!showLoader ? (
          <TouchableOpacity
            style={styles.routeInnerView2}
            onPress={getCreditOptions}>
            <View style={styles.routeInnerView}>
              <View style={styles.routeTextView}>
                <View style={styles.routeTextIconView}>
                  <FIcon name="download" size={20} color="#767680" />
                </View>
                <Text style={styles.routeText}>Download Pricelist</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.agentVieww}>
            <View style={styles.routeInnerView2}>
              <View style={styles.routeTextView}>
                <View style={styles.routeTextIconView}>
                  <Image
                    source={require('@Assets/image/DownloadSimplee.png')}
                    style={styles.quesImg}
                  />
                </View>
                <Text style={styles.routeText}>Download Pricelist</Text>
              </View>
            </View>
          </View>
        )}

        {showPriceList ? (
          options.length ? (
            <>
              <View style={styles.dropCoverChemist}>
                <Chemist />
              </View>
              <View style={styles.dropCoverChemistMore}>
                <Pharmacy />
                <FlatList
                  data={options}
                  renderItem={PriceList}
                  keyExtractor={item => item.id}
                  vertical={true}
                />
              </View>
            </>
          ) : (
            <View style={styles.dropCover}>
              <ActivityIndicator size="small" color="green" />
            </View>
          )
        ) : null}
         <View style={styles.route}>
          <View style={styles.headerCover}>
            <Text style={styles.headerTitle}>Communication</Text>
          </View>
          <FlatList
            data={teams}
            renderItem={List}
            listKey={(item, index) => 'D' + index.toString()}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            horizontal={false}
          />
        </View>
        <View style={styles.route}>
          <View style={styles.headerCover}>
            <Text style={styles.headerTitle}>Help</Text>
          </View>
          <FlatList
            data={helpLinks}
            renderItem={List}
            listKey={(item, index) => 'D' + index.toString()}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            horizontal={false}
          />
        </View>

        <View style={styles.route}>
          <View style={styles.headerCover}>
            <Text style={styles.headerTitle}>Legal</Text>
          </View>
          <FlatList
            data={legalLinks}
            renderItem={List}
            listKey={(item, index) => 'D' + index.toString()}
            keyExtractor={(item, index) => `_key${index.toString()}`}
            horizontal={false}
          />
        </View>
      </View>
    );
  };

  const List = ({item}) => (
    <TouchableOpacity
      onPress={() => redirectToScreen(item.route)}
      style={styles.routeInnerView2}>
      <View style={styles.routeTextView}>
        <View style={styles.routeTextIconView}>
          <FIcon name={item.icon} size={20} color="#767680" />
        </View>
        <Text style={styles.routeText}>{item.name}</Text>
      </View>
      {item.side ? (
        <View style={styles.countCover}>
          <Text style={styles.countText}>{messageCount}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );

  const ListExtra = ({item}) => (
    <TouchableOpacity
      onPress={() => redirectToScreen(item.route)}
      style={styles.routeInnerView2}>
      <View style={styles.routeTextView}>
        <View style={styles.routeTextIconView}>
          <FIcon name={item.icon} size={20} color="#767680" />
        </View>
        <Text style={styles.routeText}>{item.name}</Text>
      </View>
      {item.side && showLoader ? (
        <View style={styles.activityCover}>
          <ActivityIndicator size="small" color="green" />
        </View>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView style={styles.headerInnerView}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#DDE1FF"
            hidden={false}
          />

          <View style={styles.profileImgCover}>
            {user.picture_url === null ? (
              <Image
                style={styles.userImg}
                source={require('@Assets2/image/personIcon.png')}
              />
            ) : (
              <Image
                style={styles.agentImg}
                source={{uri: `${URL}${user?.picture_url}`}}
              />
            )}
            <Image
              style={styles.verImg}
              source={require('@Assets2/image/verified.png')}
            />
          </View>

          <View style={styles.leftCover}>
            <TouchableOpacity
              style={styles.headerTitleInnerView}
              onPress={() => props.navigation.navigate('Settings')}>
              <View>
                <Text style={styles.titleText}>{user.name}</Text>
                <Text style={styles.headerTitleInnerTitle}>VIEW ACCOUNT</Text>
              </View>
              <View style={styles.chevronIcon}>
                <Icon name="chevron-right" size={24} color="#767680" />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.listCover}>
        <FlatList
          vertical
          listKey={(item, index) => 'D' + index.toString()}
          keyExtractor={(item, index) => `_key${index.toString()}`}
          ListFooterComponent={<ListComponent />}
        />
      </View>

      <LogoutModal
        logoutModal={showLogoutModal}
        returnBack={() => setShowLogoutModal(false)}
        proceed={logUserOut}
      />

      <View style={styles.toastCover}>
        {errMsg ? (
          <View style={styles.errView}>
            <MIcon name="error-outline" size={22} color="#fff" />
            <Text style={styles.errText}>{errMsg}</Text>
          </View>
        ) : null}

        {successMsg ? (
          <View style={styles.successView}>
            <MIcon name="check-circle" size={22} color="#fff" />
            <Text style={styles.successText}>{successMsg}</Text>
          </View>
        ) : null}
      </View>
    </View>
    </SafeAreaView>
  );
};

export default DrawerScreen;
