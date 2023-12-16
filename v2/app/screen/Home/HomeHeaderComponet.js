import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';



const HomeHeaderComponent = (props) => {


  return (
    <View style={styles.topNav}>
    <View style={styles.leftNav}>
      <View style={styles.profileImgCover}>
       
        { props?.picture_url != null && props?.picture_url != '' ?
           <Image
           style={styles.agentImg}
           source={{uri: `${URL}${props.picture_url}`}}
         />
         :
          <Image
          style={styles.userImg}
          source={require('@Assets2/image/personIcon.png')}
          />
   
        }
        <Image
          style={styles.verImg}
          source={require('@Assets2/image/verified.png')}
        />
      </View>

      <View style={styles.greetCover}>
        <View style={styles.greetingInner}>
          <Text style={styles.greetingText}>{props.dayTime}</Text>
          <Image style={styles.sunImg} source={props.dayTimeImage} />
        </View>

        <Text style={styles.nameText}>{props.userName}</Text>
      </View>
    </View>
    <View style={styles.rightNav}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon
          name="bell-outline"
          size={20}
          color={'rgba(28, 27, 31, 1)'}
        />
        <View style={styles.noteDot} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressCart}>
        <Icon
          name="cart-outline"
          size={20}
          color={'rgba(28, 27, 31, 1)'}
        />
        <View style={styles.countCover}>
          <Text style={styles.countText}>{props.orderCount}</Text>
        </View>
   
      </TouchableOpacity>
    </View>
  </View>
  
  );
};

export default HomeHeaderComponent;
