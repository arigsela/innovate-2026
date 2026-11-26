# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run4-better-harness/attempt-2`

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
Please type your test scores first, for example: 85, 90, 78
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
Calculate

Please type your test scores first, for example: 85, 90, 78
```

## Check 3: PASS

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
"abc" is not a number. Please type scores with commas between them, like 85, 90, 78.
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
Calculate

"abc" is not a number. Please type scores with commas between them, like 85, 90, 78.
```

## Check 4: PASS

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
105 is not a score from 0 to 100. Please check it and try again.
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
Calculate

105 is not a score from 0 to 100. Please check it and try again.
```

## Check 5: PASS

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
-5 is not a score from 0 to 100. Please check it and try again.
```
All visible text:

```
Grade Checker
Type your test scores, separated by commas
Calculate

-5 is not a score from 0 to 100. Please check it and try again.
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
PASS  normal: 85, 90, 78 has no message
PASS  normal: 85, 90, 78 average is 84.3
PASS  normal: 85, 90, 78 grade is B
PASS  normal: 3 scores, nothing dropped
PASS  normal: B does not need a retake
PASS  normal: works without spaces
PASS  normal: one score on its own
PASS  normal: decimal scores are allowed
PASS  normal: a comma at the end is ignored
PASS  empty: empty box gives a message only
PASS  empty: spaces only gives a message only
PASS  empty: commas only gives a message only
PASS  letters: abc gives a message only
PASS  letters: 85, abc, 90 gives a message only
PASS  letters: message names the bad piece
PASS  letters: 85 90 without a comma gives a message only
PASS  letters: 9O with a letter O gives a message only
PASS  range: 101 gives a message only
PASS  range: -1 gives a message only
PASS  range: 100.5 gives a message only
PASS  range: message names the bad score
PASS  range: 0 is allowed
PASS  range: 100 is allowed
PASS  boundary: 100 is A
PASS  boundary: 90 is A
PASS  boundary: 89 is B
PASS  boundary: 80 is B
PASS  boundary: 79 is C
PASS  boundary: 70 is C
PASS  boundary: 69 is D
PASS  boundary: 60 is D
PASS  boundary: 59 is F
PASS  boundary: 0 is F
PASS  drop: 4 scores drops the lowest (60)
PASS  drop: 4 scores averages the other three
PASS  drop: 4 scores grade uses the new average
PASS  drop: 3 scores drops nothing
PASS  drop: 3 scores averages all three
PASS  drop: 5 scores drops only one score (20)
PASS  drop: 5 scores averages the other four
PASS  drop: a tie for lowest drops only one copy
PASS  drop: a tie for lowest keeps the other copy
PASS  drop: lowest can be typed first
PASS  rounding: 89.5 is A
PASS  rounding: 89.4 is B
PASS  rounding: 79.5 is B
PASS  rounding: 79.4 is C
PASS  rounding: 69.5 is C
PASS  rounding: 69.4 is D
PASS  rounding: 59.5 is D
PASS  rounding: 59.4 is F
PASS  rounding: 89, 90 still shows 89.5
PASS  rounding: 89, 90 is an A
PASS  rounding: average shows one decimal place
PASS  rounding: whole average still shows .0
PASS  rounding: 84.25 shows as 84.3
PASS  rounding: 84.35 shows as 84.4
PASS  retake: A does not need a retake
PASS  retake: B does not need a retake
PASS  retake: C does not need a retake
PASS  retake: D needs a retake
PASS  retake: F needs a retake
PASS  retake: average of 65 needs a retake
PASS  retake: average of 40 needs a retake
PASS  retake: average of 69.5 is a C, no retake
PASS  retake: average of 69.4 is a D, retake
PASS  helper: splitScores trims the spaces
PASS  helper: checkScore accepts 85
PASS  helper: findLowest finds 62
PASS  helper: removeOne takes out one copy
PASS  helper: findAverage of 80 and 90 is 85

71 passed, 0 failed

```
