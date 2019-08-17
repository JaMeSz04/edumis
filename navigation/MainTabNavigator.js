import React from "react"
import { Platform } from "react-native"
import {
     createStackNavigator,
     createBottomTabNavigator
} from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import SettingsScreen from "../screens/SettingsScreen"
import CalendarScreen from "../screens/CalendarScreen"
import StudentlistScreen from "../screens/StudentlistScreen"
import DriverScreen from "../screens/DriverScreen"
import StudentScreen from "../screens/StudentScreen"

const config = Platform.select({
     web: { headerMode: "screen" },
     default: {}
})

CalendarStack = createStackNavigator({
     calendar: CalendarScreen
})

DriverStack = createStackNavigator({
     driverList: DriverScreen
})

StudentListStack = createStackNavigator({
     studentList: StudentScreen
})

CalendarStack.navigationOptions = {
     tabBarLabel: "ตารางสอน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
          />
     )
}

StudentListStack.navigationOptions = {
     tabBarLabel: "รายชื่อนักเรียน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-people" : "md-people"}
          />
     )
}

DriverStack.navigationOptions = {
     tabBarLabel: "รถรับส่งนักเรียน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-bus" : "md-bus"}
          />
     )
}

const SettingsStack = createStackNavigator(
     {
          Settings: SettingsScreen
     },
     config
)

SettingsStack.navigationOptions = {
     tabBarLabel: "ตั้งค่า",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-options" : "md-options"}
          />
     )
}

SettingsStack.path = ""

const teacherNavigator = {
     StudentListStack,
     CalendarStack,
     DriverStack,
     SettingsStack
}

const tabNavigator = createBottomTabNavigator(teacherNavigator)

tabNavigator.path = ""

export default tabNavigator
