// Set variables to traverse the DOM and select by ID and Class
var timerLocationEl = document.querySelector("#timerlocation");
var nextQuestionEl = document.querySelector("#nextquestion");
var InitialsInputEl = document.querySelector("#initialsinput");
var feedbackResponseEl = document.querySelector("#feedbackresponse");
var optionEl = document.querySelector("#option");
var questionEl = document.querySelector(".question");
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card");
var scoreCard = document.querySelector("#score-card");
var highScoreCard = document.querySelector("#highscores-card");
var scoreReport = document.querySelector(".scorereport");
var scoreLog = document.querySelector(".scorelog");

// set string variables to display answer outcomes
var wrongAnswer = "Wrong!";
var rightAnswer = "Correct!";

// set integer variable for the timer start count
var totalSeconds = 180;
var secondsElapsed = 0;
var interval;

// set variable score to an empty string 
var score = "";

// Set questions into an array of objects to be able to iterate through them easily
var i = 0;
var questions = [
    {
        question: "What tag is required in all HTML documents, and is used to define the title?",
        options: ["1. <body></body>", "2. <title></title>","3. <head></head>", "4. <br></br>"],
        correctAnswer: "2. <title></title>"
    },
    {
        question: "The CSS link element must go inside the ____ section of an HTML document or page.",
        options: ["1. Footer", "2. Head", "3. Paragraph", "4. Body"],
        correctAnswer: "2. Head"
    },
    {
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        options: ["1. Variable", "2. Declaration", "3. String", "4. Function"],
        correctAnswer: "4. Function"
    },
    {
        question: "What tag is used to define a hyperlink, or link to another page?",
        options: ["1. <a>", "2. <blockquote>", "3. <strong>", "4. <em>"],
        correctAnswer: "1. <a>"
    },
    {
        question: "What is the name of the statement that is used to exit or end a loop?",
        options: ["1. Close statement", "2. Break statement", "3. Conditional statement", "4. Falter statement"],
        correctAnswer: "2. Break statement"
    }
];

startQuizBtn.addEventListener("click", function () {
    startCard.setAttribute("class", "hide");
    questionCard.removeAttribute("class", "hide");
    renderQuiz();
})  

function runQuiz() {
    if(this.value !== questions[i].correctAnswer) {
        //secondsElapsed =- 10;
        feedbackResponseEl.textContent = wrongAnswer;
    } else {
        feedbackResponseEl.textContent = rightAnswer;
    }
    i++;
    console.log(questions[i]);
    if(i === questions.length) {
        questionCard.setAttribute("class", "hide");
        scoreCard.removeAttribute("class", "hide");
        scoreReport.textContent = "Your final score is " + score + ".";
        //renderResults();
    } else {
    renderQuiz();
    }

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
};

// on click event connected to an id in the HTML triggered when the first question is asked
function renderQuiz() {
    questionEl.textContent = questions[i].question
    optionEl.innerHTML = ""
    //optionEl.textContent = questions[i].option
    //feedbackResponseEl.textContent = questions[i].correctAnswer
    questions[i].options.forEach(function(option){
        var button = document.createElement("button");
        button.setAttribute("value", option);
        button.setAttribute("class", "option");
        button.textContent = option;
        optionEl.appendChild(button);
        button.onclick = runQuiz;
    });

submitBtn.addEventListener("click", function () {
    scoreCard.setAttribute("class", "hide");
    highscoreCard.removeAttribute("class", "hide");
    })




//function renderResults() {
    //});



};

// function answerFeedback() {
//     if (questions[i].correctAnswer === true) {
//         feedbackResponseEl.textContent = rightAnswer
//     } else {
//         feedbackResponseEl.textContent = wrongAnswer;
//         //secondsElapsed =- 15;
//         //renderTime();
//     }
// };

// //set function to print timer text on the page
// function renderTime() {
//     timerLocationEl.textContent = secondsElapsed;
//     if (secondsElapsed >= totalSeconds) {
//         stopTimer();
//     }
// };

// // set countdown function to run the time
// function startTimer() {
//     if (totalSeconds > 0) {
//           interval = setInterval(function() {
//             secondsElapsed--;
//             renderTime();
//           }, 180);
// };

// function stopTimer() {
//     if (secondsElapsed = 0){
//     renderTime();
//     }   
// };
   
//startQuiz();
// runQuiz();

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

//what questions?
//what answers?
//what correct answers?
//what to prompt for wrong answer?
//what to prompt for right answer?
//when to show next question?
//when to start timer?
//when to take time from timer?
//when to stop timer?
//what to show for score?
