//global variables
var quizConatiner = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startTimer = setInterval(startTimer, "click");
var quizTracker = 0;

// timer on button click function
function startTimer() {
  // var countdown =
}
//button to start quiz
var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

//start quiz function
function startQuiz() {
  //   var question = `<h3>${quizQuestions[quizTracker].question}</h3>`;
  //   var answers = `<ul><li class = 'quizAnswers'>${quizQuestions[quizTracker].answers.a}</li><li>${quizQuestions[quizTracker].answers.b}</li>
  //   <li>${quizQuestions[quizTracker].answers.c}</li><li>${quizQuestions[quizTracker].answers.d}</li></ul>`;

  var answerStuf = document.createElement("ul");
  for (var key in quizQuestions[quizTracker].answers) {
    var answerShape = document.createElement("li");
    answerShape.textContent = quizQuestions[quizTracker].answers[key];
    //   answerShape.addEventListener('click',)
    answerStuf.append(answerShape);
  }
  quizConatiner.innerHTML = `${question} ${answers}`;

  quizConatiner.appendChild(answerStuf);
}

//quiz questions
var quizQuestions = [
  {
    question: "Which is one of my dogs names?",
    answers: {
      a: "Rufus",
      b: "Squidward",
      c: "Shadow",
      d: "Fido",
    },
    correct: "c",
  },
  {
    question: "What is the name of my second dog?",
    answers: {
      a: "Isabelle",
      b: "Ranger",
      c: "Feather",
      d: "Scout",
    },
    correct: "d",
  },
  {
    question: "What is my dogs' favorite activity?",
    answers: {
      a: "sleeping on the couch",
      b: "fetch",
      c: "hiking",
      d: "barking at random noises",
    },
    correct: "b",
  },
  {
    question: "What is Shadow's favorite snack",
    answers: {
      a: "whatever I'm eating at the moment",
      b: "carrots",
      c: "dog treats",
      d: "scrambled eggs",
    },
    correct: "a",
  },
  {
    question: "What color are both of my dogs?",
    answers: {
      a: "golden",
      b: "light brown",
      c: "black with white racing stripes",
      d: "hypoallergenic- furless dogs",
    },
    correct: "c",
  },
  {
    question: "Which of my dogs is older?",
    answers: {
      a: "Shadow",
      b: "Scout",
      c: "Rufus",
      d: "Fido",
    },
    correct: "a",
  },
];

function buildQuiz() {
  var output = [];

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    var answers = [];

    for (letter in quizQuestions.answers) {
    }
  });
  quizConatiner.innerHTML = output.join("");
}

function showResults() {
  var answerContainer = quizConatiner.querySelectorAll(".answers");

  var numCorrect = 0;

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
