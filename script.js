console.log("LET'S PLAY ROCK PAPER SCISSORS");

let playerSelection = prompt("Please type rock, paper or scissors below.").toLowerCase();

if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    console.log("Please try again, your entry was not a valid choice.")
}

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

function playRound (playerSelection, computerSelection) {
    let roundResult;
    if (playerSelection == computerSelection) {
        roundResult = "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
           roundResult = "You lose! Paper covers Rock!"; 
        } else if (computerSelection == "scissors") {
            roundResult = "You win! Rock beats Scissors!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            roundResult = "You lose! Scissors cut Paper!"; 
         } else if (computerSelection == "rock") {
             roundResult = "You win! Paper covers Rock!";
         }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            roundResult = "You lose! Rock beats Scissors!"; 
         } else if (computerSelection == "paper") {
             roundResult = "You win! Scissors cut Paper!";
         }
    }
    return roundResult;
}
    
computerSelection = computerPlay();
roundResult = playRound(playerSelection, computerSelection);

console.log("Player Choice:", playerSelection, "   Computer Choice:", computerSelection, "\n", roundResult);