import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux";


import styles from './style';
import { HomeHeader, OnboardinBtn } from "@Component2";
import { searchKeyWords } from "@Request2/Product";
import { cleanSearchProducts, cleanKeywords } from "@Store2/Product";


const SearchProducts = (props) => {


    const dispatch = useDispatch();


    useEffect(() => {

        return () => {

            dispatch(cleanKeywords())
        }

    },[])


    const goBack = () => {

        props.navigation.goBack();
        
    };


    const searchTextRef = useRef();

    const [errMsg, setErrMsg] = useState(null);


    const onChangeText = (val) => {

        setErrMsg(null);

        dispatch(searchKeyWords(val.toLowerCase()))
            .unwrap(() => {

                setLoading(false);

            })
            .catch(err => {

                setLoading(false);

                setErrMsg(err.msg);

            })
    };


    const getSearchItems = (category) => {

        dispatch(cleanSearchProducts());

        clearSearchText();

        props.navigation.navigate( "BrowseProducts", { id: "", name: category, category });

    };


    const clearSearchText = () => {

        searchTextRef.current.clear();

        dispatch(cleanKeywords());

    };

    const redirectToProductRequest = () => {

        props.navigation.navigate("ProductRequest")
    }


    const { keywordsData, keywordsStatus } = useSelector((state) => state.product);


    const RenderSearchList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.searchListItems} onPress={() => getSearchItems(item)}>
                <Text style={styles.searchListText}>{item}</Text>
                <View>
                    <Icon name="call-made" color="rgba(118, 118, 128, 1)" size={20} />
                </View>
            </TouchableOpacity>
        )
    };


    return (

        <View style={styles.container}>

            <HomeHeader>
                <View style={styles.homeHeaderView}>
                    <View style={styles.searchView}>
                        <Icon name="search" size={16} color="#767680" />
                        <TextInput
                            ref={searchTextRef}
                            placeholder="I am looking for"
                            style={styles.searchText}
                            placeholderTextColor="rgba(69, 70, 79, 0.6)"
                            onChangeText={(val) => onChangeText(val)}
                        />
                        <TouchableOpacity style={styles.headerCloseIcon} onPress={clearSearchText}>
                            <Icon name="close" size={16} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={goBack}>
                        <Text style={styles.goBackText}>Cancel</Text>
                    </TouchableOpacity>

                </View>
            </HomeHeader>

            {errMsg &&

                <View style={styles.errView} >
                    <Icon name="error-outline" size={22} color="#fff" />
                    <Text style={styles.errText}>{errMsg}</Text>
                </View>
            }

            <View>
                <View style={styles.resultHeader}>
                    <Text style={styles.resultText}>Result</Text>
                </View>

                <FlatList
                    data={keywordsData}
                    renderItem={RenderSearchList}
                    ListEmptyComponent={keywordsStatus == "success" && <View style={styles.emptyResultContainer}>

                        <View style={styles.emptyResultSearchIconContainer}>
                            <Icon name="search-off" size={30} color="rgba(118, 118, 128, 1)" />
                        </View>

                        <Text style={styles.emptyResultHeader}>No result found</Text>
                        <Text style={styles.emptyResultText}>Unable to find product? Tap the button below to request the product.</Text>

                        <OnboardinBtn
                            title="Request Product"
                            backgroundColor="#3353CB"
                            color="#fff"
                            onPress={redirectToProductRequest}
                        />
                    </View>}

                />
            </View>


        </View>
    )
};

export default SearchProducts;