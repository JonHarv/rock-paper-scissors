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

//function to get user selection
function userPlay() {
    let playerSelection = prompt("Please type rock, paper or scissors below.").toLowerCase();
    //Want to verify user input, but not working yet... (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")  //check to make sure it's a real choice  
    return playerSelection;  
}


// This function will play 1 round of rock paper scissors and return the winner, player or computer
function playRound () {
    let playerSelection = userPlay();
    console.log("Player selects:", playerSelection);
    let computerSelection = computerPlay();
    console.log("Computer selects:", computerSelection);
    let roundWinner;           // Output the round winner
    
    if (playerSelection == computerSelection) {
        roundWinner = "It's a tie! Choose again!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            roundWinner = "computer"; 
        } else if (computerSelection == "scissors") {
            roundWinner = "player";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            roundWinner = "computer"
        } else if (computerSelection == "rock") {
            roundWinner = "player";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            roundWinner = "computer"; 
        } else if (computerSelection == "paper") {
            roundWinner = "player";
        }
    }
    return roundWinner;
}
    
//Use the other functions to run a bunch of rounds and keep track of overall score
function game(rounds) {
    let playerGameScore = 0;
    let computerGameScore = 0;
    let gameResult;
    let gameWinner;
    for (let i = 0; i < rounds; i++) {
        winner = playRound();
        if (winner == "player") {
            playerGameScore++;
        } else if (winner == "computer") {
            computerGameScore++;
        } else {
            i--;        //if it's a tie, it doesn't count as a round so the loop will run again
        }
        console.log("Winner:",winner);
    }
    if (playerGameScore > computerGameScore) {
        gameWinner = "You win!";
    } else if (computerGameScore > playerGameScore) {
        gameWinner = "You Lose!";
    }
    
    let score1 = Math.max(playerGameScore, computerGameScore);
    let score2 = Math.min(playerGameScore, computerGameScore);

    gameResult = `${gameWinner} The final score was ${score1} to ${score2}`

    return gameResult
}

let gameResult = game(rounds);

console.log(gameResult);