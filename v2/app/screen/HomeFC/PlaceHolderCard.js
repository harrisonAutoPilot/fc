import React, { useEffect,useState, useRef} from 'react';
import { View, StatusBar,Text, Animated,Image, Easing } from "react-native";
import LottieView from 'lottie-react-native'
import styles from '../Splash/style';

  
  const PlaceholderCard= ({ props, item, navigation,userData, index }) => {
    
    const [animated, setAnimated] = useState(new Animated.Value(150))

    useEffect(() => {
        Animated.spring(animated,{
            toValue:200,
            duration:2000,
            friction:1,
            tension:20,
            useNativeDriver:true
          }).start();
    }, []);
    
    
    const animatedStyle = { transform: [  {translateY:animated} ] };

  
    return (
        <View>
        <View style={styles.imageHolder}>
           <LottieView     
               source={require("@Assets2/image/initiativeCompany.json")} 
               style={{flex:1, alignItems:'center', margin:0}} 
               autoPlay
               loop={true}
               resizeMode="cover" 
                />
          <Animated.View style={[styles.middleContainer, animatedStyle]}>
           <Image     
               source={require("@Assets2/image/mee.jpg")} 
               style={{width:70, height:70, borderRadius:100}} 
               resizeMode="cover" 
                /> 
          <Text style={styles.fText}>FC</Text>
           </Animated.View>
           <View style={styles.bottomCover}>
           <Text style={styles.cText}>Faceless Counselling</Text>
           </View>
           </View>
   </View>
    );
  };
  
  export default PlaceholderCard;
  