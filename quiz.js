// quiz.js

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedMode = '';
let userAnswers = []; // Store user's answers in Test mode

// Event listeners for mode selection
document.getElementById('study-button').addEventListener('click', () => startQuiz('study'));
document.getElementById('test-button').addEventListener('click', showLdapField);

// Start Quiz Function
function startQuiz(mode) {
  selectedMode = mode;

  document.getElementById('mode-selection').style.display = 'none';
  document.getElementById('quiz-title').style.display = 'none';
  document.getElementById('quiz-content').style.display = 'block';

  // Initialize quiz
  quizQuestions = getRandomQuestions(window.questionBank, 10);
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  // Add event listener for Next button
  document.getElementById('next-button').addEventListener('click', handleNextButton);

  displayQuestion(currentQuestionIndex);
}

// Show LDAP Field Function for Test Mode
function showLdapField() {
  selectedMode = 'test';
  document.getElementById('mode-selection').style.display = 'none';
  document.getElementById('quiz-title').style.display = 'none';
  document.getElementById('ldap-field').style.display = 'block';

  // Add event listener for the LDAP 'Next' button
  document.getElementById('ldap-next-button').addEventListener('click', handleLdapNext);

  // Add event listener for Enter key on LDAP input field
  document.getElementById('ldap-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLdapNext();
    }
  });
}

// Handle LDAP 'Next' Button Click
function handleLdapNext() {
  document.getElementById('ldap-error').style.display = 'none'; // Hide LDAP error message

  const ldapValue = document.getElementById('ldap-input').value.trim();

  if (ldapValue === '') {
    // Show error message and prevent proceeding
    document.getElementById('ldap-error').style.display = 'block';
    return;
  } else {
    // Hide error message if any
    document.getElementById('ldap-error').style.display = 'none';
    document.getElementById('ldap-field').style.display = 'none'; // Hide LDAP field
    startQuiz('test'); // Proceed to start the quiz
  }
}

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

  // Highlight the selected answer
  buttons.forEach(btn => btn.classList.remove('selected-answer'));
  selectedButton.classList.add('selected-answer');

  // Disable all option buttons
  buttons.forEach(btn => btn.disabled = true);

  if (selectedMode === 'test') {
    // In Test mode, store the user's answer and proceed without feedback
    userAnswers.push({
      question: question.question,
      options: question.options,
      correctAnswerIndex: question.correctAnswerIndex,
      selectedAnswerIndex: selectedIndex,
      explanation: question.explanation
    });
    document.getElementById('next-button').disabled = false;
  } else {
    // Study mode behavior (provide immediate feedback)
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

    document.getElementById('next-button').disabled = false;
  }
}

function handleNextButton() {
  // In Test mode, update the score here
  if (selectedMode === 'test') {
    const question = quizQuestions[currentQuestionIndex];
    const selectedAnswerIndex = userAnswers[currentQuestionIndex].selectedAnswerIndex;
    if (selectedAnswerIndex === question.correctAnswerIndex) {
      score++;
    }
  }

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

  if (selectedMode === 'test') {
    // Get LDAP input value
    const ldapValue = document.getElementById('ldap-input').value.trim();

    let summaryHTML = `
      <h2>Your Score: ${score} out of ${quizQuestions.length}</h2>
      <h3>Percentage: ${percentageScore.toFixed(2)}%</h3>
      ${resultMessage}
      <p>LDAP: ${ldapValue}</p>
      <div id="summary">
        <h2>Quiz Summary:</h2>
        <ul>
    `;

    userAnswers.forEach((answer, index) => {
      const questionNumber = index + 1;
      const correctAnswerText = answer.options[answer.correctAnswerIndex];
      const userAnswerText = answer.options[answer.selectedAnswerIndex];
      const isCorrect = answer.selectedAnswerIndex === answer.correctAnswerIndex;
      summaryHTML += `
        <li>
          <p class="question-text">Question ${questionNumber}: ${answer.question}</p>
          <p class="${isCorrect ? 'correct-answer' : 'your-answer'}">Your Answer: ${userAnswerText}</p>
          ${!isCorrect ? `<p class="correct-answer">Correct Answer: ${correctAnswerText}</p>` : ''}
          <p class="explanation">${answer.explanation}</p>
        </li>
      `;
    });

    summaryHTML += `
        </ul>
      </div>
      <button id="download-pdf-button">Download Summary as PDF</button>
      <button id="restart-button">Restart Quiz</button>
    `;

    quizContainer.innerHTML = summaryHTML;

    // Add event listener for the restart button
    document.getElementById('restart-button').addEventListener('click', restartQuiz);

    // Add event listener for the Download PDF button
    document.getElementById('download-pdf-button').addEventListener('click', function() {
      downloadSummaryAsPDF(ldapValue);
    });

  } else {
    // Study mode behavior
    quizContainer.innerHTML = `
      <h2>Your Score: ${score} out of ${quizQuestions.length}</h2>
      <h3>Percentage: ${percentageScore.toFixed(2)}%</h3>
      ${resultMessage}
      <button id="restart-button">Restart Quiz</button>
    `;

    // Add event listener for the restart button
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
  }
}

function downloadSummaryAsPDF(ldapValue) {
  const element = document.getElementById('quiz-container');

  const opt = {
    margin:       0.5,
    filename:     `Quiz_Summary_${ldapValue}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };

  // Use html2pdf to generate PDF
  html2pdf().set(opt).from(element).save().catch(error => {
    console.error('Error generating PDF:', error);
    alert('An error occurred while generating the PDF. Please try again.');
  });
}

function restartQuiz() {
  // Reset variables
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  selectedMode = '';

  // Restore the quiz container content
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <h1 id="quiz-title">Cabling Quiz</h1>
    <div id="mode-selection">
      <button id="study-button">Study</button>
      <button id="test-button">Test</button>
    </div>
    <div id="ldap-field" style="display: none;">
      <label for="ldap-input">LDAP:</label>
      <input type="text" id="ldap-input" name="ldap-input" />
      <button id="ldap-next-button">Next</button>
      <p id="ldap-error" class="error-message" style="display: none;">Please enter your LDAP to proceed.</p>
    </div>
    <div id="quiz-content" style="display: none;">
      <div id="question-number"></div>
      <div id="question-text"></div>
      <ul id="options-list"></ul>
      <div id="feedback"></div>
      <button id="next-button" disabled>Next</button>
    </div>
  `;

  // Re-add event listeners
  document.getElementById('study-button').addEventListener('click', () => startQuiz('study'));
  document.getElementById('test-button').addEventListener('click', showLdapField);
}
