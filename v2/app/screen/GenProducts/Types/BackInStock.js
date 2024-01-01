import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../style';
import {getBackInStock} from "@Request2/BackInStock"
import { cleanupBackInStockStatus } from "@Store2/backInStock";
import CatelogueCardPlaceholder from "../../SupportGroup/CatelogueCardPlaceholder"

import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
  } from '@Component/index';



export default BackInStock = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);

    const [errMsg, setErr] = useState("");

    const {bisStatus, backInStocks,backInStocksItems} = useSelector((state) => state.backInStock);
    

    const getItem = (item) => {
       
        props.openSheet(item);
    }


    useEffect(() => {

        if (bisStatus !== "success" && bisStatus !== "pending") {

            dispatch(getBackInStock());

        }

    }, []);

    useEffect(() => {

        if(bisStatus === "failed"){

            setErr(errors?.msg);

        }


    },[bisStatus])


    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshBackInStock = useCallback(() => {

        setRefreshing(true);

        dispatch(getBackInStock());

        wait(3000).then(() => setRefreshing(false));

    }, []);


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
        <>
        {/* {errMsg ? <Toast config={toastConfig} /> : null } */}

       {(bisStatus === "pending" || bisStatus === "idle") ?

            <CatelogueCardPlaceholder />
            :

            <FlatList
               
                data={backInStocksItems}
                columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-between'}}
                showsVerticalScrollIndicator={false}
                numColumns = {2}
                vertical
                keyExtractor={item => item.id}
                renderItem={ListItem}
                ListEmptyComponent={<EmptyCategory/>}
                onEndReachedThreshold={0.5}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={refreshBackInStock} />
                }
            /> 
}
    
    </>
    )
};

