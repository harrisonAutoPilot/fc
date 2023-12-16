import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    width: wp('100%'),
    alignSelf: 'center',
    position: 'absolute',
    top: Platform.OS === 'android' ? hp('15%') : hp('17%'),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100%'),
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignSelf: 'center',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
  storeCaption: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.1,
  },
  leftCover: {
    marginLeft: 15,
    width: '80%',
  },
  storeCaptionText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.1,
  },
  checkText: {
    fontSize: 18,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.1,
    marginLeft: 15,
    marginTop: -3,
  },
  logoutCover: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFE1F9',
    borderRadius: 80,
  },
  logoutImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  topInner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  xCover: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  xImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  captionCover: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: 15,
  },
  captionText: {
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: '#1B1B1F',
    letterSpacing: 0.1,
  },
  captionTextSm: {
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 24,
    color: '#5A5D72',
    letterSpacing: 0.1,
    marginTop: 10,
  },
  optionCover: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  confirmCover: {
    width: '95%',
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: 'rgba(186, 26, 26, 1)',
    alignItems: 'center',
    alignSelf:'center',
  },
  cancelCover: {},
  cancelText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#3353CB',
    letterSpacing: 0.1,
  },
  confirmText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#fff',
    letterSpacing: 0.1,
    marginRight: 10,
  },
  cancelBtn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3353CB',
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
  }
});

export default styles;
