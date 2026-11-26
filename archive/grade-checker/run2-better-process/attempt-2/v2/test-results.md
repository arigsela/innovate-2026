# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run2-better-process/attempt-2/v2`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 5 | 2 | 0 |

## Check 1: PASS

- Action: Type `85, 90, 78`, click the button
- Correct behavior: Average 84.3, grade B
- Why: shows 84.3 and grade B
- Screenshot: `screenshots/check-01.png`

New text on the page after the action:

```
Average: 84.3
B
```
All visible text:

```
Grade Calculator
 Calculate
Average: 84.3
B
```

## Check 2: FAIL

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: shows grade F for invalid input
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
Average: 0.0
F
```
All visible text:

```
Grade Calculator
 Calculate
Average: 0.0
F
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
page error: average.toFixed is not a function
```

## Check 4: PASS

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
Invalid scores. Please enter non-negative numbers separated by commas.
```
All visible text:

```
Grade Calculator
 Calculate
Invalid scores. Please enter non-negative numbers separated by commas.
```

## Check 5: PASS

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
Invalid scores. Please enter non-negative numbers separated by commas.
```
All visible text:

```
Grade Calculator
 Calculate
Invalid scores. Please enter non-negative numbers separated by commas.
```

## Check 6: PASS

- Action: Type `80`, click the button
- Correct behavior: Grade B
- Why: shows grade B
- Screenshot: `screenshots/check-06.png`

New text on the page after the action:

```
Average: 80.0
B
```
All visible text:

```
Grade Calculator
 Calculate
Average: 80.0
B
```

## Check 7: PASS

- Action: Type `100`, click the button
- Correct behavior: Grade A
- Why: shows grade A
- Screenshot: `screenshots/check-07.png`

New text on the page after the action:

```
Average: 100.0
A
```
All visible text:

```
Grade Calculator
 Calculate
Average: 100.0
A
```

