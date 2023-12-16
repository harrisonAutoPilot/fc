import React, { useMemo, useCallback } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetFooter, BottomSheetFlatList
} from '@gorhom/bottom-sheet';
import Icon from "react-native-vector-icons/MaterialIcons";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';


import styles from './bottomSheetStyle';
import RenderItem from "./RenderItemOutofStock";
import { OnboardinBtn } from "@Component2";



const OutOfStockBottomSheet = (props) => {


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
            <View style={styles.selectOutofStockBtn}>
                <OnboardinBtn
                    title="Clear items and Proceed"
                    onPress={props.clearOutofStock}
                    backgroundColor="#3353CB"
                    color="#fff"
                    
                />
            </View>

            <View style={styles.selectBtn}>
                <OnboardinBtn
                    title="Return to Cart"
                    onPress={props.returnToCart}
                    backgroundColor="#fff"
                    color="#3353CB"
                    borderColor= "#3353CB"
                    borderWidth={1}
                />
            </View>
        </BottomSheetFooter>
    ),
        []
    );

    // const data = [
    //     {  "id": 130109, "product": {"category_id": 230, "expiry_date": null, "has_notified": false, "id": 2532, "is_saved_item": false, "name": "ACNEAWAY CREAM 20G", "out_of_stock": true, "pack_style": "roll", "price_per_pack": 281, "product_type_id": 127, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "266.66"}, "product_id": 2532, "quantity": 1, "total_amount": 281, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 130108, "product": {"category_id": 318, "expiry_date": null, "has_notified": false, "id": 2526, "is_saved_item": false, "name": "ACCU CHEK TEST STRIP X 50", "out_of_stock": true, "pack_style": "roll", "price_per_pack": 6375, "product_type_id": 130, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "6150.00"}, "product_id": 2526, "quantity": 1, "total_amount": 6375, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 130107, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301057, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301071, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301070, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301079, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301078, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301076, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301072, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 1301091, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756},
    //     {  "id": 130110, "product": {"category_id": 321, "expiry_date": null, "has_notified": false, "id": 3979, "is_saved_item": false, "name": "CUREFENAC FORTE TABLET X 10", "out_of_stock": true, "pack_style": "box", "price_per_pack": 87, "product_type_id": 134, "quantity_available": 0, "shelves": [], "stock_count": 0, "unit_cost": "78.00"}, "product_id": 3979, "quantity": 1, "total_amount": 87, "updated_at": "2023-04-04T14:27:31.000000Z", "user_id": 1756}
    // ]


    return (

        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={props.bottomSheetRef}
                index={1}
                initialSnapIndex={1}
                snapPoints={['80%', "80%"]}
                style={styles.bottomSheetContainer}
                animationConfigs={animationConfigs}
                backdropComponent={CustomBackdrop}
                animateOnMount={true}
                enableHandlePanningGesture={false}
                draggable={false}
                handleIndicatorStyle={{ display: "none" }}
                footerComponent={renderFooter}
                enableContentPanningGesture={false}
            >

                <View style={styles.errViewOutofStock}>
                    <Icon name="error-outline" size={22} color="rgba(186, 26, 26, 1)" />
                    <View style={styles.errInnerView}>
                        <Text style={styles.errHeaderOutofStock}>Out of stock</Text>
                        <Text style={styles.errTextOutofStock}>You cannot proceed because the items below are currently out of stock in your cart.</Text>
                    </View>
                </View>

                {props.err !== null && props.err !== undefined &&

                    <View style={styles.errView} >
                        <Icon name="error-outline" size={22} color="#fff" />
                        <Text style={styles.errText}>{props.err}</Text>
                    </View>

                }

                {props.status == "idle" || props.status == "pending" ?

                        <ActivityIndicator color="#3353CB" />
                        :
                        <View style={styles.outOfStockBottomSheetFlatlist}>

                            <BottomSheetFlatList
                                data={props.data}
                                renderItem={({ item }) =>
                                    <RenderItem item={item}
                                    />}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}

                            />



                        </View>
                }

            </BottomSheetModal>

        </BottomSheetModalProvider>

    )
};

export default OutOfStockBottomSheet;