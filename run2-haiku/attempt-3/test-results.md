# Test results

Page: `index.html`

- Prompt checks passed: 8 of 8
- School checks passed: 1 of 6

| # | Check | Verdict | What happened |
| --- | --- | --- | --- |
| 1 | Load the page | PASS | Four houses, each with +10, -10, a number box and Award. A Reset button exists. |
| 2 | Click +10 twice on house 1 | PASS | House 1 shows 20. The other houses did not change. |
| 3 | Click -10 on house 2 while it has 0 | PASS | House 2 stays at 0. |
| 4 | Type 25 in house 3 and click Award | PASS | House 3 shows 25. |
| 5 | Type -5 in house 1 and click Award | PASS | Points unchanged. Message on the page: "Oops! Please type a whole number greater than 0, like 5 or 10. The points were not changed.". |
| 6 | Click +10 twice on house 1 and once on house 2 | PASS | Only house 1 shows the word Leader. |
| 7 | Give points to houses 1 and 2, then click Reset | PASS | Every house is back to 0. |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | PASS | Something in house 1 got wider between 10 and 40 points. |
| 9 | Load the page and read the house names | FAIL | house 1 is not Gryffindor; house 2 is not Hufflepuff; house 3 is not Ravenclaw; house 4 is not Slytherin. The houses are: "Red House 0 points", "Blue House 0 points", "Green House 0 points", "Yellow House 0 points". |
| 10 | Give every house 10 points and look at the colours | FAIL | No element filled with the house's main colour for: Gryffindor, Hufflepuff, Ravenclaw, Slytherin. |
| 11 | Type 60 in house 1 and click Award | FAIL | The award was accepted. House 1 shows: "Red House Leader 60 points". |
| 12 | Click +10 once on house 1 and once on house 2 | FAIL | The word Leader shows on house 1 and 2 although houses 1 and 2 are level. |
| 13 | Click +10 twice on house 1, then reload the page | FAIL | The points were lost. House 1 shows: "Red House 0 points". |
| 14 | Load the page at 360px wide | PASS | No sideways scrolling. |

## Check 1: Load the page

Verdict: PASS. Four houses, each with +10, -10, a number box and Award. A Reset button exists.

Screenshot: `screenshots/check-01.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 2: Click +10 twice on house 1

Verdict: PASS. House 1 shows 20. The other houses did not change.

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
LEADER
20 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 3: Click -10 on house 2 while it has 0

Verdict: PASS. House 2 stays at 0.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 4: Type 25 in house 3 and click Award

Verdict: PASS. House 3 shows 25.

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
LEADER
25 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 5: Type -5 in house 1 and click Award

Verdict: PASS. Points unchanged. Message on the page: "Oops! Please type a whole number greater than 0, like 5 or 10. The points were not changed.".

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Oops! Please type a whole number greater than 0, like 5 or 10. The points were not changed.
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: PASS. Only house 1 shows the word Leader.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
LEADER
20 points
-10
+10
Award
Blue House
10 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: PASS. Every house is back to 0.

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: PASS. Something in house 1 got wider between 10 and 40 points.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
40 points
-10
+10
Award
Blue House
LEADER
50 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 9: Load the page and read the house names

Verdict: FAIL. house 1 is not Gryffindor; house 2 is not Hufflepuff; house 3 is not Ravenclaw; house 4 is not Slytherin. The houses are: "Red House 0 points", "Blue House 0 points", "Green House 0 points", "Yellow House 0 points".

Screenshot: `screenshots/check-09.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 10: Give every house 10 points and look at the colours

Verdict: FAIL. No element filled with the house's main colour for: Gryffindor, Hufflepuff, Ravenclaw, Slytherin.

Screenshot: `screenshots/check-10.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
LEADER
10 points
-10
+10
Award
Blue House
LEADER
10 points
-10
+10
Award
Green House
LEADER
10 points
-10
+10
Award
Yellow House
LEADER
10 points
-10
+10
Award
```

## Check 11: Type 60 in house 1 and click Award

Verdict: FAIL. The award was accepted. House 1 shows: "Red House Leader 60 points".

Screenshot: `screenshots/check-11.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
LEADER
60 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 12: Click +10 once on house 1 and once on house 2

Verdict: FAIL. The word Leader shows on house 1 and 2 although houses 1 and 2 are level.

Screenshot: `screenshots/check-12.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
LEADER
10 points
-10
+10
Award
Blue House
LEADER
10 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 13: Click +10 twice on house 1, then reload the page

Verdict: FAIL. The points were lost. House 1 shows: "Red House 0 points".

Screenshot: `screenshots/check-13.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```

## Check 14: Load the page at 360px wide

Verdict: PASS. No sideways scrolling.

Screenshot: `screenshots/check-14.png`

Visible text at the end:

```
Spirit Week House Points
Reset
Red House
0 points
-10
+10
Award
Blue House
0 points
-10
+10
Award
Green House
0 points
-10
+10
Award
Yellow House
0 points
-10
+10
Award
```
