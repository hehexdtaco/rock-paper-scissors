function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    let randomSelection = (Math.floor(Math.random() * 2))
    return choices[randomSelection]
}

const rockSelection = document.querySelector('.Rock')

const paperSelection = document.querySelector('.Paper')

const scissorsSelection = document.querySelector('.Scissors')


function game () {
    let rounds = 0;
    let playerScore = 0;
    let computerScore= 0;
    
}

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



if (playerScore > computerScore) {
    console.log("Player wins!!")
} else if (playerScore < computerScore) {
    console.log("Computer wins!!")
} else {
    console.log("No one won!!")
}


rockSelection.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const playerSelection = 'Rock'
    playRound(playerSelection, computerChoice)


})


