var userGuessButton = document.getElementById("user-guess-button");
var wrongGuess = 0;
var correctGuess = 0;
var randomWord = words[Math.floor(Math.random() * words.length)];
var blanks = document.getElementById("blanks");
var guessesLeft = 10;
var gameOver = document.getElementById("game-over")
var playAgain = document.getElementById("play-again");


console.log(randomWord)




for (var i = 0; i < randomWord.length; i++) {
    var newLi = document.createElement("li");
    blanks.appendChild(newLi);
    newLi.textContent = "_";
}



userGuessButton.addEventListener("click", function (e) {
    e.preventDefault();
    var userGuess = document.getElementById("user-guess").value;
    var wrongLetterLi = document.createElement("li");


    if (randomWord.includes(userGuess)) {

        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                console.log(randomWord.charAt(i));
                console.log(blanks.childNodes[0]);
                blanks.childNodes[i + 1].textContent = randomWord.charAt(i);
                // append child here
            }

            correctGuess++

        }
    } else {
        wrongGuess++;
        document.getElementById("wrong-letters").appendChild(wrongLetterLi);
        wrongLetterLi.textContent = userGuess;

        guessesLeft--;
        document.getElementById("guesses-left").textContent = guessesLeft;
    }

    if (wrongGuess === 1) {
        document.getElementById("base").style.display = "block";
    } else if (wrongGuess === 2) {
        document.getElementById("stand").style.display = "block";
    } else if (wrongGuess === 3) {
        document.getElementById("top").style.display = "block";
    } else if (wrongGuess === 4) {
        document.getElementById("hanger").style.display = "block";
    } else if (wrongGuess === 5) {
        document.getElementById("head").style.display = "block";
    } else if (wrongGuess === 6) {
        document.getElementById("body").style.display = "block";
    } else if (wrongGuess === 7) {
        document.getElementById("left-arm").style.display = "block";
    } else if (wrongGuess === 8) {
        document.getElementById("right-arm").style.display = "block";
    } else if (wrongGuess === 9) {
        document.getElementById("left-leg").style.display = "block";
    } else if (wrongGuess === 10) {
        document.getElementById("right-leg").style.display = "block";
    }



    if (wrongGuess === 10) {

        gameOver.style.display = "block";
        gameOver.childNodes[0].textContent = "You Lose! the word was " + randomWord + ".";
    } else if (correctGuess === randomWord.length) {
        gameOver.childNodes[0].textContent("You Win!");
        gameOver.style.display = "block";
    }
});

playAgain.addEventListener("click", function(e){
    e.preventDefault();
    window.location.reload();
})






// play again button to refresh page