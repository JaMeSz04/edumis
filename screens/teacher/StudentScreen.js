import React, { Component } from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import StudentListView from "../../components/StudentListView"
import { inject, observer, Observer } from "mobx-react"

@inject("teacherStore")
@observer
export default class StudentScreen extends Component {
     constructor(props) {
          super(props)
     }
     componentDidMount() {
          const { fetchAttendance } = this.props.teacherStore
          fetchAttendance()
     }
     render() {
          const {
               attendanceStudentList,
               updateAttendance
          } = this.props.teacherStore
          return (
               <ScrollView style={styles.container}>
                    <StudentListView
                         data={attendanceStudentList}
                         title={"เช๊คชื่อ"}
                         choices={["ขาด", "มา"]}
                         controlled
                         onChange={(key, value) => {
                              updateAttendance(key, value)
                              this.forceUpdate()
                         }}
                    />
               </ScrollView>
          )
     }
}

StudentScreen.navigationOptions = {
     title: "รายชื่อนักเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: 15,
          backgroundColor: "#fff"
     },
     controlButton: {
          width: 70
     },
     buttonLayer: {
          borderRadius: 15
     }
})
