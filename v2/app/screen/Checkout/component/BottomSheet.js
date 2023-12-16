import React, { useMemo,useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator,TextInput } from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetFooter, BottomSheetFlatList
} from '@gorhom/bottom-sheet';

import Icon from "react-native-vector-icons/MaterialIcons";
import Zcon from 'react-native-vector-icons/Feather';
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';


import styles from './bottomSheetStyle';
import RenderItem from "./RenderItem";
import { OnboardinBtn } from "@Component2";



const Overlay = (props) => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([])

    const CustomBackdrop = ({ animatedIndex, style }) => {
        // animated variables
        const containerAnimatedStyle = useAnimatedStyle(() => ({
            opacity: interpolate(
                animatedIndex.value,
                [0, 1],
                [0, 1],
                Extrapolate.CLAMP
            ),
        }));

        const containerStyle = useMemo(
            () => [
                style,
                {
                    backgroundColor: "rgba(0,0,0,0.6)"
                },
                containerAnimatedStyle,
            ],
            [style, containerAnimatedStyle]
        );

        return <Animated.View style={containerStyle} />;
    };



    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 350,
        easing: Easing.exp,
    });

    const renderFooter = useCallback(prop => (
        <BottomSheetFooter {...prop} bottomInset={24}>
            <View style={styles.selectBtn}>

                {/* <OnboardinBtn
                    title="Select"
                    onPress={props.closeBottomSheet}
                    backgroundColor="#3353CB"
                    color="#fff"
                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                /> */}
            </View>
        </BottomSheetFooter>
    ),
        []
    );

    useEffect(()=> {
        setResult(props?.data)
        },[])

    useEffect(() => {

        if (search?.length) {
    
          filterResult();
    
        }
      }, [search?.length]);
    
    
      useEffect(() => {
    
        if (search == "") {
          setResult(props?.data)
        }
    
      }, [search]);

      const filterResult = () => {

        let searched = result?.filter(val => {
    
          if (val?.name !== null && val?.name.toLowerCase().includes(search.toLowerCase())) {
    
            return val
          }
        });
    
        return setResult(searched)
    
      };
    

    return (

        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetRef}
                index={1}
                initialSnapIndex={1}
                snapPoints={['72%', "72%"]}
                style={styles.bottomSheetContainer}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                animateOnMount={true}
                enableHandlePanningGesture={true}
                enablePanDownToClose={true}
                draggable={true}
                handleIndicatorStyle={{ display: "none" }}
                footerComponent={renderFooter}
            >

                <View style={styles.headerView}>
                    <View>
                        <Text style={styles.headerTitle}>{props.name}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={props.closeBottomSheet}>
                        <Icon name="close" size={24} color="#1B1B1F" />
                    </TouchableOpacity>


                </View>


                {
                    props.err !== null && props.err !== undefined ?

                        <View style={styles.errView} >
                            <Icon name="error-outline" size={22} color="#fff" />
                            <Text style={styles.errText}>{props.err}</Text>
                        </View>

                        :

                        props.status == "idle" || props.status == "pending" ?

                            <ActivityIndicator color="#3353CB" />
                            :
                            <View style={styles.bottomSheetFlatlist}>
                                 <View style={styles.inputCover}>
                                    <Zcon name="search" size={14} style={styles.searchIcon} color="#767680" />
                                    <TextInput
                                        style={styles.inputStyle}
                                        value={search}
                                        placeholder='Search'
                                        placeholderTextColor={"#5A5D72"}
                                        onChangeText={(text) => setSearch(text)}
                                    />
                                    </View>



                                <BottomSheetFlatList
                                    data={!result?.length ? props?.data : result}
                                    renderItem={({ item }) =>
                                        <RenderItem item={item}
                                            address={props.address}
                                            codeValue={props.codeValue}
                                            deliveryOption={props.deliveryOption}
                                        />}
                                    keyExtractor={item => item.name}
                                    bounces={false}
                                    ListFooterComponent={<View style={styles.bottomsheetFooter} />}
                                    showsVerticalScrollIndicator={false}

                                />

                            </View>
                }

            </BottomSheetModal>

        </BottomSheetModalProvider>
     

    )
};

export default Overlay;