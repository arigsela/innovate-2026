# Test results

Page: `index.html`

- Prompt checks passed: 2 of 8
- School checks passed: 1 of 6

| # | Check | Verdict | What happened |
| --- | --- | --- | --- |
| 1 | Load the page | PASS | Four houses, each with +10, -10, a number box and Award. A Reset button exists. |
| 2 | Click +10 twice on house 1 | FAIL | House 1 does not show 20. It shows: "House 1 Points: 0". |
| 3 | Click -10 on house 2 while it has 0 | PASS | House 2 stays at 0. |
| 4 | Type 25 in house 3 and click Award | FAIL | House 3 does not show 25. It shows: "House 3 Points: 0". |
| 5 | Type -5 in house 1 and click Award | FAIL | Points unchanged, but no message appeared on the page. |
| 6 | Click +10 twice on house 1 and once on house 2 | FAIL | No house shows the word Leader. |
| 7 | Give points to houses 1 and 2, then click Reset | FAIL | The +10 buttons did not change any points, so Reset could not be tested. |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | FAIL | Nothing in house 1 got wider between 10 and 40 points. No bar grows. |
| 9 | Load the page and read the house names | FAIL | house 1 is not Gryffindor; house 2 is not Hufflepuff; house 3 is not Ravenclaw; house 4 is not Slytherin. The houses are: "House 1 Points: 0", "House 2 Points: 0", "House 3 Points: 0", "House 4 Points: 0". |
| 10 | Give every house 10 points and look at the colours | FAIL | No element filled with the house's main colour for: Gryffindor, Hufflepuff, Ravenclaw, Slytherin. |
| 11 | Type 60 in house 1 and click Award | FAIL | Points unchanged, but no message appeared on the page. |
| 12 | Click +10 once on house 1 and once on house 2 | FAIL | No Leader, but houses 1 and 2 do not show the word Tied. |
| 13 | Click +10 twice on house 1, then reload the page | FAIL | The points were lost. House 1 shows: "House 1 Points: 0". |
| 14 | Load the page at 360px wide | PASS | No sideways scrolling. |

## Check 1: Load the page

Verdict: PASS. Four houses, each with +10, -10, a number box and Award. A Reset button exists.

Screenshot: `screenshots/check-01.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 2: Click +10 twice on house 1

Verdict: FAIL. House 1 does not show 20. It shows: "House 1 Points: 0".

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 3: Click -10 on house 2 while it has 0

Verdict: PASS. House 2 stays at 0.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 4: Type 25 in house 3 and click Award

Verdict: FAIL. House 3 does not show 25. It shows: "House 3 Points: 0".

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 5: Type -5 in house 1 and click Award

Verdict: FAIL. Points unchanged, but no message appeared on the page.

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: FAIL. No house shows the word Leader.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: FAIL. The +10 buttons did not change any points, so Reset could not be tested.

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: FAIL. Nothing in house 1 got wider between 10 and 40 points. No bar grows.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 9: Load the page and read the house names

Verdict: FAIL. house 1 is not Gryffindor; house 2 is not Hufflepuff; house 3 is not Ravenclaw; house 4 is not Slytherin. The houses are: "House 1 Points: 0", "House 2 Points: 0", "House 3 Points: 0", "House 4 Points: 0".

Screenshot: `screenshots/check-09.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 10: Give every house 10 points and look at the colours

Verdict: FAIL. No element filled with the house's main colour for: Gryffindor, Hufflepuff, Ravenclaw, Slytherin.

Screenshot: `screenshots/check-10.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 11: Type 60 in house 1 and click Award

Verdict: FAIL. Points unchanged, but no message appeared on the page.

Screenshot: `screenshots/check-11.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 12: Click +10 once on house 1 and once on house 2

Verdict: FAIL. No Leader, but houses 1 and 2 do not show the word Tied.

Screenshot: `screenshots/check-12.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 13: Click +10 twice on house 1, then reload the page

Verdict: FAIL. The points were lost. House 1 shows: "House 1 Points: 0".

Screenshot: `screenshots/check-13.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"

## Check 14: Load the page at 360px wide

Verdict: PASS. No sideways scrolling.

Screenshot: `screenshots/check-14.png`

Visible text at the end:

```
House 1

Points: 0

+10
-10
Award

Reset
House 2

Points: 0

+10
-10
Award

Reset
House 3

Points: 0

+10
-10
Award

Reset
House 4

Points: 0

+10
-10
Award

Reset
```

Script errors: "Unexpected token ']'"
