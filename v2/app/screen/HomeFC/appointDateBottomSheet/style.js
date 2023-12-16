import { StyleSheet, Dimensions, Platform } from "react-native";


const styles = StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: 100,
        backgroundColor: 'lightgray',
    },
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
        color: "#1B1B1F",
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
    smDateBtn:{
        backgroundColor:'rgba(51, 83, 203, 1)',
        borderRadius:3,
        paddingHorizontal:8,
        paddingVertical:5,
    },
    smDateBtnText:{
        fontSize: 8,
        fontFamily: "AnekLatin-Regular",
        color: "#fff",
        letterSpacing: 0.25
    },
    bottomSheet:{
        paddingTop:20,
     
    },


    topContainer:{
width:'100%',
paddingHorizontal:20,
justifyContent:'flex-start',
flexDirection:'row',
alignItems:'flex-start'
    },
    userImg:{
        width:60,
        height:60,
        borderRadius:100,
        resizeMode:"cover"
    },
    userName:{
        fontSize: 16,
        fontFamily: "AnekLatin-Medium",
        color: "#000",
        letterSpacing: 0.25, 
        marginTop:30,
        marginLeft:10
    },
    verImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginTop: 30,
        marginLeft: 30,
        position: 'absolute',
        left:35,
        top: 8,
      },
      midContainer:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'flex-start',
        alignItems:'flex-start'
            },
intro:{
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#1B1B1F",
    letterSpacing: 0.25, 
},
issues:{
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    color: "#1B1B1F",
    letterSpacing: 0.25, 
},
issueDate:{
    fontSize: 16,
    fontFamily: "AnekLatin-Medium",
    color: "purple",
    letterSpacing: 0.25, 
}
    
});

export default styles