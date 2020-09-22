// Set variables to traverse the DOM and select by ID and Class
var startQuizEl = document.querySelector("#startquiz");
var timerLocationEl = document.querySelector("#timerlocation");
var goBackEl = document.querySelector("#goback");
var submitEl = document.querySelector("#submit");
var finalSubmitEl = document.querySelector("#finalsubmit");
var InitialsInputEl = document.querySelector("#initialsinput");
var clearHighScoreEl = document.querySelector("#clearhighscore");
var feedbackResponseEl = document.querySelector("#feedbackresponse");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var scoreInput = document.querySelector("#scoreinput");
var question11El = document.querySelector(".question1");
var question21El = document.querySelector(".question2");
var question31El = document.querySelector(".question3");
var question41El = document.querySelector(".question4");
var question51El = document.querySelector(".question5");
// set string variables to display answer outcomes
var wrongAnswer = "Wrong!";
var rightAnswer = "Correct!";
// set integer variable for the timer start count
var timer = 180;
// set variable score to an empty string 
var score = "";

// Set questions into an array of objects to be able to iterate through them easily
var questions = [
    {
        //questionLocation: question1El,
        question1: question1El, "What tag is required in all HTML documents, and is used to define the title?",
        option1: option1El, "1. <body></body>",
        option2: option2El, "2. <title></title>",
        option3: option3El, "3. <head></head>",
        option4: option4El, "4. <br></br>",
        correctAnswer: "2. <title></title>"
      },
    {
        //questionLocation: question2El,
        question2: question2El, "The CSS link element must go inside the ____ section of an HTML document or page.",
        option1: option1El, "1. Footer",
        option2: option2El, "2. Head",
        option3: option3El, "3. Paragraph",
        option4: option4El, "4. Body",
        correctAnswer: "2. Head"
      },
    {
        //questionLocation: question3El,
        question3: question3El, "In JavaScript, what is a block of code called that is used to perform a specific task?",
        option1: option1El, "1. Variable",
        option2: option2El, "2. Declaration",
        option3: option3El, "3. String",
        option4: option4El, "4. Function",
        correctAnswer: "4. Function"
      },
    {
        //questionLocation: question4El,
        question3: question4El, "What tag is used to define a hyperlink, or link to another page?",
        option1: option1El, "1. <a>",
        option2: option2El, "2. <blockquote>",
        option3: option3El, "3. <strong>",
        option4: option4El, "4. <em>",
        correctAnswer: "1. <a>"
      },
    {
        //questionLocation: question5El,
        question5: question5El, "What is the name of the statement that is used to exit or end a loop?",
        option1: option1El, "1. Close statement",
        option2: option2El, "2. Break statement",
        option3: option3El, "3. Conditional statement",
        option4: option4El, "4. Falter statement",
        correctAnswer: "2. Break statement"
        }
];

// on click event connected to an id in the HTML triggered when the first question is asked
function startQuiz(){
    startQuizEl.addEventListener("click", function () {
    setTime();
    setTimerText();
    })
};

// set function to print timer text on the page
function setTimerText() {
    timerLocationEl.textContent = timer;
};

// set countdown function to run the time
function setTime() {
    var timerInterval = setInterval(function() {
      if(count > 0){
        timer--;
        timeEl.textContent = timer;
      }
      if(secondsLeft === 0) {
        setTimerText(timerInterval);
      }
  
    }, 180);
  }

function answerFeedback(){
    // on click event connected by id for next question
    .addEventListener("click", function () {
        // if you've selected an answer to the last question from the class "answers" the timer stops
        if (questions[4]){ 
            //stop timer;
            setTimerText();
            score = timer.textContent;
        } 
        if (questions.correctAnswer === true){
            feedbackResponseEl.textContent = rightAnswer
            } else (){
                feedbackResponseEl.textContent = wrongAnswer
                timer = timer - 15
                setTimerText();
            }   
    });       
};

function runQuiz(){
    startTimer();
    for (var i = 0; i < questions.length; i++) {
        if (timer === 0){
            //strop timer
            setTimerText();
            score = timer.textContent;
        } else(){
            renderPage(questions[i]);
            feedback();
        }
    }
};

function renderPage()
    if (nextQuestionEl){
        clearInterval()

    }
        
// on click event for final submission
finalsubmitEl.addEventListener("click", function(event) {
    event.preventDefault();
    // set variable to collect value of initial input
    var initials = initialsInput.value;
    // redirect page to print text for collected initial input
    //***append the score
    submitInitialsEl.textContent = ((window.location.href = "scores.html"), initials + score);
 });

 // on click event for final submission
goBacktEl.addEventListener("click", function(event) {
    event.preventDefault();
    // change windows to the start page
    window.location.href = "index.html"
 });

 // on click event for final submission
clearHighScoreEl.addEventListener("click", function(event) {
    event.preventDefault();
    // set variable for collected values of initial inputs
    var initials = initialsInput.value;
    // clear text for collected initial inputs
    // ***figure out how to clear local storage?
    submitInitialsEl.textContent = clearInterval(initials);
 });



// *** store answers and initials in local storage



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
