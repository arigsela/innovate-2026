# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run2-better-process/attempt-1/v1`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 0 | 7 | 0 |

## Check 1: FAIL

- Action: Type `85, 90, 78`, click the button
- Correct behavior: Average 84.3, grade B
- Why: script error, nothing shown
- Screenshot: `screenshots/check-01.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

## Check 2: FAIL

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: script error, no message
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

## Check 3: FAIL

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: script error, no message
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

## Check 4: FAIL

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: script error, no message
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

## Check 5: FAIL

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: script error, no message
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

## Check 6: FAIL

- Action: Type `80`, click the button
- Correct behavior: Grade B
- Why: nothing new shown on the page
- Screenshot: `screenshots/check-06.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

## Check 7: FAIL

- Action: Type `100`, click the button
- Correct behavior: Grade A
- Why: nothing new shown on the page
- Screenshot: `screenshots/check-07.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
 Calculate
```
Errors:

```
page error: calculateAverageAndGrade is not defined
```

