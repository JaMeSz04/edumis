import { ScrollView, StyleSheet } from "react-native"
import ListView from "../components/listView"

const data = [
     {
          title: "Appointments",
          icon: "av-timer"
     },
     {
          title: "Trips",
          icon: "flight-takeoff"
     }
]

export default (StudentListScreen = () => {
     return (
          <ScrollView style={styles.container}>
               <ListView data={data} />
          </ScrollView>
     )
})

StudentListScreen.navigationOptions = {
     title: "รถรับส่งนักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
