# Run 3: every message we sent

Run 3 uses the same model and the same request as run 2. The only change is a rules file, `CLAUDE.md`, that already sits in the project folder. We did not type the rules file. The agent reads it by itself when it starts in the folder.

## Message 1: the request

> Build a web page called index.html: a house points scoreboard for our school's Spirit Week.
> 
> What it does:
> - Shows four houses. Each house has a name, its points as a number, and a bar that gets longer as the house gets more points.
> - Every house starts at 0 points.
> - Each house has a button labelled +10 that adds 10 points, and a button labelled -10 that takes 10 points away.
> - Each house also has a number box and a button labelled Award. Clicking Award adds the typed number of points to that house.
> - The house with the most points shows the word Leader next to its name.
> - A button labelled Reset sets every house back to 0.
> 
> Rules:
> - Use only plain HTML, CSS and JavaScript, no libraries. The page must work when I double-click the file, with no internet.
> - Points can never go below 0.
> - The typed number must be a whole number greater than 0. If it is not, show a friendly message on the page and do not change the points.
> - Add a short comment above each section of the code explaining what it does.
> 
> Example: if I click +10 twice on the first house, it shows 20 points and the word Leader.
> 
> Before writing code, list the steps you will take.

## The rules file the agent read by itself

This is `rules-file.md`, copied into each attempt folder as `CLAUDE.md`:

> # Project rules
> 
> ## What this project is
> 
> House Cup is the points scoreboard for our high school's Harry Potter themed
> Spirit Week. A teacher shows it on the cafeteria projector and updates it from
> a phone. Students watch it all week.
> 
> ## Our houses (always use these, in this order)
> 
> | House | Main colour | Second colour |
> | --- | --- | --- |
> | Gryffindor | #740001 (scarlet) | #D3A625 (gold) |
> | Hufflepuff | #FFDB00 (yellow) | #000000 (black) |
> | Ravenclaw | #0E1A40 (blue) | #946B2D (bronze) |
> | Slytherin | #1A472A (green) | #AAAAAA (silver) |
> 
> Fill each house's bar with its main colour.
> 
> ## Spirit Week rules (always apply them)
> 
> - One award can be at most 50 points. A bigger number typed for the Award
>   button gets a friendly message on the page and changes nothing.
> - When two or more houses share the highest score, nobody is Leader. Each of
>   those houses shows the word Tied instead. When every house has 0 points,
>   show neither word.
> - Points must survive a page reload, because the projector laptop restarts
>   every morning. Only the Reset button clears them.
> 
> ## How the page must behave
> 
> - Text is at least 18px, and the page fits a 360px-wide phone screen with no
>   sideways scrolling.
> - Never use pop-up alerts. Messages go on the page.
> 
> ## How we write code
> 
> - This project is for beginner programmers. Keep code simple and readable.
> - Use only plain HTML, CSS and JavaScript, no libraries.
> - Put the scoring logic in small functions in scoreboard.js, one job each,
>   with no access to the page. index.html loads scoreboard.js.
> - Every function gets a one-line comment saying what it does.
> - Always write tests in test_scoreboard.js, run with `node test_scoreboard.js`,
>   that cover: adding points, never going below 0, a bad award number, the
>   50-point limit, the leader, a tie, and reset.
> - Run the tests before saying the work is done, and show the results.

## Follow-ups

We sent no follow-up prompts about the app. The agent stopped several times to ask permission to run a command. We answered those requests like this:

- Allowed: `node test_scoreboard.js`, the agent's own tests.
- Declined: anything that read or wrote outside the attempt folder, such as scripts in a temporary folder, the real Chrome browser and a local web server.

A declined request interrupts the agent, and it asks what to do instead. Each time, we sent this one fixed sentence and nothing else:

> Use your best judgment and follow the project rules.

The full list of permission answers is in each attempt's `notes.md`.
