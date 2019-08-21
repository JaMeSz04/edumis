import { observable, action } from "mobx"

class CalendarStore {
     @observable calendar = {}

     @action fetchCalendar = () => {
          //call your API here
          this.calendar = mockCalendar //and assign to this variable
     }
}

const store = new CalendarStore()

export default store

const mockCalendar = {
     "2012-05-16": [
          {
               title: "วันลูกแมวโลก :3 ",
               time: "18:00-19:00",
               place: "Interim Harsal II"
          }
     ],
     "2012-05-23": [
          {
               title: "วันลูกแมวโลก :3 ",
               time: "18:00-19:00",
               place: "Interim Harsal II"
          }
     ],
     "2012-05-25": [
          {
               title: "วันลูกแมวโลก :3 ",
               time: "18:00-19:00",
               place: "Interim Harsal II"
          },
          {
               title: "any js object",
               time: "18:00-19:00",
               place: "Interim Harsal II"
          }
     ]
}
