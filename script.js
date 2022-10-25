// rock-paper-scissors

// variables

let userChoice;
let machineChoice;
let randomIndex;
let choiceArray = [];

let roundCount = 5;
let userScore = 0;
let winner = '..?'
let machineScore = 0;
let drawCount = 0;
let singleResult;


const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

choiceArray.push(ROCK, PAPER, SCISSORS);

// update scores

const userScoreElement = document.querySelector('.user__count');
const machineScoreElement = document.querySelector('.machine__count');
const winnerElement = document.querySelector('.winner__result');
const roundsElement = document.querySelector('.round__count');

const updateScores = () => {
    userScoreElement.textContent = `${userScore}`;
    machineScoreElement.textContent = `${machineScore}`;
    winnerElement.textContent = `${winner}`;
    roundsElement.textContent = `${roundCount}`;
}

updateScores();

// user choices 

const userChoiceRock = document.querySelector('.user__choices_rock');
const userChoicePaper = document.querySelector('.user__choices_paper');
const userChoiceScissors = document.querySelector('.user__choices_scissors');

userChoiceRock.addEventListener('click', () => {
    userChoice = 'rock';
    game();
});
userChoicePaper.addEventListener('click', () => {
    userChoice = 'paper';
    game();
});
userChoiceScissors.addEventListener('click', () => {
    userChoice = 'scissors';
    game();
});

// get random number between 0 and 2 (included) //

const getRandomIndex = () => {
    return Math.floor(Math.random() * 3);
}

// single round algorithm //

const machineWinAnnounce = () => {
    roundCount--;
    machineScore++;
    updateScores();
    console.log(`Machine wins(as always)! ${machineChoice} beats ${userChoice}!`, machineChoice, userChoice);
}

const userWinAnnounce = () => {
    roundCount--;
    userScore++;
    updateScores();
    console.log(`User wins (how is that possible?!) ${userChoice} beats ${machineChoice}!`, userChoice, machineChoice);
}

const drawAnnounce = () => {
    roundCount--;
    drawCount++;
    updateScores();
    console.log('hmm..That\'s a draw! Start again', userChoice, machineChoice);
}

const rockPaperScissors = () => {
    if (roundCount == 0) return;

    randomIndex = getRandomIndex();
    machineChoice = choiceArray[randomIndex]; // machine choice equals to a random array item
    while (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {  // checking spelling
        alert('Wrong choice! Check your spelling');
        rockPaperScissors();
    }
    if (userChoice == 'rock') {
        if (machineChoice == 'paper') {
            machineWinAnnounce();
        }
        else if (machineChoice == 'scissors') {
            userWinAnnounce();
        }
        else {
            drawAnnounce();
        }
    }
    if (userChoice == 'paper') {
        if (machineChoice == 'scissors') {
            machineWinAnnounce();
        }
        else if (machineChoice == 'rock') {
            userWinAnnounce();
        }
        else {
            drawAnnounce();
        }
    }
    if (userChoice == 'scissors') {
        if (machineChoice == 'rock') {
            machineWinAnnounce();
        }
        else if (machineChoice == 'paper') {
            userWinAnnounce();
        }
        else {
            drawAnnounce();
        }
    }
}

// game algorithm (5 rounds until 0) //

const game = () => {

    rockPaperScissors()
    if (winner == 'machine' || winner == 'user' || winner == 'draw') return;
    else if (roundCount == 0) {
        if (machineScore > userScore) {
            winner = 'machine';
            winnerElement.textContent = ' The final winner is the machine (did you expect anything else?)';
        }
        else if (machineScore < userScore) {
            winner = 'user';
            winnerElement.textContent = ' The final winner is the user. There must have been a mistake...';
        }
        else {
            winner = 'draw';
            winnerElement.textContent = ' It\'s a draw! Let\'s do this again.';
        }
    }
}   





