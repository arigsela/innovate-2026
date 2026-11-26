# Test results

Page: `index.html`

- Prompt checks passed: 3 of 8
- School checks passed: 0 of 6

| # | Check | Verdict | What happened |
| --- | --- | --- | --- |
| 1 | Load the page | PASS | Four houses, each with +10, -10, a number box and Award. A Reset button exists. |
| 2 | Click +10 twice on house 1 | PASS | House 1 shows 20. The other houses did not change. |
| 3 | Click -10 on house 2 while it has 0 | PASS | House 2 stays at 0. |
| 4 | Type 25 in house 3 and click Award | FAIL | House 3 does not show 25. It shows: "0". |
| 5 | Type -5 in house 1 and click Award | FAIL | Points unchanged, but no message appeared on the page. |
| 6 | Click +10 twice on house 1 and once on house 2 | FAIL | No house shows the word Leader. |
| 7 | Give points to houses 1 and 2, then click Reset | FAIL | Not every house went back to 0: "20", "0", "0", "0". |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | FAIL | Nothing in house 1 got wider between 10 and 40 points. No bar grows. |
| 9 | Load the page and read the house names | FAIL | house 1 is not Gryffindor; house 2 is not Hufflepuff; house 3 is not Ravenclaw; house 4 is not Slytherin. The houses are: "0", "0", "0", "0". |
| 10 | Give every house 10 points and look at the colours | FAIL | No element filled with the house's main colour for: Gryffindor, Hufflepuff, Ravenclaw, Slytherin. |
| 11 | Type 60 in house 1 and click Award | FAIL | Points unchanged, but no message appeared on the page. |
| 12 | Click +10 once on house 1 and once on house 2 | FAIL | No Leader, but houses 1 and 2 do not show the word Tied. |
| 13 | Click +10 twice on house 1, then reload the page | FAIL | The points were lost. House 1 shows: "0". |
| 14 | Load the page at 360px wide | FAIL | The page is 928px wide, so it scrolls sideways. |

## Check 1: Load the page

Verdict: PASS. Four houses, each with +10, -10, a number box and Award. A Reset button exists.

Screenshot: `screenshots/check-01.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 2: Click +10 twice on house 1

Verdict: PASS. House 1 shows 20. The other houses did not change.

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
Spirit Week Scoreboard

20

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 3: Click -10 on house 2 while it has 0

Verdict: PASS. House 2 stays at 0.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 4: Type 25 in house 3 and click Award

Verdict: FAIL. House 3 does not show 25. It shows: "0".

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 5: Type -5 in house 1 and click Award

Verdict: FAIL. Points unchanged, but no message appeared on the page.

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Pop-up alerts: "Enter your number of points:", "Please enter a whole number greater than 0!"

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: FAIL. No house shows the word Leader.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
Spirit Week Scoreboard

20

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: FAIL. Not every house went back to 0: "20", "0", "0", "0".

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
Spirit Week Scoreboard

20

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: FAIL. Nothing in house 1 got wider between 10 and 40 points. No bar grows.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
Spirit Week Scoreboard

40

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 9: Load the page and read the house names

Verdict: FAIL. house 1 is not Gryffindor; house 2 is not Hufflepuff; house 3 is not Ravenclaw; house 4 is not Slytherin. The houses are: "0", "0", "0", "0".

Screenshot: `screenshots/check-09.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 10: Give every house 10 points and look at the colours

Verdict: FAIL. No element filled with the house's main colour for: Gryffindor, Hufflepuff, Ravenclaw, Slytherin.

Screenshot: `screenshots/check-10.png`

Visible text at the end:

```
Spirit Week Scoreboard

10

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 11: Type 60 in house 1 and click Award

Verdict: FAIL. Points unchanged, but no message appeared on the page.

Screenshot: `screenshots/check-11.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Pop-up alerts: "Enter your number of points:", "Please enter a whole number greater than 0!"

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 12: Click +10 once on house 1 and once on house 2

Verdict: FAIL. No Leader, but houses 1 and 2 do not show the word Tied.

Screenshot: `screenshots/check-12.png`

Visible text at the end:

```
Spirit Week Scoreboard

10

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 13: Click +10 twice on house 1, then reload the page

Verdict: FAIL. The points were lost. House 1 shows: "0".

Screenshot: `screenshots/check-13.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"

## Check 14: Load the page at 360px wide

Verdict: FAIL. The page is 928px wide, so it scrolls sideways.

Screenshot: `screenshots/check-14.png`

Visible text at the end:

```
Spirit Week Scoreboard

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset

0

+10 -10  Award Reset
```

Script errors: "Cannot set properties of null (setting 'innerHTML')"
