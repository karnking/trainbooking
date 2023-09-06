import {showAlert} from "../components/alertComponent.js"
let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || []
let uids = registeredUsers.map((ele)=>ele.uid)
let otps = registeredUsers.map((ele)=>ele.otps)
document.querySelector("[name='jdate']").min = (new Date).toISOString().split("T")[0]
const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {}
    let check
    obj.uid = document.querySelector("[name='uid']").value
    obj.name = document.querySelector("[name='name']").value
    obj.age = document.querySelector("[name='age']").value
    obj.from = document.querySelector("[name='from']").value
    obj.to = document.querySelector("[name='to']").value
    obj.jdate = document.querySelector("[name='jdate']").value
    obj.seat = document.querySelector("[name='seat_pref']").value
    console.log(uids,uids.indexOf(obj.uid))
    if(uids.indexOf(obj.uid)!==-1){
        showAlert("id already registered")
        check = true
    }
    if(obj.name.length<4){
        showAlert("Name should be atleast 4 characters long")
        check = true
    }
    if(obj.to===""){
        showAlert("Select to")
        check = true
    }
    if(obj.from===""){
        showAlert("Select From Station")
        check = true
    }
    if(obj.from===obj.to){
        showAlert("From and to cannot be same")
        check = true
    }
    if(!check){ 
        uids.push(obj.uid)
        let otp = Math.round(1000 + Math.random() * 9000)
        while(otps.indexOf(otp)!=-1){
            otp = Math.round(1000 + Math.random() * 9000)
        }
        obj.otp = otp
        registeredUsers.push(obj)
        localStorage.setItem("registeredUsers",JSON.stringify(registeredUsers))
        showAlert(`Registered successfully Your OTP is ${otp}`)
    }
}
document.querySelector("#root>form").addEventListener("submit",handleSubmit)