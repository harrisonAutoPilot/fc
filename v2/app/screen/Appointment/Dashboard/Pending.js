import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "@Component";
import Icon from 'react-native-vector-icons/Ionicons';
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers } from "@Request2/Customer";
import EmptyPending from "./empty/emptyPending"
import FilterBottomSheet from "./FilterBottomSheet";


const InActive = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()
    

    const { status, errors, customers } = useSelector((state) => state.customer);

    const [objectValues, setObjectValues] = useState()
    const [duration, setDuration] = useState("6 Months")
  
      const returnBack = () => {
          props.navigation.goBack();
        };
  
        const filterList = () => {
          bottomSheetS.current.show();
      
        };
  
        const changeDuration = (item) => {
          setDuration(item)
     
        }
      
       const applyFilter =(item)=>{
        setDuration(item)
        bottomSheetS.current.close()
      
       }

    useEffect(()=> {
        setResult(props?.result)
    },[props?.result?.length])

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const closeSheetSort = () => {
        bottomSheetS.current.close();
        setSheetOpen(false)
    }

    useEffect(() => {
        if (search.length > 0) {
            filterOrder();
        }

    }, [search.length]);




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
             <TouchableOpacity style={styles.cardCover} onPress={() => props.details(item)}  key={item.id}>
            <View>
                <Text style={styles.customerName}>{item.name}</Text>
                <Text style={styles.customerPhone}>+{item.phone}</Text>
                <Text style={styles.customerAddress}>{item?.stores[0].address}</Text>
            </View>
            <View style={styles.customerPendingStatusCover}>
                <Text style={styles.customerPendingText}>Pending</Text>
            </View>
    
        </TouchableOpacity>
            
        )
    };

    return (
      
           
            <View style={styles.bottomCover}>
            {/* {refreshing || status === "pending" || status === "idle" ? <PlaceholderCard />
                :
                    <>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    vertical
                    scrollEnabled={true}
                    data={customers?.pending?.users }
                    keyExtractor={item => item.id}
                    renderItem={<View />}
                    ListEmptyComponent={EmptyPending}
                    enableEmptySections={true}
                    refreshControl =  {

                    <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        
                    }
                   
                    ref={flatListRef}
                    extraData={customers?.pending?.users}
                />
                    </>
                   }  */}

                {status === "pending" || status === "idle" ? <PlaceholderCard />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={!result.length ? customers?.pending?.users : result }
                    keyExtractor={item => item.id}
                    ListEmptyComponent={EmptyPending}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                    columnWrapperStyle={styles.column}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />

                    }
                    ref={flatListRef}
                    extraData={customers?.pending?.users}
                />
}

            </View>
            
    
    )
};

export default InActive;