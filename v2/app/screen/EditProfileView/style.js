import { Platform,Dimensions, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const screenHeight = Dimensions.get('window').height

export default styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: Platform.OS == "android" ? 10 : 0,

    },

    loginTitleContainer:{
        paddingHorizontal: 28,
        height: "100%"
    },
    loginTitle:{
        color: "#171B2C",
        fontSize: 26,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        marginBottom: 4,
        alignSelf:'center'
    },
    loginDesc:{
        color: "rgba(69, 70, 79, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 26,
        letterSpacing: 0.25,
        marginBottom:10
    },

    // FORM VALIDATOR
    formContainer:{
        marginTop: 10,
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-between',
        flex: 0.89,
     
    },
    resetPinFormContainer:{
        marginTop: 16,
        flex: 1,
    },
    submitLoginBtnContainer:{
        marginTop: 24
    },
    inputFieldView:{
        flexDirection: "row",
        justifyContent:"space-between"
    },

    // COUNTRYCODE DROPDOWN OUTER BOX

    dropDownContainer:{
        borderWidth: 1.2,
        borderColor: '#5A5D72',
        borderRadius: 5,
        marginTop: 15,
        height: 60,   
        
    },
    dropDownLabelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    dropDownLabelViewTeam:{
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 5,
        zIndex: 2
    },
    dropDownLabelText: {
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        color: "#45464F",
        letterSpacing: 0.2,
        textTransform: "capitalize"
    },
    formFlex:{
        flex: 0.90,
        borderBottomWidth:1,
        borderBottomStyle:'solid',
        borderBottomColor:'#f5f5f5'
   
    
    },
    formInputFieldFlex: {
        flex: 0.8
    },
    dropDownTextInput:{
        justifyContent: "space-between",
        alignItems: "center",
        // alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15

    },
    dropDownTextInputTeam:{
        justifyContent: "space-between",
        alignItems: "center",
        // alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15

    },
    dropDownTextInputTitle: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#424242",
        letterSpacing: 0.5,
        width: "80%"
    },
    dropDownTextInputTitleTeam: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#e6e6e6",
        letterSpacing: 0.5,
        // width: "80%"
    },

    // ForgotNumber
    forgotNumberTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        color: "#5A5D72",
        letterSpacing: 0.25
    },
    forgotNumberView:{
        alignSelf: "flex-end",
        marginTop: 8
    },

    // ERR HANDLING
    errLoginView:{
        alignSelf: "flex-end",
        marginTop: 2
    },
    inputErrText:{
        color: "#BA1A1A",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        letterSpacing: 0.4,
    },
    inputErrHolder: {
        borderColor: "#BA1A1A"
    },

    // RESETPINSUCCESS
    resetPinContainer:{
       paddingTop: "40%",
        backgroundColor:"#fff",
        flex: 1,
        paddingHorizontal: 30
    },
    resetPinImage:{
        width: 140,
        height: 126,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"

    },
    resetPinImageView:{
        alignSelf: "center",
        alignItems: "center"
    },
    resetPinTitleView:{
        marginTop: 100,
    },
    resetPinTitle:{
        color: "#171B2C",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        textAlign: "center"
    },
    resetPinDesc:{
        color: "#5A5D72",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        textAlign: "center",
        marginTop: 8
    },
    resetFlexUp:{
        flex: 0.85
    },
    resetFlexDown:{
        flex: 0.1
    },
    submitBtnContainer: {
   
        marginTop:20,
        height:60,
    
    },
    agreeText:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        marginLeft:10,
        marginTop:3,

      
    },
    boxContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        marginTop:-100,
    },
    boldText:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 16,
        marginLeft:0,
        marginTop:3,   
    },
    quotedText:{
        color: "#000",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 16,
        marginLeft:0,
        marginTop:3,    
    },
    clickCover:{
        alignSelf:'center',
        paddingVertical:10,
    },
    clickText:{
        color: "#3353CB",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 16,
        marginLeft:0,
        marginTop:3,     
        textDecorationLine: 'underline'
    },
    bottomContainer:{
        alignSelf:'center',
        width:'100%',
        borderTopWidth:1,
        borderTopStyle:'solid',
        borderTopColor:'#000'
    },
    profileImgCover:{
        width:120,
        height:120,
        borderRadius:400,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#000',
        borderStyle:'dashed',
        flexDirection:'row',
        justifyContent:'center',
    },
    profileImg:{
        width:90,
        height:90,
        borderRadius:200,
        alignSelf:'center',
        alignItems:'center'
    },
    avarImg:{
        width:120,
        height:120,
        borderRadius:400,
        alignSelf:'center',
        alignItems:'center'
    },
    middleOption:{
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'80%',
        marginTop:20,
      
    },
    optionOne:{
        width:100,
        height:60,
        // backgroundColor:'#f5f5f5',
        borderWidth:1,
        borderColor:'#f5f5f5',
        borderStyle:'solid',
        borderRadius:6,
        alignItems:'center',
        padding:5,

    },
    optionTwo:{
        width:100,
        height:60,
        // backgroundColor:'#f5f5f5',
        borderWidth:1,
        borderColor:'#f5f5f5',
        borderStyle:'solid',
        borderRadius:6,   
        alignItems:'center',
        padding:5,
    },
    optionText:{
        color: "#000",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16, 
    },
    optionImg:{
        width:30,
        height:30,
        resizeMode:'cover',
        marginBottom:5
    },
    camCircle:{
        width:35,
        height:35,
        borderRadius:100,
        position:'absolute',
        backgroundColor:"#f5f5f5",
        alignItems:'center',
        justifyContent:'center',
       bottom:10,
        right:-5,
        zIndex:900
       
      },
      inputContainer:{
        width:'100%',
        height:'60%',
        alignSelf:'center',
        justifyContent:'flex-start',
        borderWidth:1,
        borderColor:"#e6e6e6",
        borderRadius:8,
        // backgroundColor:"#f5f5f5",
        borderRadius:4,
        marginTop:50
    },
    input:{
        color: "#1B1B1F",
        fontSize:16,
        fontFamily: "AnekLatin-Regular",
        paddingLeft:15,
        lineHeight:24,
        width:'95%',
        textAlign:'auto',
        padding:15,
        alignSelf:'center',
        textAlignVertical: 'top',
        borderRadius:4,
        borderColor:'rgba(118, 118, 128, 1)',
        borderWidth:0,
        justifyContent:'flex-start'
    },
    inputStyle:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 18,
        marginLeft:5,
    },
    descCover:{
padding:10,
paddingHorizontal:20,
    },
    descLabel:{
        color: "#1B1B1F",
        fontSize:16,
        fontFamily: "AnekLatin-Regular",
    },
    maxCover:{
alignSelf:'flex-end',
padding:5,
    },
    maxText:{
        color: "#1B1B1F",
        fontSize:12,
        fontFamily: "AnekLatin-Regular",
    },
    errView:{
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: "#BA1A1A",
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    errText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.25,
        marginLeft: 13,
        color: "#fff"
    },
    toastCover: {
        position: "absolute",
        bottom: 0,
        width: wp('100%'),
        zIndex:9000
      },
      sucView: {
        paddingTop: 14,
        paddingHorizontal: 16,
        backgroundColor: "rgba(16, 109, 52, 1)",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 30
      },
})

