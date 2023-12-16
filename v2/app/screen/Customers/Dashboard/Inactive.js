import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "@Component";
import Icon from 'react-native-vector-icons/Ionicons';
import PlaceholderCard from "./PlaceHolderCard";
import styles from "./style";
import { getCustomers } from "@Request2/Customer";
import EmptyInActive from "./empty/emptyInactive"
import FilterBottomSheet from "./FilterBottomSheet";

const InActive = (props) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [result, setResult] = useState(props?.result);
    const [tabName, setTabName] = useState();
    const bottomSheetS = useRef();
    const flatListRef = React.useRef();

    useEffect(()=> {
        setResult(props?.result)
    },[props.result.length])


    useEffect(()=> {
        setTabName(props.myName)
    },[props?.myName?.length])

    const { status, errors, customers } = useSelector((state) => state.customer);

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const filterList = () => {
        bottomSheetS.current.show();
    
      };

      const changeDuration = (item) => {
        setDuration(item)
   
      }
    
     const applyFilter =(item)=>{
      setDuration(item)
      bottomSheetS.current.close()
      console.log("what i selected", item)
     }

    const sortOrder = (id) => {
        
        let customer = [...customers?.inactive?.users];

        if (id === 1) {
            let searched = customer.sort((a, b) => { return  a.name.localeCompare(b.name) })
            toTop()
            return setResult(searched);
        } else if (id === 2) {
            let searched = customer.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) })
            toTop()
            return setResult(searched)
        } 
      
        else if (id === 4) {
            let searched = customer.sort((a, b) => { return new Date(a.created_at) - new Date(b.created_at) })
            toTop()
            return setResult(searched)
        }
    }

    const openSheetSort = () => {
        setSheetOpen(true)
        bottomSheetS.current.show();
    }


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const refreshView = useCallback(() => {
        setRefreshing(true);
        dispatch(getCustomers());
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const ListView = ({ item, index }) => {

        return (
             <TouchableOpacity style={styles.cardCover} onPress={() => props.details(item)}  key={item.id}>
         
            <View style={styles.descCover}>
                <Text style={styles.customerName}>{item.name}</Text>
                <Text style={styles.customerPhone}>+{item.phone}</Text>
                {/* <Text style={styles.customerAddress}>{item?.stores[0].address}</Text> */}
                  <Text style={styles.customerAddress}>No 321, atti close wuse zone 4 Fct Abuja</Text>
            </View>
            <View style={styles.customerPendingStatusCover}>
                <Text style={styles.customerPendingText}>Inactive</Text>
            </View>
       
        </TouchableOpacity>
            
        )
    };

    return (
        <View style={styles.container}>
        
        <View style={styles.bottomCover}>
               {/* {status === "pending" || status === "idle" ? <PlaceholderCard />
                    :
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    vertical
                    scrollEnabled={true}
                    data={!result.length ? customers?.inactive?.users : result }
                    keyExtractor={item => item.id}
                    renderItem={ListView}
                    ListEmptyComponent={EmptyInActive}
                    refreshControl= {
                        <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                    }
                    />

                } */}

                {status === "pending" || status === "idle" ? <PlaceholderCard />
                    :

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={!result.length ? customers?.inactive?.users : result }
                        keyExtractor={item => item.id}
                        ListEmptyComponent={EmptyInActive}
                        renderItem={ListView}
                        ListFooterComponent={<View style={{ height: 70 }} />}
                        columnWrapperStyle={styles.column}
                        ref={flatListRef}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={refreshView} />
                        }
                        extraData={customers?.inactive?.users}
                    />
                }

            </View>
           
        </View>
    )
};

export default InActive;