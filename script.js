//-------------------VARIABLES---------------------
let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let result;

//-------------------FUNCTIONS---------------------

/**-------------------
@name getComputerChoice
@purpose return a random selection from the choices array to use as the computer's rock-paper-scissors selection
@param N/A
@return choice
*/

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

/**-------------------
@name getPlayerChoice
@purpose get user input and return that input to be used as the user's selected item
@param N/A
@return input
*/

function getPlayerChoice() {
    let input = prompt('Choose rock, paper, or scissors?');
    input = input.toLowerCase();
    while (input != 'rock' & input != 'paper' && input != 'scissors') {
        input = prompt('Please defend yourself with rock, paper, or scissors. Hint: Check spelling.');
    }
    return input;
}

/**-------------------
@name playRound
@purpose play single round of rock paper scissors using a user inputted player selection and the computer's selection
@param playerSelection, computerSelection
@return result
*/

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
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

/**-------------------
 * @name game
 * @purpose plays five rounds of the game, records the winner and score, declares winner after last round
 * @param N/A
 * @return N/A
 */

function game() {
    for (i = 1; i <= 5; i++) {
        console.log(playRound());
        if (result === "Draw!") {
            draw += 1;
        } else if (result === "You Win!") {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        if (i === 5) {
            if (playerScore > computerScore) {
                console.log("You Won!");
            } else if (playerScore < computerScore) {
                console.log("Game over! You lose.");
            } else {
                console.log("The game is a draw!");
            }
        }
    }
}

game();