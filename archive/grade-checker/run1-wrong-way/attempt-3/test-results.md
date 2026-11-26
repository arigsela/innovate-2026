# Test results: index.html

Attempt folder: `/Users/arisela/git/ai-innovate-2026/run1-wrong-way/attempt-3`

| Group | PASS | FAIL | CHECK |
| --- | --- | --- | --- |
| Prompt checks (1-7) | 0 | 0 | 7 |
| Project checks (8-12) | 1 | 0 | 4 |

## Check 1: CHECK

- Action: Type `85, 90, 78`, click the button
- Correct behavior: Average 84.3, grade B
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-01.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 2: CHECK

- Action: Type `(nothing)`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-02.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 3: CHECK

- Action: Type `abc`, click the button
- Correct behavior: Friendly message on the page, no grade
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-03.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 4: CHECK

- Action: Type `105`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-04.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 5: CHECK

- Action: Type `-5`, click the button
- Correct behavior: Rejected (scores must be 0-100), no grade
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-05.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 6: CHECK

- Action: Type `80`, click the button
- Correct behavior: Grade B
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-06.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 7: CHECK

- Action: Type `100`, click the button
- Correct behavior: Grade A
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-07.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 8: CHECK

- Action: Type `85, 90, 78, 40`, click the button
- Correct behavior: Page says 40 was dropped. Average 84.3, grade B
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-08.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 9: CHECK

- Action: Type `89.5`, click the button
- Correct behavior: Average 89.5, grade A
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-09.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 10: CHECK

- Action: Type `65, 68`, click the button
- Correct behavior: Average 66.5, grade D, and the line "Retake needed"
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-10.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

## Check 11: CHECK

- Action: Type `85, 90, 78`, press Enter
- Correct behavior: Average 84.3, grade B (Enter pressed, no click)
- Why: 3 text boxes on the page; typed into the first one
- Screenshot: `screenshots/check-11.png`

New text on the page after the action:

```
(nothing)
```
All visible text:

```
Grade Calculator
Student Name: 

Course Name: 

Enter your grade: 

Submit
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
Student Name: 

Course Name: 

Enter your grade: 

Submit
```

