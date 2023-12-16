import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../style";
import { ContinueBtn} from "@Component2";

const ListEmptyCart = ({navigate}) => {
    return (
        <View style={styles.emptyCartView}>
            <Image source={require("@Assets2/image/cartEmpty.png")}/>

            <View style={styles.emptyCartTextView}>
                <Text style={styles.emptyCartTitle}>No Item here</Text>
                <Text style={styles.emptyCartSubTitle}>Items added to your cart will appear here</Text>
            </View>

            <View style={styles.emptyCartBtn}> 
                <ContinueBtn 
                title="Shop Now"
                backgroundColor="rgba(51, 83, 203, 1)"
                color="rgba(255, 255, 255, 1)"
                onPress={navigate}
                
                />
            </View>
        </View>
    )
};

export default ListEmptyCart