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
  StatusBar,
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

import RenderCategoriesMenu from "./RenderCategoriesMenu"

const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 3.2;
const ITEM_HEIGHTV = ITEM_WIDTH * 1.35;

const Home = ({ navigation, props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mute, unMute] = React.useState(true);
  const [onRepeat, setOnRepeat] = useState(false);
  const [selected, setSelected] = useState(0);
  const [detailsValue, setDetailsValue] = useState(0);
  const [showTopBar, setShowTopBar] = useState(true);
  const [playSoundId, setPlaySoundId] = useState(0);
  const [apDetails, setApDetails] = useState({});
  const [love, setLove] = useState(false);
  const [onEnd, setOnEnd] = useState(false);
  const [pause, setPause] = useState(false);
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight = windowHeight / 1.2;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();
  const [scrollUp, setScrollUp] = useState(0)

  const [heartCount, setHeartCount] = useState(249);

  const showDetails = (item) => {
    setShowCategory(true);
    setCatItem(item);
  };

  useEffect(() => {
    if(scrollUp == '-'){
      setShowTopBar(false)
    }else{
      setShowTopBar(true)
    }

   }, [scrollUp]);

  const changeHeart = () => {
    setHeartCount(heartCount + 1);
  }

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



  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(110, 191, 12, 1)"
        hidden={true}
      />
       {/* {!showTopBar ?
      <HeaderWithGradient title="FEEDS" profileName={styles.headerText} />
        :
        null
        } */}
         
      {/* Scrollable Content */}

      <View style={{ height: hp("100%") }}>
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
                setScrollUp(ev?.nativeEvent?.velocity?.y.toString().slice(0,1))
                console.log('the onsroll event',(scrollUp))
               
              }}
              initialNumToRender={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <IndexProvider index={index}>
                  {() => (
                   <RenderCategoriesMenu
                   currentIndex={index}
                   currentVisibleIndex={index}
                   navigation={navigation}
                  //  items={item}
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
