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
        height: '100%',
        // flexGrow: 1
    },
    safeAreaStyle:{
        flex:1,
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
    width: wp('75%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightNav: {
    width: wp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems:'flex-end',

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
        borderWidth:0,
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
        marginTop:20
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
        paddingHorizontal:25,
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
        paddingHorizontal:25,
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
    fontSize: 15,
    lineHeight:20,
    fontFamily: "AnekLatin-Regular",
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
    membersContainer:{
        zIndex:900,
        width:80,
        height:30,
        flexDirection:'row',
        position:'absolute',
        alignSelf:'flex-end',
        alignItems:'center',
        paddingTop:15,
    },
    imgAvarter:{
        width:30,
        height:30,
        borderRadius:100,
        // backgroundColor:'#000'
    },
    imgAvarterB:{
        width:30,
        height:30,
        borderRadius:100,
        // backgroundColor:'blue',
        marginLeft:-8
    },
    imgAvarterC:{
        width:30,
        height:30,
        borderRadius:100,
        // backgroundColor:'yellow',
        marginLeft:-8
    },
    imgAvartar:{
        width:30,
        height:30,
        borderRadius:100,
    },
    supportLogo:{
        zIndex:900,
        width:40,
        height:40,
        flexDirection:'row',
        position:'absolute',
        alignSelf:'flex-start',
        alignItems:'center',
        alignItems:'center',
        paddingTop:1, 
        paddingLeft:10
    },
    logoAvartar:{
        width:40,
        height:40,
    },
    // this is where i start the design for the tabs
    //   this is for the tab bar
subHeader:{
    width:wp('100%'),
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    // paddingHorizontal:20,
    borderBottomWidth:0,
    borderBottomColor:'#f5f5f5',
    // backgroundColor:'#fff',
},
activeSubHeader:{
    width: wp("40%"),
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:'center',
   
},
activeSubHeader2:{
  width: wp("40%"),
  borderBottomWidth: 2,
  borderBottomColor: '#000',
  padding: 10,
  alignSelf:"center",
  alignItems:"center",
  justifyContent:'center',
  zIndex:9000
 
},
inActiveSubHeader:{
    width:wp("40%"),
    borderBottomWidth: 0,
    borderColor: 'transparent',
    padding: 10,
    alignSelf:"center",
    alignItems:"center",
    justifyContent:'center',
    zIndex:9000
},
inActiveSubHeader2:{
  width:wp("30%"),
  borderBottomWidth: 2,
  borderColor: 'transparent',
  padding: 10,
  alignSelf:"center",
  alignItems:"center",
  justifyContent:'center',
},

activeSubHeaderText:{
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: '#000',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    marginLeft:5
},
inActiveSubHeaderText:{
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: '#bfbfbf',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    marginLeft:5
},
tabItemCover:{
    flexDirection:'row'
},
bottomContainer:{
    width:'100%',
    flex:1,
    // backgroundColor:'#fff',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:1,
    zIndex:9,
    marginBottom:1

},
bottomCover:{
width:wp('100%'),
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
flexWrap:'wrap',
},
bottomCardCover:{
     width:'100%',
     flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:1,
    zIndex:90
},
bottomCard:{
    width:wp('33.1%'),
    height:200,
    backgroundColor:'#e6e6e6',
    justifyContent:'space-between',
    borderLeftWidth:0,
    borderTopWidth:0,
    borderWidth:1,
    borderColor:"#f5f5f5",
    zIndex:900,
    alignSelf:'flex-start',
},
bottomCardRed:{
    width:wp('33.1%'),
    padding:10,
    height:200,
    backgroundColor:'#fff',
    justifyContent:'space-between',
    borderLeftWidth:0,
    borderTopWidth:0,
    borderWidth:1,
    borderColor:"#f5f5f5",
    zIndex:900,
    alignSelf:'flex-start',
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
  camImg:{
    width:20,
    height:20,
    resizeMode:'contain'
  },

  middleBottomsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    width:'100%',
    paddingHorizontal:10

  },
  leftBtn:{
    paddingHorizontal:47,
    paddingVertical:5,
    backgroundColor:'rgba(118, 118, 128, 0.35)',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  rightBtn:{
    paddingHorizontal:47,
    paddingVertical:8,
    backgroundColor:'rgba(118, 118, 128, 0.35)',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  innerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    width:'83%',
    paddingHorizontal:10
  },
  rightContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:'17%',
    paddingHorizontal:10
  },
  calendarCover:{

    paddingVertical:5,
    paddingHorizontal:10,
    // backgroundColor:'#bfbfbf',
    borderRadius:4
  },
  smText:{
    fontSize: 12,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 1)',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
    marginTop:-3,
},


})