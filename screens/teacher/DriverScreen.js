import React from "react"
import { ScrollView, StyleSheet } from "react-native"

export default (DriverScreen = () => {
     return (
          <ScrollView style={styles.container}>
               <StudentListView
                    data={data}
                    title={"แจ้ง"}
                    choices={["รับ", "ส่ง"]}
                    controlled
               />
          </ScrollView>
     )
})

DriverScreen.navigationOptions = {
     title: "รถรับส่งนักเรียน"
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
          subtitle: "ป 2/5",
          statusMessage: "ส่งเวลา 15:00",
          absent: undefined
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          statusMessage: "ส่งเวลา 15:00",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          statusMessage: "ส่งเวลา 15:00",
          absent: false
     }
]
