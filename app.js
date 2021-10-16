var typed = new Typed(".type", {
  strings: [
    "19 years old",
    "19 years old",
    "junior front-end developer",
    "UI designer"
    ],
  smartBackspace: true ,// Default value
  typeSpeed: 50,
  backSpeed:50,
  startDelay: 200,
  backDelay: 200,
  loop: true
});

    // changing the bg of the nav on scrolling

const nav = document.querySelector('.nav-bar');
const txt = document.querySelector('.about_text');
window.onscroll = function () {
  const top = window.scrollY;

  if (top >= 380) {
    nav.classList.add('nav-active');
    txt.classList.add('nav-acive');
  } else {
    nav.classList.remove('nav-active');
    txt.classList.remove('nav-acive');
    navLinks.classList.remove('nav-open');
  }
}
    // close the menu on click
function closemenu  () {
  document.querySelector('#navbtn').click();
  console.log("navbtn is clicked !");
}

new WOW().init();


// the hamb menu

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click',function () {
navLinks.classList.toggle('nav-open');
});
function declancheur() {
  document.getElementById('link1').click();

}
