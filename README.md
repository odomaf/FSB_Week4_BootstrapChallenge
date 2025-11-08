# 🧠 Timed Quiz — Starter & Bootstrap Versions

Two parallel implementations with clean separation of concerns.  
Your goal: build and customize a **timed 10-question JavaScript quiz** that tracks score, runs a countdown, and displays results at the end.

---

## 🎯 Goal

Create a quiz game that:
- Displays one question at a time from an **array of objects**.
- Allows users to select from 3–4 multiple-choice answers.
- Runs a **60-second countdown timer**.
- Tracks the number of correct answers.
- Ends when all questions are answered **or** the timer reaches 0.
- Displays the final score clearly at the end.

### Example Question Data
```js
var questions = [
  { q: 'What does DOM stand for?', choices: ['Data Object Map','Document Object Model','Document Oriented Markup'], answer: 1 },
  { q: 'Strict equality operator?', choices: ['==','===','!='], answer: 1 }
];
```

---

## 🗂️ Project Structure

```text
timed-quiz/
├── starter/
│   ├── index.html
│   └── assets/
│       ├── css/
│       │   └── style.css
│       └── js/
│           ├── script.js
│           └── script.commented.js   ← Fully commented reference solution (when released)
└── starter-with-bootstrap/
    ├── index.html
    └── assets/
        ├── css/
        │   └── style.css
        └── js/
            ├── script.js
            └── script.commented.js   ← Fully commented reference solution (when released)
```

- **Starter** → Minimal HTML & vanilla JS. Blank canvas to focus on logic and DOM manipulation.
- **Bootstrap** → Colorful UI with progress bar, modal, and badges using Bootstrap 5.

---

## 🚀 Quick Start

1. Open `starter/index.html` or `bootstrap/index.html` directly in a browser.  
2. Only modify files inside `assets/js/` and `assets/css/` to practice **separation of concerns**.  
3. Edit the `questions` array in `assets/js/script.js` to include your own quiz content.  
4. When finished, deploy your quiz via **GitHub Pages** and submit the URL.

---

## ✅ Core Requirements

- [ ] Display one question at a time.
- [ ] Each question has 3–4 answer buttons.
- [ ] Add a **60-second timer** that counts down every second.
- [ ] When a user clicks an answer:
  - Check if it’s correct.
  - Update the score.
  - Move to the next question.
- [ ] When time runs out **or** all questions are answered:
  - Stop the timer.
  - Display the final score.
- [ ] Use `setInterval()` for the timer.
- [ ] Use DOM methods like `createElement()`, `appendChild()`, and `textContent`.

---

## 🧩 Stretch Goals (Optional Enhancements)

- **Time penalty:** subtract 5 seconds for incorrect answers.  
- **Shuffle:** randomize question or answer order.  
- **LocalStorage:** save and display the best score.  
- **Keyboard shortcuts:** press A/B/C to answer faster.  
- **Accessibility:** focus the first choice on each question; add `aria-live="polite"`.  
- **Theme toggle:** add light/dark mode or color themes.  
- **Progress bar:** visually show time or question progress.

---

## 💡 Instructor Notes

- The **Starter** version dynamically generates all elements with JavaScript and minimal styling.  
- The **Starter with Bootstrap** version demonstrates how to hook logic into a prebuilt UI.  
- Encourage students to **customize** both appearance and logic once core functionality works.

---

## 📦 Submission

Submit your:
1. **GitHub repository URL**
2. **GitHub Pages deployed link**

Make sure both the quiz logic and styling work before submission.

