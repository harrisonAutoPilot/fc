import { StyleSheet, Dimensions, Platform } from "react-native";


const styles = StyleSheet.create({
    homeHeaderView:{
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center"
    },
    searchView: {
        borderRadius: 8,
        backgroundColor: "#fff",
        paddingVertical: 14,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#C2C5DD",
        paddingHorizontal: 14,
        width: "88%"
    },
    searchText:{
        color: "#45464F",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,
        marginLeft: 10,
        width: "80%"
    },
    paramHeader:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    paramText: {
        color: "#1B1B1F",
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 14,
        letterSpacing: 0.1,
        lineHeight: 20,
        textTransform: "uppercase"
    },
    paramFilterView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    paramFilterText: {
        color: "rgba(90, 93, 114, 1)",
        fontFamily: "AnekLatin-Regular",
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20,
        marginHorizontal: 6
    },

    body:{
        backgroundColor: "#fff",
        flex: 1
    },
      // PRODUCTS
      productCard: {
        width: '50%',
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderColor: '#f2f3f4',
        overflow: "hidden",
    },
    productInnerCard: { 
        padding: 20,
    },
    productImgView: {
        marginTop: 5,
        alignItems: "center",
        height: 110,

    },
    productImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    productTitle: {
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        color: "#5A5D72",
        letterSpacing: 0.24,
        textTransform: "capitalize"
    },
    priceView: {
        paddingTop: 2
    },
    priceTitle: {
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        color: "#171B2C",
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



    // Filter
    filterHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    filterHeaderText:{
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        color: "rgba(27, 27, 31, 1)"
    },
    filterResetText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(51, 83, 203, 1)",
        letterSpacing: 0.25
    },
    filterPriceTitle:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        color: "rgba(27, 27, 31, 1)",
        letterSpacing: 0.1,
        lineHeight: 24
    },
    filterPriceView:{
        paddingHorizontal: 16,
        marginTop: 8
    },
    filterPriceList:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 10
    },
    filterPriceListTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(90, 93, 114, 1)",
        letterSpacing: 0.25
    },
    filterPriceActiveListTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        color: "rgba(27, 27, 31, 1)",
        letterSpacing: 0.25
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
    innerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    checkCover:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:"rgba(51, 83, 203, 1)",
        borderRadius:4,
        paddingHorizontal:5,
        paddingVertical:3,
        marginLeft:5,
        backgroundColor:'rgba(223, 225, 249,1)'
    },
    checkText:{
        fontSize: 11,
        lineHeight:16,
        fontFamily: "AnekLatin-Medium",
        color: "rgba(51, 83, 203, 1)",
        letterSpacing: 0.25,
        marginLeft:3   
    }

    
});

export default styles