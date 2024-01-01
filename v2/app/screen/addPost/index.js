import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  FlatList,
  TextInput,
  RefreshControl,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
import PosterHeaderComponent from "./PosterHeaderComponent"
import { group } from "../../util/group";
import { ScrollView } from 'react-native-gesture-handler';
import CameraOption from './CameraOption/Index';
import { MaterialIndicator } from "react-native-indicators";



const AddPost = props => {
  const items = props.route.params.item
  const dispatch = useDispatch();
  const [active, setActive] = useState('1');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategoryArray, setSearchCategoryArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([])
  const [note, setNote] = useState("")
  const [myUpload, setMyUpload] = useState({});
  const [uploadIsHere, setUploadIsHere] = useState(false)
  const [showOrigin, setShowOrigin] = useState(true);
  const [photo, setPhoto] = useState(null)

  const [errMsg, setErrMsg] = useState(null);

  const [activeId, setActiveId] = useState(1);

  const [search, setSearch] = useState('');

  const [showPhotoOption, setShowPhotoOption] = useState(false);
  const [showActiveCustomer, setShowActiveCustomer] = useState(false)

  const addPost = () =>{
    setShowPhotoOption(false)
    passProps.navigate("AddPost", { items, key: 1 })
  }

  const closeActive = () =>{
    setShowPhotoOption(false)
   setShowActiveCustomer(false)
  }

  const closePictureOption = () =>{
    setShowPhotoOption(false)
    setShowOrigin(true)
  }

console.log("this is my image", myUpload)

  const showActive = id => setActiveId(id);

  console.log("the poster", items)

  const bottomSheet = useRef();

  const goBack = () =>{
    props.navigation.goBack()
  }


const useCamera =()=>{

  uploadCamera()
  setShowOrigin(true)
}

const useUpload =()=>{

  uploadPhoto()
  setShowOrigin(true)
}

  const openSheet = () => {
     setShowPhotoOption(true)
     setShowOrigin(false)

  }

  const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
  };


  const submit = async () => {

      dispatch(getUserDetails({photo:photo }));

      navigation.navigate("FormPinDetails");

  };

  const dismissKeyboard = () => Keyboard.dismiss();

  const uploadCamera = () => {
      ImagePicker.openCamera({ 
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
    
  
    }

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


   
 

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
  
 

    <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={false} />
        <PosterHeaderComponent
          title={`add post`}
          // onPress={openNotification}
          onPressBack={goBack}
          // onPressCart={openCart}
          // orderCount={items.carts?.total}
           />
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='What do you want to talk about .. (type here)'
              value={note}
              onChangeText={text=>setNote(text)}
              multiline={true}
              numberOfLines={10}
            />
          </View>
      </TouchableWithoutFeedback>   
        {showOrigin ?
          <View style={styles.bottomBtnsContainer}>
            <TouchableOpacity style={styles.circleContainer} onPress={openSheet}>
            <View style={styles.circle}>
              <Image
                source={require("@Assets2/image/pictures.png")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
             
             </View>
             <Text style={styles.circleText}>Add Photo</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.circleContainer}>
             <View style={styles.circle}>
             <Image
                source={require("@Assets2/image/videoo.png")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
               
             </View>
             <Text style={styles.circleText}>Add Video</Text>
             </TouchableOpacity>
             {note != "" || uploadIsHere ?
             <TouchableOpacity style={styles.postCircle}>
               <Icon name="send" size={20} color="#fff" />
             </TouchableOpacity>
             :
             null
        }
           </View>
           :
              <CameraOption
                // bottomSheet={bottomSheet}
                upload={useUpload}
                camera={useCamera}
                bottomSheet ={showPhotoOption}
                returnBack={() => closePictureOption()}
                // customerReg={() => setShowActiveCustomer(true)}

            />
      }

      {uploadIsHere ?
            <View style={styles.uploadedContainer}>
                
               <Image source={{ uri: `${myUpload}` }} style={styles.photoCover} />
            </View>
      :
      null
    }
    </SafeAreaView>
   
 
  );
};

export default AddPost;
