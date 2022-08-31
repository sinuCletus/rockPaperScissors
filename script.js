//-------------------VARIABLES---------------------
let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;
let result;

/**TO DO LIST
 * create DOM methods to keep score and announce winner after 5 rounds. X
 * create DOM methods to toggle game display after a player enters their name and clicks the submit button.
 * create DOM methods to display player name vs computer after submit button is clicked.
 * create a reset button that refreshes the page.
 */

const outcome = document.getElementById('result');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const conclusion = document.getElementById('conclusion');

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

    if (round < 5) {
        if (computerSelection === playerSelection) {  

            round++;
            draw += 1;
            result = `Round ${round}! Draw! You both chose ${playerSelection}.`;

            cScore.innerHTML = computerScore;
            pScore.innerHTML = playerScore;
            outcome.innerHTML = result;  
        } else if ((computerSelection === 'rock' && playerSelection === 'paper') || 
            (computerSelection === 'paper' && playerSelection === 'scissors') || 
            (computerSelection === 'scissors' && playerSelection === 'rock')) {
            
            round++;
            playerScore += 1;
            result = `Round ${round}! You Win! The computer chose ${computerSelection} and you selected ${playerSelection}.`;

            cScore.innerHTML = computerScore;
            pScore.innerHTML = playerScore;
            outcome.innerHTML = result;
        } else {
    
            round++;
            computerScore += 1;
            result = `Round ${round}! You lose! The computer chose ${computerSelection} and you selected ${playerSelection}.`;

            cScore.innerHTML = computerScore;
            pScore.innerHTML = playerScore;
            outcome.innerHTML = result;
        }
    }
    endGame();
}

/**-------------------
 * @name endGame
 * @purpose plays five rounds of the game, records the winner and score, declares winner after last round
 * @param N/A
 * @return N/A
 */

function endGame() {
    if (round === 5) {
        if (computerScore === playerScore) {
            conclusion.innerHTML = 'The game is a draw. Everybody wins! But that\'s not a crowd pleaser, Fight Again!';
        } else if (playerScore > computerScore) {
            conclusion.innerHTML = 'You won! Against all odds and no matter what people said about you, you won! Take that victory lap champ!';
        } else {
            conclusion.innerHTML = 'Look, someone had to lose. Eat some ice-cream, cry, and then get back up on your pony and play again!';
        }   
    }
}