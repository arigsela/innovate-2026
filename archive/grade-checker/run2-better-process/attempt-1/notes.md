# Notes: run 2, attempt 1

- Seconds to generate: about 59 in total (first answer 19, follow-ups 15 and 7, fixes 9 and 9).
- Launched with `ollama run llama3.2:1b --nowordwrap` (see run 1 notes for why).
- Versions are kept as folders, not as `index_v1.html`, because the model split the page into several files: `v1/` is the first answer, `v2/` after fix 1, `v3/` after fix 2. The top-level files are a copy of `v3/`. Each version folder has its own `test-results.md` (prompt checks only) and `screenshots/`.
- The exact fix messages sent are in `fix1-sent.txt` and `fix2-sent.txt`. Each held one input and what the page really showed. Two fixes were sent, the limit.
- Raw blocks are in `blocks/` (`tN-` is the response number), the raw tmux capture is in `pane-capture.txt`.
- The first answer gave `style.css` and `script.js` twice each. The later block was saved under each name, as a person following the steps in order would end up with. All five blocks are in `blocks/`.
- The fix answers gave one unnamed JavaScript block and one unnamed CSS block. They were saved as `script.js` and `style.css`, the names the answer's own `index.html` loads.
- v1: 0 of 7 (`calculateAverageAndGrade is not defined`). v2: 3 of 7. v3: 3 of 7. Fix 2 did not change the result for empty input.
