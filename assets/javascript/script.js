//quiz questions
var quizQuestions = [
  {
    question: "Which is one of my dogs names?",
    answers: ["a: Rufus", "b: Squidward", "c: Shadow", "d: Fido"],
    correct: "c: Shadow",
  },
  {
    question: "What is the name of my second dog?",
    answers: ["a: Isabelle", "b: Ranger", "c: Feather", "d: Scout"],
    correct: "d: Scout",
  },
  {
    question: "What is my dogs' favorite activity?",
    answers: [
      "a: sleeping on the couch",
      "b: fetch",
      "c: hiking",
      "d: barking at random noises",
    ],
    correct: "b: fetch",
  },
  {
    question: "What is Shadow's favorite snack",
    answers: [
      "a: whatever I'm eating at the moment",
      "b: carrots",
      "c: dog treats",
      "d: scrambled eggs",
    ],
    correct: "a: whatever I'm eating at the moment",
  },
  {
    question: "What color are both of my dogs?",
    answers: [
      "a: golden",
      "b: light brown",
      "c: black with white racing stripes",
      "d: hypoallergenic- furless dogs",
    ],
    correct: "c: black with white racing stripes",
  },
  {
    question: "Which of my dogs is older?",
    answers: ["a: Shadow", "b: Scout", "c: Rufus", "d: Fido"],
    correct: "a: Shadow",
  },
];

//dom elements
var startButton = document.getElementById("start-button");
var qOne = document.getElementById("qOne");
var qTwo = document.getElementById("qTwo");
var qThree = document.getElementById("qThree");
var qFour = document.getElementById("qFour");
var qTitle = document.getElementById("qTitle");

//quiz variables

var totalTime = 180;
var quizQuestionsIndex = 0;

//event listeners
startButton.addEventListener("click", quizStart);
qOne.addEventListener("click", choseOne);
qTwo.addEventListener("click", choseTwo);
qThree.addEventListener("click", choseThree);
qFour.addEventListener("click", choseFour);

function quizStart() {
  totalTime = 40;
  quizQuestionsIndex = 0;
  timeLeft.textContent = totalTime;

  var goTimer = setInterval(function () {
    totalTime--;
    timeLeft.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(goTimer);
      if (quizQuestionsIndex < questions.length - 1) {
        quizDone();
      }
    }
  }, 1000);

  ouput.push(
    <div class="slide">
      <div class="question"> ${quizQuestions.question}</div>
      <div class="answers"> ${answers.join("")}</div>
    </div>
  );

  questionStart();
}

function questionStart() {
  // alert("quiz has started");

  qTitle.textContent = quizQuestions[quizQuestionsIndex].question;
  qOne.textContent = quizQuestions[quizQuestionsIndex].answers[0];
  qTwo.textContent = quizQuestions[quizQuestionsIndex].answers[1];
  qThree.textContent = quizQuestions[quizQuestionsIndex].answers[2];
  qFour.textContent = quizQuestions[quizQuestionsIndex].answers[3];
}
function choseOne() {
  answerCheck(0);
}
function choseTwo() {
  answerCheck(1);
}
function choseThree() {
  answerCheck(2);
}
function choseFour() {
  answerCheck(3);
}
var userAnswer = "";

function answerCheck() {
  userAnswer = questionStart();
  if (
    quizQuestions[quizQuestionsIndex].correct ===
    quizQuestions[quizQuestionsIndex].answers[correct]
  ) {
    totalTime += 10;
    timeLeft.textContent = totalTime;
  } else {
    totalTime -= 10;
    timeLeft.textContent = totalTime;
  }
}

//quiz questions
//

// //dom elements
// var timer = document.getElementById("timer");
// var timeLeft = document.getElementById("timeLeft");
// var timeDone = document.getElementById("timeDone");
// var startButton = document.getElementById("start-button");
// var quizConatiner = document.getElementById("quiz");
// var resultsContainer = document.getElementById("results");
// var submitQuiz = document.getElementById("submitQuiz");

// var answerOne = document.getElementById("answerOne");
// var answerTwo = document.getElementById("answerTwo");
// var answerThree = document.getElementById("answerThree");
// var answerFour = document.getElementById("answerFour");

// var initials = document.getElementById("initials");
// var clearButton = document.getElementById("clearButton");

// //global variables
// var startTimer = setInterval(startTimer, "click");
// var questionEl = 0;
// var allTime = 180;

// //start timer on start button click
// function startQuiz() {
//   questionEl = 0;
//   allTime = 180;
//   timeLeft.textContent = allTime;
//   initials.textContent = "";

//   var startTimer = setInterval(function () {
//     allTime--;
//     timeLeft.textContent = allTime;
//     if (allTime <= 0) {
//       clearInterval(startTimer);
//       if (quizQuestionsIndex < quizQuestions.length - 1) {
//         endQuiz();
//       }
//     }
//   }, 1000);

//   quizGo();
// }

// function quizGo() {
//   startQuestions();
// }

// function startQuestions() {
//   answerOne.textContent = quizQuestions[quizQuestionsIndex].answers[0];
//   answerTwo.textContent = quizQuestions[quizQuestionsIndex].answers[1];
//   answerThree.textContent = quizQuestions[quizQuestionsIndex].answers[2];
//   answerFour.textContent = quizQuestions[quizQuestionsIndex].answers[3];

// }

// function answerReview(correct) {
//   if (
//     quizQuestions[questionEl].correct ===
//     quizQuestions[questionEl].answers[correct]
//   ) {
//     correctAns++;
//     answerReview.textContent = "Correct!";
//   } else {
//     allTime -= 10;
//     timeLeft.textContent = allTime;
//   }

//   questionEl++;
//   if (questionEl < quizQuestions.length) {
//     startQuestions();
//   } else {
//     endQuiz();
//   }
// }
// function answerOne() {
//   answerReview(0);
// }

// function answerTwo() {
//   answerReview(1);
// }
// function answerThree() {
//   answerReview(2);
// }
// function answerFour() {
//   answerReview(3);
// }

// //event listeners
// startButton.addEventListener("click", quizGo);
// answerOne.addEventListener("click", answerOne);
// answerTwo.addEventListener("click", answerTwo);
// answerThree.addEventListener("click", answerThree);
// answerFour.addEventListener("click", answerFour);

// submitQuiz.addEventListener("click", function (event) {
//   storeScores(event);
// });

// clearButton.addEventListener("click", function () {
//   window.localStorage.removeItem("high scores");
//   storeScores.innerHTML = "High Scores Cleared!";
// });

//quiz question array

//storing high scores
// function storeScores(event) {
//   event.preventDefault();

//   if (initials.value === "") {
//     alert("Please enter your initials!");
//     return;
//   }

//   var userScores = localStorage.getItem("high scores");
//   var scoresArray = [];

//   if (userScores === null) {
//     scoresArray = [];
//   } else {
//     scoresArray = JSON.parse(userScores);
//   }

//   var highScores = {
//     initials: initials.value,
//     score: finalScore.textContent,
//   };
//   scoresArray.push(userScores);

//   var scoresString = JSON.stringify(scoresArray);
//   window.localStorage.setItem("high scores", scoresString);

//   storeScores();
// }

// var i = 0;
// function showScores() {
//   var highScores = localStorage.getItem("high scores");
// }
