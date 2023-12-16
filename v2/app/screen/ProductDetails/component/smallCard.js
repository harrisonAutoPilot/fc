import React, { useRef, useState } from 'react';
import { View, Image, FlatList, Animated, Text } from "react-native";

import styles from "./style";
import Paginator from "./Paginator";
import PaginationDot from 'react-native-animated-pagination-dot'
import Dots from 'react-native-dots-pagination';


const SmallCard = (props) => {

  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0);

  const [curPage] = React.useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }) => {

    setCurrentIndex(viewableItems[0].index);

  }).current


  
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.url }}
          style={styles.img}
        />
      </View>
    );
  };


  return (

    <View style={styles.imgContainer}>
     
      <View style={styles.dealLogoContainer}>
      {props.id == "deals" ?
        <View style={styles.dealLogo}>
          <Text style={styles.dealLogoText}>DEAL</Text>
        </View>:
        <View style={styles.noDealLogo}/>
        }

        <View style={styles.imgMainView}>

          <FlatList
            data={props.img}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            bounces={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={slideRef}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* <Paginator data={props.img} scrollX={scrollX} /> */}
      <View style={styles.paginatorContainer}>
      <Dots 
      length={props?.img.length}
      passiveDotWidth={8}
      passiveDotHeight={8}
      activeDotHeight={8}
      activeDotWidth={15}
       active={currentIndex} />
      </View>
    </View>

  )
}




export default SmallCard