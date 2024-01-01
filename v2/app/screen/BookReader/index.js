import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  Text,
  Linking,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  FlatList,
} from "react-native";
import { TransactionHeader } from "@Component2";
import Pdf from "react-native-pdf";
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";
import { res } from "../../util/resources";
import { MaterialIndicator } from "react-native-indicators";



const BookReader = (props) => {

  const collections = props.route.params.collections;
  const [showMore, setShowMore] = useState(true);
  const [items, setItems] = useState(props.route.params.item)
  const [newPostItem, setNewPostItem] = useState()

  // const items = props.route.params.item;

  const [checkNewPost, setCheckNewPost] = useState(false);
  


  const openDoc = (item) =>{
    setCheckNewPost(true)
    setNewPostItem(item)
    setItems(item)
  }


  useEffect(() => {
    if (newPostItem && checkNewPost) {

    setItems(newPostItem)

    } else{

      setItems(props.route.params.item)

    }
  }, [newPostItem, checkNewPost]);


  const ListView = ({ item, index }) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => openDoc(item)}>
        <View style={styles.bottomCardRed}>
          <View style={styles.bottomCardRedFlex}>
            <View>
              <Image
                source={require("@Assets2/image/pdff.png")}
                style={styles.pdfImg}
              />
            </View>
            {/* <TouchableOpacity style={styles.downloadCover}>
           <Icon name="arrow-down-bold" size={20} color="#000" />
           </TouchableOpacity> */}
          </View>
          <View>
            <Text style={styles.pdfFileName} numberOfLines={2}>
              {item?.book_title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const BooksToggle = useCallback(
    ({ onPress }) => (
      <View style={styles.apointCover}>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.indicatorCover}>
                      <MaterialIndicator
                        animating={true}
                        color="#5f9a32"
                        size={50}
                      />
                      <Image
                        source={require("../../assets/mee.jpg")}
                        style={styles.loadImg}
                      />
                    </View>
        </TouchableOpacity>
      </View>
    ),
    []
  );
  

  const NoteToggle = useCallback(
    ({ onPress }) => (
      <View>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.noteCover}>
                      <Image
                       source={require("@Assets2/image/essay.png")}
                        style={styles.writeImg}
                      />
                    </View>
        </TouchableOpacity>
      </View>
    ),
    []
  );
  

  const GoBack = useCallback(
    ({ onPress, messageCount }) => (
      <View style={styles.backCover}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="arrowleft" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    ),
    []
  );

  console.log("Inside the book reader", items);

  // const source = require("../../assets/transaction-231221063538381362.pdf");

 

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(221, 225, 255, 1)"
        hidden={true}
      />
      <GoBack onPress={() => props.navigation.goBack()} />

      { newPostItem && checkNewPost ?
      <Pdf
        source={items?.book_url}
        
        style={styles.pdfStyle}
        trustAllCerts={Platform.OS === "ios"}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
      />
      :
      <Pdf
      source={items?.book_url}
      style={styles.pdfStyle}
      trustAllCerts={Platform.OS === "ios"}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`current page: ${page}`);
      }}
      onError={(error) => {
        console.log(error);
      }}
      onPressLink={(uri) => {
        console.log(`Link presse: ${uri}`);
      }}
    />
    }

     

      { !showMore ?
      <BooksToggle onPress={() => setShowMore(true)} />
      :
      null
      }

      {showMore ?
      <View style={styles.previewContainer}>
        <TouchableOpacity style={styles.miniClose} onPress={() => setShowMore(false)}>
          <Acon name="close-circle-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <View style={styles.otherCover}>
          <Text style={styles.otherCaption}>Other resources by @{collections.poster}</Text>
        </View>
        <View style={styles.previewInner}>
          <FlatList
            // contentContainerStyle={{flexGrow:1}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={res}
            keyExtractor={(item) => item.id}
            renderItem={ListView}
          />
        </View>
      </View>
      :
      null
      }
       <NoteToggle />
    </View>
  );
};

export default BookReader;
