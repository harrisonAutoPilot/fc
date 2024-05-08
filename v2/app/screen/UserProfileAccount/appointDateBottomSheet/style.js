import { StyleSheet, Dimensions, Platform } from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
        marginTop: 36,
        marginBottom: 16
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
    fontSize: 22,
    fontFamily: "AnekLatin-SemiBold",
    color: "#1B1B1F",
    lineHeight:28,
    letterSpacing: 0.25, 
},
issueDateNew:{
    fontSize: 16,
    fontFamily: "AnekLatin-Medium",
    color: "purple",
    letterSpacing: 0.25, 
    marginTop:-10,
    marginBottom:10
},
dateContainer:{
    paddingHorizontal:20,
    padding:10,
},
inputContainer:{
    width:wp('90%'),
    height:180,
    borderWidth:1,
    borderColor:"#bfbfbf",
    borderRadius:4,
    alignSelf:'center',
    borderWidth:1,
    borderColor:'#1B1B1F'
  },
  input:{
    padding:20,
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#1B1B1F",
    letterSpacing: 0.25, 
    textAlignVertical: 'top',
  },
  
  confirmCover:{
    width: '88%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#99cb01',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:30
  },
  confirmText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#fff',
    letterSpacing: 0.1,
    marginRight: 10,
  },
  confirmCoverChange:{
    width: '95%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#ff9900',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:20
  },
  successImg:{
    width:420,
    height:300,
    alignSelf:'center'
  },
  calendarCover:{
    alignItems:'center',
    alignSelf:'center'
  },
  calendarText:{
    fontSize: 28,
    fontFamily: "AnekLatin-SemiBold",
    color: "#99cb01",
    lineHeight:28,
    letterSpacing: 0.25, 
    marginTop:-50,
    paddingHorizontal:50,
    textAlign:'center'
},
generatingDownloadText:{
    color: "#bfbfbf",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: 0.5,
    marginLeft:15,
    marginTop:5
},

generatingDownload:{
width:'90%',
padding:5,
alignSelf:'center',
justifyContent:'center',
flexDirection:'row',
borderWidth:1,
borderStyle:'solid',
borderColor:'#bfbfbf',
borderRadius:30,
marginTop:30

},
errView:{
    width:wp('90%'),
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
    alignSelf:'center',
    marginTop: 20
},
errText:{
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    marginLeft: 13,
    color: "#fff"
},
toastCover: {
  position: "absolute",
  bottom: 0,
  width: wp('100%'),
  zIndex:9000
},
sucView: {
  paddingTop: 14,
  paddingHorizontal: 16,
  backgroundColor: "rgba(16, 109, 52, 1)",
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 1,
  elevation: 1,
  flexDirection: "row",
  alignItems: "center",
  padding: 30
},
});

export default styles