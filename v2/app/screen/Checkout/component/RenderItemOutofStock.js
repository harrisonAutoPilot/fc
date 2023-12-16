import React from "react";
import { View, Text } from "react-native";


import style from "./bottomSheetStyle";
import { commafy } from "@Helper2/func";


export default RenderItemOutofStock = ({ item }) => {
    console.log(item, "call")
    return <View style={style.renderItemOutofStockContainer}>
           
             <View style={style.renderItemNameViewOutofStock}>
                <Text style={style.renderItemTitleAddress}>{item.product.name} ({item.quantity})</Text>
                <Text style={style.renderItemTitleAddress}>{item.product.pack_style}</Text>
            </View> 

            <Text style={style.renderItemAmount}>₦{commafy(item.total_amount)}</Text>

        </View>


}