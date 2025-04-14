let navbar = document.querySelector(".navbar");
let aboutElement = document.querySelector("#about-ele");
let homeElement = document.querySelector("#active");
let serviceElement = document.querySelector("#serv-link");
let projectElement = document.querySelector("#pro-link");
let techElement = document.querySelector("#tech-link");
let contactElement = document.querySelector("#contact-link");
let vabar2 = document.querySelector("nav");
let heroElement = document.querySelector("#hero-info");





window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 400 && window.scrollY < 1362 ) {
        aboutElement.classList.add("nav_fixed");
        
    } else {
        aboutElement.classList.remove("nav_fixed");
        
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY >= 0 && window.scrollY < 400 ) {
        homeElement.classList.add("nav_fixed");
      


    } else {
        homeElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 1363 && window.scrollY < 2386 ) {
        serviceElement.classList.add("nav_fixed");
        
        
    } else {
        serviceElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 2387 && window.scrollY < 3339) {
        projectElement.classList.add("nav_fixed");
    } else {
        projectElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 3340 && window.scrollY < 4098) {
        techElement.classList.add("nav_fixed");
    } else {
        techElement.classList.remove("nav_fixed");
    }
  });
  window.addEventListener("scroll", function () {
    
  
    if (window.scrollY > 4099 && window.scrollY < 5000) {
        contactElement.classList.add("nav_fixed");
    } else {
        contactElement.classList.remove("nav_fixed");
    }
  });
window.onload = function(){
  var shadowRoot = document.querySelector('#spline1').shadowRoot;
  shadowRoot.querySelector('#logo').remove();
  
}
var typed = new Typed('#animate', {
  strings: ['Im <strong>Ahmed Zaki</strong> <br>Im <strong>Web Developer</strong> <br>Im Student @ <strong>MTI.</strong>'],
  typeSpeed: 90,
});
