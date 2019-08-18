import React from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { Avatar, ListItem } from "react-native-elements"
import { TouchableScale } from "react-native-touchable-scale"

export default function ProfileScreen() {
     return (
          <View style={styles.container}>
               <View style={styles.header} />
               <Image
                    style={styles.avatar}
                    source={{
                         uri:
                              "https://bootdey.com/img/Content/avatar/avatar6.png"
                    }}
               />
               <View style={styles.body}>
                    <View style={styles.bodyContent}>
                         <Text style={styles.name}> ปฏิพล เรียบประดิษฐ์ </Text>
                         <Text style={styles.info}>ม. 4/8 เลขที่ 24</Text>
                    </View>
                    <View>
                         <ListItem
                              title={"รหัสนักเรียน"}
                              titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                              containerStyle={{
                                   marginLeft: 16,
                                   marginRight: 16,
                                   marginTop: 64
                              }}
                              rightTitle="12654"
                              rightTitleStyle={{ fontSize: 18 }}
                         />
                         <ListItem
                              title={"การบ้าน"}
                              titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                              containerStyle={{
                                   marginLeft: 16,
                                   marginRight: 16
                              }}
                              rightTitle="22"
                              rightTitleStyle={{ fontSize: 18 }}
                         />
                         <ListItem
                              title={"เข้าเรียน"}
                              titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                              containerStyle={{
                                   marginLeft: 16,
                                   marginRight: 16
                              }}
                              rightTitle="20%"
                              rightTitleStyle={{ fontSize: 18 }}
                         />
                    </View>
               </View>
          </View>
     )
}

ProfileScreen.navigationOptions = {
     header: null
}
const styles = StyleSheet.create({
     header: {
          backgroundColor: "#00BFFF",
          height: 200
     },
     avatar: {
          width: 130,
          height: 130,
          borderRadius: 63,
          borderWidth: 4,
          borderColor: "white",
          marginBottom: 10,
          alignSelf: "center",
          position: "absolute",
          marginTop: 130
     },
     name: {
          fontSize: 22,
          color: "#FFFFFF",
          fontWeight: "600"
     },
     body: {
          marginTop: 40
     },
     bodyContent: {
          flex: 1,
          alignItems: "center",
          padding: 30
     },
     name: {
          fontSize: 28,
          color: "#696969",
          fontWeight: "600"
     },
     info: {
          fontSize: 16,
          color: "#00BFFF",
          marginTop: 6
     },
     description: {
          fontSize: 16,
          color: "#696969",
          marginTop: 8,
          textAlign: "center"
     },
     buttonContainer: {
          marginTop: 10,
          height: 45,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          width: 250,
          borderRadius: 30,
          backgroundColor: "#00BFFF"
     }
})
