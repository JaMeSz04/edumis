import React from "react"

import {
     createStackNavigator,
     createBottomTabNavigator,
     createDrawerNavigator
} from "react-navigation"
import { Platform } from "react-native"
import TabBarIcon from "../components/TabBarIcon"
import SettingsScreen from "../screens/SettingsScreen"
import AgendaScreen from "../screens/teacher/AgendaScreen"
import DriverScreen from "../screens/teacher/DriverScreen"
import StudentScreen from "../screens/teacher/StudentScreen"
import CourseStudentScreen from "../screens/teacher/CourseStudentScreen"

const config = Platform.select({
     web: { headerMode: "screen" },
     default: {}
})

TeacherAgendaStack = createStackNavigator({
     agenda: AgendaScreen
})

DriverStack = createStackNavigator({
     driverList: DriverScreen
})

StudentListStack = createStackNavigator({
     studentList: StudentScreen
})

CourseStudentStack = createStackNavigator({
     courseStudent: CourseStudentScreen
})

CourseStudentStack.navigationOptions = {
     tabBarLabel: "รายชื่อนักเรียน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-people" : "md-people"}
          />
     )
}

TeacherAgendaStack.navigationOptions = {
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

const teacherNavigator = {
     StudentListStack,
     TeacherAgendaStack,
     DriverStack,
     SettingsStack
}

const subjectNavigator = {
     CourseStudentStack
}

const CourseTabNavigator = createBottomTabNavigator(subjectNavigator)
const TeacherTabNavigator = createBottomTabNavigator(teacherNavigator)

CourseTabNavigator.navigationOptions = {
     drawerLabel: "วิชา"
}

TeacherTabNavigator.navigationOptions = {
     drawerLabel: "ประจำชั้น"
}

const drawer = {
     Teacher: TeacherTabNavigator,
     Course: CourseTabNavigator
}
const navigator = createDrawerNavigator(drawer)

navigator.path = ""

export default navigator
