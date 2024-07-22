// Elements for displaying scores and choices
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const playerChoiceImg = document.getElementById("player-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");
const resetButton = document.getElementById("reset-button");

// Variables to keep track of the scores
let playerScoreCount = 0;
let computerScoreCount = 0;



const playableElements = {
  "rock": rock,
  "paper": paper,
  "scissors": scissors,
}

// Event listeners for player choices and reset button
for (const [key, element] of Object.entries(playableElements)) {
    element.addEventListener("click", () => game(key));
}
resetButton.addEventListener("click", resetGame);

/**
 * Main game function that handles the player's choice,
 * generates the computer's choice, and updates the game state.
 * @param {string} playerChoice - The choice made by the player.
 */
function game(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const winner = determineWinner(playerChoice, computerChoice);
  updateScores(winner);
  displayResult(winner, playerChoice, computerChoice);
}

/**
 * Determines the winner based on the choices made by the player and the computer.
 * @param {string} player - The player's choice.
 * @param {string} computer - The computer's choice.
 * @returns {string} - The result of the game ('player', 'computer', or 'draw').
 */
function determineWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

/**
 * Updates the scores based on the result of the game.
 * @param {string} winner - The result of the game ('player', 'computer', or 'draw').
 */
function updateScores(winner) {
  if (winner === "player") {
    playerScoreCount++;
  } else if (winner === "computer") {
    computerScoreCount++;
  }
  playerScore.textContent = `Player: ${playerScoreCount}`;
  computerScore.textContent = `Computer: ${computerScoreCount}`;
}

/**
 * Displays the result of the game and updates the images
 * based on the choices made by the player and the computer.
 * @param {string} winner - The result of the game ('player', 'computer', or 'draw').
 * @param {string} playerChoice - The player's choice.
 * @param {string} computerChoice - The computer's choice.
 */
function displayResult(winner, playerChoice, computerChoice) {
  if (winner === "draw") {
    result.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (winner === "player") {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
  playerChoiceImg.src = `assets/images/${playerChoice}.png`;
  computerChoiceImg.src = `assets/images/${computerChoice}.png`;
}

/**
 * Resets the game state to the initial values.
 */
function resetGame() {
  playerScoreCount = 0;
  computerScoreCount = 0;
  playerScore.textContent = "Player: 0";
  computerScore.textContent = "Computer: 0";
  result.textContent = "";
  playerChoiceImg.src = "assets/images/rock.png";
  computerChoiceImg.src = "assets/images/rock.png";
}

// Initial game reset to set up the initial state
resetGame();
