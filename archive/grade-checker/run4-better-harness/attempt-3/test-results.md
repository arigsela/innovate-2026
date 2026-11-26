# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run4-better-harness/attempt-3`

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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
"abc" is not a score I can use. Each score must be a number from 0 to 100.
```
All visible text:

```
Grade Checker
Your test scores

Separate them with commas, for example: 85, 90, 78

Calculate

"abc" is not a score I can use. Each score must be a number from 0 to 100.
```

## Check 4: PASS

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
"105" is not a score I can use. Each score must be a number from 0 to 100.
```
All visible text:

```
Grade Checker
Your test scores

Separate them with commas, for example: 85, 90, 78

Calculate

"105" is not a score I can use. Each score must be a number from 0 to 100.
```

## Check 5: PASS

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
"-5" is not a score I can use. Each score must be a number from 0 to 100.
```
All visible text:

```
Grade Checker
Your test scores

Separate them with commas, for example: 85, 90, 78

Calculate

"-5" is not a score I can use. Each score must be a number from 0 to 100.
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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
Your lowest score (40) was dropped before averaging.
```
All visible text:

```
Grade Checker
Your test scores

Separate them with commas, for example: 85, 90, 78

Calculate

Average: 84.3

Grade: B

Your lowest score (40) was dropped before averaging.
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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
Your test scores

Separate them with commas, for example: 85, 90, 78

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
Your test scores

Separate them with commas, for example: 85, 90, 78

Calculate
```

## The attempt's own tests: `node test_grader.js`

```
exit 0
PASS  normal: 85, 90, 78 average is 84.3
PASS  normal: 85, 90, 78 grade is B
PASS  normal: no message
PASS  normal: works without spaces
PASS  normal: one score works
PASS  normal: decimal scores work
PASS  empty: nothing typed shows a message
PASS  empty: nothing typed shows no grade
PASS  empty: only spaces shows a message
PASS  empty: only spaces shows no grade
PASS  empty: extra comma at the end shows a message
PASS  empty: extra comma at the end shows no grade
PASS  empty: two commas in a row shows a message
PASS  empty: two commas in a row shows no grade
PASS  letters: abc shows a message
PASS  letters: abc shows no grade
PASS  letters: one bad score in a list shows a message
PASS  letters: one bad score in a list shows no grade
PASS  letters: number with a letter shows a message
PASS  letters: number with a letter shows no grade
PASS  letters: percent sign shows a message
PASS  letters: percent sign shows no grade
PASS  letters: message names the bad score
PASS  range: 101 is too high shows a message
PASS  range: 101 is too high shows no grade
PASS  range: 100.5 is too high shows a message
PASS  range: 100.5 is too high shows no grade
PASS  range: -5 is too low shows a message
PASS  range: -5 is too low shows no grade
PASS  range: 0 is allowed
PASS  range: 100 is allowed
PASS  boundary: 90 is A
PASS  boundary: 89 is B
PASS  boundary: 80 is B
PASS  boundary: 79 is C
PASS  boundary: 70 is C
PASS  boundary: 69 is D
PASS  boundary: 60 is D
PASS  boundary: 59 is F
PASS  drop: 3 scores, nothing dropped
PASS  drop: 3 scores, average uses all of them
PASS  drop: 4 scores, lowest (50) is dropped
PASS  drop: 4 scores, average leaves out the lowest
PASS  drop: 4 scores, grade leaves out the lowest
PASS  drop: tied lowest, only one is dropped
PASS  drop: tied lowest, the other one still counts
PASS  drop: 5 scores, only the single lowest (40) is dropped
PASS  drop: 5 scores, average of the other four
PASS  rounding: 89.5 is A
PASS  rounding: 89.5 still shows as 89.5
PASS  rounding: 89.4 is B
PASS  rounding: 79.5 is B
PASS  rounding: 79.4 is C
PASS  rounding: 69.5 is C
PASS  rounding: 69.4 is D
PASS  rounding: 59.5 is D
PASS  rounding: 59.4 is F
PASS  rounding: 50.3, 88.6, 99.6 averages exactly 79.5, so B
PASS  rounding: display rounds halves up (84.35 shows 84.4)
PASS  retake: F needs a retake
PASS  retake: D needs a retake
PASS  retake: 69.4 (D) needs a retake
PASS  retake: 69.5 rounds to C, no retake
PASS  retake: C does not
PASS  retake: B does not
PASS  retake: A does not
PASS  splitScores trims spaces
PASS  isValidScore accepts 92.5
PASS  isValidScore rejects 1e2
PASS  findLowest finds 50
PASS  removeOne removes just one copy
PASS  averageOf 85, 90, 78
PASS  roundToWhole 89.5 is 90
PASS  letterFor 90 is A
PASS  needsRetake D is true

75 passed, 0 failed

```
