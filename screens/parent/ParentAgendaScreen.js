import React from "react"
import { ScrollView, StyleSheet, View, Text } from "react-native"
import TouchableScale from "react-native-touchable-scale"
import { ListItem } from "react-native-elements"
import { inject, observer } from "mobx-react"

@inject("parentStore")
@observer
export default class ParentAgendaScreen extends React.Component {
     componentDidMount() {
          const { fetchStudentAgenda } = this.props.parentStore
          fetchStudentAgenda()
     }
     render() {
          const { studentAgenda } = this.props.parentStore
          return (
               <ScrollView style={styles.container}>
                    {Object.keys(studentAgenda).map((day, i) => (
                         <View style={styles.agendaContainer} key={i}>
                              <Text style={styles.dayText}> {day} </Text>
                              <View>
                                   {studentAgenda[day].map((agenda, j) => (
                                        <ListItem
                                             containerStyle={
                                                  styles.listItemStyle
                                             }
                                             key={j}
                                             Component={TouchableScale}
                                             friction={90}
                                             tension={100}
                                             activeScale={0.95}
                                             linearGradientProps={{
                                                  colors: dataStyle[i],
                                                  start: [1, 0],
                                                  end: [0.2, 0]
                                             }}
                                             leftIcon={{ name: "assignment" }}
                                             title={agenda.title}
                                             titleStyle={{
                                                  color: "white",
                                                  fontWeight: "bold"
                                             }}
                                             subtitleStyle={{ color: "white" }}
                                             subtitle={agenda.time}
                                        />
                                   ))}
                              </View>
                         </View>
                    ))}
                    <View />
               </ScrollView>
          )
     }
}

ParentAgendaScreen.navigationOptions = {
     title: "ตารางเรียน"
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
     dayText: {
          marginBottom: 16,
          fontSize: 18,
          fontWeight: "bold"
     },
     emptyDate: {
          height: 15,
          flex: 1,
          paddingTop: 30
     },

     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})

const dataGradiantStyle = [
     ["#FFD200", "#F7971E"],
     ["#493240", "#FF0099"],
     ["#38ef7d", "#11998e"],
     ["#f7b733", "#fc4a1a"],
     ["#36D1DC", "#5B86E5"],
     ["#948E99", "#2E1437"],
     ["#000000", "#EB5757"]
]
const dataStyle = [
     ["#F7971E", "#F7971E"],
     ["#FF0099", "#FF0099"],
     ["#11998e", "#11998e"],
     ["#f7b733", "#f7b733"],
     ["#36D1DC", "#36D1DC"],
     ["#2E1437", "#2E1437"],
     ["#000000", "#000000"]
]
