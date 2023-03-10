// nav bar

let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")


menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header .navbar a")


window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")

    section.forEach(sec =>{
      
      let top = window.scrollY
      let height = sec.offsetHeight
      let offset = sec.offsetTop - 150
      let id = sec.getAttribute("id")

      if(top => offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove("active")
          document.querySelector("header .navbar a[href*="+id+"]").classList.add("active")
        })
      }

    })
}



// search

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active")
}

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active")
}



// swiper

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
})


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})




// loader

function loader(){
  document.querySelector(".loader-container").classList.add("fade-out")
}

function fadeOut(){
  setInterval(loader, 3000)
}

window.onload = fadeOut



// dark mode

// let darkMode = document.querySelector("#dark-mode")
// let html = document.querySelector("html")

// darkMode.onclick = () => {
//     html.classList.toggle("dark-mode")
//     if (icon.classList.contains('fa-moon')) {
//         icon.classList.replace('fa-moon', 'fa-sun')
    
//       } else {
//         icon.classList.replace('fa-sun', 'fa-moon')
//       }
// }



const toggle = document.querySelector('#dark-mode');
const icon = document.querySelector('#icon');
const body = document.querySelector('body');
const loading = document.querySelector('#loading')

function setMode() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
    loading.setAttribute("src", "assets/pics/loading-dark.gif")

  } else {
    body.classList.remove('dark-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (icon.classList.contains('fa-moon')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    loading.setAttribute("src", "assets/pics/loading-dark.gif")

  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    loading.setAttribute("src", "assets/pics/loading.gif")
  }
});

window.addEventListener('load', setMode);
window.addEventListener('resize', setMode);
window.addEventListener('online', setMode);
window.addEventListener('offline', setMode);