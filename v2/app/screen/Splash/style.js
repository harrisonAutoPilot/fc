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
        top:hp('10%'),
        alignItems:'center'

    },
    fText:{
    color: "#fff",
    fontSize: 33,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1,    
    },
    bottomCover:{
        position:'absolute',
        bottom:hp('5%'),
    },
    cText:{
        color: "#fff",
        fontSize: 20,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,      
    }
});

export default styles;