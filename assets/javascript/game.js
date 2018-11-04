var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var pastGuesses = [];
var compLetter;


var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses left: " + left;
};

var pastGuess = function() {
    document.getElementById("guesses").innerHTML = "Recent guesses: " + pastGuesses.join(", ");
};

var newComp = function() {
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var reset = function() {
	guessedLetters = [];
    left = 9;
    newComp();
    guessesLeft();
    pastGuess();
}

document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    pastGuesses.push(userGuess);
    pastGuess();
    guessesLeft();
    
    if (left > 0) {
        if (userGuess === compLetter) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins: " + wins;
            reset();
        }
    } else if (left === 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses: " + losses;
        reset();
    }
};