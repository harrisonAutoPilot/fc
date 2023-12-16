import { StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    // DROPDOWN CODE BOTTOMSHEET
    headerTitle: {
        color: "#1B1B1F",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.4,
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        alignItems: "center",
        paddingBottom: 16,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        borderBottomWidth: 1

    },
  
    bottomSheetContainer: {
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        paddingTop: 0,

    },

    // RenderItemView
    renderItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.08)",
        paddingTop: 6
    },
    renderActiveItemContainer: {
        backgroundColor: "#DFE1F9"

    },
    renderItemImgContainer: {
        flexDirection: "row",
        paddingVertical: 12,
        width: "85%",
        // alignItems: "center"
    },
    renderItemOutofStockContainer: {
        flexDirection: "row",
        paddingBottom: 16,
        justifyContent: "space-between"
    },
    renderItemTitle: {
        color: "rgba(27, 27, 31, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        // lineHeight: 24,
        letterSpacing: 0.1,
    },
    renderItemAmount: {
        color: "rgba(140, 143, 166, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    renderItemDateTitle: {
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    renderItemTitleAddress: {
        color: "rgba(69, 70, 79, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    renderItemNameView: {
        alignSelf: "center"
    },
    renderItemNameViewOutofStock: {
        alignSelf: "center",
        width: "70%"
    },
 
    renderItemImg: {
        width: 20,
        height: 20,
        marginRight: 6,
        alignContent: "center"
    },
    bottomSheetTextInputContainer: {
        backgroundColor: "rgba(121, 116, 126, 0.12)",
        borderRadius: 8,
        paddingVertical: Platform.OS === "ios" ? 10: 0,
        marginTop: 18,
        paddingHorizontal: 14,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16

    },
    bottomSheetTextInputInnerContainer: {
        flexDirection: "row",
        alignItems: "center"

    },
    bottomSheetTextInput: {
        color: "#45464F",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        // lineHeight: 20,
        letterSpacing: 0.25,
        marginLeft: 20,
        width: "80%",

    },
    bottomSheetTextInputCloseIconView: {
        justifyContent: "center",
        alignItems: "center"
    },
    bottomsheetFooter: {
        paddingBottom: 50
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
        alignItems: "center"
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    },
    errViewOutofStock:{
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: "#FFDAD6",
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: "row",
        // alignItems: "center",
        borderWidth:1,
        borderColor: "rgba(255, 180, 171, 1)",
        marginTop: 20
    },
    errTextOutofStock:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "rgba(65, 0, 2, 1)"
    },
    errHeaderOutofStock:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "rgba(65, 0, 2, 1)",
        lineHeight: 24,
        marginBottom: 2
    },

    selectBtn: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    selectOutofStockBtn: {
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
    bottomSheetFlatlist:{
        flex: 1
    },
    outOfStockBottomSheetFlatlist:{
        paddingHorizontal: 16,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        flex: Platform.OS == "ios" ? 0.65 : 0.59
    },
    errInnerView:{
        width: "90%"
    },
    inputStyle:{
        width:wp('100%'),
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 18,
        marginLeft:5,
    },
      inputCover:{
        width:"90%",
        alignSelf:"center",
        flexDirection:"row",
        paddingHorizontal:8,
        paddingVertical:2,
        borderWidth:1,
        borderColor:"rgba(121, 116, 126, 0.12)",
        borderRadius:8,
        backgroundColor:"rgba(121, 116, 126, 0.08)",
        height:45,
        marginTop:8,
        marginBottom:20,
        alignItems: "center"
      },
      searchIcon:{
        marginTop:Platform.OS === "android" ? 2 : 4,
        paddingLeft:10,
      },
    
})