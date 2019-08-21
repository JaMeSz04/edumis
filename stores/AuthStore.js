import { observable, action } from "mobx"

class AuthStore {
     @observable username = ""
     @observable password = ""
     @observable status = {
          success: false,
          error: false,
          usernameMsg: "",
          passwordMsg: ""
     }
     @observable data = null
     role = null

     @action updateUsername = newValue => (this.username = newValue)

     @action updatePassword = newValue => (this.password = newValue)

     @action login = () => {
          if (this.username === "")
               this.status = {
                    error: true,
                    usernameMsg: "กรุณากรอกชื่อผู้ใช้งาน"
               }
          else if (this.password === "")
               this.status = { error: true, passwordMsg: "กรุณากรอกรหัสผ่าน" }
          else {
               //call your login API here

               this.status = {
                    ...this.status,
                    success: true
               }
               this.data = mockLogin
               role = this.data.status
               console.log("triggered")
               console.log("role: " + role)
          }
     }

     getPath() {
          //choose screen to render from role
          switch (this.role) {
               case "ครู":
                    return "Teacher"
               case "ผู้ปกครอง":
                    return "Parent"
               default:
                    return
          }
     }
}

const store = new AuthStore()

export default store

const mockLogin = {
     log_status: "success",
     name: "นายชัยรัธฐา อ่วมอารีย์",
     status: "ครู",
     department: "โรงเรียนเกษตรสมบูรณ์วิทยาคม",
     localgov: "องค์การบริหารส่วนจังหวัดชัยภูมิ",
     hr_id: "345",
     member_id: "10746",
     sch_id: "2"
}
