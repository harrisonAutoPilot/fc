import React, { useEffect, useState, useCallback, useRef } from "react";
import {
    View, Text, RefreshControl, TouchableOpacity, Image, ActivityIndicator, FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';


import styles from "./style";
import { searchProducts } from "@Request2/Product";
import { HomeHeader } from "@Component2";
import CatelogueCardPlaceholder from "@Screen2/Catalogue/CatelogueCardPlaceholder";
import { cleanSearchProducts } from "@Store2/Product";
import ListEmptyComponent from "@Screen2/GenProducts/ListEmptyPlaceHolder";
import BottomSheet from "./component/BottomSheet";


const BrowseProducts = (props) => {


    const dispatch = useDispatch();

    const { id, name, category } = props.route.params;
    console.log("cat ebube",category)

    const bottomSheetRef = useRef(null);


    const [errMsg, setErrMsg] = useState(null);

    const [refreshing, setRefreshing] = useState(false);

    const [trackSearchStatus, setTrackSearchStatus] = useState(false);

    const [sortId, setSortId] = useState("");

    const [packId, setPackId] = useState("");

    const [storeId, setStoreId] = useState("");

    const [objectValues, setObjectValues] = useState("")


    const { errors, searchedProducts, searchProductsData, searchProductsStatus } = useSelector((state) => state.product);


    useEffect(() => {

        if (category) {
            console.log("we are here 1")
            dispatch(searchProducts({
                id: "",
                no: 1,
                search: category,
                pack: packId,
                sort: sortId,
                type: objectValues?.option,
                option:objectValues?.idd
            }));

        } else {
            console.log("we are here 2")
            dispatch(searchProducts({
                id,
                no: 1,
                search: "",
                pack: packId,
                sort: sortId,
                type: objectValues?.option,
                option:objectValues?.idd
            }));
        }

        return () => {

            dispatch(cleanSearchProducts());
        };

    }, []);


    useEffect(() => {

        if (searchProductsStatus === "failed") {

            setErrMsg(errors?.msg);

        }
    }, [errors]);


    const showBottomSheet = () => {

        bottomSheetRef.current?.present();

    };

    const closeBottomSheet = () => {

        bottomSheetRef.current?.close();

    };


    const loadMore = () => {

        setTrackSearchStatus(true);

        if (category) {
            dispatch(searchProducts({
                id: "",
                no: searchProductsData?.current_page + 1,
                search: category,
                pack: packId, sort: sortId,
                type: objectValues?.option,
                option:objectValues?.idd
            }));
        } else {

            dispatch(searchProducts({
                id,
                no: searchProductsData?.current_page + 1,
                search: "",
                pack: packId,
                sort: sortId,
                type: objectValues?.option,
                option:objectValues?.idd
            }));
        }
    };

    const applyFilter = () => {

        closeBottomSheet();

        dispatch(cleanSearchProducts());

        dispatch(searchProducts({
            id,
            no: 1,
            search: "",
            pack: packId,
            sort: sortId,
            type: objectValues?.option,
            option:objectValues?.idd
        }));
    };

    const reset = () => {

        closeBottomSheet()

        dispatch(cleanSearchProducts());

        setPackId("");

        setSortId("");

        dispatch(searchProducts({ id, no: 1, search: "", pack: "", sort: "", type:"", option:"" }));

    };


    const navigateToSearchProducts = () => props.navigation.replace("SearchProducts");

    const navigateToProducts = (items) => props.navigation.navigate("ProductDetail", { products: items, activeProductType: 0 })


    const refreshView = useCallback(() => {

        setErrMsg(null);

        setRefreshing(true);

        setTrackSearchStatus(false)

        dispatch(cleanSearchProducts());

        setPackId("");

        setSortId("");

        if (category) {

            dispatch(searchProducts({ id: "", no: 1, search: category, pack: "", sort: "", type:"", option:"" })).then((suc) => {

                if (suc) {

                    setRefreshing(false)

                }

            });
        } else {


            dispatch(searchProducts({ id, no: 1, search: "", pack: "", sort: "", type:"", option:"" })).then((suc) => {

                if (suc) {

                    setRefreshing(false)

                }

            });

        }


    }, []);


    const goBack = () => {

        props.navigation.goBack();
    }


    const ListItem = ({ item }) => (

        <View style={styles.productCard}>

            <TouchableOpacity onPress={() => navigateToProducts(item)}>

                <View style={styles.productInnerCard}>

                    <View style={styles.productImgView}>
                        <Image
                            source={{ uri: `${item.product_images[0].url}` }}
                            style={styles.productImg} />
                    </View>
                    <View >
                        <Text style={styles.productTitle} numberOfLines={2}>{item.name}</Text>
                    </View>
                    <View>
                        <View style={styles.priceView}>
                            <Text style={styles.priceTitle}>&#8358;{commafy(item?.price_per_pack)}/<Text style={{ textTransform: 'capitalize' }}>Pack</Text></Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );


    return (
        <View style={styles.body}>
            <HomeHeader>
                <View style={styles.homeHeaderView}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name="arrow-back-ios" size={25} color="#45464F" />
                    </TouchableOpacity>
                    {category ?
                        <TouchableOpacity style={styles.searchView} onPress={goBack}>
                            <Icon name="search" size={16} color="#767680" />
                            <Text style={styles.searchText}>I am looking for...</Text>
                        </TouchableOpacity>

                        : <TouchableOpacity style={styles.searchView} onPress={navigateToSearchProducts}>
                            <Icon name="search" size={16} color="#767680" />
                            <Text style={styles.searchText}>I am looking for...</Text>
                        </TouchableOpacity>}

                </View>
            </HomeHeader>


            <View style={styles.paramHeader}>
               <View style={styles.innerContainer}>
               <Text style={styles.paramText}>{name}</Text>
              <>
              {objectValues?.type &&
               <View style={styles.checkCover}>
               <Icon name="check" color="rgba(51, 83, 203, 1)" size={12} />
               <Text style={styles.checkText}>{objectValues?.type}</Text>
              </View>}
              </>
    
               </View>
                <TouchableOpacity style={styles.paramFilterView} onPress={showBottomSheet}>
                    <Icon name="filter-list" size={20} color="rgba(118, 118, 128, 1)" />
                    <Text style={styles.paramFilterText}>Filter</Text>
                    <Icon name="expand-more" size={20} color="rgba(118, 118, 128, 1)" />
                </TouchableOpacity>
            </View>

            {searchProductsStatus === "failed" &&

                <View style={styles.errView} >
                    <Icon name="error-outline" size={22} color="#fff" />
                    <Text style={styles.errText}>{errMsg}</Text>
                </View>
            }

            {
                (searchProductsStatus === "idle" || searchProductsStatus === "pending") && !trackSearchStatus
                    ?
                    <CatelogueCardPlaceholder />
                    :

                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        data={searchedProducts}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={ListEmptyComponent}
                        renderItem={ListItem}
                        ListFooterComponent={searchProductsStatus === "pending" ? <ActivityIndicator /> : <View style={{ height: 20 }} />}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        }
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (searchProductsData?.current_page < searchProductsData?.last_page) {
                                loadMore()
                            }
                        }}

                    />
            }

            <BottomSheet
                bottomSheetRef={bottomSheetRef}
                closeBottomSheet={closeBottomSheet}
                setPack={setPackId}
                setSort={setSortId}
                setStore={setStoreId}
                packId={packId}
                sortId={sortId}
                storeId={storeId}
                objList = {(item) =>  setObjectValues(item)}
                reset={reset}
                apply={applyFilter}
            />


        </View>
    )
};

export default BrowseProducts;