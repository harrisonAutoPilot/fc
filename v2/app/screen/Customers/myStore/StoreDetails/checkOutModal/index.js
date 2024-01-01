import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import styles from './style';

const CheckOutModal = props => {
  const closeModal = () => {
    props.returnBack();
  };
  const [note, setNote] = useState("")

  const CardList = ({
    icon,
    title,
    titleText,
  }) => (
    <View style={styles.inner}>
    <Icon name={icon} size={24} color="rgba(28, 27, 31, 1)" />
    <View style={styles.leftCover}>
      <Text style={styles.storeCaption}>{title}</Text>
      <Text style={styles.storeCaptionText}>
      {titleText}
      </Text>
    </View>
  </View>
  );



  return (
    <Modal
      isVisible={props.checkOutModal}
      onBackdropPress={closeModal}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      backdropColor="rgba(52, 52, 52, 0.8)"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable
        style={styles.outsideModal}
        onPress={event => {
          if (event.target == event.currentTarget) {
            setShowPaymentOption(false);
          }
        }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.topInner}>
              <Image
                source={require('@Assets2/image/event_upcoming.png')}
                style={styles.logoutImg}
              />
              <Text style={styles.checkText}>Check-In is Ongoing</Text>
            </View>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('@Assets2/image/trailing-icon.png')}
                style={styles.logoutImg}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.optionCover}>
              <CardList 
              title="Store"
              titleText={props.store}
              icon="store"
              />
               <CardList 
              title="Location"
              titleText={props.location}
              icon="map-marker-outline"
              />
            
          </View>
          <View style={styles.mdLine} />
            <View style={styles.addCover}>
              <Text style={styles.addText}>Add a Note</Text>
              <Text style={styles.addDesc}>Please record the details of your interaction or encounter with this customer.</Text>
            </View>

            <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={note}
              onChangeText={text=>setNote(text)}
              multiline={true}
              numberOfLines={10}
            />
            </View>
          <TouchableOpacity
              style={styles.confirmCover}
              onPress={props.proceed}>
              <Text style={styles.confirmText}>Check Out</Text>
              <Icon name="calendar-check" size={16} color="#fff" />
            </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default CheckOutModal;
