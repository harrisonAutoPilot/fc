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
import Acon from 'react-native-vector-icons/AntDesign';

import BottomSheet from "./TabModules/component/BottomSheet"
import { cleanSearchProducts } from "@Store2/Product";
import CatelogueCardPlaceholder from './CatelogueCardPlaceholder';
import {InputFieldSearch, Header} from '@Component2';
import {browseCategories} from '@Request2/Category';
import {searchProducts} from '@Request2/Product';
import PriceBottomSheet from "./PriceBottomSheet"
import styles from './style';
import CatalogHeaderComponent from "./CatalogHeaderComponent"
import {users} from "../../util/users"
import {popular} from "../../util/popular"

// this is for the tab module
import Deals from './TabModules/Types/Deals';
import Kessington from './TabModules/Types/Kessington';
import BackInStock from './TabModules/Types/BackInStock';
import PopularItems from './TabModules/Types/PopularItems';
import NewItems from './TabModules/Types/NewItems';



const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const Search = props => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('1');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategoryArray, setSearchCategoryArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([])
  const [priceCat, setPriceCat] = useState("CHEMIST")
  const [showPopular,setShowPopular] = useState(true)
  const [category, setCategory] = useState('Categories');
  const [objectValues, setObjectValues] = useState()
  const [err, setErr] = useState('');
  const [search, setSearch] = useState("");

  const [sortId, setSortId] = useState("");

  const [packId, setPackId] = useState("");

  const [storeId, setStoreId] = useState("");
  const flatListRef = useRef();

  const bottomSheet = useRef();

  const goBack = () =>{
    props.navigation.goBack()
  }


   



  const dismissKeyboard = () => Keyboard.dismiss();


  const posterProfile = (item) =>{
    props.navigation.navigate("PosterProfile", {item:item})
}


useEffect(() => {

  if (search.length) {
    setShowPopular(true)
    filterResult();

  }else{
    setShowPopular(false)
    setResult("")
  }

}, [search.length]);



const filterResult = () => {

  let searched = users?.filter(val => {

    if (val?.name !== null && val?.poster.toLowerCase().includes(search.toLowerCase())) {

      return val
    }
  });

  return setResult(searched)

};



  const ScrollList = (props, index) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation;

    return (
      <>
        {active === item.id ? (
          <TouchableOpacity
            style={styles.scrollFlex}
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
              <View style={styles.capCover}>

              </View>
            <View style={styles.miniCard}>
              <Text style={styles.miniCardText}>{item.menu}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.scrollFlex}
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
           <View style={styles.capCover}>

          </View>
            <View style={styles.miniCardInactive}>
              <Text style={styles.miniCardTextInactive}>{item.menu}</Text>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };


  const ListView = ({item}) => (
  
      <TouchableOpacity onPress={() => posterProfile(item)}>
        
      <View style={styles.accountContainer}>
          <View style={styles.userImageCover}>
          <Image
              style={styles.posterImg}
              source={item?.poster_img}
              resizeMode="cover"
            />
          </View>
          <View style={styles.contentCover}>
            {/* <Text style={styles.accountName}>@{item.poster}</Text> */}
              <View style={styles.veirifyCover}>
                <Text style={styles.accountName}>@{item?.poster}</Text>
                <Image
                  source={require("@Assets2/image/verified.png")}
                  style={styles.verifyImg}
                />
              </View>
            <Text style={styles.accountTitle}>{item.title}</Text>
            <Text style={styles.accountFollower}>{item.follower} K Followers</Text>
          </View>
        </View>
      </TouchableOpacity>

  )



  return (
    <SafeAreaView style={styles.safeAreaStyle}>
    <View style={styles.main}>
    <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={true} />
        <CatalogHeaderComponent
          title="Search"
          onPressBack={goBack}
           />
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={styles.blueColor} >
            <View style={[styles.searchSection]}>
              <Icon
                name="search"
                color="rgba(255, 255, 255, 0.8)"
                size={18}
                style={styles.searchIcon}
              />
              <InputFieldSearch
                style={styles.inputField}
                value={search}
                placeholder="I am looking for"
                placeholderTextColor="rgba(118, 118, 128, 1)"
                onChangeText={(text) => setSearch(text)}
                editable={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
  

      <View style={styles.mainBody}>
        {!showPopular ?
           <View style={styles.popularContainer}>
              <View style={styles.popularInner}>
                <Text style={styles.popularTitle}>Popular search this week</Text>
              </View>
            <FlatList
            vertical
            data={!search.length ? popular : null}
            renderItem={ListView}
            ListFooterComponent={<View style={{ height: 50 }} />}
            keyExtractor={item => item.id}

            /> 
            </View>
            :
           <FlatList
            vertical
            data={result}
            renderItem={ListView}
            ListFooterComponent={<View style={{ height: 50 }} />}
            keyExtractor={item => item.id}

            /> 
        } 
      </View>

    </View>
    </SafeAreaView>
   
 
  );
};

export default Search;
