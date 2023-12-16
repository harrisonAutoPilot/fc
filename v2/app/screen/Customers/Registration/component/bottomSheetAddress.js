import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView,Pressable, Keyboard } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from "react-native-config";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "./style";



const FormStoreDetailsBottomSheet = (props) => {

    const { prop } = props;

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

    const close = () => {

        Keyboard.dismiss();

        props?.wait();
        
    }

    const closeModal = () => {
        props.returnBack();
      };
    


    return (
   

          
            <View>
             <Modal
                isVisible={props.addressModal}
                onBackdropPress={closeModal}
                swipeDirection="left"
                animationIn="slideInUp"
                animationInTiming={300}
                animationOut="slideOutDown"
                animationOutTiming={300}
                useNativeDriver={false}
                hasBackdrop={true}
                backdropColor="rgba(52, 52, 52, 0.8)"
                backdropOpacity={0.8}
                coverScreen={true}>
                <Pressable
                    style={styles.outsideModal}
                    onPress={event => {
                    if (event.target == event.currentTarget) {
                        closeModal()
                    }
                    }}>
               <View style={styles.bottomSheet}>
                <View style={styles.headerView}>
                    <TouchableOpacity
                        onPress={props.closeBottomSheet}
                        style={styles.headerCloseIcon}>
                        <Icon name="close" size={24} color="#1B1B1F" />
                    </TouchableOpacity>

                </View>

                <View style={styles.mainContainer}>
                    <KeyboardAvoidingView>

                        <View style={styles.container}>

                            <View style={styles.labelView}>
                                <Text style={[styles.label]}>Store Address</Text>
                            </View>
                            <GooglePlacesAutocomplete
                                nearbyPlacesAPI="GooglePlacesSearch"
                                debounce={400}
                                styles={{
                                    container: styles.googleContainer,
                                    textInput: styles.labelTitle,
                                    description: styles.labelTitle
                                }}
                                placeholder='Search Address'
                                onPress={(data, details = null) => {
                                    prop.setFieldTouched("store_address", true, false);
                                    prop.setFieldValue("store_address", details?.description);
                                    close();
                                }}
                                textInputProps={{
                                    onChangeText: (text) => {
                                        prop.setFieldValue("store_address", text);
                                    }
                                }}
                                query={{
                                    key: "AIzaSyDLDpaD54vnybCiA1y3Qym10e2G-i3_wiE",
                                    language: 'en',
                                }}
                                enablePoweredByContainer={false}
                                minLength={2}
                                listEmptyComponent={() => <View style={styles.notFoundView}>
                                    <Text style={[styles.labelTitle, { color: "#BA1A1A" }]}>Not Found</Text>
                                </View>}
                            />
                        </View>

                        <TouchableOpacity style={styles.addressNotFoundView} onPress={props.setAddressNotFound}>
                            <Text style={styles.labelTitle}>Address not found?</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>
                </View>
                </Pressable>

                </Modal>
            </View>

    )
};

export default FormStoreDetailsBottomSheet;