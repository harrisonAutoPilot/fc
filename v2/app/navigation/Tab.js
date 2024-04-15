import React, { useState, useEffect, useCallback, useRef } from "react";
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Zcon from 'react-native-vector-icons/Feather';
import {Host} from 'react-native-portalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import Home from '@Screen2/HomeFC';
import DrawerScreen from '@Screen2/drawerScreen';
import UserProfile from '@Screen2/UserProfile'
import Search from '@Screen2/Search';
// import Wallet from '@Screen2/Wallet';
 import CustomerRegistration from "@Screen2/Customers/Registration";
import AppointmentDashboard from '@Screen2/Appointment/Dashboard';
import {MiddleOption, ActiveCustomers} from "@Component2"

const Tab = createBottomTabNavigator();

export default TabHomeNavigator = () => {
  const items = 0;
  const [showMiddle, setShowMiddle] = useState(false);
  const [showActiveCustomer, setShowActiveCustomer] = useState(false)
  const [passProps, setPassProps] = useState()
  const bottomSheetRef = useRef(null);
  
  const addPost = () =>{
    setShowMiddle(false)
    passProps.navigate("AddPost", { items, key: 1 })
  }

  const closeSupportGroup = () =>{
    passProps.navigate("SupportGroup")
    setShowMiddle(false)
    // bottomSheetRef.current.show()
  }

  const closeActive = () =>{
    setShowMiddle(false)
   setShowActiveCustomer(false)
   bottomSheetRef.current.close()
  }

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabelStyle: styles.tabLable,
          tabBarActiveTintColor: '#99cb01',
          tabBarInactiveTintColor: '#45464F',
          tabBarStyle: styles.tabBarStyle,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon
                name="home-variant"
                color={color}
                size={18}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />
       <Tab.Screen
          name="SearchScreen"
          component={Search}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Zcon
                name="search"
                color={color}
                size={18}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />
       
        <Tab.Screen
          name="Check"
          component={CustomerRegistration}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: () => null,
            tabBarIcon: ({color}) => (
              <Image
              source={require('@Assets2/image/mee.jpg')}
              style={styles.uniqueStyle}
            />
            ),
          })}
          listeners={({navigation}) => ({
            tabBarBadgeStyle: styles.badgeStyle,
            tabPress: e => {
              e.preventDefault();
              setPassProps(navigation)
              setShowMiddle(true)
              //  navigation.navigate("CustomerRegistration", { items, key: 1 });
            },
          })}
        />

      <Tab.Screen
          name="AppointmentScreen"
          component={AppointmentDashboard}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon
                name="calendar-month"
                color={color}
                size={18}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />

        <Tab.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={({navigation: {isFocused}}) => ({
            tabBarLabel: 'More',
            tabBarIcon: ({color}) => (
              <Icon
                name="menu"
                color={color}
                size={18}
                style={styles.iconStyle}
              />
            ),
            tabBarIconStyle: isFocused() && styles.item,
            tabBarLabelStyle: isFocused() && styles.tabLableActive,
          })}
        />
      </Tab.Navigator>
      <MiddleOption
          visibleMiddle ={showMiddle}
          returnBack={() => setShowMiddle(false)}
          customerReg={closeSupportGroup}
          activeCustomer={addPost}
          />

       <ActiveCustomers
          visibleActive ={bottomSheetRef}
          returnBackActive={closeActive}
       
          
          />
    </Host>
  );
};
