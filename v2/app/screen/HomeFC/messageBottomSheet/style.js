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
 
    bottomSheet:{
        paddingTop:20,
        paddingBottom:8,
     
    },
    messageCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        width:'100%',
        alignSelf:'center'
    },
    userAvatarCover:{
        width:40,
        height:40,
        borderRadius:100,
    },
    smLine:{
        width:80,
        height:15,
        borderRadius:20,
        backgroundColor: 'lightgray',
        marginVertical:5
    },
    mdLine:{
        width:190,
        height:15,
        borderRadius:20,
        backgroundColor: '#e6e6e6',
    },
    userAvatarCoverP:{
        width:30,
        height:30,
        borderRadius:100,
        backgroundColor:'#bfbfbf'
    },
    userCommentCover:{
        width:"85%",
        // backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:10,
        borderTopLeftRadius:0,
  
    },
    bottomContainer:{
        position:'absolute',
        padding:5,
        bottom:8,
        width:'100%',
        alignSelf:'center',
        alignItems:'flex-start',
        borderRadius:40,
        paddingHorizontal:10,
        minHeight:45, 
        borderTopWidth:1,
        borderTopColor:'#f5f5f5',
        paddingTop:10,
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        paddingHorizontal:3,
        minHeight:45,
        paddingTop:10,
    },
    inputField: {
        width: wp('72%'),
        color: 'rgba(118, 118, 128, 1)',
        paddingLeft:10,
        fontSize: 14,
        color:"#000",
        fontFamily: "AnekLatin-Regular",
        // height:Platform.OS === "android" ? 45 : 20,
        letterSpacing: 0.25,
        // paddingBottom:Platform.OS === "android" ? 0 : 5,
        alignSelf:'center'

    },
    colorText:{
    color: "#99cb01",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
  
    },
    grayText:{
        color: "#454545",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
      
    },
    innerFlex:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width: wp('68%'),
    },
    myAvartar:{
        width:30,
        height:30,
        borderRadius:100,
        marginRight:8,
        resizeMode:'cover'
        // backgroundColor:'red'
    },
    optionStyles:{
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#bfbfbf',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginHorizontal:5,
    },
    optionText:{
        color: "#757575",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium", 
        marginBottom:3
    },
    scrollContainer:{
        width:'100%' 
    },
    userCommentHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userCommentHeaderP:{
        width:"83%",
        backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:10,
        borderTopLeftRadius:0,
    },
    commenterName:{
        color: "#000",
        textTransform:'capitalize',
        fontSize: 14,
        fontFamily: "AnekLatin-Medium", 
    },
    userCommentDate:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    commenterDate:{
        color: "#757575",
        fontSize: 10,
        fontFamily: "AnekLatin-Medium", 
        marginLeft:2,
    },
    contentText:{
        color: "#757575",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular", 
        lineHeight:18,
    },
      
//    this is for the empty screen
emptyContainer:{
    width:"100%",
     height:300,
    justifyContent:'center',
     flex:1,
    alignItems:'center',
    alignSelf:'center',
   
},
storeImg:{
    width:90,
    height:90,
    resizeMode:'contain',
    
},
emptyTextCover:{
 width:"100%",
alignSelf:'center',
alignItems:'center',
marginTop:20,
},
emptyBgText:{
    color: "#1B1B1F",
    fontSize: 22,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
},
emptySmText:{
    color: "#45464F",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    paddingHorizontal:20,
    marginTop:10
},
});

export default styles