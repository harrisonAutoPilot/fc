import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
const styles = StyleSheet.create({
  
    topCover:{
      width:wp('100%'),
      height:60,
    //   backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'space-between',
      elevation:5,
      shadowColor:'#000',
     
    },
    topInner:{
      flexDirection:'row',
      marginTop:5,
      // justifyContent:'space-around',

    },
    profileCover:{
      borderWidth:1,
      borderColor:'#f2f3f4',
      borderStyle:'solid',
      borderRadius:100,
      width:50,
      height:50,
      marginTop:20,
      marginLeft:20,
      marginRight:10,

    },
    profileName:{
      marginTop:5,
      color:'#fff',
      
    },
    profileImg:{
      width:48,
      height:48,
      borderRadius:100,
    },
    searchImg:{
      width:24,
      height:24,
      marginTop:20,
      // borderRadius:100,
    },
    searchCover:{
      marginTop:60,
      marginRight:40,
      flexDirection:'row',
    },
    noteImg:{
      width:20,
      height:20,
      marginLeft:20,
      marginTop:5,
    },
    elevation: {
      elevation:5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      // shadowOpacity: 0.2,
      shadowRadius: 3,
      borderWidth:1,
      borderColor:'#f5f5f5',
      borderStyle:'solid',
    },
    
  });