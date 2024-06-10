

const playerScore  = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock","paper","scissors"];
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const result = document.getElementById("result");


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
