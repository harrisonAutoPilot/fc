import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "../style";


const ListEmptyCart = () => {
    return (
        <View style={styles.emptyResultContainer}>

            <View style={styles.emptyResultSearchIconContainer}>
                <Icon name="search-off" size={30} color="rgba(118, 118, 128, 1)" />
            </View>

            <Text style={styles.emptyResultHeader}>No result found</Text>
            <Text style={styles.emptyResultText}>Unable to find product? Go back to cart.</Text>

        </View>
    )
};

export default ListEmptyCart