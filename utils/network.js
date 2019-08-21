import axios from "axios"

BASE_URL = "" //your API base URL(for production)
DEV_URL = "http://43.229.77.202/index.php" //your API dev URL(for dev)

const endpoint = {
     login: "rest-login"
}

const config = {
     //add your header here, ex. authentication token
}

const Api = {
     login: loginForm => axios.post(endpoint.login, loginForm)
     //add more API here
}

export default Api
