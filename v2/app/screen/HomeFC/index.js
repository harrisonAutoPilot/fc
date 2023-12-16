import React, {
 useEffect,
 useRef,
 useMemo,
 useCallback,
 useState} from 'react';
import {
 View,
 Text,
 StyleSheet,
 Image,
 FlatList,
 Dimensions,
 TouchableOpacity,

} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Acon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MaterialIndicator} from 'react-native-indicators';

import { data } from '../../util/data';

const { width } = Dimensions.get('screen');
import styles from './style'
import Video from "react-native-video";
import Loader from "@Screen2/loader";
import HeaderWithGradient from '../../components/HeaderWithGradient';
import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer
} from "@n1ru4l/react-in-center-of-screen";
import AppointmentDateBottomSheet from "./appointDateBottomSheet"
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const ITEM_WIDTH = width * 1 ;
const ITEM_HEIGHT = ITEM_WIDTH * 3.2;
const ITEM_HEIGHTV =  ITEM_WIDTH * 1.35;



const Home = ({ navigation }) => { 
 const [isLoading, setIsLoading] = useState(false)
 const [mute, unMute] = React.useState (true)
 const [onRepeat, setOnRepeat] = useState(false)
 const [selected, setSelected] = useState(0)
 const [apDetails, setApDetails] = useState({})
 const [love, setLove] = useState(false)
 const [onEnd, setOnEnd] = useState(false)
 const [ pause, setPause] = useState(false)
 const { height: windowHeight } = Dimensions.get("window");
 const boxHeight = windowHeight / 3;

 const bottomSheetRefApDate = useRef()

 const [heartCount, setHeartCount] = useState(249)




 const changeHeart =()=>{

  setHeartCount( heartCount + 1)

 }

 const changeHeartNegate =()=>{

  setHeartCount( heartCount - 1)
 }

 const checkDates = (item) =>{
setApDetails(item)
bottomSheetRefApDate.current.show()
 }

 const closeApointmentSheet = () => {
  bottomSheetRefApDate.current.close()
}



 const LoveToggle = useCallback(({style,onPress,myHeartCount}) => (
  <View style={styles.loveCover} >
    
    {
          love == false ?
         
          <TouchableOpacity  onPress={(item) => {changeHeart(item), setLove(!love)}}>
       <View>
        <Icon name="hearto" size={30} color="#fff" style={styles.loveImg} />
        <Text style={styles.loveCount}>{myHeartCount}</Text>
        </View>
         
          
          </TouchableOpacity>  
      
        :
       
        <TouchableOpacity onPress={(item) => {changeHeartNegate(item), setLove(love)}}>
           <View>
           <Icon name="heart" size={30} color="red" style={styles.loveImg} />
           <Text style={styles.loveCount}>{myHeartCount}</Text>
           </View>
       
        
        </TouchableOpacity>  
     
    }

  </View>
), [love]);

const MessageToggle = useCallback(({onPress,messageCount}) => (
    <View style={styles.commentCover} >
       <TouchableOpacity onPress={onPress}>
    
       <Acon name="message-text-outline" size={30} color="#fff" />
       <Text style={styles.loveCount}>{messageCount}</Text>
       </TouchableOpacity>  
      
      </View>
), []);

const ShareToggle = useCallback(({onPress}) => (
<View style={styles.shareCover} >
  <TouchableOpacity onPress={onPress}>

  <Image source={require("@Assets2/image/arrow.png")} style={styles.shareImg} />

  </TouchableOpacity>  
</View>
 
), []);

const ApointmentToggle = useCallback(({onPress}) => (
  <View style={styles.apointCover} >
    <TouchableOpacity onPress={onPress}>
  
    <Acon name="calendar-month-outline" size={30} color="#fff" style={styles.loveImg} />
  
    </TouchableOpacity>  
  </View>
   
  ), []);

const VideoEnds = useCallback(({onPress, onEnd}) => (
  <View style={styles.replayCover}>
  <Image source={require("../../assets/mee.jpg")} style={styles.appLogoSm} />
  <TouchableOpacity style={styles.replayBtn} onPress={onPress}>
    <Text style={styles.replayText}>REPLAY</Text>
  </TouchableOpacity>
  </View>
   
  ), [onEnd]);

      const SoundToggle = useCallback(({onPress, onPressNew,status}) => (
  <View style={styles.soundCover}>
  {
    mute ?

    <TouchableOpacity onPress={onPress}>
 
    <Image source={require("../../assets/mute-2.png")} style={styles.speakerImg} />
   
    </TouchableOpacity>  
  
  :
 
  <TouchableOpacity onPress={onPressNew}>
   
  <Image source={require("../../assets/volume.png")} style={styles.speakerImg} />
 
  </TouchableOpacity>  

  }
  </View>
  ), []);



 const RenderCategoriesMenu = React.memo(({ item,index,currentIndex,currentVisibleIndex }) => {
  return   (<View style={styles.imageContainer}>
  {item.type == 'img' ? (<ImageView item={item} />) : (
    <InCenterConsumer>
    {({ isInCenter}) =>
      isInCenter ?
     <View key={item.id} style={styles.videoCardt}>
       <View style={styles.infoCover}>
          <View style={styles.userImgCover}>
          <Image
          style={styles.posterImg}
          source={item.poster_img}
          resizeMode="cover" 
          />
          </View>
          <TouchableOpacity>
            <Acon name="dots-vertical" size={20} color="#000" />
          </TouchableOpacity>
        </View>
     <Video
       source={item?.video}
       style={{width:'100%', height:'100%', borderRadius:0}}
       muted={mute}
       onLoad={() => {setSelected(item.id), setOnEnd(false)}}
       rate={1.0}
       onEnd={() => setOnEnd(true)}
       volume={1.0}
       resizeMode="cover"
       repeat={onRepeat}
       paused={pause}
     
     />
       
       <LoveToggle
       myHeartCount={heartCount}

       /> 
       
       <MessageToggle
        messageCount={341}  
      /> 
     
        <ShareToggle />

        <ApointmentToggle onPress={() => checkDates(item)}/>
        
        <SoundToggle
          // share={mute}
          onPress={() => {unMute(!mute)}}
          onPressNew={() => unMute(!mute)}
        /> 
      {item.id === selected && onEnd ?
        <VideoEnds
        onPress={() => {setOnRepeat(!onRepeat), console.log("the repeat was initiated")}}
        />: null}
     
       
  
     </View>
  
       : (
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
            <MaterialIndicator animating = {true} color='#5f9a32' size={38} />
            <Image source={require("../../assets/play-button-arrowhead.png")} style={styles.loadImg} />
          </View>
     
         
       </View>
          )
       }
                    
                  </InCenterConsumer>
                  ) }
                  
                </View>)
                });


                 const ImageView = ({ item }) => {
                  return (
                    <View style={styles.videoCardt}>
                      <View style={styles.infoCover}>
                        <View style={styles.userImgCover}>
                        <Image
                        style={styles.posterImg}
                        source={item.poster_img}
                        resizeMode="cover" 
                        />
                        </View>
                        <TouchableOpacity>
                          <Acon name="dots-vertical" size={20} color="#000" />
                        </TouchableOpacity>
                      </View>
                     <Image
                        style={styles.imageCard}
                        source={item.image_url}
                        resizeMode="cover" 
                        />
                    </View>
                  )
                               };

 return ( 

   <View style={styles.container}>
     <HeaderWithGradient
     title="FIELDS"
     profileName={styles.headerText}
      />
     {/* Scrollable Content */}
  
    <OffsetYProvider
        columnsPerRow={1}
        // listItemHeight={hp('100%')}
        // centerYStart={hp('30%')}
        // centerYEnd={hp('90%')}
        listItemHeight={ITEM_HEIGHTV}
        centerYStart={(windowHeight * 1) / 6}
        //  centerYStart={hp('10%')}
        // centerYEnd={windowHeight - 200}
        centerYEnd={(windowHeight * 2) / 3}>
      
        {({ setOffsetY }) => (
          <FlatList
            data={data}
            removeClippedSubviews={true}
  
            onScroll={ev => {
              setOffsetY(ev.nativeEvent.contentOffset.y);
            }}
            initialNumToRender={3}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <IndexProvider index={index}>
                {() => (
                 
                  <RenderCategoriesMenu 
                  currentIndex={index}
                  currentVisibleIndex={index}
                   item ={item}
                   index = {index}/>
                )}
              </IndexProvider>
            )}
          />
        )}
      </OffsetYProvider>

      <AppointmentDateBottomSheet
          bottomSheetRefStart ={bottomSheetRefApDate}
          // startDate={(date) => {
          //   confirmCalendarFrom(date)
          //   setFromDate(date)
          //   }}   
          close={closeApointmentSheet}
          />
   
      {/* <Loader isVisible={isLoading} /> */}
   </View>
 );
};

export default Home;
