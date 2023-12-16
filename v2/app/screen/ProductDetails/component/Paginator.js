import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";

import styles from "./style";

export default Paginator = ({ data, scrollX }) => {

    const { width } = useWindowDimensions();

    return (

        <View style={styles.paginatorContainer}>

            {data.map((_, i) => {

                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp"
                })

                return <Animated.View style={[styles.paginatorDot, { width: 7, opacity }]} key={i.toString()} />
            })}

        </View>
    )
}