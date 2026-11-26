# Project rules

## What this project is

Grade Checker is a web page that students at our high school use to see where
they stand in one class. They open it on school Chromebooks and on their phones.

## Our school's grading policy (always apply it)

- When a student enters 4 or more scores, drop the single lowest score before
  averaging, and say on the page which score was dropped.
- Choose the letter grade from the average rounded to the nearest whole number,
  with halves rounding up. So an average of 89.5 is an A. Still display the
  average to one decimal place.
- Below 70 is not passing at our school. When the letter grade is D or F, also
  show the line "Retake needed".

## How the page must behave

- Pressing Enter in the text box does the same as clicking Calculate.
- Text is at least 18px, and the page fits a 360px-wide phone screen with no
  sideways scrolling.
- Never use pop-up alerts. Messages go on the page.

## How we write code

- This project is for beginner programmers. Keep code simple and readable.
- Use only plain HTML, CSS and JavaScript, no libraries.
- Put the grading logic in small functions in grader.js, one job each, with no
  access to the page. index.html loads grader.js.
- Every function gets a one-line comment saying what it does.
- Always write tests in test_grader.js, run with `node test_grader.js`, that
  cover: a normal case, empty input, letters instead of numbers, numbers out of
  range, the boundaries between grades, and each grading policy rule.
- Run the tests before saying the work is done, and show the results.
