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
let round = 0;
let pScore = 0;
let cScore = 0;
let draw = 0;
let result;
let tally;

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
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    if (computerSelection === playerSelection) {  
         
        result = "Draw!";
    } else if ((computerSelection === 'rock' && playerSelection === 'paper') || 
        (computerSelection === 'paper' && playerSelection === 'scissors') || 
        (computerSelection === 'scissors' && playerSelection === 'rock')) {

        result = "You Win!";  
    } else {
        result = "You Lose!";
        }
    return result;
}

/**
 * @name game
 * @purpose plays five rounds of the game, records the winner and score, declares winner after last round
 * @param N/A
 */
function game() {
    for (i = 1; i <= 5; i++) {
        console.log(playRound());
        if (result === "Draw!") {
            draw += 1;
        } else if (result === "You Win!") {
            pScore += 1;
        } else {
            cScore += 1;
        }
        if (i === 5) {
            if (pScore > cScore) {
                console.log("You Won!");
            } else if (pScore < cScore) {
                console.log("Game over! You lose.");
            } else {
                console.log("The game is a draw!");
            }
        }
    }
}

game();