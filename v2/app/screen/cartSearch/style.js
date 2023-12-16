import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({
    searchView: {
        borderRadius: 8,
        backgroundColor: "#fff",
        paddingVertical: Platform.OS == "android" ? 1 : 16,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#C2C5DD",
        paddingHorizontal: 14,
        width: "90%"
    },
    container: {
        height: "100%",
    },
    searchText:{
        color: "rgba(69, 70, 79, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,
        marginLeft: 10,
        width: "80%"
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
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        backgroundColor: "#fff",
        flexDirection:"row",
        justifyContent: "space-between"
    },
    resultText: {
        color: "rgba(69, 70, 79, 1)",
        fontFamily: "AnekLatin-Medium",
        fontSize: 12,
        letterSpacing: 0.4,
        lineHeight: 16,
        textTransform: "uppercase"
    },
    resultBtn: {
        color: "rgba(69, 70, 79, 1)",
        fontFamily: "AnekLatin-SemiBold",
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
    backgroundColor: "#fff",
    marginTop: 6,
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
},
listBottomText:{
    color: "rgba(27, 27, 31, 1)",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    letterSpacing: 0.1,
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
}
   
   
});

export default styles