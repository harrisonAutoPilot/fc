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
// import {unLikeFeed,likeFeed} from "@Request2/Feed";
import {unFollowUser, followUser,} from "@Request2/Auth";
import {cleanFeedLike, cleanFeedUnLike} from "@Store2/Feed";
import { getAllFeeds,unLikeFeed,likeFeed, getFeedComments} from "@Request2/Feed";
import {cleanUnFollowUser,cleanFollowUser} from "@Store2/Auth";
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

const ITEM_WIDTH = width * 1;

const ImageView = ({ props, item, navigation,userData }) => {
  // const item = props.item
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { likeStatus, unlikeStatus, likeErrors, likeData,feedCommentStatus,feedCommentData, unlikeData} = useSelector((state) => state.feed);
  const { unFollowStatus,followErrors,unfollowErrors, unFollowData, followStatus, followData} = useSelector((state) => state.auth);
  const [mute, unMute] = React.useState(true);
  const [onRepeat, setOnRepeat] = useState(false);
  const [userFollow, setUserFollow] = useState()
  const [userFollowId, setUserFollowId] = useState(false)
  const [selected, setSelected] = useState(0);
  const [detailsValue, setDetailsValue] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [playSoundId, setPlaySoundId] = useState(0);
  const [apDetails, setApDetails] = useState({});
  const [love, setLove] = useState(false);
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight =  windowHeight / 1.3;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();
  const bottomSheetRefMessage = useRef();
  const [heartCount, setHeartCount] = useState(249);

  const showDetails = (item) => {
    setShowCategory(true);
    setCatItem(item);
  };

  const changeHeart = (item) => {
  
    dispatch(likeFeed(item?.id))

    // setHeartCount(heartCount + 1);
  };

  const changeHeartNegate = (item) => {
    dispatch(unLikeFeed(item?.id))
    // setHeartCount(heartCount - 1);
  };

  const addMessage = (item) => {
    setApDetails(item);
    dispatch(getFeedComments(item?.id))
    bottomSheetRefMessage.current.show();
  };

  useEffect(() => {

    if (likeStatus === "failed") {

      console.log("this is the error",likeErrors.msg)

    } else if (likeStatus === "success") {
      dispatch(cleanFeedLike())

        console.log("this is the success", likeData)

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



const changeUnFollow = (id) =>{
  console.log("this has been clicked -- unfollow")
  setUserFollowId(id)
  dispatch(unFollowUser(id))

}

const changeFollow = (id) =>{
  console.log("this has been clicked -- follow")
  setUserFollowId(id)
  dispatch(followUser(id))
}

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

  console.log("the item ....", item.url)

  console.log("the config", Config?.IMG_URL)

useEffect(() => {

if (unFollowStatus === "failed") {
  dispatch(cleanUnFollowUser())
  console.log("this is the unfollow error",unfollowErrors)

} else if (unFollowStatus === "success") {
  
    dispatch(cleanUnFollowUser())
    setUserFollow(false)
    console.log("this is the upfollow status",unFollowData)

}

}, [unFollowStatus]);








  const checkDates = (item) => {
    setApDetails(item);
    bottomSheetRefApDate.current.show();
  };

  const closeApointmentSheet = () => {
    bottomSheetRefApDate.current.close();
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
    ({ style, onPress, myHeartCount, itemData, likeState }) => (
      <View style={styles.loveCoverNew}>
        {likeState == false ? (
          <TouchableOpacity
          style={{flexDirection:'row'}}
            onPress={(item) => {
              changeHeart(itemData), setLove(true);
            }}
          >
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
        ) : (
          <TouchableOpacity
          style={{flexDirection:'row'}}
            onPress={(item) => {
              changeHeartNegate(itemData);
              setLove(false);
            }}
          >
            <View>
              <Icon name="heart" size={20} color="red" style={styles.loveImg} />
             
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
            size={20}
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
              source={{ uri: item?.user?.avatar?.url !== "" ? `${Config?.IMG_URL}${item?.user?.avatar?.url}` : null}}
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
            <Text style={styles.dateWord}>{item?.post_date}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.leftWrapper}>
          <View>
            {item?.user?.id == userFollowId ? 
          <TouchableOpacity style={styles.followCovering} onPress={() => changeUnFollow(item?.user?.id)}>
            <Text style={styles.followTexting}>following</Text>
          </TouchableOpacity>
              : 
          <TouchableOpacity style={styles.followCover} onPress={() => changeFollow(item?.user?.id)}>
            <Text style={styles.followText}>follow</Text>
          </TouchableOpacity>
                }
          </View>
          <TouchableOpacity>
            <Acon name="dots-vertical" size={20} color="#000" />
          </TouchableOpacity>
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
            <LoveToggle myHeartCount={item?.likesCount} likeState={item?.liked}  itemData={item} />

              <MessageToggle onPress={() => addMessage(item)} messageCount={item?.commentsCount} />

              <ShareToggle />
            </View>
            <View style={styles.bottomContainerSm}>
              <CategoryToggle
                  category={item?.interest?.display_name?.charAt(0)}
                  onPress={() => showDetails(item?.interest?.display_name?.charAt(0))}
                />
              <ApointmentToggle onPress={() => checkDates(item)} />
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
      
     <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={apDetails}
        close={closeApointmentSheet}
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
