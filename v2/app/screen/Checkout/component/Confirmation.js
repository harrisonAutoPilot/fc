import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { commafy } from "@Helper2/func";


import styles from "../style";
import { ContinueBtn } from "@Component2";



const Confirmation = (props) => {


    return (
        <ScrollView
            bounces={false}
            contentContainerStyle={styles.confirmationContentScrollView}
            style={styles.confirmationScrollStyleView}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.confirmationTopView}>
                <View style={styles.deliveryContainer}>

                    <View style={styles.deliveryTitleView}>
                        <Text style={styles.deliveryMainTitle}>Please confirm and submit your order</Text>
                    </View>

                    <View style={styles.paymentView}>
                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.paymentListTitle}>Store</Text>
                            <TouchableOpacity onPress={() => props.select("1")}>
                                <Text style={styles.storeChangeText}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.storeNameTitle}>Store Name</Text>
                            <Text style={styles.storeNameValue} numberOfLines={1}>{props.storeAddress.name} {props.storeAddress.name} {props.storeAddress.name}</Text>
                        </View>
                        <View style={styles.paymentListView}>
                            <Text style={styles.storeNameTitle}>Address</Text>
                            <Text style={styles.storeNameValue} numberOfLines={1}>{props.storeAddress.address}</Text>
                        </View>
                    </View>

                    <View style={styles.paymentView}>
                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.paymentListTitle}>Payment</Text>
                            <TouchableOpacity onPress={() => props.select("2")}>
                                <Text style={styles.storeChangeText}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.storeNameTitle}>Payment Type</Text>
                            <Text style={styles.storeNameValue} numberOfLines={1}>{props.payment}</Text>
                        </View>
                    </View>


                    <View style={styles.orderView}>

                        <View style={[styles.paymentListView, styles.orderTypeView]}>
                            <Text style={styles.paymentListTitle}>Order Summary</Text>
                        </View>

                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.storeNameTitle}>Subtotal</Text>
                            <Text style={styles.storeNameValue}>₦{commafy(props.item?.total_amount)}</Text>
                        </View>

                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.storeNameTitle}>Delivery</Text>
                            <Text style={styles.storeNameValue}>{props.deliveryFee && `₦${commafy(props.deliveryFee)}`}</Text>
                        </View>

                        <View style={[styles.paymentListView, styles.storeTypeView]}>
                            <Text style={styles.orderTotalTitle}>Total</Text>
                            <Text style={styles.orderTotal}>{commafy(props.item?.total_amount + props.deliveryFee)}</Text>
                        </View>
                    </View>

                    
                </View>

            </View>


            <View style={styles.confirmationBtmView}>
                <SafeAreaView>
                    <ContinueBtn
                        title="Confirm Order"
                        backgroundColor="#3353CB"
                        color="#fff"
                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                        onPress={props.placeOrder}
                    />
                    </SafeAreaView>
            </View>


        </ScrollView>
    )
};

export default Confirmation;