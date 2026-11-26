# Test checks

Each check starts from a freshly loaded page.

## Prompt checks

Runs 2, 3 and 4 were all told these.

| # | Typed, then click Calculate | Correct behavior |
| --- | --- | --- |
| 1 | `85, 90, 78` | Average 84.3, grade B |
| 2 | nothing | Friendly message on the page, no grade |
| 3 | `abc` | Friendly message on the page, no grade |
| 4 | `105` | Rejected (scores must be 0-100), no grade |
| 5 | `-5` | Rejected (scores must be 0-100), no grade |
| 6 | `80` | Grade B |
| 7 | `100` | Grade A |

## Project checks

Only run 4 was told these, through `CLAUDE.md`.

| # | Action | Correct behavior |
| --- | --- | --- |
| 8 | Type `85, 90, 78, 40`, click Calculate | Page says 40 was dropped. Average 84.3, grade B |
| 9 | Type `89.5`, click Calculate | Average 89.5, grade A |
| 10 | Type `65, 68`, click Calculate | Average 66.5, grade D, and the line "Retake needed" |
| 11 | Type `85, 90, 78`, press Enter (no click) | Average 84.3, grade B |
| 12 | Load the page at 360px wide | No sideways scrolling |
