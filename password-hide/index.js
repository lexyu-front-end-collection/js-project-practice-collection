let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("password")

console.log(eyeicon)

console.log(password)

eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text"
        eyeicon.src = "./images/eye-open.png"
    } else {
        password.type = "password"
        eyeicon.src = "./images/eye-close.png"
    }
}