# Transcript: run 2 (better model), attempt 1

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

`index.html` is written in your project folder, but I have not been able to run it: the test command needed an approval that wasn't given, and I couldn't open a browser from here. I have only read through the code, tracing your "+10 twice" example by hand, so please double-click the file and try it before Spirit Week.

A few things I decided that you didn't specify:

- **House names**: I used Maple, Oak, Cedar and Birch as placeholders. The names and colours are in a short list at the top of the JavaScript, under the "Settings" comment, so you can change them there.
- **Ties**: if two or more houses share the top score, each one shows Leader. Nobody shows Leader while every house is on 0.
- **Bar length**: a full bar means 100 points. Once a house passes 100, the top house has the full bar and the others are drawn in proportion to it. A small note under the scoreboard says what a full bar currently stands for.
- **Award box**: after a successful award the box is cleared, so a second click can't award the same points twice by accident. Pressing Enter in the box works the same as clicking Award.
- **Friendly message**: it appears under the house whose box had the problem and disappears as soon as you start typing again.
- **Reset**: it works straight away, with no "are you sure?" prompt.

Scores are not saved: closing or refreshing the page puts every house back to 0. I kept it that way because you asked for every house to start at 0, but if the scoreboard needs to survive across the week, I can make it remember the scores on that computer.
