import React, { Component } from "react"
import { ScrollView, StyleSheet, Alert } from "react-native"
import { ListItem, Button } from "react-native-elements"

export default (StudentScreen = () => {
     return (
          <ScrollView style={styles.container}>
               <ListView data={data} />
          </ScrollView>
     )
})

const ListView = ({ data }) => (
     <ScrollView>
          {data.map((item, i) => (
               <ListItem
                    key={i}
                    title={item.title}
                    subtitle={item.subtitle}
                    leftAvatar={{ source: { uri: item.avatar } }}
                    rightElement={() => <ControlButton status={item.absent} />}
               />
          ))}
     </ScrollView>
)

const ControlButton = ({ status }) => {
     if (status === undefined)
          return (
               <Button
                    onPress={() => AlertMenu()}
                    buttonStyle={styles.buttonLayer}
                    containerStyle={styles.controlButton}
                    title="เช๊คชื่อ"
               />
          )
     const color = { backgroundColor: status ? "#790105" : "#0D631F" }
     return (
          <Button
               onPress={() => AlertMenu()}
               buttonStyle={{ ...styles.buttonLayer, ...color }}
               containerStyle={styles.controlButton}
               title={status ? "ขาด" : "มา"}
          />
     )
}

const AlertMenu = () =>
     Alert.alert(
          "เปลี่ยนสถานะมา/ขาด",
          "กรุณาเลือกสถานะใหม่",
          [
               {
                    text: "ขาด",
                    onPress: () => console.log("OK Pressed")
               },
               {
                    text: "มา",
                    onPress: () => console.log("Cancel Pressed")
               }
          ],
          { cancelable: false }
     )

/*
rightIcon={{
                         name: item.absent ? "visibility-off" : "done"
                    }}
*/

StudentScreen.navigationOptions = {
     title: "รายชื่อนักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: 15,
          backgroundColor: "#fff"
     },
     controlButton: {
          width: 70
     },
     buttonLayer: {
          borderRadius: 15
     }
})

const data = [
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: undefined
     },
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
     }
]
