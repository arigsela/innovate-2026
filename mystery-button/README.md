# Mystery button: explain and debug with an AI agent

The page in `app/` shows one button that says "Click me". Each click does several things you cannot see. The code is short, has no comments and uses one-letter names, the way confusing real code often looks.

Unlike the three scoreboard runs, this page was written by the orchestrator (Claude) on purpose, from a spec Ari approved. The three bugs were planted by hand. The explanation and the fixes come from a clean Claude Code session (`claude-fable-5-2`), one attempt each.

## Part 1: explain

1. Open `app/index.html`. Click the button a few times. Guess what it does.
2. Read the prompt in `explains/explain/prompt.md`, then the agent's answer in `explains/explain/answer.md`.
3. Open `app/index.html?reveal` and check each claim in `explains/explain/claims-to-check.md`.

## Part 2: debug

Each folder in `debug/` holds one bug:

| Folder | What goes wrong |
| --- | --- |
| `bug-1-count-resets` | The click count goes back to 0 when the page reloads |
| `bug-2-secret-never-shows` | The secret pattern never works |
| `bug-3-title-late` | The tab title changes on the 8th click, not the 7th |

For each bug:

1. Open `broken/index.html?reveal` and make the bug happen.
2. Read `bug-report.md`. It says what we did, what we expected and what we saw. That is all we told the agent.
3. Read `answer.md`: the cause in simple words, and the fix.
4. Open `fixed/index.html?reveal` and check that the bug is gone.

`debug/verification.md` shows the orchestrator's own check of every broken and fixed page.

## What to take away

- An agent can read code faster than you can, and it can explain code you did not write.
- A good bug report has three parts: what I did, what I expected, what I saw.
- The agent said it could not run the page. Check its work, as you would check a classmate's.
