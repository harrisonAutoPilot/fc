import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';



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
      
      <TouchableOpacity onPress={props.onPressCart}>
      <Icon name="dots-vertical" size={20} color="#000" />
        </TouchableOpacity>
    </View>
  </View>
  
  );
};

export default PosterHeaderComponent;
