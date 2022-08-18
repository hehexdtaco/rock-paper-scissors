function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    let randomSelection = Math.floor(Math.random() * 100) + 1

    if (randomSelection <= 33) {
        return choices[0]
    } else if (randomSelection <= 66) {
        return choices[1]
    } else {
        return choices[2]
    }
}

let computerChoice = computerPlay();

let playerChoice = prompt("Please select between Rock, Paper, and Scissors")

console.log(computerChoice)
