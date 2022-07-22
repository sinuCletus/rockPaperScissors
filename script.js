/*------------------------------------------------- 
 ------------------------------------------------- 
Problem: Create Rock-Paper-Scissors Game

Crucial functions:

create a function to get the computer to play
create function to play a single round
create function to play a game of 5 rounds


 ------------------------------------------------- 
------------------------------------------------- */

//VARIABLES
let choice = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice();
//let playerSelection = something the player chooses;
let winner = '';

/*
name: getComputerChoice
param: rock, paper, scissors
return: choice
*/
function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

/*
name: playRound
param: playerSelection, computerSelection
return: winner
*/
function playRound(playerSelection, computerSelection) {
    
}
