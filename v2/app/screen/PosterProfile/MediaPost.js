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
import { getFeedById} from "@Request2/Feed";
import {cleanFeedIdStatus} from '@Store2/Feed';
import Config from "react-native-config";


const MediaPost = ({props, navigation,collections}) => {
    const dispatch = useDispatch();
    const {feedIdData} = useSelector((state) => state.feed);
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const[smPause, setSmPause] = useState(false)
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()
    // const {items }= props.route.params.data;
    

    console.log("this is from the other end", collections)
    console.log("this againoooooo", feedIdData)


  
      const returnBack = () => {
          props.navigation.goBack();
        };
  

        const playNew = (item) =>{
          navigation.navigate("HomeDetails", {item:item})
      
        
          }

          useEffect(() => {
            dispatch(cleanFeedIdStatus())
            dispatch(getFeedById(collections.user_id)) 
        
        }, [])




    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = () => {
        setRefreshing(true);
    
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }



        
            const ListView = ({ item, index }) => {

                return (
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
                    data={feedIdData.data}
                    keyExtractor={item => item.id}
                    // ListEmptyComponent={EmptyPending}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
             
                   
                />


            </View>
            
    
    )
};

export default MediaPost;