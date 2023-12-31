import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  gh,
  gw,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT
} from './CategoryDetails/utils/responsive';
const { width, height } = Dimensions.get("window");
const { height: windowHeight } = Dimensions.get("window");


const boxHeight =  windowHeight / 1.2;
const ITEM_WIDTH = width * 1 ;
const ITEM_HEIGHT = ITEM_WIDTH * 1.1;
const ITEM_HEIGHT2 = ITEM_WIDTH * 1.1;
const ITEM_HEIGHTV = ITEM_WIDTH * 1.50;
const ITEM_HEIGHTVV = ITEM_WIDTH * 1.35;
const styles = StyleSheet.create({
    container: {
      // flexGrow: 1,
      // backgroundColor: '#f2f3f4',
      width:'100%'
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingBottom: 0,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    profileName:{
      marginTop:30,
      color:'red',
      fontSize:16,
      fontFamily: "AnekLatin-Regular"
     
    },
    scrollContainer: {
      flex: 1,
      backgroundColor:'#fff'
    },
    scrollContentContainer: {
      alignItems: 'center',
      backgroundColor:'#fff'
    },
    descCover:{
      width: ITEM_WIDTH,
      height:90,
      backgroundColor:'#fff',
      padding:10,
      },
      titleText:{
        fontSize:15,
        color:'#212121',
        // textTransform:'capitalize',
        fontFamily: "AnekLatin-Medium"
      },

    imageContainer: {
      height:boxHeight,
      // borderRadius: 4,
      backgroundColor: '#fff',
      padding: 0,
      zIndex:90,

    },
    imageCard: {
      borderRadius: 6,
      width: ITEM_WIDTH,
      height:boxHeight,
      alignSelf:'center',
      backgroundColor: '#f3f4f5',
      // borderBottomLeftRadius:6,
      // borderBottomRightRadius:6,
      borderRadius:0
    },
    videoCard: {
      borderRadius: 6,
      width: ITEM_WIDTH,
      height: boxHeight,
      backgroundColor: '#f3f4f5',
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      zIndex:9000
    },
    videoCardt: {
      borderRadius: 0,
      width: ITEM_WIDTH,
      height:boxHeight,
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center'
    },
    imageCardd: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT2,
      backgroundColor: '#fff',
      // borderBottomLeftRadius:6,
      // borderBottomRightRadius:6,
      borderRadius:0,
    },
    infoCover:{
      width: ITEM_WIDTH,
      height:55,
      // backgroundColor:'#fff',
      borderRadius:0,
     paddingVertical:15,
      alignSelf:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      alignItems:'center',
      position:'absolute',
      top:2,
    },
    userImgCover:{
      width:42,
      height:42,
      borderRadius:100,
   
    },
    posterImg: {
      width: 44,
      height: 44,
      borderRadius: 100,

  
    },
    bottomCover: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      width: ITEM_WIDTH,
  
    },
    items: {
      color: '#414141',
      fontSize: 12,
      fontFamily: "AnekLatin-Regular"
    },
    smImg: {
      width: 15,
      height: 15,
  
    },
    bottomInner: {
      alignItems: 'center',
      padding:10,
      paddingLeft:15,
      paddingRight:15,
      borderRadius:5,
      borderWidth:0,
      borderColor:'#f5f5f5'
    },
    touchStyle: {
      alignItems: 'center',
    },
    aboveCover: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    posterImgCover: {
      width: 90,
      height: 90,
      backgroundColor: '#fff',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      position: 'absolute',
      top: -60,
      alignItems: 'center',

    },
  
    posterDetails: {
      width: 250,
      position: 'absolute',
      left: 90,
      padding: 4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop:3,
    },
    posterNameCover: {
      fontSize: 6,
    },
    posterName: {
      fontSize: 12
    },
    subBtn: {
      backgroundColor: '#5f9a32',
      padding: 5,
      borderRadius: 4,
     
      
    },
    subText: {
      fontSize: 9,
      color: '#fff',
      fontFamily: "AnekLatin-Regular"
    },
    postDate: {
  
    },
    dateText: {
      fontSize: 12,
      fontFamily: "AnekLatin-Regular"
    },
    statCover: {
      width: 100,
      height: 30,
      backgroundColor: '#f3f4f5',
      position: 'absolute',
      borderRadius: 50,
      margin: 10,
      right: 10,
      flexDirection: 'row',
      justifyContent:'space-around',
    },
    likeStat: {
      flexDirection: 'row',
      paddingTop:5,
     
    },
    likeImg: {
      width: 12,
      height: 12,
      marginTop:4,
    },
    countText: {
      fontSize: 7,
      marginTop:3,
     
    },
    playBtn:{
      alignItems:'center',
      position:'absolute',
      justifyContent:'center',
      backgroundColor:'pink',
      width:60,
      height:60,
      top:hp('27%'),
      left:wp('45%'),
      borderRadius:100,
    },
    mediaPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black',
      justifyContent: 'center',
    },
    topCover:{
      width:wp('100%'),
      height:80,
      backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'space-between'
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
      marginTop:35,
      color:'violet',
      fontFamily: "AnekLatin-Regular"
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
      marginTop:30,
      marginRight:40,
      flexDirection:'row',
    },
    noteImg:{
      width:20,
      height:20,
      marginLeft:20,
      marginTop:5,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'red',
      width:50,
      height:50,
      borderRadius:5,
      color:'#fff',
      fontFamily: "AnekLatin-Regular"
    },
    muteCover:{
      position:'absolute',
      bottom:hp('15%'),
      right:wp('3%'),
      padding:10,
      borderRadius:100,
      zIndex:900,

    },
    speakImg:{
      width:30,
      height:30,
      resizeMode:'contain'
    },
    mediaPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black',
      justifyContent: 'center',
    },
    main: {
      flex: 1,
      // width:'100%',
      // height:hp('90%'),
      backgroundColor: 'black',
    },
    sideBar: {
      position: 'absolute',
      flexDirection: 'column',
      alignItems: 'center',
      width: '14%',
      height: '50%',
      right: '2%',
      bottom: 110,
    },
    feedType: {
      position: 'absolute',
      width: gw(60),
      top: STATUS_BAR_HEIGHT,
      alignSelf: 'center',
    },
    video: {
      height: SCREEN_HEIGHT,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    pageContainer: {
      // flex: 1,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      alignSelf:'center',
      top: 0,
    },
    playBtn: {
      position: 'absolute',
      width: gh(12),
      height: gh(12),
      alignSelf: 'center',
      resizeMode: 'contain',
      top: gh(44),
      opacity: 0.5,
    },
    feedContent: {
      position: 'absolute',
      flexDirection: 'column',
      width: '60%',
      left: '3%',
      bottom: 95,
    },
    activityIndicator:{
      width:50,
      height:50,
      color:'red'
    },
    indicatorCover:{
      width:30,
      height:30,
      borderRadius:100,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      alignSelf:'center',
      position:'absolute',
      bottom:30,
      right:10,
      flexDirection:'row',
      justifyContent:'center',
      zIndex:9000,
    },
    loadImg: {
      width: 12,
      height: 12,
      alignSelf:'center',
      zIndex:900,
      position:'absolute',
      resizeMode:'contain'
      // marginTop:25
      
    },
    speakerImg:{
      width: 15,
      height: 15,
      // position:'absolute',
      alignSelf:'center',
      zIndex:900,
    },
    shareImg:{
      width: 20,
      height: 20,
      alignSelf:'center',
      zIndex:900,
    },
    soundCover:{
      width:35,
      height:35,
      flexDirection:'row',
      borderRadius:100,
      // backgroundColor: 'rgba(52, 52, 52, 0.8)',
      alignSelf:'flex-end',
      zIndex:9000, 
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:50,
      right:10
    },
    loveCover:{
      flexDirection:'row',
      borderRadius:100,
      alignSelf:'flex-end',
      zIndex:9000, 
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:280,
      right:10
    },
    shareCover:{
      flexDirection:'row',
      borderRadius:100,
      alignSelf:'center',
      zIndex:9000, 
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:190,
      right:10
    },

    commentCover:{
      borderRadius:100,
      alignSelf:'flex-end',
      zIndex:9000, 
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:221,
      right:10
    },
    loveCount:{
      color: '#fff',
      fontSize: 14,
      fontFamily: "AnekLatin-Medium",
      marginTop:-1,
      marginRight:5,
      textAlign:'center'

    },
    replayCover:{
    alignSelf:'center',
    justifyContent:'center',
    zIndex:9000,
    width:100,
    position:'absolute',
    top:'40%'

    },
    appLogoSm:{
      width: 55,
      height: 55,
      backgroundColor:'#fff',
      borderRadius:100,
      alignSelf:'center',
      zIndex:900,
    },
    replayBtn:{
paddingHorizontal:10,
paddingVertical:3,
borderWidth:1,
borderColor:"#fff",
borderRadius:2,
marginTop:7,
    },
    replayText:{
      color: '#fff',
      fontSize: 12,
      fontFamily: "AnekLatin-Medium",
      textAlign:'center'
    },
    apointCover:{
      borderRadius:100,
      alignSelf:'flex-end',
      zIndex:9000, 
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:150,
      right:10  
    },
    walkImg:{
      width:25,
      height:25
    },
    followCount:{
      fontSize: 12,
      fontFamily: "AnekLatin-Medium",
      textAlign:'center'
    },
    titleWrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    titleWord:{
      color: '#fff',
      fontSize: 12,
      fontFamily: "AnekLatin-Medium",
      textAlign:'left'
      
    },
    descWord:{
      color: '#fff',
      fontSize: 10,
      fontFamily: "Playfair-Regular",
      textAlign:'left'
    },
    posterCover:{
      marginLeft:14,
      alignItems:'flex-start',

    },
    dateWord:{
      color: '#fff',
      fontSize: 8,
      fontFamily: "AnekLatin-Regular",
      textAlign:'left'
    },
    veirifyCover:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-start'
    },
    verifyImg:{
      width:12,
      height:12,
      resizeMode:'contain',
      marginLeft:5,
      marginTop:2
    },
    previewContainer:{
      width:wp('86%'),
      // height:100,
      borderRadius:6,
      backgroundColor: 'rgba(12, 52, 52, 0.7)',
      position:'absolute',
      alignSelf:'flex-start',
      marginLeft:5,
      bottom:40,
      padding:10,
      paddingVertical:15,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    descText:{
      color: '#fff',
      fontSize: 14,
      fontFamily: "Playfair-Regular",
      textAlign:'left',
      lineHeight:18,
      width:wp('76%'),
    },
    moreCover:{
      width:70,
      height:20,
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:3,
      right:30,
      bottom:-3
    
    },
    readmore:{
      color: '#00b300',
      fontSize: 14,
      fontFamily: "AnekLatin-Medium",
      textTransform:'lowercase',
      marginBottom:1,
  
    },
    previewInner:{
      // flexDirection:'row',
      justifyContent:'space-between'
    },
    leftWrapper:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    followCover:{
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:12,
      borderRadius:4,
      borderWidth:1,
      borderColor:'#fff',
      marginRight:10
    },
    followText:{
      color: '#fff',
      fontSize: 10,
      fontFamily: "AnekLatin-Regular",
      textTransform:'capitalize',
  
    },

    categoryCover:{
      width:32,
      height:32,
      borderRadius:100,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderColor:'rgba(12, 52, 52, 0.8)',
      position:'absolute',
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      top:70,
      right:10  

    },
    categoryText:{
      color: '#99cb01',
      fontSize: 16,
      fontFamily: "AnekLatin-SemiBold",
      textTransform:'capitalize',
    },

  });

export default styles;