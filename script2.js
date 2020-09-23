var goBackBtn = document.querySelector("#goback");
var clearHighScoreBtn = document.querySelector("#clearhighscore");
var scoreLocation = document.querySelector("#scorelocation");
var startQuizBtn = document.querySelector("#startquiz");
var submitBtn = document.querySelector("#submit");

// on click event for final submission
submitBttn.addEventListener("click", function (event) {
    event.preventDefault();

    var lastScore = document.querySelector("#scorelocation").value;
    // set variable to collect value of initial input
    var initials = initialsInput.value;
    // redirect page to print text for collected initial input
    //***append the score
    if (scoreLocation = "") {
        scoreLocation.textContent = ((window.location.href = "scores.html"), initials + " - " + score);
    } else {
        localStorage.setItem("scorelocation", lastScore);
        renderLastWinner()
        scoreLocation.textContent.append(initials + " - " + score)
    }
});

// on click event for the back button to return to index.html
goBackBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // change windows to the start page
    window.location.href = "index.html"
});

// on click event for clearing the high score
clearHighScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // set variable for collected values of initial inputs
    var initials = initialsInputEl.value;
    // clear text for collected initial inputs
    // ***figure out how to clear local storage?
    scoreLocation.textContent = clearInterval(initials);
});

// *** store answers and initials in local storage
function renderLastWinner(){
    var lastScore = localStorage.getItem("#scorelocation");
    scoreLocation.textContent = lastScore;
}