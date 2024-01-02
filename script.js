const hamburger = document.querySelector(".burger");
const menu_items = document.querySelector(".menu-items");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menu_items.classList.toggle("active")
})

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    menu_items.classList.remove("active");
}));