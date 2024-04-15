import 'react-native-gesture-handler';
import React, {useState,useEffect,useCallback,memo, useRef} from "react";
import { View,Image, Text,TextInput, TouchableOpacity,ScrollView, FlatList,RefreshControl } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { Calendar } from 'react-native-calendars';
import BottomSheet from "react-native-gesture-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import {InputFieldSearch, Header} from '@Component2';
import Config from "react-native-config";
import {data} from "./data"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getFeedComments, addFeedComment} from "@Request2/Feed";
import {cleanFeedComment,cleanAddComment} from "@Store2/Feed";
import {getUser} from "@Request2/Auth";
import CommentPlaceholder from "./commentPlaceholder"
import EmptyComment from "./EmptyComment"
import moment from 'moment'
import styles from './style'



const MessageBottomSheet = (props) => {
    const dispatch = useDispatch();
  
    const bottomSheetCalendar = useRef(null);
    const openInput = React.createRef();
    const items = props?.message1;
    const itemsData = props?.feedData;
    const [errMsg, setErrMsg] = useState(null);
    const [endDate, setEndDate] = useState("")
    const [newValue, setNewValue] = useState("")
    const [loadFeeds, setLoadFeeds] = useState(false)
    const [showNote, setShowNote] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [displayOption, setDisplayOption] = useState(true)
    const [displayPost, setDisplayPost] = useState(false)
    const [note, setNote] = useState("")
    const [search, setSearch] = useState("");
    const {feedCommentErrors, feedCommentData,addCommentStatus, feedCommentStatus,addCommentData , addCommentErrors} = useSelector((state) => state.feed);
    // const {user} = useSelector((state) => state.auth);
    const userImg = `${Config.API_URL}${props.userData?.avatar?.url}`



console.log("this is the future",userImg)


    useEffect(() => {
    
      dispatch(getFeedComments(props?.message1?.id))
    
       
    }, []);


    


    const addPost = () =>{
      const values = { id: props?.message1?.id, content: search }
      dispatch(addFeedComment(values))
      setSearch("")
    }

    const OptionHelper = useCallback(
      ({ onPress,item }) => (
        <TouchableOpacity style={styles.optionStyles} onPress={() => {setDisplayOption(false), setNewValue(item)}}>
        <View>
        <Text style={styles.optionText}>{item}</Text>

        </View>
        </TouchableOpacity>
      ),
      []
    );


    useEffect(() => {

      if (addCommentStatus === "failed") {
      
        console.log(addCommentErrors.msg)
      
      } else if (addCommentStatus === "success") {
          setLoadFeeds(true)
          refreshViewList()
         
      
      }
      
      }, [addCommentStatus]);



      const refreshViewList = useCallback(() => {
        console.log("the get ...", feedCommentData)
          setRefreshing(true);
      
          setErrMsg(null);
          dispatch(cleanAddComment())
          dispatch(getFeedComments(props?.message1?.id))
          .then(() => {
           
            setRefreshing(false)
            
          })
          .catch(err => {
    
            setRefreshing(false);
    
          })
    
      }, []);

  
const passIt = `${newValue}${search}`;


    useEffect(() => {

      if (search?.length) {
        setDisplayPost(true)
    
      }else{
        setDisplayPost(false)
      }
    
    }, [search?.length]);
  
    useEffect(function focus() {
      openInput.current?.focus()
    }, [])

    const onChangeSearch = (text) =>{
      setSearch(newValue + text)
    }


    const ListView = props => {

      const item = props.item;
  
      return (
        <View style={styles.messageCard}>
        <View style={styles.userAvatarCover}>
        <Image
          style={styles.userAvatarCover} 
          source={{ uri:item?.avatar?.url !== "" ? `${Config.IMG_URL}${item?.avatar?.url}` : null }}
          resizeMode="cover"
        />
        </View>
        <View style={styles.userCommentCover}>
        <View style={styles.userCommentHeader}>
          <Text style={styles.commenterName}>{item?.username}</Text>
          <TouchableOpacity>
          <Icon name="dots-vertical" color="#000"  size={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.userCommentDate}>
        <Icon name="clock-outline" color="#000"  size={12} />
          <Text style={styles.commenterDate}>{moment(item?.pivot?.created_at).utcOffset('-05:00').fromNow()}</Text>
        </View>
        <View>
          <Text style={styles.contentText}>{item?.pivot?.content}</Text>
        </View>
      </View>

     </View>
      );
    };
  



console.log("this item .. result", feedCommentData, addCommentData, addCommentErrors, props?.message1)

    return (
  
                 <BottomSheet sheetBackgroundColor="#fff"  hasDraggableIcon ref={props?.bottomSheetRefMessage} height={480} >

                
                  <View style={styles.bottomSheet}>
                      
                 

                {props?.feedStatus == "idle" || props?.feedStatus == "pending" ?
                    <CommentPlaceholder /> 
                    :
                   <FlatList
                      showsVerticalScrollIndicator={false}
                      vertical
                      scrollEnabled={true}
                      data={loadFeeds ? feedCommentData : props?.feedData}
                      autoCapitalize={true}
                      keyExtractor={item => item.id}
                      ListEmptyComponent={EmptyComment}
                      renderItem={ListView}
                      refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={refreshViewList} />
                    }
                    />
                    }
                    </View>
              
                    <View style={styles.bottomContainer}>
                    <View style={styles.scrollContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {displayOption ?
                        
                        data?.map((data) => {
                        return (
                          
                          <OptionHelper item={data.name} />
                          
                        )
                      })
                        
                      :
                      null
                    }
                     
                     </ScrollView>
                    </View>
                    <View style={styles.inputContainer}>
                  
                      <View style={styles.innerFlex}>
                      {userImg &&
                        <Image
                            style={{width:40, height:40, borderRadius:100}} 
                            source={{uri:`${Config.IMG_URL}${props?.userData?.avatar?.url}`}}
                            resizeMode="cover"
                          />
                        }
                        <TextInput
                          style={styles.inputField}
                          autoFocus={true}
                          defaultValue={search}
                          multiline={true}
                          numberOfLines={4}
                          placeholder="Leave your thoughts here ..."
                          placeholderTextColor="rgba(118, 118, 128, 1)"
                          onChangeText={(text) => setSearch(text)}

                          // editable={true}
                        />
                      </View>
                   {displayPost ?
                    <TouchableOpacity onPress={() => addPost()}>
                    <Text style={styles.colorText}>Post</Text>
                  </TouchableOpacity>
                      :
                    <View>
                        <Text style={styles.grayText}>Post</Text>
                    </View>
                      }
                    </View>
                    </View>
                   
                </BottomSheet>

    
    
      
    )
};

export default memo(MessageBottomSheet)