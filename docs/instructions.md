# Orchestrator Brief: Vibe Coding Demo Build

You are setting up and capturing pre-built demo material for a 35-minute high school workshop. The presenter (Ari) will show it to students to compare careless and careful ways of coding with AI, and to show an AI agent explaining and debugging code.

There are two parts:

1. **Three runs of the same app.** The app is **House Cup**, a web page (`index.html`) that keeps a points scoreboard for four school houses during a Harry Potter themed Spirit Week. In the workshop, students tell Ari what to click, and they see on screen where each run breaks.
2. **The mystery button.** A one-button page whose behavior is hidden, used to show an agent explaining code and fixing bugs.

The value of the runs is the honest difference between the outputs, so for the runs your job is to set up, drive, capture and test. You never write or repair a run's app yourself.

This brief replaces the Grade Checker brief of 2026-11-17. That version and its runs are in `archive/grade-checker/`.

## What each run is meant to show

| Run | Condition | What students should see |
| --- | --- | --- |
| 1 | Small model, detailed prompt, follow-ups, real errors fed back | A clear request and feedback help, but a weak model has a ceiling. |
| 2 | Capable model, same detailed prompt, one shot | The prompt's requirements are met. The school's houses and rules are missing, because nobody told the model. |
| 3 | Capable model, same prompt, plus a project rules file | The school's houses and rules are applied and the agent tested its own work. The knowledge lives in the project, not in the prompt. |

All three runs get the same prompt. Run 3 alone gets `CLAUDE.md`, which holds the house names and colours, the Spirit Week rules, page behavior and coding rules. Run 2 fails the school checks because it never saw them. Report that plainly in `RESULTS.md`: it is the point of the comparison, not a defect in run 2.

## Settings (Ari: check these before handing over)

| Setting | Value |
| --- | --- |
| `BASE_DIR` | `~/git/ai-innovate-2026` (this folder, the one that holds `docs/instructions.md`) |
| `GIT_REMOTE` | `arigsela/innovate-2026` on GitHub (see Step 9) |
| `SMALL_MODEL` | `llama3.2:1b` (already pulled in Ollama) |
| `CLEAN_CLAUDE` | `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 claude --setting-sources project --strict-mcp-config --settings ~/git/ai-innovate-2026/_orchestrator/clean-settings.json --model claude-fable-5-2 --effort high --permission-mode acceptEdits` |
| `RUN2_COMMAND` | `CLEAN_CLAUDE -p` (capable model, one-shot, no project rules file) |
| `RUN3_COMMAND` | `CLEAN_CLAUDE` (interactive coding agent started inside the run 3 attempt folder) |
| `ATTEMPTS` | 3 per run |

If `RUN2_COMMAND` or `RUN3_COMMAND` does not work as written on this machine, stop and ask Ari. Do not substitute a different tool or model.

### Why `CLEAN_CLAUDE`

Ari's normal Claude Code setup has a global rules file, plugins, skills, hooks and MCP servers. Runs 2 and 3 and the mystery button sessions must not see any of them, so they all use the same clean command, and runs 2 and 3 differ only by the `CLAUDE.md` in the run 3 attempt folder. Ari's login still works.

| Part | What it does |
| --- | --- |
| `--setting-sources project` | Removes user settings: hooks (caveman, superpowers), plugins and their skills |
| `--strict-mcp-config` | Removes every MCP server |
| `--settings .../clean-settings.json` | Removes `~/.claude/CLAUDE.md` and `~/AGENTS.md`, through `claudeMdExcludes` |
| `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` | Removes the persistent memory folder under `~/.claude/projects/` |
| `--model claude-fable-5-2 --effort high` | Pins the model and effort, because user settings (which normally set them) are not loaded |
| `--permission-mode acceptEdits` | Lets the agent create and edit files in its attempt folder without asking. Commands such as `node` still ask. |

`_orchestrator/clean-settings.json` already exists. Do not edit it. Claude Code's 14 built-in skills (such as `code-review` and `simplify`) remain; they cannot be switched off without also switching off `CLAUDE.md`.

The first four parts were checked on 2026-11-17 with Claude Code 2.1.326. The probe outputs are in `_orchestrator/isolation-check/`. The model, effort and permission flags are listed in `claude --help` but were not run. Do not use `--safe-mode` (it also ignores the run 3 `CLAUDE.md`), `--bare` (it needs an API key) or a separate `CLAUDE_CONFIG_DIR` (it is not logged in).


**Before the first run 2 attempt, check isolation again.** In `_orchestrator/isolation-check/with-rules/`, run `CLEAN_CLAUDE -p` with this prompt: `Do not use any tools. List the absolute path of every CLAUDE.md, AGENTS.md, memory or instruction file whose contents are in your context, say whether any hook-injected context is present, and state your model ID.` The only path in the answer must be the `CLAUDE.md` in that folder, with no hook context, and the model must be `claude-fable-5-2`. If anything else appears, stop and ask Ari.

## Hard rules

1. **Never write, edit or fix a run's app files yourself** (`index.html`, `scoreboard.js`, `test_scoreboard.js` or anything else a model produced in a run folder). Save exactly what each model produced, bugs included. The mystery button is different: see Step 7.
2. **Isolation.** A run sees only its own prompt (and, for run 3, its rules file). Never paste test checks, expected results, another run's output or any part of this brief into a model session.
3. **Fresh session per attempt.** Start a new model session for every attempt. No carry-over context.
4. **Do not change anything outside `BASE_DIR`.** That includes global agent config. The only exception is creating and pushing to the GitHub repository in Step 9. Never add a `CLAUDE.md` or `AGENTS.md` at the top of `BASE_DIR`: the agent sessions start in subfolders and would load it. `~/.claude/CLAUDE.md` and `~/AGENTS.md` exist: do not edit or move them. Record the result of the isolation check in `RESULTS.md`.
5. **Do not delete anything.** If an attempt goes wrong, keep it and start the next numbered attempt.
6. **Stop and report** if Ollama is not responding, the model is missing, a command fails twice, or anything here is ambiguous. Do not improvise around it.

## Step 1: Folder structure

```
~/git/ai-innovate-2026/
  docs/instructions.md          # this brief
  _orchestrator/                # your working area; no run session starts here
    clean-settings.json         # used by CLEAN_CLAUDE; do not edit
    isolation-check/            # probe outputs, keep
    test-checks.md
    run_tests.mjs               # tests one scoreboard attempt (Step 6)
    check_mystery.mjs           # checks a mystery button page (Step 7)
    pilot/                      # small-model pilot of the prompt, outside the runs
  run1-better-process/
    prompt-1.md  followups.md  all-prompts-1.md
    attempt-1/  attempt-2/  attempt-3/
  run2-better-model/
    prompt-2.md  all-prompts-2.md
    attempt-1/  attempt-2/  attempt-3/
  run3-better-harness/
    prompt-3.md  rules-file.md  all-prompts-3.md
    attempt-1/  attempt-2/  attempt-3/     # each gets its own CLAUDE.md copy
  mystery-button/
    README.md                   # student worksheet
    app/  explain/  debug/
  archive/grade-checker/        # the first version of the demo, unchanged
  .gitignore                    # contains: node_modules/
  demo.html                     # launcher page (Step 8)
  RESULTS.md
```

Each attempt folder ends up with `transcript.md`, `index.html`, `test-results.md`, `screenshots/` and `notes.md`. Run 1 attempts also keep `v1/`, `v2/` and `v3/` (the page after the first answer and after each fix). Run 2 and run 3 attempts also keep whatever extra files the agent created.

`all-prompts-N.md` lists every message sent in that run, in order, so Ari can show students the whole conversation from our side.

## Step 2: Prompt files

### `prompt-1.md`, `prompt-2.md`, `prompt-3.md` (byte-identical; confirm with `cmp`)

```
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
```

### `run1-better-process/followups.md`

```
FOLLOW-UP 1:
Explain this code section by section for someone new to programming.

FOLLOW-UP 2:
What could go wrong with this page? List the things a user could do that might break it.

FOLLOW-UP 3 (template, used only when a check fails):
Here is what happened when I <WHAT I DID>: <WHAT THE PAGE SHOWED, OR THE ERROR>. Fix it and show every file again in full.
```

### `run3-better-harness/rules-file.md`

The houses and rules below were chosen for the demo. Ari can replace them with the school's real ones before the runs; update checks 9 to 13 in `test-checks.md` to match.

````
# Project rules

## What this project is

House Cup is the points scoreboard for our high school's Harry Potter themed
Spirit Week. A teacher shows it on the cafeteria projector and updates it from
a phone. Students watch it all week.

## Our houses (always use these, in this order)

| House | Main colour | Second colour |
| --- | --- | --- |
| Gryffindor | #740001 (scarlet) | #D3A625 (gold) |
| Hufflepuff | #FFDB00 (yellow) | #000000 (black) |
| Ravenclaw | #0E1A40 (blue) | #946B2D (bronze) |
| Slytherin | #1A472A (green) | #AAAAAA (silver) |

Fill each house's bar with its main colour.

## Spirit Week rules (always apply them)

- One award can be at most 50 points. A bigger number typed for the Award
  button gets a friendly message on the page and changes nothing.
- When two or more houses share the highest score, nobody is Leader. Each of
  those houses shows the word Tied instead. When every house has 0 points,
  show neither word.
- Points must survive a page reload, because the projector laptop restarts
  every morning. Only the Reset button clears them.

## How the page must behave

- Text is at least 18px, and the page fits a 360px-wide phone screen with no
  sideways scrolling.
- Never use pop-up alerts. Messages go on the page.

## How we write code

- This project is for beginner programmers. Keep code simple and readable.
- Use only plain HTML, CSS and JavaScript, no libraries.
- Put the scoring logic in small functions in scoreboard.js, one job each,
  with no access to the page. index.html loads scoreboard.js.
- Every function gets a one-line comment saying what it does.
- Always write tests in test_scoreboard.js, run with `node test_scoreboard.js`,
  that cover: adding points, never going below 0, a bad award number, the
  50-point limit, the leader, a tie, and reset.
- Run the tests before saying the work is done, and show the results.
````

### `_orchestrator/test-checks.md`

Each check starts from a freshly loaded page with no saved points. "House 1" means the first house on the page, and so on.

**Prompt checks.** All three runs were told these.

| # | Action | Correct behavior |
| --- | --- | --- |
| 1 | Load the page | Four houses, each with `+10`, `-10`, a number box and `Award`. A `Reset` button |
| 2 | Click `+10` twice on house 1 | House 1 shows 20. The other houses do not change |
| 3 | Click `-10` on house 2 while it has 0 | House 2 stays at 0 |
| 4 | Type `25` in house 3's box, click `Award` | House 3 shows 25 |
| 5 | Type `-5` in house 1's box, click `Award` | Friendly message on the page. Points do not change |
| 6 | Click `+10` twice on house 1 and once on house 2 | Only house 1 shows the word Leader |
| 7 | Give points to houses 1 and 2, then click `Reset` | Every house is back to 0 |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | House 1's bar gets longer |

**School checks.** Only run 3 was told these, through `CLAUDE.md`.

| # | Action | Correct behavior |
| --- | --- | --- |
| 9 | Load the page | The houses are Gryffindor, Hufflepuff, Ravenclaw, Slytherin, in that order |
| 10 | Give every house 10 points | Each bar is filled with its house's main colour |
| 11 | Type `60` in house 1's box, click `Award` | Friendly message on the page. Points do not change |
| 12 | Click `+10` once on house 1 and once on house 2 | Nobody shows Leader. Houses 1 and 2 show Tied |
| 13 | Click `+10` twice on house 1, then reload the page | House 1 still shows 20 |
| 14 | Load the page at 360px wide | No sideways scrolling |

## Step 3: Run 1 (small local model, in tmux)

Check first: `ollama list` shows `llama3.2:1b`. If not, stop and report.

Use one tmux session per attempt, named `sb-run1-a1` and so on. Start the chat with `ollama run llama3.2:1b --nowordwrap`, so long code lines are not wrapped. Leave the sessions open when finished.

**Sending multi-line prompts.** Wrap a multi-line message in triple quotes: send `"""`, then the lines, then `"""` on its own line. Wait for the `>>>` prompt to return before sending anything else.

**Saving the page from a chat response.** Save each code block unchanged under the file name the response gives it. If a block has no name, use the name that `index.html` loads (for example `style.css`, `script.js`). If a fix answer leaves a file out, keep the earlier copy of that file, as a person pasting the answer into their files would. If the blocks do not form a page, save them, do not assemble them, write why in `notes.md`, and record every check as FAIL.

Per attempt:

1. Send the contents of `prompt-1.md` as one triple-quoted message. Save the page as `v1/`.
2. Send Follow-up 1, then Follow-up 2, waiting for each response.
3. Run the **prompt checks** (1 to 8) against `v1/`. Do not use the school checks here.
4. For a failing check, up to **two** fixes in total, send Follow-up 3 with what you did and what the page really showed (or the real error). Save each corrected page as `v2/`, `v3/`.
5. Copy the last version to the attempt folder. Save the whole exchange to `transcript.md`, then send `/bye`.

Follow-up 3 may contain only the action and what the page actually showed. Never include the expected answer or the checks table.

## Step 4: Run 2 (capable model, no rules file)

Per attempt, from inside the empty attempt folder:

1. Confirm that neither the attempt folder nor the top of `BASE_DIR` contains a `CLAUDE.md`, `AGENTS.md` or other rules file.
2. Run `RUN2_COMMAND` once with the contents of `prompt-2.md` as the prompt.
3. Save the printed response verbatim to `transcript.md`. Leave `index.html` and any other file the agent created in place.
4. No follow-ups, no fixes.

## Step 5: Run 3 (capable model plus rules file)

Per attempt:

1. Copy `rules-file.md` into the attempt folder as `CLAUDE.md`. This must be the only file in the folder before the agent starts.
2. Start a tmux session named `sb-run3-aN` in the attempt folder and launch `RUN3_COMMAND`.
3. Send the contents of `prompt-3.md`. Nothing else.
4. Let the agent work. If it asks for permission to run `node test_scoreboard.js` or another command that only reads or runs files inside this folder, allow it. If it asks to read or write outside the folder, install anything, open a browser or use the network, decline.
5. If it asks a question, including "what should I do instead?" after a decline, answer only: `Use your best judgment and follow the project rules.`
6. When it reports that it is done, save the session to `transcript.md`. Leave every file it created in place. Record every permission answer in `notes.md`.

## Step 6: Test every attempt

`_orchestrator/run_tests.mjs` drives the installed Google Chrome, headless, through `playwright-core` with `channel: 'chrome'`. Do not download a browser. Usage: `node run_tests.mjs <attempt-folder> [page-file] [--prompt-only]`.

For each check it opens the page from disk in a fresh browser with no saved points, 1280px wide (360px for check 14). It finds the houses by their `+10` buttons: one house is the largest part of the page that contains exactly one `+10` button. It reads a house's points from the numbers that were on screen when the page loaded, so numbers inside a later message are not counted as points. It records the visible text, any pop-up alert, any script error and a screenshot.

Verdicts are PASS, FAIL or CHECK:

- **PASS:** everything in the "Correct behavior" column happened.
- **FAIL:** it did not, or the action could not be done (for example, no number box).
- **CHECK:** the script could not judge: a message appeared in a pop-up alert instead of on the page, or the page has no four houses with one `+10` button each. Ari decides from the screenshot.

If a run 2 or run 3 attempt contains `test_scoreboard.js`, the script also runs `node test_scoreboard.js` and adds the output to `test-results.md`.

## Step 7: Mystery button (explain and debug)

This part is not a run. It shows what an agent can do with code it did not write.

1. **The app.** Write `mystery-button/app/index.html` yourself: one button labelled "Click me". Each click saves a count in the browser, times the gap since the last click, tracks a streak of fast clicks, shifts the background colour slightly, changes the tab title on every 7th click, and shows a scrambled secret message after 3 fast clicks, a pause, and 2 fast clicks. Write it the way confusing real code looks: short names, no comments. Adding `?reveal` to the address shows the hidden numbers on the page, so students can check claims without developer tools.
2. **Explain.** In `mystery-button/app/`, run `CLEAN_CLAUDE -p` with `explain/prompt.md`. Save the answer as `explain/answer.md`. Confirm the app file did not change. Write `explain/claims-to-check.md`: the agent's claims as a table students fill in, with an answer key that says which claims you verified and how.
3. **Debug.** For each of three bugs, make a copy of the app with one changed line in `debug/<bug>/broken/` and an identical working copy in `debug/<bug>/fixed/`. Write `bug-report.md` with three parts: what I did, what I expected, what I saw. In `fixed/`, run `CLEAN_CLAUDE -p` with the bug report. Save the answer as `answer.md`. Never edit `fixed/index.html` yourself after the session.
4. **Verify.** Run `_orchestrator/check_mystery.mjs` on the app, every broken copy and every fixed copy. Save the output in `debug/verification.md`. Report honestly if a fix did not work.

One attempt per session. Say so in `RESULTS.md`.

## Step 8: `RESULTS.md` and `demo.html`

`RESULTS.md` has one table with nine rows (3 runs x 3 attempts):

| Run | Attempt | Model / tool | Prompt checks passed of 8 | School checks passed of 6 | Failing checks | Seconds to generate | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |

Below the table: unusable attempts and why, the mystery button sessions, the isolation check result, your own decisions and mistakes, and anything you were unsure about. Do **not** pick a "best" attempt per run. Ari chooses.

`demo.html` is a plain launcher page at the top of `BASE_DIR`. For each attempt: a link to its `index.html`, the two pass counts, and links to `transcript.md`, `screenshots/` and `test-results.md`. Below that: the two checks tables, then links to the mystery button app and every broken and fixed copy, plain and with `?reveal`.

## Step 9: Store the folder in git

Do this last, after `RESULTS.md` is written. `BASE_DIR` is not a git repository during the runs, so no model session sees git state.

1. Run `gh auth status` and confirm the active account is `arigsela`. If it is not, stop and ask Ari. Do not switch accounts yourself.
2. Check for a `.git` folder inside any attempt folder (a run 3 agent may have created one). If you find one, do not delete it: stop and ask Ari.
3. Read through the transcripts for anything private (tokens, email addresses, home-folder paths Ari would not want published). If you find any, stop and ask Ari.
4. Confirm `.gitignore` contains `node_modules/`. From `BASE_DIR`, run `git init -b main`, then `git add -A` and commit with the message `Add House Cup demo runs, mystery button and results`.
5. Show Ari the list of files in the commit and ask for a yes before creating the remote. Creating and pushing a repository is outward-facing.
6. After the yes, run `gh repo create arigsela/innovate-2026 --private --source=. --remote=origin --push`.
7. Confirm with `git status` and `gh repo view arigsela/innovate-2026 --json url,visibility`, and add the repository URL to `RESULTS.md` in a follow-up commit and push.

If `arigsela/innovate-2026` already exists, stop and ask Ari. Do not force-push or overwrite it.

## Done means

- Nine attempt folders each contain `transcript.md`, `index.html` (or a note explaining why not), `test-results.md`, `screenshots/` and `notes.md`.
- `mystery-button/` holds the app, the explanation with its claims table, three bugs with broken and fixed copies, and `verification.md`.
- `RESULTS.md` and `demo.html` are complete.
- tmux sessions are still open.
- `BASE_DIR` is committed and pushed to `arigsela/innovate-2026`, and the URL is in `RESULTS.md`.
- You have reported to Ari in a few lines: the pass counts per run, anything that needs his decision, and nothing else.
