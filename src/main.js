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

//set timeout to simulate rolling effect
  setTimeout(() => {
    dice1.classList.remove("shake");
    dice2.classList.remove("shake");

//generate random numbers for dice
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

//update dice images based on random numbers
    dice1.setAttribute("src", `images/dice${random1}.png`);
    dice2.setAttribute("src", `images/dice${random2}.png`);

//determine winner and update scores
    if (random1 > random2) {
      score1++;
      result.textContent = "🚩 Player 1 Wins this round!";
    } else if (random2 > random1) {
      score2++;
      result.textContent = "Player 2 Wins this round! 🚩";
    } else {
      result.textContent = "It's a Draw 🤝";
    }

//update score display
    document.getElementById("score1").textContent = `Score: ${score1}`;
    document.getElementById("score2").textContent = `Score: ${score2}`;

//re-enable roll button
      rollBtn.disabled = false;
  }, 1000);
}