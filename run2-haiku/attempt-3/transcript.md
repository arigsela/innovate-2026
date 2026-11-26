# Transcript: run 2 with Haiku, attempt 3

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

I created `index.html` in `/Users/arisela/git/ai-innovate-2026/run2-haiku/attempt-3/`. It's a single file with inline CSS and JavaScript, with no libraries and no internet needed, so it works when you double-click it.

**What's in it**
- Four houses, each with a name, a points total, and a bar. All start at 0.
- Each house has **+10** and **-10** buttons. Points never go below 0.
- Each house has a number box and an **Award** button. Only a whole number above 0 is accepted. Anything else shows a friendly message and leaves the points alone.
- **Leader** appears next to the house with the most points, but only once someone has points.
- **Reset** sets every house back to 0.
- Each section of the code has a short comment above it.

**Choices I made that you may want to change**
- **House names and colours** are placeholders: Red, Blue, Green and Yellow. Change them in the `HOUSES` list near the top of the script.
- **Ties:** if two or more houses share the top score, they all show Leader.
- **Bar length:** the leading house gets a full bar, and the others are drawn as a share of that.
- **Award box:** it clears after a successful award.

**Not verified:** I could not run a syntax check or open the page in a browser. My Node check was blocked by a permission prompt. I read through the code instead and found no problems, but please open the file and try the buttons once. The example you gave should work: two clicks on +10 on the first house shows "20 points" with Leader beside its name.
