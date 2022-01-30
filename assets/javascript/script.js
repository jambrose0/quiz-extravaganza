//dom elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeDone = document.getElementById("timeDone");
var startButton = document.getElementById("start-button");
var quizConatiner = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitQuiz = document.getElementById("submitQuiz");

var initials = document.getElementById("initials");

//global variables
var startTimer = setInterval(startTimer, "click");
var questionEl = 0;
var allTime = 180;

//start timer on start button click
function startQuiz() {
  questionEl = 0;
  allTime = 180;
  timeLeft.textContent = time;
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
  for (var key in quizQuestions[quest].answers) {
    var answerShape = document.createElement("li");
    answerShape.textContent = quizQuestions[questionEl].answers[key];
    //   answerShape.addEventListener('click',)
    answerEl.append(answerShape);
  }
  quizContainer.innerHTML = `${question} ${answers}`;

  quizContainer.appendChild(answerEl);
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
