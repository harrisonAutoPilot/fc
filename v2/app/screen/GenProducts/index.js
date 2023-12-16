import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  FlatList,
  RefreshControl,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import Acon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import BottomSheet from "./component/BottomSheet"

import { searchProducts } from "@Request2/Product";
import { cleanSearchProducts } from "@Store2/Product";
import {
  SuccessMsgViewTwo,
  COHeader as Header,
  InputField,
} from '@Component/index';
// import BottomSheet from '@Screen2/Overlay';
import data from './data';
import DealsModal from './DealSheet';
import {getDeals} from '@Request2/Deal';
import Deals from './Types/Deals';
import Kessington from './Types/Kessington';
import BackInStock from './Types/BackInStock';
import PopularItems from './Types/PopularItems';
import NewItems from './Types/NewItems';

const GenProducts = props => {
  const dispatch = useDispatch();

  const {status, errors, dealsItems} = useSelector(state => state.deal);

  const [err, setErr] = useState('');

  const bottomSheetRef = useRef(null);


  const [errMsg, setErrMsg] = useState(null);


  const [trackSearchStatus, setTrackSearchStatus] = useState(false);

  const [sortId, setSortId] = useState("");

  const [packId, setPackId] = useState("");

  const [storeId, setStoreId] = useState("");

  const [objectValues, setObjectValues] = useState("")


  const { searchedProducts, searchProductsData, searchProductsStatus } = useSelector((state) => state.product);

  const [productDetails, setProductDetails] = useState({});

  const [refreshingBackInStock, setRefreshingBackInStock] = useState(false);

  const [refreshingPopularProducts, setRefreshingPopularProducts] =
    useState(false);

  const [refreshingNewProducts, setRefreshingNewProducts] = useState(false);

  const [kessProductDetails, setKessProductDetails] = useState({});

  const [active, setActive] = useState('1');

  const [category, setCategory] = useState('Deals');

  const [successMsg, setSuccessMsg] = useState('');

  const [visibleDeals, setVisibleDeals] = useState(false);

  const bottomSheetDeals = useRef();

  const bottomSheet = useRef();


  const {items} = useSelector(state => state.cart);

  useEffect(() => {
    setActive('1');
    dispatch(getDeals(1));
  }, []);

  const selectBtn = id => {
    setActive(id);
  };

  const selectCategory = name => {
    setCategory(name);
  };

  const openSheet = item => {
    props.navigation.navigate('ProductDetail', {products: item});
  };

  const openDealDetails = item => {
    props.navigation.navigate('DealDetail', {products: item});
  };

  useEffect(() => {
    if (status === 'failed' && props.navigation.isFocused()) {
      setErr(errors?.msg);
    }
  }, [errors]);

  const closeSheet = () => {
    setVisible(false);
    bottomSheet.current.close();
  };

  const closeSheetDeals = () => {
    bottomSheetDeals.current.close();
    setVisibleDeals(false);
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const ScrollList = (props, index) => {
    const item = props.item;
    const redirectToNavigationDetail = props.navigation;

    return (
      <>
        {active === item.id ? (
          <TouchableOpacity
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
            <View style={styles.miniCard}>
              <Text style={styles.miniCardText}>{item.menu}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              selectBtn(item.id);
              selectCategory(item.name);
            }}>
            <View style={styles.miniCardInactive}>
              <Text style={styles.miniCardTextInactive}>{item.menu}</Text>
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  const goBack = () => props.navigation.navigate('Catalogue');

  const redirectToFilter = () =>
    props.navigation.navigate('Filter', {
      display_name: props.route.params?.display_name,
      category: props.route.params?.category,
      name: 'Product',
    });

  const redirectToSearch = () => props.navigation.navigate('SearchProducts');

  const toastConfig = {
    error: () => (
      <View
        style={[
          globalStyles.errMainView,
          globalStyles.marginTop,
          {marginHorizontal: 20},
        ]}>
        <Text style={globalStyles.failedResponseText}>{errMsg}</Text>
      </View>
    ),

    tomatoToast: () => <SuccessMsgViewTwo title={successMsg} />,
  };


  useEffect(() => {

    if (category) {
        console.log("we are here 1")
        dispatch(searchProducts({
            id: "",
            no: 1,
            search: category,
            pack: packId,
            sort: sortId,
            type: objectValues?.option,
            option:objectValues?.idd
        }));

    } else {
        console.log("we are here 2")
        dispatch(searchProducts({
            id,
            no: 1,
            search: "",
            pack: packId,
            sort: sortId,
            type: objectValues?.option,
            option:objectValues?.idd
        }));
    }

    return () => {

        dispatch(cleanSearchProducts());
    };

}, []);


useEffect(() => {

    if (searchProductsStatus === "failed") {

        setErrMsg(errors?.msg);

    }
}, [errors]);


const showBottomSheet = () => {

    bottomSheetRef.current?.present();

};

const closeBottomSheet = () => {

    bottomSheetRef.current?.close();

};


const loadMore = () => {

    setTrackSearchStatus(true);

    if (category) {
        dispatch(searchProducts({
            id: "",
            no: searchProductsData?.current_page + 1,
            search: category,
            pack: packId, sort: sortId,
            type: objectValues?.option,
            option:objectValues?.idd
        }));
    } else {

        dispatch(searchProducts({
            id,
            no: searchProductsData?.current_page + 1,
            search: "",
            pack: packId,
            sort: sortId,
            type: objectValues?.option,
            option:objectValues?.idd
        }));
    }
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

const reset = () => {

    closeBottomSheet()

    dispatch(cleanSearchProducts());

    setPackId("");

    setSortId("");

    dispatch(searchProducts({  id: "", no: 1, search: "", pack: "", sort: "", type:"", option:"" }));

};






  const openCart = () => props.navigation.navigate('Cart');

  return (
    <View style={styles.body}>
      <View>
        <View style={styles.blueColor}>
          <TouchableOpacity onPress={goBack}>
            <Icon
              name="chevron-left"
              color="rgba(118, 118, 128, 1)"
              size={32}
              style={styles.arrowCover}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchSection}
            onPress={redirectToSearch}>
            <Icon
              name="search"
              color="rgba(118, 118, 128, 1)"
              size={18}
              style={styles.searchIcon}
            />
            <InputField
              style={styles.inputField}
              // value={searchCategory}
              placeholder="Search product by name"
              placeholderTextColor="rgba(118, 118, 128, 1)"
              // onChangeText={text => setSearchCategory(text)}
              editable={false}
            />
          </TouchableOpacity>
        </View>
      </View>

      {err ? <Toast config={toastConfig} /> : null}
      {successMsg ? <Toast config={toastConfig} /> : null}

      <View style={styles.mainBody}>
        {/* <View style={styles.filterContainer}>
          <Text style={styles.allText}>ALL</Text>
          <TouchableOpacity style={styles.filterCover} onPress={showBottomSheet}>
            <Acon name="tune" size={18} color="rgba(118, 118, 128, 1)" />
            <Text style={styles.filterText}>Filter</Text>
            <Icon
              name="chevron-down"
              size={19}
              color="rgba(118, 118, 128, 1)"
            />
          </TouchableOpacity>
        </View> */}
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

        {err ? (
          <View style={[globalStyles.errMainView, {marginBottom: 10}]}>
            <Text style={globalStyles.failedResponseText}>{err}</Text>
          </View>
        ) : null}
      </View>

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {active === '1' ? (
          <Deals
            data={setProductDetails}
            dealInfo={openDealDetails}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '2' ? (
          <Kessington
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '3' ? (
          <BackInStock
            data={setKessProductDetails}
            openSheet={openSheet}
            creditType={
              props.route.params?.creditType
                ? props.route.params.creditType
                : ''
            }
          />
        ) : active === '4' ? (
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
  );
};

export default GenProducts;
