import React from "react"
import { ScrollView, StyleSheet, View, Text } from "react-native"
import TouchableScale from "react-native-touchable-scale"
import { ListItem } from "react-native-elements"
import { inject, observer } from "mobx-react"

const dataStyle = [
     ["#FFD200", "#F7971E"],
     ["#38ef7d", "#11998e"],
     ["#EB5757", "#000000"]
]

@inject("parentStore")
@observer
export default class GradeScreen extends React.Component {
     componentDidMount() {
          const { fetchStudentGrade } = this.props.parentStore
          fetchStudentGrade()
     }
     render() {
          const { studentGrade } = this.props.parentStore
          return (
               <ScrollView style={styles.container}>
                    <View style={styles.agendaContainer}>
                         {studentGrade.map((element, i) => (
                              <ListItem
                                   containerStyle={styles.listItemStyle}
                                   key={i}
                                   Component={TouchableScale}
                                   friction={90}
                                   tension={100}
                                   activeScale={0.95}
                                   linearGradientProps={{
                                        colors: getColorScheme(element.score),
                                        start: [1, 0],
                                        end: [0.2, 0]
                                   }}
                                   leftIcon={{ name: "assignment" }}
                                   title={element.title}
                                   titleStyle={{
                                        color: "white",
                                        fontWeight: "bold"
                                   }}
                                   rightElement={() => (
                                        <Text style={styles.scoreStyle}>
                                             {element.score}
                                        </Text>
                                   )}
                                   subtitleStyle={{ color: "white" }}
                                   subtitle={element.subtitle}
                              />
                         ))}
                    </View>
                    <View />
               </ScrollView>
          )
     }
}

const getColorScheme = score => {
     if (score >= 3) return dataStyle[1]
     else if (score >= 2) return dataStyle[0]
     else return dataStyle[2]
}

GradeScreen.navigationOptions = {
     title: "ผลการเรียน"
}

const styles = StyleSheet.create({
     item: {
          backgroundColor: "white",
          flex: 1,
          borderRadius: 5,
          padding: 10,
          marginRight: 10,
          marginTop: 17
     },
     listItemStyle: {
          borderRadius: 15,
          marginBottom: 16
     },
     agendaContainer: {
          marginLeft: 16,
          marginRight: 16
     },
     scoreStyle: {
          fontWeight: "bold",
          fontSize: 18,
          marginRight: 16
     },

     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
