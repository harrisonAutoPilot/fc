import React, { useState, useRef, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";


import styles from "../style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import CountryCodeDropdown from "./CountryCodeDropdown";
import { loginSchema } from "@Helper2/Schema";
import LinearGradient from 'react-native-linear-gradient';
import CountryCodeBottomSheet from "@Screen2/countryCodeBottomSheet";
import { countryCodeList, } from "@Request2/Auth";
import { cleanCountryCodeStatus } from "@Store2/Auth";
import disable from "@Helper2/disable";



const Login = (props) => {


    const dispatch = useDispatch();


    const bottomSheetCode = useRef(null);


    const goBack = () => props.navigation.goBack();

    const [err, setErr] = useState(null);

    const [add] = useState("+");

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);


    const { countryCodeStatus, countryCodeData, errors } = useSelector((state) => state.auth);


    const loginState = {
        email: "",
        code: ""
    
    };

    // console.log("the code", countryCodeData)


    useEffect(() => {
        if(countryCodeStatus === "failed"){
            setErr(errors.msg)
        }else {
            setErr(null)
        }

    },[countryCodeStatus])


    const showDropDownBottomSheet = async (prop, name) => {

        setProps(prop);

        setPropsName(name);

        bottomSheetCode.current?.present();

        if (countryCodeStatus !== "success") {
            // console.log("did it get here", countryCodeStatus)
                dispatch(countryCodeList());

        }

    };


    const closeDropDownBottomSheet = () => {

        if(countryCodeStatus === "failed"){
            dispatch(cleanCountryCodeStatus());
        }

        bottomSheetCode.current?.close();
    }


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {
        const newData = { email: data.email }
      
        props.navigation.navigate("Pin", { data: newData });

    };


    const redirectToForgotPin = () => props.navigation.navigate("ForgotPin");


    return (

       
  <LinearGradient
      colors={['#c1dfc4','#ffffff']}
      start={{ x: 0, y: 0}}
      end={{ x: 0, y: 1}}
      style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" backgroundColor='#c1dfc4' hidden={true} />
 <View >
            <LoginHeader
                onPress={goBack}
                name="arrow-back"
                color="#1B1B1F"
            />

            <SafeAreaView>

            <View style={styles.loginTitleContainer}>

                <Text style={styles.loginTitle}>Log In to your account</Text>

                <Text style={styles.loginDesc}>Enter your email address to Log In</Text>

                <View style={styles.formContainer}>

                    <TouchableWithoutFeedback onPress={dismissKeyboard}>

                        <View style={styles.formFlex}>

                            <FormikValidator
                                style={styles.formFlex}
                                initialValues={loginState}
                                validationSchema={loginSchema}
                                onSubmit={(values) => {
                                    submit(values)
                                }}>

                                {props => (

                                    <View style={styles.formFlex}>

                                        <View style={styles.formInputFieldFlex}>

                                            <View style={styles.inputFieldView}>

                                              <InputField
                                                    title="Email"
                                                    placeholder="johndoe@gmail.com"
                                                    placeholderTextColor="#757575"
                                                    name="email"
                                                    labelType="team"
                                                    {...props}
                                                    width="100%"
                                                />

                                            </View>

                                            <TouchableOpacity style={styles.forgotNumberView} onPress={redirectToForgotPin}>
                                                <Text style={styles.forgotNumberTitle}>Forgot PIN?</Text>
                                            </TouchableOpacity>

                                        </View>

                                        <View style={styles.submitBtnContainer}>
                                       
                                            <OnboardinBtn
                                                title="NEXT"
                                                onPress={props.handleSubmit}
                                                backgroundColor="#5f9a32"
                                                color="#fff"
                                                disabled={disable(props)}
                                                disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                                            />
                                            </View>
                                     
                                    </View>
                                )}

                            </FormikValidator>

                        </View>


                    </TouchableWithoutFeedback>

                </View>

            </View>
            </SafeAreaView>


            <CountryCodeBottomSheet
                bottomSheetRef={bottomSheetCode}
                closeBottomSheet={closeDropDownBottomSheet}
                data={countryCodeData}
                name="Select Country Code"
                status={countryCodeStatus}
                keys={1}
                itemKey="dial_code"
                err={err}
                getProps={getProps}
                propsname={propsname}

            />
  
        </View>
        </LinearGradient>

    )
};

export default Login;