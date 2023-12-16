import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: hp('100%'),
    flex:1,
    width: Dimensions.get('window').width,
  },
  container: {
    paddingHorizontal: 20,
  },
  safeAreaStyle:{
    flex:1,
    backgroundColor:'#fff'
  },

  topTitle: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  topTitleText: {
    color: 'rgba(66, 70, 89, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    letterSpacing: 0.25,
  },

  dropDownCover: {
    width: wp('90%'),
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 40,
    padding: 14,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dropLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
  },
  dropText: {
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 24,
    letterSpacing: 0.25,
    marginLeft: 10,
  },
  cardsContainer: {
    width: wp('90%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(242, 240, 244, 1)',
    marginTop: 20,
  },
  smCard: {
    width: wp('22%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'rgba(242, 240, 244, 1)',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 10,
  },

  smImgCover: {
    width: 30,
    height: 30,
    borderRadius: 60,
    zIndex: 9000,
    elevation: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smTextCover: {
    paddingHorizontal: 10,
  },
  smCardTitle: {
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 11,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    letterSpacing: 0.25,
  },
  smCardCount: {
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  statisticCover: {
    width: '100%',
    marginBottom: 10,
  },
  statisticCaption: {
    color: 'rgba(66, 70, 89, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 24,
    letterSpacing: 0.25,
  },
  statisticSmCaption: {
    color: 'rgba(167, 170, 193, 1)',
    fontSize: 11,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 16,
    letterSpacing: 0.25,
  },
  chartContainer: {
    width: wp('90%'),
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'center'
  },
  callTitleCover: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  callManagerCaption: {
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    letterSpacing: 0.25,
  },
  mdCard:{
    width:wp('38%'),
    height:hp('28%'),
    backgroundColor:'rgba(242, 240, 244, 1)',
    borderRadius:10,
    alignItems:'flex-start',
    justifyContent:'center',
    padding:20,
  },
  mdMiniText:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 12,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 16,
    letterSpacing: 0.25,
  },
  mdTitle:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    letterSpacing: 0.25,    
  },
  circleImg:{
    width:20,
    height:20,
    resizeMode:'contain',
  },
  mdCircle:{
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:80,
    backgroundColor:"rgba(66, 165, 245, 1)"
  },
  mdCircleNew:{
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:80,
    backgroundColor:"rgba(92, 107, 192, 1)"
  },
  
  mdContentCover:{
    paddingVertical:10,
    marginBottom:30
  },

  // the contact style
  contactCard:{
    width:wp('100%'),
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:5,
    paddingHorizontal:10,
    alignSelf:'center'
  },
  contactLeft:{
    width:wp('40%'),
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    alignSelf:'flex-start',
    paddingVertical:5,
    paddingHorizontal:10
  },
  contactRight:{
    width:wp('30%'),
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:5,
    alignSelf:'center'
  },
  letterCover:{
    width:45,
    height:45,
    borderRadius:80,
    backgroundColor:"rgba(120, 144, 156, 1)",
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,

  },
  letterCoverBig:{
    width:45,
    height:45,
    borderRadius:80,
    backgroundColor:"rgba(120, 144, 156, 1)",
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
  },
  letter:{
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    letterSpacing: 0.25, 
    textTransform:'uppercase'
  },
  contactName:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    letterSpacing: 0.25, 
  },
  contactNumber:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 12,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    letterSpacing: 0.25, 
    marginLeft:5
  },
  // this is for the placeholder loader
  letterCoverP:{
    width:40,
    height:40,
    borderRadius:80,
    backgroundColor:'#e6e6e6',
    marginRight:10,
  },
  // mdLine:{
  //   width:70,
  //   height:15,
  //   borderRadius:10,
  //   backgroundColor:'#e6e6e6',
  //   marginBottom:10,
  // },
  smLine:{
    width:120,
    height:10,
    borderRadius:10,
    backgroundColor:'#e6e6e6'
  },
  smCirleP:{
    width:20,
    height:20,
    borderRadius:40,
    backgroundColor:'#e6e6e6'
  },
  downCover:{
   alignItems:'flex-start',
   width:wp('46%'),
 

  },
  downFlex:{
    flexDirection:'row',
    justifyContent:'center'
  },
  miniContact:{
    width:18,
    height:18,
    backgroundColor:'rgba(69, 90, 100, 1)',
    borderRadius:40,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    top:-2,
    right:-1,
    zIndex:900,
  },
  smDuration:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 11,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    letterSpacing: 0.25, 
    
  },
  smDate:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 11,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    letterSpacing: 0.25, 
  },
  loaderCover:{
    borderRadius:6,
    alignSelf:'center',
    alignItems:'center',
    padding:20,
    justifyContent:'center',
    backgroundColor:'#fff',
    elevation:1,
    marginBottom:10,
    marginLeft:30,
  },
  middleStyle:{
    width:wp('100%'),
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  nameCover:{
    width:80,
    height:80,
    backgroundColor:"rgba(120, 144, 156, 1)",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    marginTop:20
  },
  nameText:{
    color: '#fff',
    fontSize: 24,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 32,
    letterSpacing: 0.25, 
  },
  nameFull:{
    width:wp('100%'),
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  nameTextTitle:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    letterSpacing: 0.25, 
  },
  midCover:{
    width:wp('90%'),
    padding:10,
    marginTop:20,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopColor:"#f5f5f5",
    borderTopWidth:1,
  },
  historyLeft:{
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center'
  },
  roundCover:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:"rgba(121, 116, 126, 0.08)",
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  callType:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    letterSpacing: 0.25, 
    textTransform:'capitalize'
  },
  mdLine:{
    width:wp('100%'),
    backgroundColor:'#f5f5f5',
    height:7,
    alignSelf:'center'
  },
  addCover:{
padding:20,
paddingHorizontal:10,
  },
  addText:{
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    letterSpacing: 0.25, 
  },
  addDesc:{
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 12,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 16,
    letterSpacing: 0.25, 
  },
  inputContainer:{
    width:wp('85%'),
    height:180,
    borderWidth:1,
    borderColor:"#bfbfbf",
    borderRadius:4,
    alignSelf:'center'
  },
  input:{
    padding:20,
  },
  btnCover:{
    marginTop:50
  }
});

export default styles;
