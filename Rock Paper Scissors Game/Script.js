let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");

document.getElementById("rock").onclick = () => playGame("rock");
document.getElementById("paper").onclick = () => playGame("paper");
document.getElementById("scissors").onclick = () => playGame("scissors");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    updateDisplay(result);
}

function updateDisplay(result) {
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    resultText.textContent = result;
}
