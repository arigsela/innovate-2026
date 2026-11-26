# Run 2: every message we sent

Run 2 uses the small model (`llama3.2:1b`) with a clear request and a feedback loop. Each attempt is one chat with five messages from us. Messages 1 to 3 are the same in every attempt. Messages 4 and 5 report what the page really did, so they differ per attempt.

The rule for messages 4 and 5: we only describe what we typed and what the page showed. We never tell the model the right answer or how to fix the code.

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

## Message 2: ask it to explain

> Explain this code section by section for someone new to programming.

## Message 3: ask what could go wrong

> What could go wrong with this page? List the inputs that might break it.

## Messages 4 and 5: paste back what really happened

The template:

> Here is what happened when I typed \<INPUT\> and clicked Calculate: \<WHAT THE PAGE SHOWED, OR THE ERROR\>. Fix it and show the complete corrected index.html.

### Attempt 1

Message 4:

> Here is what happened when I typed 85, 90, 78 and clicked Calculate: nothing appeared on the page, and the browser console showed the error "calculateAverageAndGrade is not defined". Fix it and show the complete corrected index.html.

Message 5:

> Here is what happened when I typed nothing and clicked Calculate: the page showed "Average: 0.0" and "Grade: F". Fix it and show the complete corrected index.html.

Request checks passed, of 7, after message 1, message 4 and message 5: 0, then 3, then 3.

### Attempt 2

Message 4:

> Here is what happened when I typed 85, 90, 78 and clicked Calculate: nothing appeared on the page, and the browser console showed no error. Fix it and show the complete corrected index.html.

Message 5:

> Here is what happened when I typed nothing and clicked Calculate: the page showed "Average: 0.0" and "F". Fix it and show the complete corrected index.html.

Request checks passed, of 7, after message 1, message 4 and message 5: 0, then 5, then 5.

### Attempt 3

Message 4:

> Here is what happened when I typed nothing and clicked Calculate: nothing appeared on the page. Fix it and show the complete corrected index.html.

Message 5:

> Here is what happened when I typed nothing and clicked Calculate: nothing appeared on the page. Fix it and show the complete corrected index.html.

Request checks passed, of 7, after message 1, message 4 and message 5: 3, then 3, then 3.

The model's answers are in each attempt's `transcript.md`. The page after each stage is in the attempt's `v1/`, `v2/` and `v3/` folders.
