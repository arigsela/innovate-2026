# Test results

Page: `index.html`

- Prompt checks passed: 1 of 8

| # | Check | Verdict | What happened |
| --- | --- | --- | --- |
| 1 | Load the page | FAIL | house 1 has no number box; house 2 has no number box; house 3 has no number box; house 4 has no number box; no Reset button. |
| 2 | Click +10 twice on house 1 | FAIL | House 1 does not show 20. It shows: "0 points". |
| 3 | Click -10 on house 2 while it has 0 | PASS | House 2 stays at 0. |
| 4 | Type 25 in house 3 and click Award | FAIL | Could not perform the check: no number box in house 3 |
| 5 | Type -5 in house 1 and click Award | FAIL | Could not perform the check: no number box in house 1 |
| 6 | Click +10 twice on house 1 and once on house 2 | FAIL | No house shows the word Leader. |
| 7 | Give points to houses 1 and 2, then click Reset | FAIL | The +10 buttons did not change any points, so Reset could not be tested. |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | FAIL | Nothing in house 1 got wider between 10 and 40 points. No bar grows. |

## Check 1: Load the page

Verdict: FAIL. house 1 has no number box; house 2 has no number box; house 3 has no number box; house 4 has no number box; no Reset button.

Screenshot: `screenshots/check-01.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 2: Click +10 twice on house 1

Verdict: FAIL. House 1 does not show 20. It shows: "0 points".

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 3: Click -10 on house 2 while it has 0

Verdict: PASS. House 2 stays at 0.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 4: Type 25 in house 3 and click Award

Verdict: FAIL. Could not perform the check: no number box in house 3

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 5: Type -5 in house 1 and click Award

Verdict: FAIL. Could not perform the check: no number box in house 1

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: FAIL. No house shows the word Leader.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: FAIL. The +10 buttons did not change any points, so Reset could not be tested.

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: FAIL. Nothing in house 1 got wider between 10 and 40 points. No bar grows.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
Award 0 points +10 -10
```

Script errors: "Failed to execute 'querySelector' on 'Document': '.houses-name#1' is not a valid selector."
