import React from "react"
import { ScrollView, StyleSheet, View, Text } from "react-native"
import TouchableScale from "react-native-touchable-scale"
import { ListItem, Avatar } from "react-native-elements"
import { inject, observer } from "mobx-react"

@inject("parentStore")
@observer
export default class ParentAgendaScreen extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               selectedDate: "จันทร์"
          }
     }
     componentDidMount() {
          const { fetchStudentAgenda } = this.props.parentStore
          fetchStudentAgenda()
     }
     render() {
          const { studentAgenda } = this.props.parentStore
          const returnVal =
               studentAgenda.length === 0 ? (
                    <View />
               ) : (
                    studentAgenda[this.state.selectedDate].map((agenda, j) => (
                         <ListItem
                              containerStyle={styles.listItemStyle}
                              key={j}
                              Component={TouchableScale}
                              friction={90}
                              tension={100}
                              activeScale={0.95}
                              linearGradientProps={{
                                   colors:
                                        dataStyle[
                                             Object.keys(studentAgenda).indexOf(
                                                  this.state.selectedDate
                                             )
                                        ],
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
                    ))
               )

          const avatarDay = Object.keys(mapper).map((shortDay, i) => (
               <Avatar
                    key={i}
                    size="medium"
                    rounded
                    containerStyle={styles.avatarDate}
                    onPress={() =>
                         this.setState({ selectedDate: mapper[shortDay] })
                    }
                    title={shortDay}
               />
          ))
          return (
               <ScrollView style={styles.container}>
                    <View style={styles.dayList}>{avatarDay}</View>
                    <View style={styles.agendaContainer}>{returnVal}</View>
               </ScrollView>
          )
     }
}

ParentAgendaScreen.navigationOptions = {
     title: "ตารางเรียน"
}

const mapper = {
     จ: "จันทร์",
     อัง: "อังคาร",
     พ: "พุธ",
     พฤ: "พฤหัสบดี",
     ศ: "ศุกร์"
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
          marginTop: 32,
          marginLeft: 16,
          marginRight: 16
     },
     dayText: {
          marginBottom: 16,
          fontSize: 18,
          fontWeight: "bold"
     },
     dayList: {
          flex: 1,
          flexDirection: "row",
          marginLeft: 16,
          marginRight: 16,
          marginTop: 16,
          alignSelf: "center"
     },
     avatarDate: {
          marginLeft: 8,
          marginRight: 8
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
