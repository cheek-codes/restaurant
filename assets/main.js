let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

let darkMode = document.querySelector("#night-mode")
let html = document.querySelector("html")



darkMode.onclick = () => {
    darkMode.classList.toggle("fa-sun")
    html.classList.toggle("night-mode")
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