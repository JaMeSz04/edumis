import React from "react"
import { ListItem, Button } from "react-native-elements"
import { View, ScrollView, StyleSheet, Alert, Platform } from "react-native"
import { Dropdown } from "react-native-material-dropdown"
import { observer } from "mobx-react"

export default StudentListView = ({
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
                    containerStyle={
                         i % 2 === 0
                              ? { backgroundColor: "white" }
                              : { backgroundColor: "lightgray" }
                    }
                    leftAvatar={{ source: { uri: item.avatar } }}
                    rightElement={() => (
                         <View
                              style={{
                                   borderRadius: 16,
                                   borderWidth: 1,
                                   borderColor: "#bdc3c7",
                                   overflow: "hidden"
                              }}
                         >
                              {controlled ? (
                                   <ControlButton
                                        i={i}
                                        title={title}
                                        choices={choices}
                                        status={item.absent}
                                        disable={disable}
                                        onChange={data => onChange(i, data)}
                                   />
                              ) : (
                                   <View />
                              )}
                         </View>
                    )}
               />
          ))}
     </ScrollView>
)

const ControlButton = ({ status, title, choices, disable, onChange, i }) => {
     const currentColor = colorList[0]
     if (status === undefined)
          return (
               <Dropdown
                    animationDuration={0}
                    containerStyle={{
                         height: 50,
                         width: 100,
                         backgroundColor: colorList[0]
                    }}
                    label={choices.length === 0 ? "" : choices[0]}
                    dropdownOffset={{ top: 16, left: 32 }}
                    value={status}
                    data={choices.map(element => ({
                         value: element
                    }))}
                    onChangeText={(value, index, data) => onChange(value)}
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
               <Dropdown
                    animationDuration={0}
                    dropdownOffset={{ top: 16, left: 32 }}
                    value={status}
                    containerStyle={{
                         height: 50,
                         width: 100,
                         backgroundColor: colorList[choices.indexOf(status)]
                    }}
                    label={choices.length === 0 ? "" : choices[0]}
                    data={choices.map(element => ({
                         value: element
                    }))}
                    onChangeText={(value, index, data) => onChange(value)}
               />
          )
}

const colorList = ["#ff6a5a", "#85e21f", "#ff5733", "#ffc300"]

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
     },
     picker: {}
})
