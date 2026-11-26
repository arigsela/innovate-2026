# Checks for the House Cup scoreboard

Each check starts from a freshly loaded page with no saved points. "House 1" means the first house on the page, and so on.

**Prompt checks.** All three runs were told these.

| # | Action | Correct behavior |
| --- | --- | --- |
| 1 | Load the page | Four houses, each with `+10`, `-10`, a number box and `Award`. A `Reset` button |
| 2 | Click `+10` twice on house 1 | House 1 shows 20. The other houses do not change |
| 3 | Click `-10` on house 2 while it has 0 | House 2 stays at 0 |
| 4 | Type `25` in house 3's box, click `Award` | House 3 shows 25 |
| 5 | Type `-5` in house 1's box, click `Award` | Friendly message on the page. Points do not change |
| 6 | Click `+10` twice on house 1 and once on house 2 | Only house 1 shows the word Leader |
| 7 | Give points to houses 1 and 2, then click `Reset` | Every house is back to 0 |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | House 1's bar gets longer |

**School checks.** Only run 3 was told these, through `CLAUDE.md`.

| # | Action | Correct behavior |
| --- | --- | --- |
| 9 | Load the page | The houses are Gryffindor, Hufflepuff, Ravenclaw, Slytherin, in that order |
| 10 | Give every house 10 points | Each bar is filled with its house's main colour |
| 11 | Type `60` in house 1's box, click `Award` | Friendly message on the page. Points do not change |
| 12 | Click `+10` once on house 1 and once on house 2 | Nobody shows Leader. Houses 1 and 2 show Tied |
| 13 | Click `+10` twice on house 1, then reload the page | House 1 still shows 20 |
| 14 | Load the page at 360px wide | No sideways scrolling |
