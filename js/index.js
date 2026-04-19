const link = document.querySelector(".dropdown .nav-link");
const card = document.querySelector(".card-hover");
const navbarToggler = document.querySelector(".navbar .navbar-toggler")
const icon = document.querySelector(".navbar .navbar-toggler i");
const dropdown = document.querySelector(".dropdown");
const cardHover2 = document.querySelector(".card-hover-2");

navbarToggler.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.add("fa-xmark", "fa-bars");
  }
});

link.addEventListener("click", () => {
  card.classList.toggle("show");
});


dropdown.addEventListener("click",()=>{
cardHover2.classList.toggle("show");
})