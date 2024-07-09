import React, { useState, useRef} from "react";
import { View, StyleSheet, Text, Image,  Dimensions, } from "react-native";
import Video from "react-native-video";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import SubHeader from '../../components/SubHeader';
import { sub } from '../../util/sub';
import { sort } from '../../util/sort';
import styles from './style';
import { data } from '../../util/data';
import { subVid } from '../../util/subVid';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const { width } = Dimensions.get('screen');



const Subscriptions = (props) => {
  const [active, setActive] = useState("0");
  const [category, setCategory] = useState("All");


  const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 2.2;
  const tabBarheight = useBottomTabBarHeight();
  const [isPlaying, setIsPlaying] = React.useState("1");  
  const videoPlayer = useRef(null);

  const selectBtn = id => {
    setActive(id);
  };
  const selectCategory = name => {
    setCategory(name);
    console.log("you selected:" + name);
  };




  return (
    <View style={styles.vontainer}>
      <SubHeader username="SUBSCRIBTION"  styles={styles.headerText}/>
     
      {/* This is where the layerone starts */}
      <View style={styles.layerOne}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {sub.map((item) => (
            <View style={styles.scrollCover}>
              <View style={styles.imgCover} >
                <Image source={item.image_url} style={styles.subImg} />
                {item.check === 'blue' ?

                  <View style={styles.redDot}></View>
                  :
                  <View style={styles.blueDot}></View>

                }
                <Text numberOfLines={1} style={styles.subName}>{item.name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* This is where the layerone ends */}


      {/* This is where layertwo starts */}
      <View style={styles.layerTwo}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {sort.map((item) => (

            <TouchableOpacity onPress={() => { selectBtn(item.id);selectCategory(item.name)  }}>
              {active === item.id ?
                <TouchableOpacity onPress={() => { selectBtn(item.id); selectCategory(item.name) }}>
                  <View style={styles.scrollCover} key={item.id}>
                    <View style={styles.sortCoverSelected}>
                      <Text numberOfLines={1} style={styles.sortNameSelected}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => { selectBtn(item.id);selectCategory(item.name)  }}>
                  <View style={styles.scrollCover} key={item.id}>
                    <View style={styles.sortCover} >
                      <Text numberOfLines={1} style={styles.sortName}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              }
            </TouchableOpacity>

          ))}
        </ScrollView>
      </View>
     
      {/* This is where the layertwo ends */}

      {/* This is where layerThree starts */}

      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={[
            styles.scrollContentContainer,
            { paddingBottom: tabBarheight },
          ]}>
          {subVid.map((item) => (
            <View key={item.id} style={styles.imageContainer}>
              {item.type ===  "live" ? 
            <>
             
              
                    <Video
                    ref={(ref) => {
                      player = ref
                      }}
                     style={styles.imageCard}
                     resizeMode="cover"
                      source={item.video}
                      controls={true}
                      paused={true}
                      playInBackground={false}
                    />
                
             
               <View style={styles.watchDescCover}>
               <Image source={item.poster_img} style={styles.watchLogoImg} />
               <View style={styles.descContainer}> 
                  <View style={styles.descCover}>
                  <Text style={styles.titleText} numberOfLines={2}>{item.post_title}</Text>
                  <Text style={styles.descText} numberOfLines={2}>{item.post_desc}</Text>
                  </View>
                  <Image source={require("../../assets/more.png")} style={styles.moreImg} />
                </View>
                </View>    
              <View style={styles.statCover}>
              <Image source={require("../../assets/seen.png")} style={styles.eyeImg} />
              <Text style={styles.watchingText}>46</Text>
  
              </View>
              <View style={styles.statCoverLive}>
               <Text style={styles.liveText}>LIVE</Text>
              </View>
              <View style={styles.aboveCover}>
                
             
                {/* <View style={styles.posterImgCover}>
                  <Image source={item.poster_img} style={styles.posterImg} />
                </View> */}
              </View>
              
            </>  
:
item.type ===  "past" ? 
<>
 
  
        <Video
        ref={(ref) => {
          player = ref
          }}
         style={styles.imageCard}
         resizeMode="cover"
          source={item.video}
          controls={true}
          paused={true}
          playInBackground={false}
        />
    
 
   <View style={styles.watchDescCover}>
   <Image source={item.poster_img} style={styles.watchLogoImg} />
   <View style={styles.descContainer}> 
      <View style={styles.descCover}>
      <Text style={styles.titleText} numberOfLines={2}>{item.post_title}</Text>
      
     <View style={styles.pastCover}>
     <Text style={styles.descText} numberOfLines={1}>{item.poster} | </Text>
     <Text style={styles.descText} numberOfLines={1}>{item.number_viewed}views | </Text>
     <Text style={styles.descText} numberOfLines={1}>{item.post_date}</Text>
     </View>
      </View>
      <Image source={require("../../assets/more.png")} style={styles.moreImg} />
    </View>
    </View>    
 
  <View style={styles.statCoverPast}>
   <Text style={styles.liveText}>12:3</Text>
  </View>
  <View style={styles.aboveCover}>
    
 
  
  </View>
  
</>  
            :
            <>
 
  
            <Video
            ref={(ref) => {
              player = ref
              }}
             style={styles.imageCard}
             resizeMode="cover"
              source={item.video}
              controls={true}
              paused={true}
              playInBackground={false}
            />
        
     
       <View style={styles.watchDescCover}>
       <Image source={item.poster_img} style={styles.watchLogoImg} />
       <View style={styles.descContainer}> 
          <View style={styles.descCover}>
          <Text style={styles.titleText} numberOfLines={2}>{item.post_title}</Text>
          
         <View style={styles.pastCover}>
         <Text style={styles.descText} numberOfLines={1}>{item.poster} | </Text>
         <Text style={styles.descText} numberOfLines={1}>{item.number_viewed}views | </Text>
         <Text style={styles.descText} numberOfLines={1}>{item.post_date}</Text>
         </View>
          </View>
          <Image source={require("../../assets/more.png")} style={styles.moreImg} />
        </View>
        </View>    
     
      <View style={styles.statCoverShort}>
       <Text style={styles.shortText}>Short</Text>
      </View>
      <View style={styles.aboveCover}>
        
     
      
      </View>
      
    </>  
           }
            </View>

          ))}
        </ScrollView>
      </View>



      {/* This is where layerThree ends */}



    </View>
  );
};



export default Subscriptions;