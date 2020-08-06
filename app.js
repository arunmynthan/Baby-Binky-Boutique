// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
let navlink = document.querySelectorAll(".nav-link");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("shownav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("shownav");
});

//setup date
let date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

console.log(date);

let btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let main = e.currentTarget.parentElement.parentElement;
    main.classList.toggle("show");
  });
});

let preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

let scrollbutton = document.querySelector(".top-link");
let nav = document.querySelector(".nav-section");

window.addEventListener("scroll", function () {
  let scrollheight = window.pageYOffset;
  let navheight = nav.getBoundingClientRect().height;

  if (scrollheight > navheight) {
    nav.classList.add("fixed-bar");
  } else {
    nav.classList.remove("fixed-bar");
  }

  if (scrollheight > 300) {
    scrollbutton.classList.add("show-link");
  } else {
    scrollbutton.classList.remove("show-link");
  }
});

let scrollproduct = document.querySelector(".arrow-product");

window.addEventListener("scroll", function () {
  let scrollheight = window.pageYOffset;

  if (scrollheight > 200) {
    scrollproduct.classList.add("show-link");
  } else {
    scrollproduct.classList.remove("show-link");
  }
});

let slides = document.querySelectorAll(".slider");
let pbtn = document.querySelector(".prevBtn");
let nbtn = document.querySelector(".nextBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

pbtn.addEventListener("click", function () {
  counter--;
  movingslides();
});

nbtn.addEventListener("click", function () {
  counter++;
  movingslides();
});

function movingslides() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  if (counter < slides.length - 1) {
    nbtn.style.display = "block";
  } else {
    nbtn.style.display = "none";
  }
  if (counter > 0) {
    pbtn.style.display = "block";
  } else {
    pbtn.style.display = "none";
  }
  slides.forEach(function (sliding) {
    sliding.style.transform = `translateX(-${counter * 100}%)`;
  });
}
