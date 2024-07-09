import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 19,
    paddingHorizontal:16,
    width: wp('78%'),
    alignSelf: 'center',
     position:"absolute",
    top:Platform.OS === "android" ? hp("-32%") : hp("12%")
  },
logoutCover:{
width:150,
height:150,
alignItems:"center",
alignSelf:'center',
justifyContent:"center",
// backgroundColor:"#DFE1F9",
 borderRadius:100,

},
logoutImg:{
  width:150,
  height:150,
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
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: 5,
    paddingHorizontal:5,
  },
  captionMiddle: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal:5,
  },
  captionText: {
    fontSize: 18,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 24,
    color: '#1B1B1F',
    letterSpacing: 0.1,
  },
  captionTextSm: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: '#5A5D72',
    letterSpacing: 0.1,
    textAlign:'left',
    marginTop: 10,
  },
  optionCover:{
    width:"95%",
    flexDirection:"row",
    justifyContent:'center',
    alignSelf:"center",
    marginTop:30,
    marginVertical:10,
  },

  confirmCover:{
    paddingHorizontal:40,
    paddingVertical:8,
    borderRadius:30,
   backgroundColor:"#99cb01",
   alignSelf:'center'
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
    paddingHorizontal:30,
    paddingVertical:5,
    borderRadius:30,
    borderWidth:1,
    borderColor:"#99cb01"
  },
 
});

export default styles;
