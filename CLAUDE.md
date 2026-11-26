# Rules for coding agents in this repo

This repo is the material for a high school workshop: `slides.html` (the deck), `demo.html`
(links to every page) and the saved output of AI runs. `README.md` explains the layout.
The repo is public.

## Never change what a model produced

The value of this repo is the honest difference between the runs. These are records, not
code to improve:

- Everything inside an `attempt-N/` folder, in `run1-better-process/`, `run2-better-model/`,
  `run2-haiku/`, `run3-better-harness/` and `archive/`.
- `answer.md` and `fixed/index.html` in `mystery-button/`.
- The prompt files (`prompt-N.md`, `followups.md`, `rules-file.md`, `bug-report.md`). The
  three `prompt-N.md` files must stay byte-identical.

If one of these looks wrong, say so and leave it. Do not fix a bug in a run's page.

## What you may change

`slides.html`, `demo.html`, `README.md`, `RESULTS.md`, `mystery-button/README.md`, this file,
and the scripts in `_orchestrator/`.

- Numbers in `slides.html`, `demo.html` and `README.md` come from `RESULTS.md`. Do not state
  a result that is not there.
- The audience is high school students. Use short sentences and plain words.

## `slides.html`

- It must work offline when opened by double-click. No web fonts, no CDN, no build step,
  no libraries. Fonts are in `assets/fonts/`.
- Every slide is a `<section class="slide">` on a fixed 1920 x 1080 stage. Content must fit
  inside the 128px padding. A slide that overflows gets split, not shrunk.
- A click step is `class="fragment"`. Speaker notes are the `<aside>` at the end of a slide.
- A live page is `<div class="live" style="width:..;height:.." data-w=".." data-src="..">`.
  `data-src` is a path to a real page in this repo. Never copy a run's page into the slide.
- After a change, open it in Chrome and check every slide you touched.

## Privacy

- No secret, password, token or private hostname in any file.
- No name of an employer or a client, and nothing copied from private work. The two "at my
  job" slides hold numbers only, and stay that way.
- `_orchestrator/isolation-check/clean-config/` is ignored by git. Keep it ignored.

## Git

- The remote is `arigsela/innovate-2026`. Push only when asked.
- Check `gh auth status` first. If the active account is not `arigsela`, stop and ask. Do not
  switch accounts yourself.

## Running the runs again

This file sits at the top of the repo, so an agent started in any subfolder reads it. A run
must not see it. `_orchestrator/clean-settings.json` excludes it for the `CLEAN_CLAUDE`
command in `docs/instructions.md`. Before any new run, repeat the isolation check in that
brief and confirm this file is not listed.
