window.addEventListener("load", init);

// global variables ----->

// levels
const levels = {
    easy: 12,
    medium: 8,
    hard: 5,
    master: 3

};

// Change levels
const currentLevel = levels.master;

let time = currentLevel;
let score = 0;

// variable for initialising the test to start
let isPlaying;
// ------------->

// the DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Questions in an array
const words = [
];

// initialiser
function init() {
    //show seconds at the top
    seconds.innerHTML = currentLevel;
    // load words from array
    showWord(words);
    // Matching the word input
    wordInput.addEventListener("input", startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // Check status
    setInterval(checkStatus, 50);
}

// function to start test
function startMatch() {
    if (matchWords()) {
        isPlayingv = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    // Set score to 0 from -1
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// match currentword to word input
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

// pick and show words randomly
function showWord(words) {
    // generate random array
    const randIndex = Math.floor(Math.random() * words.length);

    // output random word
    currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
    // set time to default value
    if (time > 0) {
        // decrese time---
        time--;
    } else if (time === 0) {
        // Test is over
        isPlaying = false;
    }
    // show the current time
    timeDisplay.innerHTML = time;
}

// check status function
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Test Over!!...";
        score = -1;
    }
}