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

 import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen';
 
 
 const ITEM_WIDTH = width * 1 - 15;
 const ITEM_HEIGHT = ITEM_WIDTH * 3.2;
 const ITEM_HEIGHTV = ITEM_WIDTH * 1.25;
 
 
 
 const Home = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(false);  
  const [isLoading, setIsLoading] = useState(false)
  const [currentVisibleIndex , setCurrentVisibleIndex] = useState(0)
  const [mute, unMute] = React.useState (true)
  const [selected, setSelected] = useState(0)
  const [love, setLove] = useState(false)
  const { height: windowHeight } = Dimensions.get("window");
  const boxHeight = windowHeight / 3;
 
  const [heartCount, setHeartCount] = useState(249)
 
 
 
 
  const changeHeart =()=>{
 
   setHeartCount( heartCount + 1)
 
   console.log("this is the love", love)
  }
 
  const changeHeartNegate =()=>{
 
   setHeartCount( heartCount - 1)
 
   console.log("this is the love", love)
  }
 
 
 console.log("this is the selected", selected)
 
  const LoveToggle = useCallback(({
   style,
   onPress,
   myHeartCount
 }) => (
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
        
         <TouchableOpacity onPress={() => {changeHeartNegate(), setLove(!love)}}>
            <View>
            <Icon name="heart" size={30} color="red" style={styles.loveImg} />
            <Text style={styles.loveCount}>{myHeartCount}</Text>
            </View>
        
         
         </TouchableOpacity>  
      
     }
 
   </View>
 ), []);
 
 const MessageToggle = useCallback(({
 
   onPress,
  messageCount
 }) => (
     <View style={styles.commentCover} >
        <TouchableOpacity onPress={onPress}>
     
        <Acon name="message-text-outline" size={30} color="#fff" style={styles.loveImg} />
       
        </TouchableOpacity>  
        <Text style={styles.loveCount}>{messageCount}</Text>
       </View>
 ), []);
 
 
 
 
 
  const RenderCategoriesMenu = React.memo(({ item,index,currentIndex,currentVisibleIndex }) => {
   return   (<View style={styles.imageContainer}>
   {item.type == 'img' ? (<ImageView item={item} />) : (
     <InCenterConsumer>
     {({ isInCenter}) =>
       isInCenter ?
      <View key={item.id} style={styles.videoCardt}>
      <Video
        source={item?.video}
        style={{width:'100%', height:'100%', borderRadius:8}}
        muted={mute}
        rate={1.0}
        volume={1.0}
        onLoad={setSelected(item.id)}
        resizeMode="cover"
        paused={false}
      
      />
        {item.id == selected ?
        <LoveToggle
        myHeartCount={heartCount}
 
        />
        :
        null}
 
        {item.id == selected &&
        <MessageToggle
         messageCount={341}  
       />}
           
 
 
     
      
   
      <View style={styles.shareCover} >
        <TouchableOpacity onPress={() => unMute(false)}>
     
        <Image source={require("@Assets2/image/arrow.png")} style={styles.loveImg} />
       
        </TouchableOpacity>  
        </View>
      {
        mute ?
        <View style={styles.soundCover} >
        <TouchableOpacity onPress={() => unMute(false)}>
     
        <Image source={require("../../assets/mute-2.png")} style={styles.speakerImg} />
       
        </TouchableOpacity>  
        </View>
      :
      <View style={styles.soundCover} >
      <TouchableOpacity onPress={() => unMute(true)}>
       
      <Image source={require("../../assets/volume.png")} style={styles.speakerImg} />
     
      </TouchableOpacity>  
      </View>
      }
   
   
      </View>
    
     
        
     
     
        : (
         <View key={item.id} style={styles.videoCard}>
 
         <Video
            source={item?.video}
            rate={1.0}
            volume={1.0}
            muted={true}
            resizeMode="cover"
            paused={currentIndex !== currentVisibleIndex}
          />
           <View style={styles.indicatorCover}>
             <MaterialIndicator animating = {true} color='#5f9a32' size={110} />
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
                     <View style={styles.videoCard}>
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
         // centerYStart={(windowHeight * 1) / 6}
          centerYStart={hp('10%')}
         centerYEnd={windowHeight - 200}
         // centerYEnd={(windowHeight * 2) / 1}
       >
         {({ setOffsetY }) => (
           <FlatList
             data={data}
             removeClippedSubviews={true}
   
             onScroll={ev => {
               setOffsetY(ev.nativeEvent.contentOffset.y);
             }}
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
 
 
    
       {/* <Loader isVisible={isLoading} /> */}
    </View>
  );
 };
 
 export default Home;
 