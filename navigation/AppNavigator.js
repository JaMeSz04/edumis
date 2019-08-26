import React from "react"
import {
     createAppContainer,
     createSwitchNavigator,
     createStackNavigator
} from "react-navigation"

import TeacherNavigator from "./TeacherNavigator"

import ParentNavigator from "./ParentNavigator"
import LoginScreen from "../screens/LoginScreen"

const authStack = {
     login: LoginScreen
}

export default createAppContainer(
     createSwitchNavigator({
          // You could add another route here for authentication.
          // Read more at https://reactnavigation.org/docs/en/auth-flow.html
          Teacher: TeacherNavigator,
          Parent: ParentNavigator,

          Auth: createStackNavigator(authStack)
     })
)
