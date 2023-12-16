import React, { useEffect, useState,useCallback } from 'react';
import { View, Text, TextInput,Keyboard,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from "react-redux";
import globalStylesV2 from "@Helper2/globalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TransactionHeader, OnboardinBtn } from "@Component2";
import { disableAccount } from "@Request2/auth";
import {logout} from "@Store2/auth";
import {reason} from "./data"
import styles from './style';
import Loader from "@Screen2/loader";
import LogoutModal from "./logoutModal"



const CloseAccount = (props) => {

  const dispatch = useDispatch();

  const { user, disableAc , errors} = useSelector((state) => state.auth);

  const [cause, setCause] = useState("")

  const [complain, setComplain] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const [showInput, setShowInput] = useState(false)

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [loader, setLoader] = useState(false);


  const returnBack = () => {

    props.navigation.goBack();

  };

  useEffect(() => {
    if (disableAc === "success") {
      setLoader(false)
      dispatch(logout());
    } else if (disableAc === "failed") {
      setLoader(false)
      refreshView(errors?.msg)
    }
  }, [disableAc]);

  const setPropsPeriod = (id) => {
    
    setCause(id);
    if(id === "Others"){
      setShowInput(true)
    }else{
      setShowInput(false)
    }

};

const dismissKeyboard = () => Keyboard.dismiss();


const refreshView = useCallback((msg, suc) => {
  wait(1000).then(() => {
    setLoader(false)
    if (msg) {
      setErrMsg(msg);
      Toast.show({
        type: 'error',
        visibilityTime: 5000,
        autoHide: true,
        position: 'top',
        topOffset: 0
      })

    } else {
      setSuccessMsg(suc);
      Toast.show({
        type: 'tomatoToast',
        visibilityTime: 5000,
        autoHide: true,
        position: 'top',
        topOffset: 0
      })
    }
  })

  wait(4000).then(() => { 
   
  })
}, []);

const toastConfig = {

  error: () =>
  (
    <View style={[globalStylesV2.errMainViewBottom]}>
      <Text style={globalStylesV2.failedResponseText}>{errMsg}</Text>
    </View>
  ),
  
};


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const submit = () => {
  if(cause != "Others"){
    setShowLogoutModal(true)
    setCause(cause)
  } else if(cause === "Others" && complain === "" ){
    refreshView("Please share your reason with us to serve you better")
  }else{
    setShowLogoutModal(true)
    setCause(complain)
  }
}

const proceed = () => {
  setLoader(true);
  setShowLogoutModal(false)
  const disparam = {reason: cause , id:user.id};
 wait(1000).then(() => { dispatch(disableAccount(disparam))})
  
}



  const ListReason = ({ data }) => {
    return (
        data?.map(item => (

            <TouchableOpacity key={item.id} style={styles.reasonCardCover} onPress={() =>{ setPropsPeriod(item.id), setCause(item.id)}}>
                 
                {item.id == cause
                ?
                <Icon name="radio-button-checked" color="rgba(51, 83, 203, 1)" size={22} />:
              
                <Icon name="radio-button-unchecked" color="rgba(121, 116, 126, 0.16)" size={22} />
                }
            <Text style={item.id == cause ? styles.reasonCardCoverActiveListTitle:styles.reasonCardCoverTitle}>{item.type}</Text>
            </TouchableOpacity>

        ))
    )
};



  return (
    <View style={styles.container}>

      <TransactionHeader title="Close Account" onPress={returnBack} />
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.cover}>
       
    
      <View style={styles.topContainer}>
       <View style={styles.bgCover}>
       <Text style={styles.bgText}>Why are you closing your account?</Text>
       </View>
      
       <ListReason data={reason} />
      
        <View>
       {
        showInput ?
       
        <View style={styles.inputCover}>
        <TextInput
           style={styles.inputStyle}
           value={complain}
           placeholder='Please share your reason'
           placeholderTextColor={"#5A5D72"}
           onChangeText={(text) => setComplain(text)}
         />
        </View>
     
        :
        null
       }
       </View>
  
      </View>
  
        <View style={styles.btnCover}>
        <OnboardinBtn
            title="Continue"
            onPress={submit}
            backgroundColor="#3353CB"
            color="#fff"
            disabled={!cause}
          disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
          />
        </View>

      </View>
      </TouchableWithoutFeedback>
      <View style={styles.toastCover}>
        {errMsg ? <Toast config={toastConfig} /> : null}
        </View>
        <LogoutModal
          logoutModal ={showLogoutModal}
          returnBack={() => setShowLogoutModal(false)}
          proceed = {proceed}
          />
           <Loader isVisible={loader} />
    </View>
  );
};

export default CloseAccount;
