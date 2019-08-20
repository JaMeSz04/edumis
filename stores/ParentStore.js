import { observable, action, computed } from "mobx"

class ParentStore {
     @observable studentAgenda = []
     @observable studentHomework = []
     @observable studentGrade = []
     @observable studentAttendance = []

     constructor() {}

     @action fetchStudentAgenda = () => {
          //call your api here
          //studentAgenda = your data

          this.studentAgenda = agenda //mockup
     }

     @action fetchHomework = () => {
          //call your api here
          //studentHomework = your data

          this.studentHomework = homework //mockup
     }

     @action fetchStudentGrade = () => {
          //call your api here
          //studentGrade = your data

          this.studentGrade = grade
     }

     @action fetchStudentAttendance = () => {
          //call your api here
          //studentAttendance = your data
          this.studentAttendance = attendance
     }
}

const store = new ParentStore()

export default store

//mockup data area

const agenda = {
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

const homework = [
     {
          title: "14101 - คณิตศาสตร์",
          avatar:
               "https://icon-library.net/images/homework-icon-png/homework-icon-png-25.jpg",
          subtitle: "แบบฝึกหัด หน้า 20-22",
          date: "01 สิงหาคม 2562"
     },
     {
          title: "14102 - วิทยาศาสตร์",
          avatar:
               "https://icon-library.net/images/homework-icon-png/homework-icon-png-25.jpg",
          subtitle: "แบบฝึกหัด หน้า 26-28",
          date: "02 สิงหาคม 2562"
     },
     {
          title: "14103 - ตรรกะศาสตร์",
          avatar:
               "https://icon-library.net/images/homework-icon-png/homework-icon-png-25.jpg",
          subtitle: "แบบฝึกหัด หน้า 14-18",
          date: "03 สิงหาคม 2562"
     }
]

const grade = [
     {
          title: "Science",
          subtitle: "Prof. John Doe",
          score: 4
     },
     {
          title: "Mathematics",
          subtitle: "Prof. John Doe",

          score: 2
     },
     {
          title: "Mathematics",
          subtitle: "Prof. John Doe",

          score: 1
     },
     {
          title: "Mathematics",
          subtitle: "Prof. John Doe",

          score: "R"
     },
     {
          title: "Science",
          subtitle: "Prof. John Doe",
          score: 4
     },
     {
          title: "Science",
          subtitle: "Prof. John Doe",
          score: 4
     },
     {
          title: "Mathematics",
          subtitle: "Prof. John Doe",

          score: 2
     }
]

const attendance = [
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
