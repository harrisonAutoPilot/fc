import {StyleSheet, Dimensions} from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    body: {
        height: hp('100%'),
        width: Dimensions.get("window").width
    },
    imageHolder:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100
    },
    middleContainer:{
        width:300,
        height:300,
        // backgroundColor:'red',
        position:'absolute',
        alignSelf:'center',
        top:hp('10%'),
        alignItems:'center'

    },
    fText:{
    color: "#fff",
    fontSize: 33,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1,  
    // marginTop:-100
    },
    cTextSm:{
      color: "#fff",
      fontSize: 14,
      fontFamily: "AnekLatin-Medium",
      letterSpacing: 0.1,  
      textAlign:'center'
      // marginTop:-100
      },
    bottomCover:{
        position:'absolute',
        bottom:hp('20%'),
    },
    cText:{
        color: "#fff",
        fontSize: 20,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,      
    },
    closeBtn:{
      width:60,
      height:60,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:100,
    },
    pickBtn:{
      width:60,
      height:60,
      backgroundColor:'green',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:100,
    }
});

export default styles;