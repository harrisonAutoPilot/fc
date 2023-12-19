import {StyleSheet} from "react-native";


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
    fontFamily: "AnekLatin-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  body5: {
    backgroundColor: 'rgba(233, 235, 249, 1)',
    borderRadius: 10,
    paddingTop: 40,
    padding:5,
    paddingBottom:40,
    width:"80%",
    alignSelf:'center'
 
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 20,
    color: '#000',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,

    
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 16,
    marginRight: 22,
    color: '#000',
    marginTop: 10,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    
  },
  categoryCover:{
    width:80,
    height:80,
    borderRadius:100,
    // backgroundColor: 'rgba(233, 235, 249, 1)',
    backgroundColor: '#000',
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    top:-80
  },
  categoryText:{
    fontSize: 36,
    color: '#fff',
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,


    
  }
});

export default styles