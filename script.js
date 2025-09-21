const guessedNumber = document.querySelector("#guessed-number");
const guess = document.querySelector(".submit");
const restartGame = document.querySelector(".restart-game");

const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");

let numberToGuess = Math.floor(Math.random() * 100);
let guessMsg = "Your Guesses:";

let firstGuess = true;

guess.addEventListener("click", (e) => {
  e.preventDefault();
  let numberGuessed = guessedNumber.value;
  guessMsg += (firstGuess ? " " : ", ") + numberGuessed;
  firstGuess = false;
  if (numberToGuess < numberGuessed) {
    result.textContent = "Guess Lower";
  } else if (numberToGuess > numberGuessed) {
    result.textContent = "Guess Higher";
  } else {
    result.textContent = "You guessed it! Congratulations";
    result.classList.add("correct");

    restartGame.disabled = false;
  }
  allGuesses.textContent = guessMsg;
});

restartGame.addEventListener("click", (e) => {
  e.preventDefault();
  guessedNumber.value = null;
  restartGame.disabled = true;
  result.textContent = "";
  result.classList.remove("correct");
  allGuesses.textContent = "";
});
