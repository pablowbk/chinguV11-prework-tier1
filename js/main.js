// DOM Elements declaration
  // Sections
const home = document.querySelector('.hero');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const contact = document.querySelector('.contact');
const navUl = document.getElementById('navUl');

  // Parallax containers
const heroParallax = document.getElementById('home');
const servicesParallax = document.querySelector('.services header');
const contactParallax = document.getElementById('contact');

  // Nav Btns
const navHome = document.getElementById('navHome');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navContact = document.getElementById('navContact');
const navToggle = document.querySelector('.navToggle');
const menuLinks = document.querySelectorAll('.nav a')

  // Btns
const submitBtn = document.getElementById('submit');
const toTopBtn = document.querySelector('.toTopBtn');

var yOffset; // pageYOffset value

// functions
function setActiveLink() {
  var yOffset = window.pageYOffset + 80; // 80px is the fixed navbar height
  // console.log(window.pageYOffset);

  // Check if Home is visible and add 'active' class to nav btn
  yOffset < about.offsetTop
  ? navHome.classList.add('active')
  : navHome.classList.remove('active')

  // Check if About is visible and add 'active' class to nav btn
  yOffset >= about.offsetTop && yOffset < services.offsetTop
  ? navAbout.classList.add('active')
  : navAbout.classList.remove('active')

  // Check if Services is visible and add 'active' class to nav btn
  yOffset >= services.offsetTop && yOffset < contact.offsetTop
  ? navServices.classList.add('active')
  : navServices.classList.remove('active')

  // Check if Contact is visible and add 'active' class to nav btn
  yOffset >= contact.offsetTop && yOffset < document.querySelector('footer').offsetTop
  ? navContact.classList.add('active')
  : navContact.classList.remove('active')

  // show toTopBtn once scroll past 1000px
  yOffset >= 700
  ? toTopBtn.classList.add('show')
  : toTopBtn.classList.remove('show')
}

window.addEventListener('scroll', setActiveLink);

// Btns click actions
// -- Show/hide Menu when Hamb is clicked
navToggle.addEventListener('click', () => {
  navUl.classList.toggle('showNavUl');
});

// -- collapse Menu once link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.toggle('showNavUl');
  });
});

// -- Back to top btn
toTopBtn.addEventListener('click', () => {
  window.scroll(0,0);
});


// -- prevent page from reloading when form is submitted
submit.addEventListener('click', (e) => {
  e.preventDefault();
});


// Parallax-O-Matic effects
window.addEventListener('scroll', () => {
  let yScroll = window.pageYOffset;
  heroParallax.style.backgroundPositionY = yScroll * 0.05 + "px";
});
