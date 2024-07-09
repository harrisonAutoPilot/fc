import React, { useState, useEffect } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";


import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import { userSignupSchema } from "@Helper2/Schema";
import { getUserDetails } from "@Store2/Auth";
import disable from "@Helper2/disable";
import CountryCodeDropdown from "./CountryCodeDropdown";
import { ScrollView } from "react-native-gesture-handler";


const FormDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const [progress, setProgress] = useState(25);

    const [add] = useState("+");
    const goBack = () => navigation.goBack();

    const [getProps, setProps] = useState(null);

    const [propsname, setPropsName] = useState(null);


    const { countryCodeStatus, countryCodeData, errors } = useSelector((state) => state.auth);

    const signupState = {

        username: "",
        email: "",
        phone:"",
        new_password:"",
        retype_password:"",
        code:"234"

    };



    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(30)
            }, 300);
        }, 800);


    }, [])


    const dismissKeyboard = () => Keyboard.dismiss();


    const submit = async (data) => {

        dispatch(getUserDetails({ username: data.username, email:data.email,  phone: `${'234'}${data.phone}`, password:data.new_password, name:'obi'  }));

        // navigation.navigate("FormPhoneDetails");
        navigation.navigate("SelectCategory")

    };


    return (

        <View style={styles.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
               
                <ProgressBar
                    percentage={'50%'}
                />
            </LoginHeader>

            <SafeAreaView>

                <View style={styles.signupTitleContainer}>

                    <Text style={styles.signupTitle}>Create a Faceless Account</Text>

                    <Text style={styles.signupDesc}>Utra Secure encryption via Toronet Blockchain</Text>


                    <View style={styles.formContainer}>

                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.formFlex}>

                                <FormikValidator
                                    style={styles.formFlex}
                                    initialValues={signupState}
                                    validationSchema={userSignupSchema}
                                    onSubmit={(values) => {
                                        submit(values)
                                    }}>

                                    {props => (

                                        <View style={styles.formFlex}>

                                            <View style={styles.formInputFieldFlex}>

                                               

                                                <InputField
                                                    title="Username"
                                                    placeholder="Unique username"
                                                    placeholderTextColor="#757575"
                                                    name="username"
                                                    {...props}
                                                    width="100%"
                                                />
                                             
                                                <InputField
                                                    title="Email"
                                                    placeholder="ebube@gmail.com"
                                                    placeholderTextColor="#757575"
                                                    name="email"
                                                    {...props}
                                                    width="100%"
                                                />
                                                 <View style={styles.inputFieldView}>

                                                    <CountryCodeDropdown
                                                        dropDown={() =>showDropDownBottomSheet(props, "code")}
                                                        width={"25%"}
                                                        {...props}
                                                        placeholder="+234"
                                                        name="code"
                                                        title="Code"
                                                        add={add}
                                                        

                                                    />

                                                    <InputField
                                                        title="Phone"
                                                        placeholder="8094XXXXXX"
                                                        placeholderTextColor="#757575"
                                                        keyboardType="number-pad"
                                                        maxLength={11}
                                                        name="phone"
                                                        {...props}
                                                        width="70%"

                                                    />

                                                    </View>
                                                 <InputField
                                                    title="PIN"
                                                    placeholder="4 DIGIT PIN"
                                                    placeholderTextColor="#757575"
                                                    name="new_password"
                                                    secureTextEntry
                                                    maxLength={4}
                                                    {...props}
                                                    width="100%"
                                                />
                                                 <InputField
                                                    title="Confirm PIN"
                                                    placeholder="4 DIGIT PIN"
                                                    secureTextEntry
                                                    maxLength={4}
                                                    placeholderTextColor="#757575"
                                                    name="retype_password"
                                                    {...props}
                                                    width="100%"
                                                />
                                            </View>

                                            <View style={styles.submitBtnContainer}>
                                                <OnboardinBtn
                                                    title="CONTINUE"
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

                         </ScrollView>
                        </TouchableWithoutFeedback>

                    </View>

                </View>

            </SafeAreaView>


        </View>

    )
};

export default FormDetails;