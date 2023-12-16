import React, { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BottomSheetModal, BottomSheetModalProvider, useBottomSheetSpringConfigs, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from './style';
import { OnboardinBtn, ContinueBtn } from "@Component2";


const SuccessOverlay = (props) => {
   

    const handleSheetChanges = useCallback(() => {
        // console.log("called sheet")
    }, []);


    const animationConfigs = useBottomSheetSpringConfigs({
        damping: 80,
        overshootClamping: true,
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
        stiffness: 500,
    });


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


    return (
    
        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheet}
                index={1}
                initialSnapIndex={1}
                snapPoints={['36%', "36%"]}
                onChange={handleSheetChanges}
                style={styles.bottomSheet}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                animateOnMount={true}
                handleIndicatorStyle={{ display: "none" }}
                enableHandlePanningGesture={false}
                enableContentPanningGesture={false}
                draggable={false}

            >
                <View style={styles.navHeader}>
                    <View style={styles.navHeadetTextView}>
                        <Icon name="check-circle" color="#4EA162" size={24} />
                        <Text style={styles.navHeaderText}>Added to Cart</Text>
                    </View>

                    <TouchableOpacity onPress={props.closeBottomSheet}>
                        <Icon name="close" size={24} color="#767680" />
                    </TouchableOpacity>
                </View>


                <BottomSheetScrollView contentContainerStyle={styles.bottomSheetScrollView}>

                <View style={styles.body}>
                    <Image source={{ uri: props?.data?.img }} style={styles.bodyImg} />
                    <Text style={styles.bodyText} numberOfLines={1}>{props.data.name}</Text>
                </View>

                <View style={styles.bodyBtn}>

                    <View style={styles.bodyBtnContainer}>
                        <OnboardinBtn
                            title="Continue Shopping"
                            backgroundColor="#fff"
                            color="rgba(51, 83, 203, 1)"
                            borderWidth={1}
                            borderColor="rgba(51, 83, 203, 1)"
                            onPress={props.goBack}
                        />
                    </View>

                    <View style={styles.bodyBtnContainer}>
                        <ContinueBtn
                            title="View Cart"
                            color="#fff"
                            backgroundColor="rgba(51, 83, 203, 1)"
                            onPress={props.goToCart}
                        />
                    </View>
                </View>
                </BottomSheetScrollView>

            </BottomSheetModal>

        </BottomSheetModalProvider>

    );
};

export default SuccessOverlay;