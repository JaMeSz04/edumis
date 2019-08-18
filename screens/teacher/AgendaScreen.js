import React from "react"
import { ScrollView, StyleSheet, View, Text } from "react-native"
import TouchableScale from "react-native-touchable-scale"
import { ListItem } from "react-native-elements"
import {
     Calendar,
     CalendarList,
     Agenda,
     LocaleConfig
} from "react-native-calendars"

const data = {
     จันทร์: [
          {
               title: "Science",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          },
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ],
     อังคาร: [
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ],
     พุธ: [
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          },
          {
               title: "Science",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ],
     พฤหัสบดี: [
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ],
     ศุกร์: [
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          },
          {
               title: "Science",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ],
     เสาร์: [
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ],
     อาทิตย์: [
          {
               title: "Mathematics",
               subtitle: "Prof. John Doe",
               time: "18:00-19:00"
          }
     ]
}

const dataStyle = [
     ["#FFD200", "#F7971E"],
     ["#493240", "#FF0099"],
     ["#38ef7d", "#11998e"],
     ["#f7b733", "#fc4a1a"],
     ["#36D1DC", "#5B86E5"],
     ["#948E99", "#2E1437"],
     ["#000000", "#EB5757"]
]

export default (AgendaScreen = () => {
     return (
          <ScrollView style={styles.container}>
               {Object.keys(data).map((day, i) => (
                    <View style={styles.agendaContainer} key={i}>
                         <Text style={styles.dayText}> {day} </Text>
                         <View>
                              {data[day].map((agenda, j) => (
                                   <ListItem
                                        containerStyle={styles.listItemStyle}
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
})

AgendaScreen.navigationOptions = {
     title: "ตารางสอน"
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

LocaleConfig.locales["th"] = {
     monthNames: [
          "มกราคม",
          "กุมพาพันธ์",
          "มีนาคม",
          "เมษายน",
          "พฤษภาคม",
          "มิถุนายน",
          "กรกฎาคม",
          "สิงหาคม",
          "กันยายน",
          "ตุลาคม",
          "พฤษจิกายน",
          "ธันวาคม"
     ],
     monthNamesShort: [
          "มก",
          "กุม",
          "มีนา",
          "เมษา",
          "พฤษ",
          "มิถุ",
          "กรกฎา.",
          "สิงหา",
          "กันยา.",
          "ตุลา.",
          "พฤษ.",
          "ธันวา"
     ],
     dayNames: [
          "จันทร์",
          "อังคาร",
          "พุธ",
          "พฤหัสบดี",
          "ศุกร์",
          "เสาร์",
          "อาทิตย์"
     ],
     dayNamesShort: ["จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส.", "อา."],
     today: "วันนี้"
}

LocaleConfig.defaultLocale = "th"