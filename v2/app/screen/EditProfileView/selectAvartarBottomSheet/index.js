import 'react-native-gesture-handler';
import React, {useState,useEffect, useRef} from "react";
import { View,Image, Text,TextInput,FlatList, TouchableOpacity} from "react-native";
import { Calendar } from 'react-native-calendars';
import BottomSheet from "react-native-gesture-bottom-sheet";
import Config from "react-native-config";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Acon from "react-native-vector-icons/MaterialIcons";
import styles from './style'
import { avartarList,getUser,registerUser,avartarUpdate,updateUserImage } from "@Request2/Auth";
import { vectorImg } from "../../util/vectors";
import { getUserDetails, cleanAvartar,cleanAvartarUpdate,cleanUserDetails } from "@Store2/Auth";
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

const SelectAvartarBottomSheet = (props) => {
    const dispatch = useDispatch();
    const bottomSheetCalendar = useRef(null);
    const { countryCodeStatus, avartarListData, avartarListStatus,avartarUpdateErrors,avartarUpdateStatus, update, errors } = useSelector((state) => state.auth);

    const [myUpload, setMyUpload] = useState({});
    const [uploadIsHere, setUploadIsHere] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [showBtn, setShowBtn] = useState(false);
    const item = props.poster;
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [showNote, setShowNote] = useState(false)
    const [toDate, setToDate] = useState("")
    const [displayFrom, setDisplayFrom] = useState(true)
    const [displayTo, setDisplayTo] = useState(false)
    const [note, setNote] = useState("")
    const [selected, setSelected] = useState([]);

    





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
          // setPostType("image")
          setUploadIsHere(true)
       
                    
            const uri =
            Platform.OS === 'android'
              ? image.path
              : image.path.replace('file:///', '');
          const filename = image.path.split('/').pop();
          const match = /\.(\w+)$/.exec(filename);
          const ext = match?.[1];
          const imageFile = {
            uri,
            name: `image.${ext}`,
            type: image.mime,
          };

         
           setMyUpload(imageFile.uri)
         
          //  setMediaData(imageFile)
       
           const values = {file: imageFile}
          dispatch(updateUserImage(values))
           return (imageFile)

       
            
          
        })
        .catch(err => {
          console.log(err);
        });
    };

   
     


    useEffect(() => {

        dispatch(avartarList());

    }, [])

    const selectCategory = (id) => {
      // console.log("i am here odimnobi")
        if(id == '1'){
            uploadPhoto() 
            setSelected(id);

        }else{
          console.log('this is the cicked btn')
          const data = {avatar_id:id}
          dispatch(avartarUpdate(data))
        }

    };

  

    useEffect(() => {
      if (avartarUpdateStatus === "success") {
          console.log("this is the success")
        dispatch(cleanAvartarUpdate());
  
        dispatch(getUser());

        props.close()
  
      } else if (avartarUpdateStatus === "failed") {
  
        // refreshView(errors?.msg)

        // console.log("this is the error",avartarUpdateErrors)
  
      }
    }, [avartarUpdateStatus]);


    useEffect(() => {
      if (update === "success") {
          console.log("this is the success")
        dispatch(cleanUserDetails());
  
        dispatch(getUser());

        props.close()
  
      } else if (update === "failed") {
  
        // refreshView(errors?.msg)

        // console.log("this is the error",errors)
  
      }
    }, [update]);



  






    const setPropsPeriod = (id) => {
        console.log("the period ...", id)
        if(id == 'last_3_months'){
          
           bottomSheetCalendar.current?.show();
           const date = {startDate:startDate, endDate: endDate}
           console.log("just to know the start and end date", date)
           props.setPeriod(date && date);
           props.setEnd(endDate)
           props.setStart(startDate)
        }else{
            props.setPeriod(id);
            setStartDate("")
            setEndDate("")
            console.log("just to know the start and end date", id)
        }  

    };




    const RenderItem = ({ item }) => {

      return (
        
              <TouchableOpacity
                  style={[styles.renderItemContainerV,
                  selected == item.id && styles.activeRenderItemContainerV]}
                  onPress={() => selectCategory(item.id)}>

                  <View style={styles.categoryTitleViewVector}>
                      { item.id  == '1' ?
                  
                      <View>
                           {uploadIsHere ?
                             
                                  
                            <View>
                                  <Image source={{ uri: `${myUpload}` }}   style={{ width:50,height:50, marginBottom:8, resizeMode:'cover',alignItems:'center', alignSelf:'center', borderRadius:6}} />
                                  <Icon name="lock" size={20} color="red" />
                            </View>
                        
                              :
                              <Image
                              source={{ uri: `${Config.API_URL}${item?.url}`}}
                                  style={{ width:60,height:60,alignItems:'center', alignSelf:'center',}}
                                  />
                              }
                       
                        <Text style={styles.categoryTitleSm}>Select from phone</Text>
                      </View>
                      :
                    <Image
                    source={{ uri: `${Config.API_URL}${item?.url}`}}
                      style={{ width:80,height:80,borderRadius:100, alignSelf:'center'}}
                       
                      />
                      }
                    
                  </View>


              </TouchableOpacity>


      )

  }



  



    return (
  
                 <BottomSheet sheetBackgroundColor="#fff"  hasDraggableIcon ref={props.bottomSheetRefAvartar} height={580} >

                  <View style={{flex:1}}>
                  <View style={styles.bottomSheet}>
                       
                  <Text style={styles.signupTitleV}>Update Avartar</Text>

                      <View style={styles.listContainerVector1}>

                        <FlatList
                              data={avartarListData}
                              columnWrapperStyle= {{justifyContent:'space-between',flexDirection:'row'}}
                              showsVerticalScrollIndicator={false}
                              numColumns = {3}
                              vertical
                              renderItem={RenderItem}
                              keyExtractor={item => item.id}
                            
                          /> 


        
                      </View>
                    </View>
                  </View>
    
                </BottomSheet>

    
    
      
    )
};

export default SelectAvartarBottomSheet;