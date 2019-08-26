// Sections
const home = document.querySelector('.hero');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const contact = document.querySelector('.contact');

// Nav Btns

const navHome = document.getElementById('navHome');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navContact = document.getElementById('navContact');


var yOffset; // pageYOffset value

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
}

window.addEventListener('scroll', setActiveLink);


// Nav Btns click actions
