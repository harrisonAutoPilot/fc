import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#00319D",
        marginBottom: 20
    },
view:{
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop:10,
},
containerInner:{
flexDirection:'column',
justifyContent:'space-between',
height:hp('75%'),
flex:1,
 },
   formFlexInside:{
    width:"100%",
    flexDirection:'column',
    justifyContent:'space-between',
    height:hp('78%'),
    flexGrow:1,
    zIndex:-2
   },

   // Google Search Field
   containerSearch: {
    borderWidth: 1.2,
    borderColor: '#5A5D72',
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 4,
    width: "100%",
    flex:0,
},
inputHolder: {
    paddingVertical: Platform.OS === "ios" ? 14 : 4,
    paddingHorizontal: 10,
    marginTop: 15,
    borderRadius: 5,
    width:wp('90%'),
    alignSelf: 'center',
    borderColor: '#5A5D72',
    borderWidth: 1.2
},

getAddress:{
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "#3353CB",
    alignItems: "flex-start",
},
getAddressView:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,

},
labelTitleAddress: {
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#424242",
    letterSpacing: 0.5,
    paddingVertical: Platform.OS === "ios" ? 5:10,
    width: "70%"
},
getAddressText:{
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 16,
    color: "#fff",
    letterSpacing: 0.2,
},
countryCodeView: {
    marginBottom: 2,
    zIndex:-2
},
  addressFoundView:{
        alignSelf: "flex-end"
    },
googleContainer:{
    flex: 0,
    width: "95%",
    zIndex:9000,
},
optionCover:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderColor: "rgba(121, 116, 126, 0.16)",
    paddingVertical:2,
    paddingHorizontal:15,
},
optionView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(121, 116, 126, 0.16)",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 16
},
optionActiveTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: "capitalize"

},
arrowBack:{
marginLeft: "7%",
},
optionTitleView: {
    flexDirection: "row",
    alignItems: "center",
},
activeTag:{
width:wp('30%'),
flexDirection:'row',
justifyContent:'space-evenly',
paddingVertical:18,
},
arrowStyle:{
marginLeft:10,
paddingVertical:3,
},
optionTitleInnnerView: {
    flexDirection:'row',
    borderBottomWidth: 0,
    flexDirection:'row',
    borderBottomColor: "rgba(51, 83, 203, 1)",
    paddingVertical: 18,
    // paddingRight: "10%"
},
optionTitleInnnerInactiveView: {
    // paddingRight: "10%",
    flexDirection:'row',
},
optionTitleIconView: {
    paddingVertical: 18,
    marginLeft:"7%"

},
optionTitle: {
    color: "rgba(90, 93, 114, 1)",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: "capitalize"

},

numberCover:{
    width:19,
    height:19,
    borderRadius:50,
    backgroundColor:"rgba(51, 83, 203, 1)",
    alignItems:'center',
    justifyContent:'center',
    marginRight:"7%",

},
numberCoverInActive:{
    width:19,
    height:19,
    borderRadius:50,
    backgroundColor:"rgba(194, 197, 221, 1)",
    alignItems:'center',
    justifyContent:'center',
    marginRight:"7%",   
},
numberText:{
    color: "#fff",
    fontSize: 10,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.5,
},
// this is for the form
   bottomCover1: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: wp('100%'),
        paddingTop: 10,
        borderColor: '#f5f5f5',
        flexDirection:'column',
        borderWidth: 0,
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
    },
formContainer:{
    flexDirection:"column",
    justifyContent:"space-between",
    // height:Platform.OS === 'android' ? hp('50%') : hp('63%'),
    },
    formContainerStep2:{
        flexDirection:"column",
        justifyContent:"space-between",
       // height:Platform.OS === 'android' ? hp('42%') : hp('80%'),
       },
    listContainer:{
    marginHorizontal:10,
 
    },
    listContainerNew:{
        margin:10,
        marginTop:0,
        },
    typeContainer:{
        marginTop:1
        },
    formInputFieldFlex:{
      width:"100%",
      alignSelf:'center',
      alignItems:'center'
    },
    inputContainer:{
      width:wp("90%"),
      alignSelf:'center',
      flexDirection:'row'
    },
    formFlex: {
      marginBottom: 10,
      alignSelf:"center",
      backgroundColor:"transparent"
    },
    inputFieldView:{
      flexDirection: "row",
      justifyContent:"space-between"
    },
    // codeCover:{
    //   width:wp("25%"),
    //   alignItems:"center",
    //   alignSelf:"center",
    //   justifyContent:"center",
    //   marginRight:5
    
    // },
    smErrCover: {
      position: 'absolute',
      width: wp("100%"),
      top: hp("-20%"),
      alignSelf: 'center',
    },
    errCoverTeam: {
      width:wp("100%"),
      alignSelf:'center'
    },
    submitBtnContainer:{
      width:"100%",
      paddingHorizontal:10,
    },
    submitBtnContainerStep2:{
        marginBottom:20,
        width:"100%",
        paddingHorizontal:20,
        paddingVertical:10,
    },
    toastCover: {
      bottom:Platform.OS === "android" ? hp('20%') : hp('12%'),
      alignSelf: 'center',
      width: wp('100%'),
      zIndex: 9000,
    },
    errView:{
      paddingVertical: 14,
      paddingHorizontal: 16,
      backgroundColor: "#BA1A1A",
      marginHorizontal: 16,
      borderRadius: 8,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 2,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10
    },
    errText:{
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      letterSpacing: 0.25,
      marginLeft: 13,
      color: "#fff"
    },
    successView:{
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#106D34",
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
    },
    successText:{
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    marginLeft: 13,
    color: "#fff"
    },

    // this is for the select category
    renderItemContainer: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#C2C5DD",
        borderRadius: 8,
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor:"#fff"
    },
    activeRenderItemContainer: {
        borderColor: "#3353CB",
        backgroundColor: "#DDE1FF"
    },
    categoryTitleView: {
        width: "80%"
    },
    categoryTitle: {
        color: "#171B2C",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.25,
        marginBottom: 4

    },
    categoryDesc: {
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,

    },
    categoryTitleView: {
        width: "80%"
    },
    storeCover:{
        paddingVertical:10,
    },
   bioTitleText: {
        color: 'rgba(90, 93, 114, 1)',
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    codeCover: {
        width: wp("27%"),
        alignItems:"flex-start",
        alignSelf: "center",
        marginTop:14,
        justifyContent: "center",
        marginRight: 10,
        padding:15,
        paddingVertical:17,
        borderWidth:2,
        borderRadius:6,
        borderColor: "#5A5D72"
      },
      fadeText:{
       fontSize: 16,
       fontFamily: "AnekLatin-Regular",
       lineHeight: 24,
       color: "rgba(69, 70, 79, 1)",
       letterSpacing: 0.1,  
      },
          btnCover: {
        borderTopColor: "#F5F5F5",
        paddingBottom: 30
    },

      bioTitleCover: {
        width: wp('100%'),
        padding:20,
    },
    imgCardCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        paddingVertical:25,
        width:wp('95%'),
        alignSelf:'center'
    },
    bottomLine:{
        width:wp('90%'),
        borderBottomColor:"rgba(121, 116, 126, 0.16)",
        borderBottomWidth:1,
    },
    leftCover:{
        flexDirection:'row',
        justifyContent:'center'
    },
    rightCover:{
        flexDirection:'row',
        justifyContent:'center'
    },
    savedCover:{
        paddingHorizontal:10,
        paddingVertical:2,
        backgroundColor:"rgba(197, 255, 203, 1)",
        borderRadius:4,
        height:24,
        alignItems:'center',
        justifyContent:'center'
    },
    savedText:{
        color:"rgba(0, 33, 11, 1)",
        fontSize: 11,
        lineHeight: 16,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.5, 
        textTransform:'uppercase'
    },
    pharmaText:{
        color:"rgba(27, 27, 31, 1)",
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.5, 
        marginLeft:10,
    },
    addText:{
        color:"rgba(90, 93, 114, 1)",
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.5, 
        marginLeft:10,
     
    },

     fiedpadd:{
        width: wp('100%'),
        paddingHorizontal: 20,
        marginTop:-10
    },
    fiedpad:{
        width: wp('100%'),
        paddingHorizontal: 20,
    },
        btnStep3Cover: {
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        paddingVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: Platform.OS === "android" ? Dimensions.get("window").height / 2.6 : Dimensions.get("window").height / 2.9,
    },
    btnDoubleCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        paddingTop:15,
        padding: 0,
        paddingBottom:0,
        justifyContent: 'space-between',
        //marginTop: Platform.OS === "android" ? Dimensions.get("window").height / 1.5 : Dimensions.get("window").height / 2.9,  
    },
    btnDoubleCoverNew:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        paddingTop:15,
        paddingHorizontal:10,
        paddingBottom:0,
        justifyContent: 'space-between',
        //marginTop: Platform.OS === "android" ? Dimensions.get("window").height / 1.5 : Dimensions.get("window").height / 2.9,  
    },
    btnDoubleCoverThird:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopColor: "#F5F5F5",
        padding:20,
        borderTopWidth: 1,
        paddingVertical: 20,
        justifyContent: 'space-between',
        //marginTop: Platform.OS === "android" ? Dimensions.get("window").height / 1.5 : Dimensions.get("window").height / 2.9,  
    },

})