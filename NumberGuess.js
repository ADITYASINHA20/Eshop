const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayMessage('Please enter a number between 1 and 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            checkGuess(guess);
            displayMessage(`Game Over! The correct number was ${randomNumber}.`);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    displayGuess(guess);
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed it right! 🎉`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again.`);
    } else {
        displayMessage(`Too high! Try again.`);
    }
    numGuess++;
    remaining.textContent = 10 - numGuess;
}

function displayGuess(guess) {
    guessSlot.textContent = prevGuess.join(', ');
}

function displayMessage(message) {
    LowOrHi.textContent = message;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('restart');
    startOver.appendChild(restartButton);
    playGame = false;
    restartButton.addEventListener('click', function () {
        newGame();
    });
}

function newGame() {
    prevGuess = [];
    numGuess = 1;
    playGame = true;

    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = '';
    guessSlot.textContent = '';
    remaining.textContent = 10;
    LowOrHi.textContent = '';
    startOver.removeChild(document.querySelector('.restart'));
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(`New Random Number: ${randomNumber}`); 
}
