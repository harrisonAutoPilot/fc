import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {InputField, Header} from '@Component';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import InActive from './Inactive';
import Sent from './sent'
import Incoming from "./incoming"
import Scheduled from "./scheduled"
import Pending from './Pending';
import Active from './Active';
import {getCustomers} from '@Request2/Customer';
import {cleanup} from '@Store2/Customer';

const CustomersDashboard = props => {
  const dispatch = useDispatch();

  const {items, listItems} = useSelector(state => state.cart);
  const [activeId, setActiveId] = useState(1);

  const [search, setSearch] = useState('');

  const [result, setResult] = useState([]);

  const showActive = id => setActiveId(id);

  useEffect(() => {
    if (search.length) {
      searchCustomers();
    } else if (!search.length) {
      setResult([]);
    }
  }, [search.length]);

  useEffect(() => {
    dispatch(getCustomers());
    return () => dispatch(cleanup());
  }, []);

  useEffect(() => {
    if (props.route.params?.id === 1) {
      setActiveId(3);
    } else if (props.route.params?.id === 2) {
      setActiveId(1);
    }
  }, [props.route.params]);

  const reg_details = items =>
    props.navigation.navigate('CustomerRegistration', {items, key: 1});

  const openNotification = () => props.navigation.navigate('Notification');

  const openCart = () => props.navigation.navigate('Cart');

  const custom_details = (details, name) =>
    props.navigation.navigate('CustomerDetails', {details, name});

  const {customers} = useSelector(state => state.customer);

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
    <View style={styles.view}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={true} />
      <View style={styles.topNav}>
        <View style={styles.leftNav}>
          <View style={styles.greetCover}>
            <Text style={styles.nameText}>Appointment</Text>
          </View>
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity onPress={openNotification}>
            <Icon name="bell-outline" size={20} color={'rgba(28, 27, 31, 1)'} />
            <View style={styles.noteDot} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openCart}>
            <Icon name="cart-outline" size={20} color={'rgba(28, 27, 31, 1)'} />
            <View style={styles.countCover}>
              <Text style={styles.countText}>{items.carts?.total}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainBody}>
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={[
              styles.firstHeader,
              activeId === 1
                ? styles.activeSubHeader
                : styles.inActiveSubHeader,
              styles.miniSubHeader,
            ]}
            onPress={() => {
              showActive(1);
              setSearch('');
            }}>
            <View>
              <Text
                style={[
                  activeId === 1
                    ? styles.activeSubHeaderText
                    : styles.inActiveSubHeaderText,
                  styles.miniSubHeaderText,
                ]}>
                SENT
              </Text>
            </View>
            <View style={styles.firstInnerHeader}>
              {/* <Text style={styles.firstInnerTitle}>{customers?.pending?.count ? customers?.pending?.count : 0}</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              activeId === 2
                ? styles.activeSubHeader
                : styles.inActiveSubHeader,
              styles.miniSubHeader,
            ]}
            onPress={() => {
              showActive(2);
              setSearch('');
            }}>
            <Text
              style={[
                activeId === 2
                  ? styles.activeSubHeaderText
                  : styles.inActiveSubHeaderText,
                styles.miniSubHeaderText,
              ]}>
              INCOMING
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              activeId === 3
                ? styles.activeSubHeader
                : styles.inActiveSubHeader,
              styles.miniSubHeader,
            ]}
            onPress={() => {
              showActive(3);
              setSearch('');
            }}>
            <Text
              style={[
                activeId === 3
                  ? styles.activeSubHeaderText
                  : styles.inActiveSubHeaderText,
                styles.miniSubHeaderText,
              ]}>
            SCHEDULED
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              activeId === 4
                ? styles.activeSubHeader
                : styles.inActiveSubHeader,
              styles.miniSubHeader,
            ]}
            onPress={() => {
              showActive(4);
              setSearch('');
            }}>
            <Text
              style={[
                activeId === 4
                  ? styles.activeSubHeaderText
                  : styles.inActiveSubHeaderText,
                styles.miniSubHeaderText,
              ]}>
            RECURRENT
            </Text>
          </TouchableOpacity>
        </View>

        {activeId === 1 ? (
          <Sent details={reg_details} props={props} result={result} />
        ) : activeId === 2 ? (
          <Incoming details={custom_details} props={props} result={result} />
        ) : activeId === 3 ? (
          <Scheduled details={custom_details} props={props} result={result} />
        ) : activeId === 4 ? (
          <Pending details={custom_details} props={props} result={result} />
        ) : null}
      </View>
    </View>
  </SafeAreaView>
  );
};

export default CustomersDashboard;
