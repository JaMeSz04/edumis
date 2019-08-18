import React from "react"
import { ListItem, Button } from "react-native-elements"
import { View, ScrollView, StyleSheet, Alert } from "react-native"
import { observer } from "mobx-react"

export default (StudentListView = ({
     data,
     title,
     choices,
     controlled,
     disable,
     onChange
}) => (
     <ScrollView>
          {data.map((item, i) => (
               <ListItem
                    key={i}
                    title={item.title}
                    subtitle={
                         item.subtitle
                              ? item.subtitle
                              : "" +
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
                                   disable={disable}
                                   onChange={data => onChange(i, data)}
                              />
                         ) : (
                              <View />
                         )
                    }
               />
          ))}
     </ScrollView>
))

const ControlButton = ({ status, title, choices, disable, onChange }) => {
     if (status === undefined)
          return (
               <Button
                    onPress={() => AlertMenu(choices, onChange)}
                    buttonStyle={styles.buttonLayer}
                    containerStyle={styles.controlButton}
                    title={title}
               />
          )
     const color = { backgroundColor: status ? "#790105" : "#0D631F" }
     if (disable)
          return (
               <Button
                    buttonStyle={{ ...styles.buttonLayer, ...color }}
                    containerStyle={styles.controlButton}
                    title={status ? choices[0] : choices[1]}
               />
          )
     else
          return (
               <Button
                    onPress={() => AlertMenu(choices, onChange)}
                    buttonStyle={{ ...styles.buttonLayer, ...color }}
                    containerStyle={styles.controlButton}
                    title={status ? choices[0] : choices[1]}
               />
          )
}

const AlertMenu = (choices, onChange) =>
     Alert.alert(
          "เปลี่ยนสถานะ",
          "กรุณาเลือกสถานะใหม่",
          [
               {
                    text: choices[0],
                    onPress: () => {
                         onChange(choices[0])
                    }
               },
               {
                    text: choices[1],
                    onPress: () => {
                         onChange(choices[1])
                    }
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
