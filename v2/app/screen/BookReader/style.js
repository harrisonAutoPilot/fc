import { StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
    },
    innerContainer:{
    flexDirection:"column",
    padding:20
    },
   card:{
    width:"85%",
    padding:20,
    paddingHorizontal:5,
    borderTopWidth:1,
    borderTopColor:"rgba(121, 116, 126, 0.16)",
    flexDirection:"row",
    alignSelf:"center",
    justifyContent:"space-between"
   },
   leftCover:{
    flexDirection:"row",
    justifyContent:'space-between',
    width:"80%",
    alignItems:"center",
   },
   imgCover:{
    width:55,
    height:55,
    borderRadius:100,
    backgroundColor:"#FEFBFF",
    justifyContent:"center",
    alignItems:'center',
    borderWidth:1,
    borderColor:"#F2F0F4"
   },
   contentCover:{
    width:"73%",
    alignItems:"flex-start",
    justifyContent:'center',
    alignSelf:'flex-start',
    marginTop:5
   },
   bgText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    letterSpacing: 0.25
   },
   smText:{
    color: "#5A5D72",
    fontSize: 11,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.25
   },
   arrowCover:{
    justifyContent:"center",
    alignItems:'center'
   },
   rightImg:{
    width:15,
    height:15,
    resizeMode:"contain"
   },
   img:{
    width:22,
    height:22,
   },
   docCover:{
    width:wp('90%'),
    height:hp('65%'),
    alignItems:'center',
    alignSelf:'center',
    marginRight:10,
  },
  certImg:{
    marginTop:45,
    width:351,
    height:490,
    resizeMode:'cover',
    // alignSelf:'center'
  },
  pdfStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
 
  },
  backCover:{
    position:'absolute',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    height:30,
    width:30,
    left:25,
    top:20,
    backgroundColor:'rgba(52,52, 52, 0.8)',
    zIndex:900
  },
  previewContainer:{
    width:wp('96%'),
    height:200,
    borderRadius:6,
    backgroundColor: 'rgba(12, 52, 52, 0.7)',
    position:'absolute',
    alignSelf:'center',
    marginLeft:5,
    bottom:10,
    padding:10,
    paddingVertical:15,
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  descText:{
    color: '#fff',
    fontSize: 16,
    fontFamily: "Playfair-Regular",
    textAlign:'left',
    width:wp('76%'),
  },
  moreCover:{
    width:70,
    height:20,
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    right:30,
    bottom:-3
  
  },
  readmore:{
    color: '#00b300',
    fontSize: 15,
    fontFamily: "AnekLatin-Medium",
    textTransform:'lowercase',
    marginBottom:1,

  },
  previewInner:{
   width:'100%',
    justifyContent:'space-between',
    paddingVertical:10,
  },
  otherCover:{
    paddingHorizontal:10,
    marginTop:-5
  },
  otherCaption:{
    color: '#fff',
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    textTransform:'capitalize', 
  },
  bottomCardRed:{
    width:110,
    padding:10,
    height:140,
    backgroundColor:'#fff',
    justifyContent:'space-between',
    borderLeftWidth:0,
    borderTopWidth:0,
    borderWidth:1,
    borderRadius:6,
    borderColor:"#f5f5f5",
    zIndex:900,
    alignSelf:'flex-start',
    marginRight:10,
},
bottomCardRedFlex:{
flexDirection:'row',
justifyContent:'space-between'
},
downloadCover:{
    width:30,
    height:30,
    borderRadius:100,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center'
},
logoImg:{
width:30,
height:30,
borderRadius:100,
resizeMode:'contain',
backgroundColor:'#bfbfbf'
},
pdfImg:{
  width:50,
  height:50,
  resizeMode:'contain'
  },
pdfFileName:{
    fontSize: 12,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 16,
    color: '#000',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
},
smVideoCard:{
    width:wp('33.1%'),
    height:200,     
},
imageCard:{
    width:'100%',
    height:200,     
},
miniPlay:{
    width:42,
    height:42,
    borderRadius:100,
   alignItems:'center',
   justifyContent:'center',
   flexDirection:'row',
   position:'absolute',
   top:0,
   right:-5

  },
  miniClose:{
    position:'absolute',
    right:10,
    top:10,
    zIndex:900
  },
  // apointCover:{
  //   width:50,
  //   height:50,
  //   backgroundColor:'#bfbfbf',
  //   borderRadius:100,
  //   alignSelf:'flex-end',
  //   zIndex:9000, 
  //   justifyContent:'center',
  //   alignItems:'center',
  //   position:'absolute',
  //   bottom:70,
  //   right:20  
  // },

  noteCover:{
    width:60,
    height:60,
    borderRadius:100,
    // backgroundColor: 'rgba(32, 52, 52, 0.8)',
    alignSelf:'center',
    position:'absolute',
    right:5,
    flexDirection:'row',
    justifyContent:'center',
    zIndex:9000,
    position:'absolute',
    bottom:320,
  },
  indicatorCover:{
    width:50,
    height:50,
    borderRadius:100,
    backgroundColor: 'rgba(32, 52, 52, 0.8)',
    alignSelf:'center',
    position:'absolute',
    flexDirection:'row',
    justifyContent:'center',
    zIndex:9000,
    position:'absolute',
    bottom:70,
    right:20  
  },
  
  loadImg: {
    width: 40,
    height: 40,
    borderRadius:100,
    alignSelf:'center',
    zIndex:900,
    position:'absolute',
    resizeMode:'contain'
    // marginTop:25
    
  },
  writeImg:{
    width: 35,
    height: 35,
    // borderRadius:100,
    alignSelf:'center',
    zIndex:900,
    position:'absolute',
    resizeMode:'contain'
  }
})

