import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    alignSelf: 'center',

  },
  safeAreaStyle:{
    flex:1,
    backgroundColor:'rgba(221, 225, 255, 3)'
  },

  check:{
// paddingTop:Platform.OS === 'ios' ? 30 : 10 , 
  },
  mainContainer: {
  //  height:"90%",
    width: wp('100%'),
    alignSelf: 'center',
 
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    alignSelf: 'center',
    marginVertical:10,
  },
  leftNav: {
    width: wp('75%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightNav: {
    width: wp('23%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    paddingRight: 20,
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
  },
  greetingText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(44, 47, 66, 1)',
    letterSpacing: 0.2,
  },
  nameText: {
    fontSize: 22,
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
  middleContainer: {
    width: wp('100%'),
    height:"100%",
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  innerCard: {
    width: '47%',
    height: hp('30%'),
    borderRadius: 10,
    backgroundColor: '#5C6BC0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
  innerCardTwo: {
    width: '47%',
    height: hp('30%'),
    borderRadius: 10,
    backgroundColor: '#1f934e',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
  innerCardThree: {
    width: '47%',
    height: hp('30%'),
    borderRadius: 10,
    backgroundColor: 'rgba(249, 138, 75, 1)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
  innerCardFour: {
    width: '47%',
    height: hp('30%'),
    borderRadius: 10,
    backgroundColor: '#ff6666',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
  },
  waveImg:{
    width: wp('41%'),
    height: hp('30%'),
    resizeMode: 'cover',
    position: 'absolute',
    alignSelf:'center',
    top:3,
  },
  waveImg1: {
    width: '100%',
    height: hp('30%'),
    position: 'absolute',
    resizeMode: 'contain',
    right: 3,
    top: 35,
  },

  smIconImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 10,
  },
  smcon:{
    width: 25,
    height: 25,
    marginTop: 10, 
  },
  smEye: {
    marginRight:10
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberText: {
    fontSize: 32,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 40,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  captionText: {
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  cardBottom:{
    width:wp('90%'),
    borderRadius:10,
    backgroundColor:"#FFFFFF"
  },
  bottomCardInner:{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    borderBottomWidth:1,
    paddingHorizontal:20,
    paddingVertical:15,
    borderBottomColor:"#f5f5f5"
  },
  bottomCardLeft:{
    width:wp('68%'),
  },
  barImg:{
    width:45,
    height:45,
    resizeMode:'contain',
    marginRight:10,
  },
  barText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    color: 'rgba(66, 70, 89, 1)',
    letterSpacing: 0.1,

  },
  bottomView:{
    flexDirection:'row',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    paddingVertical:10,

  },
  bottomViewText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#3353CB',
    letterSpacing: 0.1, 
  },
  toggleCover:{
    width:wp('92%'),
    height:45,
    paddingHorizontal:18,
    backgroundColor:"rgba(0, 0, 0, 0.05)",
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  toggleInner:{
  width:wp('75%'),
  },
  toggleText:{
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight:20,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.1,
  },
  toggleTextOff:{
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    color: '#bfbfbf',
    letterSpacing: 0.1,
  },
    // this is for the toast
    toastCover: {
      // position: 'absolute',
      bottom:Platform.OS === "android" ? hp('4%') : hp('3%'),
      alignSelf: 'center',
      width: wp('100%'),
      zIndex: 9000,
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
  //this is for the checkin
  checkInContainer: {
    width: wp('100%'),
    alignSelf: 'center',
    backgroundColor: 'rgba(110, 191, 12, 1)',
    paddingVertical: 12,
     paddingTop:Platform.OS === 'ios' ? 40 : 10,
    
  },
  checkInCover: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop:10,
    alignSelf: 'center',
    backgroundColor: 'rgba(110, 191, 12, 1)',
  
  },
  backImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  checkInner: {
    width: wp('40%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  checkInText:{
    color: 'rgba(254, 251, 255, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    marginLeft:10
  },
});

export default styles;
