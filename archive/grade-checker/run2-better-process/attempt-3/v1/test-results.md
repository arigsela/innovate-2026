# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run2-better-process/attempt-3/v1`

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
B
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: 84.3

B
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
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
Type test scores separated by commas:  Calculate
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
```

## Check 3: FAIL

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: shows NaN, undefined or Infinity
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
Average: NaN
F
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: NaN

F
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
```

## Check 4: FAIL

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: shows grade A for invalid input
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
Average: 105.0
A
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: 105.0

A
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
```

## Check 5: FAIL

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: shows grade F for invalid input
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
Average: -5.0
F
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: -5.0

F
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
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
Type test scores separated by commas:  Calculate

Average: 80.0

B
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
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
Type test scores separated by commas:  Calculate

Average: 100.0

A
```
Errors:

```
console error: Failed to load resource: net::ERR_FILE_NOT_FOUND
```

