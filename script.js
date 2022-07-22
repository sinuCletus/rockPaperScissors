/*------------------------------------------------- 
 ------------------------------------------------- 
Problem: Create Rock-Paper-Scissors Game

                        Plan
Crucial functions:

create a function to get the computer to play
create function to capture player selection
create function to play a single round
create function to play a game of 5 rounds
create a function to reset after either party reaches 5

Method:

 ------------------------------------------------- 
------------------------------------------------- */

//VARIABLES
let choices = ['rock', 'paper', 'scissors'];

//FUNCTIONS
/*
name: getComputerChoice
purpose: return a random selection from the choice array to use as the computer's rock-paper-scissors selection
param: N/A
return: choice
*/
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

/*
name: getPlayerChoice
param: N/A
return: input
*/
function getPlayerSelection() {
    let input = prompt('Choose rock, paper, or scissors?');
    input = input.toLowerCase();
    while (input != 'rock' & input != 'paper' && input != 'scissors') {
        input = prompt('Please defend yourself with rock, paper, or scissors. Hint: Check spelling.');
    }
    return input;
}

/*
name: playRound
param: playerSelection, computerSelection
return: winner
*/
function playRound(playerSelection, computerSelection) {
    for (i=1; i<=5; i++) {
        console.log("Round " + i);
        computerSelection = getComputerChoice();
        playerSelection = getPlayerSelection();
        console.log("Computer Chooses: " + computerSelection);
        console.log("You selected: " + playerSelection);
    }
}
playRound();
