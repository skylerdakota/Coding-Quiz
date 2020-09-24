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

// set variable score to an empty string 
var score = "";

var timer = 0

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
        timer =- 10;
        feedbackResponseEl.textContent = wrongAnswer;
    } else {
        feedbackResponseEl.textContent = rightAnswer;
    }
    i++;
    if(i === questions.length) {
        questionCard.setAttribute("class", "hide");
        scoreCard.removeAttribute("class", "hide");
        scoreReport.textContent = "Your final score is " + score + ".";
    } else {
    renderQuiz();
    }
};

function renderQuiz() {
    questionEl.textContent = questions[i].question
    optionEl.innerHTML = ""
    questions[i].options.forEach(function(option){
        var button = document.createElement("button");
        button.setAttribute("value", option);
        button.setAttribute("class", "option");
        button.textContent = option;
        optionEl.appendChild(button);
        button.onclick = runQuiz;
    });
};

submitBtn.addEventListener("click", function () {
    scoreCard.setAttribute("class", "hide");
    highscoreCard.removeAttribute("class", "hide");
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#timerlocation');
    startTimer(oneMinute, display);
};

function stopTimer() {
    if (secondsElapsed = 0){
    renderTime();
    }   
};

// //set function to print timer text on the page
// function renderTime() {
//     timerLocationEl.textContent = getFormattedSeconds();
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
//     }
// };



// function getFormattedSeconds() {
//     var secondsLeft = (totalSeconds - secondsElapsed) % 60;
    
//     return secondsLeft;


// set integer variable for the timer start count
// var totalSeconds = 180;
// var secondsElapsed = 0;
// var interval;