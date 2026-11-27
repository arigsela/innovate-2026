# Vibe coding: three runs and a mystery button

Material for a 35-minute high school workshop about coding with AI. The same small web app
was built three times by AI, with one thing changed each time. Then an AI agent explained and
debugged a page it did not write.

Everything the AI produced is saved here unchanged, bugs included.

## Start here

Download or clone the repo, then open one of these files in Chrome by double-clicking it.
Neither needs internet or a web server.

| File | What it is |
| --- | --- |
| `slides.html` | The slide deck. The pages inside the slides are the real pages from this repo, and you can click them. |
| `demo.html` | A plain list of links to every page, its chat transcript, its screenshots and its test results. |

Keys in `slides.html`: Right or Space for the next step, Left to go back, `N` for speaker
notes, `F` for full screen. After you click inside a live page, move the mouse off it before
you use the keys. The Open button on a live page shows that page full size in a new tab.

## The experiment

The app is House Cup: a points scoreboard for four school houses. All three runs used the
same model (`claude-fable-5-2`), and each run was made three times. Run 1 got one line:
`make a scoreboard web page for spirit week`. Runs 2 and 3 got the same clear request, word
for word (`prompt-2.md` and `prompt-3.md`).

| Run | What changed | Checks from the request, of 8 | School checks, of 6 |
| --- | --- | --- | --- |
| 1 · One-line prompt | Eight words, one try, no follow-ups | 0, 0, 0 | 1, 1, 1 |
| 2 · Better prompt | A clear request: what it does, the rules, an example | 8, 8, 8 | 1, 1, 1 |
| 3 · Better harness | The same clear request, plus a rules file in the project | 8, 8, 8 | 6, 6, 6 |

The three numbers in a cell are the three tries. Run 1's pages work and look finished. They
score 0 because they are a different app: the model had to guess what we wanted. The school
checks are the school's own houses and rules. Only run 3 was told them, through its rules
file, so run 2 fails them because nobody told it, not because it made mistakes.

`RESULTS.md` has the full table, the times, and what is uncertain about the results.

## The mystery button

`mystery-button/` holds a page with one button that does eight hidden things. An agent
explained the code, and fixed three bugs that were planted by hand. Students can repeat this
at home with the worksheet in `mystery-button/README.md`.

## What is in each folder

| Path | What it holds |
| --- | --- |
| `run1-one-line-prompt/` | Run 1: the one-line request and three tries. |
| `run2-better-prompt/` | Run 2: the clear request and three tries. |
| `run2-haiku/` | Extra: run 2 again on a smaller Claude model (`claude-haiku-5-5`). Same scores. Not in the slides. |
| `extra-small-model/` | Extra: the clear request on a small model (`llama3.2:1b`), with real errors pasted back. Each try keeps the page after every fix in `v1/`, `v2/` and `v3/`. Not in the slides. |
| `run3-better-harness/` | Run 3: the request, the rules file (`rules-file.md`) and three tries. Each try has the tests the agent wrote. |
| `mystery-button/` | The page, the agent's explanation, the three bugs with broken and fixed copies, and the worksheet. |
| `docs/instructions.md` | The brief given to the agent that set up, ran and tested everything. |
| `_orchestrator/` | The scripts that ran and tested the tries, and the list of checks (`test-checks.md`). |
| `archive/grade-checker/` | An earlier version of the demo with a different app. |
| `assets/fonts/` | The fonts `slides.html` uses, so that it works offline. |

Every try folder has `index.html` (the page), `transcript.md` (the chat), `screenshots/`,
`test-results.md` and `notes.md`.

## Run the checks again

The checks drive the Google Chrome installed on your computer. You need Node.js.

```sh
cd _orchestrator
npm ci
node run_tests.mjs ../run3-better-harness/attempt-1
```

## Good to know

- Each run was made three times and each mystery button session once. That shows what
  happened here, not what would happen every time.
- The house names, colours and rules in the rules file were made up for the demo.
- The transcripts contain file paths from the computer the runs were made on.
- The fonts in `assets/fonts/` (Inter, Space Grotesk and JetBrains Mono) are under the SIL
  Open Font License.
