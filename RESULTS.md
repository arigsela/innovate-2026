# Results: House Cup scoreboard and mystery button

Built on 2026-11-18. The earlier Grade Checker runs are in `archive/grade-checker/`.

## The three runs

All three runs got the same request (`prompt-1.md`, `prompt-2.md` and `prompt-3.md` are byte-identical). Only run 3 had the rules file. Checks are in `_orchestrator/test-checks.md`: 8 prompt checks told to every run, and 6 school checks told only to run 3.

| Run | Attempt | Model / tool | Prompt checks passed of 8 | School checks passed of 6 | Failing checks | Seconds to generate | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 · Better process | 1 | llama3.2:1b in `ollama run`, request plus feedback | 3 | 0 | 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 | 63 + 15 + 31 | 0, then 3, then 3 of 8 across the two fixes. No number box; script error. |
| 1 · Better process | 2 | llama3.2:1b in `ollama run`, request plus feedback | 0 | 1 | 1, 2 (CHECK), 3 (CHECK), 4 (CHECK), 5 (CHECK), 6 (CHECK), 7 (CHECK), 8 (CHECK), 9 (CHECK), 10 (CHECK), 11 (CHECK), 12 (CHECK), 13 (CHECK) | 37 + 276 + 147 | 0, 0, 0. Script error on load; no button works. Fix answers never showed index.html again. |
| 1 · Better process | 3 | llama3.2:1b in `ollama run`, request plus feedback | 1 | 1 | 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 | 49 + 288 + 17 | 0, 0, 1. Script error at every stage; buttons do nothing. |
| 2 · Better model | 1 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 8 | 1 | 9, 10, 11, 12, 13 | 171 | Invented houses: Maple, Oak, Cedar, Birch. |
| 2 · Better model | 2 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 8 | 1 | 9, 10, 11, 12, 13 | 115 | Invented houses: Red, Blue, Green, Gold House. |
| 2 · Better model | 3 | claude-fable-5-2, `CLEAN_CLAUDE -p`, one shot | 8 | 1 | 9, 10, 11, 12, 13 | 177 | Invented houses: Red, Blue, Green, Gold House. |
| 3 · Better harness | 1 | claude-fable-5-2, `CLEAN_CLAUDE` interactive, with `CLAUDE.md` | 8 | 6 | none | about 780, mostly permission waits | Own tests: 31 passed, 0 failed. |
| 3 · Better harness | 2 | claude-fable-5-2, `CLEAN_CLAUDE` interactive, with `CLAUDE.md` | 8 | 6 | none | about 1080, mostly permission waits | Own tests: 44 passed, 0 failed. |
| 3 · Better harness | 3 | claude-fable-5-2, `CLEAN_CLAUDE` interactive, with `CLAUDE.md` | 8 | 6 | none | about 1020, mostly permission waits | Own tests: 54 passed, 0 failed. |

Runs 1 and 2 were never told the school checks. The one they sometimes pass is check 14 (the page fits a phone screen), by chance.

## Unusable output

- Run 1, attempt 2: the page never worked at any stage. The script stops with an error when the page loads. Seven checks are recorded as CHECK because the page has no four houses with one `+10` button each, so the checks could not be performed.
- Run 1, attempt 3: the script stops with the same error at every stage. The page shows the buttons but none of them does anything.

## Mystery button (explain and debug)

`mystery-button/app/index.html` was written by the orchestrator, not by a run. The three bugs in `mystery-button/debug/` were planted by hand, one changed line each. A clean Claude Code session (`CLEAN_CLAUDE -p`, `claude-fable-5-2`) produced the explanation and the fixes, one attempt each.

| Session | Seconds | Result |
| --- | --- | --- |
| Explain | 57 | Eight claims. All eight are true (checked by script and by reading the code). The agent said it had not run the page. |
| Bug 1, count resets on reload | 15 | Fixed. The changed line is identical to the original. |
| Bug 2, secret never shows | 27 | Fixed. The changed line is identical to the original. |
| Bug 3, title changes on click 8 | 19 | Fixed. The changed line is identical to the original. |

`mystery-button/debug/verification.md` has the output of the orchestrator's check of every broken and fixed page.

## Run 2 variant: the same one-shot request on Claude Haiku

Added on 2026-11-18 at Ari's request, in `run2-haiku/`. The command is the run 2 command with only the model changed to `claude-haiku-5-5` (confirmed by a probe saved in `_orchestrator/isolation-check/J-haiku-model-check.txt`). No rules file. This variant is not in `demo.html` or the slide deck.

| Attempt | Prompt checks passed of 8 | School checks passed of 6 | Failing checks | Seconds to generate | Houses it invented |
| --- | --- | --- | --- | --- | --- |
| 1 | 8 | 1 | 9, 10, 11, 12, 13 | 122 | Red, Blue, Green, Gold House |
| 2 | 8 | 1 | 9, 10, 11, 12, 13 | 115 | Red, Blue, Green, Gold House |
| 3 | 8 | 1 | 9, 10, 11, 12, 13 | 101 | Red, Blue, Green, Yellow House |

The scores are the same as run 2 with `claude-fable-5-2`. On this request the 14 checks do not separate the two models.

## Isolation check for runs 2 and 3

Run with `CLEAN_CLAUDE -p` in `_orchestrator/isolation-check/with-rules/` before the first run 2 attempt. The answer, saved in `_orchestrator/isolation-check/I-pre-scoreboard-check.txt`: the only rules file loaded was the `CLAUDE.md` in that folder, no hook context was present, and the model was `claude-fable-5-2`.

## Orchestrator decisions

- **Small model pilot.** Before the runs, the request was tried twice on `llama3.2:1b` outside the run folders (`_orchestrator/pilot/`). Both pages looked plausible and had broken scripts. The runs went ahead with the same model.
- **Run 1 pages.** `v1/`, `v2/` and `v3/` hold the page after the first answer, fix 1 and fix 2. When a fix answer left a file out, the earlier copy of that file was kept, as a person pasting the answer into their files would do.
- **Run 1, attempt 1, fix 2.** The message the orchestrator sent said the page had no Award buttons. That was wrong: only the number box was missing. See that attempt's `notes.md`.
- **Run 3 permissions.** Allowed: `node test_scoreboard.js`. Declined: anything that read or wrote outside the attempt folder (the Chrome application folder, scripts in the session scratchpad, the real Chrome browser, a local web server). After each decline the agent asked what to do, and got only the fixed answer from the brief.
- **Test script fix.** The first version of `run_tests.mjs` counted numbers inside an error message as points and failed check 5 for run 2. It was corrected before any result here was recorded.

## Uncertainties

- Run 3 times are not comparable with runs 1 and 2. They include long waits for the orchestrator to answer permission prompts.
- Check 8 (the bar grows) measures whether anything in house 1 gets wider. It does not prove that the wider thing is a bar.
- Check 10 (house colours) accepts any element in the house filled with the main colour, not only the bar.
- The mystery button sessions were run once each. Nothing here says the agent would be right every time.

## Repository

https://github.com/arigsela/innovate-2026 (public). `_orchestrator/isolation-check/clean-config/` is kept out of the repository.
