const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
];

let currentQuestionIndex = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion) {
    const optionsHtml = currentQuestion.options
      .map(
        (option) =>
          `<button onclick="checkAnswer('${option}')">${option}</button>`
      )
      .join("");
    questionContainer.innerHTML = `
            <h2>${currentQuestion.question}</h2>
            ${optionsHtml}
        `;
  } else {
    questionContainer.innerHTML = "<h2>Quiz completed!</h2>";
  }
}

function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (userAnswer === currentQuestion.correctAnswer) {
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Wrong! The correct answer is ${currentQuestion.correctAnswer}.`;
  }
}

function nextQuestion() {
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";

  currentQuestionIndex++;
  displayQuestion();
}

displayQuestion();
