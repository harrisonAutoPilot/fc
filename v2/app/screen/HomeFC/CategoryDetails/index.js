import React, { useState } from "react";
import { View, Text, Image, Pressable} from "react-native";
import Modal from "react-native-modal";
import styles from "./style";


const CategoryDetails = (props) => {
  const [showCategory, setShowCategory] = useState(false);


  return (
    <Modal
      isVisible={props.visibleCategory}
      onBackdropPress={props.returnBack}
      onSwipeComplete={() => setShowCategory(false)}
      swipeDirection="left"
      animationIn="slideInUp"
      animationInTiming={300}
      animationOut="slideOutDown"
      animationOutTiming={300}
      useNativeDriver={false}
      hasBackdrop={true}
      // backdropColor="#5f9a32"
      backdropOpacity={0.8}
      coverScreen={true}>
      <Pressable style={styles.outsideModal}
        onPress={(event) => {
          if (event.target == event.currentTarget) {
            setShowCategory(false);
          }
        }} >
        <View style={styles.body5}>
          {props.title == 'M' ?
          <>
          <View style={styles.imageHolder}>
            <View style={styles.categoryCover}>
              <Text style={styles.categoryText}>M</Text>
            </View>
            <Text style={styles.titleText}>Moltivational</Text>
          </View>
          <View style={styles.reasonCover}>
            <Text style={styles.reasonText}>Contents that propels individuals to engage in positive goal-directed behavior.</Text>
          </View>
          </>
    : props.title == 'R' ?
    <>
    <View style={styles.imageHolder}>
      <View style={styles.categoryCover}>
        <Text style={styles.categoryText}>R</Text>
      </View>
      <Text style={styles.titleText}>Relationship</Text>
    </View>
    <View style={styles.reasonCover}>
      <Text style={styles.reasonText}>Share the unique aspects, experiences, and feelings that define relationship. Moments and dynamics that make connection meaningful.</Text>
    </View>
    </>
    : props.title == 'G' ?

    <>
    <View style={styles.imageHolder}>
      <View style={styles.categoryCover}>
        <Text style={styles.categoryText}>G</Text>
      </View>
      <Text style={styles.titleText}>Good News</Text>
    </View>
    <View style={styles.reasonCover}>
      <Text style={styles.reasonText}>Share positive and uplifting news or stories. Messages that kindle hope and positive transformation.</Text>
    </View>
    </>
    : props.title == 'C' ?

    <>
    <View style={styles.imageHolder}>
      <View style={styles.categoryCover}>
        <Text style={styles.categoryText}>C</Text>
      </View>
      <Text style={styles.titleText}>Career</Text>
    </View>
    <View style={styles.reasonCover}>
      <Text style={styles.reasonText}>Provide insights into professional journey. Share key aspects, experiences,principles & achievements that define career path.</Text>
    </View>
    </>
    : props.title == 'F' ?

    <>
    <View style={styles.imageHolder}>
      <View style={styles.categoryCover}>
        <Text style={styles.categoryText}>F</Text>
      </View>
      <Text style={styles.titleText}>Finance</Text>
    </View>
    <View style={styles.reasonCover}>
      <Text style={styles.reasonText}>Discuss financial topics, insights, and experiences. Share information about budgeting, investing, and personal finance strategies.</Text>
    </View>
    </>
    : props.title == 'P' ?

    <>
    <View style={styles.imageHolder}>
      <View style={styles.categoryCover}>
        <Text style={styles.categoryText}>P</Text>
      </View>
      <Text style={styles.titleText}>Prayer</Text>
    </View>
    <View style={styles.reasonCover}>
      <Text style={styles.reasonText}>Prayer the act of seeking guidance, strength, or gratitude, creating a sense of mindfulness.</Text>
    </View>
    </>
: props.title == 'H' ?
<>
<View style={styles.imageHolder}>
  <View style={styles.categoryCover}>
    <Text style={styles.categoryText}>H</Text>
  </View>
  <Text style={styles.titleText}>Health</Text>
</View>
<View style={styles.reasonCover}>
  <Text style={styles.reasonText}>Share insights, tips, and experiences related to maintaining a healthy lifestyle. Discuss wellness, fitness routines, and personal health journeys.</Text>
</View>
</>
:
    null
      }

        </View>
      </Pressable>
    </Modal>
  )
};

export default CategoryDetails