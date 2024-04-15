import { StyleSheet, Platform } from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: Platform.OS == "android" ? 30 : 0,
    },
    signupTitleContainer: {
        paddingHorizontal: 28,
        height: "100%"
    },
    signupPinTitleContainer: {
        paddingHorizontal: 28,
        flexDirection:'column',
        justifyContent:'space-between',

        flex: 0.6
    },
 
    signupTitle: {
        color: "#171B2C",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        marginBottom: 8,
    },
    signupTitleV: {
        color: "#171B2C",
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 30,
        marginBottom: 8,
    },
    signupDesc: {
        color: "#5f9a32",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        marginBottom:10,
    },
    signupMiniTitleContainer: {
        marginBottom: 32,
        flex: 0.4

    },

    // Flatlist Items
    listContainer: {
        flex: 2.3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center'
    
    },
    listContainerVector: {
        height:'100%',
        paddingTop:10,
   
    },
    listContainerVector1: {
        height:hp('60%'),
        paddingTop:10,
   
    },
    categoryTitle: {
        color: "#171B2C",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.25,
        marginBottom: 4

    },
    categoryTitleSm: {
        color: "#171B2C",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 18,
        letterSpacing: 0.25,
        // marginBottom: 4

    },
    bottomCardCover:{
        // width:'100%',
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingLeft:1,
       zIndex:90
   },
    categoryTitleWhite: {
        color: "#fff",
        fontSize: 14,
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
        width: '80%'

    },
    categoryTitleViewVector: {
        width: '85%'

    },
    renderItemContainer: {
        width:'47%',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#C2C5DD",
        borderRadius: 8,
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor:"#fff"
    },
    renderItemContainerV: {
        width:'47%',
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
        width:'47%',
        borderColor: "#5f9a32",
        backgroundColor: "#5f9a32"

    },
    activeRenderItemContainerV: {
        width:'47%',
        borderColor: "#5f9a32",
        // backgroundColor: "#5f9a32"

    },
    continueBtnView: {
        flex: 0.4
    },
    continueBtnViewVector: {
     
       paddingTop:20
      
    },
    continueBtnViewVector1: {
     
        paddingTop:20,
        marginTop:20,
       
     },
    // Form Details
    formContainer: {
        marginTop: 20,
        flex: 1,
        
    },
    formFlex: {
        flex: 1,
        marginBottom: 10,
    },
    formInputFieldFlex: {
        flex: 0.8,
    },
    formInputFieldFlexStore: {
        minHeight: "75%"
    },
    formInputFieldFlex2: {
        flex: 0.98
    },
    inputFieldView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    submitBtnContainer: {
        flex: 1, 
        marginTop:70,

    },
    firstNameView: {
        marginBottom: 10,
    },

    // Country Code Drop Down
    countryCodeView: {
        marginBottom: 10
    },

    // Google Search Field
    container: {
        borderWidth: 1.2,
        borderColor: '#5A5D72',
        borderRadius: 5,
        marginTop: 15,
        paddingVertical: 4,
        width: "100%",
    },
    googleContainer:{
        flex: 0,
        width: "95%"
    },
    label: {
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        color: "#5A5D72",
        letterSpacing: 0.2,
    },
    labelTitle: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#424242",
        letterSpacing: 0.5,
        paddingVertical: Platform.OS === "ios" ? 5:10
    },
    labelTitleAddress: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#424242",
        letterSpacing: 0.5,
        paddingVertical: Platform.OS === "ios" ? 5:10,
        width: "70%"
    },
    notFoundView:{
        paddingHorizontal: 10
    },
    verificationField:{
        borderBottomWidth: 1.2
    },
    resendVerificationCode:{
        marginTop: 44,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    changeAccount:{
        marginTop: 10,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    resendVerificationText: {
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,

    },
    resendVerificationActiveText: {
        color: "#3353CB",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,

    },
    errView:{
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: "#BA1A1A",
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
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    },
    scrollViewContainer:{
        paddingBottom: 30,
        flexGrow: 1
    },
    scrollViewBottom:{
        justifyContent: "flex-end", 
        flex: 0.1
    },
    scrollViewTop:{
        flex: 1
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    inputHolder: {
        paddingVertical: Platform.OS === "ios" ? 14 : 5,
        paddingHorizontal: 10,
        marginTop: 15,
        borderRadius: 5,
        width: "100%",
        alignSelf: 'center',
        borderColor: '#5A5D72',
        borderWidth: 1.2
    },
    getAddress:{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
        backgroundColor: "#3353CB",
        alignItems: "center",
    },
    getAddressView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 3,
    },
    getAddressText:{
        fontSize: 12,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 16,
        color: "#fff",
        letterSpacing: 0.2,
    },
    bottomSheetContainer: {
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        paddingTop: 10,
        paddingHorizontal: 16

    },
    addressNotFoundView:{
        marginTop: 10,
        alignSelf: "flex-end"
    },
    addressFoundView:{
        alignSelf: "flex-end"
    },
    headerCloseIcon:{
        alignSelf: "flex-start"
    },
    imageContainer:{
    flexDirection:"column",
    justifyContent:'space-between',
    height:"100%"
    },
    userIcon:{
        width:160,
        height:160,
        alignSelf:'center',
    },


    avatar:{
        width:170,
        height:170,
        borderRadius:10,
        alignSelf:"center"
    },
    bgText:{
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        color: "rgba(44, 47, 66, 1)",
        letterSpacing: 0.2,
        alignSelf:"center",
        marginTop:20
    },
    smText:{
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        color: "rgba(90, 93, 114, 1)",
        letterSpacing: 0.2,
        alignSelf:"center"
    },
    sucImg:{
        width:70,
        height:70,
        alignSelf:"center",
        resizeMode:"contain",
        marginTop:40,
    },
    retakeBtn:{
        paddingVertical:30,
    },
    retakeText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        color: "rgba(51, 83, 203, 1)",
        letterSpacing: 0.2,
        alignSelf:"center"
    },
    maskImg:{
        width:80,
        height:80,
        borderRadius:200,
        // resizeMode:'contain'
    },
    maskImgSm:{
        width:50,
        height:50,
        // resizeMode:'contain'
    },
    photoCover:{
        width: 60,
        height: 60,
        alignSelf:'center',
        borderRadius:100,
        zIndex:900,
        resizeMode:'cover'
    },
    uploadedContainer:{
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignSelf:'center',
        position:'absolute',
        right:wp('5%'),
        top:hp('66%'),
        flexDirection:'row',
        justifyContent:'center',
        zIndex:9000, 
    },

 // COUNTRYCODE DROPDOWN OUTER BOX

 dropDownContainer:{
    borderWidth: 1.2,
    borderColor: '#5A5D72',
    borderRadius: 5,
    marginTop: 15,
    height: 55,   
    
},
dropDownLabelView: {
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 2
},
dropDownLabelViewTeam:{
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 5,
    zIndex: 2
},
dropDownLabelText: {
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
    color: "#45464F",
    letterSpacing: 0.2,
    textTransform: "capitalize"
},
dropDownTextInput:{
    justifyContent: "space-between",
    alignItems: "center",
    // alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15

},
dropDownTextInputTitle: {
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#424242",
    letterSpacing: 0.5,
    width: "80%"
},
})

