import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
  <TouchableOpacity style={styles.walletCover} onPress={props.onPressWithdrawal}>
    <Image
        source={require("@Assets2/image/wallet-2.png")}
        style={styles.walletImg}
        resizeMode="contain"
      />
      
      
      <View style={styles.miniDown}><Text style={styles.walletAmount}>$0.00</Text>
      <Icon name="chevron-down" size={14} color="#000" style={{marginBottom:4}} />
      </View>
 
  </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressCart}>
      <Icon name="settings" size={20} color="#000" />
        </TouchableOpacity>
    </View>
  </View>
  
  );
};

export default PosterHeaderComponent;
