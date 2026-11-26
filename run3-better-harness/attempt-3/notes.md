# Notes: run 3, attempt 3

- Time from prompt to "done": about 17 minutes. Most of that is the agent waiting for the orchestrator to answer permission prompts, so do not read it as generation time.
- Command: `CLEAN_CLAUDE` as written in the brief, interactive, in tmux session `sb-run3-a3`. `CLAUDE.md` was the only file in the folder at the start.
- The agent created `index.html`, `scoreboard.js` and `test_scoreboard.js`. `index.html` needs `scoreboard.js` beside it.
- Its own tests: `node test_scoreboard.js` reports: 54 passed, 0 failed (rerun by the orchestrator; output is at the end of `test-results.md`).
- Checks: 8 6 of 8 prompt checks and  of 6 school checks.
- Permission prompts and how the orchestrator answered them:
  - declined a command that ran node test_scoreboard.js but also read /Applications/Google Chrome.app (outside the attempt folder)
  - the decline interrupted the agent, which asked what to do instead; sent the brief's fixed answer: Use your best judgment and follow the project rules.
  - allowed node test_scoreboard.js
  - declined a page-check script that copies the page to its session scratchpad under /private/tmp and runs headless Chrome there (outside the attempt folder)
  - the decline interrupted the agent, which asked what to do instead; sent the brief's fixed answer: Use your best judgment and follow the project rules.
- The only text sent besides the prompt was the fixed answer from the brief.
