import React from "react"
import { ScrollView, StyleSheet } from "react-native"

export default (CourseStudentScreen = () => {
     return (
          <ScrollView style={styles.container}>
               <StudentListView data={data} />
          </ScrollView>
     )
})

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

const data = [
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     }
]
