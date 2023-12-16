import React from "react";
import { View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


import style from "./bottomSheetStyle";



export default RenderItem = ({ item, address, codeValue, deliveryOption }) => {

    const setDeliveryItem = (item) => {


        address(item);

        deliveryOption(item.state_id);

    };



    return <Pressable
        style={({ pressed }) => [
            {
                backgroundColor: pressed,
            },
            style.renderItemContainer
        ]}
        onPress={() => setDeliveryItem(item)}>


        <View style={style.renderItemImgContainer}>
            {codeValue == item.id ?
         
             <Icon
             name="radio-button-on"
             size={20}
             color="rgba(51, 83, 203, 1)"
             style={style.renderItemImg} />
             :

            <Icon
                name="radio-button-unchecked"
                size={20}
                color="rgba(90, 93, 114, 1)"
                style={style.renderItemImg} />
            }

            <View style={style.renderItemNameView}>
                <Text style={[style.renderItemTitle, {color: codeValue == item.id ? "rgba(51, 83, 203, 1)": "rgba(27, 27, 31, 1)"}]}>{item.name}</Text>
                <Text style={style.renderItemTitleAddress}>{item.address}</Text>
                <Text style={style.renderItemTitleAddress}>{item.user.phone}</Text>
            </View>
        </View>



    </Pressable>

}