const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(-1);

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");
const quizDiv = document.getElementById("quiz");

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  questionText.textContent = question.question;
  optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.className = "option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz";
    input.id = `option${index}`;
    input.value = index;
    input.checked = userAnswers[currentQuestion] === index;
    input.addEventListener("change", () => {
      userAnswers[currentQuestion] = index;
      nextBtn.disabled = false;
      submitBtn.disabled = false;
    });
    const label = document.createElement("label");
    label.htmlFor = `option${index}`;
    label.textContent = option;
    li.appendChild(input);
    li.appendChild(label);
    optionsList.appendChild(li);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = true;
  submitBtn.disabled = true;
  if (currentQuestion === quizData.length - 1) {
    nextBtn.style.cursor = "not-allowed";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }

  // Enable the next/submit button if an answer is already selected
  if (userAnswers[currentQuestion] !== -1) {
    nextBtn.disabled = false;
    submitBtn.disabled = false;
  }
}

function showResult() {
  if (allQuestionsAnswered()) {
    const score = userAnswers.reduce(
      (total, answer, index) =>
        total + (answer === quizData[index].correctAnswer ? 1 : 0),
      0,
    );
    quizDiv.style.display = "none";
    resultDiv.style.display = "block";
    retakeBtn.style.display = "inline-block";
    resultDiv.textContent = `Your score: ${score} out of ${quizData.length}. You ${score >= (1 / 2) * quizData.length ? "passed" : "failed"}!`;
  } else {
    alert("Please answer all questions before submitting.");
  }
}

function allQuestionsAnswered() {
  return userAnswers.every((answer) => answer !== -1);
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (
    userAnswers[currentQuestion] !== -1 &&
    currentQuestion < quizData.length - 1
  ) {
    currentQuestion++;
    loadQuestion();
  }
});

submitBtn.addEventListener("click", showResult);

const retakeBtn = document.getElementById("retake-btn");

function resetQuiz() {
  currentQuestion = 0;
  userAnswers = new Array(quizData.length).fill(-1);
  quizDiv.style.display = "block";
  resultDiv.style.display = "none";
  retakeBtn.style.display = "none";
  loadQuestion();
}

retakeBtn.addEventListener("click", resetQuiz);

loadQuestion();
