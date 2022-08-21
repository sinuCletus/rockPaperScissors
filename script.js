//-------------------VARIABLES---------------------
let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 1;
let result;

const gameResults = document.getElementById('#results');
const playerChoice = document.querySelectorAll("#playerOption button");

playerChoice.forEach(function(playerSelection) {
    playerSelection.addEventListener('click', playRound);
});
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

function getPlayerChoice(e) {
    return e.target.id;
}

/**-------------------
@name playRound
@purpose play single round of rock paper scissors using a user inputted player selection and the computer's selection
@param playerSelection, computerSelection
@return result
*/

    //update to do: adding player & computer scores into the playRound function then pass the function in the game function
    //replace the playRound function in the addEventListener above for the player Seleciton buttons

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice(playerSelection);
    computerSelection = getComputerChoice();

    if (round < 6) {
        if (computerSelection === playerSelection) {  

            console.log(`Round ${round}! You both chose ${playerSelection}.`);
            draw += 1;
            result = "Draw!";
            round += 1;
            if (round === 5) {
                return endGame();
            }

            console.log(computerScore);
            console.log(playerScore);
            return console.log(result);  
        } else if ((computerSelection === 'rock' && playerSelection === 'paper') || 
            (computerSelection === 'paper' && playerSelection === 'scissors') || 
            (computerSelection === 'scissors' && playerSelection === 'rock')) {
            
            console.log(`Round ${round}! The computer chose ${computerSelection} and you selected ${playerSelection}.`);
            playerScore += 1;
            result = "You Win!"; 
            round += 1; 
            if (round === 5) {
                return endGame();
            }

            console.log(computerScore);
            console.log(playerScore);
            return console.log(result);  
        } else {
    
            console.log(`Round ${round}! The computer chose ${computerSelection} and you selected ${playerSelection}.`);
            computerScore += 1;
            result = "You Lose!";
            round += 1;
            if (round === 5) {
                return endGame();
            }

            console.log(computerScore);
            console.log(playerScore);
            return console.log(result);  
        }
    }
}

/**-------------------
 * @name endGame
 * @purpose plays five rounds of the game, records the winner and score, declares winner after last round
 * @param N/A
 * @return N/A
 */

function endGame() {
    if (computerScore === playerScore) {
        return console.log('The game is a draw. Everybody wins! But that\'s lame, Try Again!');
    } else if (playerScore > computerScore) {
        return console.log('You won! Against all odds and no matter what people said about you, you won! Take that victory lap you winner!');
    } else {
        return console.log('Look, someone had to lose. It didn\'t have to be you but the score does not lie. Eat some ice-cream, cry it out, and then get back up on your pony and play again!');
    }
}

//game();