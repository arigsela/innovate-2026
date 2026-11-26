# Transcript: run 2 with Haiku, attempt 2

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

I built `index.html` in the project folder, but I have not run it. Writing my test file to `/tmp` and running a syntax check with Node were both blocked by permission prompts, so I checked the code by reading it. Please open the file in a browser and try it before using it at Spirit Week.

**What's in it**
- Four houses (Red, Blue, Green, Gold), each with a name, a points number, and a bar. Every house starts at 0.
- Each house has +10, -10, a number box, and Award. Reset sits at the top.
- Points never go below 0. Award only accepts whole numbers above 0. Anything else shows a friendly message under that house and leaves the points alone.
- The bar length is a share of the top score, so the leading house's bar is full.
- Everything is in one file with inline CSS and JavaScript. It uses no libraries and no internet.
- Each section of code has a short comment above it.

**Choices I made that you can change**
- **House names and colours:** I made them up. Edit the `HOUSES` list at the top of the script.
- **Leader on ties:** if two houses share the top score, both show Leader.
- **No Leader at the start:** the badge only appears once the top score is above 0, so the all-zero start doesn't mark all four houses.
- **Number box clears after a good award,** and pressing Enter in the box also awards.
- **Reset does not ask for confirmation** and does not clear the number boxes. It clears the points and the messages.

**Still to check in a browser**
- Your example: +10 twice on the first house should show 20 and Leader.
- Award with a blank box, `2.5`, `0`, or `-3` should show the message and leave the points unchanged.
