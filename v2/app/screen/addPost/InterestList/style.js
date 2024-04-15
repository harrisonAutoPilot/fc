import { StyleSheet, Dimensions, Platform } from "react-native";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: 20,
        // backgroundColor: 'lightgray',
    },
    postContainer:{
        paddingHorizontal:30,
        alignSelf:'center'
    },
    introTitle:{
        color: "#000",
        fontSize:14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.1,  
        lineHeight:18,
    },
    cardContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'90%',
    height:70,
    alignSelf:'center',
    borderBottomWidth:0,
    borderBottomColor:'#f5f5f5'
   },
   textCircle:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'#0088cc',
    marginRight:10,
    alignItems:'center',
    justifyContent:'center'
   },
   textStyle:{
    color: "#000",
    fontSize:14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.1,  
    lineHeight:18,
   },
   singleText:{
    color: "#fff",
    fontSize:18,
    fontFamily: "AnekLatin-Medium",
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