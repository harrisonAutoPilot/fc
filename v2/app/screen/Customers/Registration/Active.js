import React, { useEffect, useState, useCallback } from "react";
import { View, Text,TouchableOpacity, FlatList, Keyboard, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native'
import styles from "./style";
import { Btn, FormikValidator, InputField, SuccessMsgViewTwo } from "@Component/index";
import { profileSchema } from "@Helper/schema";
import { updateUserDetails, getUser } from "@Request2/auth";
import { cleanup } from "@Store2/auth";
import Loader from "@Screen2/loader";
import data from './data'
// import { NavigationContainer } from "@react-navigation/native";


const Active = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const dismissKeyboard = () => Keyboard.dismiss();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        dispatch(cleanup())
    }, []);

    const { user, errors, update } = useSelector((state) => state.auth);

    const navigation = useNavigation();

    const profileState = {
        firstname: user?.name ? user.name.substr(0, user.name.indexOf(' ')) : '',
        surname: user?.name ? user.name.substr(user.name.indexOf(' ') + 1) : "",
    };
    const submit = async (values) => {
        const { firstname, surname } = values;
        const newValue = { name: `${firstname} ${surname}`, id: user.id };
        setLoader(true)
        await dispatch(updateUserDetails(newValue))
    };
    // const custom_details = () => props.navigation.navigate("CustomerDetails");

    const custom_details = () => navigation.navigate("CustomerDetails");

    const redirectToSort = () => {
      
    };
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const waitTime = useCallback((errmsg, sucmsg) => {
        wait(1000).then(() => {
            setLoader(false);
            setErrMsg(errmsg);
            setSuccessMsg(sucmsg);
            if (sucmsg) {
                Toast.show({
                    type: 'tomatoToast',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            } else {
                Toast.show({
                    type: 'error',
                    visibilityTime: 5000,
                    autoHide: true,
                    position: 'top',
                    topOffset: 0
                })
            }

        });
        wait(4000).then(() => { dispatch(cleanup()) })
    }, []);

    const toastConfig = {
        error: () => (
            <View style={[globalStyles.errMainView]}>
                <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
            </View>
        ),

        tomatoToast: () => (
            <SuccessMsgViewTwo title={successMsg} />
        )
    };

    useEffect(() => {
        if (update === "failed") {
            setSuccessMsg("");
            waitTime(errors?.msg);
        } else if (update === "success") {
            dispatch(getUser());
            waitTime("", "User Updated");
        } else {
            setSuccessMsg("");
            setErrMsg("");
        }
    }, [update]);

    const ListView = ({ item}) => {
        // const { navigate } = this.props.navigation;
        return (
        <TouchableOpacity onPress={custom_details}>
            <View style={styles.cardCover}>
                  <View style={styles.cardTop}>
                      <View><Text style={styles.nameTextActive}>{item.name}</Text></View>
                      <View style={styles.actCover}><Text style={styles.actText}>Active</Text></View>
                  </View>
                  <View style={styles.cardMid}>
                      <View><Text style={styles.phoneText}>{item.phone}</Text></View>
                      
                  </View>
                  <View style={styles.cardDown}>
                    <View style={styles.cardDownInner}><Text style={styles.phoneText}>{item.address}</Text></View>
                       
                   </View>
               </View>
        </TouchableOpacity>
        )
    };


    return (
        <View style={styles.container}>
       
           <View style={styles.bottomCover}>

           <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={ListEmptyComponent}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 50 }} />}
                    columnWrapperStyle={styles.column}


                   
                />     

               
          
               
           
           </View>


           <Loader isVisible={loader} />

       </View>
    )
};

export default Active;