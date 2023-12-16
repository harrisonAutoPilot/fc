import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FIcon from "react-native-vector-icons/MaterialCommunityIcons";
  
const Check = (props, id) => {
    const iconName = props.isChecked ?
        "checkbox-blank-outline" : "checkbox-outline";
  
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress} id={id}>
            <FIcon name={iconName}  size={30} color="#5f9a32" />
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};
  
export default Check;
  
const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 150,
       paddingTop:5,
        padding:20,
        marginHorizontal: 5,
        marginTop:-10,
    },
    title: {
        fontSize: 18,
        color: "#5f9a32",
        marginLeft: 5,
        fontWeight: "500",
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2,
    },
});