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
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Video from "react-native-video";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIndicator } from "react-native-indicators";
import VideoPlayer from "react-native-video-controls";
import { data } from "../../util/data";
import CategoryDetails from "../HomeFC/CategoryDetails";
import AppointmentDateBottomSheet from "../HomeFC/appointDateBottomSheet";
import styles from "./style";
import Loader from "@Screen2/loader";
const { width } = Dimensions.get("screen");

const HomeDetails = (props) => {
  const [showDocument, setShowDocument] = useState(false);
  const [newPostItem, setNewPostItem] = useState()
  // const items = props.route.params.item;
  const [items, setItems] = useState(props.route.params.item)
  const [isLoading, setIsLoading] = useState(false);
  const [mute, unMute] = React.useState(false);
  const [onRepeat, setOnRepeat] = useState(false);
  const [selected, setSelected] = useState(0);
  const [detailsValue, setDetailsValue] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [playSoundId, setPlaySoundId] = useState(items.id);
  const [apDetails, setApDetails] = useState({});
  const [checkNewPost, setCheckNewPost] = useState(false);

  const [love, setLove] = useState(false);
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
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

  useEffect(() => {
    if (newPostItem && checkNewPost) {

    setItems(newPostItem)

    } else{

      setItems(props.route.params.item)

    }
  }, [newPostItem, checkNewPost]);


  const showDetails = (items) => {
    setShowCategory(true);
    setCatItem(items);
  };

  const changeHeart = () => {
    setHeartCount(heartCount + 1);
  };

  const changeHeartNegate = () => {
    setHeartCount(heartCount - 1);
  };

  const checkDates = (items) => {
    setApDetails(items);
    bottomSheetRefApDate.current.show();
  };

  const closeApointmentSheet = () => {
    bottomSheetRefApDate.current.close();
  };

 

  const closeDetails = (items) => {
    console.log("the item", items.id);
    setShowPreview(true);
    setDetailsValue(items.id);
  };

  const playSound = (items) => {
    unMute(false);
    setPlaySoundId(items.id);
  };
  const muteSound = (items) => {
    unMute(true);
    setPlaySoundId(items.id);
  };






  const  CardList = props => {

    const item = props.item;

    return (
      <View>
        {item.category == items.category ? (
          <TouchableOpacity onPress={() => playNew(item)}>
             <View style={styles.listCard}>
          <View style={styles.videoSmCard}>
            {
              item.type == 'img' ?
              <Image
              style={styles.smImageCard}
              source={item.image_url}
              resizeMode="cover"
            />
            :
           <View>
             <Video
                source={item?.video}
                style={styles.smVideoCard}
                muted={mute}
                onLoad={() => {
                  setSmPause(true)
                }}
                rate={1.0}
                onEnd={() => setOnEnd(true)}
                volume={playSoundId == item.id && !mute ? 1.0 : 0.0}
                resizeMode="cover"
                repeat={onRepeat}
                paused={smPause}
              />
              <View style={styles.miniPlay}>
              <Acon name="play" size={20} color="#fff" style={styles.loveImg} />
              </View>
           </View>
            }

          </View>
          <View style={styles.cardContent}>
            <Text style={styles.smDesc}>{item.post_desc?.slice(0, 50)}...</Text>
            <View style={styles.bottomMenu}>
              <View style={styles.smFlex}><Icon name="heart" size={16} color="red" style={styles.loveImg} /><Text style={styles.countText}>{item.post_like}</Text></View>
              <View style={styles.smFlex}><Acon name="message-reply-text-outline" size={16} color="#000" style={styles.loveImg} /><Text style={styles.countText}>20K</Text></View>
              <View style={styles.smFlex}><Acon name="timer-outline" size={16} color="#000" style={styles.loveImg} /><Text style={styles.countText}>{item.post_date}</Text></View>
            </View>
          </View>
        </View>
          </TouchableOpacity>
          
        ) : null}
      </View>
    );
  };



  console.log("the items", items);

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
                size={30}
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
              <Icon name="heart" size={30} color="red" style={styles.loveImg} />
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
          <Acon name="message-text-outline" size={30} color="#fff" />
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
            size={30}
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
                source={items?.video}
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
                      source={items?.poster_img}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{items.poster}</Text>
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
              <CategoryToggle
                category={items.category}
                onPress={() => showDetails(items.category)}
              />

              <LoveToggle myHeartCount={heartCount} />

              <MessageToggle messageCount={341} />

              <ShareToggle />

              <ApointmentToggle onPress={() => checkDates(items)} />


            
            </>
          ) : (
            <>
              <Image
                style={styles.imageCard}
                source={items.image_url}
                resizeMode="cover"
              />
               <GoBack onPress={() => props.navigation.goBack()} />
              <View style={styles.infoCover}>
                <TouchableOpacity style={styles.titleWrapper}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                      source={items.poster_img}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{items.poster}</Text>
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
              <CategoryToggle
                category={items.category}
                onPress={() => showDetails(items.category)}
              />

              <LoveToggle myHeartCount={heartCount} />

              <MessageToggle messageCount={341} />

              <ShareToggle />

              <ApointmentToggle onPress={() => checkDates(items)} />
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
                source={items?.video}
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
                <TouchableOpacity style={styles.titleWrapper}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                      source={items?.poster_img}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{items.poster}</Text>
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
              <CategoryToggle
                category={items.category}
                onPress={() => showDetails(items.category)}
              />

              <LoveToggle myHeartCount={heartCount} />

              <MessageToggle messageCount={341} />

              <ShareToggle />

              <ApointmentToggle onPress={() => checkDates(items)} />


            
            </>
          ) : (
            <>
              <Image
                style={styles.imageCard}
                source={items.image_url}
                resizeMode="cover"
              />
                <GoBack onPress={() => props.navigation.goBack()} />
              <View style={styles.infoCover}>
                <TouchableOpacity style={styles.titleWrapper}>
                  <View style={styles.userImgCover}>
                    <Image
                      style={styles.posterImg}
                      source={items.poster_img}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.posterCover}>
                    <View style={styles.veirifyCover}>
                      <Text style={styles.titleWord}>@{items.poster}</Text>
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
              <CategoryToggle
                category={items.category}
                onPress={() => showDetails(items.category)}
              />

              <LoveToggle myHeartCount={heartCount} />

              <MessageToggle messageCount={341} />

              <ShareToggle />

              <ApointmentToggle onPress={() => checkDates(items)} />
            </>
          )}
    </View>
      <View style={styles.descCover}>
        <Text style={styles.postText}>{items.post_desc}</Text>
      </View>
        </>
}
      <View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Similar Post</Text>
        </View>
        <FlatList
           scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={CardList}
            ListFooterComponent={<View style={{ height: 20 }} />}
            onEndReachedThreshold={0.5}
           

        />
      </View>
  </ScrollView>

      <CategoryDetails
        visibleCategory={showCategory}
        returnBack={() => setShowCategory(false)}
        title={catItem}
      />

      <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={items}
        close={closeApointmentSheet}
      />
    </View>
  );
};

export default HomeDetails;
