# Run 1: every message we sent

Run 1 uses the small model (`llama3.2:1b`) with a clear request and a feedback loop. Each attempt is one chat with five messages from us. Messages 1 to 3 are the same in every attempt. Messages 4 and 5 report what the page really did, so they differ per attempt.

The rule for messages 4 and 5: we only describe what we did and what the page showed. We never tell the model the right answer or how to fix the code.

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

## Message 2: ask it to explain

> Explain this code section by section for someone new to programming.

## Message 3: ask what could go wrong

> What could go wrong with this page? List the things a user could do that might break it.

## Messages 4 and 5: paste back what really happened

The template:

> Here is what happened when I \<WHAT I DID\>: \<WHAT THE PAGE SHOWED, OR THE ERROR\>. Fix it and show every file again in full.

### Attempt 1

Message 4:

> Here is what happened when I opened the page: it showed one +10 button, one -10 button, one Award button, one Reset button and the text "0 is the Leader", and nothing else. Fix it and show every file again in full.

Message 5:

> Here is what happened when I opened the new page: each house showed "0" with a +10 button and a -10 button, but no house had a number box or an Award button, and the browser console showed the error "Cannot set properties of null (setting 'innerHTML')". Fix it and show every file again in full.

Prompt checks passed, of 8, after message 1, message 4 and message 5: 0, then 3, then 3.

### Attempt 2

Message 4:

> Here is what happened when I opened the page: each house showed two +10 buttons, an Award button and a Reset button, with no -10 button, and the browser console showed the error "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'." Fix it and show every file again in full.

Message 5:

> Here is what happened when I opened the page with the new files: each house still showed two +10 buttons, an Award button and a Reset button, with no -10 button, and the browser console showed the same error "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'." Fix it and show every file again in full.

Prompt checks passed, of 8, after message 1, message 4 and message 5: 0, then 0, then 0.

### Attempt 3

Message 4:

> Here is what happened when I opened the page: each house showed only "0 points" and an Award button, with no name, no +10 button and no -10 button, and the browser console showed the error "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector." Fix it and show every file again in full.

Message 5:

> Here is what happened when I opened the new page: each house showed only an Award button and "0 points", with no name, no +10 button and no -10 button, and the browser console showed the same error "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector." Fix it and show every file again in full.

Prompt checks passed, of 8, after message 1, message 4 and message 5: 0, then 0, then 1.

In attempt 1, message 5 has a mistake of ours: the page did show Award buttons. Only the number box was missing.

The model's answers are in each attempt's `transcript.md`. The page after each stage is in the attempt's `v1/`, `v2/` and `v3/` folders.
