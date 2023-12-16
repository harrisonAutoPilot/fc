import React, { useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetFooter, BottomSheetFlatList
} from '@gorhom/bottom-sheet';
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';


import styles from './bottomSheetStyle';
import RenderItem from "./RenderItemDateBottomSheet";
import { OnboardinBtn } from "@Component2";



const Overlay = (props) => {

    const close = props.closeBottomSheet;


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

                <OnboardinBtn
                    title="Confirm"
                    onPress={close}
                    backgroundColor="#3353CB"
                    color="#fff"
                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                    disabled={!props?.codeValue}
                />
            </View>
        </BottomSheetFooter>
    ),
        [props?.codeValue]
    );


    return (


        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetRefDate}
                index={1}
                initialSnapIndex={1}
                snapPoints={['60%', "60%"]}
                style={styles.bottomSheetContainer}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                animateOnMount={true}
                enableHandlePanningGesture={false}
                draggable={false}
                handleIndicatorStyle={{ display: "none" }}
                footerComponent={renderFooter}

            >

                <View style={styles.headerView}>
                    <View>
                        <Text style={styles.headerTitle}>{props.name}</Text>
                    </View>

                </View>

                <View style={styles.bottomSheetFlatlist}>

                    <BottomSheetFlatList
                        data={props?.data}
                        renderItem={({ item }) =>
                            <RenderItem item={item}
                                address={props?.address}
                                deliveryDate={props?.deliveryDate}
                                codeValue={props?.codeValue}
                            />}
                        keyExtractor={item => item.id}
                        bounces={false}
                        ListFooterComponent={<View style={styles.bottomsheetFooter} />}
                        showsVerticalScrollIndicator={false}

                    />

                </View>

            </BottomSheetModal>

        </BottomSheetModalProvider>


    )
};

export default Overlay;