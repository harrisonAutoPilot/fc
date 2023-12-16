import { StyleSheet, Dimensions, Platform } from "react-native";


const styles = StyleSheet.create({
    searchView: {
        borderRadius: 8,
        backgroundColor: "#fff",
        paddingVertical: Platform.OS == "ios" ? 8 : 1,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#C2C5DD",
        paddingHorizontal: 14 ,
        width: "85%"
    },
    container: {
        height: "100%",
        backgroundColor: "#fff"
    },
    searchText:{
        color: "#45464F",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,
        marginLeft: 10,
        width: "80%",

    },
    headerCloseIcon:{
        width: 20,
        height: 20,
        backgroundColor: "rgba(200, 198, 202, 1)",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    homeHeaderView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    goBackText: {
        color: "rgba(27, 27, 31, 1)",
        fontFamily: "AnekLatin-Regular",
        fontSize: 14,
        letterSpacing: 0.25,
    },
    emptyResultContainer:{
        marginTop: "25%",
        width: "80%",
        alignSelf: "center"
    },
    emptyResultSearchIconContainer:{
        alignSelf: "center",
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(90, 93, 114, 0.3)",
        alignItems: "center",
        justifyContent: "center"
    },
    emptyResultHeader:{
        color: "rgba(69, 70, 79, 1)",
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 14,
        letterSpacing: 0.1,
        lineHeight: 20,
        textAlign: "center",
        marginTop: 30,
        textTransform: "capitalize"
    },
    emptyResultText:{
        color: "rgba(90, 93, 114, 1)",
        fontFamily: "AnekLatin-Regular",
        fontSize: 12,
        letterSpacing: 0.4,
        lineHeight: 16,
        textAlign: "center",
        marginTop: 4,
        textTransform: "capitalize",
        alignSelf: "center",
        marginBottom: 24
    },
    resultHeader:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.16)"
    },
    resultText: {
        color: "rgba(69, 70, 79, 1)",
        fontFamily: "AnekLatin-Medium",
        fontSize: 12,
        letterSpacing: 0.4,
        lineHeight: 16,
        textTransform: "uppercase"
    },
    searchListItems:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
        alignItems: "center"
    },
    searchListText:{
        color: "rgba(69, 70, 79, 1)",
        fontFamily: "AnekLatin-Regular",
        fontSize: 14,
        letterSpacing: 0.25,
        textTransform: "capitalize"
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
        marginTop: 20
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    }

   
   
});

export default styles