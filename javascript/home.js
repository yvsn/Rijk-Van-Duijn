// HTML element selctors
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
  } else {
    // set our "navOpen" state to false (false = closed)
    navOpen = false;
    navigation.style.display = "none";
  }
};

// every time the window resizes execute this code
window.onresize = function (event) {
  // defien viewport variable
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // if the screen is bigger than 1024px make the navigation visible
  if (viewportWidth > 1024) {
    navOpen = true;
    navigation.style.display = "flex";
  }

  // if the screen is smaller than 1024px hide the navigation
  else {
    navOpen = false;
    navigation.style.display = "none";
  }
}
