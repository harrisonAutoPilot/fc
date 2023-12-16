import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%'),
        backgroundColor:'rgba(110, 191, 12, 1)'
    },
    afterTop: {
        width: wp('70%'),
        marginLeft: wp('15%'),
        marginRight: wp('15%'),
        marginTop: 10,
    },
    mainCover:{
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-between',
      
    },
    middleContainer:{
    flexDirection:'column',
    justifyContent:'space-between',
    width:wp('100%'),
    height:hp('50%'),

    },
    successImg:{
        width:250,
        height:250,
        marginTop:50,
        marginBottom:60,
      },
    topText: {
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        color: "#ffffff",
        letterSpacing: 0.2,
        textAlign: "center"
    },
    downText: {
        fontSize: 16,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 24,
        color: "rgba(255, 255, 255, 0.8)",
        letterSpacing: 0.1,
        textAlign: "center",
        marginTop:10,
    },

    detailText: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#FFFFFF",
        letterSpacing: 0.1,
        textAlign: "center"
    },
   
    itemText: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#FFFFFF",
        letterSpacing: 0.3,
        textAlign: "left",
        fontWeight: '400',
        marginTop: -2,
        marginLeft: 10,
    },
    sucBtnCover: {
       padding:30

    }
});

export default styles