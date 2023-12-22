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
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIndicator } from "react-native-indicators";

import { data } from "../../util/data";

const { width } = Dimensions.get("screen");
import styles from "./style";
import Video from "react-native-video";
import Loader from "@Screen2/loader";
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

const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 3.2;
const ITEM_HEIGHTV = ITEM_WIDTH * 1.35;

const Home = ({ navigation, props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mute, unMute] = React.useState(true);
  const [onRepeat, setOnRepeat] = useState(false);
  const [selected, setSelected] = useState(0);
  const [detailsValue, setDetailsValue] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [playSoundId, setPlaySoundId] = useState(0);
  const [apDetails, setApDetails] = useState({});
  const [love, setLove] = useState(false);
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight = windowHeight / 1.4;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();

  const [heartCount, setHeartCount] = useState(249);

  const showDetails = (item) => {
    setShowCategory(true);
    setCatItem(item);
  };

  const changeHeart = () => {
    setHeartCount(heartCount + 1);
  };

  const changeHeartNegate = () => {
    setHeartCount(heartCount - 1);
  };

  const checkDates = (item) => {
    setApDetails(item);
    bottomSheetRefApDate.current.show();
  };

  const closeApointmentSheet = () => {
    bottomSheetRefApDate.current.close();
  };

  const closeDetails = (item) => {
    console.log("the item", item.id);
    setShowPreview(true);
    setDetailsValue(item.id);
  };

  const playSound = (item) => {
    unMute(false);
    setPlaySoundId(item.id);
  };
  const muteSound = (item) => {
    unMute(true);
    setPlaySoundId(item.id);
  };


  const goDetails = (item) =>{
  navigation.navigate("HomeDetails", {item:item})
  }

  const LoveToggle = useCallback(
    ({ style, onPress, myHeartCount }) => (
      <View style={styles.loveCover}>
        {love == false ? (
          <TouchableOpacity
            onPress={(item) => {
              changeHeart(item), setLove(!love);
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
            onPress={(item) => {
              changeHeartNegate(item), setLove(love);
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

  console.log("the value", detailsValue);

  const RenderCategoriesMenu = React.memo(
    ({ item, index, currentIndex, currentVisibleIndex }) => {
      return (
        <View style={styles.imageContainer}>
          {item.type == "img" ? (
            <ImageView item={item} />
          ) : (
            <InCenterConsumer>
              {({ isInCenter }) =>
                isInCenter ? (
                  <View key={item.id} style={styles.videoCardt}>
                   
                    <Video
                      source={item?.video}
                      style={{ width: "100%", height: "100%", borderRadius: 0 }}
                      muted={mute}
                      onLoad={() => {
                        setSelected(item.id), setOnEnd(false);
                      }}
                      rate={1.0}
                      onEnd={() => setOnEnd(true)}
                      volume={playSoundId == item.id && !mute ? 1.0 : 0.0}
                      resizeMode="cover"
                      repeat={onRepeat}
                      paused={pause}
                    />
                     <View style={styles.infoCover}>
                      <TouchableOpacity style={styles.titleWrapper}>
                        <View style={styles.userImgCover}>
                          <Image
                            style={styles.posterImg}
                            source={item.poster_img}
                            resizeMode="cover"
                          />
                        </View>
                        <View style={styles.posterCover}>
                          <View style={styles.veirifyCover}>
                            <Text style={styles.titleWord}>@{item.poster}</Text>
                            <Image
                              source={require("@Assets2/image/verified.png")}
                              style={styles.verifyImg}
                            />
                          </View>
                          <Text style={styles.descWord}>
                            Family | Relationship | Career
                          </Text>
                          <Text style={styles.dateWord}>{item.post_date}</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.leftWrapper}>
                        <TouchableOpacity style={styles.followCover}>
                          <Text style={styles.followText}>follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Acon name="dots-vertical" size={20} color="#fff" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <CategoryToggle
                      category={item.category}
                      onPress={() => showDetails(item.category)}
                    />

                    <LoveToggle myHeartCount={heartCount} />

                    <MessageToggle messageCount={341} />

                    <ShareToggle />

                    <ApointmentToggle onPress={() => checkDates(item)} />

                    {/* <SoundToggle
                  // share={mute}
                  onPress={() => { unMute(!mute) }}
                  onPressNew={() => unMute(!mute)}
                /> */}

                    <View style={styles.soundCover}>
                      {playSoundId == item.id && !mute ? (
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
                    </View>
                    {item.id === selected && onEnd ? (
                      <VideoEnds
                        onPress={() => {
                          setOnRepeat(!onRepeat),
                            console.log("the repeat was initiated");
                        }}
                      />
                    ) : null}

                    {detailsValue == item.id && showPreview ? null : (
                      <View style={styles.previewContainer}>
                        <View style={styles.previewInner}>
                          {item.post_desc.length > 100 ? (
                            <Text style={styles.descText}>
                              {item.post_desc?.slice(0, 100)}...
                            </Text>
                          ) : (
                            <Text style={styles.descText}>
                              {item.post_desc}
                            </Text>
                          )}
                          {item?.post_desc?.length > 100 ? (
                            <View style={styles.moreCover}>
                              <TouchableOpacity onPress={() => goDetails(item)}>
                                <Text style={styles.readmore}>
                                  Read more {">>"}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          ) : null}
                        </View>
                        <TouchableOpacity onPress={() => closeDetails(item)}>
                          <Acon
                            name="close-circle-outline"
                            size={20}
                            color="#fff"
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                ) : (
                  <View key={item.id} style={styles.videoCardt}>
                    <Video
                      source={item?.video}
                      rate={1.0}
                      volume={1.0}
                      muted={true}
                      resizeMode="cover"
                      paused={currentIndex !== currentVisibleIndex}
                    />
                    <View style={styles.indicatorCover}>
                      <MaterialIndicator
                        animating={true}
                        color="#5f9a32"
                        size={38}
                      />
                      <Image
                        source={require("../../assets/play-button-arrowhead.png")}
                        style={styles.loadImg}
                      />
                    </View>
                  </View>
                )
              }
            </InCenterConsumer>
          )}
        </View>
      );
    }
  );

  const ImageView  = React.memo(
    ({ item }) => {
      return (
      <View style={styles.videoCardt}>
    
        <Image
          style={styles.imageCard}
          source={item.image_url}
          resizeMode="cover"
        />
  <View style={styles.infoCover}>
                      <TouchableOpacity style={styles.titleWrapper}>
                        <View style={styles.userImgCover}>
                          <Image
                            style={styles.posterImg}
                            source={item.poster_img}
                            resizeMode="cover"
                          />
                        </View>
                        <View style={styles.posterCover}>
                          <View style={styles.veirifyCover}>
                            <Text style={styles.titleWord}>@{item.poster}</Text>
                            <Image
                              source={require("@Assets2/image/verified.png")}
                              style={styles.verifyImg}
                            />
                          </View>
                          <Text style={styles.descWord}>
                            Family | Relationship | Career
                          </Text>
                          <Text style={styles.dateWord}>{item.post_date}</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.leftWrapper}>
                        <TouchableOpacity style={styles.followCover}>
                          <Text style={styles.followText}>follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Acon name="dots-vertical" size={20} color="#fff" />
                        </TouchableOpacity>
                      </View>
                    </View>
        <CategoryToggle
          category={item.category}
          onPress={() => showDetails()}
        />

        <LoveToggle myHeartCount={heartCount} />
        <MessageToggle messageCount={341} />
        <ShareToggle />
        <ApointmentToggle onPress={() => checkDates(item)} />

        {detailsValue == item.id && showPreview ? null : (
          <View style={styles.previewContainer}>
            <View style={styles.previewInner}>
              {item.post_desc.length > 100 ? (
                <Text style={styles.descText}>
                  {item.post_desc?.slice(0, 100)}...
                </Text>
              ) : (
                <Text style={styles.descText}>{item.post_desc}</Text>
              )}
              {item?.post_desc?.length > 100 ? (
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
      </View>
     );
    }
  );

  return (
    <View style={styles.container}>
      <HeaderWithGradient title="FIELDS" profileName={styles.headerText} />
      {/* Scrollable Content */}

      <View style={{ height: hp("85%") }}>
        <OffsetYProvider
          columnsPerRow={1}
          listItemHeight={boxHeight}
          centerYStart={(windowHeight * 1) / 3.5}
          centerYEnd={(windowHeight * 2) / 2.5}
        >
          {({ setOffsetY }) => (
            <FlatList
              data={data}
              removeClippedSubviews={true}
              onScroll={(ev) => {
                setOffsetY(ev.nativeEvent.contentOffset.y);
              }}
              initialNumToRender={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <IndexProvider index={index}>
                  {() => (
                    <RenderCategoriesMenu
                      currentIndex={index}
                      currentVisibleIndex={index}
                      item={item}
                      index={index}
                    />
                  )}
                </IndexProvider>
              )}
            />
          )}
        </OffsetYProvider>
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
    </View>
  );
};

export default Home;
