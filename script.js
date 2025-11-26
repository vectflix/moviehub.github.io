// 🔗 CHANGE THIS to your real Render backend URL once it's deployed
const BACKEND_URL = 'https://YOUR-BACKEND-NAME.onrender.com';

let quizType = 'artist';
let quizName = '';

// Set quiz type (artist or song)
function setQuizType(type) {
  quizType = type;
}

// Start button click
document.getElementById('start-btn').onclick = () => {
  quizName = document.getElementById('input-name').value.trim();
  if (!quizName) return alert('Enter a singer or song name!');
  startQuiz();
};

// Clicking on popular artist cards
function selectArtist(name) {
  document.getElementById('input-name').value = name;
  quizName = name;
  startQuiz();
}

async function startQuiz() {
  const home = document.getElementById('home-container');
  const quizContainer = document.getElementById('quiz-container');

  home.style.display = 'none';
  quizContainer.innerHTML = `<p>Loading AI-generated quiz...</p>`;

  try {
    const response = await fetch(`${BACKEND_URL}/generate-quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: quizName, type: quizType })
    });

    if (!response.ok) {
      throw new Error('Backend error');
    }

    const data = await response.json();
    showQuiz(data);
  } catch (err) {
    console.error(err);
    quizContainer.innerHTML = `
      <p>Error generating quiz. Please try again.</p>
      <button onclick="location.reload()">Back Home</button>
    `;
  }
}

function showQuiz(data) {
  const quizContainer = document.getElementById('quiz-container');
  let current = 0;
  let score = 0;

  const questions = data.questions;

  function displayQuestion() {
    if (!questions || questions.length === 0) {
      quizContainer.innerHTML = `
        <p>AI did not return any questions. Try again.</p>
        <button onclick="location.reload()">Back Home</button>
      `;
      return;
    }

    if (current >= questions.length) {
      showResult();
      return;
    }

    const q = questions[current];

    quizContainer.innerHTML = `
      <h2>${q.question}</h2>
      <div id="options"></div>
    `;

    const optionsDiv = document.getElementById('options');

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.onclick = () => {
        if (idx === q.answer) score++;
        current++;
        displayQuestion();
      };
      optionsDiv.appendChild(btn);
    });
  }

  function showResult() {
    const percentage = Math.round((score / questions.length) * 100);

    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Score: ${percentage}% (${score}/${questions.length})</p>
      <button id="share-btn">Share as Image</button>
      <button onclick="location.reload()">Try Another Quiz</button>
    `;

    const shareBtn = document.getElementById('share-btn');
    shareBtn.onclick = () => {
      html2canvas(quizContainer).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'vectflix-quiz-score.png';
        link.click();
      });
    };
  }

  displayQuestion();
}
