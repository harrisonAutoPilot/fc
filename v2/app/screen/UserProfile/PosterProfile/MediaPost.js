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
// import { getCustomers } from "@Request2/Customer";

import { data } from "../../util/data";

const MediaPost = ({props, navigation,collections}) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const[smPause, setSmPause] = useState(false)
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()
    // const {items }= props.route.params.data;
    

    console.log("this is from the other end", collections)

    const [objectValues, setObjectValues] = useState()
    const [duration, setDuration] = useState("6 Months")
  
      const returnBack = () => {
          props.navigation.goBack();
        };
  

        const playNew = (item) =>{
          navigation.navigate("HomeDetails", {item:item})
      
        
          }





    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = () => {
        setRefreshing(true);
    
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }


    // const ListView = ({ item, index }) => {

    //     return (
    //         {item?.poster == collections?.poster ?        
             
    //         <TouchableOpacity   key={item.id} onPress={() => playNew(item)}>
    //         <>
            
    //              {item.type == 'video'  ?
    //           <View style={styles.bottomCard} >
    //             <Video
    //              source={item?.video}
    //              style={styles.smVideoCard}
    //              muted={true}
    //              onLoad={() => {
    //             //    setTimeout(setSmPause(true), 5000)
    //                setSmPause(true)
    //              }}
    //              rate={1.0}
    //              resizeMode="cover"
    //              volume={0.0}
    //              paused={smPause}
             
    //            />
    //            <View style={styles.miniPlay}>
    //            <Image
    //             source={require("@Assets2/image/film.png")}
    //             style={styles.camImg}
    //             resizeMode="contain"
    //           />
    //           </View>
    //           </View>
    //             :
    //             <View style={styles.bottomCard}>
    //              <Image
    //                 style={styles.imageCard}
    //                 source={item?.image_url}
    //                 resizeMode="cover"
    //                 />
    //             </View> 
    //         }
              
    //        </>
           
    //        </TouchableOpacity>
    
    //             :
    //             null
    //             }
    //             </>
    //             ),
    //             []
    //         );
      

            // const ListView = ({ item, index }) => {

            //     return 
            //         ({ item, index }) => (
            //             <>
            //             {item?.poster == collections?.poster ?        
                         
            //             <TouchableOpacity   key={item.id} onPress={() => playNew(item)}>
            //             <>
                        
            //                  {item.type == 'video'  ?
            //               <View style={styles.bottomCard} >
            //                 <Video
            //                  source={item?.video}
            //                  style={styles.smVideoCard}
            //                  muted={true}
            //                  onLoad={() => {
            //                 //    setTimeout(setSmPause(true), 5000)
            //                    setSmPause(true)
            //                  }}
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
            //                     source={item?.image_url}
            //                     resizeMode="cover"
            //                     />
            //                 </View> 
            //             }
                          
            //            </>
                       
            //            </TouchableOpacity>
                
            //                 :
            //                 null
            //                 }
            //                 </>
            //                 ),
            // };
        


        
            const ListView = ({ item, index }) => {

                return (
                        <View>
                    {item?.poster == collections?.poster ?        
                                 
                        <TouchableOpacity   key={item.id} onPress={() => playNew(item)}>
                          <>
                        
                             {item.type == 'video'  ?
                          <View style={styles.bottomCard} >
                            <Video
                             source={item?.video}
                             style={styles.smVideoCard}
                             muted={true}
                             onLoad={() => {
                            //    setTimeout(setSmPause(true), 5000)
                               setSmPause(true)
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
                                source={item?.image_url}
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
                )
            };
        
        




    return (
      
        <View style={styles.bottomCardCover}>
           

              <FlatList
                   scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle= {styles.bottomCardCover}
                    numColumns = {3}
                    vertical
                    data={data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={EmptyPending}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
             
                   
                />


            </View>
            
    
    )
};

export default MediaPost;