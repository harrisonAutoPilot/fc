import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl,  } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from '../style';
import {getPopularProducts} from '@Request2/PopularProducts';
import { cleanPopularProducts } from "@Store2/PopularProducts";
import CatelogueCardPlaceholder from "../../SupportGroup/CatelogueCardPlaceholder"
import Icon from 'react-native-vector-icons/Feather';
import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
  } from '@Component/index';

export default PopularItems = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);


    const {popularProducts, popularProductItems, status} = useSelector(
        state => state.popularProduct,
      );
    


    useEffect(() => {

        if(status !== "success" && status !== "pending"){

        dispatch(getPopularProducts());


        }
      
    }, []);


    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshPopularProducts = useCallback(() => {

        setRefreshing(true);

        dispatch(getPopularProducts());

        wait(3000).then(() => setRefreshing(false));

    }, []);


    const getItem = (item) => {
       
        props.openSheet(item);

    }


    const ListItem = ({ item }) => (

    <TouchableOpacity style={styles.squareCard} onPress={() => getItem(item)}>
          
        <View style={styles.squareImgCover}>
              {/* <TouchableOpacity style={styles.heartCover}>
              <Icon name="heart" size={18} color='rgba(118, 118, 128, 1)' />
              </TouchableOpacity> */}
              <Image source={{ uri: `${item?.product_images[0]?.url}` }} style={styles.squareImg}  /> 
         </View>
      <View style={styles.descCover}>
          <Text style={styles.cardDesc} numberOfLines={2}>{item?.name}</Text>
          <Text style={styles.amountText}>&#8358;{commafy(item?.price_per_pack)}</Text>
      </View>
      </TouchableOpacity>

    )
    

    return (
        (status === "pending" || status === "idle") ?

        <CatelogueCardPlaceholder />
        :

        <FlatList
            data={popularProductItems}
            columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-between'}}
            showsVerticalScrollIndicator={false}
            numColumns = {2}
            vertical
            keyExtractor={item => item.id}
            renderItem={ListItem}
            ListEmptyComponent={<EmptyCategory />}
            refreshControl={
                <RefreshControl 
                refreshing={refreshing} 
                onRefresh={refreshPopularProducts} />
            }
        />
    )
};
