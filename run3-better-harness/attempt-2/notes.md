# Notes: run 3, attempt 2

- Time from prompt to "done": about 18 minutes. Most of that is the agent waiting for the orchestrator to answer permission prompts, so do not read it as generation time.
- Command: `CLEAN_CLAUDE` as written in the brief, interactive, in tmux session `sb-run3-a2`. `CLAUDE.md` was the only file in the folder at the start.
- The agent created `index.html`, `scoreboard.js` and `test_scoreboard.js`. `index.html` needs `scoreboard.js` beside it.
- Its own tests: `node test_scoreboard.js` reports: 44 passed, 0 failed (rerun by the orchestrator; output is at the end of `test-results.md`).
- Checks: 8 6 of 8 prompt checks and  of 6 school checks.
- Permission prompts and how the orchestrator answered them:
  - allowed node test_scoreboard.js
  - allowed node test_scoreboard.js | tail -8
  - declined python3 -m http.server 8765 (starts a local web server: network use)
  - the decline interrupted the agent, which asked what to do instead; sent the brief's fixed answer: Use your best judgment and follow the project rules.
  - denied 'Claude in Chrome wants to create a browser window and read your tabs' (acts on Ari's real browser, outside the attempt folder)
  - the decline interrupted the agent, which asked what to do instead; sent the brief's fixed answer: Use your best judgment and follow the project rules.
  - declined a smoke script written to its session scratchpad under /private/tmp (outside the attempt folder)
  - the decline interrupted the agent, which asked what to do instead; sent the brief's fixed answer: Use your best judgment and follow the project rules.
  - allowed node test_scoreboard.js
- The only text sent besides the prompt was the fixed answer from the brief.
