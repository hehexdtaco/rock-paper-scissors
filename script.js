function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    let randomSelection = Math.floor(Math.random() * 30) + 1

    if (randomSelection <= 10) {
        return choices[0]
    } else if (randomSelection <= 20) {
        return choices[1]
    } else {
        return choices[2]
    }
}

let computerChoice = computerPlay();
let playerChoice = prompt("Please select between Rock, Paper, and Scissors")

let playerSelection = function playerCaseSensitive(playerChoice) {
return playerChoice[0].toUpperCase() + playerChoice.substring(1)
}

function playRound(playerSelection, computerChoice){
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    let tie = "Both sides have the same choice, no points awarded"
    let playerWins = "The player has selected" + playerSelection + "which beats" + computerChoice;
    let playerLoses = "The player has selected" + playerSelection + "which loses to" + computerChoice;

    if ((playerSelection == "Rock" && computerChoice == "Scissors") ||
        (playerSelection == "Paper" && computerChoice== "Rock") ||
        (playerSelection == "Scissors" && computerChoice == "Paper")) {

            playerScore++
        }

    else if ((computerChoice== "Rock" && playerSelection== "Scissors") ||
             (computerChoice== "Paper" && playerSelection== "Rock") ||
             (computerChoice == "Scissors" && playerSelection == "Paper")) {

            computerScore++
        }
    else if (playerChoice == computerChoice) {
            return tie
    }
}



console.log(playerCaseSensitive(playerChoice))
