import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text,StyleSheet, Image, StatusBar} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
// import styles from "./style";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const HeaderWithGradient = (props) => {
  return (
    <View >
       <StatusBar barStyle="light-content" backgroundColor='#fff' hidden={true} />
        <LinearGradient
        
            // colors={['#f9d2f9', '#ca1cca']}
            // style={styles.container} colors={['#f9d2f9', '#ca1cca']}
            // colors={['#fff', '#f5f5f5']}
            // colors={['#fff', '#5f9a32']}
            // colors={['#bbe09f', '#477425']}
            style={styles.elevation}
            colors={['#fff', '#fff']}
            start={{ x: 1, y: 1.2}}
            end={{ x: 0.2, y: 0.8}}
            >
           <View style={styles.topCover}>
              <View style={styles.topInner}>
                  <View style={styles.profileCover}>
                    <Image source={require("../../assets/baba.jpeg")} style={styles.profileImg} />
                  </View>
                <Text style={props.styles}>{props.username}</Text>
              </View>
              <View style={styles.searchCover}>
              <TouchableOpacity>
                <Image source={require("../../assets/live.png")} style={styles.liveImg} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/magnifying-glass.png")} style={styles.searchImg} />
            </TouchableOpacity>
                <Image source={require("../../assets/note.png")} style={styles.noteImg} />
              </View>
            </View>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
   
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:'black',
    width:80,
    height:80,

  },
  topCover:{
    width:wp('100%'),
    height:65,
  //   backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  topInner:{
    flexDirection:'row',
    marginTop:-5,
    // justifyContent:'space-around',

  },
  profileCover:{
    borderWidth:0,
    borderColor:'#f2f3f4',
    borderStyle:'solid',
    borderRadius:100,
    width:50,
    height:50,
    marginTop:15,
    marginLeft:20,
    marginRight:10,

  },
  profileName:{
    marginTop:15,
    color:'#5f9a32',
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
  liveImg:{
    width:38,
    height:38,
    marginTop:10,
    marginRight:20,
    // borderRadius:100,
  },
  searchCover:{
    marginTop:30,
    marginRight:40,
    flexDirection:'row',
    marginTop:6,
  },
  noteImg:{
    width:20,
    height:20,
    marginleft:10,
    marginLeft:20,
    marginTop:20,
  },
  elevation: {
    elevation:5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth:1,
    borderColor:'#f5f5f5',
    borderStyle:'solid',
  },
});

export default HeaderWithGradient;