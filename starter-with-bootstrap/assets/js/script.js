// script.js — Timed Quiz (Bootstrap UI) — UNSOLVED SCAFFOLD
// Instructions:
// 1) Fill in each TODO step in order.
// 2) Keep logic inside the IIFE to avoid globals.
// 3) Use console.log() liberally while building (DevTools > Console).

(function(){
  'use strict';

  // -----------------------------
  // 1) DATA (students: swap this out with your own data if you want!)
  // -----------------------------
  const questions = [
    { q: 'What does DOM stand for?', choices: ['Data Object Map','Document Object Model','Document Oriented Markup'], answer: 1 },
    { q: 'Strict equality operator?', choices: ['==','===','!='], answer: 1 },
    { q: 'Method to select one element?', choices: ['getElementsByClassName','querySelectorAll','querySelector'], answer: 2 },
    { q: 'Add an event listener?', choices: ['onClick','addEventListener','attachEvent'], answer: 1 },
    { q: 'LocalStorage stores…', choices: ['Only objects','Only numbers','Strings'], answer: 2 },
    { q: 'Stop an interval?', choices: ['cancelInterval','clearInterval','stopInterval'], answer: 1 },
    { q: 'Array last index?', choices: ['length','length-1','length+1'], answer: 1 },
    { q: 'Prevent form default?', choices: ['event.preventDefault()','event.stop()','event.block()'], answer: 0 },
    { q: 'Create element?', choices: ['document.makeElement','document.createElement','new HTMLElement()'], answer: 1 },
    { q: 'Get attribute?', choices: ['el.attr()','el.getAttribute()','el.attribute()'], answer: 1 }
  ];

  // -----------------------------
  // 2) STATE
  // -----------------------------
  let i = 0;               // current question index
  let score = 0;           // number of correct answers
  const total = questions.length;
  const maxTime = 60;
  let timeLeft = 60;       // seconds remaining
  let timerId = null;      // holds the setInterval id


  // -----------------------------
  // 3) ELEMENT REFERENCES
  // -----------------------------
  // These IDs must exist in your HTML
  const qText   = document.getElementById('questionText');
  const qIndex  = document.getElementById('qIndex');
  const qTotal  = document.getElementById('qTotal');
  const choices = document.getElementById('choices');

  const timeText  = document.getElementById('timeText');
  const timeBar   = document.getElementById('timeBar');
  const scoreBadge = document.getElementById('scoreBadge');
  const feedback   = document.getElementById('feedback');
  const skipBtn    = document.getElementById('skipBtn');
  //const mainEl = document.querySelector('.container');

  // Result modal bits (Bootstrap)
  const resultModalEl = document.getElementById('resultModal');
  // Note: bootstrap.Modal is provided by the Bootstrap bundle (ensure <script src="...bootstrap.bundle.min.js">)
  const resultModal = new bootstrap.Modal(resultModalEl);
  const finalScore  = document.getElementById('finalScore');
  const finalTime   = document.getElementById('finalTime');
  const restartBtn  = document.getElementById('restartBtn');
  const stopRestartBtn = document.getElementById('stopRestartBtn');

  // Initialize total in UI
  // TODO(1): set qTotal's text to total
  qTotal.textContent = 10;

  // -----------------------------
  // 4) RENDER
  // -----------------------------
  function render(){

    // TODO(2): show current question number (i+1 but capped to total)

    if (qIndex.textContent < total){
      qIndex.textContent = i+1;
      // console.log(`qIndex: ${qIndex.textContent}`);
    }
    // TODO(3): update the score badge text to "Score: X/Y"
    scoreBadge.textContent = `Score: ${score}/${total}`;
    // End state: out of questions OR time is up
    if (i >= total || timeLeft <= 0) {
      endQuiz();
      return;
    }
    // Render current question and choices
    const question = questions[i];
    // console.log(`Question: ${question.q}`);

    // TODO(8): set the question text
    qText.textContent = question.q;

    // TODO(9): clear previous choices (set innerHTML = '')
    choices.innerHTML = '';

    // Create a button for each choice
    question.choices.forEach((label, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-light text-dark choice-btn rounded-3';
      btn.innerHTML = `<span class="me-2 fw-semibold">${String.fromCharCode(65+idx)}.</span> ${label}`;

      // TODO(10): on click, call handleChoice with a boolean indicating correctness
      btn.addEventListener('click', function(){
        let correctness = false;
        if (question.answer == idx){
          correctness = true;
        }
        handleChoice(correctness);
      })
      choices.appendChild(btn);
    });

    // Accessibility: move focus to first choice
    const firstBtn = choices.querySelector('button');
    if (firstBtn) firstBtn.focus();
  }

  function renderCountdownOnly(){
    // console.log('re-rendering timer elements only'); 
    timeText.textContent = timeLeft;

    // Progress bar width & contextual color
    let pct = Math.round((timeLeft/maxTime)*100);
    // console.log(`Percent time remaining: ${pct}`);

    timeBar.style.width = `${pct}%`;
    timeBar.className = 'progress-bar progress-bar-striped progress-bar-animated ' + 
      (pct < 20 ? 'bg-danger' : pct < 50 ? 'bg-warning' : 'bg-success');
  }

  // -----------------------------
  // 5) HANDLERS
  // -----------------------------
  function handleChoice(isCorrect){
    // console.log(`Is correct? ${isCorrect}`);
    // TODO(11): if correct, increment score and show a green badge
    if (isCorrect) {
      score++;
      // console.log(`Current score: ${score}`);
      feedback.innerHTML = '<span class="badge bg-success">Correct ✓</span>'; 
    } else { 
      feedback.innerHTML = '<span class="badge bg-danger">Incorrect ✗ - have 5 more seconds for free!</span>'; 
      timeLeft = Math.max(0, timeLeft + 5);
    }

    // OPTIONAL: time penalty (uncomment if you add it)
    // else { timeLeft = Math.max(0, timeLeft - 5); }

    // TODO(12): advance to next question index (i++)
    i++;
    render();
  }

  // -----------------------------
  // 6) TIMER
  // -----------------------------
  function tick(){
    // TODO(13): decrement timeLeft but not below 0
    timeLeft--;
    // console.log(`timeLeft = ${timeLeft}`);

    // TODO(14): if timeLeft is 0, stop the timer (clearInterval)
    if (timeLeft == 0){
      clearInterval(timerId);
      timerId = null;
    }
    // Re-render UI to reflect new time
    renderCountdownOnly();
  }

  function startTimer(){
    // TODO(15): create an interval that calls tick every 1000ms
    timerId = setInterval( tick , 1000);
  }

  // -----------------------------
  // 7) END + RESTART
  // -----------------------------
  function endQuiz(){
    // TODO(16): stop the timer if it's still running
    if (timerId){
      clearInterval(tick);
      timerId = null; 
    }
    

    // TODO(17): fill in finalScore and finalTime (e.g., "7 / 10" and "12s")
    finalScore.textContent = score;
    finalTime.textContent = timeLeft;

    // Show Bootstrap modal
    resultModal.show();
  }

  function restart(){
    // TODO(18): reset i, score, timeLeft; then render() and startTimer()
    i = 0; score = 0; timeLeft = 60;
    render();
    startTimer();
  }

  // -----------------------------
  // 8) EVENTS & INIT
  // -----------------------------

  // TODO(19): implement the skip click handler
  skipBtn.addEventListener('click', () => { 
    i++;
    render() 
  });

  // TODO(20): implement restart click handler
  restartBtn.addEventListener('click', restart);
  stopRestartBtn.addEventListener('click', restart);
  // Initial render + timer start
  // TODO(21): call render() and startTimer()
  render();
  startTimer();
})();
