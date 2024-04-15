import {StyleSheet, Dimensions} from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    body: {
        height: hp('100%'),
        width: Dimensions.get("window").width
    },
    imageHolder:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100
    },
    middleContainer:{
        width:300,
        height:300,
        // backgroundColor:'red',
        position:'absolute',
        alignSelf:'center',
        top:hp('3%'),
        alignItems:'center'

    },
    fText:{
    color: "#fff",
    fontSize: 20,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1,  
    // marginTop:-100
    },
    cTextSm:{
      color: "#fff",
      fontSize: 14,
      fontFamily: "AnekLatin-Medium",
      letterSpacing: 0.1,  
      textAlign:'center'
      // marginTop:-100
      },
    bottomCover:{
        position:'absolute',
        bottom:hp('20%'),
        alignItems:'center',
        width:'95%'
    },
    cText:{
        color: "#fff",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.1, 
        textAlign:'center'     
    },
    closeBtn:{
      width:60,
      height:60,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:100,
    },
    pickBtn:{
      width:60,
      height:60,
      backgroundColor:'green',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:100,
    },
    paticipantCard:{
        width:105,
        height:200,
        borderRadius:10,
        borderWidth:2,
        // borderColor:"#99cb01",
        alignItems:'center',
        justifyContent:'center'
     
    },
    participantListCover:{
        padding:10,
        paddingHorizontal:5,
        flex:1,
    },
    bottomCardCover:{
        width:'100%',
        flex:1,
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center',
       paddingLeft:1,
       zIndex:90,
       marginVertical:10
   },
   idText:{
    color: "#bfbfbf",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1,  
    textAlign:'center'
   },
   codeText:{
    color: "#000",
    fontSize: 18,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,  
    padding:10
   }
});

export default styles;