let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

let toggleDarkMode = document.querySelector("#toggle-dark-mode")
let body = document.querySelector("body")
let header = document.querySelector("header")

toggleDarkMode.onclick = () => {
    body.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode")
}

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active")
}

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active")
}