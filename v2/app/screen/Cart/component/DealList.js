import React from "react";
import { View, Text, TouchableOpacity, Image, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FIcon from "react-native-vector-icons/Feather";

import styles from '../style';
import URL from "@Helper2/constant";
import { commafy } from "@Helper2/func";

const DealItem = ({ item, RemoveItemFromCart, removeList, removeFromRemoveList, selectedItems, }) => {

    return (
        <View style={styles.listMainView}>
            <View style={styles.listOuterContainer}>
                <View style={styles.listView}>
                    <View style={styles.listImgView}>
                        <Image source={{ uri: `${item.product?.product_images[0]?.url}` }} style={styles.listImg} />
                        <Text numberOfLines={2} style={styles.listTitle}>{item.product?.name}</Text>
                    </View>
                    {removeList.includes(item.id) ?

                        <TouchableOpacity onPress={() => removeFromRemoveList(item.id)} style={styles.listChecbox}>
                            <Icon name="check" size={16} color="#5A5D72" />
                        </TouchableOpacity>
                        :

                        <TouchableOpacity onPress={() => selectedItems(item.id)} style={styles.listChecbox} />
                    }
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
