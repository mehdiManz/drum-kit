"use strict";  // Enable strict mode for better JavaScript practices

var alltheBtns = document.querySelectorAll(".drum");  // Get all elements with class "drum"

for (var i = 0; i < alltheBtns.length; i++) {  // Loop through all the drum elements
  alltheBtns[i].addEventListener("click", function() {  // Add a click event listener to each drum element
    var buttonInnerHTML = this.innerHTML;  // Get the HTML content of the clicked drum element
    playSound(buttonInnerHTML);  // Call the playSound function with the buttonInnerHTML value
  });
}

function playSound(key) {  // Define the playSound function that takes in a key parameter
  switch (key) {  // Use a switch statement to determine which sound to play based on the key parameter
    case "w":  // If the key parameter is "w", create a new Audio object with the crash.mp3 file and play it
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":  // If the key parameter is "a", create a new Audio object with the kick-bass.mp3 file and play it
      var kickBase = new Audio("sounds/kick-bass.mp3");
      kickBase.play();
      break;
    case "s":  // If the key parameter is "s", create a new Audio object with the snare.mp3 file and play it
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":  // If the key parameter is "r", create a new Audio object with the tom-1.mp3 file and play it
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":  // If the key parameter is "f", create a new Audio object with the tom-2.mp3 file and play it
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":  // If the key parameter is "t", create a new Audio object with the tom-3.mp3 file and play it
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":  // If the key parameter is "g", create a new Audio object with the tom-4.mp3 file and play it
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:  // If the key parameter doesn't match any of the cases above, log an error message to the console
      console.log("Invalid key: " + key);
  }
}
