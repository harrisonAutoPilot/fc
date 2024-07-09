import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Video from "react-native-video";
import { InputField } from "@Component";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import { getFeedById} from "@Request2/Feed";
import {cleanFeedIdStatus} from '@Store2/Feed';
import Config from "react-native-config";


const MediaPost = ({props, navigation,collections}) => {
    const dispatch = useDispatch();
    const {feedIdData,feedIdStatus,feedIdDataMore} = useSelector((state) => state.feed);
    const [refreshing, setRefreshing] = useState(false);
    const [waiter, setWaiter] = useState(false);
    const [trackCartStatus, setTrackCartStatus] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const[smPause, setSmPause] = useState(false)
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()
    // const {items }= props.route.params.data;



    
    const loadMoreFeeds = useCallback(() => {
      // console.log("this page is called", feedIdData?.current_page, feedIdData?.last_page)
      setTrackCartStatus(true);
      const data = {id:collections?.user_id, no:feedIdData?.current_page + 1};
      dispatch(getFeedById(data));
      setWaiter(true);
      setTimeout(() => {
       setResult(feedIdDataMore);
      }, 500);
    }, [trackCartStatus, waiter]);
    

        const playNew = (item) =>{
          navigation.navigate("HomeDetails", {item:item})
    
          }

          useEffect(() => {
            dispatch(cleanFeedIdStatus())
            const data = {id:collections.user_id, no:1};
            dispatch(getFeedById(data)) 
        
        }, [])




    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = () => {
        setRefreshing(true);
    
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }




    const ListView = useCallback(
      ({ item, index, key}) => (
        <View>
        {item?.poster == collections?.poster ?        
                     
            <TouchableOpacity   key={item.id} onPress={() => playNew(item)}>
              <>
            
                 {item.type == 'video'  ?
              <View style={styles.bottomCard} >
                <Video
                 source={{ uri: `${Config?.SPACE_URL}${item?.url}` && `${Config?.SPACE_URL}${item?.url}`}}
                //  source={item?.video}
                 style={styles.smVideoCard}
                 muted={true}
                //  onLoad={() => {
                // //    setTimeout(setSmPause(true), 5000)
                //    setSmPause(true)
                //  }}
                    onLoad={() => {
                      setTimeout(() => {
                        setSmPause(true)
                      
                  
                   }, 200);
                    
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
              </View>
                :
                <View style={styles.bottomCard}>
                 <Image
                    style={styles.imageCard}
                    // source={item?.image_url}
                    source={{ uri: item?.url !== "" ? `${Config?.SPACE_URL}${item?.url}` : null}}
                    resizeMode="cover"
                    />
                </View> 
            }
              
           </>
           
           </TouchableOpacity>
    
                :
                null
                }
           </View>
  ),
  [collections,waiter]
  );
  


        
            // const ListView = ({ item, index }) => {

            //     return (
            //             <View>
            //         {item?.poster == collections?.poster ?        
                                 
            //             <TouchableOpacity   key={item.id} onPress={() => playNew(item)}>
            //               <>
                        
            //                  {item.type == 'video'  ?
            //               <View style={styles.bottomCard} >
            //                 <Video
            //                  source={{ uri: `${Config?.SPACE_URL}${item?.url}` && `${Config?.SPACE_URL}${item?.url}`}}
            //                 //  source={item?.video}
            //                  style={styles.smVideoCard}
            //                  muted={true}
            //                 //  onLoad={() => {
            //                 // //    setTimeout(setSmPause(true), 5000)
            //                 //    setSmPause(true)
            //                 //  }}
            //                     onLoad={() => {
            //                       setTimeout(() => {
            //                         setSmPause(true)
            //                         // setPauseMe(true)
                              
            //                    }, 2000);
                                
            //                      }}
            //                  rate={1.0}
            //                  resizeMode="cover"
            //                  volume={0.0}
            //                  paused={smPause}

            //                />
            //                <View style={styles.miniPlay}>
            //                <Image
            //                 source={require("@Assets2/image/film.png")}
            //                 style={styles.camImg}
            //                 resizeMode="contain"
            //               />
            //               </View>
            //               </View>
            //                 :
            //                 <View style={styles.bottomCard}>
            //                  <Image
            //                     style={styles.imageCard}
            //                     // source={item?.image_url}
            //                     source={{ uri: item?.url !== "" ? `${Config?.SPACE_URL}${item?.url}` : null}}
            //                     resizeMode="cover"
            //                     />
            //                 </View> 
            //             }
                          
            //            </>
                       
            //            </TouchableOpacity>
                
            //                 :
            //                 null
            //                 }
            //            </View>
            //     )
            // };
        
        




    return (
      
        <View style={styles.bottomCardCover}>
           

              <FlatList
                   scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle= {styles.bottomCardCover}
                    numColumns = {3}
                    initialNumToRender={3}
                    vertical
                    data={waiter ? result : feedIdData.data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={EmptyPending}
                    // renderItem={ListView}
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

                    ListFooterComponent={
                      feedIdStatus === "pending" && (
                        <ActivityIndicator size="large" animating={true} color="#fff" />
                      )
                    }
                    renderItem={({ item, index }) => (
                      <ListView item={item} index={index} key={item?.id} />
                    
                    )}
                   
                />


            </View>
            
    
    )
};

export default MediaPost;