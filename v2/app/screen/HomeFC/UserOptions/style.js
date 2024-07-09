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
    },
    titleCover:{
      alignSelf:'center',
      paddingTop:10
    },
    title:{
      fontSize: 20,
      fontFamily: 'AnekLatin-SemiBold',
      lineHeight: 30,
      color:'#1B1B1F',
      letterSpacing: 0.1,
    },
    itemCover:{
      flexDirection:'row',
      alignSelf:'center',
      alignItems:'flex-start',
      borderBottomWidth:0,
      borderBottomColor:'#f5f5f5',
      justifyContent:'flex-start',
      textAlign:'center',
      marginTop:10,
      paddingVertical:5,
      borderWidth:0,
      borderColor:'#bfbfbf',
      borderRadius:4,
      width:'90%'
    },
    itemTitle:{
      fontSize: 14,
      fontFamily: 'AnekLatin-Regular',
      lineHeight: 30,
      color:'#1B1B1F',
      letterSpacing: 0.1,
    },
    itemTitleRed:{
      fontSize: 14,
      fontFamily: 'AnekLatin-Regular',
      lineHeight: 30,
      color:'#990000',
      letterSpacing: 0.1,
    },
    flagImg:{
      width:35,
      height:35,
      resizeMode:'contain',
      marginRight:20
    },
    middleCover:{
      marginTop:15
    },
  footerCover:{
alignSelf:'center',
alignItems:'center',
    },
  footerText:{
    fontSize: 10,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 30,
    color:'#1B1B1F',
    letterSpacing: 0.1, 
  },
  toroImg:{
    width:80,
    height:20,
    resizeMode:'contain',
    marginBottom:10,
    marginTop:-5,
  },
  circleCover:{
    width:35,
    height:35,
    borderRadius:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f5f5f5',
    marginRight:10,
  },
  circleCoverRed:{
    width:35,
    height:35,
    borderRadius:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
  }
});

export default styles;
