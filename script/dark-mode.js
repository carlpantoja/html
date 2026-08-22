const body = document.querySelector("body")
const toggle = document.querySelector(".toggle")

let getMode = localStorage.getItem("mode")

if(getMode && getMode === "dark") {
    body.classList.toggle("dark")
    toggle.classList.toggle("active")
}

const dark_mode = async() => {
    toggle.classList.toggle("active")
    body.classList.toggle("dark")

    if(!body.classList.contains("dark")) return localStorage.setItem("mode", "light")

    localStorage.setItem("mode", "dark")
}

toggle.addEventListener("click", dark_mode)