# Project rules

## What this project is

House Cup is the points scoreboard for our high school's Harry Potter themed
Spirit Week. A teacher shows it on the cafeteria projector and updates it from
a phone. Students watch it all week.

## Our houses (always use these, in this order)

| House | Main colour | Second colour |
| --- | --- | --- |
| Gryffindor | #740001 (scarlet) | #D3A625 (gold) |
| Hufflepuff | #FFDB00 (yellow) | #000000 (black) |
| Ravenclaw | #0E1A40 (blue) | #946B2D (bronze) |
| Slytherin | #1A472A (green) | #AAAAAA (silver) |

Fill each house's bar with its main colour.

## Spirit Week rules (always apply them)

- One award can be at most 50 points. A bigger number typed for the Award
  button gets a friendly message on the page and changes nothing.
- When two or more houses share the highest score, nobody is Leader. Each of
  those houses shows the word Tied instead. When every house has 0 points,
  show neither word.
- Points must survive a page reload, because the projector laptop restarts
  every morning. Only the Reset button clears them.

## How the page must behave

- Text is at least 18px, and the page fits a 360px-wide phone screen with no
  sideways scrolling.
- Never use pop-up alerts. Messages go on the page.

## How we write code

- This project is for beginner programmers. Keep code simple and readable.
- Use only plain HTML, CSS and JavaScript, no libraries.
- Put the scoring logic in small functions in scoreboard.js, one job each,
  with no access to the page. index.html loads scoreboard.js.
- Every function gets a one-line comment saying what it does.
- Always write tests in test_scoreboard.js, run with `node test_scoreboard.js`,
  that cover: adding points, never going below 0, a bad award number, the
  50-point limit, the leader, a tie, and reset.
- Run the tests before saying the work is done, and show the results.
