import { StyleSheet, Dimensions } from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff"
    },
    navHeader: {
        flexDirection: "row",
        alignSelf: "center",
        width: "40%"
    },
    navTitle: {
        color: "rgba(27, 27, 31, 1)",
        fontSize: 18,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
    },
    miniContainer: {
        minHeight: "88%",
        flex: 1
    },

    // Loading PlaceHolder
    mainPH: {
        paddingHorizontal: 16,
        // flex: 1,
        height: "100%",
        marginTop: 20
    },
    headingViewPH: {
        width: "38%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 20,
        alignSelf: "center"
    },
    secondHPH: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    secondHVPH: {
        width: "31%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 35,
    },
    thirdPH: {
        width: "75%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 20,
        marginTop: 50
    },
    fourthPH: {
        width: "100%",
        borderRadius: 8,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 120,
        marginTop: 20
    },
    fifthPH: {
        width: "38%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 20,
        marginTop: 20
    },
    sixthPH: {
        width: "48%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 120,
    },
    lastPH: {
        width: "100%",
        height: 50,
        borderRadius: 10,

    },

    // Checkout
    optionView: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "rgba(121, 116, 126, 0.16)",
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 16
    },
    optionTitleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    optionTitleInnnerView: {
        borderBottomWidth: 2,
        borderBottomColor: "rgba(51, 83, 203, 1)",
        paddingVertical: 18,
        paddingRight: "7%"
    },
    optionTitleInnnerInactiveView: {
        paddingRight: "7%"
    },
    optionTitleIconView: {
        paddingVertical: 18,

    },
    optionTitle: {
        color: "rgba(90, 93, 114, 1)",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        letterSpacing: 0.5,
        textTransform: "uppercase"

    },
    optionActiveTitle: {
        color: "rgba(51, 83, 203, 1)",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        letterSpacing: 0.5,
        textTransform: "uppercase"

    },

    // Delivery
    deliveryContainer: {
        height: "80%"
    },
    paymentContainer: {
        height: "75%",
        paddingHorizontal: 16
    },
    deliveryMainView: {
        marginTop: 24,
        // paddingHorizontal: 16,
        flex: 1,
        height: "100%",
    },
    deliveryMainTitle: {
        color: "rgba(27, 27, 31, 1)",
        fontSize: 18,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24
    },
    deliveryTitleView: {
        paddingBottom: 26
    },
    deliveryOptionView: {
        paddingTop: 26,
        paddingBottom: 16
    },
    deliveryDropDownView: {
        borderWidth: 1,
        borderColor: "rgba(69, 70, 79, 1)",
        borderRadius: 8
    },
    deliveryLabelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
    },
    deliveryLabelText: {
        color: "rgba(69, 70, 79, 1)",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        letterSpacing: 0.4
    },
    deliveryInputText: {
        color: "rgba(27, 27, 31, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1
    },
    deliveryInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: "center"
    },
    deliveryTextAddressView: {
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "rgba(121, 116, 126, 0.16)",
        backgroundColor: "rgba(121, 116, 126, 0.08)"
    },
    deliveryTextAddress: {
        color: "rgba(69, 70, 79, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        marginLeft: 11
    },
    deliveryOptionDateMainView: {
        width: (Dimensions.get("screen").width - 42) /2,
        marginRight: 10

    },
    deliveryOptionDateView: {
        borderWidth: 1,
        borderColor: "rgba(194, 197, 221, 1)",
        padding: 10,
        borderRadius: 8,
        width: "100%"
    },
    deliveryActiveOptionDateView: {
        borderWidth: 2,
        borderColor: "rgba(56, 88, 207, 1)",
        padding: 10,
        borderRadius: 8
    },
    deliveryOptionDateTitle: {
        color: "rgba(0, 0, 0, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    deliveryDateView: {
        marginTop: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryDaysText: {
        color: "rgba(90, 93, 114, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    deliverySelectDate: {
        color: "rgba(0, 0, 0, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        marginLeft: 6
    },
    deliveryRegularDateView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    // Payment
    paymentView:{
        borderWidth:1,
        borderRadius: 8,
        borderColor: "rgba(194, 197, 221, 1)",
        padding: 14,
        marginBottom: 20
    },
    paymentActiveView:{
        borderWidth:1,
        borderRadius: 8,
        borderColor: "rgba(51, 83, 203, 1)",
        padding: 14,
        marginBottom: 20,
        backgroundColor: "rgba(221, 225, 255, 1)"
    },
    paymentListTitle:{
        color: "rgba(23, 27, 44, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    paymentListView:{
        flexDirection :"row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    paymentListDesc:{
        color: "rgba(90, 93, 114, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        marginTop: 4,
        width: "80%"
    },

    // Payment PlaceHolder

  paymentPH: {
        width: "38%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 15,
    },
    paymentPH2: {
        width: "75%",
        borderRadius: 10,
        backgroundColor: "rgba(121, 116, 126, 0.2)",
        height: 15,
        marginTop: 15
    },

    // Confirmation
    storeNameTitle:{
        color: "rgba(90, 93, 114, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    storeTypeView:{
        marginBottom: 8
    },
    storeNameValue:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.25,
        textTransform: "uppercase",
        width: "60%",
        textAlign: "right"
    },
    storeChangeText:{
        color: "rgba(51, 83, 203, 1)",
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        letterSpacing: 0.5,
        textTransform: "uppercase"
    },
    confirmationContentScrollView:{
        flexGrow: 1,
        justifyContent: 'space-between', 
        flexDirection: 'column',
    },
    confirmationScrollStyleView:{
        paddingBottom: 20
    },
    confirmationBtmView:{
        flex: 1, 
        paddingHorizontal: 16,
        paddingTop: 20,
        justifyContent: "flex-end",
        marginBottom: 20
    },
    paymentBtmView:{
        flex: 1, 
        paddingHorizontal: 16,
        justifyContent: "flex-end",
        marginBottom: 40
    },
    confirmationDeliveryBtmView:{
        paddingHorizontal: 16,
        paddingTop: 20,
        marginTop: 20,
        justifyContent: "flex-end",
        marginBottom: 16
    },
    confirmationTopView:{
        marginTop: 24,
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: "flex-start",
    },
    confirmBtmInnerView:{
        flex: 1,
        justifyContent: "flex-start",
    },

    // Order
    orderView:{
        borderRadius: 8,
        padding: 14,
        backgroundColor: "rgba(242, 240, 244, 1)"
    },
    orderTypeView:{
        paddingBottom: 8,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        borderBottomWidth: 1,
        marginBottom: 8
    },
    orderTotal:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.25,
    },
    orderTotalTitle:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.25,
    },

       // Err Msg
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
        marginTop: 20
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    },

    // Success Screen
    successContainer:{
        paddingTop: "40%",
        backgroundColor:"#fff",
        flex: 1,
        paddingHorizontal: 30
     },
    successFlexUp:{
        flex: 0.38
    },
    successFlexMiddle:{
        flex: 0.5
    },
    successFlexDown:{
        flex: 0.2,
        marginBottom: 50
    },
    successImageView:{
        alignSelf: "center",
        alignItems: "center"
    },
    successTitle:{
        color: "rgba(23, 27, 44, 1)",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        textAlign: "center"
    },
    successDesc:{
        color: "rgba(90, 93, 114, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        textAlign: "center",
        marginTop: 8,
        letterSpacing: 0.5
    },
    successBtn:{
        marginTop: 10
    },
    // this for the delivery options
    infoCover:{
        width:wp('88%'),
        alignSelf:'center',
        padding:15,
        borderWidth:1,
        borderColor:"#bfbfbf",
        backgroundColor:'#fff',
        borderRadius:8,
        elevation:1,
        marginTop:20
    },
    infoCover2:{
        width:wp('88%'),
        alignSelf:'center',
        padding:15,
        borderWidth:1,
        borderColor:"#3353CB",
        backgroundColor:'#fff',
        borderRadius:8,
        elevation:1,
        marginTop:20
    },
    infoText:{
        color: "rgba(90, 93, 114, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        textAlign: "center",
        letterSpacing: 0.5 
    },
    infoText2:{
        color: "#3353CB",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        textAlign: "center",
        letterSpacing: 0.5 
    },
    checklistImg:{
        width:26,
        height:26,
        resizeMode:'contain',
        position:'absolute',
        right:-12,
        top:-10
     
    },
    

})