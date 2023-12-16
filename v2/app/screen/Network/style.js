import { Dimensions, StyleSheet, Platform } from "react-native";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({

// this is where i start the new error
toastCover: {
   position: 'absolute',
   bottom:Platform.OS === "android" ? hp('4%') : hp('3%'),
   alignSelf: 'center',
   width:wp('92%'),
   backgroundColor: "#BA1A1A",
   flexDirection:'row',
   justifyContent:'space-between',
   borderRadius: 8,
   paddingHorizontal: 16,
   paddingVertical: 14,
   alignItems:'center',
   // zIndex: 9000,
 },
 errView:{

   // backgroundColor: "#BA1A1A",
   // shadowColor: 'rgba(0, 0, 0, 0.1)',
   // shadowOffset: { width: 0, height: 6 },
   // shadowOpacity: 0.9,
   // shadowRadius: 2,
   // elevation: 2,
   flexDirection: "row",
   justifyContent:'flex-start',
   // alignItems: "center",

},
errText:{
   fontSize: 14,
   fontFamily: "AnekLatin-Regular",
   letterSpacing: 0.25,
   marginLeft: 13,
   color: "#fff"
},


});

export default styles