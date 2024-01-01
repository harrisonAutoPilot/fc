import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl, } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from '../style';
import { getKessington } from '@Request2/Kessington';
import { cleanupKessingtonStatus } from "@Store2/Kessington";
import CatelogueCardPlaceholder from "../../SupportGroup/CatelogueCardPlaceholder"
import Icon from 'react-native-vector-icons/Feather';
import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
} from '@Component/index';


export default Kessington = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);


    const { kessingtonStatus, kessingtons, kessingtonItems } = useSelector(
        state => state.kessington,
    );



    useEffect(() => {

        if (kessingtonStatus !== "success" && kessingtonStatus !== "pending") {

            dispatch(getKessington());

        }

    }, []);



    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshNewKProducts = useCallback(() => {

        setRefreshing(true);

        dispatch(getKessington());

        wait(3000).then(() => setRefreshing(false));

    }, []);


    const getItem = (item) => {

        props.openSheet(item);

    }



    const ListItem = ({ item }) => (
        <TouchableOpacity style={styles.squareCard} onPress={() => getItem(item)}>
          
        <View style={styles.squareImgCover}>
              <Image source={{ uri: `${item?.product_images[0]?.url}` }} style={styles.squareImg}  /> 
         </View>
      <View style={styles.descCover}>
          <Text style={styles.cardDesc} numberOfLines={2}>{item?.name}</Text>
          <Text style={styles.amountText}>&#8358;{commafy(item?.price_per_pack)}</Text>
      </View>
      </TouchableOpacity>

    )




    return (
        (kessingtonStatus === "pending" || kessingtonStatus === "idle") ?

            <CatelogueCardPlaceholder />
            :

            <FlatList
                columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-between'}}
                showsVerticalScrollIndicator={false}
                numColumns = {2}
                vertical
                data={kessingtonItems}
                keyExtractor={item => item.id}
                renderItem={ListItem}
                ListEmptyComponent={<EmptyCategory />}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshNewKProducts} />
                }
            />
    )
};
