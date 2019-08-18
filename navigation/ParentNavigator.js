import React from "react"
import { Platform } from "react-native"
import {
     createStackNavigator,
     createBottomTabNavigator,
     createDrawerNavigator
} from "react-navigation"

import TabBarIcon from "../components/TabBarIcon"
import ProfileScreen from "../screens/parent/ProfileScreen"
import HomeworkScreen from "../screens/parent/HomeworkScreen"
import GradeScreen from "../screens/parent/GradeScreen"
import AttandanceScreen from "../screens/parent/AttendanceScreen"
import ParentAgendaScreen from "../screens/parent/ParentAgendaScreen"

ProfileStack = createStackNavigator({
     profile: ProfileScreen
})

ParentAgendaStack = createStackNavigator({
     parentAgenda: ParentAgendaScreen
})

HomeworkStack = createStackNavigator({
     homework: HomeworkScreen
})

GradeStack = createStackNavigator({
     grade: GradeScreen
})

AttendanceStack = createStackNavigator({
     attendance: AttandanceScreen
})

ParentAgendaStack.navigationOptions = {
     tabBarLabel: "ตารางเรียน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
          />
     )
}

ProfileStack.navigationOptions = {
     tabBarLabel: "โปรไฟล์",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-person" : "md-person"}
          />
     )
}

HomeworkStack.navigationOptions = {
     tabBarLabel: "การบ้าน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-book" : "md-book"}
          />
     )
}

GradeStack.navigationOptions = {
     tabBarLabel: "ผลการเรียน",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-medal" : "md-medal"}
          />
     )
}

AttendanceStack.navigationOptions = {
     tabBarLabel: "มา/ขาด",
     tabBarIcon: ({ focused }) => (
          <TabBarIcon
               focused={focused}
               name={Platform.OS === "ios" ? "ios-stopwatch" : "md-stopwatch"}
          />
     )
}

const stackNavigator = {
     ProfileStack,
     ParentAgendaStack,
     HomeworkStack,
     GradeStack,
     AttendanceStack
}

const tabNavigator = createBottomTabNavigator(stackNavigator)

export default tabNavigator
