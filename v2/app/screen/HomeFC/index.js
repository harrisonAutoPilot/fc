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
import { ActivityIndicator } from "react-native-paper";
import Config from "react-native-config";
import Loader from "@Screen2/loader";
import {
  followUser,
  getAvailableDateByUserId,
  getUser,
  addAppointmentMessage,
  getFollowers,
  getFollowing,
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
import PlaceholderCard from "./PlaceHolderCard"

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
  const [onEnd, setOnEnd] = useState(false);
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight = windowHeight / 1.3;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();
  const bottomSheetRefMessage = useRef();
  const [scrollUp, setScrollUp] = useState(0);

  const [showPreview, setShowPreview] = useState(false);

  const [userFollowId, setUserFollowId] = useState(false);

  const [noteDate, setNoteDate] = useState([]);

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


    const handleVieweableItemsChanged = useCallback((info) => {
      const visibleItems = info.changed.filter((entry) => entry.isViewable);
      visibleItems.forEach((visible) => {
        // trackItem(visible.item);
        setActiveDot(visible)
      });
  }, []);



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
                  uri: item?.user_image_url == null ? `${Config?.IMG_URL}${item?.avatar?.url}` : `${Config?.SPACE_URL}${item?.user_image_url}`
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
                uri: item?.user_image_url == null ? `${Config?.IMG_URL}${item?.avatar?.url}` : `${Config?.SPACE_URL}${item?.user_image_url}`
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





  const loadMoreFeeds = useCallback(() => {
  
    setTrackCartStatus(true);

    dispatch(getAllFeeds(allFeedData?.current_page + 1));
    setWaiter(true);
    setTimeout(() => {
      setResult(allFeedDataMore);
    }, 1000);
  }, [allFeedData?.current_page, trackCartStatus]);
   

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};



  const refreshViewList = () => {
    setRefreshing(true);

    dispatch(getAllFeeds());
    wait(2000).then(() => setRefreshing(false));
}


    
    const GeneralRender  = useCallback(
       ({ item, index}) => (
      <>
        <RenderCategoriesMenu
            key={item?.id}
            item={item}
            index={index}
            navigation={navigation}
            props={props}
            userData={user}
            activeDotData={activeDot}
          />
      </>
 ),
   [activeDot,onEnd]
 );
  



  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" hidden={true} />

      {/* Scrollable Content */}
      <View style={styles.headerCover}>
        <Text style={styles.headerTitle}>Faceless Counselling</Text>
      </View>
      {getFollowingData?.data?.length > 0 ?
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
        : null }
      <View style={{ flex: 1 }}>

     
        <FlatList
          contentContainerStyle={styles.alignItemsCenter}
          data={waiter ? result : allFeedData }
          vertical
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={handleVieweableItemsChanged}
      
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
            minimumViewTime: 200,
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
            <GeneralRender item={item} index={index} key={item?.id} />
           
          )}
        />
       
       
      </View>

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />

     

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />
    </View>
  );
};

export default Home;

