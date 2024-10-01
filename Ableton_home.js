window.onscroll = function () {
  hideStickyNavbar();
};

var stickyNav = document.getElementById("stickyNav");
var mobileNav = document.getElementById("mobileNav");
var hideAfterScroll = 200; // Pixels after which the sticky navbar will hide
var mobileBreakpoint = 1150; // The width where mobile view switches

function hideStickyNavbar() {
  if (window.scrollY > hideAfterScroll) {
    stickyNav.classList.add("hidden");
  } else {
    stickyNav.classList.remove("hidden");
  }
}

function toggleMobileMenu() {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}

// Automatically hide mobile navbar when the window is resized above the mobile breakpoint
window.onresize = function () {
  if (window.innerWidth > mobileBreakpoint) {
    mobileNav.style.display = "none"; // Hide the mobile navbar on large screens
  }
};
