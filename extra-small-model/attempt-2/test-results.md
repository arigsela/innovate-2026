# Test results

Page: `index.html`

- Prompt checks passed: 0 of 8
- School checks passed: 1 of 6

| # | Check | Verdict | What happened |
| --- | --- | --- | --- |
| 1 | Load the page | FAIL | 8 houses with a +10 button, not 4; house 1 has no -10 button; house 1 has no Award button; house 1 has no number box; house 2 has no -10 button; house 2 has no Award button; house 2 has no number box; house 3 has no -10 button; house 3 has no Award button; house 3 has no number box; house 4 has no -10 button; house 4 has no Award button; house 4 has no number box; house 5 has no -10 button; house 5 has no Award button; house 5 has no number box; house 6 has no -10 button; house 6 has no Award button; house 6 has no number box; house 7 has no -10 button; house 7 has no Award button; house 7 has no number box; house 8 has no -10 button; house 8 has no Award button; house 8 has no number box. |
| 2 | Click +10 twice on house 1 | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 3 | Click -10 on house 2 while it has 0 | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 4 | Type 25 in house 3 and click Award | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 5 | Type -5 in house 1 and click Award | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 6 | Click +10 twice on house 1 and once on house 2 | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 7 | Give points to houses 1 and 2, then click Reset | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 8 | Give house 2 50 points, then take house 1 from 10 to 40 | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 9 | Load the page and read the house names | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 10 | Give every house 10 points and look at the colours | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 11 | Type 60 in house 1 and click Award | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 12 | Click +10 once on house 1 and once on house 2 | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 13 | Click +10 twice on house 1, then reload the page | CHECK | Could not find four houses that each have a +10 button (found 8), so this check could not be performed. |
| 14 | Load the page at 360px wide | PASS | No sideways scrolling. |

## Check 1: Load the page

Verdict: FAIL. 8 houses with a +10 button, not 4; house 1 has no -10 button; house 1 has no Award button; house 1 has no number box; house 2 has no -10 button; house 2 has no Award button; house 2 has no number box; house 3 has no -10 button; house 3 has no Award button; house 3 has no number box; house 4 has no -10 button; house 4 has no Award button; house 4 has no number box; house 5 has no -10 button; house 5 has no Award button; house 5 has no number box; house 6 has no -10 button; house 6 has no Award button; house 6 has no number box; house 7 has no -10 button; house 7 has no Award button; house 7 has no number box; house 8 has no -10 button; house 8 has no Award button; house 8 has no number box.

Screenshot: `screenshots/check-01.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 2: Click +10 twice on house 1

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-02.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 3: Click -10 on house 2 while it has 0

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-03.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 4: Type 25 in house 3 and click Award

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-04.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 5: Type -5 in house 1 and click Award

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-05.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 6: Click +10 twice on house 1 and once on house 2

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-06.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 7: Give points to houses 1 and 2, then click Reset

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-07.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 8: Give house 2 50 points, then take house 1 from 10 to 40

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-08.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 9: Load the page and read the house names

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-09.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 10: Give every house 10 points and look at the colours

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-10.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 11: Type 60 in house 1 and click Award

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-11.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 12: Click +10 once on house 1 and once on house 2

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-12.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 13: Click +10 twice on house 1, then reload the page

Verdict: CHECK. Could not find four houses that each have a +10 button (found 8), so this check could not be performed.

Screenshot: `screenshots/check-13.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."

## Check 14: Load the page at 360px wide

Verdict: PASS. No sideways scrolling.

Screenshot: `screenshots/check-14.png`

Visible text at the end:

```
Spirit Week Scoreboard
House 1

0

+10
+10

Award

Reset
House 2

0

+10
+10

Award

Reset
House 3

0

+10
+10

Award

Reset
House 4

0

+10
+10

Award

Reset
Reset All
```

Script errors: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'."
