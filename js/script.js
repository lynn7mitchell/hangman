var userGuessButton = document.getElementById("user-guess-button");
var wrongGuess = 0;
var randomWord = words[Math.floor(Math.random()*words.length)];
var blanks = document.getElementById("blanks");
console.log(randomWord)

for(i = 0; i < randomWord.length; i++){
    var newLi = document.createElement("li");
    blanks.appendChild(newLi);
    newLi.textContent = "_";
}


userGuessButton.addEventListener("click", function (e) {
    e.preventDefault();
    var userGuess = document.getElementById("user-guess").value;
    console.log(userGuess);

    if(randomWord.includes(userGuess)){
        
    }else{
        wrongGuess++;
    }
});








// play again button to refresh page