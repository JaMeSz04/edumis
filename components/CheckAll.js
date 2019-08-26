import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { Icon } from "react-native-elements"

export default CheckAll = ({ action, update }) => (
     <TouchableOpacity
          style={{ flex: 1, flexDirection: "row" }}
          onPress={() => {
               action()
               update()
          }}
     >
          <Text style={{ alignSelf: "center", marginRight: 5 }}>มาทั้งหมด</Text>
          <Icon containerStyle={{ marginRight: 16 }} name="done-all" />
     </TouchableOpacity>
)
