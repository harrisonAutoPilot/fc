import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import TextTicker from 'react-native-text-ticker'


const PosterHeaderComponent = (props) => {


  return (
    <View style={styles.topNav}>
    <View style={styles.leftNav}>

      <View style={styles.greetCover}>
       <View style={styles.smFlex}>
       <TouchableOpacity onPress={props.onPressBack}>
        <Image
          source={require("@Assets2/image/backArrow.png")}
          style={styles.backImg}
         />
        </TouchableOpacity>

        <Text style={styles.nameText}>{props.title}</Text>
       </View>
      </View>
    </View>
    <View style={styles.rightNav}>
      
    <TextTicker
          style={styles.textTicker}
          duration={10000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
         Not Character Defamation!, No Name Calling!, A Safe space to learn, heal & Grow
        </TextTicker>
    </View>
  </View>
  
  );
};

export default PosterHeaderComponent;
