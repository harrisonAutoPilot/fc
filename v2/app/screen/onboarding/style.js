import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    vontainer: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('100%'),
        // justifyContent:'center',
        alignItems: 'center',
    },
    logoImg: {
        width: 40,
        height:40,
    },
    smLetter: {
        color: '#5f9a32',
        fontSize: 35,
        fontWeight: '600',
    },
    mdLetter: {
        color: 'gray',
        fontSize: 35,
        fontWeight: '100',
    },
    appName: {
        flexDirection: 'row'
    },
    mdLetterFlip: {
        color: 'gray',
        fontSize:15,
        fontWeight: '100',
        fontStyle:'italic'
    },
    smLetterFlip: {
        color: '#5f9a32',
        fontSize: 15,
        fontWeight: '600',
    },
    logoCover: {
        flexDirection: 'row',
        marginTop: 50,

    },
    abrevCover: {
        flexDirection: 'row'
    },
    cover:{
      alignItems: 'center',
      width: wp('100%'),
    },
    coverSm:{
        alignItems: 'flex-start',
        width: wp('100%'),
      },
    imgCover:{
        width:293,
        height:293,
        borderRadius:100,   
    },
    imgCoverSm:{
        width:103,
        height:103,
        borderRadius:100,   
    },
    imgSize:{
        width:293,
        height:293,
        borderRadius:333 / 2,
        overflow: 'hidden',
        resizeMode:'cover'
    },
    imgSizeSm:{
        width:193,
        height:193,
        borderRadius:193 / 2,
        overflow: 'hidden',
        resizeMode:'cover'
    },
    textCover:{
      marginTop:15,
    },
    slideText:{
        fontSize: 20,
        fontFamily: 'AnekLatin-Regular',
        lineHeight: 32,
        color: 'rgba(44, 47, 66, 1)',
        letterSpacing: 0.2,
    },
    btnCover:{
        top:Platform.OS === 'ios' ? hp('90.5%'): hp('88.5%'),
    position:'absolute',
    
       
    },
    btn:{
    borderWidth:0,
    backgroundColor:"#5f9a32",
    borderColor:"#000",
    width:wp('75%'),
    height:50,
    alignItems:'center',
    justifyContent:'center',
   borderRadius:70,
   zIndex:9000
   
    },
    btnText:{
        color:'#fff',
        fontFamily: 'AnekLatin-Medium',
    },
    subHeading: {
        fontSize: 10,
        fontWeight: "400",
        color: "#fff",
        lineHeight: 2,
        letterSpacing: 0.2,
        opacity: 0.6,
        fontFamily: "Urbanist-Regular"
    },
    powerCover:{
        position:'absolute',
        top:Platform.OS === 'ios' ? hp('88.5%'): hp('88.5%'),
      width:wp('100%'),
      alignItems:'center',
      alignSelf:'center'
    },
    btnPowerText:{
        fontSize: 12,
        color: "#bfbfbf",
        letterSpacing: 0.2,
        fontFamily: "Urbanist-Regular"
    },
    innerPower:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
    },
    globe:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    faceText:{
        fontSize: 12,
        color: "#000",
        letterSpacing: 0.2,
        fontFamily: "Urbanist-SemiBold",
        marginLeft:10
    },
    bgImgCover:{
        width:wp('100%'),
        height:700,
        position:'absolute',
        right:-70,
        top:20
    },
smImgCover:{
        width:wp('100%'),
        height:700,
        position:'absolute',
        left:-20,
       zIndex:-10,
        top:110
    },
    queContainer:{
        width:wp('100%'),
        position:'absolute',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        top:hp('68%'),
        paddingHorizontal:10
     
    },
    queBg:{
        fontSize: 52,
        color: "#000",
        letterSpacing: 0.2,
        alignSelf:'center',
        fontFamily: 'AnekLatin-SemiBold',
        textAlign:'center'
    },
    queBgL:{
        fontSize: 42,
        color: "#000",
        letterSpacing: 0.2,
        alignSelf:'center',
        fontFamily: 'AnekLatin-SemiBold',
        textAlign:'center'
    },
    smImgCoverQue:{
        alignSelf:'center',
        alignItems:'center',
        // top:hp('60%'),
        position:'absolute'
       
    },
    safeAreaStyle:{
        flex:1,
        backgroundColor:'#fff'
      },
});

export default styles;