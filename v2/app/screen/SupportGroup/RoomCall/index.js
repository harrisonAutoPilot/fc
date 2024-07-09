import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
} from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Text,
  TextInput,
  Animated,
  Image,
  View,
  FlatList,
} from "react-native";
import styles from './style';
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MediaStream,
  RTCView,
} from "@videosdk.live/react-native-sdk";
import LottieView from 'lottie-react-native'
import Icon from "react-native-vector-icons/AntDesign";
import Acon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { createMeeting, token } from "../../../../../api.js";
import PulseAnim from "./PulseAnim"

import PulseLoader from 'react-native-pulse-loader';



function JoinScreen(props) {
  const [meetingVal, setMeetingVal] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6F6FF",
        justifyContent: "center",
        paddingHorizontal: 6 * 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.getMeetingId();
        }}
        style={{ backgroundColor: "#1178F8", padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          marginVertical: 16,
          fontStyle: "italic",
          color: "grey",
        }}
      >
        ---------- OR ----------
      </Text>
      <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={"XXXX-XXXX-XXXX"}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: "italic",
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#1178F8",
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={() => {
          props.getMeetingId(meetingVal);
        }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Button = ({ onPress, buttonText, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};




export default function RoomCall(props) {
  const [meetingId, setMeetingId] = useState(null);
  const [animated, setAnimated] = useState(new Animated.Value(150))
  const item = props?.item;
  const meetCode = props?.meetCode;
  const animatedStyle = { transform: [  {translateY:animated} ] };


  const [showMiddle, setShowMiddle] = useState(false)

  const getMeetingId = async (id) => {
    const meetingId = id == null ? await createMeeting({ token }) : id;
    setMeetingId(meetingId);
  };

  // useEffect(() => {

  //   getMeetingId() 
 

  // }, []);


  function ControlsContainer({join, leave, toggleWebcam, toggleMic,participants}) {
    const [showMiddle, setShowMiddle] = useState(false)
  
    return (
      <View
        style={{
          padding: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          position:'absolute',
          alignItems:'center',
          alignSelf:'center',
          width:wp('100%'),
          bottom:10,
        }}
      >
         
       <TouchableOpacity style={styles.pickBtn} onPress={() => {join(), setShowMiddle(true) }}>
          <Acon name="phone-hangup" size={30} color="#fff" />
        </TouchableOpacity>
            
            {showMiddle ?
  
            <>
              <TouchableOpacity style={styles.pickBtn}  onPress={() => toggleWebcam()}>
                      
              <Acon name="camera" size={30} color="#fff" />
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.pickBtn}  onPress={() => toggleMic()}>
  
              <Acon name="microphone" size={30} color="#fff" />
              </TouchableOpacity>
              </>
              :
              null
      }
        
  
        <TouchableOpacity style={styles.closeBtn} onPress={() => {
          leave(),
          props.return()
          props.navigation?.goBack()
          }}>
           
          <Acon name="phone-hangup" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }



  const getRandomColor = (id) => {
    let ids = parseInt(id)
    let shade;

    if (ids % 2 === 0) {
        shade = `rgba(56, 88, 207, 0.06)`;
    } else {
        shade = `rgba(124, 207, 36, 0.06)`;
    }
    return shade
}



const getRandomBorderColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, '0');
return `#${randomColor}`;
}



  function ParticipantView({ participantId }) {
    const { webcamStream, webcamOn } = useParticipant(participantId);
  
    return webcamOn && webcamStream ? (
      <RTCView
        streamURL={new MediaStream([webcamStream.track]).toURL()}
        objectFit={"contain"}
        style={[styles.paticipantCard, { borderColor: getRandomBorderColor()}]}
      />
    ) : (
      <View
        style={[styles.paticipantCard, { borderColor: getRandomBorderColor()}]}
      >
       <Image     
        source={require("@Assets2/image/mee.jpg")} 
        style={{width:70, height:70, borderRadius:100}} 
        resizeMode="cover" 
           /> 
           <Text style={styles.idText}>{participantId}</Text>
      </View>
    );
  }
  
  function ParticipantList({ participants }) {
    return participants?.length > 0 ? (
      <View style={styles.participantListCover}>
      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle= {styles.bottomCardCover}
        numColumns = {3}
        vertical
        renderItem={({ item }) => {
          return <ParticipantView participantId={item} />;
        }}
      />
      </View>
    ) : (
      <SafeAreaView style={{flex:1}}>
      <View style={styles.imageHolder}>
        <LottieView     
           source={require("@Assets2/image/initiativeCompany.json")} 
          style={{flex:1, alignItems:'center', margin:0}} 
          autoPlay
          loop={true}
          resizeMode="cover" 
           />
        <Animated.View style={[styles.middleContainer, { transform: [  {translateY:new Animated.Value(100)} ] }]}>
         <Image     
          source={item?.image_url}
          style={{width:70, height:70, borderRadius:100}} 
          resizeMode="cover" 
           /> 
      
          
     <Text style={styles.fText}>Faceless Room</Text>
      </Animated.View>
      <View style={styles.bottomCover}>
      <Text style={styles.cText}>{item?.title}</Text>
      <Text style={styles.cTextSm}>Press Join Button to Enter</Text>
      </View>
      </View>
      </SafeAreaView>
    );
  }
  
  
  
  
  function MeetingView() {
    // Get `participants` from useMeeting Hook
    const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
    const participantsArrId = [...participants.keys()];
  
    return (
      <View style={{ flex: 1 }}>
         {meetingId ? (
        <Text style={styles.codeText}>
          Meeting Id :{meetingId}
        </Text>
      ) : null}
        <ParticipantList participants={participantsArrId} />
        <ControlsContainer
          join={join}
          leave={leave}
          toggleWebcam={toggleWebcam}
          toggleMic={toggleMic}
        />
      </View>
    );
  }




  useEffect(() => {
    Animated.spring(animated,{
        toValue:100,
        duration:2000,
        friction:1,
        tension:20,
        useNativeDriver:true
      }).start();
}, []);

  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: "Test User",
        }}
        token={token}
      >
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
}



// export default functon RoomCall  (props)  {
//   const [meetingId, setMeetingId] = useState(null);
//   const [animated, setAnimated] = useState(new Animated.Value(150))
//   const item = props?.item;
//   const meetCode = props?.meetCode;
//   const animatedStyle = { transform: [  {translateY:animated} ] };


//   const [showMiddle, setShowMiddle] = useState(false);









// return meetingId ? (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6FF" }}>
//     <MeetingProvider
//       config={{
//         meetingId,
//         micEnabled: false,
//         webcamEnabled: true,
//         name: "Test User",
//       }}
//       token={token}
//     >
//       <MeetingView />
//     </MeetingProvider>
//   </SafeAreaView>
// ) : (
//   <JoinScreen getMeetingId={getMeetingId} />
// );
// }


