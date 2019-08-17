import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { ExpoLinksView } from "@expo/samples"

export default (DriverScreen = () => {
     return <ScrollView style={styles.container} />
})

DriverScreen.navigationOptions = {
     title: "รถรับส่งนักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
