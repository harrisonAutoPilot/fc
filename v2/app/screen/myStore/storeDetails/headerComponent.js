import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const HeaderComponent = props => {
  const [amIn, setAmIn] = useState(false)

  const checkIn = () =>{
    setAmIn(!amIn)
    props.changeStatus(amIn)

  }


  return (
    <View style={styles.headerCover}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={require('@Assets2/image/backArrow.png')}
          style={styles.backImg}
        />
      </TouchableOpacity>

      <View>
        <Text style={styles.headerTitle}>Store Details</Text>
      </View>
       {!props.checkInStatus ?
      <TouchableOpacity onPress={checkIn}>
        <Icon name="calendar-start" color="#000" size={20} />
      </TouchableOpacity>
      :
      <Icon name="calendar-start" color="#e6e6e6" size={20} />
       }
    </View>
  );
};

export default HeaderComponent;
