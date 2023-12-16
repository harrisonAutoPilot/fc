import React, {useEffect, useState} from 'react';
import {
  View, ImageBackground, Text,TouchableOpacity , LogBox, Image, StatusBar, Dimensions, SafeAreaView
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Slide from './Slide';
import { BannerData } from './data/BannerData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import LogoutModal from './logoutModal';

const { width, height } = Dimensions.get("window");


import styles from "./style";



const Onboarding = (props) => {

  const [showLogoutModal, setShowLogoutModal] = useState(false);

    const redirectToLogin = () => {
      setShowLogoutModal(false)
      props.navigation.navigate("Login")
    };

    const redirectToSignUp = () =>{
      setShowLogoutModal(false)
      props.navigation.navigate("FormDetails");
    } 

    const ListView = props => {

      const item = props.item;
  
      return (
        <View style={styles.vontainer}>
        <Slide item={item} />
         </View>

      );
    };



    return (
      <View style={styles.vontainer}>
      <StatusBar hidden />
      <View style={styles.logoCover}>
        <Image source={require("../../assets/mee.jpg")} style={styles.logoImg} />
        <View style={styles.abrevCover}>
          <Text style={styles.smLetter}>F</Text>
          <Text style={styles.mdLetter}>C</Text>
        </View>
      </View>
      <View style={styles.appName}>
        <Text style={styles.mdLetterFlip}>Faceless</Text>
        <Text style={styles.smLetterFlip}>Counsel</Text>
      </View>
      

              <SwiperFlatList
                    autoplay
                    autoplayDelay={5}
                    autoplayLoop
                    index={0}
                    // paginationStyle={{position:'absolute', top:30}}
                    // paginationStyleItem={styles.paginationStyleItem}
                    // paginationStyleItemInactive={styles.paginationStyleItemInactive}
                    // paginationStyleItemActive={styles.paginationStyleItemActive}
                    showPagination={false}
                    data={BannerData}
                    renderItem={({ item }) => <ListView item={item} />}
                    />

      <View style={styles.btnCover}>
        <TouchableOpacity style={styles.btn} onPress={() => setShowLogoutModal(true)}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.powerCover}>
        <Text style={styles.btnPowerText}>Powered By</Text>
        <View style={styles.innerPower}>
        <Image
            source={require("@Assets2/image/globe.png")}
            style={styles.globe}
        />
        <Text style={styles.faceText}>Facelesscommunity</Text>
        </View>
      </View>
      <LogoutModal
        logoutModal={showLogoutModal}
        returnBack={() => setShowLogoutModal(false)}
        signIn={redirectToLogin}
        create={redirectToSignUp}
      />
      

    </View >
    )
}

export default Onboarding;

