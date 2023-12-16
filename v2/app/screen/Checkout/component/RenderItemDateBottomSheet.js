import React from "react";
import { View, Text, Pressable } from "react-native";


import style from "./bottomSheetStyle";



export default RenderItem = ({ item, deliveryDate, codeValue}) => {

    const setDeliveryItem = (item) => {

        deliveryDate(item);

    };


    return <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'rgba(223, 225, 249, 0.3)': "#fff",
            },
            style.renderItemContainer
        ]}
        
        onPress={() => setDeliveryItem(item)}>


        <View style={style.renderItemImgContainer}>

            <View style={style.renderItemNameView}>
                <Text style={[style.renderItemDateTitle, {color: codeValue == item.id ? "rgba(51, 83, 203, 1)": "rgba(27, 27, 31, 1)"}]}>{item?.date}</Text>
            </View>
        </View>



    </Pressable>

}