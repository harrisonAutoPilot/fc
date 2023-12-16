import { StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    btnCover:{
        width:wp('85%'),
        padding:13,
        backgroundColor:'#5f9a32',
        borderRadius:50,
        alignSelf:'center',
        marginVertical:22,
        alignItems:'center',
  
    },
    btnText:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"  
    },
    btnCoverWhite:{
        width:wp('85%'),
        padding:13,
        backgroundColor:'#5f9a32',
        borderRadius:50,
        alignSelf:'center',
        marginVertical:22,
        alignItems:'center',
  
    },
    btnTextWhite:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"  
    }
})