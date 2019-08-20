import React from "react"
import ParentNavigator from "./ParentNavigator"
import TeacherNavigator from "./TeacherNavigator"

const value = "parent"

const decisionPath = data =>
     data == "teacher" ? TeacherNavigator : ParentNavigator

export default decisionPath(value)
