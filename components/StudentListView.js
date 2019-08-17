import React from "react"
import { ListItem, Button } from "react-native-elements"
import { View, ScrollView, StyleSheet, Alert } from "react-native"

export default (StudentListView = ({ data, title, choices, controlled }) => (
     <ScrollView>
          {data.map((item, i) => (
               <ListItem
                    key={i}
                    title={item.title}
                    subtitle={
                         item.subtitle +
                         " " +
                         (item.statusMessage === undefined
                              ? ""
                              : item.statusMessage)
                    }
                    leftAvatar={{ source: { uri: item.avatar } }}
                    rightElement={() =>
                         controlled ? (
                              <ControlButton
                                   title={title}
                                   choices={choices}
                                   status={item.absent}
                              />
                         ) : (
                              <View />
                         )
                    }
               />
          ))}
     </ScrollView>
))

const ControlButton = ({ status, title, choices }) => {
     if (status === undefined)
          return (
               <Button
                    onPress={() => AlertMenu(choices)}
                    buttonStyle={styles.buttonLayer}
                    containerStyle={styles.controlButton}
                    title={title}
               />
          )
     const color = { backgroundColor: status ? "#790105" : "#0D631F" }
     return (
          <Button
               onPress={() => AlertMenu(choices)}
               buttonStyle={{ ...styles.buttonLayer, ...color }}
               containerStyle={styles.controlButton}
               title={status ? choices[0] : choices[1]}
          />
     )
}

const AlertMenu = choices =>
     Alert.alert(
          "เปลี่ยนสถานะ",
          "กรุณาเลือกสถานะใหม่",
          [
               {
                    text: choices[0],
                    onPress: () => console.log("OK Pressed")
               },
               {
                    text: choices[1],
                    onPress: () => console.log("Cancel Pressed")
               }
          ],
          { cancelable: false }
     )

const styles = StyleSheet.create({
     controlButton: {
          width: 70
     },
     buttonLayer: {
          borderRadius: 15
     }
})
