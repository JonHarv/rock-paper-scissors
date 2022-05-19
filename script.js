console.log("LET'S PLAY ROCK PAPER SCISSORS");
let rounds = parseInt(prompt("How many rounds do you want to play?"));


// function to randomly select computer's choice
function computerPlay() {
    let choiceNumber = Math.floor(Math.random()*3); //random number 0,1 or 2
    let computerSelection;
    switch (choiceNumber) { //assign 0, 1, 2 to rock, paper or scissors
        case 0:
            computerSelection = "rock";
        break;
        case 1:
            computerSelection = "paper";
        break;
        case 2:
            computerSelection = "scissors";
        break;
    } 
    return computerSelection;
}


// This function will play 1 round of rock paper scissors
function playRound (playerSelection, computerSelection) {
    let roundSummary;           // The text summary
    let playerScore = 0;        //Keep track of who won
    let computerScore = 0;
    if (playerSelection == computerSelection) {
        roundSummary = "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            roundSummary = "You lose! Paper covers Rock!";
           computerScore = 1; 
        } else if (computerSelection == "scissors") {
            roundSummary = "You win! Rock beats Scissors!";
            playerScore = 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            roundSummary = "You lose! Scissors cut Paper!"; 
            computerScore = 1;
         } else if (computerSelection == "rock") {
            roundSummary = "You win! Paper covers Rock!";
             playerScore = 1;
         }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            roundSummary = "You lose! Rock beats Scissors!"; 
            computerScore = 1;
         } else if (computerSelection == "paper") {
            roundSummary = "You win! Scissors cut Paper!";
             playerScore = 1;
         }
    }
    return [roundSummary, playerScore, computerScore]; //export as array
}
    
//A function to get computer and player selections easily
function selections() {
    computerSelection = computerPlay(); //use the function already written
    let playerSelection = prompt("Please type rock, paper or scissors below.").toLowerCase();
    // (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")  //check to make sure it's a real choice  
    return [playerSelection, computerSelection];  
}

function game(rounds) {
    let playerGameScore = 0;
    let computerGameScore = 0;
    let gameResult;
    for (let i = 0; i < rounds; i++) {
        let playerSelection = selections()[0];
        let computerSelection = selections()[0];
        roundResults = playRound(playerSelection, computerSelection);
        console.log(roundResults[0]);
        playerGameScore = playerGameScore + roundResults[1];
        computerGameScore = computerGameScore + roundResults[2]; 
    }
    if (playerGameScore == computerGameScore) {
        gameResult = `It's a tie! The final score was ${playerGameScore} to ${computerGameScore}`;
    } else if (playerGameScore > computerGameScore) {
        gameResult = `You win! The final score was ${playerGameScore} to ${computerGameScore}`;
    } else if (playerGameScore < computerGameScore) {
        gameResult = `You lose! The final score was ${computerGameScore} to ${playerGameScore}`;
    }
    return gameResult
}

let gameResult = game(rounds);

console.log(gameResult);