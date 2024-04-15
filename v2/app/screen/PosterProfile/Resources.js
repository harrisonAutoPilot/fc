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
import { InputField } from "@Component";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
// import { getCustomers } from "@Request2/Customer";

import { res } from "../../util/resources";

const Resources = ({props, navigation,collections}) => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([]);
    const [bookInfo, setBookInfo]= useState()
    const bottomSheetS = useRef();
    const flatListRef = React.useRef()
    const [showDocument, setShowDocument] = useState(false);
    



    const [objectValues, setObjectValues] = useState()
    const [duration, setDuration] = useState("6 Months")
  
      const returnBack = () => {
          props.navigation.goBack();
        };
const openDoc = (item) =>{
    console.log("this has been clicked", item)
    navigation.navigate('BookReader', {item:item, collections:collections})
   
}



    const ListView = ({ item, index }) => {

        return (
         
             <TouchableOpacity key={item.id} onPress={() => openDoc(item)}>
          
            <View style={styles.bottomCardRed} >
                <View style={styles.bottomCardRedFlex}>
                   <View>
                   <Image
                        source={require("@Assets2/image/pdff.png")}
                        style={styles.logoImg}
                        />
                   </View>
                 <TouchableOpacity style={styles.downloadCover}>
                 <Icon name="arrow-down-bold" size={20} color="#000" />
                 </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.pdfFileName} numberOfLines={2}>{item?. book_title}</Text>
                </View>
            </View>
        </TouchableOpacity>
   
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
                    data={res}
                    keyExtractor={item => item.id}
                    renderItem={ListView}
                    ListFooterComponent={<View style={{ height: 70 }} />}
             
                   
                />

              
            </View>
            
    
    )
};

export default Resources;