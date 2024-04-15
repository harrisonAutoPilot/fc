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


function ControlsContainer({ join, leave, toggleWebcam, toggleMic,participants }) {
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

       <TouchableOpacity style={styles.pickBtn} onPress={() => {join() }}>
         
       
        <Acon name="phone-hangup" size={30} color="#fff" />
      </TouchableOpacity>
     { participants?.length > 0 ?
     <>
      <Button
        onPress={() => {
          toggleWebcam();
        }}
        buttonText={"Toggle Webcam"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => {
          toggleMic();
        }}
        buttonText={"Toggle Mic"}
        backgroundColor={"#1178F8"}
      />
      </>
      :
      null
}

      <TouchableOpacity style={styles.closeBtn} onPress={() => {leave()}}>
         
        <Acon name="phone-hangup" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}



// this is for the participant view
function ParticipantView({ participantId }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={"cover"}
      style={{
        height:hp('100%'),
        marginVertical: 8,
        marginHorizontal: 8,
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
}


// const animatedStyle = { transform: [  {translateY:animated} ] };


// this is for the participant list
function ParticipantList({ participants }) {
  return participants.length > 0 ? (
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
}


function MeetingView() {
  // Get `participants` from useMeeting Hook
  const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
  const participantsArrId = [...participants.keys()];

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




const FcCall = (props) => {
  const [meetingId, setMeetingId] = useState(null);
  const [animated, setAnimated] = useState(new Animated.Value(150))





  const getMeetingId = async (id) => {
    const meetingId = id == null ? await createMeeting({ token }) : item?.requestId;
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
};

export default FcCall;
