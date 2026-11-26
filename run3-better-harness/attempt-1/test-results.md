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
| 5 | Type -5 in house 1 and click Award | PASS | Points unchanged. Message on the page: "Please type a whole number bigger than 0, like 5 or 20.". |
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
0
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
Leader
20
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
0
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
0
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
Leader
25
+10
-10
Award
Slytherin
0
+10
-10
Award
Reset
```

## Check 5: Type -5 in house 1 and click Award

Verdict: PASS. Points unchanged. Message on the page: "Please type a whole number bigger than 0, like 5 or 20.".

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
0
+10
-10
Award

Please type a whole number bigger than 0, like 5 or 20.

Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
Leader
20
+10
-10
Award
Hufflepuff
10
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
0
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
+10
-10
Award
Reset
```

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: PASS. Something in house 1 got wider between 10 and 40 points.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
House Cup

Spirit Week house points

Gryffindor
40
+10
-10
Award
Hufflepuff
Leader
50
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
0
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
Tied
10
+10
-10
Award
Hufflepuff
Tied
10
+10
-10
Award
Ravenclaw
Tied
10
+10
-10
Award
Slytherin
Tied
10
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

Spirit Week house points

Gryffindor
0
+10
-10
Award

One award can be at most 50 points. Please type 50 or less.

Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
Tied
10
+10
-10
Award
Hufflepuff
Tied
10
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
Leader
20
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
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

Spirit Week house points

Gryffindor
0
+10
-10
Award
Hufflepuff
0
+10
-10
Award
Ravenclaw
0
+10
-10
Award
Slytherin
0
+10
-10
Award
Reset
```

## The attempt's own tests: `node test_scoreboard.js`

```
PASS  there are four houses in the right order
PASS  every house starts at 0 points
PASS  adding 10 points twice gives 20 points
PASS  adding points to one house leaves the others alone
PASS  adding points does not change the old list
PASS  taking 10 points from a house on 0 leaves it on 0
PASS  taking 10 points from a house on 5 stops at 0
PASS  taking 10 points from a house on 30 gives 20
PASS  a good award number gets no message
PASS  an empty box gets a friendly message
PASS  words get a friendly message
PASS  zero gets a friendly message
PASS  a negative number gets a friendly message
PASS  a number with a decimal point gets a friendly message
PASS  an award of exactly 50 is allowed
PASS  an award of 51 gets a message that mentions 50
PASS  a huge award gets a message
PASS  the one house with the most points is Leader
PASS  the other houses show no word
PASS  two houses sharing the top score are both Tied
PASS  houses below a tie show no word
PASS  when every house has 0 points nobody is Leader or Tied
PASS  when every house has the same points they are all Tied
PASS  reset puts every house back on 0
PASS  after reset nobody is Leader
PASS  a house on 0 has an empty bar
PASS  a bar gets longer as the house gets more points
PASS  a bar is never more than 100 percent full
PASS  saved scores come back the same
PASS  nothing saved yet gives starting scores
PASS  broken saved text gives starting scores

31 passed, 0 failed
```
