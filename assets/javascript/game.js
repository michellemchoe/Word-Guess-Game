
var wordbank = ['unicorn', 'mermaid', 'dragon', 'fairy', 'werewolf', 'sphinx', 'griffin', 'centaur', 'yeti', 'ghoul', 'manticore', 'chimera'];
var mysteryWord = "";
var segmentedLetters = [];
var numBlanks;
var currPuzzle = [];
var wrongList = [];
var isMatch;
var guessesLeft = 6;
var winCount = 0;
var lossCount = 0;
var rematch;

function startGame() {
    mysteryWord = wordbank[Math.floor(Math.random() * wordbank.length)];
    numBlanks = mysteryWord.length;
    segmentedLetters = mysteryWord.split("");
    currPuzzle = setBlanks();
    wrongList = [];
    isMatch = false;
    guessesLeft = 6;

    document.getElementById("currentPuzzle").innerHTML = currPuzzle.join(" ");
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
}

function setBlanks() {
    var setUpPuzzle = [];

    for (var i = 0; i < mysteryWord.length; i++) {
        setUpPuzzle.push("_");
    }

    return setUpPuzzle;
}

function checkLetter(yourLetter) {
    isMatch = false;
    for (var i = 0; i < segmentedLetters.length; i++) {
        if (segmentedLetters[i] === yourLetter) {
            isMatch = true;
            currPuzzle[i] = yourLetter;

            document.getElementById("currentPuzzle").innerHTML = currPuzzle.join(" ");
        }
    }

    if (!isMatch && isLetter(yourLetter)) {
        wrongList.push(yourLetter);
        guessesLeft--;
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function gameOngoing() {
    if (segmentedLetters.toString() === currPuzzle.toString()) {
        winCount++;
        alert("You WON!");
        document.getElementById("yourWins").innerHTML = winCount;
        startGame();
    }
    else if (guessesLeft === 0) {
        lossCount++;
        alert("You LOST.");
        document.getElementById("yourLosses").innerHTML = lossCount;
        startGame();
    }
}

startGame();

document.onkeyup = function (event) {
    var yourGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(yourGuess);
    gameOngoing();
}




// document.getElementById("currentPuzzle").innerHTML = currPuzzle.join(" ");
// document.getElementById("remainingGuesses").innerHTML = guessesLeft;
// document.getElementById("yourWins").innerHTML = winCount;
// document.getElementById("yourLosses").innerHTML = lossCount;



console.log("mysteryWord = " + mysteryWord);
console.log("segmentedLetters = " + segmentedLetters);
console.log("numBlanks = " + numBlanks);
console.log("currPuzzle = " + currPuzzle);
console.log("guessesLeft = " + guessesLeft);
console.log("winCount = " + winCount);
console.log("lossCount = " + lossCount);
// console.log("yourGuess = " + yourGuess);