# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run3-better-model/attempt-2`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 7 | 0 | 0 |
| Project checks (8-12) | 2 | 3 | 0 |

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
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 84.3

Grade: B

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 2: PASS

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
Please type at least one test score, for example: 85, 90, 78
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Please type at least one test score, for example: 85, 90, 78

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 3: PASS

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
"abc" is not a number. Each score must be a number from 0 to 100.
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

"abc" is not a number. Each score must be a number from 0 to 100.

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 4: PASS

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
"105" is out of range. Each score must be a number from 0 to 100.
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

"105" is out of range. Each score must be a number from 0 to 100.

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 5: PASS

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
"-5" is out of range. Each score must be a number from 0 to 100.
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

"-5" is out of range. Each score must be a number from 0 to 100.

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
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
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 80.0

Grade: B

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
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
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 100.0

Grade: A

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 8: FAIL

- Action: Type `85, 90, 78, 40`, click the button
- Correct behavior: Page says 40 was dropped. Average 84.3, grade B
- Why: expected "dropped 40", 84.3 and B; grade found: C; drop text: false
- Screenshot: `screenshots/check-08.png`

New text on the page after the action:

```
Average: 73.3
Grade: C
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 73.3

Grade: C

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 9: FAIL

- Action: Type `89.5`, click the button
- Correct behavior: Average 89.5, grade A
- Why: expected 89.5 and A; grade found: B
- Screenshot: `screenshots/check-09.png`

New text on the page after the action:

```
Average: 89.5
Grade: B
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 89.5

Grade: B

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

## Check 10: FAIL

- Action: Type `65, 68`, click the button
- Correct behavior: Average 66.5, grade D, and the line "Retake needed"
- Why: expected 66.5, D and "Retake needed"; grade found: D; retake line: false
- Screenshot: `screenshots/check-10.png`

New text on the page after the action:

```
Average: 66.5
Grade: D
```
All visible text:

```
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 66.5

Grade: D

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
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
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

Average: 84.3

Grade: B

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
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
Grade Calculator

Type your test scores to see your average and letter grade.

Test scores, separated by commas
 Calculate

A = 90-100   B = 80-89   C = 70-79   D = 60-69   F = below 60
```

