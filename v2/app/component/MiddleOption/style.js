import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({

  padImg: {
    width: 80,
    height: 80,
    marginTop: -80,
    marginBottom:20,
    borderRadius:100,
   
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Playfair-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  outsideModal:{
    top:hp('36%'),


  },
  body5: {
    // backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical:10,

  },
  circleCover:{
    width:35,
    height:35,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,

  },
  closeCover:{
    width:55,
    height:55,
    position:'absolute',
    bottom:hp('-11%'),
    alignSelf:'center',
  zIndex:9000,
  borderRadius:100,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"rgba(255, 218, 214, 1)",
  marginTop:1,
  },
  flexBox:{
    flexDirection:'column-reverse',
    justifyContent:'flex-start'
  },
  circleCoverSm:{
    width:35,
    height:35,
    borderRadius:100,
    // backgroundColor:"rgba(217, 217, 217, 1)",
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  cardCover:{
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center',
  paddingHorizontal:3,
  alignSelf:'flex-start',
  paddingVertical:3,
  backgroundColor:'#f5f5f5',
  borderRadius:30,
  width:'50%',
     bottom:-30,
    position:'absolute',
    right:-8,
  borderWidth:1,
  borderColor:'#f5f5f5',
  elevation:2,
  shadowColor:'#fff'


  },
  cardCoverSm:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingHorizontal:3,
    paddingVertical:3,
    alignSelf:'flex-end',
    backgroundColor:'#f5f5f5',
    borderRadius:30,
    width:'50%',
     bottom:hp('4%'),
    position:'absolute',
    right:-8,
    // marginRight:90,
    borderWidth:1,
    borderColor:'#f5f5f5',
    elevation:2,
    shadowColor:'#fff'

  
    },
  cardText:{
    color:"rgba(27, 27, 31, 1)",
    fontSize: 16,
    fontFamily: "Playfair-Regular",
    lineHeight: 24,
  },
  sgImg:{
    width:35,
    height:35,
    borderRadius:100,
  },
  cardTextSm:{
    color:"rgba(27, 27, 31, 1)",
    fontSize: 12,
    fontFamily: "Playfair-Regular",
    lineHeight: 24,
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 16,
    color: '#B48F40',
    marginTop: 10,
    fontFamily: "Playfair-Regular",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
    fontWeight:"600",
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 14,
    marginRight: 20,
    color: '#424242',
    marginTop: 10,
    fontFamily: "Playfair-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  
});

export default styles