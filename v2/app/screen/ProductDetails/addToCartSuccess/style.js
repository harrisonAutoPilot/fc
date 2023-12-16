import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
  navHeader:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomColor: "rgba(121, 116, 126, 0.16)",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingBottom: 16
  },
  navHeadetTextView:{
    flexDirection:"row",
    alignItems: "center"
  },
  bottomSheet:{
    paddingBottom: 20
  },
  navHeaderText:{
    fontSize: 18,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.25,
    marginLeft: 10,
    color: "rgba(27, 27, 31, 1)",
    lineHeight: 24
  },
  body:{
    paddingTop: 24,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  bodyImg: {
    width: 130,
    height: 100,
    resizeMode: "contain"
  },
  bodyText:{
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    marginLeft: 10,
    color: "rgba(27, 27, 31, 1)",
    lineHeight: 24,
    width: "60%"
  },
  bodyBtn:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20
  },
  bodyBtnContainer:{
   width: "48.5%"
  },
  bottomSheetScrollView:{
    paddingBottom: 30,
  }


})