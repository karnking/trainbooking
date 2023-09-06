import { showAlert } from "../components/alertComponent.js"

let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || []
let booked = JSON.parse(localStorage.getItem("booked")) || []
const capitalise = (text) =>{
    return text[0].toUpperCase()+text.toLowerCase().substr(1)
}
const handleReject = (uid) =>{
    registeredUsers = registeredUsers.filter(ele=>ele.uid!=uid)
    showData()
}
const handleConfirm = (user) =>{
    showAlert(`${user.name} added to waiting list`)
    setTimeout(()=>{
        showAlert(`Booking ticket from ${user.from} to ${user.to}`)
    },5000)
    setTimeout(()=>{
        showAlert(`Ticket booked for ${user.jdate}`)
    },10000)
    setTimeout(()=>{
        booked.push(user)
        localStorage.setItem("booked",JSON.stringify(booked))
        handleReject(user.uid)
    },12000)
}
const showData = () =>{
    document.querySelector("tbody").innerHTML = ""
    registeredUsers.forEach((user)=>{
        const tr = document.createElement("tr")
        for(let x in user){
            const td = document.createElement("td")
            td.textContent = capitalise(user[x])
            tr.append(td)
        }
        const actionTd = document.createElement("td")
        const confirmBtn = document.createElement("button")
        confirmBtn.textContent = "Confirm"
        confirmBtn.addEventListener("click",()=>handleConfirm(user))
        const rejectBtn = document.createElement("button")
        rejectBtn.textContent = "Reject"
        rejectBtn.addEventListener("click",(e)=>handleReject(user.uid))
        actionTd.append(confirmBtn,rejectBtn)
        tr.append(actionTd)
        document.querySelector("tbody").append(tr)
    })
}
showData()