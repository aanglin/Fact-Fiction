
var playAgainEl = document.getElementById("play-again");


function playAgain() {
  window.location.replace('/gamePage')
}


playAgainEl.addEventListener("click", playAgain);