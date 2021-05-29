// HTML element selectors
var hamburgerButton = document.getElementById("hamburger-button");
var navigation = document.getElementById("navigation");

// a simple state handler
var navOpen = false;

// open menu handler
hamburgerButton.onclick = function () {
  if (navOpen == false) {
    // set our "navOpen" state to true (true = open)
    navOpen = true;
    navigation.style.display = "flex";
    document.body.classList.add("stop-scrolling");

  } else {
    // set our "navOpen" state to false (false = closed)
    navOpen = false;
    navigation.style.display = "none";
    document.body.classList.remove("stop-scrolling");

  }
};

// every time the window resizes execute this code
window.onresize = function (event) {
  // defien viewport variable
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // if the screen is bigger than 1024px make the navigation visible
  if (viewportWidth > 950) {
    navOpen = true;
    navigation.style.display = "flex";
  }

  // if the screen is smaller than 1024px hide the navigation
  else {
    navOpen = false;
    navigation.style.display = "none";
  }
}
  
//Mobile VH fix
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);