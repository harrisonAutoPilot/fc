import React, { useState, useEffect, useCallback } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { View, Text,Image, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import Config from "react-native-config";
import ProgressBar from "./ProgressBar";
import ImagePicker from 'react-native-image-crop-picker';
import { LoginHeader, OnboardinBtn } from "@Component2";
import style from "./style";
import data from "./data";

import { avartarList, registerUser } from "@Request2/Auth";
import { vectorImg } from "../../util/vectors";
import { getUserDetails, cleanAvartar } from "@Store2/Auth";
import Loader from '@Screen2/loader';


const SelectVector = (props) => {
    const dispatch = useDispatch();

    const { countryCodeStatus, avartarListData, avartarListStatus, errors, user,registerStatus } = useSelector((state) => state.auth);
  
    const offset = useSharedValue(0);
    const [myUpload, setMyUpload] = useState({});
    const [uploadIsHere, setUploadIsHere] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [loader, setLoader] = useState(false);

    const [errMsg, setErrMsg] = useState(null);

    const [showBtn, setShowBtn] = useState(false);

    const [selected, setSelected] = useState([]);

    const [progress, setProgress] = useState(0);



    const goBack = () => props.navigation.goBack();

    const uploadPhoto = () => {
        ImagePicker.openPicker({ 
            multiple: false,
             width: 1024,
              height: 1024,
            includeBase64: false,
            mediaType: 'photo',
            cropping: true,
          })
            .then(image => {
             
              setUploadIsHere(true)
                  const uri =
                  Platform.OS === 'android'
                    ? image.path
                    : image.path.replace('file:///', '');
                const filename = image.path.split('/').pop();
    
                const match = /\.(\w+)$/.exec(filename);
                const ext = match?.[1];
                setMyUpload(uri)
              

              const transform =  {
                  name: (Math.random() + 1).toString(12).substring(7),
                  type: Platform.OS === "ios" ? image[0].type : "image/jpeg",
                  uri: Platform.OS === "ios" ? image[0].uri.replace("file://", "") : image[0].uri,
                };
    
                formData.append('photo', transform);
                setPhoto(formData.append('photo', transform))
                  return (transform)
                  // setMyUpload(transform)
               
              
            })
            .catch(err => {
              console.log(err);
            });
      };


    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(0.125)
            }, 300);
        }, 800);

        dispatch(avartarList());

    }, [])

    const selectCategory = (id) => {
        if(id == '1'){
            uploadPhoto() 
            setSelected(id);
        }

        setSelected(id);
        setShowBtn(true)
        // bounce()

console.log("the id", selected)
    };

  

    console.log("the list", avartarListData)
  

    const bounce = () => {

        offset.value = withSpring(0.1, {}, (finished) => {
            if (finished) {
                offset.value = withSpring(0)
            }

        });
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };



    const nextScreen = () => {
        const values = { ...user, avatar_id: selected  }
        console.log("the values", values)

        dispatch(registerUser(values));

        // props.navigation.navigate("FormDetails");

    };

    const waitTime = useCallback(() => {

        wait(5000).then(() => {

            setErrMsg(null);

    


        });

    }, []);


    useEffect(() => {

        if (registerStatus === "failed") {

            setLoader(false)

            setErrMsg(errors?.msg);

            console.log("the final response",errors )

            waitTime();

        } else if (registerStatus === "success") {

            setLoader(false);

            // dispatch(getPhoneVerificationPin());

            console.log("it is successful")

            // navigation.navigate("SignUpSuccess");

        }

    }, [registerStatus]);



    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withSpring(offset.value * 255),
                },
            ],
        };
    });

    console.log("the url",Config)

    const RenderItem = ({ item }) => {

        return (
          
                <TouchableOpacity
                    style={[style.renderItemContainerV,
                    selected == item.id && style.activeRenderItemContainerV]}
                    onPress={() => selectCategory(item.id)}>

                    <View style={style.categoryTitleViewVector}>
                        { item.id  == '1' ?
                    
                        <View>
                             {uploadIsHere ?
                               
                                    
                                <Image source={{ uri: `${myUpload}` }}   style={{ width:50,height:50, marginBottom:10, resizeMode:'cover', borderRadius:6}} />
                          
                                :
                                <Image
                                source={{ uri: `${Config.API_URL}${item?.url}`}}
                                    style={{ width:50,height:50}}
                                    />
                                }
                         
                          <Text style={style.categoryTitleSm}>Select from phone</Text>
                        </View>
                        :
                      <Image
                      source={{ uri: `${Config.API_URL}${item?.url}`}}
                        style={{ width:80,height:80,borderRadius:200}}
                         
                        />
                        }
                      
                    </View>

                    <View>
                        {
                            selected !== item.id
                                ?
                                <Icon name="radio-button-off" size={22} color="#C2C5DD" />
                                :
                                <Icon name="radio-button-on" size={22} color="#5f9a32" />
                        }

                    </View>
                </TouchableOpacity>
 

        )

    }

    return (
        <View style={style.mainContainer}>

            <LoginHeader
                name="arrow-back"
                color="#1B1B1F"
                onPress={goBack} >
               <ProgressBar
                 percentage={'98%'}
                />
            </LoginHeader>

            <View style={style.signupPinTitleContainer}>

            <Text style={style.signupTitleV}>Please select any Faceless Vector Image to help you stay anonymous</Text>

                <View style={style.listContainerVector1}>

                    <FlatList
                        data={avartarListData}
                        columnWrapperStyle= {{justifyContent:'space-between',flexDirection:'row'}}
                        showsVerticalScrollIndicator={false}
                        numColumns = {2}
                        vertical
                        renderItem={RenderItem}
                        keyExtractor={item => item.id}
                        // extraData={selected}
                    />
               
                </View>
                {showBtn ?
                <View style={style.continueBtnViewVector1}>
                    <OnboardinBtn
                        title="SUBMIT"
                        backgroundColor="#5f9a32"
                        color="#fff"
                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                        // disabled={!selected}
                        onPress={nextScreen}
                    />
                </View>
                    :
                null
                }


                
                <Loader isVisible={loader} />
            </View>

        </View>
    )
};

export default SelectVector;