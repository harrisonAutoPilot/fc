import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Video from "react-native-video";
import {useSelector, useDispatch} from 'react-redux';
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIndicator } from "react-native-indicators";
import VideoPlayer from "react-native-video-controls";
import Config from "react-native-config";
import { data } from "../../util/data";
import CategoryDetails from "../HomeFC/CategoryDetails";
import AppointmentDateBottomSheet from "../HomeFC/appointDateBottomSheet";
import styles from "./style";
import Loader from "@Screen2/loader";
import {
  cleanUnFollowUser,
  cleanFollowUser,
  cleanUserAvailableDate,
} from "@Store2/Auth";
import { getFeedById} from "@Request2/Feed";
import {cleanFeedIdStatus} from '@Store2/Feed';
import {
  unFollowUser,
  followUser,
  getAvailableDateByUserId,
  getUser,
  getUserById,
  createAppointment,
  addAppointmentMessage,
} from "@Request2/Auth";
import moment from 'moment';
import NewItems from "../PosterProfile/TabModules/Types/NewItems";
const { width } = Dimensions.get("screen");

const HomeDetails = (props) => {
  const dispatch = useDispatch();
  const [showDocument, setShowDocument] = useState(false);
  const {feedIdData,feedIdStatus,feedIdDataMore} = useSelector((state) => state.feed);
  const [newPostItem, setNewPostItem] = useState()
  const [waiter, setWaiter] = useState(false);
  const [trackCartStatus, setTrackCartStatus] = useState(false);
  // const items = props.route.params.item;
  const [items, setItems] = useState(props.route.params.item)
  const {
    user,
    createApStatus,
    createApData,
    createApErrors,
    userDateStatus,
    userIdData,
    userDateData,
   
    followData,
  } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [mute, unMute] = React.useState(false);
  const [onRepeat, setOnRepeat] = useState(false);
  const [selected, setSelected] = useState(0);
  const [result, setResult] = useState([]);
  const [detailsValue, setDetailsValue] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [playSoundId, setPlaySoundId] = useState(items.id);
  const [apDetails, setApDetails] = useState({});
  const [checkNewPost, setCheckNewPost] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [love, setLove] = useState(false);
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
  const [pauseMe, setPauseMe] = useState(false);
  const[smPause, setSmPause] = useState(false)
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight = windowHeight / 1.4;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();


  const [heartCount, setHeartCount] = useState(249);


  const playNew = (item) =>{

    setCheckNewPost(true)
    setNewPostItem(item)
    setItems(item)

  }

  const closeApointmentSheet = () => {
    bottomSheetRefApDate.current.close();
  };


  useEffect(() => {
    dispatch(getUserById(items.user_id))
    if (newPostItem && checkNewPost) {

    setItems(newPostItem)

    } else{

      setItems(props.route.params.item)

    }
  }, [newPostItem, checkNewPost]);



  const changeHeart = () => {
    setHeartCount(heartCount + 1);
  };

  const changeHeartNegate = () => {
    setHeartCount(heartCount - 1);
  };

  const checkDates = (item) => {
    dispatch(cleanUserAvailableDate());
    dispatch(getAvailableDateByUserId(items.user_id));
    setApDetails(items);
    setTimeout(() => {
      bottomSheetRefApDate.current.show();
     }, 1000);
   
  };

 
  const posterProfile = (items) =>{
    props.navigation.navigate("PosterProfile", {item:items})
}



const loadMoreFeeds = useCallback(() => {
 
  setTrackCartStatus(true);
  const data = {id:items.user_id, no:feedIdData?.current_page + 1};
  dispatch(getFeedById(data));
  setWaiter(true);
  setTimeout(() => {
   setResult(feedIdDataMore);
  }, 1000);
}, [waiter]);


useEffect(() => {
  dispatch(cleanFeedIdStatus())
  const data = {id:items.user_id, no:1};
  dispatch(getFeedById(data)) 

}, [])




  // const  CardList = props => {

  //   const item = props.item;

  //   return (
  //     <View>
  //       {item.category == items.category ? (
  //         <TouchableOpacity onPress={() => playNew(item)}>
  //            <View style={styles.listCard}>
  //         <View style={styles.videoSmCard}>
  //           {
  //             item.type == 'video' ?
  //             <View>
  //             <Video
  //                // source={item?.video}
  //                source={{ uri: `${Config?.SPACE_URL}${item?.url}` && `${Config?.SPACE_URL}${item?.url}`}}
  //                style={styles.smVideoCard}
  //                muted={mute}
  //                onLoad={() => {
  //                  setSmPause(true)
  //                }}
  //                rate={1.0}
  //                onEnd={() => setOnEnd(true)}
  //                volume={playSoundId == item.id && !mute ? 1.0 : 0.0}
  //                resizeMode="cover"
  //                repeat={onRepeat}
  //                paused={smPause}
  //              />
  //              <View style={styles.miniPlay}>
  //              <Acon name="play" size={20} color="#fff" style={styles.loveImg} />
  //              </View>
  //           </View>
             
  //           :
  //           <Image
  //           style={styles.smImageCard}
  //           source={{ uri: item?.url !== "" ? `${Config?.SPACE_URL}${item?.url}` : null}}
  //           resizeMode="cover"
  //         />
  //           }

  //         </View>
  //         <View style={styles.cardContent}>
  //           <Text style={styles.smDesc}>{item.post_desc?.slice(0, 50)}...</Text>
  //           <View style={styles.bottomMenu}>
  //             <View style={styles.smFlex}><Icon name="heart" size={16} color="red" style={styles.loveImg} /><Text style={styles.countText}>{item.post_like}</Text></View>
  //             <View style={styles.smFlex}><Acon name="message-reply-text-outline" size={16} color="#000" style={styles.loveImg} /><Text style={styles.countText}>{item?.likesCount}</Text></View>
  //             <View style={styles.smFlex}><Acon name="timer-outline" size={16} color="#000" style={styles.loveImg} /><Text style={styles.countText}>{item.post_date}</Text></View>
  //           </View>
  //         </View>
  //       </View>
  //         </TouchableOpacity>
          
  //       ) : null}
  //     </View>
  //   );
  // };




     
  const CardList  = useCallback(
    ({ item, index, key}) => (
   <>
      <View>
        {item.category == items.category ? (
          <TouchableOpacity onPress={() => playNew(item)}>
             <View style={styles.listCard}>
          <View style={styles.videoSmCard}>
            {
              item.type == 'video' ?
              <View>
              <Video
                 // source={item?.video}
                 source={{ uri: `${Config?.SPACE_URL}${item?.url}` && `${Config?.SPACE_URL}${item?.url}`}}
                 style={styles.smVideoCard}
                 muted={true}
              //    onLoad={() => {
              //     setTimeout(() => {
                   
              //       // setPauseMe(true)
              //       // setSmPause(true)
              //  }, 500);
                
              //    }}
                 rate={1.0}
               
                 onEnd={() => setOnEnd(true)}
                 volume={playSoundId == item.id && !mute ? 1.0 : 0.0}
                 resizeMode="cover"
                 repeat={onRepeat}
                 paused={pauseMe ? true : false}
               />
               <View style={styles.miniPlay}>
               <Acon name="play" size={20} color="#fff" style={styles.loveImg} />
               </View>
            </View>
             
            :
            <Image
            style={styles.smImageCard}
            source={{ uri: item?.url !== "" ? `${Config?.SPACE_URL}${item?.url}` : null}}
            resizeMode="cover"
          />
            }

          </View>
          <View style={styles.cardContent}>
            <Text style={styles.smDesc}>{item.post_desc?.slice(0, 50)}...</Text>
            <View style={styles.bottomMenu}>
              <View style={styles.smFlex}><Icon name="heart" size={16} color="red" style={styles.loveImg} /><Text style={styles.countText}>{item.post_like}</Text></View>
              <View style={styles.smFlex}><Acon name="message-reply-text-outline" size={16} color="#000" style={styles.loveImg} /><Text style={styles.countText}>{item?.likesCount}</Text></View>
              <View style={styles.smFlex}><Acon name="timer-outline" size={16} color="#000" style={styles.loveImg} /><Text style={styles.countText}>{item.post_date}</Text></View>
            </View>
          </View>
        </View>
          </TouchableOpacity>
          
        ) : null}
      </View>
   </>
),
[ items,pauseMe]
);



  const LoveToggle = useCallback(
    ({ style, onPress, myHeartCount }) => (
      <View style={styles.loveCover}>
        {love == false ? (
          <TouchableOpacity
            onPress={(items) => {
              changeHeart(items), setLove(!love);
            }}
          >
            <View>
              <Icon
                name="hearto"
                size={25}
                color="#fff"
                style={styles.loveImg}
              />
              <Text style={styles.loveCount}>{myHeartCount}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={(items) => {
              changeHeartNegate(items), setLove(love);
            }}
          >
            <View>
              <Icon name="heart" size={25} color="red" style={styles.loveImg} />
              <Text style={styles.loveCount}>{myHeartCount}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    ),
    [love]
  );

  const MessageToggle = useCallback(
    ({ onPress, messageCount }) => (
      <View style={styles.commentCover}>
        <TouchableOpacity onPress={onPress}>
          <Acon name="message-text-outline" size={25} color="#fff" />
          <Text style={styles.loveCount}>{messageCount}</Text>
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const GoBack = useCallback(
    ({ onPress, messageCount }) => (
      <View style={styles.backCover}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="arrowleft" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const ShareToggle = useCallback(
    ({ onPress }) => (
      <View style={styles.shareCover}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require("@Assets2/image/arrow.png")}
            style={styles.shareImg}
          />
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const ApointmentToggle = useCallback(
    ({ onPress }) => (
      <View style={styles.apointCover}>
        <TouchableOpacity onPress={onPress}>
          <Acon
            name="calendar-month-outline"
            size={25}
            color="#fff"
            style={styles.loveImg}
          />
        </TouchableOpacity>
      </View>
    ),
    []
  );

  const CategoryToggle = useCallback(
    ({ onPress, category }) => (
      <View style={styles.categoryCover}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
  <ScrollView>
    { newPostItem && checkNewPost ?
    <>
    <View style={styles.videoCard}>
          {items.type == "video" ? (
            <>
              <VideoPlayer
                ref={(ref) => {
                  player = ref;
                }}
                toggleResizeModeOnFullscreen={true}
                resizeMode="cover"
                source={{ uri: `${Config?.SPACE_URL}${items?.url}` && `${Config?.SPACE_URL}${items?.url}`}}
                showOnStart={true}
                controls={false}
                disableSeekbar={false}
                disableBack
                disableVolume
                muted={false}
                // volume={playSoundId == items.id && !mute ? 1.0 : 0.0}
                disableTimer={true}
                disableFullscreen
                navigator={props.navigation}
                tapAnywhereToPause={true}
                // paused={false}
                playInBackground={false}
              />
               <GoBack onPress={() => props.navigation.goBack()} />
              <View style={styles.infoCover}>
                <TouchableOpacity style={styles.titleWrapper}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                      // source={items?.poster_img}
                      source={{ uri: userIdData?.avatar?.url !== "" ? `${Config?.IMG_URL}${userIdData?.avatar?.url}` : null}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{userIdData.username}</Text>
                      <Image
                        source={require("@Assets2/image/verified.png")}
                        style={styles.verifyImg}
                      />
                    </View>
                    <Text style={styles.descWord}>
                      Family | Relationship | Career
                    </Text>
                    <Text style={styles.dateWord}>{items.post_date}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              


        
            </>
          ) : (
            <>
              <Image
                style={styles.imageCard}
                // source={items.image_url}
                source={{ uri: items?.url !== "" ? `${Config?.SPACE_URL}${items?.url}` : null}}
                resizeMode="contain"
              />
               <GoBack onPress={() => props.navigation.goBack()} />
              <View style={styles.infoCover}>
                <TouchableOpacity style={styles.titleWrapper}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                      source={{ uri: userIdData?.avatar?.url !== "" ? `${Config?.IMG_URL}${userIdData?.avatar?.url}` : null}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{userIdData.username}</Text>
                      <Image
                        source={require("@Assets2/image/verified.png")}
                        style={styles.verifyImg}
                      />
                    </View>
                    <Text style={styles.descWord}>
                      Family | Relationship | Career
                    </Text>
                    <Text style={styles.dateWord}>{items.post_date}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <CategoryToggle
                category={items?.interest?.display_name?.charAt(0)}
                onPress={() => showDetails(items?.interest?.display_name?.charAt(0))}
              /> */}
              

              {/* <LoveToggle myHeartCount={heartCount} />

              <MessageToggle messageCount={341} />

              <ShareToggle />

              <ApointmentToggle onPress={() => checkDates(items)} /> */}
            </>
          )}
    </View>
      <View style={styles.descCover}>
        <Text style={styles.postText}>{items.post_desc}</Text>
      </View>
        </>
        :
        <>
          <View style={styles.videoCard}>
          {items.type == "video" ? (
            <>
              <VideoPlayer
                ref={(ref) => {
                  player = ref;
                }}
                toggleResizeModeOnFullscreen={true}
                resizeMode="cover"
                source={{ uri: `${Config?.SPACE_URL}${items?.url}` && `${Config?.SPACE_URL}${items?.url}`}}
              
                // source={items?.video}
                showOnStart={true}
                controls={false}
                disableSeekbar={false}
                disableBack
                disableVolume
                muted={mute}
                volume={playSoundId == items.id && !mute ? 1.0 : 0.0}
                disableTimer={true}
                disableFullscreen
                navigator={props.navigation}
                tapAnywhereToPause={true}
                // paused={false}
                playInBackground={false}
              />
               <GoBack onPress={() => props.navigation.goBack()} />
              <View style={styles.infoCover}>
                <TouchableOpacity style={styles.titleWrapper} onPress={() => posterProfile(items)}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                      // source={items?.poster_img}
                      source={{ uri: userIdData?.avatar?.url !== "" ? `${Config?.IMG_URL}${userIdData?.avatar?.url}` : null}}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{userIdData.username}</Text>
                      <Image
                        source={require("@Assets2/image/verified.png")}
                        style={styles.verifyImg}
                      />
                    </View>
                    <Text style={styles.descWord}>
                      Family | Relationship | Career
                    </Text>
                    <Text style={styles.dateWord}>{moment(items?.updated_at).fromNow()}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            


            
            </>
          ) : (
            <>
              <Image
                style={styles.imageCard}
                // source={items.image_url}
                source={{ uri: items?.url !== "" ? `${Config?.SPACE_URL}${items?.url}` : null}}
                resizeMode="contain"
              />
                <GoBack onPress={() => props.navigation.goBack()} />
              <View style={styles.infoCover}>
                <TouchableOpacity style={styles.titleWrapper} onPress={() => posterProfile(items)}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                       source={{ uri: userIdData?.avatar?.url !== "" ? `${Config?.IMG_URL}${userIdData?.avatar?.url}` : null}}
                    
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{userIdData?.username}</Text>
                      <Image
                        source={require("@Assets2/image/verified.png")}
                        style={styles.verifyImg}
                      />
                    </View>
                    <Text style={styles.descWord}>
                      Family | Relationship | Career
                    </Text>
                    <Text style={styles.dateWord}>{moment(items?.updated_at).fromNow()}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <CategoryToggle
                category={items?.interest?.display_name?.charAt(0)}
                onPress={() => showDetails(items?.interest?.display_name?.charAt(0))}
              /> */}

              {/* <LoveToggle myHeartCount={heartCount} />

              <MessageToggle messageCount={341} />

              <ShareToggle />

              <ApointmentToggle onPress={() => checkDates(items)} /> */}
            </>
          )}
    </View>
    {items.description ?
      <View style={styles.descCover}>
        <Text style={styles.postText}>{items.description}</Text>
      </View>
      :
      null
    }
        </>
}
      <View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Other Post by {userIdData.username}</Text>
        </View>
        <FlatList
           scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // data={feedIdData.data}
            data={waiter ? result : feedIdData.data}
            keyExtractor={item => item.id}
            // ListEmptyComponent={ListEmptyComponent}
            // renderItem={CardList}
            initialNumToRender={3}
            // ListFooterComponent={<View style={{ height: 20 }} />}
            onEndReachedThreshold={0.5}

            bounces={false}
            removeClippedSubviews={true}
            maxToRenderPerBatch={6}
            windowSize={5}
            onEndReached={() => {
              if (feedIdData?.current_page < feedIdData?.last_page) {
                loadMoreFeeds();
              }
            }}
              getItemLayout={(data, index) => (
                { length: 100, offset: 100 * index, index }
            )}
            
            // refreshControl={
            //   <RefreshControl
            //     refreshing={refreshing}
            //     onRefresh={refreshViewList}
            //   />
            // }
            ListFooterComponent={
              feedIdStatus === "pending" && (
                <ActivityIndicator size="large" animating={true} color="#fff" />
              )
            }
            renderItem={({ item, index }) => (
              <CardList item={item} index={index} key={item?.id} />
             
            )}
           

        />
      </View>
  </ScrollView>

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />
{/* 
      <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={items}
        close={closeApointmentSheet}
      /> */}

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

    </View>
  );
};

export default HomeDetails;
