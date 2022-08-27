function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    let randomSelection = (Math.floor(Math.random() * 3))
    return choices[randomSelection]
}

const rockSelection = document.querySelector('.Rock')
const paperSelection = document.querySelector('.Paper')
const scissorsSelection = document.querySelector('.Scissors')
const outcomeHtml = document.querySelector('.outcome')
const playerScoreUpdate = document.querySelector('.player-score')
const computerScoreUpdate = document.querySelector('.computer-score')

let computerScore = 0;
let playerScore = 0;

// function game () {
//     let rounds = 0;
//     let playerScore = 0;
//     let computerScore= 0;
    
// }

// function playerCaseSensitive(playerChoice) {
// return playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase()
// }

function playRound(playerSelection, computerChoice){
    let tie = "Both sides have the same choice, no points awarded"
    let playerWins = "The player has selected " + playerSelection + " which beats " + computerChoice;
    let playerLoses = "The player has selected " + playerSelection + " which loses to " + computerChoice;


     if (playerSelection == computerChoice) {
        // const p = document.createElement('p');
        // p.innerText = tie
        // outcomeHtml.appendChild(p)
        outcomeHtml.innerText = tie
        playerScore++
        console.log(playerScore)
        }

    else if ((playerSelection == "Rock" && computerChoice == "Scissors") ||
        (playerSelection == "Paper" && computerChoice== "Rock") ||
        (playerSelection == "Scissors" && computerChoice == "Paper")) {
            
        //    const p = document.createElement('p');
        //    p.innerText = playerWins
        //    outcomeHtml.append(p)
           outcomeHtml.innerText = playerWins
           computerScore++
           console.log(computerScore)
        }

    else if ((computerChoice== "Rock" && playerSelection== "Scissors") ||
             (computerChoice== "Paper" && playerSelection== "Rock") ||
             (computerChoice == "Scissors" && playerSelection == "Paper")) {
         
            // const p = document.createElement('p');
            // p.innerText = playerLoses
            // // outcomeHtml.append(p)
            outcomeHtml.innerText = playerLoses
        }
    
}


const gameWinner = (playerScore, computerScore) => {
    if (playerScore == 5) {
        const h1 = document.createElement('h1');
        h1.innerText = `Player wins`
        outcomeHtml.append(h1)
    } else if (computerScore == 5) {
        const h1 = document.createElement('h1');
        h1.innerText = `Computer wins!`
        outcomeHtml.append(h1)
    }
}

const liveScore = (playerScore, computerScore) => {
   playerScoreUpdate.innerHTML = `Player score: ${playerScore}`
   computerScoreUpdate.innerHTML = `Computer score ${computerScore}`
}

rockSelection.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const playerSelection = "Rock"
    playRound(playerSelection, computerChoice)
    gameWinner(playerScore,computerScore)
    liveScore(playerScore,computerScore)
})

paperSelection.addEventListener('click',() => {
    const computerChoice = computerPlay();
    const playerSelection = 'Paper'
    playRound(playerSelection, computerChoice)
    gameWinner(playerScore,computerScore)
    liveScore(playerScore,computerScore)
})

scissorsSelection.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const playerSelection = 'Scissors';
    playRound(playerSelection,computerChoice)
    gameWinner(playerScore,computerScore)
    liveScore(playerScore,computerScore)
})

