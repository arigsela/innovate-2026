# Results: House Cup scoreboard and mystery button

Runs 2 and 3 and the mystery button were built on 2026-11-18. Run 1 was replaced on 2026-11-26 (see "What changed on 2026-11-26"). The earlier Grade Checker runs are in `archive/grade-checker/`.

## The three runs

All three runs used the same model, `claude-fable-5-2` in Claude Code. Run 1 got a one-line request (`run1-one-line-prompt/prompt-1.md`). Runs 2 and 3 got the same clear request (`prompt-2.md` and `prompt-3.md` are byte-identical). Only run 3 had the rules file. Checks are in `_orchestrator/test-checks.md`: 8 prompt checks, which describe the clear request, and 6 school checks told only to run 3.

| Run | Attempt | Model / tool | Prompt checks passed of 8 | School checks passed of 6 | Failing checks | Seconds to generate | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 · One-line prompt | 1 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 0 | 1 | 1, 2 to 13 (CHECK) | 159 | Freshmen, Sophomores, Juniors, Seniors. Standings and a points-by-day table, filled with made-up scores. |
| 1 · One-line prompt | 2 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 0 | 1 | 1, 2 to 13 (CHECK) | 95 | Freshmen, Sophomores, Juniors, Seniors. A score sheet to type into, five events, a Present mode, all zeros. |
| 1 · One-line prompt | 3 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 0 | 1 | 1, 2 to 13 (CHECK) | 208 | Freshmen, Sophomores, Juniors, Seniors. A first-place banner and ten events, six filled with made-up scores. |
| 2 · Better prompt | 1 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 8 | 1 | 9, 10, 11, 12, 13 | 171 | Invented houses: Maple, Oak, Cedar, Birch. |
| 2 · Better prompt | 2 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 8 | 1 | 9, 10, 11, 12, 13 | 115 | Invented houses: Red, Blue, Green, Gold House. |
| 2 · Better prompt | 3 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 8 | 1 | 9, 10, 11, 12, 13 | 177 | Invented houses: Red, Blue, Green, Gold House. |
| 3 · Better harness | 1 | claude-fable-5-2, `CLEAN_CLAUDE` interactive, with `CLAUDE.md` | 8 | 6 | none | about 780, mostly permission waits | Own tests: 31 passed, 0 failed. |
| 3 · Better harness | 2 | claude-fable-5-2, `CLEAN_CLAUDE` interactive, with `CLAUDE.md` | 8 | 6 | none | about 1080, mostly permission waits | Own tests: 44 passed, 0 failed. |
| 3 · Better harness | 3 | claude-fable-5-2, `CLEAN_CLAUDE` interactive, with `CLAUDE.md` | 8 | 6 | none | about 1020, mostly permission waits | Own tests: 54 passed, 0 failed. |

Runs 1 and 2 were never told the school checks. The one they pass is check 14 (the page fits a phone screen), by chance.

### How to read run 1's score

Run 1's pages are not broken. Each one opens, works and looks finished. They score 0 of 8 because the prompt checks describe the app in the clear request, and run 1 was never given that request:

- Check 1 fails: no page has houses with a `+10` button, and none has a `Reset` button.
- Checks 2 to 13 are recorded as CHECK. The test script finds a house by its `+10` button, found none, and could not perform the action. They are counted as not passed.
- All three pages invented the same four teams (Freshmen, Sophomores, Juniors, Seniors) and three different ways to enter points. Attempts 1 and 3 show made-up scores when first opened.

Run 1 was told none of the prompt checks, in the same way that run 2 was told none of the school checks.

## What changed on 2026-11-26

At Ari's request, run 1 was replaced so that all three runs use one model and only one thing changes at each step: the prompt, then the rules file.

- The new run 1 is in `run1-one-line-prompt/`. Its prompt is `make a scoreboard web page for spirit week`.
- The run that was run 1 until then (a small model with a clear request and feedback) is in `extra-small-model/`. Its results are below.
- `run2-better-model/` was renamed `run2-better-prompt/`, because the step from run 1 to run 2 is now the prompt. Its files did not change. Transcripts and notes inside the attempt folders still use the old run names.
- The new attempts were made with the run 2 command (`CLEAN_CLAUDE -p`), three at the same time, each in its own empty folder outside this repo, and then copied in. The repo is now in git and has a top-level `CLAUDE.md`, and a run must see neither.

## Mystery button (explain and debug)

`mystery-button/app/index.html` was written by the orchestrator, not by a run. The three bugs in `mystery-button/debug/` were planted by hand, one changed line each. A clean Claude Code session (`CLEAN_CLAUDE -p`, `claude-fable-5-2`) produced the explanation and the fixes, one attempt each.

| Session | Seconds | Result |
| --- | --- | --- |
| Explain | 57 | Eight claims. All eight are true (checked by script and by reading the code). The agent said it had not run the page. |
| Bug 1, count resets on reload | 15 | Fixed. The changed line is identical to the original. |
| Bug 2, secret never shows | 27 | Fixed. The changed line is identical to the original. |
| Bug 3, title changes on click 8 | 19 | Fixed. The changed line is identical to the original. |

`mystery-button/debug/verification.md` has the output of the orchestrator's check of every broken and fixed page.

## Extra: the small-model run (run 1 until 2026-11-26)

In `extra-small-model/`. The clear request on `llama3.2:1b` in `ollama run`, followed by two questions and up to two fixes, where we pasted back what the page really did. This run is not in `slides.html`.

| Attempt | Prompt checks passed of 8 | School checks passed of 6 | Failing checks | Seconds to generate | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | 3 | 0 | 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 | 63 + 15 + 31 | 0, then 3, then 3 of 8 across the two fixes. No number box; script error. |
| 2 | 0 | 1 | 1, 2 (CHECK), 3 (CHECK), 4 (CHECK), 5 (CHECK), 6 (CHECK), 7 (CHECK), 8 (CHECK), 9 (CHECK), 10 (CHECK), 11 (CHECK), 12 (CHECK), 13 (CHECK) | 37 + 276 + 147 | 0, 0, 0. Script error on load; no button works. Fix answers never showed index.html again. |
| 3 | 1 | 1 | 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 | 49 + 288 + 17 | 0, 0, 1. Script error at every stage; buttons do nothing. |

Unusable output:

- Attempt 2: the page never worked at any stage. The script stops with an error when the page loads. Seven checks are recorded as CHECK because the page has no four houses with one `+10` button each, so the checks could not be performed.
- Attempt 3: the script stops with the same error at every stage. The page shows the buttons but none of them does anything.

## Extra: the clear request on Claude Haiku

Added on 2026-11-18 at Ari's request, in `run2-haiku/`. The command is the run 2 command with only the model changed to `claude-haiku-5-5` (confirmed by a probe saved in `_orchestrator/isolation-check/J-haiku-model-check.txt`). No rules file. This variant is not in `demo.html` or the slide deck.

| Attempt | Prompt checks passed of 8 | School checks passed of 6 | Failing checks | Seconds to generate | Houses it invented |
| --- | --- | --- | --- | --- | --- |
| 1 | 8 | 1 | 9, 10, 11, 12, 13 | 122 | Red, Blue, Green, Gold House |
| 2 | 8 | 1 | 9, 10, 11, 12, 13 | 115 | Red, Blue, Green, Gold House |
| 3 | 8 | 1 | 9, 10, 11, 12, 13 | 101 | Red, Blue, Green, Yellow House |

The scores are the same as run 2 with `claude-fable-5-2`. On this request the 14 checks do not separate the two models.

## Isolation checks

- **Runs 2 and 3.** Run with `CLEAN_CLAUDE -p` in `_orchestrator/isolation-check/with-rules/` before the first run 2 attempt. The answer, saved in `_orchestrator/isolation-check/I-pre-scoreboard-check.txt`: the only rules file loaded was the `CLAUDE.md` in that folder, no hook context was present, and the model was `claude-fable-5-2`.
- **After the top-level `CLAUDE.md` was added (2026-11-26).** The same check, saved in `K-root-claude-md-check.txt`: the top-level `CLAUDE.md` was not loaded, because `clean-settings.json` now excludes it. The session did see the repo's git status, which is why the new run 1 was made outside the repo.
- **The new run 1.** No separate probe was run in the outside folder. It used the same command and settings file, in a folder with no `CLAUDE.md` above it and no git repo.

## Orchestrator decisions

- **Small model pilot.** Before the runs, the request was tried twice on `llama3.2:1b` outside the run folders (`_orchestrator/pilot/`). Both pages looked plausible and had broken scripts. The runs went ahead with the same model.
- **Small-model pages.** `v1/`, `v2/` and `v3/` hold the page after the first answer, fix 1 and fix 2. When a fix answer left a file out, the earlier copy of that file was kept, as a person pasting the answer into their files would do.
- **Small-model run, attempt 1, fix 2.** The message the orchestrator sent said the page had no Award buttons. That was wrong: only the number box was missing. See that attempt's `notes.md`.
- **Run 3 permissions.** Allowed: `node test_scoreboard.js`. Declined: anything that read or wrote outside the attempt folder (the Chrome application folder, scripts in the session scratchpad, the real Chrome browser, a local web server). After each decline the agent asked what to do, and got only the fixed answer from the brief.
- **Test script fix.** The first version of `run_tests.mjs` counted numbers inside an error message as points and failed check 5 for run 2. It was corrected before any result here was recorded.
- **Run 1 prompt.** The one-line prompt does not say "house". That was a choice: it is what a quick first ask looks like. A prompt that named houses could have scored differently.

## Uncertainties

- Run 3 times are not comparable with runs 1 and 2. They include long waits for the orchestrator to answer permission prompts.
- Run 1's three attempts ran at the same time, which may have made each one slower.
- Run 1 was made eight days after runs 2 and 3, with the same model ID and command.
- Check 8 (the bar grows) measures whether anything in house 1 gets wider. It does not prove that the wider thing is a bar.
- Check 10 (house colours) accepts any element in the house filled with the main colour, not only the bar.
- Each run was made three times, and the mystery button sessions once each. Nothing here says the results would be the same every time.

## Repository

https://github.com/arigsela/innovate-2026 (public). `_orchestrator/isolation-check/clean-config/` is kept out of the repository.
