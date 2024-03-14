// pscdoe code : 
// 1: The goal is to create the game RPS. 
// 2: Create a function that creates a random number between 1 and 3 to get 1,2 or 3.
// 3: Make that function associate each of those numbers with a choice in the game, R, P or S.
// 4: Create a function with a parameter for the user input and one for the computers. 
// 5: Compare the user input with the computer's awnser and declare a win lose or tie for that round.
// 6: make a new function that has the old game one in it 5 times to play a match and declare a winner. 
// 6: Declare the winner.
let computerChoice;
function getComputerChoice(){
    let min = Math.ceil(1);
    let max = Math.floor(3);
    let result = Math.floor(Math.random() * 3) + 1;
    if (result == 1){
        let computerChoice = 'Rock!';
    }
    else if (result == 2){
        let computerChoice = "Paper!";
    }
    else{
        let computerChoice = "Scissors!";
    }
return(computerChoice);
}
function game(userChoice,computerChoice){
    userChoice.toLowerCase();
if (userChoice == "rock" && computerChoice == "rock"){
    console.log("Rock Ties Rock!");
}

}
getComputerChoice(); 
console.log(result);