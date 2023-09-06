export const otpInputs = document.createElement("div")
for(let i=0; i<4; i++){
    let otpField = document.createElement("input")
    otpField.classList = "otpField"
    otpField.maxLength = 1
    otpField.type = "number"
    otpInputs.append(otpField)
}