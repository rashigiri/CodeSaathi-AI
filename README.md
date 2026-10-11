# CodeSaathi AI

**Learn Code. Understand Better. Build Smarter.**

A beginner-friendly, AI-free programming learning web application built with pure HTML, CSS, and JavaScript. No build tools, no dependencies, no paid APIs — just open the file and start learning.

---

## Live Demo

Deploy to GitHub Pages in seconds (see instructions below).

---

## Features

| Feature | Description |
|---|---|
| 📚 **Learn** | Browse 12+ programming concepts across Python, JavaScript, and General CS. Click any card to read a full explanation with code examples. |
| 🔍 **Code Explainer** | Select from 5 real code examples and read a plain-English, line-by-line breakdown of exactly what each line does. |
| 🐛 **Error Guide** | Search through 14 common beginner errors. Each entry shows the cause, the fix, and a corrected code example. |
| ✏️ **Practice** | Answer 12 multiple-choice questions organised by topic. Get instant feedback, hints, and detailed explanations. |
| 📊 **Progress** | Tracks concepts read and exercises completed in your browser (localStorage). Visual progress bars per topic. |

---

## Honesty Notice

> This app uses **curated, hand-written content** — not a live AI model.  
> There is no API call, no code execution, and no AI-generated response.  
> All explanations, error guides, and exercises are pre-written by a human.  
> This is clearly stated in the app UI.

---

## Project Structure

```
CodeSaathi-AI/
├── index.html    — Single-page application shell + all section markup
├── style.css     — Full design system (blue/purple theme, responsive)
├── script.js     — All application logic + data (concepts, errors, exercises)
└── README.md     — This file
```

---

## How to Run Locally

### Option 1 — Open Directly (simplest)

1. Download or clone this repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. That's it — no server needed.

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/CodeSaathi-AI.git

# Open
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Option 2 — Local Development Server

If you have Python installed:

```bash
# Python 3
python -m http.server 3000

# Then open: http://localhost:3000
```

If you have Node.js / npx:

```bash
npx serve .
```

---

## Deploy to GitHub Pages

1. Push your files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose `main` branch and `/ (root)` folder.
5. Click **Save**.
6. Your app will be live at `https://YOUR_USERNAME.github.io/CodeSaathi-AI/`

---

## How Each Feature Works

### Learn (Concepts)
- 12 programming concept entries stored in the `CONCEPTS` array in `script.js`.
- Filter buttons (`All / Python / JavaScript / General CS`) filter the array client-side.
- Clicking a card opens a modal with the full explanation, code example, and a pro tip.
- Reading a concept marks it as done in `localStorage`.

### Code Explainer
- 5 pre-loaded examples in the `CODE_EXAMPLES` array.
- Each example stores the raw code string and a `lines` array — one object per line with a plain-English explanation.
- Selecting from the dropdown renders the code panel and explanation panel side-by-side.

### Error Guide
- 14 common errors in the `ERRORS` array.
- A text search box filters by error name, cause, or fix text (case-insensitive substring match).
- Language filter buttons further narrow results.
- Expandable code examples show correct vs. incorrect patterns.

### Practice
- 12 multiple-choice questions in the `EXERCISES` array.
- Filter by topic: Variables, Loops, Functions, Arrays.
- Clicking an answer immediately marks correct/wrong options with colour feedback, saves the result, and shows a badge.
- Hint and Answer buttons toggle inline boxes below the question.
- All results persist across page reloads via `localStorage`.

### Progress
- Reads `cs_concepts_read` and `cs_exercise_results` from `localStorage`.
- Shows 5 stat cards: concepts read, total concepts, exercises attempted, correct answers, overall score.
- Shows per-topic progress bars for 7 topics.
- A "Reset All Progress" button clears both localStorage keys (with confirmation dialog).

---

## Adding More Content

All content is in plain JavaScript arrays at the top of `script.js`. No database or API needed.

**Add a new concept:**
```js
{
  id: 'my-unique-id',
  lang: 'python',           // 'python' | 'javascript' | 'general'
  title: 'My Topic',
  desc: 'One-line description for the card.',
  topic: 'MyTopic',         // used for progress grouping
  explanation: 'Long explanation text...',
  example: `code goes here`,
  note: 'Optional tip shown at the bottom of the modal.'
}
```

**Add a new exercise:**
```js
{
  id: 'q-unique',
  topic: 'variables',       // 'variables' | 'loops' | 'functions' | 'arrays'
  question: 'Your question text?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  answer: 0,                // 0-based index of the correct option
  hint: 'A clue...',
  explanation: 'Full explanation shown after answering.'
}
```

---

## Technology

- **HTML5** — Semantic markup, single-page app with `display` toggling
- **CSS3** — Custom properties, CSS Grid, Flexbox, responsive breakpoints
- **JavaScript (ES6+)** — No frameworks, no bundler, runs in any modern browser
- **localStorage** — Browser-native persistence, no server or database required

---

## Browser Compatibility

Works in all modern browsers. Requires JavaScript to be enabled.

| Browser | Supported |
|---|---|
| Chrome 80+ | ✅ |
| Firefox 75+ | ✅ |
| Edge 80+ | ✅ |
| Safari 13.1+ | ✅ |

---

## Built For

IBM Bob Innovation Event — Build with IBM Bob  
Category: Beginner Developer Tools / EdTech

---

## License

MIT — free to use, modify, and distribute.
