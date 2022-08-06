const router = require('express').Router();
// Time for the game
var timeLeft = 61;
var title;
var label;
// Time element on HTML page
// var timerEl = document.getElementById("timer");
var timerId;

//function to start game
function startGame() {
    timerId = setInterval(function () {
      timeLeft--;
      // timerEl.textContent = timeLeft;
      if(timeLeft === 0){
        clearTimeout(timerId);
      }
      console.log(timeLeft);
    }, 1000);
    getRandomFact();
}

//tie to event listener - button click
startGame()

//function to randomly select laws or headlines from DB to display to user, include timer

function getRandomFact() {
  // Creating a variable for the web address
  var randomFactApi = `http://localhost:3001/randomFacts`
  // Making a fetch request to grab the data from the web address
  fetch(randomFactApi)
    .then (function(response){
      return response.json();
    }).then(function (cat){
      // Defining data 
      title = cat[1].title

      console.log(title)
    })

}

// function to check user choice against boolean (label column). include if statement saying, if user choice equals label then add point to ResultsPage table. 

