# Notes: run 1 (one-line prompt), attempt 1

- Seconds to generate: 159.
- Made on 2026-11-26. Command: `CLEAN_CLAUDE -p` as written in the brief, started in an empty folder outside this repo, then copied here. The repo is in git and has a top-level `CLAUDE.md`, and a run must see neither.
- One prompt, no follow-ups. The agent wrote `index.html` itself. `response.txt` is what it printed, and `stderr.txt` holds one warning about the sign-in date.
- What it built: Freshmen, Sophomores, Juniors, Seniors. Standings plus a points-by-day table, filled with made-up scores for Monday to Wednesday.
- Checks: 0 of 8 prompt checks and 1 of 6 school checks. Check 1 failed: the page has no houses with a `+10` button and no `Reset` button. Checks 2 to 13 are recorded as CHECK, because the test script could not find four houses to click. The page is not broken. It is a different app from the one the checks describe. Check 14 (fits a phone) passed by chance.
