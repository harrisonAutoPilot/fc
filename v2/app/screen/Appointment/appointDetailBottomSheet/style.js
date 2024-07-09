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
        paddingHorizontal:30,
        paddingVertical:10,
        justifyContent:'flex-start',
        alignItems:'flex-start'
            },
intro:{
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#1B1B1F",
    lineHeight:22,
    letterSpacing: 0.25, 
    marginTop:5,
},
issues:{
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#1B1B1F",
    fontWeight:'500',
    letterSpacing: 0.25, 
},
issueDate:{
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "purple",
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
dateContainerTime:{
    paddingHorizontal:20,
    padding:10,
    alignItems:'center'
},
inputContainer:{
    width:wp('89%'),
    height:80,
    borderRadius:4,
    alignSelf:'center',
    borderWidth:1,
    borderColor:'#bfbfbf',

  },
  input:{
    padding:10,
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    color: "#000",
    letterSpacing: 0.25, 
    textAlignVertical: 'top',

  },
  
  confirmCover:{
    width: '95%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#99cb01',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:20
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#ff9900',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:30
  },
  confirmCoverChangeV2:{
    width: '88%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#ff9900',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:30
  },
  appTimeIntro:{
    fontSize: 16,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color:'#1B1B1F',
    letterSpacing: 0.1,
  },
  appTime:{
    fontSize: 26,
    fontFamily: 'AnekLatin-Medium',
    color: '#000',
    letterSpacing: 0.1,
  },
  errView:{
    paddingVertical: 20,
    paddingHorizontal: 16,
    // backgroundColor: "#BA1A1A",
    backgroundColor:'#f5f5f5',
    position:'absolute',
    zIndex:900,
    marginHorizontal: 16,
    borderLeftWidth:8,
    borderLeftColor:'#BA1A1A',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    alignSelf:'center',
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
    color: "#BA1A1A"
},
});

export default styles