import React, {
  useEffect,
  useRef,
   useMemo,
  memo,
  useCallback,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import Fcon from "react-native-vector-icons/Feather";
import { MaterialIndicator } from "react-native-indicators";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import moment from "moment";
import Config from "react-native-config";
import data from "./data";
import { group } from "../../util/group";
import Loader from "@Screen2/loader";
import {
  unFollowUser,
  followUser,
  getAvailableDateByUserId,
  getUser,
  createAppointment,
  addAppointmentMessage,
  getFollowers,
  getFollowing
} from "@Request2/Auth";
import {
  getAllFeeds,
  unLikeFeed,
  likeFeed,
  getFeedComments,
  addFeedComment,
} from "@Request2/Feed";
import { cleanFeedLike, cleanFeedUnLike, cleanAllFeed } from "@Store2/Feed";
import {
  cleanUnFollowUser,
  cleanFollowUser,
  cleanUserAvailableDate,
} from "@Store2/Auth";

const { width } = Dimensions.get("screen");
import styles from "./style";
import Video from "react-native-video";

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
import CategoryDetails from "./CategoryDetails";

import MessageBottomSheet from "./messageBottomSheet";
// import CategoryDetails from "./CategoryDetails";
import RenderCategoriesMenu from "./RenderCategoriesMenu";
import ImageView from "./ImageView";

const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 3.2;
const ITEM_HEIGHTV = ITEM_WIDTH * 1.35;

const Home = ({ navigation, props }) => {
  const dispatch = useDispatch();
  const {
    likeStatus,
    unlikeStatus,
    likeErrors,
    likeData,
    feedCommentStatus,
    feedCommentErrors,
    feedCommentData,
    allFeedDataMore,
    allFeedErrors,
    allFeedStatus,
    allFeedData,
    unlikeData,
  } = useSelector((state) => state.feed);

  const {
    user,
    createApStatus,
    createApData,
    createApErrors,
    userDateStatus,
    userDateData,
    addMessageStatus,
    addMessageErrors,
    addMessageData,
    unFollowStatus,
    followErrors,
    unFollowData,
    followStatus,
    followData,
    getFollowersData,
    getFollowersErrors,
    getFollowersStatus,
    getFollowingErrors,
    getFollowingData
    } = useSelector((state) => state.auth);

  const [active, setActive] = useState("1");
  const [activeDot, setActiveDot] = useState({});
  const [category, setCategory] = useState("Categories");
  const [errMsg, setErrMsg] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [waiter, setWaiter] = useState(false);
  const [mute, unMute] = React.useState(true);
  const [silenting, setSilenting] = React.useState(true);
  const [onRepeat, setOnRepeat] = useState(false);
  const [selected, setSelected] = useState(0);
  const [detailsValue, setDetailsValue] = useState(0);
  const [trackCartStatus, setTrackCartStatus] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [playSoundId, setPlaySoundId] = useState(0);
  const [apDetails, setApDetails] = useState({});
  const [result, setResult] = useState([]);

  const [love, setLove] = useState(false);
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
  const { height: windowHeight } = Dimensions.get("window");
  // const boxHeight = windowHeight / 1.2; //1.2
  const boxHeight = windowHeight / 1.3;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();
  const bottomSheetRefMessage = useRef();
  // const viewabilityConfigCallbackPairs = useRef();
  const [scrollUp, setScrollUp] = useState(0);

  const [showPreview, setShowPreview] = useState(false);
  const [showCheckFollow, setShowCheckFollow] = useState(false);
  const [userFollowId, setUserFollowId] = useState(false);

  const [noteDate, setNoteDate] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [toDate, setToDate] = useState("");
  const [displayFrom, setDisplayFrom] = useState(true);
  const [displayTo, setDisplayTo] = useState(false);
  const [note, setNote] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);
  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const [listData, setListData] = useState([]);

  const [heartCount, setHeartCount] = useState(249);

  const showDetails = (item) => {
    setShowCategory(true);
    setCatItem(item);
  };

  useEffect(() => {
    dispatch(getAllFeeds());
    dispatch(getUser());
    dispatch(getFollowers())
    dispatch(getFollowing())
  }, []);

  const selectBtn = (id) => {
    setActive(id);
  };

  const selectCategory = (name) => {
    setCategory(name);
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 40,
  };


  const changeHeart = (item) => {
    dispatch(likeFeed(item?.id));

    setHeartCount(item?.likesCount + 1);
  };

  const changeHeartNegate = (item) => {
    dispatch(unLikeFeed(item?.id));
    setHeartCount(item?.likesCount - 1);
  };

 

  const changeUnFollow = (id) => {
    setUserFollowId(id);
    dispatch(unFollowUser(id));
    dispatch(getFollowers())
  };

  const changeFollow = (id) => {
   

    setUserFollowId(user.id);
    dispatch(followUser(id));
    dispatch(getFollowers())
  };

  const checkDates = (item) => {
    dispatch(cleanUserAvailableDate());
  
    dispatch(getAvailableDateByUserId(item?.user));
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

  // console.log("the sound id",playSoundId)
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



  // const LoveToggle = useCallback(
  //   ({ style, onPress, myHeartCount, itemData, likeState }) => (
  //     <View style={styles.loveCoverNew}>
  //       {likeState == false ? (
  //         <TouchableOpacity
  //           style={{ flexDirection: "row" }}
  //           onPress={(item) => {
  //             changeHeart(itemData), setLove(true);
  //           }}
  //         >
  //           <View>
  //             <Icon
  //               name="hearto"
  //               size={20}
  //               color="#000"
  //               style={styles.loveImg}
  //             />
  //           </View>
  //           <Text style={styles.loveCount}>{myHeartCount}</Text>
  //         </TouchableOpacity>
  //       ) : (
  //         <TouchableOpacity
  //           style={{ flexDirection: "row" }}
  //           onPress={(item) => {
  //             changeHeartNegate(itemData);
  //             setLove(false);
  //           }}
  //         >
  //           <View>
  //             <Icon name="heart" size={20} color="red" style={styles.loveImg} />
  //           </View>
  //           <Text style={styles.loveCount}>{myHeartCount}</Text>
  //         </TouchableOpacity>
  //       )}
  //     </View>
  //   ),
  //   [love]
  // );

  // const MessageToggle = useCallback(
  //   ({ onPress, messageCount }) => (
  //     <View style={styles.commentCoverNew}>
  //       <TouchableOpacity onPress={onPress}>
  //         <Acon name="message-text-outline" size={20} color="#454545" />
  //       </TouchableOpacity>
  //       <Text style={styles.loveCount}>{messageCount}</Text>
  //     </View>
  //   ),
  //   []
  // );

  // const ShareToggle = useCallback(
  //   ({ onPress }) => (
  //     <View style={styles.shareCoverNew}>
  //       <TouchableOpacity onPress={onPress}>
  //         {/* <Image
  //         source={require("@Assets2/image/arrow.png")}
  //         style={styles.shareImg}
  //       /> */}
  //         <Fcon name="send" size={20} color="#454545" />
  //       </TouchableOpacity>
  //     </View>
  //   ),
  //   []
  // );

  // const ApointmentToggle = useCallback(
  //   ({ onPress }) => (
  //     <View style={styles.apointCoverNew}>
  //       <TouchableOpacity onPress={onPress}>
  //         <Acon
  //           name="calendar-month-outline"
  //           size={20}
  //           color="#454545"
  //           style={styles.loveImg}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   ),
  //   []
  // );

  // const CategoryToggle = useCallback(
  //   ({ onPress, category }) => (
  //     <View style={styles.categoryCoverNew}>
  //       <TouchableOpacity onPress={onPress}>
  //         <Text style={styles.categoryText}>{category}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   ),
  //   []
  // );

  const makeAppointment = () => {
    const data = {
      counsellor_id: item?.user?.id,
      set_time: moment(noteDate).format("YYYY-MM-DD HH:mm:ss"),
    };
    dispatch(createAppointment(data));
  };

 

  const SoundToggle = useCallback(
    ({ onPress, onPressNew, playSoundId, item, mute }) => (
      <View style={styles.soundCover}>
        {playSoundId == item?.id && !mute ? (
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
    [mute]
  );

  // const handleVieweableItemsChanged = useCallback(({ viewableItems }) => {
  //   setActiveDot(viewableItems);
  //   // setActiveDot(viewableItems);
  //   console.log("the view able item", activeDot);
  // }, []);

    const handleVieweableItemsChanged = useCallback((info) => {
      const visibleItems = info.changed.filter((entry) => entry.isViewable);
      visibleItems.forEach((visible) => {
        // trackItem(visible.item);
        setActiveDot(visible)
      });
  }, []);

  // const handleVieweableItemsChanged = useCallback(
  //   (info: { changed: ViewToken[] }): void => {
  //     const visibleItems = info.changed.filter((entry) => entry.isViewable);
  //     visibleItems.forEach((visible) => {
  //       // trackItem(visible.item);
  //       setActiveDot(visible)
  //     });
  //   },
  //   []
  // );





  const ScrollList = (props, index) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation;

    return (
      <>
        {active === item.id ? (
          <TouchableOpacity
            style={styles.scrollFlex}
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}
          >
            <View style={styles.capCover}>
              <Image
                // source={item?.image_url}
                source={{
                  uri:
                    item?.avatar !== ""
                      ? `${Config?.IMG_URL}${item?.avatar?.url}`
                      : null,
                }}
                resizeMode="cover"
                style={styles.groupImg}
             
              />
            </View>
            <Text style={styles.miniCardTextInactive}>{item?.username?.length > 8 ? `${item?.username?.slice(0, 8)}...` :item?.username}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.scrollFlex}
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}
          >
            <View style={styles.capCoverInactive}>
              <Image
               source={{
                uri:
                  item?.avatar !== ""
                    ? `${Config?.IMG_URL}${item?.avatar?.url}`
                    : null,
              }}
                style={styles.groupImg}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.miniCardTextInactive}>{item?.username?.length > 8 ? `${item?.username?.slice(0, 8)}...` :item?.username}</Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  // const changeHeart = () => {
  //   setHeartCount(heartCount + 1);
  // }

  // const changeHeartNegate = () => {
  //   setHeartCount(heartCount - 1);
  // };

  // const checkDates = (item) => {
  //   setApDetails(item);
  //   bottomSheetRefApDate.current.show();
  // };

  const NewRenderCategory = useCallback(({ item, data, index }) => {
   
    return (
      <View key={item.id}>
       <>
      <View style={styles.imageContainer} key={key}>
      {item?.type == "image" ? (
      <ImageView item={item} navigation={navigation} userData={userData} />
    ) : activeDotData?.item?.id == item?.id ?(
        <View key={key} style={styles.videoCardt}>
          <View style={styles.infoCover}>
            <TouchableOpacity
              style={styles.titleWrapper}
              onPress={() => posterProfile(item)}
            >
              <View style={styles.userImgCover}>
                <Image
                  style={styles.posterImg}
                  source={{
                    uri:
                      item?.user?.avatar?.url !== ""
                        ? `${Config?.IMG_URL}${item?.user?.avatar?.url}`
                        : null,
                  }}
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
                <Text style={styles.descWord}>
                  Family | Relationship | Career
                </Text>
                <Text style={styles.dateWord}>
                  {moment(item?.updated_at).fromNow()}
                </Text>
                {/* <Text style={styles.dateWord}>{item?.post_date}</Text> */}
              </View>
            </TouchableOpacity>
            <View style={styles.leftWrapper}>
              {/* <View>
                {item?.user?.id == userFollowId || item?.followingOwner ? (
                  <TouchableOpacity
                    style={styles.followCovering}
                    onPress={() => changeUnFollow(item?.user?.id)}
                  >
                    <Text style={styles.followTexting}>following</Text>
                  </TouchableOpacity>
                ) : item?.user?.id !== userFollowId || !item?.followingOwner ? (
                  <TouchableOpacity
                    style={styles.followCover}
                    onPress={() => changeFollow(item?.user?.id)}
                  >
                    <Text style={styles.followText}>follow</Text>
                  </TouchableOpacity>
                ) : null}
              </View> */}
           {item ?
           
               <FollowToggle
                itemData={item}
                onPress={() => changeUnFollow(item?.user?.id)}
                onPressNew={() => changeFollow(item?.user?.id)}
              />
              :
              null
                }
       
       
              <TouchableOpacity>
                <Acon name="dots-vertical" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageCard}>
            <Video
              source={{
                uri:
                  `${Config?.SPACE_URL}${item?.url}` &&
                  `${Config?.SPACE_URL}${item?.url}`,
              }}
              style={styles.imageCardImg}
              muted={mute}
              onLoad={() => {
                setSelected(item?.id), setOnEnd(false);
              }}
              rate={1.0}
              onEnd={() => setOnEnd(true)}
              volume={playSoundId == item?.id && !mute ? 1.0 : 0.0}
              resizeMode="cover"
              repeat={onRepeat}
              paused={pause}
            />
          </View>

          <View style={styles.bottomContainer1}>
            <View style={styles.bottomContainerBg}>
            {loveRoller ?
            <ActivityIndicator size="small" color="#ff0000" />
            :

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
              }

              <MessageToggle
                onPress={() => addMessage(item)}
                messageCount={item?.commentsCount}
              />

              <ShareToggle />
            </View>
            <View style={styles.bottomContainerSm}>
              <CategoryToggle
                category={item?.interest?.display_name?.charAt(0)}
                onPress={() =>
                  showDetails(item?.interest?.display_name?.charAt(0))
                }
              />
              <ApointmentToggle onPress={() => checkDates(item)} />
            </View>
          </View>

          <SoundToggle
            mute={mute}
            onPress={() => muteSound(item?.id)}
            onPressNew={() => playSound(item)}
          />

          {/* <View style={styles.soundCover}>
                    {playSoundId == item?.id && !mute ? (
                      <TouchableOpacity onPress={() => muteSound(item)}>
                        <Image
                          source={require("../../assets/volume.png")}
                          style={styles.speakerImg}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => playSound(item)}>
                        <Image
                          source={require("../../assets/mute-2.png")}
                          style={styles.speakerImg}
                        />
                      </TouchableOpacity>
                    )}
                  </View> */}

          {item?.id === selected && onEnd ? (
            <VideoEnds
              onPress={() => {
                setOnRepeat(true);
                setPause(false);
              }}
            />
          ) : null}

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
        </View>
    ) : null }
      </View>

      {userDateStatus && userDateStatus ? (
        <AppointmentDateBottomSheet
          bottomSheetRefStart={bottomSheetRefApDate}
          poster={apDetails && apDetails}
          close={closeApointmentSheet}
          userData={userDateData && userDateData}
          displayNote={showNote}
          changeAppoint={() => setShowNote(false)}
        />
      ) : null}

      <MessageBottomSheet
        bottomSheetRefMessage={bottomSheetRefMessage}
        message1={apDetails}
        feedData={feedCommentData}
        feedStatus={feedCommentStatus}
        userData={userData}
        roll={true}
      />

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />
    </>
      </View>
    );
  }, [mute]);



//   const ListItemObi = ({ item, data, index }) => useMemo(() => 
//     <View key={item.id}>
//   <View style={styles.imageContainer}>
//     <View key={item?.id} style={styles.videoCardt}>
//       <View style={styles.infoCover}>
//         <TouchableOpacity
//           style={styles.titleWrapper}
//           onPress={() => posterProfile(item)}
//         >
//           <View style={styles.userImgCover}>
//             <Image
//               style={styles.posterImg}
//               source={{
//                 uri:
//                   item?.user?.avatar?.url !== ""
//                     ? `${Config?.IMG_URL}${item?.user?.avatar?.url}`
//                     : null,
//               }}
//               resizeMode="cover"
//             />
//           </View>
//           <View style={styles.posterCover}>
//             <View style={styles.veirifyCover}>
//               <Text style={styles.titleWord}>
//                 @{item?.user?.username}
//               </Text>
//               <Image
//                 source={require("@Assets2/image/verified.png")}
//                 style={styles.verifyImg}
//               />
//             </View>
//             <Text style={styles.descWord}>
//               Family | Relationship | Career
//             </Text>
//             <Text style={styles.dateWord}>
//               {moment(item?.updated_at).fromNow()}
//             </Text>
//             {/* <Text style={styles.dateWord}>{item?.post_date}</Text> */}
//           </View>
//         </TouchableOpacity>
//         <View style={styles.leftWrapper}>
//           <View>
//             {item?.user?.id == userFollowId ? (
//               <TouchableOpacity
//                 style={styles.followCovering}
//                 onPress={() => changeUnFollow(item?.user?.id)}
//               >
//                 <Text style={styles.followTexting}>following</Text>
//               </TouchableOpacity>
//             ) : item?.user?.id !== userFollowId ? (
//               <TouchableOpacity
//                 style={styles.followCover}
//                 onPress={() => changeFollow(item?.user?.id)}
//               >
//                 <Text style={styles.followText}>follow</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//           <TouchableOpacity>
//             <Acon name="dots-vertical" size={20} color="#000" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.imageCard}>
//         <Video
//           source={{
//             uri:
//               `${Config?.SPACE_URL}${item?.url}` &&
//               `${Config?.SPACE_URL}${item?.url}`,
//           }}
//           style={styles.imageCardImg}
//           muted={mute}
//           onLoad={() => {
//             setSelected(item?.id), setOnEnd(false);
//           }}
//           rate={1.0}
//           onEnd={() => setOnEnd(true)}
//           volume={playSoundId == item?.id && !mute ? 1.0 : 0.0}
//           resizeMode="cover"
//           repeat={onRepeat}
//           paused={pause}
//         />
//       </View>

//       <View style={styles.bottomContainer1}>
//         <View style={styles.bottomContainerBg}>
//           <LoveToggle
//             myHeartCount={item?.likesCount}
//             likeState={item?.liked}
//             itemData={item}
//           />

//           <MessageToggle
//             onPress={() => addMessage(item)}
//             messageCount={item?.commentsCount}
//           />

//           <ShareToggle />
//         </View>
//         <View style={styles.bottomContainerSm}>
//           <CategoryToggle
//             category={item?.interest?.display_name?.charAt(0)}
//             onPress={() =>
//               showDetails(item?.interest?.display_name?.charAt(0))
//             }
//           />
//           <ApointmentToggle onPress={() => checkDates(item)} />
//         </View>
//       </View>

//       {/* <SoundToggle
//         share={mute}
//         onPress={() => { unMute(!mute) }}
//         onPressNew={() => unMute(!mute)}
//       /> */}

//       <View style={styles.soundCover}>
//         {playSoundId == item?.id && !mute ? (
//           <TouchableOpacity onPress={() => muteSound(item)}>
//             <Image
//               source={require("../../assets/volume.png")}
//               style={styles.speakerImg}
//             />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity onPress={() => playSound(item)}>
//             <Image
//               source={require("../../assets/mute-2.png")}
//               style={styles.speakerImg}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//       {item?.id === selected && onEnd ? (
//         <VideoEnds
//           onPress={() => {
//             setOnRepeat(true);
//             setPause(false);
//           }}
//         />
//       ) : null}

//       {item.description == null || "" ? null : (
//         <>
//           {detailsValue == item?.id && showPreview ? null : (
//             <View style={styles.previewContainer}>
//               <View style={styles.previewInner}>
//                 {item?.description?.length > 100 ? (
//                   <Text style={styles.descText}>
//                     {item?.description?.slice(0, 100)}...
//                   </Text>
//                 ) : (
//                   <Text style={styles.descText}>{item?.description}</Text>
//                 )}
//                 {item?.description?.length > 100 ? (
//                   <View style={styles.moreCover}>
//                     <TouchableOpacity onPress={() => goDetails(item)}>
//                       <Text style={styles.readmore}>
//                         Read more {">>"}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 ) : null}
//               </View>
//               <TouchableOpacity onPress={() => closeDetails(item)}>
//                 <Acon
//                   name="close-circle-outline"
//                   size={20}
//                   color="#fff"
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//         </>
//       )}
//     </View>
//   </View>
// </View>

// )






  const loadMoreFeeds = useCallback(() => {
  
    setTrackCartStatus(true);

    dispatch(getAllFeeds(allFeedData?.current_page + 1));
    setWaiter(true);
    setTimeout(() => {
      setResult(allFeedDataMore);
    }, 500);
  }, [allFeedData?.current_page, trackCartStatus]);
   

  const refreshViewList = useCallback(() => {
    setRefreshing(true);

    setErrMsg(null);

    dispatch(getAllFeeds())
      .unwrap()
      .then(() => {
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
      });
  }, []);

    
    const GeneralRender  = useCallback(
       ({ item, index}) => (
      <>
        <NewRenderCategory
            key={item?.id}
            item={item}
            index={index}
            navigation={navigation}
            props={props}
            userData={user}
            activeDotData={activeDot}
            changeUnCheck={() =>{
              setShowCheckFollow(false)
            }}
            changeCheck={() =>{
              setShowCheckFollow(true)
            }}
            showCheck={showCheckFollow}
          />
      </>
 ),
   [activeDot,showCheckFollow]
 );




  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" hidden={true} />

      {/* Scrollable Content */}
      <View style={styles.headerCover}>
        <Text style={styles.headerTitle}>Faceless Counselling</Text>
      </View>
      <View style={styles.miniHeader}>
        <FlatList
          horizontal
          data={getFollowingData?.data}
          renderItem={ScrollList}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          scrollEnabled
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={styles.alignItemsCenter}
          data={waiter ? result : allFeedData}
          vertical
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={handleVieweableItemsChanged}
          // viewabilityConfig={viewabilityConfig}

          viewabilityConfig={{
            itemVisiblePercentThreshold: 30,
            minimumViewTime: 2000,
          }}
          bounces={false}
          removeClippedSubviews={true}
          initialNumToRender={3}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          maxToRenderPerBatch={6}
          windowSize={5}
          onEndReached={() => {
            if (allFeedData?.current_page < allFeedData?.last_page) {
              loadMoreFeeds();
            }
          }}
          //   getItemLayout={(data, index) => (
          //     { length: 100, offset: 100 * index, index }
          // )}
          getItemLayout={(data, index) => ({
            length: boxHeight,
            offset: boxHeight * index,
            index,
          })}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshViewList}
            />
          }
          ListFooterComponent={
            allFeedStatus === "pending" && (
              <ActivityIndicator size="large" animating={true} color="#fff" />
            )
          }
          renderItem={({ item, index }) => (
            <GeneralRender item={item} index={index} activeDotData={activeDot} key={item?.id} />
           
          )}
        />
      </View>

      <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={apDetails}
        close={closeApointmentSheet}
      />

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />

      {userDateStatus && userDateStatus ? (
        <AppointmentDateBottomSheet
          bottomSheetRefStart={bottomSheetRefApDate}
          poster={apDetails}
          close={closeApointmentSheet}
          userData={userDateData}
          displayNote={showNote}
          changeAppoint={() => setShowNote(false)}
        />
      ) : null}

      {/* <MessageBottomSheet
        bottomSheetRefMessage={bottomSheetRefMessage}
        message1={apDetails}
        feedData={feedCommentData}
        feedStatus={feedCommentStatus}
        userData={user}
        roll={true}
      /> */}

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />
    </View>
  );
};

export default Home;

