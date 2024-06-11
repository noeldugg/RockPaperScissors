

const playerScore  = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock","paper","scissors"];
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const result = document.getElementById("result");
const resultImage = document.getElementById("result-image")
const playerChoiceImg = document.getElementById("player-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");


let playerScoreCount = 0;
let computerScoreCount = 0;

rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click",() => game("scissors"));

 
function game(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = determineWinner(playerChoice, computerChoice);
    updateScores(winner);
    displayResult(winner, playerChoice, computerChoice);
}


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

function updateScores(winner) {
    if (winner === "player") {
        playerScoreCount++;
    } else if (winner === "computer") {
        computerScoreCount++;
    }
    playerScore.textContent = `Player: ${playerScoreCount}`;
    computerScore.textContent = `Computer: ${computerScoreCount}`;
}

function displayResult(winner, playerChoice, computerChoice) {
    if (winner === "draw") {
        result.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (winner === "player") {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
    playerChoiceImg.src = `images/${playerChoice}.png`;
    computerChoiceImg.src = `images/${computerChoice}.png`;


}