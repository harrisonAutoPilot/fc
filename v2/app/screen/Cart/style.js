import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    navHeaderTitle: {
        color: "rgba(0, 20, 84, 1)",
        fontSize: 18,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24
    },
    safeAreaStyle:{
        flex:1,
        backgroundColor:'rgba(221, 225, 255, 3)'
      },
    navHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom:7,
        alignItems: "center"
    },
    navHeaderContainerNew: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginVertical: 12,
        paddingBottom:7,
        alignItems: "center"
    },
    navHeaderIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchView:{
        marginLeft: 10

    },

    // ListItems
    listImg:{
        width: 78,
        height: 57,
        resizeMode: "contain"
    },
    listImgView:{
        flexDirection: "row",
        alignItems: "center",
    },
    listView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    listOutOfView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0.5,
        marginBottom: 12
    },
    listChecbox:{
        borderWidth: 1,
        borderColor: "#5A5D72",
        height: 20,
        width: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    listOuterContainer:{
        paddingHorizontal: 14,
        paddingVertical: 16
    },
    listMainView:{
        backgroundColor: "#fff",
        marginTop: 8,
    },
    listTitle:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.25,
        textTransform: "capitalize",
        width: "50%",
        marginLeft: 24
    },
    listPrice:{
        color: "#45464F",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.25,
    },
    listOutOfStockPrice:{
        color: "#45464F",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.25,
        opacity: 0.5
    },
    listQty:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    listInputQty:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,
        alignItems: "center"
    },
    listOutOfStockQty:{
        color: "rgba(65, 0, 2, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    listQtyView:{
        borderWidth: 1,
        borderColor: "rgba(121, 116, 126, 0.08)",
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    listOutOfStockQtyView:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 218, 214, 1)"
    },
    listIconView:{
        marginLeft: 3
    },
    listBtm:{
        borderTopWidth: 1,
        borderTopColor: "rgba(121, 116, 126, 0.08)",
        paddingVertical: 13,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    listInnerBtm:{
        alignSelf: 'flex-start',
        flexDirection: "row",
        alignItems: "center",
    },
    listRemoveText:{
        color: "rgba(118, 118, 128, 1)",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        letterSpacing: 0.5,
        marginLeft: 8
    },
    listBottomBtnView:{
        marginTop: 10,
    },
    listBottomView:{
        backgroundColor: "rgba(221, 225, 255, 3)",
        marginTop: 6,
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderTopColor:'#f5f5f5',
        borderTopWidth:1,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
        elevation: 0,
    },
    listBottomText:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
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

     // PlaceHolder styles
     smLine: {
        width: 40,
        height: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 7,
    },

    lgLine: {
        width: "60%",
        height: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },
    scrollview:{
        paddingBottom: 10
    },
    listImgPlaceHolder:{
        width: 68,
        height: 47,
        resizeMode: "contain",
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginRight: 20
    },
    listImgViewPlaceHolder:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    // EmptyCart
    emptyCartView:{
        alignItems: "center",
        paddingTop: "50%",
        width: "100%",
        height: Dimensions.get("window").height / 1.29
    },
    emptyCartTitle:{
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        color: "rgba(27, 27, 31, 1)",
        lineHeight: 28,
        textAlign: "center"
    },
    emptyCartSubTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        color: "rgba(90, 93, 114, 1)",
        lineHeight: 20,
        textAlign: "center",
        letterSpacing: 0.25,
        marginTop: 4
    },
    emptyCartTextView:{
        marginTop: 8,
        flex: 0.95
    },
    emptyCartBtn:{
        width: "90%",
    },

    // Bottomsheet
    reusableView:{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 18,
    },
    bottomSheet:{
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom:35,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            flexDirection:'column',
            justifyContent:'space-between',
            paddingVertical: 0,
            paddingHorizontal: 16,
            width: wp('100%'),
            height:hp('17%'),
            alignSelf: 'center',
            position: 'absolute',
            top: Platform.OS === 'android' ? hp('35%') : hp('35%'),
    },
    bottomSheetTitle:{
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(27, 27, 31, 1)",
        lineHeight: 24,
        letterSpacing: 0.5,
        marginLeft: 26,
       
    },

    // Deal
    dealImg:{
        width:20,
        height: 20,
        marginLeft: 10
    },
    dealImgView:{
       flexDirection: "row",
       alignItems: "center"
    },
    backImg: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight:10,
    },
    smFlex:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }

});

export default styles