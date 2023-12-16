import React, {
   MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import TouchableSwipe from 'react-native-touchable-swipe';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { data } from '../../util/data';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get('screen');
import styles from './style'
import Video from "react-native-video";
import VideoPlayer from 'react-native-video-controls';
// import { FeedContent, FeedSideBar } from './components/home';
import HeaderWithGradient from '../../components/HeaderWithGradient';

import Button from '../../components/Btn'

const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
const Home = ({ navigation }) => {
  const tabBarheight = useBottomTabBarHeight();
  const [isPlaying, setIsPlaying] = React.useState("1");  
  const videoPlayer = useRef(null);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const viewPagerRef = useRef();
  const [isFetching, setIsFetching] = React.useState(false);


  vlcplayer = React.createRef();

  // Control video on feed
  const [isPaused, setIsPaused] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const onPageSelected = useCallback((e) => {
    setActivePage(e.nativeEvent.position);
    // Test (default false)
    setIsPaused(false);
  }, []);


  // // love react click event
  // const onLoveReactPress = useCallback((feedId: string) => {
  //   dispatch(loveFeed(feedId));
  // }, []);

  return ( 

    <View style={styles.container}>
      <HeaderWithGradient
      title="FIELDS"
      profileName={styles.headerText}
       />



      {/* Scrollable Content */}
      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={[
            styles.scrollContentContainer,
            { paddingBottom: tabBarheight },
          ]}>
          {data.map((item, index) => (
            <View key={item.id} style={styles.imageContainer}>
              {item.type ===  "video" ? 
            <>
             <PagerView
        style={styles.main}
        orientation="vertical"
        onPageSelected={onPageSelected}
        ref={viewPagerRef}>
       
            <View key={item.id} style={styles.pageContainer}>
              <TouchableSwipe onPress={() => setIsPaused(!isPaused)}>
                <Video
                  source={item.video}
                  resizeMode={'contain'}
                  ignoreSilentSwitch={'obey'}
                  style={styles.video}
                  muted={true}
                  paused={activePage != index || isPaused}
                />
                {isPaused && (
                  <Animated.Image
                    style={[
                      styles.playBtn,
                      // { transform: [{ scale: zoomValue }] },
                    ]}
                    source={require('./assets/icons/play.png')}
                  />
                )}
              </TouchableSwipe>
              {/* <FeedSideBar
                style={styles.sideBar}
                // feedId={feed.id}
                // accountAvatar={feed.accountAvatar}
                // love={feed.love}
                // comment={feed.comment}
                // share={feed.share}
                // isLoved={feed.isLoved}
                onLoveReact={onLoveReactPress}
              />
              <FeedContent
                style={styles.feedContent}
                // accountName={item.accountName}
                // caption={item.caption}
                // song={item.song}
              /> */}
            </View>
        
      </PagerView>
            </>  
            :
            <>
              <View style={styles.descCover}> 
                  <Text style={styles.titleText}>{item.post_title}</Text>
                  <Text style={styles.descText} numberOfLines={2}>{item.post_desc}</Text>
                </View>
              <Image
                style={styles.imageCard}
                source={item.image_url}
                resizeMode="cover"
                
              />
              <View style={styles.statCover}>
                <View style={styles.likeStat}>
                  <Image source={require("../../assets/like.png")} style={styles.likeImg} />
                  <Text>{item.post_like}k</Text>
                </View>
                <View style={styles.likeStat}>
                  <Image source={require("../../assets/relations.png")} style={styles.likeImg} />
                  <Text>{item.post_relate}k</Text>
                </View>
              </View>
              <View style={styles.aboveCover}>
                <View style={styles.posterImgCover}>
                  <Image source={item.poster_img} style={styles.posterImg} />
                </View>
                <View style={styles.posterDetails}>
                  <View style={styles.posterNameCover}>
                    <Text style={styles.posterName}>{item.poster}</Text>
                  </View>
                  <TouchableOpacity>
                  <View style={styles.subBtn}>
                    <Text style={styles.subText}>Subscribe</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={styles.postDate}>
                    <Text style={styles.dateText}>{item.post_date}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomCover}>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/like.png")} style={styles.smImg} />
                    <Text style={styles.items}>like</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/message.png")} style={styles.smImg} />
                    <Text style={styles.items}>Comment</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/relations.png")} style={styles.smImg} />
                    <Text style={styles.items}>Relations</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomInner}>
                  <TouchableOpacity style={styles.touchStyle}>
                    <Image source={require("../../assets/share.png")} style={styles.smImg} />
                    <Text style={styles.items}>Share</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </>
            }
            </View>

          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
