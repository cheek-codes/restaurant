let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")


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





let darkMode = document.querySelector("#dark-mode")
let html = document.querySelector("html")



darkMode.onclick = () => {
    html.classList.toggle("dark-mode")
    if (icon.classList.contains('fa-moon')) {
        icon.classList.replace('fa-moon', 'fa-sun')
    
      } else {
        icon.classList.replace('fa-sun', 'fa-moon')
      }
}