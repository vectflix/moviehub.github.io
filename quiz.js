const quizName = localStorage.getItem("quizName");
const quizType = localStorage.getItem("quizType");

const quizContainer = document.getElementById("quiz-container");

let quiz = [];
let current = 0;
let score = 0;

// Fetch AI-generated thumbnail (placeholder for now)
async function fetchThumbnail(type, name){
  // Replace with AI or API call
  return "https://via.placeholder.com/150";
}

// Fetch AI-generated quiz (temporary hardcoded until AI backend ready)
async function fetchQuiz(){
  quiz = [
    {question:"What is the genre of this artist?", options:["Pop","Rock","Hip-Hop","Jazz"], answer:0},
    {question:"Which year was the song released?", options:["2019","2020","2021","2022"], answer:1},
    {question:"Which album features the song?", options:["Album1","Album2","Album3","Album4"], answer:2},
    // ... continue to 11 questions
  ];

  const thumbnailURL = await fetchThumbnail(quizType, quizName);
  quizContainer.innerHTML = `<img src="${thumbnailURL}" alt="Thumbnail" class="quiz-thumbnail">`;
  showQuestion();
}

function showQuestion(){
  const q = quiz[current];
  quizContainer.innerHTML += `<h2>${q.question}</h2><div id="options"></div>`;
  const optionsDiv = document.getElementById("options");
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(idx){
  if(idx === quiz[current].answer) score++;
  current++;
  if(current < quiz.length) showQuestion();
  else showResult();
}

function showResult(){
  const percentage = Math.round((score/quiz.length)*100);
  const thumbnailURL = "https://via.placeholder.com/150"; // Replace with AI/API

  quizContainer.innerHTML = `
    <div id="result-container" class="result-card">
      <img src="${thumbnailURL}" alt="Thumbnail" class="result-thumbnail">
      <h2>🎵 Quiz Completed! 🎵</h2>
      <p>You scored ${percentage}% (${score}/${quiz.length})</p>
      <p>${quizName} ${quizType} Quiz</p>
      <button id="share-btn">Share as Image</button>
      <button onclick="window.location.href='index.html'">Try Another Quiz</button>
    </div>
  `;

  document.getElementById("share-btn").onclick = () => {
    const container = document.getElementById("result-container");
    html2canvas(container).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "quiz-score.png";
      link.click();
      alert("Image ready! Upload it to Instagram Story.");
    });
  }
}

fetchQuiz();
