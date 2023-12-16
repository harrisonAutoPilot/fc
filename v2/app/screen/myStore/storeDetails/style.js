import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topCover: {
    width: '100%',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  headerCover: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop:Platform.OS === 'ios' ? 50 : 10 ,
  },
  headerCoverNew: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor:'#fff',
    paddingTop:Platform.OS === 'ios' ? 15 : 10 ,

  
  },
  backImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    marginTop: -5,
  },
  storeContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    padding: 20,
    paddingVertical: 15,
  },
  titleCover: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 1,
  },
  titleText: {
    color: '#1B1B1F',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
  },
  cardCover: {
    width: '85%',
    alignSelf: 'center',
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: 'rgba(121, 116, 126, 0.16)',
    borderBottomWidth: 1,
  },
  contentCover: {
    width: '70%',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  iconCover: {
    width: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  nameText: {
    color: '#1B1B1F',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
  },
  addressText: {
    color: '#1B1B1F',
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
  },
  photoTitleCover: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 1,
  },
  photoTitleText: {
    color: '#5A5D72',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
  },

  photoContainer: {
    width: wp('100%'),
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  photoCover: {
    width: wp('28%'),
    height: 110,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 5,
    resizeMode: 'cover',
  },
  //this is for the checkin
  checkInContainer: {
    width: wp('100%'),
    alignSelf: 'center',
    backgroundColor: 'rgba(110, 191, 12, 1)',
    paddingTop:Platform.OS === 'ios' ? 40 : 22,
 
    marginBottom:10,
    
  },
  checkInCover: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom:15,
    alignSelf: 'center',
    backgroundColor: 'rgba(110, 191, 12, 1)',
  
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

});
