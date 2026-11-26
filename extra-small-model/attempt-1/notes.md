# Notes: run 1, attempt 1

- Seconds to generate: 63 for the first answer, 15 for fix 1, 31 for fix 2.
- Prompt checks passed, of 8: 0 after the first answer, 3 after fix 1, 3 after fix 2. The final page also passes 0 of 6 school checks.
- Every answer was one HTML block with the style and script inside. `v1/`, `v2/` and `v3/` hold the page after each stage. `index.html` is a copy of `v3/index.html`.
- The first page showed one set of buttons and the text "0 is the Leader". From fix 1 on, +10 and -10 work, but there is no number box and the script stops with an error.
- **Orchestrator mistake in fix 2:** the message said no house had "a number box or an Award button". The page did show Award buttons, in rows separate from the +10 buttons. Only the number box was missing. The message is saved unchanged in `fix2-sent.txt`.
