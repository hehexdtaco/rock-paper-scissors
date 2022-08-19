function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    let randomSelection = (Math.floor(Math.random() * 2))
    return choices[randomSelection]
}



let computerChoice = computerPlay();
let playerChoice = prompt("Please select between Rock, Paper, and Scissors")

function playerCaseSensitive(playerChoice) {
return playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase()
}

function playRound(playerSelection, computerChoice){
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    let tie = "Both sides have the same choice, no points awarded"
    let playerWins = "The player has selected " + playerSelection + " which beats " + computerChoice;
    let playerLoses = "The player has selected " + playerSelection + " which loses to " + computerChoice;

    if ((playerSelection == "Rock" && computerChoice == "Scissors") ||
        (playerSelection == "Paper" && computerChoice== "Rock") ||
        (playerSelection == "Scissors" && computerChoice == "Paper")) {
            console.log(playerWins)
            playerScore++
        }

    else if ((computerChoice== "Rock" && playerSelection== "Scissors") ||
             (computerChoice== "Paper" && playerSelection== "Rock") ||
             (computerChoice == "Scissors" && playerSelection == "Paper")) {
            console.log(playerLoses)
            computerScore++
        }
    else if (playerChoice == computerChoice) {
            console.log(tie)
    }
}

console.log(playRound(playerCaseSensitive(playerChoice),computerChoice))



















