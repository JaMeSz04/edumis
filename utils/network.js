import axios from "axios"

BASE_URL = "" //your API base URL(for production)
DEV_URL = "http://43.229.77.202/" //your API dev URL(for dev)

const endpoint = {
     login: "rest-login",
     attendanceList: "EduMIS/index.php/rest-student-list"
}

const config = {
     //add your header here, ex. authentication token
}

const Api = {
     login: loginForm => axios.post(endpoint.login, loginForm),
     getAttendanceList: hrId =>
          axios.get(DEV_URL + endpoint.attendanceList + "?hr_id=345")

     //add more API here
}

export default Api
