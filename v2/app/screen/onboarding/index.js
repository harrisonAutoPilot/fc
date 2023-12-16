import React, {useEffect, useState} from 'react';
import {
  View, ImageBackground, Text,TouchableOpacity , LogBox, Image, StatusBar, Dimensions, SafeAreaView
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Slide from './Slide';
import SlideData from  './data/slides';
import SlideSm from './SlideSm';
import { BannerData } from './data/BannerData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import FadeCarousel, { Bearing } from 'react-native-fadecarousel';
import LogoutModal from './logoutModal';
import img0 from '../../assets/addict.jpeg'
import img1 from '../../assets/diviv.jpg'
import img2 from '../../assets/edu.jpg'
import img3 from '../../assets/abused.jpg'
import img4 from '../../assets/fratr.jpg'
import img5 from '../../assets/raped.jpg'
import img6 from '../../assets/trau.jpg'
import img7 from '../../assets/issue1.jpg'


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
        <View>
        <Slide item={item} />
         </View>

      );
    };


    const ListViewSm = props => {

      const item = props.item;
  
      return (
        <View>
        <SlideSm item={item} />
         </View>

      );
    };



    return (
      <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.vontainer}>
    
      <StatusBar barStyle="dark-content" backgroundColor='#fff' hidden={true} />
                <View style={styles.bgImgCover}>
                <FadeCarousel
                loop 
                fadeAnimationDuration={1000} 
                autoPlay={{enable: true , delay: 3000 }}>
                  
       {[
          <View style={styles.bgImgCover}>
               <Image key={'slide oneqw'} source={img0} style={styles.imgSize} />
           </View>,
              <View style={styles.bgImgCover}>
                  <Image key={'slide one'} source={img1} style={styles.imgSize} />
              </View>,
              <View style={styles.bgImgCover}>
                  <Image key={'slide two'} source={img2} style={styles.imgSize} />
              </View>,
             <View style={styles.bgImgCover}>
              <Image key={'slide three'} source={img3} style={styles.imgSize} />
             </View>,
              <View style={styles.bgImgCover}>
              <Image key={'slide four'} source={img4} style={styles.imgSize} />
             </View>,
              <View style={styles.bgImgCover}>
              <Image key={'slide five'} source={img5} style={styles.imgSize} />
              </View>,
            <View style={styles.bgImgCover}>
            <Image key={'slide six'} source={img6} style={styles.imgSize} />
            </View>, 
             <View style={styles.bgImgCover}>
             <Image key={'slide seven'} source={img7} style={styles.imgSize} />
             </View>,  
        ]}
    </FadeCarousel>
                </View>

                <View style={styles.smImgCover}>
                <FadeCarousel
                loop 
                fadeAnimationDuration={1000} 
                autoPlay={{enable: true , delay: 3000 }}>
                  
       {[
              <View style={styles.smImgCover}>
                  <Image key={1} source={img0} style={styles.imgSizeSm} />
              </View>,
               <View style={styles.smImgCover}>
               <Image key={'slide two5'} source={img1} style={styles.imgSizeSm} />
           </View>,
              <View style={styles.smImgCover}>
                  <Image key={'slide twoe'} source={img2} style={styles.imgSizeSm} />
              </View>,
             <View style={styles.smImgCover}>
              <Image key={'slide threee'} source={img3} style={styles.imgSizeSm} />
             </View>,
             <View style={styles.smImgCover}>
             <Image key={'slide foure'} source={img4} style={styles.imgSizeSm} />
            </View>,
               <View style={styles.smImgCover}>
               <Image key={'slide fivee'} source={img5} style={styles.imgSizeSm} />
              </View>,  
               <View style={styles.smImgCover}>
               <Image key={'slide sixe'} source={img6} style={styles.imgSizeSm} />
              </View>,
               <View style={styles.smImgCover}>
               <Image key={'slide sevene'} source={img7} style={styles.imgSizeSm} />
              </View>,
        ]}
    </FadeCarousel>
                </View>

                <View style={styles.queContainer}>
                <FadeCarousel
                loop 
                fadeAnimationDuration={1000} 
                autoPlay={{enable: true , delay: 3000 }}>
                  
       {[
                <View style={styles.smImgCoverQue}>
                <Text key={'slide one2'} style={styles.queBgL}>Dealing with addiction</Text>
              </View>,
              <View style={styles.smImgCoverQue}>
                   <Text key={'slide one3'} style={styles.queBgL}>Before signing that divorce paper</Text>
              </View>,
              <View style={styles.smImgCoverQue}>
                   <Text key={'slide two2'} style={styles.queBg}>Carreer challenges ?</Text>
              </View>,
             <View style={styles.smImgCoverQue}>
               <Text key={'slide three2'} style={styles.queBg}>Domestically abused ?</Text>
             </View>,
              <View style={styles.smImgCoverQue}>
              <Text key={'slide four2'} style={styles.queBg}>Are you frustrated ?</Text>
            </View>,
              <View style={styles.smImgCoverQue}>
              <Text key={'slide five2'} style={styles.queBg}>Raped ?</Text>
            </View>,
           <View style={styles.smImgCoverQue}>
           <Text key={'slide six2'} style={styles.queBg}>Post trauma?</Text>
            </View>,
              <View style={styles.smImgCoverQue}>
              <Text key={'slide seven2'} style={styles.queBgL}>Going through marrital issues ?</Text>
            </View>,
              
        ]}
    </FadeCarousel>
                 
                </View>

      <View style={styles.btnCover}>
        <TouchableOpacity style={styles.btn} onPress={() => setShowLogoutModal(true)}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.powerCover}>
        <Text style={styles.btnPowerText}>Powered By</Text>
        <View style={styles.innerPower}>
        <Image
            source={require("@Assets2/image/globe.png")}
            style={styles.globe}
        />
        <Text style={styles.faceText}>Facelesscommunity</Text>
        </View>
      </View> */}
      <LogoutModal
        logoutModal={showLogoutModal}
        returnBack={() => setShowLogoutModal(false)}
        signIn={redirectToLogin}
        create={redirectToSignUp}
      />
      

    </View >
    </SafeAreaView>
    )
}

export default Onboarding;

