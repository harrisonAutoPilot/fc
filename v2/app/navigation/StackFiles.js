import React from "react";
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from "@react-navigation/stack";


import DealDetail from "@Screen2/ProductDetails/DealDetail";
// import Search from "@Screen2/Search";
import SearchProducts from "@Screen2/SearchProducts";
import BrowseProduct from "@Screen2/browseItemsProducts";
import Cart from "@Screen2/Cart";
import CheckOut from "@Screen2/Checkout";
// import ConfirmCheckOut from "@Screen2/ConfirmCheckOut";
// import Filter from "@Screen2/Filter";
// import TransactionDetail from "@Screen2/TransactionDetail";
import CustomerDetails from "@Screen2/Customers/AccountDetails";
import CustomerRegistration from "@Screen2/Customers/Registration";
// import CheckoutSuccess from "@Screen2/CheckoutSuccess";
import CustomerSuccess from "@Screen2/CustomerSuccess";
import RegConfirm from "@Screen2/Customers/Registration/RegConfirm";
import LicencePreview from "@Screen2/Customers/Registration/LicencePreview"
import StorePreview from "@Screen2/Customers/Registration/StorePreview"
import SoftUpdate from "@Screen2/SoftUpdate";
// import InCompleteOrderDetails from "@Screen2/IncompleteOrderDetails";
// import GenProducts from "@Screen2/GenProducts"
// import Review from "@Screen2/order/review";
// import ViewReview from "@Screen2/order/viewReview"
// import MyStore from "@Screen2/Customers/myStore";
// import StoreSuccess from "@Screen2/myStore/addStore/storeSuccess"
// import StoreDetails from "@Screen2/myStore/storeDetails"
// import AddStore from "@Screen2/myStore/addStore";


// The new screens
import ActivityReport from "@Screen2/Home/ActivityReport";
// import Notification from '@Screen2/Notification';
// import NotificationDetail from '@Screen2/Notification/notificationDetails';

// import LogReport from '@Screen2/logReport'
// import Contact from '@Screen2/logReport/contact'
// import CallHistory from '@Screen2/logReport/callHistory'
// import CallDetails from '@Screen2/logReport/callDetails'

import TabHomeNavigator from './Tab';




import SplashScreen from '@Screen2/Splash';
import Onboarding from '@Screen2/onboarding';
import Login from '@Screen2/login/phoneNumber';
import Pin from '@Screen2/login/pin';
import ForgotPin from '@Screen2/login/resetPin';
import ResetPwdSuccess from '@Screen2/login/resetPin/resetPinSuccess';
import SelectCategorySignUp from '@Screen2/signup/SelectCategory';
import FormDetailsSignUp from '@Screen2/signup/FormDetails';
import FormEmailDetailsSignUp from '@Screen2/signup/FormEmailDetails';
import FormPhoneDetailsSignUp from '@Screen2/signup/FormPhoneDetails';
import FormStateDetailsSignUp from '@Screen2/signup/FormStateDetails';
import FormPinDetailsSignUp from '@Screen2/signup/FormPinDetails';
import FormImageUploadSignUp from '@Screen2/signup/FormImageUpload';
import FormConfirmPinDetailsSignUp from '@Screen2/signup/FormConfirmPinDetails';
import PhoneVerification from '@Screen2/signup/PhoneVerification';
import ContactSupport from "@Screen2/contactSupport";
import AwaitVerification from '@Screen2/signup/awaitVerification';
import SignUpSuccess from '@Screen2/signup/signUpSuccess';
import Settings from "@Screen2/settings";
// import ContactManager from "@Screen2/contactManager";
// import SearchCart from "@Screen2/cartSearch"

// import OrderDetails from "@Screen2/orderDetails";
// import OrderStatus from "@Screen2/order/orderStatus";
// // import Deals from "@Screen2/products/Deals";
// import Order from "@Screen2/order";

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SplashStack = createStackNavigator();
const SoftUpdateStack = createStackNavigator();
const PhoneVerificationStack = createStackNavigator();
const AdminVerificationStack = createStackNavigator();



export const SoftUpdateNavigator = () => {
    return (
        <SoftUpdateStack.Group
            screenOptions={{
                presentation: 'modal',
            }}>
            <SoftUpdateStack.Screen name="SoftUpdate" component={SoftUpdate} />
        </SoftUpdateStack.Group>
    )
};


export const PhoneVerificationStackNavigator = () => {
    return (
        <PhoneVerificationStack.Group>
            <PhoneVerificationStack.Screen name="PhoneVerification" component={PhoneVerification} options={{ gestureEnabled: false, gestureDirection: "horizontal" }} />
        </PhoneVerificationStack.Group>

    )
};

export const SplashStackNavigator = () => {
    return (
        <SplashStack.Group >
            <SplashStack.Screen name="Splash" component={SplashScreen} />
        </SplashStack.Group>
    )
};

export const RootStackNavigator = () => {

    return (
        <>
            <RootStack.Group>
                <RootStack.Screen name="Root" component={TabHomeNavigator} />
                <RootStack.Screen name="AwaitVerification" component={ AwaitVerification} />
            </RootStack.Group>
            {/* <RootStack.Group>
                <RootStack.Screen name="ActivityReport" component={ActivityReport} />
            </RootStack.Group> */}

            {/* <RootStack.Group>
                <RootStack.Screen name="Settings" component={Settings} />
                <RootStack.Screen name="LogReport" component={LogReport} />
                <RootStack.Screen name="Contact" component={Contact} />
                <RootStack.Screen name="CallHistory" component={CallHistory} />
                <RootStack.Screen name="CallDetails" component={CallDetails} />
                <RootStack.Screen name="ContactManager" component={ContactManager} />

            </RootStack.Group>

            <RootStack.Group>

                <RootStack.Screen name="StoreSuccess" component={StoreSuccess} />
            </RootStack.Group> */}

              {/* <RootStack.Group>
                <RootStack.Screen name="Order" component={Order} />
                <RootStack.Screen name="OrderDetails" component={OrderDetails} />
                <RootStack.Screen name="OrderStatus" component={OrderStatus}
                 options={{
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                 }}
               />
                <RootStack.Screen name="Review" component={Review}
                    options={{
                        gestureDirection: 'vertical',
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    }}
                /> */}
                {/* <RootStack.Screen name="ViewReview" component={ViewReview}
                    options={{
                        gestureDirection: 'vertical',
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    }}
                /> */}
         

            {/* <RootStack.Group>
                <RootStack.Screen name="IncompleteOrderDetails" component={InCompleteOrderDetails} />
            </RootStack.Group> */}

            {/* <RootStack.Group>
                <RootStack.Screen name="Notification" component={Notification} />
                <RootStack.Screen name="NotificationDetail" component={NotificationDetail} />
                <RootStack.Screen name="ContactSupport" component={ContactSupport} />
                
            </RootStack.Group> */}

     

            {/* <RootStack.Group>
                <RootStack.Screen name="TransactionDetail" component={TransactionDetail} />
            </RootStack.Group> */}


           

        </>
    )
};



export const LoginStackNavigator = () => {
    return (
        <LoginStack.Group>
            <LoginStack.Screen name="Onboarding" component={Onboarding} />
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="Pin" component={Pin} />
            <LoginStack.Screen name="ForgotPin" component={ForgotPin} />
            <LoginStack.Screen name="SelectCategory" component={SelectCategorySignUp} />
            <LoginStack.Screen name="FormDetails" component={FormDetailsSignUp} />
            <LoginStack.Screen name="FormEmailDetails" component={FormEmailDetailsSignUp} />
            <LoginStack.Screen name="FormPhoneDetails" component={FormPhoneDetailsSignUp} />
            <LoginStack.Screen name="FormImageUpload" component={FormImageUploadSignUp} />
            <LoginStack.Screen name="FormPinDetails" component={FormPinDetailsSignUp} />
            <LoginStack.Screen name="FormConfirmPinDetails" component={FormConfirmPinDetailsSignUp} />
            <LoginStack.Screen name="ResetPwdSuccess" component={ResetPwdSuccess} />
            <LoginStack.Screen name="FormStateDetails" component={FormStateDetailsSignUp} />
            <LoginStack.Screen name="AwaitVerification" component={AwaitVerification} />
           
           
        </LoginStack.Group>

    )
};




