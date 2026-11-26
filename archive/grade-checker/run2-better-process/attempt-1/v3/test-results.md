# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run2-better-process/attempt-1/v3`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 3 | 4 | 0 |

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
 Calculate

Average: 84.3

Grade: B
```

## Check 2: FAIL

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: shows grade F for invalid input
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
Average: 0.0
Grade: F
```
All visible text:

```
Grade Calculator
 Calculate

Average: 0.0

Grade: F
```

## Check 3: FAIL

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: shows NaN, undefined or Infinity
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
Average: NaN
Grade: F
```
All visible text:

```
Grade Calculator
 Calculate

Average: NaN

Grade: F
```

## Check 4: FAIL

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: shows grade A for invalid input
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
Average: 105.0
Grade: A
```
All visible text:

```
Grade Calculator
 Calculate

Average: 105.0

Grade: A
```

## Check 5: FAIL

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: shows grade F for invalid input
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
Average: -5.0
Grade: F
```
All visible text:

```
Grade Calculator
 Calculate

Average: -5.0

Grade: F
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
Grade Calculator
 Calculate

Average: 100.0

Grade: A
```

