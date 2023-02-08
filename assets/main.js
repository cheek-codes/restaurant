let menu = document.querySelector("#menu-bars")
let navi = document.querySelector(".navi")

menu.onlcick = () => {
    menu.classList.toggle("fa-times")
    navi.classList.toggle("active")
}