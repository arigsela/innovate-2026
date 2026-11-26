# Notes: run 2, attempt 2

- Seconds to generate: about 65 in total (first answer 14, follow-ups 17 and 8, fixes 13 and 13).
- Launched with `ollama run llama3.2:1b --nowordwrap` (see run 1 notes for why).
- Versions are kept as folders, not as `index_v1.html`, because the model split the page into several files: `v1/` is the first answer, `v2/` after fix 1, `v3/` after fix 2. The top-level files are a copy of `v3/`. Each version folder has its own `test-results.md` (prompt checks only) and `screenshots/`.
- The exact fix messages sent are in `fix1-sent.txt` and `fix2-sent.txt`. Each held one input and what the page really showed. Two fixes were sent, the limit.
- Raw blocks are in `blocks/` (`tN-` is the response number), the raw tmux capture is in `pane-capture.txt`.
- The first answer gave `script.js` twice. The later block was saved, as a person following the steps in order would end up with. Both blocks are in `blocks/`.
- v1: 0 of 7 (clicking did nothing, no error). v2: 5 of 7. v3: 5 of 7. Fix 2 did not change the result for empty input.
