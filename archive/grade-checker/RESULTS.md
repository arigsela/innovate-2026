# Results

Runs were made on 2026-11-17. The app is Grade Checker, an `index.html` page. Every attempt was checked by `_orchestrator/run_tests.mjs`, which drives Google Chrome headless: 7 prompt checks and 5 project checks, listed in `_orchestrator/test-checks.md`.

Runs 1, 2 and 3 were never told the project checks. Only run 4 was, through `CLAUDE.md`. A run 3 failure on checks 8-10 means "nobody told the model", not "the model got it wrong".

| Run | Attempt | Model / tool | Prompt checks passed of 7 | Project checks passed of 5 | Failing checks | Seconds to generate | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 wrong way | 1 | `llama3.2:1b`, Ollama chat | 0 (7 CHECK) | 0 (4 CHECK) | 12 fails; 1-11 could not be performed | 14 | Arithmetic calculator: two number boxes and an Add/Subtract/Multiply/Divide menu. Nothing about grades. |
| 1 wrong way | 2 | `llama3.2:1b`, Ollama chat | 0 (7 CHECK) | 1 (4 CHECK) | 1-11 could not be performed | 9 | Asks for student name, course name, one number. Script error on load, so the button does nothing. |
| 1 wrong way | 3 | `llama3.2:1b`, Ollama chat | 0 (7 CHECK) | 1 (4 CHECK) | 1-11 could not be performed | 9 | Asks for student name, course name, one grade. No list of scores, no average. Page reloads on Submit. |
| 2 better process | 1 | `llama3.2:1b`, Ollama chat | 3 | 1 | 2, 3, 4, 5, 8, 9, 10, 11 | 59 | First answer 0 of 7 (script error). After fix 1: 3 of 7. Fix 2 changed nothing. |
| 2 better process | 2 | `llama3.2:1b`, Ollama chat | 5 | 1 | 2, 3, 8, 9, 10, 11 | 65 | First answer 0 of 7 (button did nothing). After fix 1: 5 of 7. Fix 2 changed nothing. |
| 2 better process | 3 | `llama3.2:1b`, Ollama chat | 3 | 2 | 2, 3, 4, 5, 8, 9, 10 | 72 | First answer 3 of 7. Neither fix changed the result; the fix 2 answer was identical to fix 1. |
| 3 better model | 1 | `claude-fable-5-2`, Claude Code one-shot | 7 | 2 | 8, 9, 10 | 56 | Single `index.html`. |
| 3 better model | 2 | `claude-fable-5-2`, Claude Code one-shot | 7 | 2 | 8, 9, 10 | 56 | Single `index.html`. |
| 3 better model | 3 | `claude-fable-5-2`, Claude Code one-shot | 7 | 2 | 8, 9, 10 | 59 | Single `index.html`. |
| 4 better harness | 1 | `claude-fable-5-2`, Claude Code interactive + `CLAUDE.md` | 7 | 5 | none | 310 | `index.html`, `grader.js`, `test_grader.js`. Own tests: 59 passed, 0 failed. |
| 4 better harness | 2 | `claude-fable-5-2`, Claude Code interactive + `CLAUDE.md` | 7 | 5 | none | 220 | `index.html`, `grader.js`, `test_grader.js`. Own tests: 71 passed, 0 failed. |
| 4 better harness | 3 | `claude-fable-5-2`, Claude Code interactive + `CLAUDE.md` | 7 | 5 | none | 283 | `index.html`, `grader.js`, `test_grader.js`. Own tests: 75 passed, 0 failed. |

Seconds for run 2 are the sum of all five model answers. Seconds for run 4 include time the agent waited for the orchestrator to answer permission prompts.

## What the failing checks look like on the page

| Check | Typed | Run 2 (varies by attempt) | Run 3 | Run 4 |
| --- | --- | --- | --- | --- |
| 2 | nothing | `Average: 0.0`, `Grade: F`, or nothing at all | Friendly message | Friendly message |
| 3 | `abc` | `Average: NaN`, `Grade: F`, or a script error | Friendly message | Friendly message |
| 4 | `105` | `Average: 105.0`, grade A (attempts 1 and 3) | Rejected | Rejected |
| 8 | `85, 90, 78, 40` | 73.3, C | 73.3, C | 84.3, B, and a line saying 40 was dropped |
| 9 | `89.5` | 89.5, B | 89.5, B | 89.5, A |
| 10 | `65, 68` | 66.5, D | 66.5, D | 66.5, D, "Retake needed" |

## Unusable output

- **Run 1, all three attempts.** Each page loads, but none is the app in the checks: no page has one box for a list of scores. The eleven typed checks are recorded as CHECK ("could not be performed"), not FAIL, because the vague prompt never asked for that shape. Ari decides how to count them. Attempt 2 also has a script error on load.
- No other attempt was unusable.

## Isolation check for runs 3 and 4

Run with the full `CLEAN_CLAUDE` command just before run 3. Output: `_orchestrator/isolation-check/H-pre-run3-check.txt`.

- Rules files loaded: only the `CLAUDE.md` in the probe folder. `~/.claude/CLAUDE.md` and `~/AGENTS.md` were not loaded.
- Hook context: none.
- Model reported: `claude-fable-5-2`.

One gap the check did not cover: Claude Code's built-in Chrome integration is still available in the clean sessions. Run 4 attempts 1 and 3 asked to open a window in Ari's Chrome to look at the page. Both requests were denied, so nothing was opened. It did not affect the files produced.

## Decisions the orchestrator made that the brief did not spell out

- **`--nowordwrap` on `ollama run`.** Without it the Ollama client breaks long code lines when it prints them. The flag does not change what the model receives.
- **Run 2 versions are folders** (`v1/`, `v2/`, `v3/`), not `index_v1.html`, because the model split the page into several files.
- **Duplicate file names in one answer** (run 2 attempts 1 and 2): the later block was saved. All blocks are kept in `blocks/`.
- **Unnamed code blocks** (run 2 attempt 1, fix answers): one JavaScript block and one CSS block were saved as `script.js` and `style.css`, the names that answer's own `index.html` loads.
- **Run 4 permission prompts.** Allowed: `node test_grader.js` and inline `node` checks that read only the attempt folder. Declined: scripts written to the agent's temporary folder under `/private/tmp`, and access to Ari's Chrome. Each decline left the agent asking what to do instead; it was sent the brief's fixed answer and nothing else. Details are in each attempt's `notes.md`.
- **Run 3 could not run commands.** One-shot mode cannot answer permission prompts, so each run 3 agent wrote `index.html` but could not test it, and said so in its response.

## Things I am unsure about

- **Check 12 for run 1 attempts 2 and 3** is recorded as PASS (no sideways scrolling). That is true of those pages but says nothing about whether they are usable.
- **Run 2 attempt 3 shows the letter alone** (`B`), not `Grade: B` as the prompt's example shows. The checks count that as showing the grade.
- **The grading policy in `CLAUDE.md` is a placeholder**, not a real school's policy.

## Repository

Not pushed yet. See the report to Ari.
