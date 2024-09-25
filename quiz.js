// quiz.js

function getRandomQuestions(qBank, num) {
    // Create a copy of the question bank to avoid modifying the original array
    const shuffled = qBank.slice();
  
    // Implement Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  
    // Return the first 'num' questions from the shuffled array
    return shuffled.slice(0, num);
  }
  
  const quizQuestions = getRandomQuestions(questionBank, 10);
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion(index) {
    const question = quizQuestions[index];
    document.getElementById('question-number').innerText = `Question ${index + 1}`;
    document.getElementById('question-text').innerText = question.question;
  
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';
  
    // Create an array of option indices
    const optionIndices = [0, 1, 2, 3];
    // Shuffle the option indices
    for (let i = optionIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionIndices[i], optionIndices[j]] = [optionIndices[j], optionIndices[i]];
    }
  
    optionIndices.forEach((optionIndex) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.innerText = question.options[optionIndex];
      button.dataset.optionIndex = optionIndex; // Store the original option index
      button.addEventListener('click', function() {
        handleOptionClick(this);
      });
      li.appendChild(button);
      optionsList.appendChild(li);
    });
  
    const feedback = document.getElementById('feedback');
    feedback.innerText = '';
    feedback.classList.remove('feedback-correct', 'feedback-incorrect');
  
    document.getElementById('next-button').disabled = true;
  }
  
  function handleOptionClick(selectedButton) {
    const selectedIndex = parseInt(selectedButton.dataset.optionIndex);
    const question = quizQuestions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('#options-list button');
  
    // Clear previous feedback classes
    feedback.classList.remove('feedback-correct', 'feedback-incorrect');
  
    if (selectedIndex === question.correctAnswerIndex) {
      score++;
      feedback.innerText = 'Correct!';
      feedback.classList.add('feedback-correct'); // Add green color
      // Add correct-answer class to the selected button
      selectedButton.classList.add('correct-answer');
    } else {
      feedback.innerText = `Incorrect. The correct answer is "${question.options[question.correctAnswerIndex]}". ${question.explanation}`;
      feedback.classList.add('feedback-incorrect'); // Add red color
      // Add incorrect-answer class to the selected button
      selectedButton.classList.add('incorrect-answer');
      // Highlight the correct answer
      buttons.forEach(button => {
        if (parseInt(button.dataset.optionIndex) === question.correctAnswerIndex) {
          button.classList.add('correct-option');
        }
      });
    }
  
    // Disable all option buttons
    buttons.forEach(btn => btn.disabled = true);
  
    document.getElementById('next-button').disabled = false;
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      showFinalScore();
    }
  }
  
  function showFinalScore() {
    const quizContainer = document.getElementById('quiz-container');
    const percentageScore = (score / quizQuestions.length) * 100;
    const passMark = 80; // Pass mark is 80%
  
    let resultMessage = '';
    if (percentageScore >= passMark) {
      resultMessage = `<p class="pass-message">Congratulations! You passed the quiz.</p>`;
    } else {
      resultMessage = `<p class="fail-message">Sorry, you did not pass the quiz. Please try again.</p>`;
    }
  
    quizContainer.innerHTML = `
      <h2>Your Score: ${score} out of ${quizQuestions.length}</h2>
      <h3>Percentage: ${percentageScore.toFixed(2)}%</h3>
      ${resultMessage}
      <button id="restart-button">Restart Quiz</button>
    `;
  
    // Add event listener for the restart button
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
  }
  
  function restartQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
  
    // Generate new set of random questions
    quizQuestions.splice(0, quizQuestions.length, ...getRandomQuestions(questionBank, 10));
  
    // Restore the quiz container content
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
      <div id="question-number"></div>
      <div id="question-text"></div>
      <ul id="options-list"></ul>
      <div id="feedback"></div>
      <button id="next-button" disabled>Next</button>
    `;
  
    // Re-add the event listener for the next button
    document.getElementById('next-button').addEventListener('click', handleNextButton);
  
    // Start the quiz
    displayQuestion(currentQuestionIndex);
  }
  
  document.getElementById('next-button').addEventListener('click', handleNextButton);
  
  // Start the quiz
  displayQuestion(currentQuestionIndex);
  