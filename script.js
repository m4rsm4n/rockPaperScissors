let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(computerChoice,humanChoice))
console.log(`Human: ${humanScore} Computer: ${computerScore}`);

function playRound(computerChoice, humanChoice) {
    let human = humanChoice.toLowerCase();
    if (computerChoice === human) {
        return 'tie';
    } else if (computerChoice === 'rock') {
        if (human === 'paper') {
            humanScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'Computer wins...';
        }
    } else if (computerChoice === 'paper') {
        if (human === 'scissors') {
            humanScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'Computer wins...';
        }
    } else if (computerChoice === 'scissors') {
        if (human === 'paper') {
            humanScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'Computer wins...'
        }
    }

}

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Rock, paper, or scissors?');
    return choice;
}