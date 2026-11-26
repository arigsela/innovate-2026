The bug is fixed in `index.html:22`: the page was saving the click count under one name and reading it back under a different name. I haven't run it in a browser, so reload `index.html?reveal` to confirm.

**The cause, in simple words:** Think of the browser's storage as a wall of lockers, each with a label. Every time you click, the page puts the new count in the locker labelled `mb.n`. But when the page loads, it looks in the locker labelled `mb.c`. That locker is always empty, so the page starts again from 0.

**The fix:** I changed the one place that reads the count so it uses the same label as the place that saves it.

```js
// before
n=+localStorage.getItem('mb.c')||0
// after
n=+localStorage.getItem(K)||0
```

`K` is the variable that already holds `'mb.n'` and is used when saving, so both sides now share one label.

Because your earlier clicks were saved under `mb.n` all along, the count should show 5 on your next reload without clicking again.
