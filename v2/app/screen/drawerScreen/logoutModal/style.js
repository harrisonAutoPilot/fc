import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 19,
    paddingHorizontal:16,
    width: wp('95%'),
    alignSelf: 'center',
     position:"absolute",
    top:Platform.OS === "android" ? hp("18%") : hp("12%")
  },
logoutCover:{
width:50,
height:50,
alignItems:"center",
justifyContent:"center",
backgroundColor:"#DFE1F9",
borderRadius:80,

},
logoutImg:{
  width:50,
  height:50,
  borderRadius:100,
  resizeMode:"contain"

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
    fontSize: 20,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: '#1B1B1F',
    letterSpacing: 0.1,
  },
  captionTextSm: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 24,
    color: '#5A5D72',
    letterSpacing: 0.1,
    marginTop: 10,
  },
  optionCover:{
    width:"95%",
    flexDirection:"row",
    justifyContent:'space-between',
    alignSelf:"center",
    marginTop:30,
  },
  confirmCover:{
    paddingHorizontal:50,
    paddingVertical:10,
    borderRadius:30,
   backgroundColor:"#99cb01"
  },
  cancelCover:{

  },
  cancelText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#99cb01',
    letterSpacing: 0.1,
  },
  confirmText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: '#fff',
    letterSpacing: 0.1,
  
  },
  cancelBtn:{
    paddingHorizontal:50,
    paddingVertical:10,
    borderRadius:30,
    borderWidth:1,
    borderColor:"#99cb01"
  },
 
});

export default styles;
