//initialize player scores
let score1 = 0;
let score2 = 0;

//add DOM elements
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

//add event listener to roll button
rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);

//function to roll dice
function rollDice() {

  // Disable button briefly
  rollBtn.disabled = true;
  result.textContent = "Rolling... 🎲";

//add animation to dice images
  const dice1 = document.querySelectorAll("img")[0];
  const dice2 = document.querySelectorAll("img")[1];
  dice1.classList.add("shake");
  dice2.classList.add("shake");  