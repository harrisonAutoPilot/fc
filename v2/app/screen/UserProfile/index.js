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
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import MediaPost from './MediaPost';
import Resources from './Resources';

import styles from './style';
import PosterHeaderComponent from "./PosterHeaderComponent"
import { group } from "../../util/group";
import { ScrollView } from 'react-native-gesture-handler';





const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const UserProfile = props => {
  const items = props.route.params.item
  const dispatch = useDispatch();
  const [active, setActive] = useState('1');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategoryArray, setSearchCategoryArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([])

  const [activeId, setActiveId] = useState(1);

  const [search, setSearch] = useState('');


  const showActive = id => setActiveId(id);

  const bottomSheet = useRef();

  const goBack = () =>{
    props.navigation.goBack()
  }



  const SupportList = ({props}) =>
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
        <Text style={styles.supportTitleText} numberOfLines={1}>{item.title}</Text>
       <View style={styles.downFlex}>
       <View style={styles.smTag}>
          <Text style={styles.tagText}>{item.role}</Text>
        </View>
    
        <View style={styles.timeCover}>
        <Acon name="timer-outline" size={16} color="#000" style={styles.loveImg} />
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
    <ScrollView style={{flex:1}}>
    <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={false} />
        <PosterHeaderComponent
          title={`@${items.poster}`}
          // onPress={openNotification}
          onPressBack={goBack}
          
          onPressCart={openDot}
          // orderCount={items.carts?.total}
           />
           <View style={styles.topContainer}>
            <View style={styles.imgContainer}>
            <View style={styles.imgCover}>
            <Image
                style={styles.posterImg}
                source={items.poster_img}
                resizeMode="contain"
              />
            </View>
            <View style={styles.topStatus}>
              <Text style={styles.topStatusText}><View style={styles.dotStyle} /> Live</Text>
            </View>
            </View>
            <View style={styles.topInnerContainer}>
              <View style={styles.topInnerFlex}>
                  <View style={styles.singleCover}>
                    <Text style={styles.topPostTextCount}>{items.posts}</Text>
                    <Text style={styles.topPostText}>Posts</Text>
                  </View>
                  <View style={styles.singleCover}>
                  <Text style={styles.topPostTextCount}>{items.follower}</Text>
                  <Text style={styles.topPostText}>Followers</Text>
                  </View>
                  <View style={styles.singleCover}>
                  <Text style={styles.topPostTextCount}>{items.following}</Text>
                  <Text style={styles.topPostText}>Following</Text>
                  </View>
              </View>
              <View style={styles.topInnerBottomCover}>
            <TouchableOpacity style={styles.topBtn}>
            <Acon name="message-text-outline" size={16} color="#454545" />
            <Text style={styles.topBtnText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topBtnRight}>
            <Acon name="plus" size={16} color="#454545" />
            <Text style={styles.topBtnText}>Follow</Text>
            </TouchableOpacity>
              </View>
            </View>
          
           </View>
           <View style={styles.introContainer}>
           
            <Text style={styles.titleInit}>{items.poster}</Text>
            <Text style={styles.titleText}>{items.title}</Text>
            <Text style={styles.descText}>{items.intro}</Text>
           </View>
           <View style={styles.supportCardContainer}>
            <View style={styles.supportHeaderContainer}>
              <Text style={styles.supportHeaderText}>Support Group</Text>
            </View>
             
       
           </View>
           <View style={{width:'100%', height:130,marginLeft:20}}>
           <ScrollView horizontal >
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
   
            }}>
            <View style={styles.tabItemCover}>
              {  activeId === 1 ? <Acon name="table-large" size={22} color="#000" style={styles.loveImg} /> : <Acon name="table-large" size={22} color="#bfbfbf" style={styles.loveImg} /> }
              <Text
                style={[
                  activeId === 1
                    ? styles.activeSubHeaderText
                    : styles.inActiveSubHeaderText,
                  styles.miniSubHeaderText,
                ]}>
                  
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
        
            }}>
               <View style={styles.tabItemCover}>
             {  activeId === 2 ? <Acon name="book-open-page-variant-outline" size={22} color="#000" style={styles.loveImg} /> : <Acon name="book-open-variant" size={22} color="#bfbfbf" style={styles.loveImg} /> }
              
            <Text
              style={[
                activeId === 2
                  ? styles.activeSubHeaderText
                  : styles.inActiveSubHeaderText,
                styles.miniSubHeaderText,
              ]}>
             RESOURCES
            </Text>
            </View>
          </TouchableOpacity>
         
        </View>
      <View style={styles.bottomContainer}>
      {activeId === 1 ? (
          <MediaPost props={props} navigation={props.navigation} collections={items} />
        ) :
          <Resources props={props} navigation={props.navigation} collections={items} />
        }
             
      </View>
      </ScrollView>


    </View>

    </SafeAreaView>
   
 
  );
};

export default UserProfile;
