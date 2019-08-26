import React from "react"
import { ListItem, Button } from "react-native-elements"
import { View, ScrollView, StyleSheet, Alert, Picker } from "react-native"
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
     if (status === undefined)
          return (
               <Picker
                    selectedValue={status}
                    style={{
                         width: 130,
                         height: 50,
                         backgroundColor: colorList[choices.indexOf(status)],
                         borderRadius: 16,
                         alignSelf: "center"
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                         onChange(itemValue)
                    }
               >
                    {choices.map((element, key) => (
                         <Picker.Item
                              style={{ color: "white" }}
                              key={key}
                              label={element}
                              value={element}
                         />
                    ))}
               </Picker>
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
               <Picker
                    selectedValue={status}
                    style={{
                         width: 130,
                         height: 50,
                         backgroundColor: colorList[choices.indexOf(status)],
                         borderRadius: 16,
                         alignSelf: "center"
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                         onChange(itemValue)
                    }
               >
                    {choices.map((element, key) => (
                         <Picker.Item
                              style={{ color: "white" }}
                              key={key}
                              label={element}
                              value={element}
                         />
                    ))}
               </Picker>
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
