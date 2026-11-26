# Notes: run 2, attempt 3

- Seconds to generate: about 72 in total (first answer 13, follow-ups 25 and 9, fixes 13 and 12).
- Launched with `ollama run llama3.2:1b --nowordwrap` (see run 1 notes for why).
- Versions are kept as folders, not as `index_v1.html`, because the model split the page into several files: `v1/` is the first answer, `v2/` after fix 1, `v3/` after fix 2. The top-level files are a copy of `v3/`. Each version folder has its own `test-results.md` (prompt checks only) and `screenshots/`.
- The exact fix messages sent are in `fix1-sent.txt` and `fix2-sent.txt`. Each held one input and what the page really showed. Two fixes were sent, the limit.
- Raw blocks are in `blocks/` (`tN-` is the response number), the raw tmux capture is in `pane-capture.txt`.
- This attempt is a single `index.html` with the CSS and JavaScript inside.
- v1: 3 of 7. v2: 3 of 7. v3: 3 of 7. The fix 2 answer was byte-identical to v2.
- The page shows the letter alone (`B`), not `Grade: B`. The checks count that as showing the grade.
- Every check logs `Failed to load resource: net::ERR_FILE_NOT_FOUND`: the page asks for a file that does not exist.
