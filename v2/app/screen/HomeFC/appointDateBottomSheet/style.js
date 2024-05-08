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
    fontFamily: "AnekLatin-Regular",
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
    fontFamily: "AnekLatin-SemiBold",
    color: "#1B1B1F",
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
    height:120,
    borderWidth:1,
    borderColor:"#bfbfbf",
    borderRadius:4,
    alignSelf:'center',
    borderWidth:1,
    // borderColor:'#1B1B1F'
  },
  input:{
    padding:20,
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#1B1B1F",
    letterSpacing: 0.25, 
    textAlignVertical: 'top',
  },
  submitBtnContainer: {
   
    marginTop:20,
    height:50,

},
  confirmCover:{
    width: '95%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#99cb01',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:20
  },
  disabledCover:{
    width: '95%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#bfbfbf',
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
    textTransform:'uppercase'
  },
  confirmCoverChange:{
    width: '95%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: 'pink',
    alignItems: 'center',
    alignSelf:'center', 
    marginTop:20
  },

//   this is for the date Placeholder
CalendarPlaceholderContainer:{
width:'95%',
// backgroundColor:'#f5f5f5',
justifyContent:"center",
alignItems:'flex-start',
flexDirection:'row',
alignSelf:'center',
borderRadius:6,
padding:10,
paddingVertical:30,
flexWrap:'wrap'
},
dateDot:{
width:30,
height:30,
borderRadius:60,
backgroundColor:'#bfbfbf',
margin:10,
alignSelf:'center',
},
placeholderBtn:{
    width:'90%',
    height:45,
    borderRadius:50,
    marginTop:30,
    backgroundColor:'#e6e6e6'
}
});

export default styles