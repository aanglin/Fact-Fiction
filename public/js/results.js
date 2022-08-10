// const getScore = require('./index.js');

var playAgainEl = document.getElementById("play-again");
// var finalScoreEl = document.getElementById("final-score");

function playAgain() {
  window.location.replace('/gamePage')
}

var h2El = document.createElement("h2");

var finalScoreDiv = document.body.children[1].children[0].children[0].children[0];


console.log(finalScoreDiv);

// finalScoreEl.textContent = score;

playAgainEl.addEventListener("click", playAgain);

function playerScore() {
  var resultsApi = '/api/results';
  fetch(resultsApi)
    .then(function (response) {
      // console.log('response.json:', response.json());
      return response.json();
    })
    .then(function (data) {
      console.log('data:', data);
      finalScoreDiv.appendChild(h2El);
      h2El.textContent = data[data.length-1].score;
      h2El.setAttribute("class", "results-page__score")
      console.log(data[data.length-1].score)
    })
}

playerScore();