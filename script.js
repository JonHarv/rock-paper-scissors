console.log("LET'S PLAY ROCK PAPER SCISSORS");

function computerPlay() {
    let choiceNumber = Math.floor(Math.random()*3);
    let computerSelection;
    if (choiceNumber == 0) {
        computerSelection = "rock";
    } else if (choiceNumber == 1) {
        computerSelection = "paper";
    } else if (choiceNumber == 2) {
        computerSelection = "scissors";
    } else computerSelection = "Something went wrong";
    return computerSelection;
}

let playerSelection = prompt("Please type rock, paper or scissors below.").toLowerCase();
console.log(playerSelection);
if (playerSelection != "rock" ^ playerSelection != "paper" ^ playerSelection != "scissors") {
    console.log("Please try again, your entry was not a valid choice.")
} else {}