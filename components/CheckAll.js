import React from "react"
import { Icon } from "react-native-elements"

export default CheckAll = ({ action, update }) => (
     <Icon
          onPress={() => {
               action()
               update()
          }}
          containerStyle={{ marginRight: 16 }}
          name="done-all"
     />
)
