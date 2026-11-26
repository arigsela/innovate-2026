# Transcript: run 2 with Haiku, attempt 1

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

I created `index.html` in `/Users/arisela/git/ai-innovate-2026/run2-haiku/attempt-1/`. It is one file with inline CSS and JavaScript, with no libraries or internet access needed.

**I could not run it.** Bash commands were blocked for approval partway through, so I checked the code by reading it, not in a browser. Please double-click the file and try the example: click +10 twice on a house and it should show 20 points with the Leader label.

What the page does:
- **Four houses**, each with a name, a point total, and a bar. The bar length is relative to the top house, so the leader's bar is full and the others scale against it.
- **+10 and -10 buttons** change a house's points by 10. Points are clamped at 0.
- **Number box and Award button.** Only a whole number greater than 0 is accepted. Anything else (blank, `0`, `-5`, `1.5`) shows a friendly message in that house's card and leaves the points unchanged.
- **Leader label** appears on the house with the most points, but only once someone has points, so all-zero shows no Leader.
- **Reset** sets every house to 0 and clears any warning messages.
- **Comments** sit above each section of the HTML, CSS and JavaScript.

Choices I made that you may want to change:
- **House names and colours are placeholders** (Red, Blue, Green, Gold). They are in one list near the top of the script.
- **Ties show "Leader" on every tied house**, since the brief didn't say.
- **A successful Award clears the number box.** A warning message clears when that house's points change.
- **Reset has no confirmation prompt**, since you didn't ask for one.
