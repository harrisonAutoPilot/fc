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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
import data from "./data"
import { group } from "../../util/group";
// this is for the tab module
import Deals from './TabModules/Types/Deals';
import Kessington from './TabModules/Types/Kessington';
import BackInStock from './TabModules/Types/BackInStock';
import PopularItems from './TabModules/Types/PopularItems';
import NewItems from './TabModules/Types/NewItems';
import GroupIntroBottomSheet from "./groupIntro"



const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const SupportGroup = props => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('1');
  const [category, setCategory] = useState('Categories');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCategoryArray, setSearchCategoryArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [result, setResult] = useState([])
  const [priceCat, setPriceCat] = useState("CHEMIST")

  const [objectValues, setObjectValues] = useState()
  const [err, setErr] = useState('');
  const [groupData, setGroupData] = useState();
  const [kessProductDetails, setKessProductDetails] = useState({});
  const [productDetails, setProductDetails] = useState({});

  const bottomSheetRefGroup = useRef();

  const [sortId, setSortId] = useState("");

  const [packId, setPackId] = useState("");

  const [storeId, setStoreId] = useState("");
  const flatListRef = useRef();

  const bottomSheet = useRef();

  const goBack = () =>{
    props.navigation.goBack()
  }

  const toTop = () => flatListRef.current.scrollToOffset({animated: true, offset: 0});
   

  const {categories, status} = useSelector(state => state.category);
  const {searchedProducts} = useSelector(state => state.product);
  const openNotification = () => props.navigation.navigate('Notification');
  const openCart = () => props.navigation.navigate('Cart');
  const openDrawer = () => props.navigation.openDrawer();
  const redirectToSearch = () => props.navigation.navigate('SearchProducts', {objectValues, priceCat});
  const gotoGen = () =>  props.navigation.navigate("GenProducts")
  const bottomSheetRef = useRef(null);

  const { items, listItems } = useSelector((state) => state.cart);
   
  const carouselRef = useRef(null);

  const sortPrice = (item) => {
    console.log("the item", item)
    setPriceCat(item)
    bottomSheet.current.close()
  }

  const closeGroupSheet = () => {
    bottomSheetRefGroup.current.close();
  };

  const showGroup = (item) =>{
    bottomSheetRefGroup.current.show();
    setGroupData(item)
  }


  useEffect(() => {
    dispatch(browseCategories());
  }, []);

    useEffect(() => {
    
    if (searchCategoryArray.length) {
      setResult(searchCategory)
    } else if (categories.length) { 
      const result = [staticObj, ...categories]
      setResult(result)
    }else if (priceCat){
        // setPriceCat(priceCat)
        const result = [staticObj, ...categories]
        setResult(result)
      }
    
  }, [categories, searchCategoryArray, priceCat]);

  useEffect(() => {
    if (searchCategory.length) {
      searchCategoryItem();
    } else if (!searchCategory.length) {
      setSearchCategoryArray([]);
    }
  }, [searchCategory])




  const searchCategoryItem = () => {
    const search = searchCategory.toLowerCase();
    dispatch(searchProducts({search,type:objectValues.option, idd:objectValues.idd }))
    setSearchCategoryArray(searchedProducts);
    toTop();
  };


  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshView = useCallback(() => {
    setRefreshing(true);
    dispatch(browseCategories());
    
    if(status === "success"){
      setRefreshing(false)
    }
  }, [status]);



  const getAllProducts = (category, display_name, id) => {
     props.navigation.navigate('Product', {
      category,
      priceCat,
      display_name,
      category_id:id, 
      objectValues,
      
    })
}

const selectBtn = id => {
  setActive(id);
};

const selectCategory = name => {
  setCategory(name);
};

const reset = () => {

  closeBottomSheet()
  
  dispatch(cleanSearchProducts());
  
  setPackId("");
  
  setSortId("");
  
  dispatch(searchProducts({  id: "", no: 1, search: "", pack: "", sort: "", type:"", option:"" }));
  
  };

// this is for the TabModules
const openSheet = item => {
  props.navigation.navigate('ProductDetail', {products: item});
};

const openDealDetails = item => {
  props.navigation.navigate('DealDetail', {products: item});
};

const closeBottomSheet = () => {

  bottomSheetRef.current?.close();

};

const applyFilter = () => {

closeBottomSheet();

dispatch(cleanSearchProducts());

dispatch(searchProducts({
    id: "",
    no: 1,
    search: "",
    pack: packId,
    sort: sortId,
    type: objectValues?.option,
    option:objectValues?.idd
}));
};


  const dismissKeyboard = () => Keyboard.dismiss();

  const staticObj = {
    id: 354667, 
    category: 'All Products', 
    image_url: "https://cdn.remedial.health/product_images/pbeX5jDYmP4xCaMdZmKvQYYkqCAxbatgpcTkUqPO29041.webp",
    display_name: "All Products",
    name:"All Product"
  };

  const callPrice = () => {
    bottomSheet.current.show();

  };



  useEffect(() => {
    if (searchCategoryArray.length) {
      setResult(searchCategory)
    } else if (categories.length) { 
      const result = [staticObj, ...categories]
      setResult(result)
    }else if (priceCat){
        // setPriceCat(priceCat)
        const result = [staticObj, ...categories]
        setResult(result)
      }
    
  }, [categories, searchCategoryArray, priceCat]);



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
               <Text style={styles.capActiveText}>{item.menu.substring(0, 1)}</Text>
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
               <View style={styles.capCoverInactive}>
               <Text style={styles.capInactiveText}>{item.menu.substring(0, 1)}</Text>
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
  
     <View>
      <TouchableOpacity key={item.id} onPress={() => showGroup(item)} >
      <View style={styles.roomCard}>

<View style={styles.roomFlexTop}>
    <View>
    <Image
         source={item?.image_url}
        style={styles.roomImg}
        resizeMode="cover"
      />
    </View>
    <View>
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
    <View style={styles.memberCover}>
      <Text style={styles.memberCount}>{item.members}</Text>
    </View>
     </View>
    </View>
</View>

<View style={styles.roomFlex}>
  <View>
    <View style={styles.roomNameCover}> 
      <Text style={styles.roomName}>{item.title}</Text>
    </View>
     <View style={styles.innerFlex}>
      <View style={styles.hostCover}>
        <Image
            source={item?.host_img}
          style={styles.hostImg}
        />
        </View>
      <View>
        <Text style={styles.hostName}>{item.host}</Text>
        <Text style={styles.hostTitle}>Host</Text>
      </View>
    </View>
  </View>
   
    <View>
    <View style={styles.timeCover}>
      <Icon name="timer-outline" size={18} color="#000" style={styles.loveImg} />
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
    </View>
</View>

</View>
 
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
       <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={false} />
    <View style={styles.main}>
   
        <CatalogHeaderComponent
          title="Faceless Support Group"
      
          onPressBack={goBack}
          onPressSearch={openCart}
         
           />
        <View style={styles.miniHeader}>
              <FlatList
                horizontal
                data={data}
                renderItem={ScrollList}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                scrollEnabled
              />
            </View>
      <View style={styles.mainBody}>
            <View style={styles.suggestedContainer}>
              <Text style={styles.suggestedCaption}>Suggested Room</Text>
            </View>
        {err ? (
          <View style={globalStyles.errMainView}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
          </View>
        ) : null}

     
            { active == "1" ?
          <>
        {categories && categories.length > 0 ? (
          <View style={styles.flexCover}>
         
           <FlatList
              // scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              // columnWrapperStyle= {styles.bottomCardCover}
              // numColumns = {3}
              vertical
              data={group}
              keyExtractor={item => item.id}
              renderItem={ListView}
              ListFooterComponent={<View style={{ height: 70 }} />}
 
                />

          
        
          </View>
        ) : (
          <CatelogueCardPlaceholder />
        )}
        </>
        :
        <View>
         {active === '2' ? (
          <Deals
            data={setProductDetails}
            dealInfo={openDealDetails}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '3' ? (
          <Kessington
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '4' ? (
          <BackInStock
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '5' ? (
          <PopularItems
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : (
          <NewItems
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        )}
        </View>
        }
</View>
    <GroupIntroBottomSheet
        bottomSheetRefStart={bottomSheetRefGroup }
        data={groupData}
        close={closeGroupSheet}
        
      />


    <PriceBottomSheet
       bottomSheet={bottomSheet} 
       props={props}
       objList = {(item) =>  setObjectValues(item)}
       sort={sortPrice}
       />

        <BottomSheet
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
        setPack={setPackId}
        setSort={setSortId}
        setStore={setStoreId}
        packId={packId}
        sortId={sortId}
        storeId={storeId}
        objList = {(item) =>  setObjectValues(item)}
        reset={reset}
        apply={applyFilter}
            />
    </View>
    </SafeAreaView>
   
 
  );
};

export default SupportGroup;
