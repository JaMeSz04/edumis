import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { ListItem } from "react-native-elements"

const data = [
     {
          title: "14101 - คณิตศาสตร์",
          avatar:
               "https://icon-library.net/images/homework-icon-png/homework-icon-png-25.jpg",
          subtitle: "แบบฝึกหัด หน้า 20-22",
          date: "01 สิงหาคม 2562"
     },
     {
          title: "14102 - วิทยาศาสตร์",
          avatar:
               "https://icon-library.net/images/homework-icon-png/homework-icon-png-25.jpg",
          subtitle: "แบบฝึกหัด หน้า 26-28",
          date: "02 สิงหาคม 2562"
     },
     {
          title: "14103 - ตรรกะศาสตร์",
          avatar:
               "https://icon-library.net/images/homework-icon-png/homework-icon-png-25.jpg",
          subtitle: "แบบฝึกหัด หน้า 14-18",
          date: "03 สิงหาคม 2562"
     }
]

export default (HomeworkScreen = () => {
     return (
          <ScrollView style={styles.container}>
               {data.map((item, i) => (
                    <View style={styles.homeworkContainer} key={i}>
                         <ListItem
                              key={i}
                              title={item.title}
                              titleStyle={styles.titleStyle}
                              subtitle={item.subtitle}
                              subtitleStyle={styles.subtitleStyle}
                              rightTitle={item.date}
                              rightTitleStyle={styles.date}
                              leftAvatar={{ source: { uri: item.avatar } }}
                              onPress={() => console.log("hey")}
                         />
                    </View>
               ))}
          </ScrollView>
     )
})

HomeworkScreen.navigationOptions = {
     title: "การบ้าน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: 15,
          backgroundColor: "#fff"
     },
     titleStyle: {
          fontSize: 14
     },
     subtitleStyle: {
          fontSize: 12
     },
     homeworkContainer: {
          flex: 1,
          borderBottomColor: "grey",
          borderBottomWidth: 0.3,
          marginLeft: 9,
          marginRight: 8
     },
     date: {
          fontSize: 11
     }
})
