import React from "react"
import { Icon } from "react-native-elements"

export default CheckAll = ({ action, update }) => (
     <Icon
          onPress={() => {
               console.log("test2")
               action()
               update()
          }}
          containerStyle={{ marginRight: 16 }}
          name="done-all"
     />
)
