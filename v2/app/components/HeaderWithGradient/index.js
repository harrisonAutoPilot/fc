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
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderWithGradient = (props) => {
  return (
    <View style={styles.top}>
     <StatusBar barStyle="light-content" backgroundColor='transparent' hidden={true} />
        <LinearGradient
            //  colors={['#f9d2f9', '#ca1cca']}
            // colors={['#bbe09f', '#477425']}
            // colors={['#fff', '#f5f5f5']}
            colors={['#fff', '#fff']}
            start={{ x: 1, y: 1.2}}
            end={{ x: 0.2, y: 0.8}}
            >
           <View style={styles.topCover}>
              <View style={styles.topInner}>
                  <View style={styles.profileCover}>
                    <Image source={require("../../assets/baba.jpeg")} style={styles.profileImg} />
                  </View>
                <Text style={styles.profileName}>{props.title}</Text>
              </View>
              <View style={styles.searchCover}>
            <TouchableOpacity>
                {/* <Image source={require("../../assets/addd.png")} style={styles.searchImg} /> */}
         
                <Image source={require("../../assets/note.png")} style={styles.noteImg} />
                </TouchableOpacity>
              </View>
            </View>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
   width:'100%',
 marginBottom:8,

  },
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
    marginTop:24,
    color:'#5f9a32',
    fontSize:24,
    fontFamily: "AnekLatin-SemiBold"
  },
  profileImg:{
    width:48,
    height:48,
    borderRadius:100,
  },
  searchImg:{
    width:24,
    height:24,
    marginTop:3,
    // borderRadius:100,
  },
  searchCover:{
    marginTop:20,
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
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 3,
    borderWidth:1,
    borderColor:'#f5f5f5',
    borderStyle:'solid',
  },
});

export default HeaderWithGradient;