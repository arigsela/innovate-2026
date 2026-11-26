# Run 2: every message we sent

Run 2 uses the powerful model (`claude-fable-5-2` in Claude Code) with the same request as run 1. It is one message and one answer. There are no follow-ups: we did not ask it to explain, and we did not paste any errors back.

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

## Follow-ups

None. All three attempts passed 8 of 8 prompt checks on the first answer.

The model's answer is in each attempt's `transcript.md`.
