import React from "react";
import { View, Text, Image } from "react-native";

import styles from './style';

export default EmptyScheduled = (props) => (
  
    <View style={styles.emptyCover}>
        <View style={styles.imgCoverBg}>
            <Image source={require("@Assets2/image/appointment-2.png")} style={styles.emptyImg} />
        </View>
        <Text style={styles.emptyTextBg}>Nothing here</Text>
        <Text style={styles.emptyTextSm}>You do not have any request for counsel</Text>
      
       
    </View>
    );
