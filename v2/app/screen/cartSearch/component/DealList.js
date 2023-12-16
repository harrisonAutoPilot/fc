import React from "react";
import { View, Text, TouchableOpacity, Image, } from "react-native";
import FIcon from "react-native-vector-icons/Feather";

import styles from '../style';
import URL from "@Helper2/constant";
import { commafy } from "@Helper2/func";

const DealItem = ({ item, RemoveItemFromCart }) => {

    return (
        <View style={styles.listMainView}>
            <View style={styles.listOuterContainer}>
                <View style={styles.listView}>
                    <View style={styles.listImgView}>
                        <Image source={{ uri: `${item.product?.product_images[0]?.url}` }} style={styles.listImg} />
                        <Text numberOfLines={2} style={styles.listTitle}>{item.product?.name}</Text>
                    </View>
                 
                </View>

                <View style={styles.listView}>
                    <View style={styles.dealImgView}>
                        <View style={styles.listQtyView}>
                            <Text style={styles.listQty}>Qty: {item.quantity} </Text>
                        </View>
                        <View>
                            <Image source={require("@Assets2/image/deal.png")} style={styles.dealImg} />
                        </View>
                    </View>

                    <Text style={styles.listPrice}>₦{commafy(item?.total_amount)}</Text>
                </View>
            </View>

            <View style={styles.listBtm} >
                <TouchableOpacity style={styles.listInnerBtm} onPress={RemoveItemFromCart}>
                    <FIcon name="trash-2" color="rgba(118, 118, 128, 1)" size={14} />
                    <Text style={styles.listRemoveText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default DealItem
