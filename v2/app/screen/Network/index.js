import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const Network = () => {
  const [showToast, setShowToast] = useState(true)

  return (
  //  <View>

  //  {showToast && (<View style={styles.innerCover}>
  //     <View style={styles.textCover}>
  //       <View style={styles.smCover}>
  //         <Icon name="alert-circle-outline" size={24} color="#fff" />
  //         <Text style={styles.smText}>No Internet, Check Connection</Text>
  //       </View>
  //     </View>
  //     <TouchableOpacity onPress={() => setShowToast(false)} hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}  style={styles.touchStyle}>
  //       <View>
  //       <Icon name="window-close" size={24} color="#fff" />
  //       </View>
  //     </TouchableOpacity>
  //   </View> ) }
 
    
  //   </View>
  <>
  {showToast && (
    <View style={styles.toastCover}>
       <View style={styles.errView}>
         <Icon name="alert-circle-outline" size={22} color="#fff" />
         <Text style={styles.errText}>No Internet, Check Connection</Text>
       </View>
       <TouchableOpacity style={{width:30, height:30}} onPress={() => setShowToast(false)}>
  
       <Icon name="window-close" size={24} color="#fff" />
    
      </TouchableOpacity>
    </View>
    
  )}

</>
  );
};

export default Network;
