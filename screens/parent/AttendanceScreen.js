import React from "react"
import { ScrollView, StyleSheet, View, Dimensions } from "react-native"
import { ProgressChart } from "react-native-chart-kit"
import { inject, observer } from "mobx-react"

const screenWidth = Math.round(Dimensions.get("window").width)

@inject("parentStore")
@observer
export default class AttandanceScreen extends React.Component {
     componentDidMount() {
          const { fetchStudentAttendance } = this.props.parentStore
          fetchStudentAttendance()
     }
     render() {
          const { studentAttendance } = this.props.parentStore
          const absent = studentAttendance.filter(data => data.absent).length
          const total = studentAttendance.length
          const chartData =
               studentAttendance.length === 0
                    ? [0, 0]
                    : [absent / total, (total - absent) / total]
          const chart = {
               data: chartData,
               labels: ["ขาด", "มา"]
          }
          return (
               <ScrollView style={styles.container}>
                    <View style={{ marginLeft: 16 }}>
                         <ProgressChart
                              data={chart}
                              width={screenWidth - 32}
                              height={220}
                              chartConfig={{
                                   backgroundColor: "#4286f4",
                                   backgroundGradientFrom: "#373B44",
                                   backgroundGradientTo: "#4286f4",
                                   decimalPlaces: 2, // optional, defaults to 2dp
                                   color: (opacity = 1) =>
                                        `rgba(255, 255, 255, ${opacity})`,
                                   style: {
                                        borderRadius: 16
                                   }
                              }}
                              bezier
                              style={{
                                   marginVertical: 8,
                                   borderRadius: 16
                              }}
                         />
                    </View>
                    <StudentListView
                         data={studentAttendance}
                         title={"แจ้ง"}
                         choices={["ขาด", "มา"]}
                         controlled
                         disable
                    />
               </ScrollView>
          )
     }
}

AttandanceScreen.navigationOptions = {
     title: "รายงาน มา/ขาด นักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
