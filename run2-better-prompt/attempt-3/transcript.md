# Transcript: run 2 (better model), attempt 3

## Prompt

````
Build a web page called index.html: a house points scoreboard for our school's Spirit Week.

What it does:
- Shows four houses. Each house has a name, its points as a number, and a bar that gets longer as the house gets more points.
- Every house starts at 0 points.
- Each house has a button labelled +10 that adds 10 points, and a button labelled -10 that takes 10 points away.
- Each house also has a number box and a button labelled Award. Clicking Award adds the typed number of points to that house.
- The house with the most points shows the word Leader next to its name.
- A button labelled Reset sets every house back to 0.

Rules:
- Use only plain HTML, CSS and JavaScript, no libraries. The page must work when I double-click the file, with no internet.
- Points can never go below 0.
- The typed number must be a whole number greater than 0. If it is not, show a friendly message on the page and do not change the points.
- Add a short comment above each section of the code explaining what it does.

Example: if I click +10 twice on the first house, it shows 20 points and the word Leader.

Before writing code, list the steps you will take.
````

## Response

`index.html` is written, but I could not test it: the commands to run a browser or a script check were blocked here. I have only read the code through against your rules, so please double-click the file and try your "+10 twice" example before Spirit Week.

A few choices I made where your brief was open:

- **House names:** you didn't give any, so I used Red House, Blue House, Green House and Gold House. They are in a short list at the top of the script (`HOUSES`), where you can change the names and colours.
- **Ties:** if two houses share the top score, both show Leader. While everyone is on 0, nobody shows Leader.
- **Bar length:** the bar always gets longer with more points, but it grows more slowly as it fills, so it can never run off the end. This means a house with double the points does not get a bar exactly twice as long; the number beside it is the exact score.
- **Award box:** after a successful Award the box is cleared, and pressing Enter in the box works the same as clicking Award. The friendly message appears under that house's buttons and disappears on the next valid change.
- **-10 near zero:** a house on 5 points goes to 0, not below.

Two things to know before you use it:

- **Scores are not saved.** Refreshing or closing the page puts every house back to 0, as "every house starts at 0" implies. If you want scores to survive across the week, I can add that.
- **Reset is immediate.** It does not ask "are you sure?", and there is no undo.
