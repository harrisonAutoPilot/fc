import React from "react";
import { View, Text, TouchableOpacity, Image, } from "react-native";
import FIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../style';
import { commafy } from "@Helper2/func";

const OutOfStockItem = ({ item, RemoveItemFromCart, name, removeList, removeFromRemoveList, selectedItems }) => {

    return (
        <View style={styles.listMainView}>
            <View style={styles.listOuterContainer}>
                <View style={styles.listOutOfView}>
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
                    <View style={styles.listOutOfStockQtyView}>
                        <Text style={styles.listOutOfStockQty}>{name}</Text>
                    </View>

                    <Text style={styles.listOutOfStockPrice}>₦{commafy(item?.total_amount)}</Text>
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

export default OutOfStockItem
