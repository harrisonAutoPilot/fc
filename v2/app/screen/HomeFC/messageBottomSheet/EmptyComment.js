import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './style';



const EmptyComment = () => {


  return (
    <View style={styles.emptyContainer}>
     <View>
     <Image 
          source={require("@Assets2/image/emptyBox.png")}
          style={styles.storeImg}
          />
         
     </View>
     <View style={styles.emptyTextCover}>
            <Text style={styles.emptyBgText}>No Comment</Text>
            <Text style={styles.emptySmText}>Be the first to start a conversation or comment on the post</Text>
          </View>
    </View>
  
  );
};

export default EmptyComment;
