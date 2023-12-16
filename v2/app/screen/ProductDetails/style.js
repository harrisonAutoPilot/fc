import { StyleSheet, Platform } from "react-native";


export default styles = StyleSheet.create({
    navHeader: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    navFav: {
        marginRight: 27
    },
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    productTitle: {
        color: "#000000",
        fontSize: 18,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
    },
    productDesc: {
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        marginTop: 4
    },
    productTitleContainer: {
        paddingHorizontal: 18,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: "#ececec",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec"
    },
    detailsContainer: {
        paddingTop: 8,
        paddingHorizontal: 18,
    },
    detailsPriceContainer: {
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderTopWidth: 1,
        borderTopColor: "#ececec",
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 16,
        alignItems: "center"
    },
    detailsAddToCart:{
        marginBottom: 4
    },
    detailsTitle: {
        color: "#1B1B1F",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,

    },
    detailsDesc: {
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
        textTransform: "capitalize"

    },
    expiryDetailsDesc: {
        color: "#BA1A1A",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
        textTransform: "capitalize"

    },
    detailsInnerView: {
        paddingTop: 16
    },
    amountText: {
        color: "#171B2C",
        fontSize: 24,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 32,
        letterSpacing: 0.1,

    },
    promoInnerContainer: {
        paddingVertical: 14,
        paddingHorizontal: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    promoContainer: {
        borderTopWidth: 3,
        borderTopColor: "#ececec",
    },
    outofStockContainer: {
        paddingVertical: 14,
        paddingHorizontal: 18,
        backgroundColor: "rgba(255, 218, 214, 1)",
        borderTopWidth: 3,
        borderTopColor: "#ececec",
    },
    promoTitle: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
        textTransform: "uppercase",
        marginLeft: 4
    },
    outofStockTitle: {
        color: "rgba(186, 26, 26, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    detailsIncrementBtn:{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: "rgba(90, 93, 114, 0.125)",
        borderWidth: 1,
        borderRadius: 4,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        backgroundColor: "#fff"
    },
    cartAmountView:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailsIncrement:{
        marginLeft: Platform.OS == "ios" ? 20 : 10
    },
    detailsDecrement:{
        marginRight: 20
    },
    incrementBtnText:{
        color: "#5A5D72",
        fontSize: 22,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 28,
        letterSpacing: 0.1,
    },
    incrementText:{
        color: "#000",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.1,
        alignItems: 'stretch',
        paddingHorizontal: 0,
     
    },
    disabledBtn:{
        color: "rgba(31, 31, 31, 0.12)"
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
        width: "90%"
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    },
    scrollViewContainer:{
        paddingBottom: 30
    },
    ccView:{
        backgroundColor: "rgba(255, 224, 134, 1)",
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 9,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        position: "absolute",
        top: "21%",
        marginTop:60,
    },
    ccText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.25,
        marginLeft: 6,
        color: "rgba(35, 27, 0, 1)"
    }
})