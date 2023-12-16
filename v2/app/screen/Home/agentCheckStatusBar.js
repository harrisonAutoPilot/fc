import React, {useState, useEffect} from 'react';
import {View, Text, Image,StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const AgentCheckStatusBarr = props => {
  const [amIn, setAmIn] = useState(props.checkInStatus)



  return (
    <View style={styles.checkInContainer}>
    <View style={styles.checkInCover}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(110, 191, 12, 1)"
        hidden={false}
      />
      <View style={styles.checkInner}>
        <Image
          source={require('@Assets2/image/share_location.png')}
          style={styles.backImg}
        />
        <Text style={styles.checkInText}>Check-In ongoing</Text>
      </View>
      <TouchableOpacity onPress={props.checkOut}>
      <Icon name="chevron-right" color="#fff" size={28} />
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default AgentCheckStatusBarr;
