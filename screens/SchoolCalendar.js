import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Agenda, LocaleConfig } from "react-native-calendars"
import { inject, observer } from "mobx-react"
import config from "../utils/LocalConfig"

LocaleConfig.locales["th"] = config
LocaleConfig.defaultLocale = "th"

@inject("calendarStore")
@observer
export default class SchoolCalendar extends React.Component {
     renderItem = item => (
          <View style={styles.itemContainer}>
               <View style={styles.itemSubcontainer}>
                    <Text style={styles.itemTime}>{item.time}</Text>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.itemPlace}>{item.place}</Text>
               </View>
          </View>
     )
     renderDay = day => {
          if (day === undefined) return <View style={styles.fillDateBox} />
          return (
               <View style={styles.dayContainer}>
                    <Text style={styles.dayText}> {day.day} </Text>
               </View>
          )
     }

     componentDidMount() {
          const { fetchCalendar } = this.props.calendarStore
          fetchCalendar()
     }

     render() {
          const { calendar } = this.props.calendarStore
          return (
               <View style={styles.container}>
                    <Agenda
                         items={calendar}
                         selected={"2012-05-16"}
                         pastScrollRange={12}
                         futureScrollRange={12}
                         renderItem={(item, firstItemInDay) =>
                              this.renderItem(item)
                         }
                         renderDay={(day, item) => this.renderDay(day)}
                         renderEmptyDate={() => {
                              return <View />
                         }}
                         renderEmptyData={() => (
                              <View>
                                   <Text> ไม่มีข้อมูล </Text>
                              </View>
                         )}
                         rowHasChanged={(r1, r2) => {
                              return r1.text !== r2.text
                         }}
                         refreshing={false}
                         refreshControl={null}
                         theme={{
                              agendaDayTextColor: "yellow",
                              agendaDayNumColor: "green",
                              agendaTodayColor: "red",
                              agendaKnobColor: "lightgray"
                         }}
                    />
               </View>
          )
     }
}

//เผื่ออยาก customize mark date (ตอนนี้ใช้ default)
const markDate = data => {
     let returnVal = {}
     Object.keys(data).forEach(
          element =>
               (returnVal[element] = {
                    dots: data[element].map((event, index) => ({
                         key: toString(index),
                         color: "blue",
                         selectedDotColor: sets[index % 5]
                    }))
               })
     )
     return returnVal
}

const sets = ["#f6db5f", "#ffb554", "#fe5e51", "#9e3d64", "#36abb5"]

SchoolCalendar.navigationOptions = {
     title: "ปฏิทินโรงเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     },
     itemContainer: {
          backgroundColor: "white",
          flex: 1,
          borderRadius: 15,
          marginLeft: 16,
          marginRight: 16,
          marginTop: 16,
          height: 100
     },
     itemSubcontainer: {
          marginTop: 16,
          marginLeft: 16,
          flex: 1,
          flexDirection: "column"
     },
     itemText: { fontSize: 16 },
     itemPlace: { fontSize: 14, color: "darkgray" },
     itemTime: { fontSize: 14, color: "darkgray" },
     emptyDate: {
          height: 15,
          flex: 1,
          paddingTop: 30
     },
     fillDateBox: {
          marginLeft: 50
     },
     dayContainer: {
          marginTop: 32,
          marginLeft: 16
     },
     dayText: {
          fontSize: 24
     }
})
