"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

const displayTheMessage = function(message) {
    document.querySelector(".message").textContent = message;
}


btnCheck.addEventListener("click", function() {
    const guess = Number (document.querySelector(".guess").value);

    // When there is no input
    if (!guess){
        displayTheMessage("No number!");

        // When players wins
    } else if (guess === secretNumber) {

        displayTheMessage("Correct number!");

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem"

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess !== secretNumber){
        if (score > 1){
            displayTheMessage(guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayTheMessage("You lost the game!");
            document.querySelector(".score").textContent = 0;
        }

    }
});

btnAgain.addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayTheMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"

})






















