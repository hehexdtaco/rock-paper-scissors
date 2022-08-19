function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    let randomSelection = (Math.floor(Math.random() * 2))
    return choices[randomSelection]
}


function game () {
    let rounds = 0;
    let playerScore = 0;
    let computerScore= 0;
    
while (rounds < 5) {
    rounds++;
    computerPlay();
    playerChoice = prompt("Please select between Rock, Paper, and Scissors")
    playRound()
    console.log(playRound(playerCaseSensitive(playerChoice), computerPlay()))

function playerCaseSensitive(playerChoice) {
return playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase()
}

function playRound(playerSelection, computerChoice){
    let tie = "Both sides have the same choice, no points awarded"
    let playerWins = "The player has selected " + playerSelection + " which beats " + computerChoice;
    let playerLoses = "The player has selected " + playerSelection + " which loses to " + computerChoice;

    if ((playerSelection == "Rock" && computerChoice == "Scissors") ||
        (playerSelection == "Paper" && computerChoice== "Rock") ||
        (playerSelection == "Scissors" && computerChoice == "Paper")) {
            
            playerScore++
            return playerWins
        }

    else if ((computerChoice== "Rock" && playerSelection== "Scissors") ||
             (computerChoice== "Paper" && playerSelection== "Rock") ||
             (computerChoice == "Scissors" && playerSelection == "Paper")) {
         
            computerScore++
            return playerLoses
        }
    else if (playerChoice == computerChoice) {
            return tie
    }
}

}


}

game()
