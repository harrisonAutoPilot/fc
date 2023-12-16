import React, { useState, useRef,useCallback } from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,

  } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./style";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { InputField, FormikValidator,PreviousBtn,ProceedBtn} from "@Component2";
import { addStoreSchema2 } from "@Helper2/Schema";
import { getState } from '@Request2/State';
import { cleanState } from '@Store2/State';
import { cleanCheckAddress } from '@Store2/Auth';
import { checkAddressDetails } from '@Request2/Auth';
import AddressBottomSheet from "./component/bottomSheetAddress";
import CountryCodeBottomSheet from '@Screen2/countryCodeBottomSheet';
import CountryCodeDropdown from '@Screen2/login/phoneNumber/CountryCodeDropdown';
import Loader from '@Screen2/loader';
import disable from "@Helper2/disable";

import ConfirmModal from '../Registration/confirmModal';


const Step2 = (props) => {
    const dispatch = useDispatch();
    const registerState4 = props.details;
    const {submit, redirect} = props;
    const dismissKeyboard = () => Keyboard.dismiss();

    const bottomSheetRef = useRef(null);

    const { states, stateStatus } = useSelector(state => state.state);

    const bottomSheetCode = useRef(null);

    const addressBottomSheet = useRef(null);



  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [showAddressModal, setShowAddressModal] = useState(false);


  const [data, setData] = useState([]);

  const [myValues, setMyValues] = useState({})

  const [title, setTitle] = useState(null);

  const [keys, setKeys] = useState(null);

  const [lgaList , setLgaList] = useState(false)

  const [stateId, setStateId] = useState(null);

  const [lgaId, setLgaId] = useState([]);

  const [err, setErr] = useState(null);

  const [getProps, setProps] = useState(null);

  const [propsname, setPropsName] = useState(null);

  const [loader, setLoader] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  const [addressProps, setAddressProps] = useState(null);

  const [addressNotFound, setAddressNotFound] = useState(false);


  const closeModal = () => setShowConfirmModal(false);




      const waitTime = useCallback(() => {
    
        wait(5000).then(() => {
    
            setErrMsg(null);
    
            // dispatch(cleanCheckEmail())
    
        });
    
    }, []);


    const confirmProcess = () => {
      setShowConfirmModal(true);
    }
    
    
    const wait = timeout => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    };


      const checkAddressExists = (data) => {

        console.log("the data", data)
    
        dispatch(cleanCheckAddress());
    
        setErrMsg(null);
    
        setLoader(true);
    
        dispatch(checkAddressDetails({ address: data?.store_address }))
          .unwrap()
          .then((suc) => {
    
              submit(data,myValues?.store_address, stateId,lgaId);
    
          }).catch((err) => {
            // handle error here
            setLoader(false);
    
            setErrMsg(err?.msg);
            console.log("the errror", err?.msg)
    
            waitTime()
          })
      };
    
      const showAddressNotFound = () => {
    
        setAddressNotFound(true);
    
        closeAddressBottomsheet();
    
      };
    
      const showAddressFound = (props) => {
    
        props.setFieldValue("address", myValues?.store_address)
        // props.setFieldValue("state_id", stateId);
        // props.setFieldValue("lgaid", lgaId);
    
        setAddressNotFound(false);
        props.setFieldValue("address", myValues?.store_address)
      }
    
      // console.log("the address state and lga", stateId, lgaId) 
    
      const showAddressBottomsheet = (props) => {
    
        setAddressProps(props)
    
        addressBottomSheet.current?.present();
        setShowAddressModal(true)
    
      };
    

      const proceed = () => {
      
        setShowConfirmModal(false);
    
        checkAddressExists(myValues)
      };
    
    
      const closeAddressBottomsheet = () => {

        dismissKeyboard()
    
        setShowAddressModal(false)

    
      };
    
    
      const close = () => {
    
        wait(100).then(() => {

          closeAddressBottomsheet();
    
        });

      
    
      };

      const showDropDownBottomSheet = () => {
        bottomSheetCode.current?.present();
      };
    
      const getStateDetails = async (prop, name) => {
    
        prop.setFieldValue("lga_id", "");
    
        setErr(null);
    
        showDropDownBottomSheet();
    
        setData([]);
    
        setTitle("Select State");
    
        setKeys(2);
    
        setProps(prop);
    
        setPropsName(name);
    
        if (stateStatus !== "success" && stateStatus !== "pending") {
    
          const response = await dispatch(getState());
    
          setData(response.payload);
          setLgaList(true)
    
        } else {
    
          setData(states)
        
         
    
        }
        // prop.setFieldValue("state_id", stateId);
      };
    
    
      const getLgaDetails = (prop, name) => {
   
        showDropDownBottomSheet();
    
        setData([]);
    
        setTitle("Select Lga");
    
        setKeys(3);
    
        setProps(prop);
    
        setPropsName(name);
    
    
        if (states.length) {
         
          const response = states.filter(lga => {
    
            return lga.name === prop.values.state_id
    
          });
    
          setData(response[0]?.lgas);
         
        }
        // prop.setFieldValue("lga_id", lgaId);
      };
    
    
      const closeDropDownBottomSheet = () => {
    
        if (stateStatus === "failed") {
    
          dispatch(cleanState());
    
        }
    
        bottomSheetCode?.current?.close();
    
      };
    
 
    

    return (
       

      
                <View style={styles.bottomCover1}>
               
                        <TouchableWithoutFeedback onPress={dismissKeyboard}>
                            <View style={{justifyContent:'space-between'}}>

                                <View >
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <View >
                                   <FormikValidator
                                        initialValues={registerState4}
                                        validationSchema={addStoreSchema2}
                                        onSubmit={(values,stateId, lgaId) => {
                                            setMyValues(values);
                                            // confirmProcess(values);
                                            proceed(values)
                                        }}
                                        
                                    >
                                        {props => (
                                        <View style={styles.formContainerStep2}>

                                                <View>
                                                <View style={styles.formFlexInside}>
                                              <View style={styles.formInputFieldFlex}>
                                                    <View style={styles.inputContainer}>
                                                        <InputField
                                                        title="Store Name"
                                                        placeholder="Store Name"
                                                        placeholderTextColor="#757575"
                                                        name="store_name"
                                                        {...props}
                                                        width="100%"
                                                        />
                                                    </View>

                                                    <View style={styles.inputContainer}>
                                                        <CountryCodeDropdown
                                                        width="100%"
                                                        placeholder="State"
                                                        name="state_id"
                                                        {...props}
                                                        title="State"
                                                        
                                                        dropDown={() => {
                                                            getStateDetails(props, "state_id")
                                                           
                                                        }}
                                                        />
                                                    </View>
                                                    {
                                                        lgaList === false ?
                                                        null
                                                        :
                                                        <View style={styles.inputContainer}>
                                                            <CountryCodeDropdown
                                                            width="100%"
                                                            title="Local Government Area"
                                                            placeholder="Local Government Area"
                                                            name="lga_id"
                                                            {...props}
                                                            dropDown={() => {getLgaDetails(props, "lga_id")
                                                           
                                                          }}

                                                            />
                                                        </View>
                                                    }

                                                    <View>

                                                        {addressNotFound ?
                                                        <>
                                                            <View style={styles.countryCodeView}>

                                                            <InputField
                                                                title="Store Address"
                                                                placeholder="Store Address"
                                                                placeholderTextColor="#757575"
                                                                name="address"
                                                                {...props}
                                                                width="100%"
                                                            />

                                                            </View>
                                                            <TouchableOpacity style={styles.addressFoundView} onPress={() => showAddressFound(props)}>
                                                            <Text style={styles.labelTitle}>Search for Address?</Text>
                                                            </TouchableOpacity>
                                                        </>

                                                        :

                                                        <View style={styles.inputHolder}>
                                                            <View style={styles.labelView}>
                                                            <Text style={styles.label}>Store Address</Text>
                                                            </View>
                                                            <View style={styles.getAddressView}>
                                                            <Text style={styles.labelTitleAddress}>{props.values.store_address}</Text>
                                                            <TouchableOpacity style={styles.getAddress} onPress={() => showAddressBottomsheet(props)}>
                                                                <Text style={styles.getAddressText}>Get address</Text>
                                                            </TouchableOpacity>
                                                            </View>
                                                        </View>

                                                        }
                                                    </View>
                                  
                                                    </View>
                                                    <View style={styles.btnDoubleCover}>
                                                      <PreviousBtn
                                                            title="Previous"
                                                            onPress={redirect} 
                                                            backgroundColor="#3353CB"
                                                            color="#fff"   
                                                            />
                                                        <ProceedBtn
                                                            title="Next"
                                                            onPress={props.handleSubmit} 
                                                            backgroundColor="#3353CB"
                                                            color="#fff"   
                                                            />
                                                     </View>
                                                </View>
                                                
                                                </View>

                                             {errMsg && <View style={styles.toastCover}>
                                              <View style={styles.errView} >
                                                <MIcon name="error-outline" size={22} color="#fff" />
                                                <Text style={styles.errText}>{errMsg}</Text>
                                              </View>

                                            </View>}

                                        </View>
                                        )}
                                    </FormikValidator>
                                    </View>
                                </TouchableWithoutFeedback>
                                </View>
                    
                      
                            </View>

                        </TouchableWithoutFeedback>
                        
                      
                        <CountryCodeBottomSheet
                            bottomSheetRef={bottomSheetCode}
                            closeBottomSheet={closeDropDownBottomSheet}
                            name={title}
                            data={data}
                            status={stateStatus}
                            keys={keys}
                            itemKey="name"
                            err={err}
                            ids={keys == 3 ? setLgaId : setStateId}
                            
                            getProps={getProps}
                            propsname={propsname}
                        />

                    <ConfirmModal
                            visibleModal={showConfirmModal}
                            returnBack={closeModal}
                            proceed={proceed}
                          />
                        <AddressBottomSheet
                            // bottomSheetRef={addressBottomSheet}
                            addressModal={showAddressModal}
                            closeBottomSheet={closeAddressBottomsheet}
                            prop={addressProps}
                            returnBack={closeAddressBottomsheet}
                            setAddressNotFound={showAddressNotFound}
                            wait={close}
                        /> 
                <Loader isVisible={loader} />
                </View>
             
     

      
                       
              
           
           
       
    )
};

export default Step2;