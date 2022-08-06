// Time for the game
var timeLeft = 61;
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
}
startGame()
//function to randomly select laws or headlines from DB to display to user, include timer

// function getRandomFact() {

// }


// function to check user choice against boolean (label column). include if statement saying, if user choice equals label then add point to ResultsPage table. 

