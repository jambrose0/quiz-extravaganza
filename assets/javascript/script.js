//dom elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeDone = document.getElementById("timeDone");
var startButton = document.getElementById("start-button");
var quizConatiner = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitQuiz = document.getElementById("submitQuiz");

var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

var initials = document.getElementById("initials");

//global variables
var startTimer = setInterval(startTimer, "click");
var questionEl = 0;
var allTime = 180;

//start timer on start button click
function startQuiz() {
  questionEl = 0;
  allTime = 180;
  timeLeft.textContent = allTime;
  initials.textContent = "";

  var startTimer = setInterval(function () {
    allTime--;
    timeLeft.textContent = allTime;
    if (allTime <= 0) {
      clearInterval(startTimer);
      if (questionEl < quizQuestions.length - 1) {
        endQuiz();
      }
    }
  }, 1000);

  quizGo();
}

function quizGo() {
  startQuestions();
}

function startQuestions() {
  var answerEl = document.createElement("ul");
  for (var key in quizQuestions[questionEl].answers) {
    var answerShape = document.createElement("li");
    answerShape.textContent = quizQuestions[questionEl].answers[key];
    //   answerShape.addEventListener('click',)
    answerEl.append(answerShape);
  }
  quiz.innerHTML = `${question} ${answers}`;

  quiz.appendChild(answerEl);
}

function answerReview(correct) {
  if (
    quizQuestions[questionEl].correct ===
    quizQuestions[questionEl].answers[correct]
  ) {
    correctAns++;
    answerReview.textContent = "Correct!";
  } else {
    allTime -= 10;
    timeLeft.textContent = allTime;
  }

  questionEl++;
  if (questionEl < quizQuestions.length) {
    startQuestions();
  } else {
    endQuiz();
  }
}

startButton.addEventListener("click", startQuiz);
answerOne.addEventListener("click");
//quiz question array
var quizQuestions = [
  {
    question: "Which is one of my dogs names?",
    answers: ["a: Rufus", "b: Squidward", "c: Shadow", 'd: "Fido'],
    correct: "c",
  },
  {
    question: "What is the name of my second dog?",
    answers: ["a: Isabelle", "b: Ranger", "c: Feather", "d: Scout"],
    correct: "d",
  },
  {
    question: "What is my dogs' favorite activity?",
    answers: [
      "a: sleeping on the couch",
      "b: fetch",
      "c: hiking",
      "d: barking at random noises",
    ],
    correct: "b",
  },
  {
    question: "What is Shadow's favorite snack",
    answers: [
      "a: whatever I'm eating at the moment",
      "b: carrots",
      "c: dog treats",
      "d: scrambled eggs",
    ],
    correct: "a",
  },
  {
    question: "What color are both of my dogs?",
    answers: [
      "a: golden",
      "b: light brown",
      "c: black with white racing stripes",
      "d: hypoallergenic- furless dogs",
    ],
    correct: "c",
  },
  {
    question: "Which of my dogs is older?",
    answers: [" a: Shadow", "b: Scout", "c: Rufus", "d: Fido"],
    correct: "a",
  },
];

//storing high scores
function storeScores(event) {
  event.preventDefault();

  if (initials.value === "") {
    alert("Please enter your initials!");
    return;
  }

  var userScores = localStorage.getItem("high scores");
  var scoresArray = [];

  if (userScores === null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(userScores);
  }

  var highScores = {
    initials: initials.value,
    score: finalScore.textContent,
  };
  scoresArray.push(userScores);

  var scoresString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresString);

  storeScores();
}

var i = 0;
function showScores() {
  var highScores = localStorage.getItem("high scores");
}
