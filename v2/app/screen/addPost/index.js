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
import Acon from "react-native-vector-icons/MaterialIcons";
import MIcon from "react-native-vector-icons/Ionicons";
import ImagePicker from 'react-native-image-crop-picker';
// const fs = require('fs');
import styles from './style';
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import PosterHeaderComponent from "./PosterHeaderComponent"
import { getAllFeeds,unLikeFeed, getFeedComments, addFeedComment} from "@Request2/Feed";
import { group } from "../../util/group";
import { ScrollView } from 'react-native-gesture-handler';
import CameraOption from './CameraOption/Index';
import VideoOption from './VideoOption/Index';
import { MaterialIndicator } from "react-native-indicators";
import InterestListBottomSheet from "./InterestList"
import { addFeed } from "@Request2/Feed";
import Loader from "@Screen2/loader";
import {cleanAddFeed} from "@Store2/Feed";





const AddPost = props => {
  const items = props.route.params.item
  const { feedStatus, addFeedDetail, addFeedErrors } = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const [active, setActive] = useState('1');
  const [searchCategory, setSearchCategory] = useState('');
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [interestId, setInterestId] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [progress, setProgress] = useState(false);
  const [postType, setPostType] = useState("image")
  const [title, setTitle] = useState("")
  const [postTitle, setPostTitle] = useState("")
  const [result, setResult] = useState([])
  const [note, setNote] = useState("")
  const [mediaData, setMediaData] = useState()
  const [myUpload, setMyUpload] = useState({});
  const [uploadIsHere, setUploadIsHere] = useState(false)
  const [showOrigin, setShowOrigin] = useState(true);
  const [photo, setPhoto] = useState(null)

  const [selected, setSelected] = useState("Family");

  const [errMsg, setErrMsg] = useState(null);

  const [activeId, setActiveId] = useState(1);

  const [search, setSearch] = useState('');


  const bottomSheetRefInterest = useRef();

  const [showPhotoOption, setShowPhotoOption] = useState(false);
  const [showVideoOption, setShowVideoOption] = useState(false);
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

  const closeVideoOption = () =>{
    setShowVideoOption(false)
    setShowOrigin(true)
  }


  const showInterest = () =>{
    bottomSheetRefInterest.current.show();
  }

  const closeInterestSheet = () => {
    bottomSheetRefInterest.current.close();
  };




  const showActive = id => setActiveId(id);

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

const sendPost = () =>{
  setProgress(true)
 const values = { interest_id: interestId, desc:note, title:postTitle, type:postType, file: mediaData}

 dispatch(addFeed(values))
}



const waitTime = useCallback(() => {

  wait(4000).then(() => {

      setErrMsg(null);

      dispatch(cleanAddFeed());

  });

}, []);





useEffect(() => {

  if (feedStatus === "failed") {
      setProgress(false)
      setLoading(false)

      setErrMsg(addFeedErrors?.msg);

      console.log("the api response",addFeedErrors )

      waitTime();

  } else if (feedStatus === "success") {
      setProgress(false)
      setLoading(false);

      setSuccessMsg("New Post added successfully")
      dispatch(getAllFeeds())
      setTimeout(() => {
        dispatch(cleanAddFeed());
        setNote("")
        setPostTitle("")
        setUploadIsHere(false)
        setSuccessMsg(null)
      
      }, 2000);
   
      console.log("the api success")

      // console.log("it is successful")

      // console.log("this is the post", addFeedDetail)
    
      // navigation.navigate("SignUpSuccess");

  }

}, [feedStatus]);




  const openSheet = () => {
     setShowPhotoOption(true)
     setShowOrigin(false)

  }
  const openSheetVideo = () => {
    setShowVideoOption(true)
    setShowOrigin(false)

 }


  const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
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
         
          setPostType("image")
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
         
           setMediaData(imageFile)
           console.log("this is the inside oooo", imageFile)
           return (imageFile)
          
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
          setPostType("image")
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
         
           setMediaData(imageFile)

           return (imageFile)

       
            
          
        })
        .catch(err => {
          console.log(err);
        });
    };


    const useUploadVideo = () => {
    
      ImagePicker.openPicker({ 
        multiple: false,
         width: 1024,
          height: 1024,
        includeBase64: true,
        mediaType: 'video',
        // cropping: true,
      })
        .then(video => {
          setShowVideoOption(false)
          setPostType("video")
          setUploadIsHere(true)
          setShowOrigin(true)
       
                    
            const uri =
            Platform.OS === 'android'
              ? video.path
              : video.path.replace('file:///', '');
          const filename = video.path.split('/').pop();
          const match = /\.(\w+)$/.exec(filename);
          const ext = match?.[1];
          const imageFile = {
            uri,
            name: `video.${ext}`,
            type: video.mime,
          };

         
           setMyUpload(imageFile.uri)
         
           setMediaData(imageFile)
           console.log("this is the inside oooo", imageFile)
           return (imageFile)

       
            
          
        })
        .catch(err => {
          console.log(err);
        });
    };


    const useMakeVideo = () => {
      // setShowVideoOption(false)
      ImagePicker.openCamera({ 
        multiple: false,
         width: 1024,
          height: 1024,
        includeBase64: true,
        mediaType: 'video',
        // cropping: true,
      })
        .then(video => {

          setPostType("video")
          setUploadIsHere(true)
          setShowOrigin(true)
       
                    
            const uri =
            Platform.OS === 'android'
              ? video.path
              : video.path.replace('file:///', '');
          const filename = video.path.split('/').pop();
          const match = /\.(\w+)$/.exec(filename);
          const ext = match?.[1];
          const imageFile = {
            uri,
            name: `video.${ext}`,
            type: video.mime,
          };

         
           setMyUpload(imageFile.uri)
         
           setMediaData(imageFile)
           console.log("this is the inside oooo", imageFile)
           return (imageFile)

       
            
          
        })
        .catch(err => {
          console.log(err);
        });
    };


   const chooseInterest = (item) =>{
    setTitle(item?.display_name)
    setInterestId(item.id)
   }
 

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
           <View style={styles.sinkContainer1}>
                <LottieView
                    source={require('../../asset/image/AnimationMe.json')} autoPlay loop
                    style={styles.sinkImg1}
                    />

                  <View>
                <Text style={styles.sinkText1}>No Character Defamation.</Text>
                <Text style={styles.sinkText1}>A Safe Space to learn and grow</Text>
                  </View>
              </View>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
           <View>
           <View style={styles.inputCover}>
              <Icon name="search" size={14} style={styles.searchIcon} color="#767680" />
              <TextInput
                style={styles.inputStyle}
                value={postTitle}
                placeholder='Post Title'
                placeholderTextColor={"#5A5D72"}
                onChangeText={(text) => setPostTitle(text)}
              />
            </View>
            
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
          <View style={styles.categoryContainer}>
            <View style={styles.categoryImgCover}>
            <Text style={styles.singleText}>{title == "" ? selected.charAt(0) : title.charAt(0)}</Text>
            </View>
            <TouchableOpacity style={styles.innerCover} onPress={() => showInterest()}>
            <Text style={styles.categoryText}>{title == "" ? selected : title}</Text>
            <Icon name="chevron-down" size={18} style={styles.searchIcon} color="#767680" />
            </TouchableOpacity>
           
          </View>
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
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleContainer}  onPress={openSheetVideo}>
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
             <TouchableOpacity style={styles.postCircle} onPress={sendPost}>
               <Icon name="send" size={20} color="#fff" />
             </TouchableOpacity>
             :
             null
        }
           </View>
           :
             <>
              <CameraOption
                upload={useUpload}
                camera={useCamera}
                bottomSheet ={showPhotoOption}
                returnBack={() => closePictureOption()}
                // customerReg={() => setShowActiveCustomer(true)}

            />

            <VideoOption
            uploadVideo={useUploadVideo}
            makeVideo={useMakeVideo}
            bottomSheetVideo ={showVideoOption}
            returnBack={() => closeVideoOption()}
            // customerReg={() => setShowActiveCustomer(true)}

          />
             </>
           
      }
             

              {!progress && uploadIsHere ?
                    <View style={styles.uploadedContainer}>
                        
                      <Image source={{ uri: `${myUpload}` }} style={styles.photoCover} />
                    </View>
              :
              null
              }
        
            {progress ?
              <View style={styles.sinkContainer}>
                <LottieView
                    source={require('../../asset/image/animation_lmbkz1ss.json')} autoPlay loop
                    style={styles.sinkImg}
                    />

                  <View>
                  <Text style={styles.sinkText}>Uploading Media ... </Text>
                <Text style={styles.sinkText}>Completing soon based on your internet speed</Text>
                  </View>
              </View>
              :
              null
            }
            {/* Animation - 1713097353943.json */}
           
      <InterestListBottomSheet
        bottomSheetRefStart={bottomSheetRefInterest}
        data={(item) => chooseInterest(item)}
        close={closeInterestSheet}
        
      />
       {successMsg ?

          <View style={styles.toastCover}>
            <View style={styles.sucView}>
              <MIcon name="checkmark-circle" size={22} color="#fff" />
              <Text style={styles.errText}>{successMsg}</Text>
            </View>

          </View>
          : null}

          {errMsg && <View style={styles.errView} >
                <Acon name="error-outline" size={22} color="#fff" />
                <Text style={styles.errText}>{errMsg}</Text>
            </View>}
 <Loader isVisible={loading} />
    </SafeAreaView>
   
 
  );
};

export default AddPost;
