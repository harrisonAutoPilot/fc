import React, { useState, useRef,useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TextInput,
  ScrollView,
  Linking,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from "react-native-vector-icons/Ionicons";
import FIcon from "react-native-vector-icons/Feather";
import Acon from "react-native-vector-icons/AntDesign";
import Config from "react-native-config";
import {addDescription, getUser} from "@Request2/Auth";
import LottieView from "lottie-react-native";
import styles from "./style";
import {
  LoginHeader,
  InputField,
  FormikValidator,
  OnboardinBtn,
  LoginHeaderTC,
} from "@Component2";
import Loader from "@Screen2/loader";
import SelectAvartarBottomSheet from "./selectAvartarBottomSheet"
import { cleanAddDescription } from "@Store2/Auth";
import disable from "@Helper2/disable";

const EditProfileView = (props) => {
  const dispatch = useDispatch();
  const items = props.route.params.items;

  const bottomSheetCode = useRef(null);
  const bottomSheetRefAvartar = useRef();
  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
 
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(items?.description == null ? intro : items?.description)
  const goBack = () => props.navigation.goBack();

  const [err, setErr] = useState(null);

  const [iAgree, setIagree] = useState(false);

  const redirectToURL = () => {
    Linking.openURL('https://remedial.health/terms-of-service')
  }




  const { countryCodeStatus, countryCodeData, errors,status,user, descStatus, descErrors,  } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (descStatus === "failed") {
      setErr(errors.msg);
    } else {
      setErr(null);
    }
  }, [countryCodeStatus]);


  const intro = 'Hi my name is ' + `${items?.username == undefined ? user?.username : items?.username}` + ' I am here to learn, heal and have fun';



  const changeToggle = () => {
    setIagree(!iAgree);
  };

  const dismissKeyboard = () => Keyboard.dismiss();

  const getAvartar = () =>{
    bottomSheetRefAvartar.current.show();
  }

  const closeAvartarSheet = () =>{
    bottomSheetRefAvartar.current.close();
  }




const waitTime = useCallback(() => {

  wait(4000).then(() => {

      setErrMsg(null);

      dispatch(getUser());

  });

}, []);



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

useEffect(() => {

  if (descStatus === "failed") {
     
      setLoading(false)

      setErrMsg(descErrors?.msg);



      waitTime();

  } else if (descStatus === "success") {
     
      setLoading(false);

      setSuccessMsg("New Post added successfully")
      dispatch(getUser())
      setTimeout(() => {
        dispatch(cleanAddDescription());
        setNote("")
        setSuccessMsg(null)
        goBack()
      
      }, 2000);
   
   
  }

}, [descStatus]);


  const submit = () => {
   
    dispatch(addDescription({description:note}))
  };

  return (
    <View style={styles.mainContainer}>
      <LoginHeaderTC onPress={goBack} name="arrow-back" color="#1B1B1F" />

      <SafeAreaView>
        <View style={styles.loginTitleContainer}>
          <Text style={styles.loginTitle}>Edit Profile</Text>

          <View style={styles.formContainer}>
            <View style={styles.formFlex}>
              <ScrollView
                scrollEnabled={true}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
              >
               <View style={styles.profileImgCover}>
                {status == "idle" || status == "pending" ?

                  <LottieView
                  source={require("../../asset/image/userAvatar.json")}
                  autoPlay
                  loop
                  resizeMode="cover"
                  style={styles.avarImg}
                  />
                :
                <>
               <Image
                style={styles.profileImg}
                // source={items.avatar.url}
                source={{ uri: items?.user_image_url == null ? `${Config?.IMG_URL}${user?.avatar?.url}` : `${Config?.SPACE_URL}${user?.user_image_url}`}}
                resizeMode="cover"
              />
               <TouchableOpacity style={styles.camCircle} onPress={getAvartar}>
                <View>
                  <Icon name="camera-outline" size={16} color="#767680" />
                </View>
              </TouchableOpacity>
              </>
                    }
               </View>
               <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View>
               <View style={styles.inputContainer}>
                    <View style={styles.descCover}>
                    <Text style={styles.descLabel}>Description</Text>
                    </View>
                  <TextInput
                    style={styles.input}
                    placeholder='What do you want to talk about .. (type here)'
                    value={note}
                    maxLength={400}
                    onChangeText={text=>setNote(text)}
                    multiline={true}
                    numberOfLines={10}
                  />
                </View>
               <View style={styles.maxCover}>
               <Text style={styles.maxText}>Max of 400 Character</Text>
               </View>
               </View>
               </TouchableWithoutFeedback>

                  
              </ScrollView>
            </View>

            <View>
            
              <View style={styles.submitBtnContainer}>
                <OnboardinBtn
                  title="CONTINUE"
                  onPress={submit}
                  backgroundColor="#5f9a32"
                  color="#fff"
                  // disabled={!iAgree}
                  disabledBackgroundColor="rgba(51, 83, 203, 0.3)"
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <SelectAvartarBottomSheet
        bottomSheetRefAvartar={bottomSheetRefAvartar}
        // poster={apDetails}
        close={closeAvartarSheet}
      />

<Loader isVisible={loading} />

    </View>
  );
};

export default EditProfileView;
