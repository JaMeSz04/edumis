import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { ListItem } from "react-native-elements"

export default (HomeworksScreen = () => {
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

HomeworksScreen.navigationOptions = {
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