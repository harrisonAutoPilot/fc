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
import { createMeeting, token } from "../../../../api";
import PulseAnim from "./PulseAnim"

import PulseLoader from 'react-native-pulse-loader';



export default function RoomCall(props) {
  const [meetingId, setMeetingId] = useState(null);
  const [animated, setAnimated] = useState(new Animated.Value(150))
  const item = props?.route?.params?.item;
  const [showMiddle, setShowMiddle] = useState(false);




  useEffect(() => {

    getMeetingId() 

  }, []);




function JoinScreen(props) {
  const [meetingVal, setMeetingVal] = useState(item.requestId);

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




// this is the button
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


function ControlsContainer({join, leave, toggleWebcam, toggleMic,participants}) {
  console.log("just testing", participants)
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        position:'absolute',
        alignItems:'center',
        alignSelf:'center',
        width:wp('80%'),
        bottom:10,
      }}
    >
        { !showMiddle ?
     <TouchableOpacity style={styles.pickBtn} onPress={() => {join(), setShowMiddle(true) }}>
        <Acon name="phone-hangup" size={30} color="#fff" />
      </TouchableOpacity>
            :
            null
        }

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
        props.navigation?.goBack()
        }}>
         
        <Acon name="phone-hangup" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}


function ControlsContainerReceiver({ join, leave, toggleWebcam, toggleMic,participants }) {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        position:'absolute',
        alignItems:'center',
        alignSelf:'center',
        width:wp('80%'),
        bottom:10,
      }}
    >
     
     
      <TouchableOpacity style={styles.pickBtn}  onPress={() => toggleWebcam()}>
         
         <Acon name="camera" size={30} color="#fff" />
       </TouchableOpacity>
     
        <TouchableOpacity style={styles.pickBtn}  onPress={() => toggleMic()}>
         
         <Acon name="microphone" size={30} color="#fff" />
       </TouchableOpacity>

 
      <TouchableOpacity style={styles.closeBtn} onPress={() => {leave(), props.navigation?.goBack()}}>
         
        <Acon name="phone-hangup" size={30} color="#fff" />
      </TouchableOpacity>
      
    </View>
  );
}




// this is for the participant view
function ParticipantView({ participantId }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);

  return (

    <View style={{height:hp('100%')}}>
    <View style={styles.imageHolder}>
    <LottieView     
         source={require("@Assets2/image/initiativeCompany.json")} 
        style={{flex:1, alignItems:'center', margin:0}} 
        autoPlay
        loop={false}
        resizeMode="cover" 
         />
   <Animated.View style={[styles.middleContainer, { transform: [  {translateY:new Animated.Value(150)} ] }]}>
       <Image     
        source={require("@Assets2/image/mee.jpg")} 
        style={{width:70, height:70, borderRadius:100}} 
        resizeMode="cover" 
         /> 
    
        
   <Text style={styles.fText}>FC</Text>
    </Animated.View>
    <View style={styles.bottomCover}>
    <Text style={styles.cText}>Faceless Counselling ...</Text>
    <Text style={styles.cTextSm}>@{item?.counsellor_name}</Text>
    </View>
    </View>
    </View>
  )
}


// const animatedStyle = { transform: [  {translateY:animated} ] };


// this is for the participant list
function ParticipantList({ participants }) {
  return participants?.length > 0 ? (
    <FlatList
      data={participants}
      renderItem={({ item }) => {
        return <ParticipantView participantId={item} />;
      }}
    />
  ) : (
    <View style={{flex:1}}>
    <View style={styles.imageHolder}>
    <LottieView     
        source={require("@Assets2/image/initiativeCompany.json")} 
        style={{flex:1, alignItems:'center', margin:0}} 
        autoPlay
        loop={false}
        resizeMode="cover" 
         />
   <Animated.View style={[styles.middleContainer, { transform: [  {translateY:new Animated.Value(150)} ] }]}>
   <PulseAnim />
   <Text style={styles.fText}>FC</Text>
   <Text style={styles.cTextSm}>@{item?.counsellor_name}</Text>
    </Animated.View>
    <View style={styles.bottomCover}>
    <Text style={styles.cText}>Ringing ...</Text>
   
    </View>
    </View>
    </View>
  );
}


function MeetingView() {
  // Get `participants` from useMeeting Hook
  const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
  const participantsArrId = [...participants.keys()];

  console.log("the paaaa",participants )

  return (
    <View style={{ flex: 1 }}>
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




  const getMeetingId = async (id) => {
    // const meetingId = id == null ? await createMeeting({ token }) : item?.requestId;;
    const meetingId = item?.requestId;
    setMeetingId(meetingId);
  };


  useEffect(() => {
    Animated.spring(animated,{
        toValue:200,
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
          name: `${item?.counsellor_name}`,
        }}
        token={token}
      >
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
};


