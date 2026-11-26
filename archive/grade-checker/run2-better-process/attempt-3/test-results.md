# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run2-better-process/attempt-3`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 3 | 4 | 0 |
| Project checks (8-12) | 2 | 3 | 0 |

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

## Check 2: FAIL

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: no message shown
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Type test scores separated by commas:  Calculate
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
Type test scores separated by commas:  Calculate
```
Errors:

```
page error: Cannot set properties of null (setting 'innerHTML')
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

## Check 8: FAIL

- Action: Type `85, 90, 78, 40`, click the button
- Correct behavior: Page says 40 was dropped. Average 84.3, grade B
- Why: expected "dropped 40", 84.3 and B; grade found: C; drop text: false
- Screenshot: `screenshots/check-08.png`

New text on the page after the action:

```
Average: 73.3
C
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: 73.3

C
```

## Check 9: FAIL

- Action: Type `89.5`, click the button
- Correct behavior: Average 89.5, grade A
- Why: expected 89.5 and A; grade found: B
- Screenshot: `screenshots/check-09.png`

New text on the page after the action:

```
Average: 89.5
B
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: 89.5

B
```

## Check 10: FAIL

- Action: Type `65, 68`, click the button
- Correct behavior: Average 66.5, grade D, and the line "Retake needed"
- Why: expected 66.5, D and "Retake needed"; grade found: D; retake line: false
- Screenshot: `screenshots/check-10.png`

New text on the page after the action:

```
Average: 66.5
D
```
All visible text:

```
Type test scores separated by commas:  Calculate

Average: 66.5

D
```

## Check 11: PASS

- Action: Type `85, 90, 78`, press Enter
- Correct behavior: Average 84.3, grade B (Enter pressed, no click)
- Why: shows 84.3 and grade B
- Screenshot: `screenshots/check-11.png`

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
Type test scores separated by commas:  Calculate
```

