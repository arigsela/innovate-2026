# Orchestrator Brief: Vibe Coding Demo Build

You are setting up and capturing four pre-built demo runs for a 35-minute high school workshop. The presenter (Ari) will show these runs to students to compare careless and careful ways of coding with AI.

Each run has the **same app** built under different conditions. The app is **Grade Checker**, a small web page (`index.html`) where a student types test scores, clicks Calculate, and sees an average and a letter grade. In the workshop, students tell Ari what to type and click, and they see on screen where each run breaks.

The value of the demo is the honest difference between the four outputs, so your job is to set up, drive, capture and test. You never write or repair the app yourself.

## What each run is meant to show

| Run | Condition | What students should see |
| --- | --- | --- |
| 1 | Small model, one vague prompt | The model guessed what was wanted. The page may not match the task at all. |
| 2 | Small model, detailed prompt, follow-ups, real errors fed back | A clear request and feedback fix a lot, but a weak model has a ceiling. |
| 3 | Capable model, same detailed prompt, one shot | The prompt's requirements are met. The school's own rules are missing, because nobody told the model. |
| 4 | Capable model, same prompt, plus a project rules file | The school's rules are applied and the agent tested its own work. The knowledge lives in the project, not in the prompt. |

Runs 2, 3 and 4 get the same prompt. Run 4 alone gets `CLAUDE.md`, which holds the school's grading policy, page behavior and coding rules. Run 3 fails the school-rule checks because it never saw them. Report that plainly in `RESULTS.md`: it is the point of the comparison, not a defect in run 3.

## Settings (Ari: check these before handing over)

| Setting | Value |
| --- | --- |
| `BASE_DIR` | `~/git/ai-innovate-2026` (this folder, the one that holds `docs/instructions.md`) |
| `GIT_REMOTE` | `arigsela/innovate-2026` on GitHub, private (see Step 8) |
| `SMALL_MODEL` | `llama3.2:1b` (already pulled in Ollama) |
| `CLEAN_CLAUDE` | `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 claude --setting-sources project --strict-mcp-config --settings ~/git/ai-innovate-2026/_orchestrator/clean-settings.json --model claude-fable-5-2 --effort high --permission-mode acceptEdits` |
| `RUN3_COMMAND` | `CLEAN_CLAUDE -p` (capable model, one-shot, no project rules file) |
| `RUN4_COMMAND` | `CLEAN_CLAUDE` (interactive coding agent started inside the run 4 attempt folder) |
| `ATTEMPTS` | 3 per run |

If `RUN3_COMMAND` or `RUN4_COMMAND` does not work as written on this machine, stop and ask Ari. Do not substitute a different tool or model.

### Why `CLEAN_CLAUDE`

Ari's normal Claude Code setup has a global rules file, plugins, skills, hooks and MCP servers. Runs 3 and 4 must not see any of them, so both use the same clean command and differ only by the `CLAUDE.md` in the run 4 attempt folder. Ari's login still works.

| Part | What it does |
| --- | --- |
| `--setting-sources project` | Removes user settings: hooks (caveman, superpowers), plugins and their skills |
| `--strict-mcp-config` | Removes every MCP server |
| `--settings .../clean-settings.json` | Removes `~/.claude/CLAUDE.md` and `~/AGENTS.md`, through `claudeMdExcludes` |
| `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` | Removes the persistent memory folder under `~/.claude/projects/` |
| `--model claude-fable-5-2 --effort high` | Pins the model and effort, because user settings (which normally set them) are not loaded |
| `--permission-mode acceptEdits` | Lets the agent create and edit files in its attempt folder without asking. Commands such as `node` still ask. |

`_orchestrator/clean-settings.json` already exists. Do not edit it. Claude Code's 14 built-in skills (such as `code-review` and `simplify`) remain; they cannot be switched off without also switching off `CLAUDE.md`.

The first four parts were checked on 2026-11-17 with Claude Code 2.1.326. The probe outputs are in `_orchestrator/isolation-check/`. The model, effort and permission flags are listed in `claude --help` but were not run. Do not use `--safe-mode` (it also ignores the run 4 `CLAUDE.md`), `--bare` (it needs an API key) or a separate `CLAUDE_CONFIG_DIR` (it is not logged in).

**Before the first run 3 attempt, check isolation again.** In `_orchestrator/isolation-check/with-rules/`, run `CLEAN_CLAUDE -p` with this prompt: `Do not use any tools. List the absolute path of every CLAUDE.md, AGENTS.md, memory or instruction file whose contents are in your context, say whether any hook-injected context is present, and state your model ID.` The only path in the answer must be the `CLAUDE.md` in that folder, with no hook context, and the model must be `claude-fable-5-2`. If anything else appears, stop and ask Ari.

## Hard rules

1. **Never write, edit or fix a run's app files yourself** (`index.html`, `grader.js`, `test_grader.js` or anything else a model produced). Save exactly what each model produced, bugs included.
2. **Isolation.** A run sees only its own prompt (and, for run 4, its rules file). Never paste test checks, expected results, another run's output or any part of this brief into a model session.
3. **Fresh session per attempt.** Start a new model session for every attempt. No carry-over context.
4. **Do not change anything outside `BASE_DIR`.** That includes global agent config. The only exception is creating and pushing to the GitHub repository in Step 8. Never add a `CLAUDE.md` or `AGENTS.md` at the top of `BASE_DIR`: runs 3 and 4 start in subfolders and would load it. `~/.claude/CLAUDE.md` and `~/AGENTS.md` exist: do not edit or move them. `CLEAN_CLAUDE` keeps them out of runs 3 and 4. Record the result of the isolation check in `RESULTS.md`.
5. **Do not delete anything.** If an attempt goes wrong, keep it and start the next numbered attempt.
6. **Stop and report** if Ollama is not responding, the model is missing, a command fails twice, or anything here is ambiguous. Do not improvise around it.

## Step 1: Create the folder structure

```
~/git/ai-innovate-2026/
  docs/
    instructions.md           # this brief (already exists)
  _orchestrator/              # your working area; no model session runs here
    clean-settings.json       # already exists; used by CLEAN_CLAUDE
    isolation-check/          # already exists; probe outputs, keep
    test-checks.md
    run_tests.mjs             # helper you write (see Step 6)
    package.json              # created by npm for playwright-core
  run1-wrong-way/
    prompt.md
    attempt-1/  attempt-2/  attempt-3/
  run2-better-process/
    prompt.md
    followups.md
    attempt-1/  attempt-2/  attempt-3/
  run3-better-model/
    prompt.md
    attempt-1/  attempt-2/  attempt-3/
  run4-better-harness/
    prompt.md
    rules-file.md             # master copy of the rules
    attempt-1/  attempt-2/  attempt-3/   # each gets its own CLAUDE.md copy
  .gitignore                  # contains: node_modules/
  demo.html                   # launcher page you write (see Step 7)
  RESULTS.md
```

Each attempt folder ends up with:

- `transcript.md`: the full exchange, verbatim, prompts and responses in order
- `index.html`: the final page exactly as produced
- `test-results.md` and `screenshots/`: output of Step 6
- `notes.md`: anything unusual (several code blocks, refused, cut off, timing in seconds)

Run 2 attempts also keep `index_v1.html` (the first version, before follow-ups). Run 3 and run 4 attempts also keep whatever extra files the agent created, such as `grader.js` and `test_grader.js`.

## Step 2: Write the prompt files

Write these files with exactly this content.

### `run1-wrong-way/prompt.md`

```
make a grade calculator web page
```

### `run2-better-process/prompt.md`, `run3-better-model/prompt.md`, `run4-better-harness/prompt.md` (identical in all three)

```
Build a web page called index.html: a grade calculator for high school students.

What it does:
- Has one text box where the student types test scores separated by commas, for example: 85, 90, 78
- Has a button labelled Calculate
- When the button is clicked, the page shows the average rounded to one decimal place
- The page shows a letter grade for the average: A = 90-100, B = 80-89, C = 70-79, D = 60-69, F = below 60

Rules:
- Use only plain HTML, CSS and JavaScript, no libraries. The page must work when I double-click the file, with no internet.
- Each score must be a number from 0 to 100. If one is not, show a friendly message on the page and do not show a grade.
- If the box is empty, show a friendly message on the page.
- Add a short comment above each section of the code explaining what it does

Example: if I type 85, 90, 78 and click Calculate, the page shows "Average: 84.3" and "Grade: B".

Before writing code, list the steps you will take.
```

After writing, confirm the three files are byte-identical (for example with `cmp`).

### `run2-better-process/followups.md`

```
FOLLOW-UP 1:
Explain this code section by section for someone new to programming.

FOLLOW-UP 2:
What could go wrong with this page? List the inputs that might break it.

FOLLOW-UP 3 (template, used only when a check fails):
Here is what happened when I typed <INPUT> and clicked Calculate: <WHAT THE PAGE SHOWED, OR THE ERROR>. Fix it and show the complete corrected index.html.
```

### `run4-better-harness/rules-file.md`

Ari: the grading policy below is a placeholder. Replace it with your school's real rules before the runs if you want, and update checks 8-10 in `test-checks.md` to match.

```
# Project rules

## What this project is

Grade Checker is a web page that students at our high school use to see where
they stand in one class. They open it on school Chromebooks and on their phones.

## Our school's grading policy (always apply it)

- When a student enters 4 or more scores, drop the single lowest score before
  averaging, and say on the page which score was dropped.
- Choose the letter grade from the average rounded to the nearest whole number,
  with halves rounding up. So an average of 89.5 is an A. Still display the
  average to one decimal place.
- Below 70 is not passing at our school. When the letter grade is D or F, also
  show the line "Retake needed".

## How the page must behave

- Pressing Enter in the text box does the same as clicking Calculate.
- Text is at least 18px, and the page fits a 360px-wide phone screen with no
  sideways scrolling.
- Never use pop-up alerts. Messages go on the page.

## How we write code

- This project is for beginner programmers. Keep code simple and readable.
- Use only plain HTML, CSS and JavaScript, no libraries.
- Put the grading logic in small functions in grader.js, one job each, with no
  access to the page. index.html loads grader.js.
- Every function gets a one-line comment saying what it does.
- Always write tests in test_grader.js, run with `node test_grader.js`, that
  cover: a normal case, empty input, letters instead of numbers, numbers out of
  range, the boundaries between grades, and each grading policy rule.
- Run the tests before saying the work is done, and show the results.
```

### `_orchestrator/test-checks.md`

Each check starts from a freshly loaded page.

**Prompt checks.** Runs 2, 3 and 4 were all told these.

| # | Typed, then click Calculate | Correct behavior |
| --- | --- | --- |
| 1 | `85, 90, 78` | Average 84.3, grade B |
| 2 | nothing | Friendly message on the page, no grade |
| 3 | `abc` | Friendly message on the page, no grade |
| 4 | `105` | Rejected (scores must be 0-100), no grade |
| 5 | `-5` | Rejected (scores must be 0-100), no grade |
| 6 | `80` | Grade B |
| 7 | `100` | Grade A |

**Project checks.** Only run 4 was told these, through `CLAUDE.md`.

| # | Action | Correct behavior |
| --- | --- | --- |
| 8 | Type `85, 90, 78, 40`, click Calculate | Page says 40 was dropped. Average 84.3, grade B |
| 9 | Type `89.5`, click Calculate | Average 89.5, grade A |
| 10 | Type `65, 68`, click Calculate | Average 66.5, grade D, and the line "Retake needed" |
| 11 | Type `85, 90, 78`, press Enter (no click) | Average 84.3, grade B |
| 12 | Load the page at 360px wide | No sideways scrolling |

## Step 3: Runs 1 and 2 (small local model, in tmux)

Check first: `ollama list` shows `llama3.2:1b`. If not, stop and report.

Use one tmux session per attempt, named `vibe-run1-a1`, `vibe-run1-a2`, `vibe-run2-a1`, and so on. Leave the sessions open when finished so Ari can inspect them.

**Sending multi-line prompts.** Inside the `ollama run` chat, wrap a multi-line message in triple quotes: send `"""`, then the prompt lines, then `"""` on its own line. Wait for the response to finish (the `>>>` prompt returns) before sending anything else.

**Saving the page from a chat response.** If the response has one HTML code block, save it unchanged as `index.html`. If it has separate HTML, CSS and JavaScript blocks, save each block unchanged under the file name the response gives it (for example `style.css`, `script.js`). If the response gives no file names, or the blocks do not form a page, save every block to `raw-blocks/` in order, do not assemble them, write why in `notes.md`, and record every check as FAIL.

### Run 1 procedure (per attempt)

1. Start a tmux session in the attempt folder and launch `ollama run llama3.2:1b`.
2. Send the contents of `run1-wrong-way/prompt.md`. Nothing else.
3. When the response is complete, copy it verbatim into `transcript.md`.
4. Save the page from the response, unchanged.
5. Send `/bye`. Do **not** send follow-ups, corrections or errors back to the model. Run 1 is the careless path: one prompt, one answer, done.

### Run 2 procedure (per attempt)

1. New tmux session, launch `ollama run llama3.2:1b`.
2. Send the contents of `run2-better-process/prompt.md` as one triple-quoted message.
3. Save the page from the response as `index_v1.html`.
4. Send Follow-up 1, then Follow-up 2, waiting for each response.
5. Run the **prompt checks** (1-7) from Step 6 against `index_v1.html`. Do not use the project checks here.
6. For each failing check, up to **two** fixes in total, send Follow-up 3 with the real input and what the page really showed (or the real error). Save each corrected page as `index_v2.html`, `index_v3.html`.
7. Copy the last version to `index.html`. If nothing failed, `index.html` is a copy of `index_v1.html`.
8. Save the whole exchange to `transcript.md`, then send `/bye`.

Follow-up 3 may contain only the single input and what the page actually showed. Never include the expected answer or the checks table.

## Step 4: Run 3 (capable model, no rules file)

Per attempt, from inside the empty attempt folder:

1. Confirm that neither the attempt folder nor the top of `BASE_DIR` contains a `CLAUDE.md`, `AGENTS.md` or other rules file.
2. Run `RUN3_COMMAND` once with the contents of `run3-better-model/prompt.md` as the prompt.
3. Save the printed response verbatim to `transcript.md`. The agent writes `index.html` into the folder itself: leave it and any other file it created in place. If it printed the code and wrote no file, save the code block unchanged as `index.html` and say so in `notes.md`.
4. No follow-ups, no fixes.

## Step 5: Run 4 (capable model plus rules file)

Per attempt:

1. Copy `run4-better-harness/rules-file.md` into the attempt folder as `CLAUDE.md`. This must be the only file in the folder before the agent starts.
2. Start a tmux session named `vibe-run4-aN` in the attempt folder and launch `RUN4_COMMAND`.
3. Send the contents of `run4-better-harness/prompt.md`. Nothing else.
4. Let the agent work. Accept the folder trust dialog. If it asks for permission to run `node test_grader.js` or another command that only reads or runs files inside this folder, allow it. If it asks to act outside the folder, install anything or use the network, decline.
5. If it asks a clarifying question, answer only: `Use your best judgment and follow the project rules.`
6. When it reports that it is done, save the session to `transcript.md`. Leave every file it created in place.

## Step 6: Test every attempt

In `_orchestrator/`, run `npm init -y` and `npm install playwright-core`. Write `_orchestrator/run_tests.mjs`. It drives the installed Google Chrome, headless, through `playwright-core` with `channel: 'chrome'`. Do not download a browser.

The script takes an attempt folder and a page file name. For each check it should:

- open the page from disk (`file://`) in a fresh browser page, 1280px wide (360px wide for check 12)
- find the text box (the first visible text `input` or `textarea`) and the button (the first visible button whose text contains "calc", otherwise the first visible button)
- type the input, then click the button (check 11: press Enter instead of clicking)
- wait up to 2 seconds for the page to change
- record all visible page text, any pop-up alert text, any console or page errors, and a screenshot saved as `screenshots/check-NN.png`
- for check 12, record whether `document.documentElement.scrollWidth` is greater than 360

Judge each check as PASS, FAIL or CHECK:

- **Checks 1, 6, 7:** PASS if the page shows the right average or grade.
- **Checks 2-5:** PASS if the page shows a friendly message and no grade. A message in a pop-up alert instead of on the page is CHECK. A grade for 105 or -5, `NaN`, a blank result with no message, or a script error is a FAIL.
- **Checks 8-11:** PASS only if everything in the "Correct behavior" column is shown.
- **Check 12:** PASS if there is no sideways scrolling.
- **CHECK:** anything you cannot judge confidently, including a page where the script cannot find one text box and one button. Paste the visible text and point to the screenshot so Ari can decide.

If the page does not load or has no working script, record every check as FAIL with the error. Do not repair it.

Write the results to `test-results.md` in the attempt folder, with the visible text and the screenshot path under each check. For run 3 and run 4 attempts that contain `test_grader.js`, also run `node test_grader.js` and add its output at the end.

## Step 7: Write `RESULTS.md` and `demo.html`

### `RESULTS.md`

One table, twelve rows (4 runs x 3 attempts):

| Run | Attempt | Model / tool | Prompt checks passed of 7 | Project checks passed of 5 | Failing checks | Seconds to generate | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |

Below the table list:

- any attempt where the output was unusable and why
- the isolation check result for runs 3 and 4: which rules files were loaded, the model reported, and whether any hook context was present
- a reminder that runs 1-3 were never told the project checks
- anything you were unsure about

Do **not** pick a "best" attempt per run. Ari chooses which one to present.

### `demo.html`

A plain launcher page at the top of `BASE_DIR` for Ari to use in the workshop. It is your own file, not a model output. For each of the twelve attempts it has: a link that opens that attempt's `index.html`, the two pass counts, and links to its `transcript.md` and `screenshots/`. Below that, the two checks tables from `test-checks.md` so Ari can read out what to type. No styling beyond large readable text.

## Step 8: Store the folder in git

Do this last, after `RESULTS.md` is written. `BASE_DIR` is not a git repository during the runs, so no model session sees git state.

1. Run `gh auth status` and confirm the active account is `arigsela`. If it is not, stop and ask Ari. Do not switch accounts yourself.
2. Check for a `.git` folder inside any attempt folder (a run 4 agent may have created one). If you find one, do not delete it: stop and ask Ari.
3. Read through the transcripts for anything private (tokens, email addresses, home-folder paths Ari would not want published). If you find any, stop and ask Ari.
4. Confirm `.gitignore` contains `node_modules/`. From `BASE_DIR`, run `git init -b main`, then `git add -A` and commit with the message `Add vibe coding demo runs and results`.
5. Show Ari the list of files in the commit and ask for a yes before creating the remote. Creating and pushing a repository is outward-facing.
6. After the yes, run `gh repo create arigsela/innovate-2026 --private --source=. --remote=origin --push`.
7. Confirm with `git status` and `gh repo view arigsela/innovate-2026 --json url,visibility`, and add the repository URL to `RESULTS.md` in a follow-up commit and push.

If `arigsela/innovate-2026` already exists, stop and ask Ari. Do not force-push or overwrite it.

## Done means

- All folders and prompt files from Steps 1 and 2 exist.
- Twelve attempt folders each contain `transcript.md`, `index.html` (or a note explaining why not), `test-results.md`, `screenshots/` and `notes.md`.
- `RESULTS.md` and `demo.html` are complete.
- tmux sessions are still open.
- `BASE_DIR` is committed and pushed to `arigsela/innovate-2026`, and the URL is in `RESULTS.md`.
- You have reported to Ari in a few lines: the pass counts per run, anything that needs his decision, and nothing else.
