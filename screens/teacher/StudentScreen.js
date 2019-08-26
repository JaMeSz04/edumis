import React, { Component } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import StudentListView from "../../components/StudentListView"
import { inject, observer } from "mobx-react"
import CheckAll from "../../components/CheckAll"

@inject("teacherStore")
@observer
export default class StudentScreen extends Component {
     static navigationOptions = ({ navigation }) => {
          return {
               title: "รายชื่อนักเรียน " + date,
               headerRight: (
                    <CheckAll
                         action={navigation.getParam("checkAll")}
                         update={navigation.getParam("update")}
                    />
               )
          }
     }
     constructor(props) {
          super(props)
     }
     componentDidMount() {
          const { fetchAttendance, updateAllStudents } = this.props.teacherStore
          this.props.navigation.setParams({
               checkAll: updateAllStudents,
               update: () => this.forceUpdate()
          })
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
                         choices={["ขาด", "มา", "สาย", "ป่วย"]}
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
