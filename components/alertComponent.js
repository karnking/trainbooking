const alertC = document.createElement("div")
alertC.classList = "alert"
export const showAlert = (text,time=2500) =>{
    alertC.style.display = "block"
    document.querySelector("#root").append(alertC)
    alertC.innerHTML = text
    setTimeout(()=>{
        alertC.style.display = "none"
    },time)
}