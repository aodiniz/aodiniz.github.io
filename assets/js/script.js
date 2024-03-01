'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * SKIL ICON ANIMATION
 */

const svgIconHighlight = function(s) {
  var svgCircleFrame = s.contentDocument.getElementsByClassName("circle-frame")[0];
  var svgCircleStyle = svgCircleFrame.getAttribute("style");
  svgCircleFrame.setAttribute("style",
    svgCircleStyle
    .replace(/fill:[^;]+/, "fill:#969696")
    .replace(/stroke-dasharray:[^;]+/, "stroke-dasharray:none")
  );
}

const svgIconGrayout = function(s) {
  var svgCircleFrame = s.contentDocument.getElementsByClassName("circle-frame")[0];
  var svgCircleStyle = svgCircleFrame.getAttribute("style");
  svgCircleFrame.setAttribute("style",
    svgCircleStyle
    .replace(/fill:[^;]+/, "fill:#cccccc")
    .replace(/stroke-dasharray:[^;]+/, "stroke-dasharray:1.06, 0.53, 0.265, 0.53")
  );
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", function() {
  reveal();

  var svgObjects = document.getElementsByClassName("skill-icon");
  for (let i = 0; i < svgObjects.length; i++) {
    svgObjects[i].setAttribute("onmouseenter", "svgIconHighlight(this)")
    svgObjects[i].setAttribute("onmouseout", "svgIconGrayout(this)")
  }
});