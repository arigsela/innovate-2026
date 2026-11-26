# Run 4: every message we sent

Run 4 uses the same model and the same request as run 3. The only change is a rules file, `CLAUDE.md`, that already sits in the project folder. We did not type the rules file. The agent reads it by itself when it starts in the folder.

## Message 1: the request

> Build a web page called index.html: a grade calculator for high school students.
> 
> What it does:
> - Has one text box where the student types test scores separated by commas, for example: 85, 90, 78
> - Has a button labelled Calculate
> - When the button is clicked, the page shows the average rounded to one decimal place
> - The page shows a letter grade for the average: A = 90-100, B = 80-89, C = 70-79, D = 60-69, F = below 60
> 
> Rules:
> - Use only plain HTML, CSS and JavaScript, no libraries. The page must work when I double-click the file, with no internet.
> - Each score must be a number from 0 to 100. If one is not, show a friendly message on the page and do not show a grade.
> - If the box is empty, show a friendly message on the page.
> - Add a short comment above each section of the code explaining what it does
> 
> Example: if I type 85, 90, 78 and click Calculate, the page shows "Average: 84.3" and "Grade: B".
> 
> Before writing code, list the steps you will take.

## The rules file the agent read by itself

This is `rules-file.md`, copied into each attempt folder as `CLAUDE.md`:

> # Project rules
> 
> ## What this project is
> 
> Grade Checker is a web page that students at our high school use to see where
> they stand in one class. They open it on school Chromebooks and on their phones.
> 
> ## Our school's grading policy (always apply it)
> 
> - When a student enters 4 or more scores, drop the single lowest score before
>   averaging, and say on the page which score was dropped.
> - Choose the letter grade from the average rounded to the nearest whole number,
>   with halves rounding up. So an average of 89.5 is an A. Still display the
>   average to one decimal place.
> - Below 70 is not passing at our school. When the letter grade is D or F, also
>   show the line "Retake needed".
> 
> ## How the page must behave
> 
> - Pressing Enter in the text box does the same as clicking Calculate.
> - Text is at least 18px, and the page fits a 360px-wide phone screen with no
>   sideways scrolling.
> - Never use pop-up alerts. Messages go on the page.
> 
> ## How we write code
> 
> - This project is for beginner programmers. Keep code simple and readable.
> - Use only plain HTML, CSS and JavaScript, no libraries.
> - Put the grading logic in small functions in grader.js, one job each, with no
>   access to the page. index.html loads grader.js.
> - Every function gets a one-line comment saying what it does.
> - Always write tests in test_grader.js, run with `node test_grader.js`, that
>   cover: a normal case, empty input, letters instead of numbers, numbers out of
>   range, the boundaries between grades, and each grading policy rule.
> - Run the tests before saying the work is done, and show the results.

## Follow-ups

We sent no follow-up prompts about the app. The agent stopped a few times to ask permission to run a command. We answered those requests like this:

- Allowed: `node test_grader.js` and small `node` checks that only read files in the attempt folder.
- Declined: scripts written outside the attempt folder, and requests to open the real Chrome browser.

A declined request interrupts the agent, and it asks what to do instead. Each time, we sent this one fixed sentence and nothing else:

> Use your best judgment and follow the project rules.

We sent it twice in attempt 1, once in attempt 2 and once in attempt 3. The full list of permission answers is in each attempt's `notes.md`.
