import React, { useState, useEffect } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";


import { LoginHeader, OnboardinBtn } from "@Component2";
import style from "./style";
import data from "./data";
import { interestList } from "@Request2/Auth";
import { getUserDetails, cleanInterest,cleanUserDetails } from "@Store2/Auth";



const SelectCategory = (props) => {


    const offset = useSharedValue(0);


    const dispatch = useDispatch();

    const { countryCodeStatus, interestListData, interestListStatus, errors } = useSelector((state) => state.auth);
    const [renderData, setRenderData] = useState(interestListData)

    const [selected, setSelected] = useState([]);

    const [showBtn, setShowBtn] = useState(false);

    const [progress, setProgress] = useState(0);

 


    const goBack = () => props.navigation.goBack();


    useEffect(() => {

        setTimeout(() => {
            setInterval(() => {
                setProgress(0.125)
            }, 300);
        }, 800);

        dispatch(cleanInterest());

    }, [])


    useEffect(() => {

        dispatch(interestList());

    }, [])

    const selectCategory = (id) => {
        if (selected.includes(id)) {
            setSelected(prevIds => prevIds.filter(itemId => itemId !== id));
        } else {
            setSelected(prevIds => [...prevIds, id]);
        }
        bounce()
        console.log("this is the selected", selected)
        setShowBtn(true)
      };



    // const selectCategory = (id) =>{

    //         let renderData=[...data];
          

    //         for(let dataa of renderData){
               
    //           if(dataa.id == id){
    //             console.log('the response inside', dataa.id)
    //             // console.log('the response', dataa.selected)
    //             dataa.selected=(dataa.selected == null ) ? true : !dataa.selected;
    //             break;
    //           }
    //         }
           
           
    //         setSelected({renderData})
    //         console.log('the response all', selected)
    //      bounce()
    // }


    console.log("ytherwer", data)



    const bounce = () => {

        offset.value = withSpring(0.1, {}, (finished) => {
            if (finished) {
                offset.value = withSpring(0)
            }

        });
    }


    console.log("this is the list", interestListData)


    const nextScreen = () => {
  console.log('the response',selected)
        dispatch(getUserDetails({ interest: selected}));

        props.navigation.navigate("SelectVector");

    };


    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withSpring(offset.value * 255),
                },
            ],
        };
    });



    const RenderItem = ({ item , index}) => {

        return (
        
                <TouchableOpacity
                    style={[style.renderItemContainer,
                    selected.includes(item.id) && style.activeRenderItemContainer]}
                    onPress={() => selectCategory(item.id)}>

                    <View style={style.categoryTitleView}>
                        { selected.includes(item.id) ?
                        <Text style={style.categoryTitleWhite}>{item.name}</Text>
                        :
                        <Text style={style.categoryTitle}>{item.display_name}</Text>
                        }
                    </View>

                    <View>
                        {
                            selected.includes(item.id)  ?
                           
                            <Icon name="radio-button-on" size={22} color="#fff" />
                           
                            :
                            <Icon name="radio-button-off" size={22} color="#C2C5DD" />
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
                 percentage={'70%'}
                />
            </LoginHeader>

            <View style={style.signupPinTitleContainer}>

              

                 <View>
                 <Text style={style.signupTitle}>Welcome Choose your interests</Text>

             
                        <View style={style.listContainerVector}>

                        <FlatList
                            data={renderData}
                            columnWrapperStyle= {{justifyContent:'space-between',flexDirection:'row',}}
                            showsVerticalScrollIndicator={false}
                            numColumns = {2}
                            vertical
                            renderItem={RenderItem}
                            keyExtractor={item => item.id}
                            extraData={selected}
                        />

                        </View>
                 </View>

                {showBtn ?
                <View style={style.continueBtnViewVector}>
                    <OnboardinBtn
                        title="CONTINUE"
                        backgroundColor="#5f9a32"
                        color="#fff"
                        disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                        disabled={!selected}
                        onPress={nextScreen}
                    />
                </View>
                :
                null
                }

            </View>

        </View>
    )
};

export default SelectCategory;