import { StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  cover: {
    flexDirection: "column",
    height: hp("80%"),
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  topContainer:{
  width:"100%",
  padding:20,
  alignSelf:'center',
  },
  filterPriceTitle:{
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    color: "#1B1B1F",
    letterSpacing: 0.1,
    lineHeight: 24
},
filterPriceView:{
    paddingHorizontal: 16,
    marginTop: 8
},
reasonCardCover:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 0,
    marginVertical: 10
},
reasonCardCoverTitle:{
    fontSize: 14,
    lineHeight:20,
    fontFamily: "AnekLatin-Medium",
    color: "#5A5D72",
    letterSpacing: 0.25,
    marginLeft:10,
},
reasonCardCoverActiveListTitle:{
    fontSize: 14,
    lineHeight:20,
    fontFamily: "AnekLatin-Medium",
    color: "rgba(27, 27, 31, 1)",
    letterSpacing: 0.25,
    marginLeft:10,
},
divider:{
    borderWidth: 1,
    borderColor: "rgba(121, 116, 126, 0.16)",
    marginTop: 8
},
filterBtn:{
    paddingHorizontal: 16,
    marginTop: 26,
    marginBottom: 26
},


inputStyle:{
  color: "#5A5D72",
  fontSize: 14,
  fontFamily: "AnekLatin-Medium",
  lineHeight: 18,
  marginLeft:5,
},
inputCover:{
width:"100%",
alignSelf:"center",
flexDirection:"row",
paddingHorizontal:8,
paddingVertical:2,
borderWidth:1,
borderColor:"#767680",
borderRadius:4,
height:105,
marginTop:8,
marginBottom:8,
alignItems: "center"
},


  bgText:{
    color: "#1B1B1F",
    fontSize: 22,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
    marginBottom: 4,
  },
  bgCover:{
    width:"100%",
    paddingRight:30,
  },
  btnCover:{
    width:"100%",
    paddingHorizontal:20,
    marginBottom:40,
  },
  toastCover:{
    position:"absolute",
    bottom:Platform.OS === "android" ? hp('3.7%') : hp('-2%'),
    alignSelf:'center',
    width:wp('100%'),
    zIndex:9000,
  }
  
})

