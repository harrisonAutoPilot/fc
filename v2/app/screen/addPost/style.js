import { Platform,Dimensions, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    mainBody: {
        paddingTop: 1,
        backgroundColor: "#fff",
        height: "100%",
        flex: 1
    },
    main:{
        // height: hp('100%'),
        // flexGrow: 1
    },
    safeAreaStyle:{
        flex:1,
        paddingTop:15,
        // backgroundColor:'rgba(221, 225, 255, 3)'
        backgroundColor:'#fff'
      },
// started the new design
topNav: {
    width:wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: 'center',
    backgroundColor:'#fff'
  },
  leftNav: {
    width: wp('30%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightNav: {
    width: wp('70%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems:'flex-end',
  },
  textTicker:{
    width: wp('60%'),
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    color: '#9900cc',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
  nameText: {
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
    backImg: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight:10,
    },
    smFlex:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:10,
        paddingHorizontal:20,
    },
    imgContainer:{
        width:'21%',
        height:80,
        borderWidth:0,
        borderColor:'#99cb01',

    },
    imgCover:{
        width:79,
        height:79,
        borderWidth:2,
        borderColor:'#99cb01',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    topInnerContainer:{
        width:'75%',
        borderWidth:0,
        borderColor:"#000",
        borderRadius:4,
    },
    topStatus:{
        width:55,
    flexDirection:"row",
    justifyContent:"center",
    borderRadius:20,
    backgroundColor:'#99cb01',
    alignItems:'center',
    padding:3,
    position:'absolute',
    top:61,
    left:12

    },
    topStatusText:{
        // color: "#1B1B1F",
        color: "#fff",
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,   
    },
    dotStyle:{
        width:4,
        height:4,
        backgroundColor:'#fff',
        borderRadius:18
    },
    topInnerFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    singleCover:{
        alignItems:'center',
        justifyContent:'center'
    },
    topPostTextCount:{
        color: "#1B1B1F",
        fontSize: 18,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.1,   
    },
    topPostText:{
        color: "#1B1B1F",
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.1,   
    },
    topInnerBottomCover:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    topBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:35,
        paddingVertical:5,
        backgroundColor:'#fff',
        borderRadius:4,
        elevation:4,
        shadowColor:'#fff',
        borderWidth:1,
        borderColor:"#e6e6e6"
     
    },
    topBtnRight:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:35,
        paddingVertical:5,
        borderRadius:4,
        backgroundColor:'#99cb01'
    },
    topBtnText:{
        color: "#454545",
        fontSize: 12,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.1,    
        marginTop:-3,
        marginLeft:5 
    },
    posterImg:{
        width:76,
        height:76,
        borderRadius:100, 
   
    },
    introContainer:{
        width:"100%",
        padding:10,
        paddingHorizontal:20

    },
    titleInit:{
    color: "#1B1B1F",
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,    
    },
    titleText:{
    color: "#1B1B1F",
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.1,    
    },
    descText:{
    color: "#1B1B1F",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1,    
    },
    supportCardContainer:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10,

    },
    supportHeaderContainer:{
        paddingHorizontal:0,
        paddingVertical:5,
        width:'100%'
    },
    supportHeaderText:{
        color: "#1B1B1F",
        fontSize: 12,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,  
    },
    supportCard:{
        width:200,
        height:120,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#e6e6e6',
        backgroundColor:'#fff',
        marginRight:8,
        elevation:6,
        marginVertical:2,
        shadowColor: '#fff'
    },
    supportImg:{
        width:200,
        height:120,
     borderRadius:6,
    },
    supportInfoCover:{
        width:"100%",
        height:50,
        // backgroundColor:'rgba(70,52,52,0.8)',
        position:'absolute',
        bottom:-1,
        alignItems:'flex-start',
        paddingHorizontal:5,
        justifyContent:'flex-start',
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6
    },
    supportTitleText:{
        color: "#000",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1,    
        textTransform:'capitalize'    
    },
    smTag:{
        paddingHorizontal:15,
        paddingVertical:2,
        backgroundColor:'red',
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
    },
    downFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:"100%",
        // marginTop:10,
    },
    tagText:{
        color: "#fff",
        fontSize:8,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1, 
        textTransform:'uppercase'   
    },
    timeCover:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:5
    },
    timeText:{
        color: "#000",
        fontSize:9,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.1, 
        marginLeft:2,      
    },
    scrollStyle:{
        width:wp('100%')
    },
    bottomBtnsContainer:{
        width:wp('80'),
        height:60,
        position:"absolute",
        bottom:hp('8%'),
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    circleContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    circle:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'#e6e6e6',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
    },
    imgAvartar:{
        width:25,
        height:25,   
    },
    circleText:{
        color: "#1B1B1F",
        fontSize:14,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.1,
        marginTop:5,
    },
    inputContainer:{
        width:wp('90%'),
        height:hp('60%'),
        alignSelf:'center',
        justifyContent:'flex-start',
    },
    input:{
        color: "#1B1B1F",
        fontSize:16,
        fontFamily: "AnekLatin-Regular",
        paddingLeft:15,
        width:wp('90%'),
        textAlign:'auto',
        padding:15,
        alignSelf:'center',
        textAlignVertical: 'top',
        borderRadius:4,
        borderColor:'rgba(118, 118, 128, 1)',
        borderWidth:0,
        justifyContent:'flex-start'
    },
    photoCover:{
        width: 100,
        height: 100,
        alignSelf:'center',
        borderRadius:100,
        zIndex:900,
        position:'absolute',
        resizeMode:'cover'
    },
    uploadedContainer:{
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignSelf:'center',
        position:'absolute',
        right:wp('5%'),
        top:hp('66%'),
        flexDirection:'row',
        justifyContent:'center',
        zIndex:9000, 
    },
    postCircle:{
        width:55,
        height:55,
        borderRadius:100,
        backgroundColor:'#99cb01',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginTop:-8
    },


})