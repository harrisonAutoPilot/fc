import React from 'react';
import {View,Text, Image} from 'react-native';
import styles from './style';



const CommentPlaceholder = () => {


  return (
    <View>
      <View style={styles.messageCard}>
       <View style={styles.userAvatarCoverP} />
           <View style={styles.userCommentHeaderP}>
             <View style={styles.smLine} />
             <View style={styles.mdLine} />
     </View>
    </View>

    <View style={styles.messageCard}>
       <View style={styles.userAvatarCoverP} />
           <View style={styles.userCommentHeaderP}>
             <View style={styles.smLine} />
             <View style={styles.mdLine} />
     </View>
    </View>

    <View style={styles.messageCard}>
       <View style={styles.userAvatarCoverP} />
           <View style={styles.userCommentHeaderP}>
             <View style={styles.smLine} />
             <View style={styles.mdLine} />
     </View>
    </View>

    </View>
  
  );
};

export default CommentPlaceholder;
