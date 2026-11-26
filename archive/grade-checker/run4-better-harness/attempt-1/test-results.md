# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run4-better-harness/attempt-1`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 7 | 0 | 0 |
| Project checks (8-12) | 5 | 0 | 0 |

## Check 1: PASS

- Action: Type `85, 90, 78`, click the button
- Correct behavior: Average 84.3, grade B
- Why: shows 84.3 and grade B
- Screenshot: `screenshots/check-01.png`

New text on the page after the action:

```
Average: 84.3
Grade: B
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 84.3

Grade: B
```

## Check 2: PASS

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
Type your test scores first, separated by commas. For example: 85, 90, 78
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Type your test scores first, separated by commas. For example: 85, 90, 78
```

## Check 3: PASS

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
"abc" is not a number. Please type scores from 0 to 100, separated by commas.
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

"abc" is not a number. Please type scores from 0 to 100, separated by commas.
```

## Check 4: PASS

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
105 is out of range. Each score must be from 0 to 100.
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

105 is out of range. Each score must be from 0 to 100.
```

## Check 5: PASS

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
-5 is out of range. Each score must be from 0 to 100.
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

-5 is out of range. Each score must be from 0 to 100.
```

## Check 6: PASS

- Action: Type `80`, click the button
- Correct behavior: Grade B
- Why: shows grade B
- Screenshot: `screenshots/check-06.png`

New text on the page after the action:

```
Average: 80.0
Grade: B
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 80.0

Grade: B
```

## Check 7: PASS

- Action: Type `100`, click the button
- Correct behavior: Grade A
- Why: shows grade A
- Screenshot: `screenshots/check-07.png`

New text on the page after the action:

```
Average: 100.0
Grade: A
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 100.0

Grade: A
```

## Check 8: PASS

- Action: Type `85, 90, 78, 40`, click the button
- Correct behavior: Page says 40 was dropped. Average 84.3, grade B
- Why: dropped 40, shows 84.3 and B
- Screenshot: `screenshots/check-08.png`

New text on the page after the action:

```
Average: 84.3
Grade: B
Lowest score dropped: 40
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 84.3

Grade: B

Lowest score dropped: 40
```

## Check 9: PASS

- Action: Type `89.5`, click the button
- Correct behavior: Average 89.5, grade A
- Why: shows 89.5 and grade A
- Screenshot: `screenshots/check-09.png`

New text on the page after the action:

```
Average: 89.5
Grade: A
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 89.5

Grade: A
```

## Check 10: PASS

- Action: Type `65, 68`, click the button
- Correct behavior: Average 66.5, grade D, and the line "Retake needed"
- Why: shows 66.5, D and "Retake needed"
- Screenshot: `screenshots/check-10.png`

New text on the page after the action:

```
Average: 66.5
Grade: D
Retake needed
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 66.5

Grade: D

Retake needed
```

## Check 11: PASS

- Action: Type `85, 90, 78`, press Enter
- Correct behavior: Average 84.3, grade B (Enter pressed, no click)
- Why: shows 84.3 and grade B
- Screenshot: `screenshots/check-11.png`

New text on the page after the action:

```
Average: 84.3
Grade: B
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate

Average: 84.3

Grade: B
```

## Check 12: PASS

- Action: Load the page at 360px wide
- Correct behavior: No sideways scrolling at 360px wide
- Why: scrollWidth 360
- Screenshot: `screenshots/check-12.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
 Calculate
```

## The attempt's own tests: `node test_grader.js`

```
exit 0

Normal case
PASS  85, 90, 78 has no message
PASS  85, 90, 78 has average 84.3
PASS  85, 90, 78 has grade B
PASS  85, 90, 78 drops nothing
PASS  85, 90, 78 needs no retake
PASS  scores work without spaces
PASS  one score on its own works
PASS  decimal scores work
PASS  a comma left at the end is ignored

Empty input
PASS  an empty box gives a message and no grade
PASS  only spaces gives a message and no grade
PASS  only commas gives a message and no grade

Letters instead of numbers
PASS  abc gives a message and no grade
PASS  one bad score among good ones gives a message
PASS  the message names the bad score
PASS  a number with letters attached is not a number
PASS  two numbers with a space between are not one score

Numbers out of range
PASS  101 gives a message and no grade
PASS  -1 gives a message and no grade
PASS  100.5 gives a message and no grade
PASS  the message names the out-of-range score
PASS  0 is allowed
PASS  100 is allowed

Boundaries between grades
PASS  100 is an A
PASS  90 is an A
PASS  89 is a B
PASS  80 is a B
PASS  79 is a C
PASS  70 is a C
PASS  69 is a D
PASS  60 is a D
PASS  59 is an F
PASS  0 is an F

Policy: drop the lowest score
PASS  3 scores: nothing is dropped
PASS  3 scores: all of them count
PASS  4 scores: the lowest is dropped
PASS  4 scores: the average leaves out the lowest
PASS  5 scores: only one score is dropped
PASS  a tie for lowest drops only one of them
PASS  a tie for lowest still averages correctly
PASS  the lowest is found wherever it is in the list

Policy: rounding for the letter grade
PASS  89.5 rounds up to an A
PASS  89.4 stays a B
PASS  79.5 rounds up to a B
PASS  69.5 rounds up to a C
PASS  59.5 rounds up to a D
PASS  59.4 stays an F
PASS  89, 90 is an A
PASS  89, 90 still shows the average as 89.5
PASS  decimal scores that average exactly 80.5 are a B
PASS  the average always shows one decimal place

Policy: retake needed
PASS  A needs no retake
PASS  B needs no retake
PASS  C needs no retake
PASS  D needs a retake
PASS  F needs a retake
PASS  an average of 65 needs a retake
PASS  an average of 69.5 is a C, so no retake
PASS  an average of 40 needs a retake

59 passed, 0 failed

```
