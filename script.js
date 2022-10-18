// rock-paper-scissors

// variables

let userChoice;
let machineChoice;
let randomIndex;
let choiceArray = [];

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

choiceArray.push(ROCK, PAPER, SCISSORS);

// get random number between 0 and 2 (included) //

const getRandomIndex = () => {
    return Math.floor(Math.random() * 3);
}

// single round algorithm //

const rockPaperScissors = () => {
    randomIndex = getRandomIndex();
    machineChoice = choiceArray[randomIndex]; // machine choice equals to a random array item
    userChoice = prompt('Choose fast: rock, paper, or scissors?').toLowerCase(); // getting user input and setting it to lower case
    while (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {  // checking spelling
        alert('Wrong choice! Check your spelling');
        rockPaperScissors();
    }
    if (userChoice == 'rock') {
        if (machineChoice == 'paper') {
            console.log(userChoice, machineChoice,);
            return 'Machine wins again! Paper beats rock!'
        }
        else if (machineChoice == 'scissors') {
            console.log(userChoice, machineChoice);
            return 'User wins (how is that possible?!) Rock beats scissors!'
        }
        else {
            console.log(userChoice, machineChoice);
            return 'Draw! Start again!';
        }
    }
    else if (userChoice == 'paper') {
        if (machineChoice == 'scissors') {
            console.log(userChoice, machineChoice);
            return 'Machine wins again! Scissors beats paper!'
        }
        else if (machineChoice == 'rock') {
            console.log(userChoice, machineChoice);
            return 'User wins (how is that possible?!) Paper beats rock!'
        }
        else {
            console.log(userChoice, machineChoice);
            return 'Draw! Start again!';
        }
    }
    else if (userChoice == 'scissors') {
        if (machineChoice == 'rock') {
            console.log(userChoice, machineChoice);
            return 'Machine wins again! Rock beats scissors!'
        }
        else if (machineChoice == 'paper') {
            console.log(userChoice, machineChoice);
            return 'User wins (how is that possible?!) Scissors beats paper!'
        }
        else {
            console.log(userChoice, machineChoice);
            return 'Draw! Start again!';
        }
    }
}

// game algorithm //

let roundCount = 0;
let userScore = 0;
let machineScore = 0;
let drawCount = 0;
let singleResult;

const game = () => {

    while (roundCount < 5) {
        singleResult = rockPaperScissors()
        if (singleResult[0] == 'M') {
            machineScore++;
            roundCount++;
        }
        else if (singleResult[0] == 'U') {
            userScore++;
            roundCount++;
        }
        else if (singleResult[0] == 'D') {
            roundCount++;
            drawCount++;
        }
        console.log(userScore, machineScore, drawCount);
    }
    if (machineScore > userScore) {
        return 'The final winner is the machine (did you expect anything else?)'
    }
    else if (machineScore < userScore) {
        return 'The final winner is the user. There must have been a mistake...'
    }
    else {
        return 'It\'s a draw! Let\'s do this again.';
    }
}

console.log(game());


