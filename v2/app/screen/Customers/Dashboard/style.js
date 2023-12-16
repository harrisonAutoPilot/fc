import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

  view: {
    // flex: 1,
    backgroundColor: "#fff",
},
container:{
  // flex: 1,
  backgroundColor: "#fff",
},
topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor:'#fff',
    paddingVertical:5,
  },
  leftNav: {
    width: wp('75%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  safeAreaStyle:{
    flex:1,
    backgroundColor:'#fff'
  },
  rightNav: {
    width: wp('23%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    paddingRight: 20,
  },

  greetingText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(44, 47, 66, 1)',
    letterSpacing: 0.2,
  },
  nameText: {
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
  greetCover: {
    width: wp('60%'),
    alignItems: 'flex-start',
    textAlign: 'left',
  },


  greetingInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteDot: {
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#00b300',
    position: 'absolute',
    top: -2,
    right: -1,
  },
  countCover: {
    width: 15,
    height: 15,
    borderRadius: 40,
    backgroundColor: '#BA1A1A',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -8,
    right: -3,
  },
  countText: {
    fontSize: 8,
    fontFamily: 'AnekLatin-Regular',
    color: '#fff',
    letterSpacing: 0.2,
  },
//   this is for the tab bar
subHeader:{
    width:wp('100%'),
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    // paddingHorizontal:20,
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
    backgroundColor:'#fff',
},
activeSubHeader:{
    width: wp("30%"),
    borderBottomWidth: 4,
    borderColor: 'rgba(51, 83, 203, 1)',
    padding: 20,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:'center',
   
},
activeSubHeader2:{
  width: wp("30%"),
  borderBottomWidth: 4,
  borderColor: 'rgba(51, 83, 203, 1)',
  padding: 10,
  alignSelf:"center",
  alignItems:"center",
  justifyContent:'center',
  zIndex:9000
 
},
inActiveSubHeader:{
    width:wp("30%"),
    borderBottomWidth: 0,
    borderColor: 'transparent',
    padding: 20,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:'center',
    zIndex:9000
},
inActiveSubHeader2:{
  width:wp("30%"),
  borderBottomWidth: 4,
  borderColor: 'transparent',
  padding: 10,
  alignSelf:"center",
  alignItems:"center",
  justifyContent:'center',
},

activeSubHeaderText:{
    fontSize: 12,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    color: 'rgba(51, 83, 203, 1)',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
},
inActiveSubHeaderText:{
    fontSize: 12,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: 'rgba(90, 93, 114, 1)',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
},
// this is for the search and filter
searchContainer:{
    width:wp('100%'),
    paddingHorizontal:15,
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:"#fff"
},
searchSection:{
backgroundColor:"#f5f5f5",
borderRadius:6,
justifyContent:'flex-start',
paddingHorizontal:10,
width:wp('67%'),
height:50,
flexDirection:'row',
borderWidth:1,
borderColor:"rgba(121, 116, 126, 0.12)"
},
searchIcon:{
marginRight:5,
marginTop:13,
},
inputField:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom:Platform.OS === "android" ? 1 : 5,

},
filterCover:{
    backgroundColor:"#f5f5f5",
    borderRadius:6,
    width:wp('23%'),
    height:50,
    borderWidth:1,
borderColor:"rgba(121, 116, 126, 0.12)"
},
flexItems:{
flexDirection:'row',
justifyContent:'center',
padding:10,
alignItems:'center'
},
filterIcon:{
marginLeft:10,
},
filterCaption:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.1,
},
// this is for the cards
cardCover:{
    width:wp('100%'),
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    marginTop:5,
},
customerName:{
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
},
customerPhone:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.2,
},
customerAddress:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.2,
},
bottomCover:{
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor:'#f5f5f5',
    height:Platform.OS === 'ios' ? hp('75%') : hp('73%'),
},
descCover:{
width:wp('60%'),
},
customerPendingStatusCover:{
    paddingHorizontal:15,
    borderRadius:10,
    height:26,
    justifyContent:'center',
    backgroundColor:'rgba(227, 243, 255, 1)'
},
customerPendingText:{
    fontSize: 11,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    color: 'rgba(0, 30, 44, 1)',
    letterSpacing: 0.2,
},

// this is for the placeholder
bgLine:{
width:180,
height:15,
borderRadius:20,
backgroundColor:'#bfbfbf',
marginVertical:3
},
smLine:{
  width:70,
  height:10,
  borderRadius:8,
  backgroundColor:'#e6e6e6',
  marginVertical:3
},
mdLine:{
  width:110,
  height:12,
  borderRadius:8,
  backgroundColor:'#e6e6e6',
  marginVertical:3
},
tnLine:{
  width:30,
  height:10,
  borderRadius:8,
  backgroundColor:'#e6e6e6',
  marginVertical:3
},

})