import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { inject, observer } from "mobx-react"

export default (CourseStudentScreen = inject("teacherStore")(
     observer(props => {
          const { courseData } = props.teacherStore
          return (
               <ScrollView style={styles.container}>
                    <StudentListView data={courseData} />
               </ScrollView>
          )
     })
))

CourseStudentScreen.navigationOptions = {
     title: "รายชื่อนักเรียนรายวิชา"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
