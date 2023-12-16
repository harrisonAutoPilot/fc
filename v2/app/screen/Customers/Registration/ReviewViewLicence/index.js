import React, { useState, useCallback, useEffect, } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from 'react-native-toast-message';

import { BtnLg } from "@Component/index";
import { NavHeader as Header } from "@Component";
import styles from './style';
import { updatePendingCustomers, registerCustomer } from "@Request2/Customer";
import { cleanup } from "@Store2/Customer";
import Loader from "@Screen2/loader";
// import ViewDocument from "@Screen2/ViewDocument"

const RegConfirm = (props) => {


    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [loader, setLoader] = useState(false);
    const [showDocument, setShowDocument] = useState(false);
    const [storeImg, setStoreIMg] = useState("");
    const details = props.route.params.data;

    const goBack = () => props.navigation.goBack();
    const storeSuccess = () => props.navigation.navigate("CustomerSuccess", { details });
    const { errors, update } = useSelector((state) => state.customer);

    const viewDoc = (img) => {
        setShowDocument(true);
        setStoreIMg(img)
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            if (sucmsg) {

                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            } else {
                setErrMsg(errmsg);
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }
        });

        wait(5000).then(() => { dispatch(cleanup()); })
    }, []);

    useEffect(() => {
        if (update === "success" && props.navigation.isFocused()) {
            setLoader(false);
            storeSuccess();
        } else if (update === "failed" && props.navigation.isFocused()) {
            setLoader(false);
            refreshView(errors?.msg, "");
            console.log("the error log", errors?.msg);
        }
        else {
            setErrMsg("");
           
        }
    }, [update]);

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView, { marginHorizontal: 20 }]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

    };

    const submit = () => {
        setLoader(true);
        if (details.key === 1) {
             dispatch(updatePendingCustomers(details))
        }
        else {
           
             dispatch(registerCustomer(details))
        }
    }



    const RenderItem = ({ item }) => (
        <TouchableOpacity style={styles.smCardCover} onPress={() => viewDoc(item.uri)}>

            <View style={styles.smCard}>
                <Image source={{ uri: item?.uri }} style={styles.smImg} />
            </View>
            <TouchableOpacity onPress={() => viewDoc(item.uri)}>
                <View>
                    <Text style={styles.viewText}>View</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    const RenderItem2 = ({ item }) => (
        <TouchableOpacity style={styles.smCardCover} onPress={() => viewDoc(item.uri)}>

            <View style={styles.smCard}>
                <Image source={{ uri: item?.uri }} style={styles.smImg} />
            </View>
            <TouchableOpacity onPress={() => viewDoc(item.uri)}>
                <View>
            <Text style={styles.viewText}>View</Text>
            </View>
            </TouchableOpacity>
        </TouchableOpacity>
    );


    return (
        <View style={styles.view}>
            <Header title="Confirm Registration" onPress={goBack} styleView={styles.body} styles={styles.headerText} />
         <View style={styles.errorCover}>
         {errMsg ? <Toast config={toastConfig} /> : null}
         </View>
            <ScrollView>
                <View style={styles.modalView}>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Full Name</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.name}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Store Name:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.store_name}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Phone:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>+{details.phone}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>Store Address:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.address}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.listCover}>
                            <View>
                                <Text style={styles.itemTitle}>User Type:</Text>
                            </View>
                            <View>
                                <Text style={styles.itemName}>{details.user_type}</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.imgCardCover}>

                    <View style={styles.licenseView}>
                        <Text style={styles.imgName}>License Image</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={details?.images}
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsHorizontalScrollIndicator={false}

                    />


                    <View style={styles.licenseView2}>
                        <Text style={styles.imgName}>Store Image</Text>
                    </View>

                    <FlatList
                        horizontal={true}
                        data={details?.images2}
                        renderItem={RenderItem2}
                        keyExtractor={item => item.id}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        showsHorizontalScrollIndicator={false}

                    />

                </View>
                
            </ScrollView>
            <View style={styles.btnCover}>
                    <BtnLg title="Confirm & Submit" onPress={submit} style={styles.submit} stylea={styles.angleImg} styles={styles.preText1} />
                </View>
            {/* <ViewDocument
                visibleDocument={showDocument}
                returnBack={() => setShowDocument(false)}
                img={storeImg}
            /> */}

            <Loader isVisible={loader} />
        </View>
    )
};

export default RegConfirm;