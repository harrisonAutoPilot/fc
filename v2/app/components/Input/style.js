import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
       
        width:wp('90%'),
        alignSelf:'center',
        // backgroundColor:'#e3e3e3',
        borderWidth:1,
        borderColor:"#e3e3e3",
        borderRadius:50,
        marginVertical:5,
        marginBottom:10,
        
    },
    input:{
        padding:10,
        paddingLeft:30,
        color:'#212121'
    }
    
})