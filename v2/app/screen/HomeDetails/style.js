import {StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({

container:{
  width:'100%',
  height:"100%",
  backgroundColor:'#fff'

},
videoCard:{
  width:'100%',
  height:hp('80%'),
  borderBottomColor:'gold',
  borderBottomWidth:2,
},
  modalTitle: {
    fontSize: 20,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  imageCard: {
    width:"100%",
    flex:1,
    alignSelf:'center',

  },
  infoCover:{
    width: "70%",
    // height:55,
    backgroundColor:'rgba(0,0,0,0.5)',
    borderRadius:0,
   paddingVertical:15,
    alignSelf:'center',
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    alignItems:'center',
    position:'absolute',
    left:0,
    top:hp('65%'),
  },
  userImgCover:{
    width:42,
    height:42,
    borderRadius:100,
 
  },
  posterImg: {
    width: 44,
    height: 44,
    borderRadius: 100,


  },
  feedContent: {
    position: 'absolute',
    flexDirection: 'column',
    width: '60%',
    left: '3%',
    bottom: 95,
  },
  activityIndicator:{
    width:50,
    height:50,
    color:'red'
  },
  indicatorCover:{
    width:30,
    height:30,
    borderRadius:100,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignSelf:'center',
    position:'absolute',
    bottom:30,
    right:10,
    flexDirection:'row',
    justifyContent:'center',
    zIndex:9000,
  },
  loadImg: {
    width: 12,
    height: 12,
    alignSelf:'center',
    zIndex:900,
    position:'absolute',
    resizeMode:'contain'
    // marginTop:25
    
  },
  speakerImg:{
    width: 18,
    height: 18,
    // position:'absolute',
    alignSelf:'center',
    zIndex:900,
  },
  shareImg:{
    width: 20,
    height: 20,
    alignSelf:'center',
    zIndex:900,
  },
  soundCover:{
    width:35,
    height:35,
    flexDirection:'row',
    borderRadius:100,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignSelf:'flex-end',
    zIndex:9000, 
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:50,
    right:10
  },
  loveCover:{
    flexDirection:'row',
    borderRadius:100,
    alignSelf:'flex-end',
    zIndex:9000, 
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:280,
    right:10
  },
  shareCover:{
    flexDirection:'row',
    borderRadius:100,
    alignSelf:'center',
    zIndex:9000, 
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:190,
    right:10
  },

  commentCover:{
    borderRadius:100,
    alignSelf:'flex-end',
    zIndex:9000, 
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:221,
    right:10
  },
  loveCount:{
    color: '#fff',
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    marginTop:-1,
    marginRight:5,
    textAlign:'center'

  },
  replayCover:{
  alignSelf:'center',
  justifyContent:'center',
  zIndex:9000,
  width:100,
  position:'absolute',
  top:'40%'

  },
  appLogoSm:{
    width: 55,
    height: 55,
    backgroundColor:'#fff',
    borderRadius:100,
    alignSelf:'center',
    zIndex:900,
  },
  replayBtn:{
paddingHorizontal:10,
paddingVertical:3,
borderWidth:1,
borderColor:"#fff",
borderRadius:2,
marginTop:7,
  },
  replayText:{
    color: '#fff',
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    textAlign:'center'
  },
  apointCover:{
    borderRadius:100,
    alignSelf:'flex-end',
    zIndex:9000, 
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:150,
    right:10  
  },
  walkImg:{
    width:25,
    height:25
  },
  followCount:{
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    textAlign:'center'
  },
  titleWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  titleWord:{
    color: '#fff',
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    textAlign:'left'
    
  },
  descWord:{
    color: '#fff',
    fontSize: 10,
    fontFamily: "AnekLatin-Regular",
    textAlign:'left'
  },
  posterCover:{
    marginLeft:14,
    alignItems:'flex-start',

  },
  dateWord:{
    color: '#fff',
    fontSize: 8,
    fontFamily: "AnekLatin-Regular",
    textAlign:'left'
  },
  veirifyCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  verifyImg:{
    width:12,
    height:12,
    resizeMode:'contain',
    marginLeft:5,
    marginTop:2
  },
  previewContainer:{
    width:wp('86%'),
    // height:100,
    borderRadius:6,
    backgroundColor: 'rgba(12, 52, 52, 0.7)',
    position:'absolute',
    alignSelf:'flex-start',
    marginLeft:5,
    bottom:40,
    padding:10,
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  descText:{
    color: '#fff',
    fontSize: 16,
    fontFamily: "AnekLatin-Medium",
    textAlign:'left',
    width:wp('76%'),
  },
  moreCover:{
    width:70,
    height:20,
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    right:30,
    bottom:-3
  
  },
  readmore:{
    color: '#00b300',
    fontSize: 15,
    fontFamily: "AnekLatin-Medium",
    textTransform:'lowercase',
    marginBottom:1,

  },
  previewInner:{
    // flexDirection:'row',
    justifyContent:'space-between'
  },
  leftWrapper:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  followCover:{
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:12,
    borderRadius:4,
    borderWidth:1,
    borderColor:'#fff',
    marginRight:10
  },
  followText:{
    color: '#fff',
    fontSize: 10,
    fontFamily: "AnekLatin-Regular",
    textTransform:'capitalize',

  },
  categoryCover:{
    width:32,
    height:32,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(12, 52, 52, 0.8)',
    position:'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    top:50,
    right:10  

  },
  categoryText:{
    color: '#99cb01',
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    textTransform:'capitalize',
  },
  descCover:{
    padding:10,
    paddingVertical:10,
  },
  postText:{
    color: '#454545',
    fontSize: 14,
    fontFamily: "Playfair-Regular",
    lineHeight:20,
    textAlign:'left',
  },
  bottomContainer:{
    width:"100%",
    paddingVertical:10,
    paddingHorizontal:10,

  },
  listCard:{
    width:"99%",
    alignSelf:'center',
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:4,
  },
  videoSmCard:{
    width:'35%',
    height:80,
    borderRadius:4,
    elevation:2,
    shadowColor: '#fff'
 
  },
  cardContent:{
    width:'64%',
    height:80,
    borderRadius:4,
    padding:5,
    paddingTop:2,
    backgroundColor:'#fff'
  },
  smDesc:{
    color: '#454545',
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight:16,
    textAlign:'left',
  },
  bottomMenu:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:5
  },
  smFlex:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:10
  },
  countText:{
    color: '#454545',
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    marginLeft:5
  },
  titleContainer:{
    paddingHorizontal:10,
    paddingVertical:5
  },
  headerText:{
    color: '#000',
    fontSize: 16,
    fontFamily: "AnekLatin-Medium",
    lineHeight:22,
    textAlign:'left',
  },
  smImageCard:{
    width:'100%',
    height:80,
    borderRadius:4,
  },
  smVideoCard:{
    width: "100%",
     height: "100%", 
     borderRadius: 4,
    alignItems:'center',
    justifyContent:'center'
  },
  miniPlay:{
    width:32,
    height:32,
    borderRadius:100,
   alignItems:'center',
   justifyContent:'center',
   flexDirection:'row',
   borderWidth:1,
   borderColor:'#fff',
   position:'absolute',
   top:20,
   right:50

  },
  backCover:{
    position:'absolute',
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    height:30,
    width:30,
    left:25,
    top:20,
    backgroundColor:'rgba(52,52, 52, 0.8)'
  }
  
});

export default styles