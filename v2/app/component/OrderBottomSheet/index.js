import 'react-native-gesture-handler';
import React, { useMemo } from "react";
import { View, Text,TouchableOpacity, ScrollView} from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetView, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import styles from './style';
// import { TouchableOpacity } from "react-native-gesture-handler";
import { period, track } from "./data";
import { OnboardinBtn } from "@Component2";
import {COLORS} from "@Helper2/constant";

import BottomSheet from "react-native-gesture-bottom-sheet";


const OrderBottomSheet = (props) => {


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


    const setPropsTrack = (id) => {

        props.setTrack(id);

    };

    const setPropsPeriod = (id) => {

        props.setPeriod(id);

    };


    const ListTrack = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsTrack(item.id)}>
                    <Text style={item.id == props.priceId ? styles.filterPriceActiveListTitle : styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.trackId
                        ?
                        <Icon name="radio-button-checked" color={COLORS.primary} size={20} /> :

                        <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };

    const ListPeriod = ({ data }) => {
        return (
            data?.map(item => (

                <TouchableOpacity key={item.id} style={styles.filterPriceList} onPress={() => setPropsPeriod(item.id)}>
                    <Text style={item.id == props.periodId ? styles.filterPriceActiveListTitle : styles.filterPriceListTitle}>{item.type}</Text>
                    {item.id == props.periodId
                        ?
                        <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={20} /> :

                        <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }

                </TouchableOpacity>

            ))
        )
    };



    return (
    
        // <GestureHandlerRootView style={{flex:1}}>
        //     <BottomSheetModalProvider>
        //     <BottomSheetModal
        //         ref={props.bottomSheetRef}
        //         index={1}
        //         initialSnapIndex={1}
        //         snapPoints={['65%', "65%"]}
        //         enableContentPanningGesture={true}
        //         animationConfigs={animationConfigs}
        //         backdropComponent={CustomBackdrop}
        //         animateOnMount={true}
        //     >
                 <BottomSheet hasDraggableIcon   ref={props.bottomSheetRef} height={600} >

                <View style={styles.filterHeader}>
                    <Text style={styles.filterHeaderText}>Filter by</Text>
                    <TouchableOpacity onPress={props.reset}>
                        <Text style={styles.filterResetText}>Reset</Text>
                    </TouchableOpacity>
                </View>

               <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    <View style={styles.bottomSheet}>

                        <View style={styles.filterPriceView}>
                            <Text style={styles.filterPriceTitle}>Orders</Text>
                        </View>

                        <ListTrack data={track} />

                        <View style={styles.divider} />

                        <View style={styles.filterPriceView}>
                            <Text style={styles.filterPriceTitle}>Date</Text>
                        </View>

                        <ListPeriod data={period} />

                        <View style={styles.filterBtn}>

                            <OnboardinBtn
                                title="Apply"
                                backgroundColor="#3353CB"
                                color="#fff"
                                onPress={props.apply}
                                disabled={!props.periodId.length && !props.trackId.length}
                                disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                            />
                        </View>
                    </View>
              </ScrollView>
                </BottomSheet>

    
    
      
    )
};

export default OrderBottomSheet;