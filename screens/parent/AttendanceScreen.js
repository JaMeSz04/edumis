import React from "react"
import { ScrollView, StyleSheet, View, Dimensions } from "react-native"
import { ProgressChart } from "react-native-chart-kit"

const chart = {
     labels: ["ขาด", "มา"],
     data: [0.4, 0.6]
}

const screenWidth = Math.round(Dimensions.get("window").width)

export default function AttandanceScreen() {
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
                    data={data}
                    title={"แจ้ง"}
                    choices={["ขาด", "มา"]}
                    controlled
                    disable
               />
          </ScrollView>
     )
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

const data = [
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: true
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: true
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: true
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     },
     {
          title: "Amy Farha",
          subtitle: "12/05/2019",
          absent: false
     }
]
