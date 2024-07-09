import React, { useState, useEffect, useCallback, useRef } from "react";

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
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Config from "react-native-config";
import Icon from "react-native-vector-icons/Feather";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import MediaPost from "./MediaPost";
import Resources from "./Resources";
import Video from "react-native-video";
import {cleanFeedIdStatus} from '@Store2/Feed';
import {
  unFollowUser,
  followUser,
  getAvailableDateByUserId,
  getUser,
  getUserById,
  createAppointment,
  addAppointmentMessage,
} from "@Request2/Auth";
import AppointmentDateBottomSheet from "../HomeFC/appointDateBottomSheet";
import {
  cleanUnFollowUser,
  cleanFollowUser,
  cleanUserAvailableDate,
  cleanUserIdStatus,
} from "@Store2/Auth";
import { getFeedById} from "@Request2/Feed";
import styles from "./style";
import PosterHeaderComponent from "./PosterHeaderComponent";
import { group } from "../../util/group";
import { ScrollView } from "react-native-gesture-handler";

const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const PosterProfile = (props) => {
  const dispatch = useDispatch();
  const {
    user,
    userDateStatus,
    userDateData,
    userIdData,
  } = useSelector((state) => state.auth);
  const {feedIdData,feedIdStatus,feedIdDataMore, feedIdErrors} = useSelector((state) => state.feed);
  const items = props.route.params.item;

  const [active, setActive] = useState("1");
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([]);
  const bottomSheetRefApDate = useRef();
  const [activeId, setActiveId] = useState(1);
  const [showNote, setShowNote] = useState(false);
  const [apDetails, setApDetails] = useState({});
  const[smPause, setSmPause] = useState(false)
  const [waiter, setWaiter] = useState(false);
  const [trackCartStatus, setTrackCartStatus] = useState(false);




  const showActive = (id) => setActiveId(id);

  const bottomSheet = useRef();

  const goBack = () => {
    props.navigation.goBack();
  };


  useEffect(() => {
    dispatch(cleanFeedIdStatus())
    const data = {id:items.user_id, no:1};
    dispatch(getFeedById(data)) 

}, [])




const checkDates = (item) => {
  dispatch(cleanUserAvailableDate());
  console.log("the checked user info in the video component", item?.user?.id)

  dispatch(getAvailableDateByUserId(item?.user?.id));
  setApDetails(item);
  setTimeout(() => {
  bottomSheetRefApDate?.current?.show();
    console.log("the response", userDateData,userDateStatus)
}, 500);

};
  const closeApointmentSheet = () => {
    bottomSheetRefApDate.current.close();
  };

  useEffect(() => {
    dispatch(getUserById(items.user_id));
  }, []);


 const playNew = (item) =>{
          props?.navigation?.navigate("HomeDetails", {item:item})
          }




  const loadMoreFeeds = () =>{
    console.log("this page is called poster details", feedIdData?.current_page, feedIdData?.last_page)
    setTrackCartStatus(true);
    const data = {id:items?.user_id, no:feedIdData?.current_page + 1};
    dispatch(getFeedById(data));
    setWaiter(true);
    setTimeout(() => {
     setResult(feedIdDataMore);
    }, 500);
  }


//   const ListView = useCallback(
//     ({ item, index, key}) => (
//          <View>
//       {item?.poster == items?.poster ?        
                   
//           <TouchableOpacity   key={item.id} onPress={() => playNew(item)}>
//             <>
          
//                {item.type == 'video'  ?
//             <View style={styles.bottomCard} >
//               <Video
//                source={{ uri: `${Config?.SPACE_URL}${item?.url}` && `${Config?.SPACE_URL}${item?.url}`}}
//               //  source={item?.video}
//                style={styles.smVideoCard}
//                muted={true}
//               //  onLoad={() => {
//               // //    setTimeout(setSmPause(true), 5000)
//               //    setSmPause(true)
//               //  }}
//                   onLoad={() => {
//                     setTimeout(() => {
//                       setSmPause(true)
//                       // setPauseMe(true)
                
//                  }, 2000);
                  
//                    }}
//                rate={1.0}
//                resizeMode="cover"
//                volume={0.0}
//                paused={smPause}

//              />
//              <View style={styles.miniPlay}>
//              <Image
//               source={require("@Assets2/image/film.png")}
//               style={styles.camImg}
//               resizeMode="contain"
//             />
//             </View>
//             </View>
//               :
//               <View style={styles.bottomCard}>
//                <Image
//                   style={styles.imageCard}
//                   // source={item?.image_url}
//                   source={{ uri: item?.url !== "" ? `${Config?.SPACE_URL}${item?.url}` : null}}
//                   resizeMode="cover"
//                   />
//               </View> 
//           }
            
//          </>
         
//          </TouchableOpacity>
  
//               :
//               null
//               }
//          </View>
// ),
// [items,waiter]
// );


const ListView = (item) =>{
  <View>
  {item?.poster == items?.poster ?        
               
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
                  // setPauseMe(true)
            
             }, 2000);
              
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
}






  const SupportList = ({ props }) =>
    group?.map((item, index) => (
      <TouchableOpacity key={item.id}>
        <View style={styles.supportCard}>
          <View style={styles.supportLogo}>
            <Image
              source={require("@Assets2/image/Support-Groups-01.png")}
              style={styles.logoAvartar}
              resizeMode="cover"
            />
          </View>
          <View style={styles.membersContainer}>
            <View style={styles.imgAvarter}>
              <Image
                source={require("@Assets2/image/93114910-cool-vector-hipster-man-character-with-beard-and-glasses.jpg")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
            </View>

            <View style={styles.imgAvarterB}>
              <Image
                source={require("@Assets2/image/43127256-pink-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-young.jpg")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
            </View>
            <View style={styles.imgAvarterC}>
              <Image
                source={require("@Assets2/image/207247562-hipster-style-design-vector-illustration-eps10-graphicon-orange-background.jpg")}
                style={styles.imgAvartar}
                resizeMode="cover"
              />
            </View>
          </View>
          {/* {item?.image_url !== '' ?
      <Image
       source={item.image_url}
        style={styles.supportImg}
        resizeMode="cover"
      />
      :
      null
      } */}
          <View style={styles.supportInfoCover}>
            <Text style={styles.supportTitleText} numberOfLines={1}>
              {item.title}
            </Text>
            <View style={styles.downFlex}>
              <View style={styles.smTag}>
                <Text style={styles.tagText}>{item.role}</Text>
              </View>

              <View style={styles.timeCover}>
                <Acon
                  name="timer-outline"
                  size={16}
                  color="#000"
                  style={styles.loveImg}
                />
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.main}>
        <ScrollView>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#fff"
            hidden={false}
          />
          <PosterHeaderComponent
            title={`@${userIdData?.username}`}
            // onPress={openNotification}
            onPressBack={goBack}
            // onPressCart={openCart}
            // orderCount={items.carts?.total}
          />
          <View style={styles.topContainer}>
            <View style={styles.imgContainer}>
              <View style={styles.imgCover}>
                <Image
                  style={styles.posterImg}
                  source={{
                    // uri: `${Config.IMG_URL}${userIdData?.avatar?.url}`,
                     uri: userIdData?.user_image_url == null ? `${Config?.IMG_URL}${userIdData?.avatar?.url}` : `${Config?.SPACE_URL}${userIdData?.user_image_url}`
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.topStatus}>
                <Text style={styles.topStatusText}>
                  <View style={styles.dotStyle} /> Live
                </Text>
              </View>
            </View>
            <View style={styles.topInnerContainer}>
              <View style={styles.topInnerFlex}>
                <View style={styles.singleCover}>
                  <Text style={styles.topPostTextCount}>
                    {userIdData.feedsCount}
                  </Text>
                  <Text style={styles.topPostText}>Posts</Text>
                </View>
                <View style={styles.singleCover}>
                  <Text style={styles.topPostTextCount}>
                    {userIdData.followersCount}
                  </Text>
                  <Text style={styles.topPostText}>Followers</Text>
                </View>
                <View style={styles.singleCover}>
                  <Text style={styles.topPostTextCount}>
                    {userIdData.followingsCount}
                  </Text>
                  <Text style={styles.topPostText}>Following</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.introContainer}>
            {userIdData?.description == null ? (
              <Text style={styles.descText}>
                Hi my name is {userIdData?.username} I am here to learn, heal
                and have fun
              </Text>
            ) : (
              <Text style={styles.descText}>{userIdData?.description}</Text>
            )}
          </View>
          <View style={styles.middleBottomsContainer}>
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.leftBtn}>
                <Text style={styles.smText}>Following</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rightBtn}>
                <Text style={styles.smText}>Message</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={styles.calendarCover}
                onPress={() => checkDates(items)}
              >
                <Acon
                  name="calendar-month-outline"
                  size={20}
                  color="#454545"
                  style={styles.loveImg}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.supportCardContainer}>
            <View style={styles.supportHeaderContainer}>
              <Text style={styles.supportHeaderText}>Support Group</Text>
            </View>
          </View>

          <View style={{ width: "100%", height: 130, marginLeft: 20 }}>
            <ScrollView horizontal>
              <SupportList />
            </ScrollView>
          </View>
        
          <View style={styles.subHeader}>
            <TouchableOpacity
              style={[
                styles.firstHeader,
                activeId === 1
                  ? styles.activeSubHeader
                  : styles.inActiveSubHeader,
                styles.miniSubHeader,
              ]}
              onPress={() => {
                showActive(1);
              }}
            >
              <View style={styles.tabItemCover}>
                {activeId === 1 ? (
                  <Acon
                    name="table-large"
                    size={22}
                    color="#000"
                    style={styles.loveImg}
                  />
                ) : (
                  <Acon
                    name="table-large"
                    size={22}
                    color="#bfbfbf"
                    style={styles.loveImg}
                  />
                )}
                <Text
                  style={[
                    activeId === 1
                      ? styles.activeSubHeaderText
                      : styles.inActiveSubHeaderText,
                    styles.miniSubHeaderText,
                  ]}
                >
                  MEDIA POST
                </Text>
              </View>
              <View style={styles.firstInnerHeader}>
                {/* <Text style={styles.firstInnerTitle}>{customers?.pending?.count ? customers?.pending?.count : 0}</Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                activeId === 2
                  ? styles.activeSubHeader
                  : styles.inActiveSubHeader,
                styles.miniSubHeader,
              ]}
              onPress={() => {
                showActive(2);
              }}
            >
              <View style={styles.tabItemCover}>
                {activeId === 2 ? (
                  <Acon
                    name="book-open-page-variant-outline"
                    size={22}
                    color="#000"
                    style={styles.loveImg}
                  />
                ) : (
                  <Acon
                    name="book-open-variant"
                    size={22}
                    color="#bfbfbf"
                    style={styles.loveImg}
                  />
                )}

                <Text
                  style={[
                    activeId === 2
                      ? styles.activeSubHeaderText
                      : styles.inActiveSubHeaderText,
                    styles.miniSubHeaderText,
                  ]}
                >
                  RESOURCES
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            {activeId === 1 ? (
              <MediaPost
                props={props}
                navigation={props.navigation}
                collections={items}
              />
             
            ) : (
              <Resources
                props={props}
                navigation={props.navigation}
                collections={items}
              />
            )}
          </View>
      
        </ScrollView>
       



    {userDateStatus == "success" ? (
     <AppointmentDateBottomSheet
        bottomSheetRefStart={bottomSheetRefApDate}
        poster={apDetails && apDetails}
        close={closeApointmentSheet}
        userData={userDateData && userDateData}
        displayNote={showNote}
        changeAppoint={() => setShowNote(false)}
      />
     ) : null }
      </View>
    </SafeAreaView>
  );
};

export default PosterProfile;
