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
import {useSelector, useDispatch} from 'react-redux';
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIndicator } from "react-native-indicators";
import { getAllFeeds,unLikeFeed, getFeedComments, addFeedComment} from "@Request2/Feed";
import data from "./data"
import { group } from "../../util/group";
import {getUser} from "@Request2/Auth";
import Loader from "@Screen2/loader";
import {cleanAllFeed} from "@Store2/Feed";

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


import RenderCategoriesMenu from "./RenderCategoriesMenu"
import ImageView from "./ImageView";

const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 3.2;
const ITEM_HEIGHTV = ITEM_WIDTH * 1.35;

const Home = ({ navigation, props }) => {
  const dispatch = useDispatch();

  const { allFeedData, allFeedStatus, allFeedErrors } = useSelector((state) => state.feed);
  const {user} = useSelector((state) => state.auth);
  const [active, setActive] = useState('1');
  const [category, setCategory] = useState('Categories');
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
  // const boxHeight = windowHeight / 1.2; //1.2
  const boxHeight =  windowHeight / 1.3;
  const [showCategory, setShowCategory] = useState(false);
  const [catItem, setCatItem] = useState();
  const bottomSheetRefApDate = useRef();
  const bottomSheetRefMessage = useRef();
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


   useEffect(() => {
      dispatch(getAllFeeds());
      dispatch(getUser()) 
  
  }, [])


  const selectBtn = id => {
    setActive(id);
  };
  
  const selectCategory = name => {
    setCategory(name);
  };

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
            }}>
               <View style={styles.capCover}>
               <Image
                source={item?.image_url}
                style={styles.groupImg}
                resizeMode="cover"
              />

              </View>
              {/* <Text style={styles.miniCardTextInactive}>{item.title}</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          style={styles.scrollFlex}
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
               <View style={styles.capCoverInactive}>
               <Image
                source={item?.image_url}
                style={styles.groupImg}
                resizeMode="cover"
              />
             
              </View>
              {/* <Text style={styles.miniCardTextInactive}>{item.title}</Text> */}
          </TouchableOpacity>
        )}
      </>
    );
  };



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


// console.log("this are the list of feeds", allFeedData)

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

 



  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(110, 191, 12, 1)"
        hidden={true}
      />
    
        {/* {!showTopBar ?
      // <HeaderWithGradient title="FEEDS" profileName={styles.headerText} />
          <View style={styles.miniHeader}>
          <FlatList
            horizontal
            data={group}
            renderItem={ScrollList}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            scrollEnabled
          />
        </View>
        :
        null
        }  */}
         
      {/* Scrollable Content */}

      <View style={{ height:"100%"}}>
      <View style={styles.miniHeader}>
          <FlatList
            vertical
            // data={group}
            // renderItem={ScrollList}
            ListHeaderComponent={
              <FlatList
              horizontal
              data={group}
              renderItem={ScrollList}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled
            />
            }
            ListFooterComponent={ <OffsetYProvider
              columnsPerRow={1}
              listItemHeight={boxHeight}
              centerYStart={(windowHeight * 1) / 3.5}
              centerYEnd={(windowHeight * 2) / 2.5}
            >
              {({ setOffsetY }) => (
                <FlatList
                  data={allFeedData?.data}
                  removeClippedSubviews={true}
                  onScroll={(ev) => {
                    setOffsetY(ev.nativeEvent.contentOffset.y);
                    setScrollUp(ev?.nativeEvent?.velocity?.y.toString().slice(0,1))
                    // console.log('the onsroll event',(scrollUp))
                   
                  }}
                  initialNumToRender={6}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => (
                    <IndexProvider index={index}>
                      {() => (
                       <RenderCategoriesMenu
                       currentIndex={index}
                       currentVisibleIndex={index}
                       navigation={navigation}
                       userData={user}
                      key={item.id}
                      //  items={item}
                       item={item}
                       index={index}
                     />
                      )}
                    </IndexProvider>
                  )}
                />
              )}
            </OffsetYProvider> }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled
          />
        </View>
       

      </View>

      <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={apDetails}
        close={closeApointmentSheet}
      />
 {/* <AppointmentDateBottomSheet
        bottomSheetRefMessage={bottomSheetRefMessage}

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
