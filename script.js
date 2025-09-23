let humanScore = 0;
let computerScore = 0;

playGame();
console.log(`Human: ${humanScore} Computer: ${computerScore}`);

function playGame() {
    let count = 0;
    while (count < 5) {
        playRound(getComputerChoice(), getHumanChoice());
        count++;
    }
}

function playRound(computerChoice, humanChoice) {
    let human = humanChoice.toLowerCase();
    if (computerChoice === human) {
        console.log('Tie!');
    } else if (computerChoice === 'rock') {
        if (human === 'paper') {
            humanScore++;
            console.log('You win!');
        } else {
            computerScore++;
            console.log('Computer wins...');
        }
    } else if (computerChoice === 'paper') {
        if (human === 'scissors') {
            humanScore++;
            console.log('You win!');
        } else {
            computerScore++;
            console.log('Computer wins...');
        }
    } else if (computerChoice === 'scissors') {
        if (human === 'paper') {
            humanScore++;
            console.log('You win!');
        } else {
            computerScore++;
            console.log('Computer wins...');
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