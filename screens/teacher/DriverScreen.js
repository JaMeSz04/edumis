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
DriverScreen.navigationOptions = {
     title: "รถรับส่งนักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff"
     }
})
