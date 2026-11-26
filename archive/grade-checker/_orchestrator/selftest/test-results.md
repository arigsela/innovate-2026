# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/_orchestrator/selftest`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 7 | 0 | 0 |
| Project checks (8-12) | 1 | 4 | 0 |

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
Harness self-test fixture (written by the orchestrator, not a run)
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
Please type some scores.
```
All visible text:

```
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Please type some scores.
```

## Check 3: PASS

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
Scores must be numbers from 0 to 100.
```
All visible text:

```
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Scores must be numbers from 0 to 100.
```

## Check 4: PASS

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
Scores must be numbers from 0 to 100.
```
All visible text:

```
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Scores must be numbers from 0 to 100.
```

## Check 5: PASS

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: message shown, no grade
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
Scores must be numbers from 0 to 100.
```
All visible text:

```
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Scores must be numbers from 0 to 100.
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
Harness self-test fixture (written by the orchestrator, not a run)
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
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Average: 100.0
Grade: A
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
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Average: 73.3
Grade: C
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
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Average: 89.5
Grade: B
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
Harness self-test fixture (written by the orchestrator, not a run)
Calculate

Average: 66.5
Grade: D
```

## Check 11: FAIL

- Action: Type `85, 90, 78`, press Enter
- Correct behavior: Average 84.3, grade B (Enter pressed, no click)
- Why: nothing new shown on the page
- Screenshot: `screenshots/check-11.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Harness self-test fixture (written by the orchestrator, not a run)
Calculate
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
Harness self-test fixture (written by the orchestrator, not a run)
Calculate
```

