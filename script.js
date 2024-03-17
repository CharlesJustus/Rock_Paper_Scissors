// pscdoe code : 
// 1: The goal is to create the game RPS. 
// 2: Create a function that creates a random number between 1 and 3 to get 1,2 or 3.
// 3: Make that function associate each of those numbers with a choice in the game, R, P or S.
// 4: Create a function with a parameter for the user input and one for the computers. 
// 5: Compare the user input with the computer's awnser and declare a win lose or tie for that round.
// 6: make a new function that has the old game one in it 5 times to play a match and declare a winner. 
// 6: Declare the winner.
let computerChoice;
let userScore = 0;
let computerScore = 0;
let matchResult;
let userChoice = prompt('Rock, Paper, Scissors, SHOOT! :');
function getComputerChoice() {
    let min = Math.ceil(1);
    let max = Math.floor(3);
    let result = Math.floor(Math.random() * 3) + 1;
    if (result == 1) {
        return (computerChoice = 'rock');
    }
    else if (result == 2) {
        return (computerChoice = "paper");
    }
    else {
        return (computerChoice = "scissors");
    }
}
function game(userChoice) {
    userChoice = userChoice.toLowerCase();
    getComputerChoice();

    if (userChoice == "rock" && computerChoice == "rock") {
        matchResult = "Rock Ties Rock!";
    }
    else if (userChoice == 'rock' && computerChoice == 'paper') {
        matchResult = 'Paper beats rock, computer wins!';
        computerScore++;
    }
    else if (userChoice == 'rock' && computerChoice == 'scissors') {
        matchResult = 'Rock beats scissors, user wins!';
        userScore++;
    }


    else if (userChoice == "paper" && computerChoice == "rock") {
        matchResult = "Paper beats rock, user wins!";
        userScore++;
    }
    else if (userChoice == 'paper' && computerChoice == 'paper') {
        matchResult = 'Paper Ties Paper!';
    }
    else if (userChoice == 'paper' && computerChoice == 'scissors') {
        matchResult = 'scissors beat paper, Computer wins!'; 
        computerScore++;
    }


    else if (userChoice == "scissors" && computerChoice == "rock") {
        matchResult = "rock beats scissors, Computer wins!";
        computerScore++;
    }
    else if (userChoice == 'scissors' && computerChoice == 'paper') {
        matchResult = 'scissors beat paper, User wins!';
        userScore++;
    }
    else if (userChoice == 'scissors' && computerChoice == 'scissors') {
        matchResult = 'Scissors tie Scissors!';
    }

    console.log(matchResult);
    console.log(userScore);
    console.log(computerScore);
}
game('rock');
game('paper');
game('scissors');