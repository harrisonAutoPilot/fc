import { Platform,Dimensions, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    mainBody: {
        paddingTop: 1,
        backgroundColor:'rgba(221, 225, 255, 1)',
        height: "100%",
        flex: 1
    },
    main:{
        height: hp('100%'),
        flexGrow: 1
    },
    safeAreaStyle:{
        flex:1,
        backgroundColor:'rgba(221, 225, 255, 3)'
      },
// started the new design
topNav: {
    width:wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: 'center',
    backgroundColor:'rgba(221, 225, 255, 1)'
  },
  leftNav: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightNav: {
    width: wp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'flex-start',

    // paddingRight: 20,
  },
  profileImgCover: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 100,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  greetingText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(44, 47, 66, 1)',
    letterSpacing: 0.2,
  },
  nameText: {
    fontSize: 18,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
  greetCover: {
    width: wp('60%'),
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  userImg: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  verImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 30,
    position: 'absolute',
    right: -7,
    top: 2,
  },
  sunImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 5,
  },
  greetingInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteDot: {
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#00b300',
    position: 'absolute',
    top: -2,
    right: -1,
  },
  countCover: {
    width: 15,
    height: 15,
    borderRadius: 40,
    backgroundColor: '#BA1A1A',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -8,
    right: -3,
  },
  countText: {
    fontSize: 8,
    fontFamily: 'AnekLatin-Regular',
    color: '#fff',
    letterSpacing: 0.2,
  },
  topSelect:{
    width:wp('100%'),
    paddingHorizontal:20,
  },


    placeholderCover:{
        flexDirection:'row',
        lexWrap: 'wrap',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center'     
    },
    listContainer: {
        width: wp('50%'),
        borderWidth: 0.7,
        borderColor: '#f2f3f4',
    },
    listContainer2: {
        width: wp('95%'),
        marginTop: 15,
        borderRadius: 16,
        // backgroundColor: '#F5F5F5',
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    listContainerP: {
        width: wp('49.5%'),
        marginTop: 0,
        borderRightWidth:1,
        borderRightColor:'#fff',
        backgroundColor: '#f5f5f5',
    },
    column: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listContainerImageView: {
        height: 115,
        marginBottom: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    listContainerImageViewP: {
        height: 115,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#f2f2f2',

    },
    listContainerTextView: {
        height: 50,
        marginBottom: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      
    },
    listContainerTextViewP: {
        height: 50,
        marginBottom: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#f2f2f2',
    },
    listContainerInnerTextView: {
      width: "85%",
     alignItems:'center'
    },
    listContainerInnerTextViewP: {
        width: "95%",
        marginRight: 10,
        backgroundColor:'#ebebeb',
        height:20,
        borderRadius:2,
      },
    image: {
        width: 100,
        height: 100,
        borderRadius: 4,
        resizeMode: 'contain',
    },
    imageP: {
        width: 100,
        height: 100,
        borderRadius: 6,
        resizeMode: 'contain',
        backgroundColor:'#ebebeb',
        marginTop:10,
    },
    title: {
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 24,
        color: "rgba(90, 93, 114, 1)",
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    elevation: {
        elevation: 0.6,
        shadowColor: '#52006A',
    },
    bookcardFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginVertical: 10,
        marginBottom: 10
    },
    blueColor: {
        backgroundColor: 'rgba(221, 225, 255, 1)',
        padding:2,
    },
    searchIcon: {
        paddingHorizontal: 10,
        color: 'rgba(118, 118, 128, 1)',
    },
    inputField: {
        width: wp('92%'),
        color: 'rgba(118, 118, 128, 1)',
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        height:Platform.OS === "android" ? 45 : 20,
        letterSpacing: 0.25,
        paddingBottom:Platform.OS === "android" ? 11 : 5,

    },
    staticCard:{
        width:wp('95%'),
        height:150,
        borderRadius:8,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
    },
    staticImg:{
        width:80,
        height:80,
        borderRadius:100,
    },
    imgCover:{
        width:80,
        height:80,
        borderRadius:100,
        backgroundColor:"#bfbfbf",
        marginTop:5,
        
    },
    cardImg:{
        width:wp('94%'),
        borderRadius:6,
        height:160,
    },
    downCover:{
        width:200,
        borderRadius:30,
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderTopColor:'#fff',
        padding:10,
        alignItems:'center',
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    allProductText:{
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        color: "#757575",
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    // this is for the select pricing
    inputHolder2: {
        borderWidth: 0,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 16 : 12,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom:10,
        borderRadius: 5
    },
    changePriceCover:{
flexDirection:'row',
justifyContent:'center'
    },
    changePriceText:{
        fontSize: 10,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 14,
        color: "#000",
        letterSpacing: 0.1,
        textTransform: "uppercase"
    },
    inputMainHolder: {

        backgroundColor: '#ffffff',
        height: hp('100%'),
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5
    },
    labelView1: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 10,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 14,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.2,
    },
    innerLabel: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 5,
        width: "70%"
    },
    selectCover:{
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:8,
    },
    selectOption:{
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        color: "#424242",
        letterSpacing: 0.2,
        fontWeight: "600",
        textTransform:'uppercase'
    },
    flexCover:{
        width:wp('100%'),
       flexDirection:'row',
       justifyContent:'center',
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
    // this is the scroll tab  at the top
    miniHeader: {
        flexDirection: "row",
        paddingLeft:10,
        marginTop:-10,
        
    //    paddingVertical:5,
    },
    miniCard:{
        paddingHorizontal:20,
        paddingVertical:4,
        borderRadius:30,
        backgroundColor:"rgba(51, 83, 203, 1)",
        marginHorizontal:5
         },
         miniCardInactive:{
            paddingHorizontal:20,
            paddingVertical:4,
            borderRadius:30,
            backgroundColor:"#fff",
            borderWidth:0,
            borderColor:"rgba(194, 197, 221, 1)",
            marginHorizontal:5
             },
         miniCardText:{
            color: '#fff',
            fontSize: 12,
            fontFamily: "AnekLatin-Medium",
            lineHeight: 20,
            letterSpacing: 0.1,
            textAlign: "center",
            justifyContent: "center",  
            marginBottom:2,
            marginLeft:30,
         },
         miniCardTextInactive:{
            color: "rgba(66, 70, 89, 1)",
            fontFamily: "AnekLatin-Medium",
            fontSize: 12,
            lineHeight: 20,
            marginBottom:2,
            marginLeft:30,
         },
         typeContainer: {
            width:wp('100%'),
            paddingHorizontal: 16,
            flex: 1,
            alignSelf:'center',
            alignItems:'center'
        },
    scrollFlex:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            height:80,
        },
    capCover:{
        width:50,
        height:50,
       borderRadius:100,
       backgroundColor:"rgba(51, 83, 203, 1)",
       zIndex:900,
       position:'absolute',
       alignItems:'center',
       justifyContent:'center',
       marginTop:-10,
        },
    capCoverInactive:{
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center',
        zIndex:900,
        position:'absolute',
        marginTop:-10,
        },
        capActiveText:{
            color: "#fff",
            fontFamily: "AnekLatin-Medium",
            fontSize: 20,
        },
        capInactiveText:{
            color: "#000",
            fontFamily: "AnekLatin-Medium",
            fontSize: 20,
          
        },
// this is where i start the suggested 
suggestedContainer:{
    width:'100%',
    padding:10,
    paddingHorizontal:15,
   marginTop:-15
},
suggestedCaption:{
    color: "rgba(66, 70, 89, 1)",
    fontFamily: "AnekLatin-SemiBold",
    fontSize: 16,
},
roomCard:{
    width:wp('95%'),
    height:180,
    backgroundColor:'#fff',
    alignSelf:'center',
    borderRadius:6,
    justifyContent:'space-between',
    padding:10,
   marginBottom:10,
},
roomFlexTop:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
    },
roomFlex:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'flex-end'
},
innerFlex:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-end'
},
hostCover:{
    width:40,
    height:40,
    borderRadius:4,
    backgroundColor:'#00b300'
},
hostName:{
    color: "#000",
    fontFamily: "AnekLatin-Regular",
    fontSize: 14,
    marginLeft:5,
    
},
hostTitle:{
    color: "#454545",
    fontFamily: "AnekLatin-Regular",
    fontSize: 12,
    marginLeft:5,
    marginBottom:5
},
hostImg:{
    width:40,
    height:40,
    borderRadius:4,
    resizeMode:'cover'   
},
roomName:{
    color: "#000",
    fontFamily: "Playfair-Regular",
  marginVertical:10,
    fontSize: 18,  
    textTransform:'capitalize'
},
timeCover:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingRight:5
},
timeText:{
    color: "#000",
    fontSize:12,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1, 
    marginLeft:2,      
},
membersContainer:{
    zIndex:900,
    width:115,
    height:30,
    flexDirection:'row',
    position:'absolute',
    alignSelf:'flex-end',
    alignItems:'center',
    
  
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
roomImg:{
    width:60,
    height:60,
    borderRadius:4,
},
memberCover:{
// marginRight:40,
},
memberCount:{
    color: "#000",
    fontSize:14,
    fontFamily: "AnekLatin-Medium",
    letterSpacing: 0.1, 
    marginLeft:5,
}
})