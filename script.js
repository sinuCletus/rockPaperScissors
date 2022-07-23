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
let computerSelection = getComputerChoice();
let playerSelection = getPlayerSelection();
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

    let playerScore = 0;
    let computerScore = 0;
    let result;
    if (computerSelection === playerSelection) {   

        result = "It's a tie!\nComputer Chose: " + computerSelection + "\nYou selected: " + playerSelection + "\n"
         + "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        
        return result;
    } else if (computerSelection != playerSelection) {
        if ((computerSelection === 'rock' && playerSelection === 'paper') || 
           (computerSelection === 'paper' && playerSelection === 'scissors') || 
           (computerSelection === 'scissors' && playerSelection === 'rock')) {

            playerScore += 1;

            result = "You Win!\n" + "Computer Chose: " + computerSelection + "\nYou selected: " + playerSelection + "\n"
            + playerSelection + ' beats ' + computerSelection + "\nPlayer: " + playerScore + "\n" + "Computer: " + computerScore;

            return result;          
        } else {

            computerScore += 1;

            result = "You Lose!\n" + "Computer Chose: " + computerSelection + "\nYou selected: " + playerSelection + "\n"
            + computerSelection + ' beats ' + playerSelection + "\nPlayer: " + playerScore + "\n" + "Computer: " + computerScore;

            return result;
        }
    }
}
console.log(playRound(playerSelection,computerSelection));
/**
 * @name playGame
 * @param 
 */
