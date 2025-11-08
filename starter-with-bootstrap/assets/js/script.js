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

  // Result modal bits (Bootstrap)
  const resultModalEl = document.getElementById('resultModal');
  // Note: bootstrap.Modal is provided by the Bootstrap bundle (ensure <script src="...bootstrap.bundle.min.js">)
  const resultModal = new bootstrap.Modal(resultModalEl);
  const finalScore  = document.getElementById('finalScore');
  const finalTime   = document.getElementById('finalTime');
  const restartBtn  = document.getElementById('restartBtn');

  // Initialize total in UI
  // TODO(1): set qTotal's text to total
  // qTotal.textContent = ???

  // -----------------------------
  // 4) RENDER
  // -----------------------------
  function render(){
    // Header + timer labels
    // TODO(2): show current question number (i+1 but capped to total)
    // qIndex.textContent = ???

    // TODO(3): update the score badge text to "Score: X/Y"
    // scoreBadge.textContent = ???

    // TODO(4): update the time label to show remaining seconds like "60s"
    // timeText.textContent = ???

    // Progress bar width & contextual color
    // pct should be the percentage of time remaining (0..100)
    // TODO(5): compute pct = Math.max(0, Math.round((timeLeft/60)*100));
    // const pct = ???

    // TODO(6): set width style and the className based on pct
    // timeBar.style.width = ???
    // timeBar.className = 'progress-bar progress-bar-striped progress-bar-animated ' + (pct < 20 ? 'bg-danger' : pct < 50 ? 'bg-warning' : 'bg-success');

    // End state: out of questions OR time is up
    if (/* TODO(7): check end condition (i >= total || timeLeft <= 0) */ false) {
      endQuiz();
      return;
    }

    // Render current question and choices
    const q = questions[i];

    // TODO(8): set the question text
    // qText.textContent = ???

    // TODO(9): clear previous choices (set innerHTML = '')
    // choices.innerHTML = ???

    // Create a button for each choice
    q.choices.forEach((label, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-light text-dark choice-btn rounded-3';
      btn.innerHTML = `<span class="me-2 fw-semibold">${String.fromCharCode(65+idx)}.</span> ${label}`;

      // TODO(10): on click, call handleChoice with a boolean indicating correctness
      // btn.addEventListener('click', () => handleChoice( ??? ));

      choices.appendChild(btn);
    });

    // Accessibility: move focus to first choice
    const firstBtn = choices.querySelector('button');
    if (firstBtn) firstBtn.focus();
  }

  // -----------------------------
  // 5) HANDLERS
  // -----------------------------
  function handleChoice(isCorrect){
    // TODO(11): if correct, increment score and show a green badge
    // if (isCorrect) { score++; feedback.innerHTML = '<span class="badge bg-success">Correct ✓</span>'; }
    // else { feedback.innerHTML = '<span class="badge bg-danger">Incorrect ✗</span>'; }

    // OPTIONAL: time penalty (uncomment if you add it)
    // else { timeLeft = Math.max(0, timeLeft - 5); }

    // TODO(12): advance to next question index (i++)
    // i = ???

    // Show feedback briefly, then re-render
    setTimeout(() => {
      feedback.textContent = '';
      render();
    }, 400);
  }

  // -----------------------------
  // 6) TIMER
  // -----------------------------
  function tick(){
    // TODO(13): decrement timeLeft but not below 0
    // timeLeft = ???

    // TODO(14): if timeLeft is 0, stop the timer (clearInterval)
    // if ( ??? ) { clearInterval(timerId); }

    // Re-render UI to reflect new time
    render();
  }

  function startTimer(){
    // TODO(15): create an interval that calls tick every 1000ms
    // timerId = setInterval( ??? , 1000);
  }

  // -----------------------------
  // 7) END + RESTART
  // -----------------------------
  function endQuiz(){
    // TODO(16): stop the timer if it's still running
    // if (timerId) { clearInterval(timerId); timerId = null; }

    // TODO(17): fill in finalScore and finalTime (e.g., "7 / 10" and "12s")
    // finalScore.textContent = ???
    // finalTime.textContent = ???

    // Show Bootstrap modal
    resultModal.show();
  }

  function restart(){
    // TODO(18): reset i, score, timeLeft; then render() and startTimer()
    // i = ???; score = ???; timeLeft = ???;
    // render();
    // startTimer();
  }

  // -----------------------------
  // 8) EVENTS & INIT
  // -----------------------------
  // Skip just advances the question index; do not change score
  // TODO(19): implement the skip click handler
  // skipBtn.addEventListener('click', () => { ??? });

  // Restart from modal button
  // TODO(20): implement restart click handler
  // restartBtn.addEventListener('click', ???);

  // Initial render + timer start
  // TODO(21): call render() and startTimer()
  // render();
  // startTimer();
})();
