const router = require('express').Router();
// Time for the game
var timeLeft = 20;
var title;
var label;
var score = 0;
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
  
  var userChoseTrue = true;
  var userChoseFalse = false;
  // This is to get random fact
  var i = data[Math.floor(Math.random()* data.length)]

  // Creating a variable for the web address
  var randomFactApi = `http://localhost:3001/randomFacts`
  // Making a fetch request to grab the data from the web address
  fetch(randomFactApi)
    .then (function(response){
      return response.json();
    }).then(function (data){
      // console.log(data)
      // console.log(i.title, i.label);
      
      // Verify user answer
      if(userChoseTrue === i.label){
        score++;
        console.log(score);
        console.log('Good Job its true!');
      }else if(userChoseFalse === i.label){
        score++;
        console.log(score)
        console.log('Good Job its false!!');
      }else{
        console.log('WROONNNGG!!!!');
        console.log(score);
      }
      // Defining data 
      // title = data[i].title
      // label = data[i].label
      // console.log(title)
    })
    
}

// function to check user choice against boolean (label column). include if statement saying, if user choice equals label then add point to ResultsPage table. 

