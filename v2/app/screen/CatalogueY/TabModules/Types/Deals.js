import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View, Text, TouchableOpacity, Image, RefreshControl,Animated, ActivityIndicator} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Acon from 'react-native-vector-icons/AntDesign';
import styles from '../style';
import {getDeals} from '@Request2/Deal';
import CatelogueCardPlaceholder from "../../CatelogueCardPlaceholder"
import { cleanupDealStatus } from "@Store2/Deal";
import Icon from 'react-native-vector-icons/Feather';
import {
    SuccessMsgViewTwo,
    COHeader as Header,
    EmptyCategory,
  } from '@Component/index';


const Deals = (props) => {


    const dispatch = useDispatch();


    const [refreshing, setRefreshing] = useState(false);

    const [dealsFirstLoad, setDealsFirstLoad] = useState(false);


    const getItem = (item) => {
       
        props.dealInfo(item);
       

        props.data(item);
    }

    
    // const navigateToDeals = (items) => props.navigation.navigate("Deals", { products: items })

    useEffect(() => {

        if(status !== "success"){

            dispatch(getDeals({id: 1}));

        }
        
      
    }, []);

    const {status, errors, deals,checkRefresh, dealsItems} = useSelector(state => state.deal);


    const loadMoreDeals = () => {

        setDealsFirstLoad(true);

        dispatch(getDeals({id:deals?.current_page + 1}));

    };


    const wait = (timeout) => {

        return new Promise(resolve => setTimeout(resolve, timeout));

    };


    const refreshDeals = useCallback(() => {

        setRefreshing(true);

        dispatch(cleanupDealStatus());
      

        dispatch(getDeals({id: 1}));
       

        wait(3000).then(() => setRefreshing(false));
        
    }, []);


    const ListItem = ({ item }) =>  (
    //     <TouchableOpacity style={styles.squareCard} onPress={() => getItem(item)}>
          
    //     <View style={styles.squareImgCover}>
    //           <TouchableOpacity style={styles.heartCover}>
    //           <Icon name="heart" size={18} color='rgba(118, 118, 128, 1)' />
    //           </TouchableOpacity>
    //           <Image source={{ uri: `${item?.product?.product_images[0]?.url}` }} style={styles.squareImg}  /> 
    //      </View>
    //   <View style={styles.descCover}>
    //       <Text style={styles.cardDesc} numberOfLines={2}>{item?.product.name}</Text>
    //       <Text style={styles.amountText}>&#8358;{commafy(item?.product?.price_per_pack)}</Text>
    //   </View>
    //   </TouchableOpacity>
    <View style={styles.productCard}>

    <TouchableOpacity onPress={() => getItem(item)}>

        <View style={styles.dealLogoContainer}>
            <View style={styles.dealLogo}>
                <Text style={styles.dealLogoText}>DEAL</Text>
            </View>
        </View>

        <View style={styles.productInnerCard}>

            <View style={styles.productImgView}>
                <Image
                    source={{ uri: item?.product?.product_images[0]?.url }}
                    style={styles.productImg} />
            </View>
            <View>
                <Text style={styles.productTitle} numberOfLines={2}>{item.product.name}</Text>
            </View>
            <View>
                <View style={styles.priceViewDeal}>
                    <Text style={styles.priceTitle}>&#8358;{commafy(item?.product?.price_per_pack)}/<Text style={{ textTransform: 'capitalize' }}>Pack</Text></Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
</View>

    );
    


    return (
        (status === "pending" || status === "idle") && !dealsFirstLoad ?

        <CatelogueCardPlaceholder />
        :
        <>
     
         <FlatList
            columnWrapperStyle= {{flexWrap: "wrap", justifyContent:'space-between'}}
            showsVerticalScrollIndicator={false}
            numColumns = {2}
            vertical
            data={dealsItems}
            keyExtractor={item => item.id}
            renderItem={ListItem}
            ListEmptyComponent={EmptyCategory}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (deals?.current_page < deals?.last_page) {
                    loadMoreDeals()
                }
            }}
         
            refreshControl={
                <RefreshControl 
                refreshing={refreshing} 
                onRefresh={refreshDeals} />
            }
         ListFooterComponent={ status === "pending" && <ActivityIndicator />} 
        />
       
        
    
        </>
    
    )
};

export default Deals;