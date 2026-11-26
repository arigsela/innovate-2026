# Test results

Page: `index.html`

- Prompt checks passed: 8 of 8
- School checks passed: 6 of 6

| # | Check | Verdict | What happened |
| --- | --- | --- | --- |
| 1 | Load the page | PASS | Four houses, each with +10, -10, a number box and Award. A Reset button exists. |
| 2 | Click +10 twice on house 1 | PASS | House 1 shows 20. The other houses did not change. |
| 3 | Click -10 on house 2 while it has 0 | PASS | House 2 stays at 0. |
| 4 | Type 25 in house 3 and click Award | PASS | House 3 shows 25. |
| 5 | Type -5 in house 1 and click Award | PASS | Points unchanged. Message on the page: "Please type a whole number greater than 0, like 5 or 20.". |
| 6 | Click +10 twice on house 1 and once on house 2 | PASS | Only house 1 shows the word Leader. |
| 7 | Give points to houses 1 and 2, then click Reset | PASS | Every house is back to 0. |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | PASS | Something in house 1 got wider between 10 and 40 points. |
| 9 | Load the page and read the house names | PASS | Gryffindor, Hufflepuff, Ravenclaw, Slytherin, in that order. |
| 10 | Give every house 10 points and look at the colours | PASS | Every house has an element filled with its main colour. |
| 11 | Type 60 in house 1 and click Award | PASS | Points unchanged. Message on the page: "One award can be at most 50 points. Please type 50 or less.". |
| 12 | Click +10 once on house 1 and once on house 2 | PASS | No Leader. Houses 1 and 2 show Tied. |
| 13 | Click +10 twice on house 1, then reload the page | PASS | House 1 still shows 20 after the reload. |
| 14 | Load the page at 360px wide | PASS | No sideways scrolling. |

## Check 1: Load the page

Verdict: PASS. Four houses, each with +10, -10, a number box and Award. A Reset button exists.

Screenshot: `screenshots/check-01.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 2: Click +10 twice on house 1

Verdict: PASS. House 1 shows 20. The other houses did not change.

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
Leader

20 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 3: Click -10 on house 2 while it has 0

Verdict: PASS. House 2 stays at 0.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award

Hufflepuff is already at 0 points.

Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 4: Type 25 in house 3 and click Award

Verdict: PASS. House 3 shows 25.

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw
Leader

25 points

+10
-10
Award

Awarded 25 points to Ravenclaw.

Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 5: Type -5 in house 1 and click Award

Verdict: PASS. Points unchanged. Message on the page: "Please type a whole number greater than 0, like 5 or 20.".

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award

Please type a whole number greater than 0, like 5 or 20.

Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: PASS. Only house 1 shows the word Leader.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
Leader

20 points

+10
-10
Award
Hufflepuff

10 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: PASS. Every house is back to 0.

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset

All houses are back to 0 points.
```

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: PASS. Something in house 1 got wider between 10 and 40 points.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

40 points

+10
-10
Award
Hufflepuff
Leader

50 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 9: Load the page and read the house names

Verdict: PASS. Gryffindor, Hufflepuff, Ravenclaw, Slytherin, in that order.

Screenshot: `screenshots/check-09.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 10: Give every house 10 points and look at the colours

Verdict: PASS. Every house has an element filled with its main colour.

Screenshot: `screenshots/check-10.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
Tied

10 points

+10
-10
Award
Hufflepuff
Tied

10 points

+10
-10
Award
Ravenclaw
Tied

10 points

+10
-10
Award
Slytherin
Tied

10 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 11: Type 60 in house 1 and click Award

Verdict: PASS. Points unchanged. Message on the page: "One award can be at most 50 points. Please type 50 or less.".

Screenshot: `screenshots/check-11.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award

One award can be at most 50 points. Please type 50 or less.

Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 12: Click +10 once on house 1 and once on house 2

Verdict: PASS. No Leader. Houses 1 and 2 show Tied.

Screenshot: `screenshots/check-12.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
Tied

10 points

+10
-10
Award
Hufflepuff
Tied

10 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 13: Click +10 twice on house 1, then reload the page

Verdict: PASS. House 1 still shows 20 after the reload.

Screenshot: `screenshots/check-13.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
Leader

20 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## Check 14: Load the page at 360px wide

Verdict: PASS. No sideways scrolling.

Screenshot: `screenshots/check-14.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor

0 points

+10
-10
Award
Hufflepuff

0 points

+10
-10
Award
Ravenclaw

0 points

+10
-10
Award
Slytherin

0 points

+10
-10
Award

A full bar is 100 points.

Reset
```

## The attempt's own tests: `node test_scoreboard.js`

```
PASS  there are four houses
PASS  houses are in the right order
PASS  every house starts at 0
PASS  +10 adds 10 points
PASS  +10 twice gives 20 points
PASS  an award adds the typed number
PASS  -10 takes 10 points away
PASS  adding points does not change the old list
PASS  -10 at 0 stays at 0
PASS  -10 at 5 stops at 0
PASS  an empty box is a bad award
PASS  spaces only is a bad award
PASS  a word is a bad award
PASS  0 is a bad award
PASS  a negative number is a bad award
PASS  a decimal number is a bad award
PASS  a good award has no problem
PASS  1 is a good award
PASS  the limit is 50 points
PASS  50 is allowed
PASS  51 is too big
PASS  1000 is too big
PASS  the house with the most points is Leader
PASS  a house with fewer points is not Leader
PASS  the last house can be Leader
PASS  nobody is Leader when every house has 0
PASS  two houses on the top score are Tied (first)
PASS  two houses on the top score are Tied (second)
PASS  a house below a tie shows nothing
PASS  four houses on the same score are all Tied
PASS  a tie lower down does not matter
PASS  houses tied lower down show nothing
PASS  reset sets every house back to 0
PASS  nobody is Leader after reset
PASS  a bar is empty at 0 points
PASS  20 points is 20% of the bar
PASS  100 points fills the bar
PASS  a full bar grows to 200 points after 100
PASS  110 points is 55% of a 200-point bar
PASS  saved points are read back
PASS  nothing saved starts at 0
PASS  broken saved text starts at 0
PASS  the wrong number of houses starts at 0
PASS  saved negative points start at 0

44 passed, 0 failed
```
