// Time for the game
var timeLeft = 60;
var title;
var label;
var i;
var score = 0;
var userName = "Larry";
var div = document.body.children[1].children[1].children[0].children[0];
var h1El = document.createElement("h1");
// console.log(div);

// Time element on HTML page
var timerEl = document.getElementById("timer");
var timerId;

var startEl = document.getElementById("playGame");
var endEl = document.getElementById("endGame");
var trueEl = document.getElementById("true-btn");
var falseEl = document.getElementById("false-btn");

startEl.addEventListener("click", startGame);
endEl.addEventListener("click", endGame);
trueEl.addEventListener("click", trueBtn);
falseEl.addEventListener("click", falseBtn);

//function to start game
//tie to event listener - button click
// startGame();
function startGame() {
  timerId = setInterval(function () {
    timeLeft--;
    // timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearTimeout(timerId);
    }
    timerEl.textContent = timeLeft;
  }, 1000);
  getRandomFact();
}

//function to randomly select laws or headlines from DB to display to user, include timer

function getRandomFact() {
  startEl.setAttribute("style", "display:none");
  endEl.setAttribute("style", "visibility:visible");
  trueEl.setAttribute("style", "visibility:visible");
  falseEl.setAttribute("style", "visibility:visible");

  // Creating a variable for the web address
  var randomFactApi = `/api/randomFacts`;
  // Making a fetch request to grab the data from the web address
  fetch(randomFactApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      // console.log(i.title, i.label);
      // This is to get random fact
      var i = data[Math.floor(Math.random() * data.length)];
      console.log(i.title, i.label);
      // displayRandomFactEl.textContent = i.title;

      // Adds attributes to h1El then appends to specified div
      h1El.setAttribute("class", "main-text");
      h1El.setAttribute("id", "displayRandomFact");
      div.appendChild(h1El);
      h1El.textContent = i.title;

      // when the random fact is generated
      // it is assigned a Boolean value
      // made by Victor Gutierrez
      if (i.label === true) {
        displayRandomFactEl = Boolean(true);
        // console.log(displayRandomFactEl);
      } else {
        displayRandomFactEl = Boolean(false);
        // console.log(displayRandomFactEl);
      }
    });   
}

// Verifies if the random fact is true or false
//add 50pts if correct
function trueBtn() {
  if(displayRandomFactEl === true){
    score += 50;
    console.log(score);
    console.log("True is the correct answer");
  }else{
    console.log("Incorrect");
  }
  // Removes the appended h1El
  h1El.remove();
  getRandomFact();
}
// Verifies if the tandom fact is false or true 
//add 50pts if correct
function falseBtn() {
  if(displayRandomFactEl === false){
    score += 50;
    console.log(score);
    console.log("False is the correct answer");
  }else{
    console.log("Incorrect");
  }
  // Removes the appended h1El
  h1El.remove();
  getRandomFact();
}

// function to check user choice against boolean (label column). include if statement saying, if user choice equals label then add point to ResultsPage table.

// function for when the game ends. Once the game is over the results are stored in the ResultsPage table.
var finalResults = { userName, score };

function endGame() {
  timerEl.setAttribute("style", "display:none");
  clearTimeout(timerId);
  location.reload();
  // URL to the results table
  var postResults = `/api/results`;
  // POST request for fetch
  var options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(finalResults)
  };
  fetch(postResults, options);
}

console.log(finalResults);