import React from "react";
import { View, Text, TouchableOpacity, FlatList,Image, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


import styles from "../style";
import { ContinueBtn } from "@Component2";
import PaymentPlaceHolder from "./PaymentPlaceHolder";



const Payment = (props) => {

    const setPaymentId = (item) => {

        props.setId(item);

    };
    

    const ListItem = ({ item }) => {

        return (
            <TouchableOpacity style={[props.item?.id == item.id ? styles.paymentActiveView : styles.paymentView]} onPress={() => setPaymentId(item)}>
                <View style={styles.paymentListView}>
                    <Text style={styles.paymentListTitle}>{item.display_name}</Text>
                   

                    {props.item?.id == item.id ?
                        <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={20} />
                        :
                        <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={20} />
                    }
                </View>
                {item.description ?
                <Text style={styles.paymentListDesc}>{item.description}</Text>
                :
                <Text style={styles.paymentListDesc}>BALANCE: <Text style={{fontFamily: "AnekLatin-SemiBold"}}>{props.wallet.balance}</Text></Text>
    }
            </TouchableOpacity>
        )
    };


    return (
        <View style={styles.deliveryMainView}>
            <View style={styles.paymentContainer}>

                <View style={styles.deliveryTitleView}>
                    <Text style={styles.deliveryMainTitle}>Select mode of Payment</Text>
                </View>

                {props.status == "idle" || props.status == "pending"
                    ?
                    <PaymentPlaceHolder />
                    :
                    <FlatList
                        data={props.payment}
                        renderItem={ListItem}
                        keyExtractor={item => item.id}
                        bounces={false}
                        showsVerticalScrollIndicator={false}

                    />}
                      <View style={styles.infoCover2}>
                             <Image
                                source={require("@Assets2/image/info-button.png")}
                                style={styles.checklistImg}
                                />
                        <Text style={styles.infoText2}>Kindly make sure your account is up to date to guarantee your order may be processed promptly</Text>
                        </View>
            </View>


            <View style={styles.paymentBtmView}>
                <SafeAreaView>
                    <ContinueBtn
                        title="Continue"
                        backgroundColor="#3353CB"
                        color="#fff"
                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                        disabled={!props.item?.id}
                        onPress={() => props.select("3")}
                    />
                </SafeAreaView>
            </View>



        </View>
    )
};

export default Payment;