import React, { useState, useEffect,  useMemo,
  memo, useCallback, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Video from "react-native-video";
import { InputField } from "@Component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import { getFeedById, deleteFeedMedia } from "@Request2/Feed";
import { getUser, getUserInterest } from "@Request2/Auth";
import Config from "react-native-config";
import MenuOptionBottomSheet from "./MenuOptionBottomSheet";
import DeletePrompt from "./deletePrompt";
import { cleanDeleteFeed,cleanFeedIdStatus } from "@Store2/Feed";

const MediaPost = ({ props, navigation, collections }) => {
  const dispatch = useDispatch();
  const { feedIdData,feedIdDataMore, deleteFeedStatus, deleteFeedErrors, feedIdStatus} = useSelector(
    (state) => state.feed
  );
  const { user } = useSelector((state) => state.auth);
  const [refreshing, setRefreshing] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [waiter, setWaiter] = useState(false);
  const [trackCartStatus, setTrackCartStatus] = useState(false);
  const [result, setResult] = useState({});
  const [smPause, setSmPause] = useState(false);
  const bottomSheetRefMenu = useRef();
  // const {items }= props.route.params.data;

  useEffect(() => {
    dispatch(cleanFeedIdStatus());
    dispatch(getUser());
    dispatch(getUserInterest());
    dispatch(cleanFeedIdStatus());
    const data = {id:user?.id, no:1};
    dispatch(getFeedById(data));
  }, []);

  const returnBack = () => {
    props.navigation.goBack();
  };


  useEffect(() => {
    if (deleteFeedStatus === "failed") {
      dispatch(cleanDeleteFeed());
    } else if (deleteFeedStatus === "success") {
    
      dispatch(cleanDeleteFeed());
      dispatch(getFeedById(user?.id));
      setShowDeleteModal(false);
    }
  }, [deleteFeedStatus]);

  const deleteMedia = () => {
    dispatch(deleteFeedMedia(result?.id));
  };

  const checkOption = (item) => {
    setShowLogoutModal(true);
    setResult(item);
  };

  const playNew = (item) => {
    navigation.navigate("HomeDetails", { item: item });
  };

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

    
  // const loadMoreFeeds = useCallback(() => {
  //   console.log("this page is called")
  //   setTrackCartStatus(true);
  //   const data = {id:user?.id, no:feedIdData?.current_page + 1};
  //   dispatch(getFeedById(data));
  //   setWaiter(true);
  //   setTimeout(() => {
  //    setResult(feedIdDataMore);
  //   }, 500);
  // }, [feedIdData?.current_page, trackCartStatus, waiter]);

  const loadMoreFeeds = () =>{
    // console.log("this page is called poster details", feedIdData?.current_page, feedIdData?.last_page)
    setTrackCartStatus(true);
    const data = {id:user?.id, no:feedIdData?.current_page + 1};
    dispatch(getFeedById(data));
    setWaiter(true);
    setTimeout(() => {
     setResult(feedIdDataMore);
    }, 1000);
  }


  // const ListView = ({ item, index }) => {
  //   return (
  //     <View>
  //       {item?.poster == collections?.poster ? (
  //         <TouchableOpacity key={item.id} onPress={() => playNew(item)}>
  //           <>
  //             {item.type == "video" ? (
  //               <View style={styles.bottomCard}>
  //                 <Video
  //                   source={{
  //                     uri:
  //                       `${Config?.SPACE_URL}${item?.url}` &&
  //                       `${Config?.SPACE_URL}${item?.url}`,
  //                   }}
  //                   //  source={item?.video}
  //                   style={styles.smVideoCard}
  //                   muted={true}
  //                   onLoad={() => {
  //                     //    setTimeout(setSmPause(true), 5000)
  //                     setSmPause(true);
  //                   }}
  //                   rate={1.0}
  //                   resizeMode="cover"
  //                   volume={0.0}
  //                   paused={smPause}
  //                 />
  //                 <View style={styles.miniPlay}>
  //                   <Image
  //                     source={require("@Assets2/image/film.png")}
  //                     style={styles.camImg}
  //                     resizeMode="contain"
  //                   />
  //                 </View>
  //                 <TouchableOpacity
  //                   style={styles.miniDot}
  //                   onPress={() => checkOption(item)}
  //                 >
  //                   <Icon name="dots-vertical" size={22} color="#fff" />
  //                 </TouchableOpacity>
  //               </View>
  //             ) : (
  //               <View style={styles.bottomCard}>
  //                 <Image
  //                   style={styles.imageCard}
  //                   // source={item?.image_url}
  //                   source={{
  //                     uri:
  //                       item?.url !== ""
  //                         ? `${Config?.SPACE_URL}${item?.url}`
  //                         : null,
  //                   }}
  //                   resizeMode="cover"
  //                 />
  //                 <TouchableOpacity
  //                   style={styles.miniDot}
  //                   onPress={() => checkOption(item)}
  //                 >
  //                   <Icon name="dots-vertical" size={22} color="#fff" />
  //                 </TouchableOpacity>
  //               </View>
  //             )}
  //           </>
  //         </TouchableOpacity>
  //       ) : null}
  //     </View>
  //   );
  // };

  // const DotToggle = useCallback(
  //   ({ onPress}) => (
  //         <TouchableOpacity
  //           style={styles.miniDot}
  //           onPress={onPress}>
        
  //         <Icon name="dots-vertical" size={22} color="#fff" />
  //       </TouchableOpacity> 
  //   ),
  //   []
  // );

  const DotToggle = ({ onPress }) => {
    return (
      <TouchableOpacity
      style={styles.miniDot}
      onPress={onPress}>
  
    <Icon name="dots-vertical" size={22} color="#fff" />
  </TouchableOpacity> 
);
 };





  const ListView = useCallback(
    ({ item, index, key}) => (
      <View>
     {item?.poster == collections?.poster ? (
          <TouchableOpacity key={item.id} onPress={() => playNew(item)}>
            <>
              {item.type == "video" ? (
                <View style={styles.bottomCard}>
                  <Video
                    source={{
                      uri:
                        `${Config?.SPACE_URL}${item?.url}` &&
                        `${Config?.SPACE_URL}${item?.url}`,
                    }}
                    //  source={item?.video}
                    style={styles.smVideoCard}
                    muted={true}
                //     onLoad={() => {
                //      setTimeout(setSmPause(true), 5000)

                //      setTimeout(() => {
                //       console.log("the video with id has been paused")
                //       setSmPause(true)
                
                //  }, 2000);
                   
                   // }}
                    rate={1.0}
                    resizeMode="cover"
                    volume={0.0}
                    paused={true}
                  />
                  <View style={styles.miniPlay}>
                    <Image
                      source={require("@Assets2/image/film.png")}
                      style={styles.camImg}
                      resizeMode="contain"
                    />
                  </View>

                  <DotToggle
                onPress={() => checkOption(item)}
               
              />
                 
                </View>
              ) : (
                <View style={styles.bottomCard}>
                  <Image
                    style={styles.imageCard}
                    // source={item?.image_url}
                    source={{
                      uri:
                        item?.url !== ""
                          ? `${Config?.SPACE_URL}${item?.url}`
                          : null,
                    }}
                    resizeMode="cover"
                  />
                  <TouchableOpacity
                    style={styles.miniDot}
                    onPress={() => checkOption(item)}
                  >
                    <Icon name="dots-vertical" size={22} color="#fff" />
                  </TouchableOpacity>
                </View>
              )}
            </>
          </TouchableOpacity>
        ) : null}
         </View>
),
[]
);


  return (
    <View style={styles.bottomCardCoverMedia}>
      {/* <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.bottomCardCover}
        numColumns={3}
        vertical
        data={
          feedIdData?.data?.length > 0 ? feedIdData?.data : collections?.data
        }
        keyExtractor={(item) => item.id}
        // ListEmptyComponent={EmptyPending}
        renderItem={ListView}
        ListFooterComponent={<View style={{ height: 70 }} />}
      /> */}


                <FlatList
                   scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle= {styles.bottomCardCover}
                    numColumns = {3}
                    initialNumToRender={3}
                    vertical
                    data={waiter ? result : feedIdData.data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={EmptyPending}
                  // renderItem={ListView}
                    onEndReachedThreshold={0.9}
                    bounces={false}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={3}
                    // windowSize={3}
                    onEndReached={() => {
                      if (feedIdData?.current_page < feedIdData?.last_page) {
                        loadMoreFeeds();
                      }
                    }}
                   
                    ListFooterComponent={
                      feedIdStatus === "pending" && (
                        <ActivityIndicator size="large" animating={true} color="#fff" />
                      )
                    }
                    renderItem={({ item, index }) => (
                      <ListView item={item} index={index} key={item?.id} />
                    
                    )}
                   
                />
      <MenuOptionBottomSheet
        menuOption={showLogoutModal}
        returnBack={() => setShowLogoutModal(false)}
        callDelete={() => setShowDeleteModal(true)}
        data={result}
      />

      <DeletePrompt
        deleteModal={showDeleteModal}
        returnBack={() => setShowDeleteModal(false)}
        proceed={deleteMedia}
      />
    </View>
  );
};

export default memo(MediaPost);
