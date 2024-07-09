import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  memo,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import Fcon from "react-native-vector-icons/Feather";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIndicator } from "react-native-indicators";
import moment from 'moment';
import {unFollowUser, followUser,getFollowing,getAvailableDateByUserId,} from "@Request2/Auth";
import {cleanFeedLike, cleanFeedUnLike} from "@Store2/Feed";
import { getAllFeeds,unLikeFeed,likeFeed, getFeedComments} from "@Request2/Feed";
import {cleanUnFollowUser,cleanFollowUser,  cleanUserAvailableDate,} from "@Store2/Auth";
import Config from "react-native-config";
const { width } = Dimensions.get("screen");
import styles from "./style";
import Video from "react-native-video";
import Loader from "@Screen2/loader";
import MessageBottomSheet from "./messageBottomSheet";
import HeaderWithGradient from "../../components/HeaderWithGradient";
import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from "@n1ru4l/react-in-center-of-screen";
import AppointmentDateBottomSheet from "./appointDateBottomSheet";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { data } from "../../util/data";
import CategoryDetails from "./CategoryDetails";
import UserOption from "./UserOptions";

const ITEM_WIDTH = width * 1;

const ImageView = ({ props, item, navigation,userData, index }) => {
  // const item = props.item
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { likeStatus, unlikeStatus, likeErrors, likeData,feedCommentStatus,feedCommentData, unlikeData} = useSelector((state) => state.feed);
  const { unFollowStatus,followErrors,unfollowErrors,userDateData,userDateStatus,userDateErrors, user, unFollowData, followStatus, followData} = useSelector((state) => state.auth);
  const [mute, unMute] = React.useState(true);
  const [onRepeat, setOnRepeat] = useState(false);
  const [userFollow, setUserFollow] = useState()
  const [userFollowId, setUserFollowId] = useState(false)
  const [selected, setSelected] = useState(0);
  const [love, setLove] = useState(false);
  const [clickLove, setClickLove] = useState(false);
  const [clickUnLove, setClickUnLove] = useState(false);
  const [detailsValue, setDetailsValue] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [playSoundId, setPlaySoundId] = useState(0);
  const [apDetails, setApDetails] = useState({});
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight =  windowHeight / 1.3;
  const [showCategory, setShowCategory] = useState(false);
  const [noteDate, setNoteDate] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();
  const bottomSheetRefMessage = useRef();
  const [heartCount, setHeartCount] = useState(249);
  const [showSpinner, setShowSpinner] = useState(false);
  const [myUnFollow, setMyUnFollow] = useState(false);
  const [myFollow, setMyFollow] = useState(false);

  const showDetails = (item) => {
    setShowCategory(true);
    setCatItem(item);
  };

  const changeHeart = (item) => {

    setLove(true);
    setClickLove(true);

    setTimeout(() => {
      dispatch(likeFeed(item?.id));
      setHeartCount(item?.likesCount + 1);
 }, 2000);
 
  };

  const changeHeartNegate = (item) => {
    setLove(false);
    setClickUnLove(true);

    setTimeout(() => {
      dispatch(unLikeFeed(item?.id));
      const data = item?.likesCount - 1;
      setHeartCount(data < 1 ? 0 : item?.likesCount - 1);

 }, 2000);
  };
  const addMessage = (item) => {
    setApDetails(item);
    dispatch(getFeedComments(item?.id))
    bottomSheetRefMessage.current.show();
  };

  const closeUserOption = () =>{
    bottomSheetRefUserOption.current.close()
  }

  const callUserOpton = (item) =>{
   
    setTimeout(() => {
      setApDetails(item);
      console.log("the changer", item)
      bottomSheetRefUserOption.current.show()

 }, 2000);
  }

  useEffect(() => {

    if (likeStatus === "failed") {

      console.log("this is the error",likeErrors.msg)

    } else if (likeStatus === "success") {
      dispatch(cleanFeedLike())

    

    }

}, [likeStatus]);


useEffect(() => {

  if (unlikeStatus === "failed") {

    console.log(likeErrors.msg)

  } else if (unlikeStatus === "success") {
    
      dispatch(cleanFeedUnLike())
      console.log(unlikeData)

  }

}, [unlikeStatus]);



// const changeUnFollow = (id) =>{
//   console.log("this has been clicked -- unfollow")
//   setUserFollowId(id)
//   dispatch(unFollowUser(id))
//   dispatch(getFollowing())

// }

// const changeFollow = (id) =>{
//   console.log("this has been clicked -- follow")
//   setUserFollowId(id)
//   dispatch(followUser(id))
//   dispatch(getFollowing())
// }


const changeUnFollow = (id) => {
  setShowSpinner(true)
  setMyFollow(false)
  dispatch(cleanUnFollowUser())
  setUserFollowId(id);
  dispatch(unFollowUser(id));
  dispatch(getFollowing())

};

const changeFollow = (id) => {
  setShowSpinner(true)
  setMyFollow(true)
  setUserFollowId(id);
  dispatch(cleanFollowUser())
  dispatch(followUser(id));
  dispatch(getFollowing())
 
};


useEffect(() => {

  if (followStatus === "failed") {
    dispatch(cleanFollowUser())
    console.log(followErrors.msg)
  
  } else if (followStatus === "success") {
    
      dispatch(cleanFollowUser())
      setUserFollow(true)
      console.log(followData)
  
  }
  
  }, [followStatus]);


useEffect(() => {

if (unFollowStatus === "failed") {
  dispatch(cleanUnFollowUser())
 

} else if (unFollowStatus === "success") {
  
    dispatch(cleanUnFollowUser())
    setUserFollow(false)


}

}, [unFollowStatus]);



  const checkDates = (item) => {
    dispatch(cleanUserAvailableDate());  
    dispatch(getAvailableDateByUserId(item?.user?.id));
    setApDetails(item);
    setTimeout(() => {
    bottomSheetRefApDate?.current?.show();

 }, 1000);

  };

  const closeApointmentSheet = () => {
    bottomSheetRefApDate?.current?.close();
  };

  const closeDetails = (item) => {
    setShowPreview(true);
    setDetailsValue(item?.id);
  };

  const playSound = (item) => {
    unMute(false);
    setPlaySoundId(item?.id);
  };
  const muteSound = (item) => {
    unMute(true);
    setPlaySoundId(item?.id);
  };


  const posterProfile = (item) => {
    navigation.navigate("PosterProfile", { item: item });
  };

  const goDetails = (item) => {
    navigation.navigate("HomeDetails", { item: item });
  };

  const LoveToggle = useCallback(
    ({ style, onPress, onPressNew, myHeartCount, itemData, likeState }) => (
      <View style={styles.loveCoverNew}>
        {likeState == true && itemData?.likesCount > 0 && love ? (
             <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={onPressNew}
          >
            <View>
              <Icon name="heart" size={20} color="red" style={styles.loveImg} />
            </View>
            <Text style={styles.loveCount}>{myHeartCount}</Text>
          </TouchableOpacity>
        ) : (
      

          <TouchableOpacity style={{ flexDirection: "row" }} onPress={onPress}>
            <View>
              <Icon
                name="hearto"
                size={20}
                color="#000"
                style={styles.loveImg}
              />
            </View>
            <Text style={styles.loveCount}>{myHeartCount}</Text>
          </TouchableOpacity>
        )}
      </View>
    ),
    [love]
  );


  const MessageToggle = useCallback(
    ({ onPress, messageCount }) => (
      <View style={styles.commentCoverNew}>
        <TouchableOpacity onPress={onPress}>
          <Acon name="message-text-outline" size={20} color="#454545" />
         
        </TouchableOpacity>
        <Text style={styles.loveCount}>{messageCount}</Text>
      </View>
    ),
    []
  );

  const ShareToggle = useCallback(
    ({ onPress }) => (
      <View style={styles.shareCoverNew}>
        <TouchableOpacity onPress={onPress}>
          {/* <Image
            source={require("@Assets2/image/arrow.png")}
            style={styles.shareImg}
          /> */}
           <Fcon name="send" size={20} color="#454545" />
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const ApointmentToggle = useCallback(
    ({ onPress }) => (
      <View style={styles.apointCoverNew}>
        <TouchableOpacity onPress={onPress}>
          <Acon
            name="calendar-month-outline"
            size={24}
            color="#454545"
            style={styles.loveImg}
          />
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const CategoryToggle = useCallback(
    ({ onPress, category }) => (
      <View style={styles.categoryCoverNew}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const VideoEnds = useCallback(
    ({ onPress, onEnd }) => (
      <View style={styles.replayCover}>
        <Image
          source={require("../../assets/mee.jpg")}
          style={styles.appLogoSm}
        />
        <TouchableOpacity style={styles.replayBtn} onPress={onPress}>
          <Text style={styles.replayText}>REPLAY</Text>
        </TouchableOpacity>
      </View>
    ),
    [onEnd]
  );

  const SoundToggle = useCallback(
    ({ onPress, onPressNew, playSoundId }) => (
      <View style={styles.soundCover}>
        {mute && playSoundId ? (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require("../../assets/mute-2.png")}
              style={styles.speakerImg}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressNew}>
            <Image
              source={require("../../assets/volume.png")}
              style={styles.speakerImg}
            />
          </TouchableOpacity>
        )}
      </View>
    ),
    []
  );


  const FollowToggle = useCallback(
    ({onPress, onPressOdi, itemData}) => (
      <View>
                {myFollow ? (
                  <TouchableOpacity
                    style={styles.followCovering}
                    onPress={onPress}
                  >   
                <Text style={styles.followTexting}>following</Text>
 
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.followCover}
                    onPress={onPressOdi}
                  >
                   
                    {/* <ActivityIndicator size="small" color="#454545" /> */}
                    
                      <Text style={styles.followText}>follow</Text>
                   
                  
                  </TouchableOpacity>
                ) }
              </View>
    ),
    [userFollowId, myFollow]
  );


  return (
    <View style={styles.videoCardt} key={item?.id}>
        <View style={styles.infoCover}>
        <TouchableOpacity
          style={styles.titleWrapper}
          onPress={() => posterProfile(item)}
        >
          <View style={styles.userImgCover}>
            <Image
              style={styles.posterImg}
              source={{uri: item?.user?.user_image_url == null ? `${Config?.IMG_URL}${item?.user?.avatar?.url}` : `${Config?.SPACE_URL}${item?.user?.user_image_url}`}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.posterCover}>
            <View style={styles.veirifyCover}>
              <Text style={styles.titleWord}>@{item?.user?.username}</Text>
              <Image
                source={require("@Assets2/image/verified.png")}
                style={styles.verifyImg}
              />
            </View>
            <Text style={styles.descWord}>Family | Relationship | Career</Text>
            <Text style={styles.dateWord}>{moment(item?.updated_at).fromNow()}</Text>
            {/* <Text style={styles.dateWord}>{item?.post_date}</Text> */}
          </View>
        </TouchableOpacity>
        <View style={styles.leftWrapper}>
      
         
      
        {user?.id != item?.user?.id ?
        <>
         { !item?.followingOwner?
               <FollowToggle
                itemData={item}
                onPress={() => changeUnFollow(item?.user?.id)}
                onPressOdi={() => changeFollow(item?.user?.id)}
              />
              :null }
  
        </>
         : null }

            {item &&
              <TouchableOpacity onPress={() => callUserOpton(item)}>
                <Acon name="dots-vertical" size={20} color="#000" />
              </TouchableOpacity> }

            </View>
          </View>
          <View style={styles.imageCard}>
            <Image
              style={styles.imageCardImg}
              // source={{ uri:`${Config?.SPACE_URL}${item?.url}`}}
              source={{ uri: item?.url !== "" ? `${Config?.SPACE_URL}${item?.url}` : null}}
              resizeMode="contain"
            />
          </View>

            <View style={styles.bottomContainer1}>
            <View style={styles.bottomContainerBg}>
            {/* <LoveToggle myHeartCount={item?.likesCount} likeState={item?.liked}  itemData={item} /> */}
            <LoveToggle
                myHeartCount={
                  clickLove
                    ? heartCount
                    : clickUnLove
                    ? heartCount
                    : item?.likesCount
                }
                likeState={item?.liked}
                itemData={item}
                onPress={() => changeHeart(item)}
                onPressNew={() => changeHeartNegate(item)}
              />


              <MessageToggle onPress={() => addMessage(item)} messageCount={item?.commentsCount} />

              <ShareToggle />
            </View>
            <View style={styles.bottomContainerSm}>
              <CategoryToggle
                  category={item?.interest?.display_name?.charAt(0)}
                  onPress={() => showDetails(item?.interest?.display_name?.charAt(0))}
                />
                 {user?.id != item?.user?.id ?
              <ApointmentToggle onPress={() => checkDates(item)} />
                  : null }
            </View>
            </View>
     

     {/* <LoveToggle myHeartCount={item?.likesCount} likeState={item?.liked} itemData={item} />
      <MessageToggle onPress={() => addMessage(item)} messageCount={item?.commentsCount} />
      <ShareToggle />
      <ApointmentToggle onPress={() => checkDates(item)} /> */}

        {item.description == null || "" ? null : (
        <>
          {detailsValue == item?.id && showPreview ? null : (
            <View style={styles.previewContainer}>
              <View style={styles.previewInner}>
                {item?.description?.length > 100 ? (
                  <Text style={styles.descText}>
                    {item?.description?.slice(0, 100)}...
                  </Text>
                ) : (
                  <Text style={styles.descText}>{item?.description}</Text>
                )}
                {item?.description?.length > 100 ? (
                  <View style={styles.moreCover}>
                    <TouchableOpacity onPress={() => goDetails(item)}>
                      <Text style={styles.readmore}>Read more {">>"}</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
              <TouchableOpacity onPress={() => closeDetails(item)}>
                <Acon name="close-circle-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </>

      )}
      {userDateStatus == "success" ? (
     <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={apDetails && apDetails}
        close={closeApointmentSheet}
        userData={userDateData && userDateData}
        displayNote={showNote}
        changeAppoint={() => setShowNote(false)}
      />
     ) : null }


       <UserOption
          bottomSheetUserOption={bottomSheetRefUserOption}
          returnBackUserOption ={closeUserOption}
          item={apDetails && apDetails}
          />
    <MessageBottomSheet
         bottomSheetRefMessage={bottomSheetRefMessage}
         message1 ={apDetails && apDetails}
         feedData = {feedCommentData}
         userData={userData}
         feedStatus={feedCommentStatus}
         roll = {true}
      />

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      /> 
    </View>
  );
};

export default memo(ImageView);
