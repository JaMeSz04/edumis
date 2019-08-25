import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { inject, observer } from "mobx-react"

@inject("teacherStore")
@observer
export default class DriverScreen extends React.Component {
     componentDidMount() {
          const { fetchDriver } = this.props.teacherStore
          fetchDriver()
     }
     render() {
          const { driverList, updateDriverStatus } = this.props.teacherStore
          return (
               <ScrollView style={styles.container}>
                    <StudentListView
                         data={driverList}
                         title={"แจ้ง"}
                         choices={["รับ", "ส่ง"]}
                         controlled
                         onChange={(key, value) => {
                              updateDriverStatus(key, value)
                              this.forceUpdate()
                         }}
                    />
               </ScrollView>
          )
     }
}

const currentDate = () => {
     let today = new Date()
     let dd = today.getDate()
     let mm = today.getMonth() + 1 //January is 0!
     let yyyy = today.getFullYear() + 543

     if (dd < 10) {
          dd = "0" + dd
     }

     if (mm < 10) {
          mm = "0" + mm
     }

     today = mm + "/" + dd + "/" + yyyy
     return today
}

const date = currentDate()

DriverScreen.navigationOptions = {
     title: "รถรับส่งนักเรียน " + date
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
