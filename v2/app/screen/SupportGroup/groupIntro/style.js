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
    width: '95%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#000',
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

//   this is where i start it
bannerTop:{
    width:'95%',
    height:140,
    borderRadius:6,
    alignSelf:'center',
    marginVertical:20,
    borderWidth:1,
    borderColor:'#bfbfbf'
},
roomImg:{
    width:'100%',
    height:140,
    borderRadius:6,  
},
topTitleCover:{
paddingVertical:10,
paddingBottom:20,
},
topTitle:{
    color: "#000",
    fontSize:22,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1, 
},
middleContainer:{
width:'95%', 
alignSelf:'center'
},
membersContainer:{
    zIndex:900,
    // width:115,
    height:30,
    flexDirection:'row',
    alignItems:'center',
},
imgAvarter:{
    width:40,
    height:40,
    borderRadius:100,
    // backgroundColor:'#000'
},
imgAvarterB:{
    width:40,
    height:40,
    borderRadius:100,
    // backgroundColor:'blue',
    marginLeft:-8
},
imgAvarterC:{
    width:40,
    height:40,
    borderRadius:100,
    // backgroundColor:'yellow',
    marginLeft:-8
},
imgAvartar:{
    width:40,
    height:40,
    borderRadius:100,
},
memberCount:{
    color: "#000",
    fontSize:18,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.1, 
    marginLeft:10,
},
timeCover:{
    flexDirection:'row',
    paddingHorizontal:10,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingTop:15,
},
timeText:{
    color: "#000",
    fontSize:14,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1, 
    marginLeft:2,      
},
underMiddleCover:{
    width:'100%',
    padding:10,
    flexDirection:'row',
    justifyContent:'flex-start'
},
memberinfo:{
    color: "#000",
    fontSize:12,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.1, 
    marginLeft:2  
},
createdCover:{
    paddingTop:4
},
joinBtn:{
    width:'88%',
    borderRadius:30,
    backgroundColor:'#99cb01',
    padding:12,
    alignSelf:'center',
    alignItems:'center',
    marginVertical:20
},
joinText:{
    color: "#fff",
    fontSize:16,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1, 
    textTransform:'capitalize'
},
roomInfoTitle:{
    color: "#000",
    fontSize:16,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,  
    marginLeft:10   
},
rulesCover:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10,
},
listTag:{
width:30,
height:30,
borderRadius:4,
backgroundColor:'#bfbfbf',
alignItems:'center',
justifyContent:'center',

},
listNumber:{
    color: "#fff",
    fontSize:12,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,  
     
},
listItem:{
    color: "#000",
    fontSize:14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.1,  
    lineHeight:18,
    marginLeft:10  
},
closeBtn:{
    width:30,
    height:30,
    borderRadius:60,
    backgroundColor:'rgba(70,52,52,0.8)',
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    top:5,
    right:10,
    zIndex:900
}
});

export default styles