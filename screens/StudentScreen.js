import React, { Component } from "react"
import { ScrollView, StyleSheet } from "react-native"
import ListView from "../components/listView"

const data = [
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     }
]

export default (StudentScreen = () => {
     return (
          <ScrollView style={styles.container}>
               <ListView data={data} />
          </ScrollView>
     )
})

StudentScreen.navigationOptions = {
     title: "รายชื่อนักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: 15,
          backgroundColor: "#fff"
     }
})
