// var goBackBtn = document.querySelector("#goback");
// var clearHighScoreBtn = document.querySelector("#clearhighscore");
// var scoreLocation = document.querySelector("#scorelocation");
// var startQuizBtn = document.querySelector("#startquiz");
// var submitBtn = document.querySelector("#submit");

// on click event for final submission
// submitBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     var lastScore = document.querySelector("#scorelocation").value;
//     // set variable to collect value of initial input
//     var initials = initialsInput.value;
//     // redirect page to print text for collected initial input
//     //***append the score
//     if (scoreLocation = "") {
//         scoreLocation.textContent = ((window.location.href = "scores.html"), initials + " - " + score);
//     } else {
//         localStorage.setItem("scorelocation", lastScore);
//         renderLastWinner()
//         scoreLocation.textContent.append(initials + " - " + score)
//     }
// });

// on click event for the back button to return to index.html
// goBackBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     // change windows to the start page
//     window.location.href = "index.html"
// });

// on click event for clearing the high score
// clearHighScoreBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     // set variable for collected values of initial inputs
//     var initials = initialsInputEl.value;
//     // clear text for collected initial inputs
//     // ***figure out how to clear local storage?
//     scoreLocation.textContent = clearInterval(initials);
// });

// *** store answers and initials in local storage
// function renderLastWinner(){
//     var lastScore = localStorage.getItem("#scorelocation");
//     scoreLocation.textContent = lastScore;
// }





   
// questions:
// Do I need to create more html files? per different page?
// start page? & submit page
// How do I have code talk between html and js pages?
// not sure if timer is working...
// storing winner information in local storage, appending winners

// function nextWindow()
//     if (currentWindow === (window.location.href = "index.html")){
//         window.location.href = "question1.html";
//         } else if (currentWindow === (window.location.href = "question1.html")){
//             window.location.href = "question2.html";
//         } else if (currentWindow === (window.location.href = "question2.html")){
//             window.location.href = "question3.html";
//         } else if (currentWindow === (window.location.href = "question3.html")){
//             window.location.href = "question4.html";
//         } else if (currentWindow === (window.location.href = "question4.html")){
//             window.location.href = "question5.html";
//         } else if (currentWindow === (window.location.href = "question5.html")){
//             window.location.href = "results.html";
//         } else if (currentWindow === (window.location.href = "results.html")){
//             window.location.href = "resultsdone.html";
//         } else if (currentWindow === (window.location.href = "resultsdone.html")){
//             window.location.href = "scores.html";

   
// var timerInterval = setInterval(function () {
//     if (count > 0) {
//         timer--;
//         timeEl.textContent = timer;
//     }
//     if (secondsLeft === 0) {
//         renderTime(timerInterval);
//     }

// }, 180);
// }

//var nextQuestionEl = document.querySelector("#nextquestion");
//var answerSelectEl = document.querySelector(".answerselect");

// set timer to end when last question is answered or timer hits 0
// if questions[5]

// if statement for a timer to start and count down 
// WHEN I answer a question
// THEN I am presented with another question
// if question is answered correctly provide correct answer response
    // else statement for answering question incorrectly generates incorrect answer response
    // time is subtracted from the clock


// set new variable score to equal end time of timer
// generate score on a new score page on another html


// The computer needs to know:

//when to start timer?
//when to take time from timer?
//when to stop timer?
//what to show for score?



// nextQuestionEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (event.target.matches(".option")) {
//         for (var i = 0; i < questions.length; i++) {
//             if (secondsElapsed === 0 || questions[4]) {
//                 //***strop timer
//                 //renderTime();
//                 //score = secondsElapsed.textContent;
//                 //window.location.href = "scores.html"
//             } else {
//                 answerFeedback();
//                 //clearInterval();
//                 renderQuiz();
//             }
//         }
//     }
// })

// function answerFeedback() {
//     if (questions[i].correctAnswer === true) {
//         feedbackResponseEl.textContent = rightAnswer
//     } else {
//         feedbackResponseEl.textContent = wrongAnswer;
//         //secondsElapsed =- 15;
//         //renderTime();
//     }
// };

//startQuiz();
// runQuiz();