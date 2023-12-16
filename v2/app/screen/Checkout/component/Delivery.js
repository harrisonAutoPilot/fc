import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity,Image, FlatList, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "../style";
import { ContinueBtn } from "@Component2";


const Delivery = (props) => {
const [displayInfo, setDisplayInfo] = useState(false)

const [optionType, setOptionType] = useState()

    const selectDelivery = (item) => {

        props.setDeliveryType(item.id);
        setOptionType(item)
            console.log("the deeee", item)
        if (item.days.length) {

            props.deliveryDays(item.days);

            // props.showDateBottomSheet()

        } else {

            props.setDeliveryDate(null);

        }



        if (item.flat_fee_exists) {
            props.deliveryFee(parseInt(item.price))

        } else {
            props.deliveryFee(calculateDelivery(item.percentage))

        }
    }

    const calculateDelivery = (percent) => {

        return (percent / 100) * props.fees

    };


    const RenderExpress = ({ item }) => (

        <TouchableOpacity
            style={[props.deliveryType == item.id ? styles.deliveryActiveOptionDateView : styles.deliveryOptionDateView]}
            onPress={() => selectDelivery(item)}
        >
            <View style={styles.deliveryRegularDateView}>
                <Text style={styles.deliveryOptionDateTitle}>{item.name}</Text>
                {props.deliveryType == item.id ?
                    <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={18} /> :
                    <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={18} />
                }
            </View>
            <Text style={styles.deliveryDaysText}> -- </Text>
            <View style={styles.deliveryDateView}>
                <Text style={styles.deliverySelectDate}>--</Text>
            </View>

        </TouchableOpacity>

    );


    const RenderNotExpress = ({ item }) => (
        <TouchableOpacity
            style={[props.deliveryType == item.id ? styles.deliveryActiveOptionDateView : styles.deliveryOptionDateView]}
            onPress={() => selectDelivery(item)}
        >
            <View style={styles.deliveryRegularDateView}>
                <Text style={styles.deliveryOptionDateTitle}>{item.name}</Text>
                {props.deliveryType == item.id ?
                    <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={18} /> :
                    <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={18} />
                }
            </View>
            {props.deliveryDate ?
                <Text style={styles.deliveryDaysText}>{props.deliveryDate}</Text> :
                <Text style={styles.deliveryDaysText}> -- </Text>}


            <View style={styles.deliveryDateView}>
                {/* <Icon name="calendar-today" size={16} color="rgba(28, 27, 31, 1)" />
                <Text style={styles.deliverySelectDate}>Select date</Text> */}
                <View style={{height:20}} />
            </View>

        </TouchableOpacity>

    );


    const RenderList = ({ item }) => {
        return (

            <View style={styles.deliveryOptionDateMainView}>
                {item.name == "Express" ?
                    <RenderExpress item={item} />
                    :
                    <RenderNotExpress item={item} />
                }
               
            </View>
        )
    };


    return (
        <ScrollView
            bounces={false}
            contentContainerStyle={styles.confirmationContentScrollView}
            style={styles.confirmationScrollStyleView}
        >

            <View style={styles.confirmationTopView}>
                <View style={styles.deliveryContainer}>

                    <View style={styles.deliveryTitleView}>
                        <Text style={styles.deliveryMainTitle}>Select Delivery Store & Address</Text>
                    </View>

                    <View style={styles.deliveryDropDownView}>
                        <View style={styles.deliveryLabelView}>
                            <Text style={styles.deliveryLabelText}>Select Store</Text>
                        </View>

                        <TouchableOpacity style={styles.deliveryInputView} onPress={props.showBottomSheet}>
                            <Text style={styles.deliveryInputText} numberOfLines={1}>{props.storeAddress == null ? "Select Store" : props.storeAddress.name}</Text>
                            <View>
                                <Icon name="expand-more" size={20} />
                            </View>
                        </TouchableOpacity>

                        {props.storeAddress !== null &&

                            <View style={styles.deliveryTextAddressView}>
                                <Icon name="location-pin" size={20} color="rgba(118, 118, 128, 1)" />
                                <Text style={styles.deliveryTextAddress} numberOfLines={1}>{props.storeAddress.address}</Text>

                            </View>
                        }

                    </View>

                    {props.storeAddress !== null &&
                        <View>
                            <View style={styles.deliveryOptionView}>
                                <Text style={styles.deliveryMainTitle}>Delivery Option</Text>
                            </View>

                            <FlatList
                                data={props?.delivery}
                                keyExtractor={item => item.name}
                                bounces={false}
                                renderItem={RenderList}
                                horizontal={true}
                            />
                              {
                        optionType?.name == "Regular" ?
         
                        <View style={styles.infoCover2}>
                             <Image
                                source={require("@Assets2/image/checklist.png")}
                                style={styles.checklistImg}
                                />
                        <Text style={styles.infoText2}>{optionType?.days_to_delivery}</Text>
                        </View>
                        :  optionType?.name == "Express" ?
                        <View style={styles.infoCover2}>
                             <Image
                                source={require("@Assets2/image/checklist.png")}
                                style={styles.checklistImg}
                                />
                        <Text style={styles.infoText2}>{optionType?.days_to_delivery}</Text>
                        </View>
                        :
                        null

                         }
                        </View>

                    }
                </View>

            </View>

            <View style={styles.confirmationDeliveryBtmView}>
                <ContinueBtn
                    title="Continue"
                    backgroundColor="#3353CB"
                    color="#fff"
                    disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                    disabled={!props.storeAddress?.id || !props.deliveryType}
                    onPress={() => props.select("2")}
                />
            </View>
                  

        </ScrollView>
    )
};

export default Delivery;