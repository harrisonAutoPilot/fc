import React, { useState, useEffect, useCallback, useRef } from "react";
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
import { cleanFeedIdStatus } from "@Store2/Feed";
import Config from "react-native-config";
import MenuOptionBottomSheet from "./MenuOptionBottomSheet";
import DeletePrompt from "./deletePrompt";
import { cleanDeleteFeed } from "@Store2/Feed";

const MediaPost = ({ props, navigation, collections }) => {
  const dispatch = useDispatch();
  const { feedIdData, deleteFeedStatus, deleteFeedErrors } = useSelector(
    (state) => state.feed
  );
  const { user } = useSelector((state) => state.auth);
  const [refreshing, setRefreshing] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [result, setResult] = useState({});
  const [smPause, setSmPause] = useState(false);
  const bottomSheetRefMenu = useRef();
  // const {items }= props.route.params.data;

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserInterest());
    dispatch(cleanFeedIdStatus());
    dispatch(getFeedById(user?.id));
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
    console.log("delete item has been called odimnobi oooo", result);
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

  const refreshView = () => {
    setRefreshing(true);

    dispatch(getCustomers());
    wait(2000).then(() => setRefreshing(false));
  };

  const ListView = ({ item, index }) => {
    return (
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
                    onLoad={() => {
                      //    setTimeout(setSmPause(true), 5000)
                      setSmPause(true);
                    }}
                    rate={1.0}
                    resizeMode="cover"
                    volume={0.0}
                    paused={smPause}
                  />
                  <View style={styles.miniPlay}>
                    <Image
                      source={require("@Assets2/image/film.png")}
                      style={styles.camImg}
                      resizeMode="contain"
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.miniDot}
                    onPress={() => checkOption(item)}
                  >
                    <Icon name="dots-vertical" size={22} color="#fff" />
                  </TouchableOpacity>
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
    );
  };

  return (
    <View style={styles.bottomCardCover}>
      <FlatList
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

export default MediaPost;
