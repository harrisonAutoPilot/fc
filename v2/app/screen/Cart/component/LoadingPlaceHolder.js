import React from 'react';
import { View, ScrollView } from 'react-native';


import styles from '../style';

const HomePlaceholder = () => (

    <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollview}
    >

        {[...new Array(10)].map((_, index) => (

            <View style={styles.listMainView} key={index}>
                   <View style={styles.listOuterContainer}>
                    <View style={styles.listView}>
                        <View style={styles.listImgViewPlaceHolder}>
                            <View style={styles.listImgPlaceHolder}/>
                            <View style={styles.lgLine} />
                        </View>
                        <View style={styles.listChecbox}>
                        </View>
                    </View>

                    <View style={styles.listView}>
                    <View style={styles.smLine} />
                        <View style={styles.smLine} />
                    </View>
                </View>

                <View style={styles.listBtm}>
                    <View style={styles.smLine} />

                </View>
            
            </View>


        ))}

    </ScrollView>

);

export default HomePlaceholder;