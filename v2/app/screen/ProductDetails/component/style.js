import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    imgContainer:{
        marginHorizontal: 70,
        paddingBottom: 16
    },
    dealLogoContainer:{
        height: 160,
        flexDirection: "row",
        overflow: "hidden",
    },
    imgMainView:{

        width: 141, 
        alignSelf: "flex-end", 
        height: 110, 
        marginLeft: "-20%"

    },
    img:{
        width: 141,
        height: 110,

    },
    dealLogo:{
        backgroundColor:"#DE3730",
        transform:[{rotateZ: '310deg'}],
        alignSelf: "flex-start",
        paddingRight:80,
        marginLeft: "-15%",
        paddingVertical: 5,
        paddingLeft: 40,

    },
    noDealLogo:{
        transform:[{rotateZ: '310deg'}],
        alignSelf: "flex-start",
        paddingRight:80,
        marginLeft: "-15%",
        paddingVertical: 5,
        paddingLeft: 40,

    },
    dealLogoText:{
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    paginatorContainer:{
        flexDirection: "row",
        // justifyContent: "space-evenly",
        // width:51,
        marginTop: 30,
        alignSelf: "center",
        paddingBottom: 16,
      
    },
    paginatorDot:{
        height: 7,
        backgroundColor: "red",
        borderRadius: 10,
        marginLeft: 4,
        
    },
   
})