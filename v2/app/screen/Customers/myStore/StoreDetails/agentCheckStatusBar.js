import React, {useState, useEffect} from 'react';
import {View, Text, Image,StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import HeaderComponent from './headerComponent'


const AgentCheckStatusBar = props => {
  const [amIn, setAmIn] = useState(props.checkInStatus)

  // const [amIn, setAmIn] = useState(false)

  const checkIn = () =>{
    setAmIn(!amIn)
    props.changeStatus(amIn)

  }



  return (
    <View style={styles.checkInContainer}>
    <View style={styles.checkInCover}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(110, 191, 12, 1)"
        hidden={true}
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
 
 

    <View style={styles.headerCoverNew}>
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
  </View>
  );
};

export default AgentCheckStatusBar;
