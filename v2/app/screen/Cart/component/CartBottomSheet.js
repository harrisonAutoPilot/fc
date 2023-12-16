import React from "react";
import { View, Text, Pressable } from "react-native";
import Modal from 'react-native-modal';

import Icon from "react-native-vector-icons/MaterialIcons";


import styles from '../style';




const CartBottomSheet = (props) => {


    const closeModal = () => {
        props.returnBack();
      };
    



    const ReusableView = ({ name, title, func }) => {
        return (
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#f2f2f2' : 'white',
                    },
                    styles.reusableView]}
                onPress={func}
            >
                <Icon name={name} size={20} color="rgba(118, 118, 128, 1)"/>
                <Text style={styles.bottomSheetTitle}>{title}</Text>

            </Pressable>
        )
    }


    return (
    <View>
           
    <Modal
      isVisible={props.deleteModal}
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
            closeModal()
          }
        }}>

                    <View style={styles.bottomSheet}>

                        {props.removeList.length ?
                            <ReusableView
                                title="Remove Selected"
                                name="remove-circle-outline"
                                func={props.removeSelected}

                            />
                            : null
                        }

                        <ReusableView
                            title="Remove All"
                            name="delete-sweep"
                            func={props.deleteAll}

                        />

                    </View>

                    </Pressable>
    </Modal>
    </View>

    )
};

export default CartBottomSheet;

