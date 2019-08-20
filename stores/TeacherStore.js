import { observable, action } from "mobx"

class TeacherStore {
     @observable attendanceStudentList = mockStudentList
     @observable teacherAgenda = mockTeacherAgenda
     @observable driverList = mockDriver
     @observable courseData = mockStudentCourseData
     constructor() {}

     @action fetchAgenda = () => {
          //call your api here
          //teacherAgenda = your data
     }

     @action fetchDriver = () => {
          //call your api here
          //driverList = your data
     }

     @action fetchStudentCourse = () => {
          //call your api here
          //courseData = your data
     }

     @action updateAttendance = (key, value) => {
          //call API here
          this.attendanceApiAdapter(value) //change to data from api
          const temp = this.attendanceStudentList
          temp[key].absent = value == "ขาด" ? true : false
          this.attendanceStudentList = temp
     }
     @action updateDriverStatus = (key, value) => {
          //Call API here
          this.driverApiAdapter(value) //change to data from api
          const temp = this.driverList
          temp[key].absent = value == "รับ" ? true : false
          this.driverList = temp
     }

     attendanceApiAdapter = apiData => {
          //implement adapter here
     }

     driverApiAdapter = apiData => {
          //implement adapter here
     }
}

const Store = new TeacherStore()
export default Store

const mockStudentList = [
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: undefined
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "เลขที่ 1",
          absent: false
     }
]

const mockTeacherAgenda = {
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

const mockDriver = [
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          statusMessage: "ส่งเวลา 15:00",
          absent: undefined
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          absent: true
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          statusMessage: "ส่งเวลา 15:00",
          absent: false
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5",
          statusMessage: "ส่งเวลา 15:00",
          absent: false
     }
]

const mockStudentCourseData = [
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     },
     {
          title: "Amy Farha",
          avatar:
               "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "ป 2/5 เลขที่ 22"
     }
]
