import React from "react"
import ParentNavigator from "./ParentNavigator"
import TeacherNavigator from "./TeacherNavigator"
import { createStackNavigator } from "react-navigation"

const value = "teacher"

const stack = {
     teacher: TeacherNavigator,
     parent: ParentNavigator
}

export default createStackNavigator(stack)
