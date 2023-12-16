import React, { useState, useEffect } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import ProgressBar from "./ProgressBar";


import styles from "./style";
import { LoginHeader, InputField, FormikValidator, OnboardinBtn } from "@Component2";
import { nameSignupSchema } from "@Helper2/Schema";
import { getUserDetails } from "@Store2/Auth";
import disable from "@Helper2/disable";
import { ScrollView } from "react-native-gesture-handler";


const FormDetails = ({ navigation }) => {


    const dispatch = useDispatch();


    const [progress, setProgress] = useState(25);


    const goBack = () => navigation.goBack();


    const signupState = {

        firstname: "",
        lastname: "",
        other_name:""

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

    console.log("the other name", data)
        dispatch(getUserDetails({ name: `${data.firstname} ${data.lastname}` }));

        navigation.navigate("FormPhoneDetails");

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
                                    validationSchema={nameSignupSchema}
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
                                                        name="firstname"
                                                        {...props}
                                                        width="100%"
                                                    />
                                             
                                                <InputField
                                                    title="Email"
                                                    placeholder="ebube@gmail.com"
                                                    placeholderTextColor="#757575"
                                                    name="lastname"
                                                    {...props}
                                                    width="100%"
                                                />
                                                 <InputField
                                                    title="Password"
                                                    placeholder=""
                                                    placeholderTextColor="#757575"
                                                    name="other_name"
                                                    {...props}
                                                    width="100%"
                                                />
                                                 <InputField
                                                    title="Confirm Password"
                                                    placeholder=""
                                                    placeholderTextColor="#757575"
                                                    name="other_name"
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