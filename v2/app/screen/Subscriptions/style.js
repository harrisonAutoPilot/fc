import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 0.8;
const styles = StyleSheet.create({
    vontainer: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('100%'),
        // justifyContent:'center',
        alignItems: 'center',
    },
    headerText:{
      marginTop:30,
      color:'violet',
      fontWeight:'600',
      fontSize:18,
     
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
    layerOne:{
        width:wp('100%'),
    },
    subImg:{
        width:70,
        height:70,
        borderRadius:100,
        // alignItems:'center',
        // justifyContent:'center'
    },
    imgCover:{
        width:80,
        alignItems:'center',
        justifyContent:'center',
        // padding:10,
    },
    scrollCover:{
        padding:10
    },
    subName:{
        fontSize:12,
        color:'#757575',
        marginTop:5,
    },
    redDot:{
       width:15,
       height:15,
       borderRadius:100,
       backgroundColor:'violet',
       borderWidth:3,
       borderColor:'#fff',
       marginTop:-12,
       left:20
    },
    blueDot:{
        width:15,
        height:15,
        borderRadius:100,
        backgroundColor:'#00b300',
        borderWidth:3,
        borderColor:'#fff',
        marginTop:-12,
        left:20
     },
     sortCover:{
        borderWidth:1,
        borderColor:'#f3f4f5',
        borderStyle:'solid',
        borderRadius:20,
        elevation:1,
        backgroundColor:'#f5f5f5',
     },
     sortCoverSelected:{
        borderWidth:1,
        borderColor:'#f3f4f5',
        borderStyle:'solid',
        borderRadius:20,
        elevation:1,
        backgroundColor:'violet',
     },
sortName:{
    padding:12,
    paddingTop:8,
    paddingBottom:8,
},
sortNameSelected:{
    padding:12,
    paddingTop:8,
    paddingBottom:8,
    color:'#fff',
},
layerTwo:{
    width:wp('100%'),
},


// This is for the fields
scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  descContainer:{
    width: wp('80%'),
    height:90,
    backgroundColor:'#fff',
    padding:5,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:0,
    },
  descCover:{
    width: wp('75%'),
    backgroundColor:'#fff',
    padding:10,
   
    },
    titleCover:{
      width: wp('75%'),
      height:90,
      backgroundColor:'#fff',
      padding:3,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
      alignSelf:'baseline'
      },
    titleText:{
      fontSize:15,
      color:'#212121',
      textTransform:'uppercase',
      fontWeight:'700'
    },
    descText:{
      fontSize:12,
      color:'#757575',
      textTransform:'capitalize',
      marginTop:8,
      lineHeight:20,
    },
  imageContainer: {
    marginBottom: 14,
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: 5,
  },
  imageCard: {
    borderRadius: 4,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
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
  },
  smImg: {
    width: 15,
    height: 15,

  },
  moreImg:{
width:15,
height:15,
marginTop:15,
  },
  bottomInner: {
    alignItems: 'center',
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
  posterImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: 5,

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
    backgroundColor: '#ee82ee',
    padding: 4,
    borderRadius: 4,
  },
  subText: {
    fontSize: 9,
    color: '#fff'
  },
  postDate: {

  },
  dateText: {
    fontSize: 12
  },
  statCover: {
    width: 70,
    height: 25,
    backgroundColor: '#f3f4f5',
    position: 'absolute',
    borderRadius: 50,
    margin: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  pastCover: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
   
  },
  statCoverWatch: {
    width: 100,
    height: 30,
    backgroundColor: '#f3f4f5',
    position: 'absolute',
    borderRadius: 50,
    margin: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  statCoverLive:{
    padding:3,
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 3,
    margin: 10,
    top: Platform.OS === 'ios' ? 265 : 240,
    right: 5,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  statCoverPast:{
    padding:3,
    backgroundColor: '#212121',
    position: 'absolute',
    borderRadius: 3,
    margin: 10,
    top: Platform.OS === 'ios' ? 265 : 240,
    right: 5,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  statCoverShort:{
    padding:3,
    backgroundColor: 'violet',
    position: 'absolute',
    borderRadius: 3,
    margin: 10,
    top: Platform.OS === 'ios' ? 265 : 240,
    right: 5,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  liveText:{
    color:'#fff'
  },
  shortText:{
    color:'#fff',
    fontStyle:'italic',
    fontWeight:'bold'
    
  },
  watchingText:{
    fontSize:12,
    color:'#212121'
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
  eyeImg: {
    width: 20,
    height: 20,
   
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
    color:'#fff'
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
    marginleft:10,
    marginLeft:20,
    marginTop:5,
  },
  watchDescCover:{
      flexDirection:'row',
      justifyContent:'space-around'
  },
  watchLogoImg:{
      width:50,
      height:50,
      borderRadius:100,
      marginTop:15,
  },

});

export default styles;