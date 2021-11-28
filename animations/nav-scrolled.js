var myNav = document.getElementById("navbar");
var myNavLinks = document.getElementById("navbar-links");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        myNav.classList.add("scrolled");
        myNavLinks.classList.add("minimize-links");
    } else {
        myNav.classList.remove("scrolled");
        myNavLinks.classList.remove("minimize-links");
    }
};