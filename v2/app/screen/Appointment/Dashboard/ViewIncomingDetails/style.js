import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  body5: {
       width: wp('100%'),
    // height: hp('20%'),
    alignSelf: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 1,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
    borderStyle:'solid'
  },
  headerTitle: {
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 22,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 28,
    marginLeft: 45,
  },
  inputStyle:{
    width:wp('100%'),
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    // lineHeight: 18,
    marginLeft:5,
  
},
  inputCover:{
    width:"90%",
    alignSelf:"center",
    flexDirection:"row",
    paddingHorizontal:8,
    borderWidth:1,
    borderColor:"rgba(121, 116, 126, 0.12)",
    borderRadius:8,
    backgroundColor:"rgba(121, 116, 126, 0.08)",
    height:45,
    marginTop:8,
    marginBottom:10,
    alignItems: "center"
  },
  searchIcon:{
    marginTop:Platform.OS === "android" ? 2 : 4,
    paddingLeft:10,
  },
  listCover:{
height:hp('60%'),
flexDirection:'column',
justifyContent:'space-between'
  },
  touchCover: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContainer:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  badgeCover:{
    marginLeft:8,
    paddingVertical:4,
    paddingHorizontal:10,
    backgroundColor:"rgba(51, 83, 203, 1)",
    borderRadius:3
  },
  badgeText:{
    color: '#fff',
    fontSize: 8,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 14,
  },
  outsideModal: {
    top: hp('10%'),
  },
  activeRenderItemContainer:{
    backgroundColor: "#DDE1FF"
  },
  cardCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
  },
  bgText:{
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
  },
  leftCover:{
    width:wp('65%')
  },
  rightCover:{
    marginTop:10,
  },
  smText:{
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    marginTop:5
  },
  btnStyle:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:"rgba(51, 83, 203, 1)",
    alignSelf:"center",
    width:wp('90%'),
    padding:15,
    borderRadius:30,
    alignItems:'center',
    marginTop:10
  },
  btnStyleDisabled:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:"rgba(221, 225, 255, 1)",
    alignSelf:"center",
    width:wp('90%'),
    padding:15,
    borderRadius:30,
    alignItems:'center',
    marginTop:20
  },
  prosBtn:{
width:"92%",
alignItems:'center',
justifyContent:'space-between',
flexDirection:'row',
padding:25,
borderWidth:1,
borderColor:"#bfbfbf",
borderStyle:'dashed',
borderRadius:6,
alignSelf:'center',
marginBottom:10,
  },
  listContainer:{

flex:1,
  },
  btnText:{
    color: '#fff',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    marginLeft:8
  },
  btnTextPros:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    marginLeft:8
  },

  errView:{
    paddingVertical: 20,
    paddingHorizontal: 16,
    // backgroundColor: "#BA1A1A",
    backgroundColor:'#f5f5f5',
    position:'absolute',
    zIndex:900,
    marginHorizontal: 16,
    borderLeftWidth:8,
    borderLeftColor:'#BA1A1A',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    alignSelf:'center',
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
},
errText:{
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    marginLeft: 13,
    color: "#BA1A1A"
},
calendarCoverU:{
  alignItems:'center',
  alignSelf:'center',
  marginTop:50,
},
calendarText:{
  fontSize: 16,
  fontFamily: "AnekLatin-Regular",
  color: "#1B1B1F",
  lineHeight:22,
  letterSpacing: 0.25, 
  marginTop:200,
  paddingHorizontal:50,
  textAlign:'center'
},
// this is for the new form feeds
formContainer:{
  width:"100%",
 },
 formFlexInside:{
  width:"100%",
  paddingHorizontal:20,
  zIndex:-2
 },
 submitBtnContainer:{
  marginBottom:10,
  flexDirection:'row',
  justifyContent:'space-around',
  width:"100%",
  paddingHorizontal:20,
  paddingVertical:10,
  marginTop:0
},
toastCover: {
  // position: 'absolute',
  bottom:Platform.OS === "android" ? hp('4%') : hp('3%'),
  alignSelf: 'center',
  width: wp('100%'),
  zIndex: 9000,
},
// dateContainer: {
//   width: '100%',
//   alignSelf: 'center',
//   flexDirection: 'row',
//   justifyContent:'space-around',
//   height: 58,
//   borderWidth: 1.5,
//   borderColor: 'rgba(51, 83, 203, 1)',
//   borderRadius: 6,
//   paddingTop:15,
//   marginVertical:15,
// },
inputContainerInactive:{
  width: '100%',
  alignSelf: 'center',
  flexDirection: 'row',
  height: 58,
  borderWidth: 1.5,
  borderColor: '#bfbfbf',
  borderRadius: 6,
  paddingTop:15,
  marginVertical:15,
}, 
formCover: {
  paddingHorizontal: 10,
  flexDirection: 'row',
  alignSelf: 'center',
  width: wp('90%'),
  height: 55,
  justifyContent: 'space-between',
  paddingVertical: 10,
  borderWidth: 0,
  borderColor: 'rgba(118, 118, 128, 1)',
  borderRadius: 4,
},

labelStyle: {
  position: 'absolute',
  backgroundColor: '#fff',
  marginTop: -5,
  marginLeft: 10,
  paddingHorizontal: 5,
  zIndex: 900,
},

labelText: {
  fontSize: 12,
  fontFamily: "AnekLatin-Regular",
  lineHeight: 16,
  color: "#45464F",
  letterSpacing: 0.2,
  marginTop:-5
},
fadeText: {
  color: 'rgba(69, 70, 79, 1)',
  fontSize: 16,
  fontFamily: 'AnekLatin-Regular',
},
calendarCover:{
  width:'100%',
  paddingVertical:20,
},
mdLine:{
  width:wp('100%'),
  backgroundColor:'#f5f5f5',
  height:2,
  alignSelf:'center'
},
addCover:{
padding:20,
paddingHorizontal:10,
},
addText:{
  color: 'rgba(27, 27, 31, 1)',
  fontSize: 16,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 24,
  letterSpacing: 0.25, 
},
addDesc:{
  color: 'rgba(90, 93, 114, 1)',
  fontSize: 12,
  fontFamily: 'AnekLatin-Regular',
  lineHeight: 16,
  letterSpacing: 0.25, 
},
inputContainer:{
  width:wp('85%'),
  height:120,
  borderWidth:1,
  borderColor:"#bfbfbf",
  borderRadius:4,
  alignSelf:'center',
  marginBottom:40
},
input:{
  padding:20,
  color:"#000",
  textAlignVertical: 'top',
},
itemCover:{
  paddingHorizontal:20,
  paddingTop:20,
},

itemCoverNote:{
  paddingHorizontal:20,
  paddingTop:30,
},
itemText:{
  color: "rgba(27, 27, 31, 1)",
  fontSize: 16,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 24,
  textTransform:'capitalize',
  width:260,
},
descText:{
  color: "#45464F",
  fontSize: 14,
  fontFamily: "AnekLatin-Regular",
  lineHeight: 20,
  marginTop:5,
  textTransform: "capitalize"
},
countText:{
  color:"#5A5D72",
  fontSize: 12,
  fontFamily: "AnekLatin-Regular",
  lineHeight: 16,
},




topContainer:{
  width:'100%',
  paddingHorizontal:20,
  justifyContent:'flex-start',
  flexDirection:'row',
  alignItems:'flex-start'
      },
      userImg:{
          width:60,
          height:60,
          borderRadius:100,
          resizeMode:"cover"
      },
      userName:{
          fontSize: 16,
          fontFamily: "AnekLatin-Medium",
          color: "#000",
          letterSpacing: 0.25, 
          marginTop:30,
          marginLeft:10
      },
      verImg: {
          width: 20,
          height: 20,
          resizeMode: 'contain',
          marginTop: 30,
          marginLeft: 30,
          position: 'absolute',
          left:35,
          top: 8,
        },
        midContainer:{
          width:'100%',
          paddingHorizontal:30,
          paddingVertical:10,
          justifyContent:'flex-start',
          alignItems:'flex-start'
              },
  intro:{
      fontSize: 16,
      fontFamily: "AnekLatin-Regular",
      color: "#1B1B1F",
      lineHeight:22,
      letterSpacing: 0.25, 
      marginTop:5,
  },
  issues:{
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      color: "#1B1B1F",
      fontWeight:'500',
      letterSpacing: 0.25, 
      lineHeight:24,
  },
  issueDate:{
      fontSize: 16,
      fontFamily: "AnekLatin-SemiBold",
      color: "#000",
      letterSpacing: 0.25, 
      textAlign:'center',
      alignSelf:'center'
  },
  issueDateNew:{
      fontSize: 16,
      fontFamily: "AnekLatin-Medium",
      color: "purple",
      letterSpacing: 0.25, 
      marginTop:-10,
      marginBottom:10
  },
  dateContainer:{
      paddingHorizontal:20,
      padding:10,
      flexDirection: 'row',
      justifyContent:'space-around',
  },
  dateContainerTime:{
      paddingHorizontal:20,
      padding:10,
      alignItems:'center'
  },
  inputContainer:{
      width:wp('89%'),
      height:80,
      borderRadius:4,
      alignSelf:'center',
      borderWidth:1,
      borderColor:'#bfbfbf',
  
    },
    input:{
      padding:10,
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      color: "#000",
      letterSpacing: 0.25, 
      textAlignVertical: 'top',
  
    },
    
    confirmCover:{
      width: '48%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 30,
      backgroundColor: '#000',
      alignItems: 'center',
      alignSelf:'center', 
    },
    confirmCoverGreen:{
      width: '48%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 30,
      backgroundColor: '#00b300',
      alignItems: 'center',
      alignSelf:'center', 
    },
    confirmCoverConfirm:{
      width: '95%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 30,
      backgroundColor: '#000',
      alignItems: 'center',
      alignSelf:'center', 
      marginTop:20,
    },
    confirmText:{
      fontSize: 14,
      fontFamily: 'AnekLatin-Medium',
      lineHeight: 20,
      color: '#fff',
      letterSpacing: 0.1,
      marginRight: 10,
    },
    confirmCoverChange:{
      width: '48%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 30,
      backgroundColor: '#bfbfbf',
      alignItems: 'center',
      alignSelf:'center', 
  
    },
    confirmCoverChangeV2:{
      width: '85%',
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 30,
      backgroundColor: '#b30000',
      alignItems: 'center',
      alignSelf:'center', 
      marginTop:30
    },
    confirmCoverChangeV3:{
      width: '48%',
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 30,
      backgroundColor: '#b30000',
      alignItems: 'center',
      alignSelf:'center', 
 
    },
    appTimeIntro:{
      fontSize: 16,
      fontFamily: 'AnekLatin-Medium',
      lineHeight: 20,
      color:'#1B1B1F',
      letterSpacing: 0.1,
    },
    appTime:{
      fontSize: 22,
      fontFamily: 'AnekLatin-Medium',
      color: '#000',
      letterSpacing: 0.1,
    }
});

export default styles;
