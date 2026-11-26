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
| 5 | Type -5 in house 1 and click Award | PASS | Points unchanged. Message on the page: "Please type a whole number from 1 to 50, like 5 or 20.". |
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

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 2: Click +10 twice on house 1

Verdict: PASS. House 1 shows 20. The other houses did not change.

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor
Leader

20
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 3: Click -10 on house 2 while it has 0

Verdict: PASS. House 2 stays at 0.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 4: Type 25 in house 3 and click Award

Verdict: PASS. House 3 shows 25.

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw
Leader

25
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 5: Type -5 in house 1 and click Award

Verdict: PASS. Points unchanged. Message on the page: "Please type a whole number from 1 to 50, like 5 or 20.".

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award

Please type a whole number from 1 to 50, like 5 or 20.

Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: PASS. Only house 1 shows the word Leader.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor
Leader

20
points

+10
-10
Award
Hufflepuff

10
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: PASS. Every house is back to 0.

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset

Every house is back to 0 points.
```

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: PASS. Something in house 1 got wider between 10 and 40 points.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

40
points

+10
-10
Award
Hufflepuff
Leader

50
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 9: Load the page and read the house names

Verdict: PASS. Gryffindor, Hufflepuff, Ravenclaw, Slytherin, in that order.

Screenshot: `screenshots/check-09.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 10: Give every house 10 points and look at the colours

Verdict: PASS. Every house has an element filled with its main colour.

Screenshot: `screenshots/check-10.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor
Tied

10
points

+10
-10
Award
Hufflepuff
Tied

10
points

+10
-10
Award
Ravenclaw
Tied

10
points

+10
-10
Award
Slytherin
Tied

10
points

+10
-10
Award
Reset
```

## Check 11: Type 60 in house 1 and click Award

Verdict: PASS. Points unchanged. Message on the page: "One award can be at most 50 points. Please type 50 or less.".

Screenshot: `screenshots/check-11.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award

One award can be at most 50 points. Please type 50 or less.

Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 12: Click +10 once on house 1 and once on house 2

Verdict: PASS. No Leader. Houses 1 and 2 show Tied.

Screenshot: `screenshots/check-12.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor
Tied

10
points

+10
-10
Award
Hufflepuff
Tied

10
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 13: Click +10 twice on house 1, then reload the page

Verdict: PASS. House 1 still shows 20 after the reload.

Screenshot: `screenshots/check-13.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor
Leader

20
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## Check 14: Load the page at 360px wide

Verdict: PASS. No sideways scrolling.

Screenshot: `screenshots/check-14.png`

Visible text at the end:

```
House Cup

A full bar is 100 points.

Gryffindor

0
points

+10
-10
Award
Hufflepuff

0
points

+10
-10
Award
Ravenclaw

0
points

+10
-10
Award
Slytherin

0
points

+10
-10
Award
Reset
```

## The attempt's own tests: `node test_scoreboard.js`

```
PASS  there are four houses in the school's order
PASS  every house starts at 0
PASS  +10 on 0 gives 10
PASS  +10 twice gives 20
PASS  -10 on 30 gives 20
PASS  -10 on 0 stays at 0
PASS  -10 on 5 stops at 0
PASS  award "" gets a message
PASS  award "" changes nothing
PASS  award "   " gets a message
PASS  award "   " changes nothing
PASS  award "abc" gets a message
PASS  award "abc" changes nothing
PASS  award "0" gets a message
PASS  award "0" changes nothing
PASS  award "-5" gets a message
PASS  award "-5" changes nothing
PASS  award "2.5" gets a message
PASS  award "2.5" changes nothing
PASS  award "1e1" gets a message
PASS  award "1e1" changes nothing
PASS  award "0x10" gets a message
PASS  award "0x10" changes nothing
PASS  award "ten" gets a message
PASS  award "ten" changes nothing
PASS  award "7" has no message
PASS  award "7" adds 7
PASS  award " 7 " with spaces adds 7
PASS  award "50" has no message
PASS  award "50" adds 50
PASS  award "51" gets a message
PASS  award "51" changes nothing
PASS  award "1000" changes nothing
PASS  the limit message is different from the bad number message
PASS  the house with the most points is Leader
PASS  only the top house is Leader
PASS  nobody has a word when every house has 0
PASS  two houses sharing the top score are Tied
PASS  four houses sharing the top score are all Tied
PASS  a tie lower down does not matter
PASS  reset sets every house back to 0
PASS  after a reset nobody has a word
PASS  a full bar is 100 points at the start
PASS  a full bar is still 100 points at 100
PASS  a full bar grows to 200 points after 100
PASS  20 points out of 100 is a 20 percent bar
PASS  0 points is an empty bar
PASS  1 is a point
PASS  20 are points
PASS  saved scores come back the same
PASS  nothing saved yet gives fresh scores
PASS  broken saved text gives fresh scores
PASS  a saved list of the wrong size gives fresh scores
PASS  a saved negative score gives fresh scores

54 passed, 0 failed
```
