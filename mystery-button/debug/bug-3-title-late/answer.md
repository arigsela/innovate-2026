The bug is fixed: the code was checking for every 8th click instead of every 7th, and I changed that one number on line 27 of `index.html`. I did not open it in a browser to test it.

**The cause, in simple words**

The page keeps a click counter called `n`. After each click it runs this check to decide whether to change the tab name:

```js
d.title = n && n%8===0 ? '✦ '+n : 'Click me';
```

The `%` sign means "the remainder after dividing". So `n%8===0` asks: "does `n` divide by 8 with nothing left over?" That is only true for 8, 16, 24 and so on, which is exactly what you saw.

To make it happen on every 7th click, the question has to be "does `n` divide by 7 with nothing left over?", which is true for 7, 14, 21 and so on.

**The fix**

```js
d.title = n && n%7===0 ? '✦ '+n : 'Click me';
```

**One thing to know when you test it**

The page saves the click count in the browser (`localStorage`), so it does not start from zero when you reload. If you already clicked 16 times, the next tab name change will be at click 21, not 7 clicks after you reload. To start from zero, clear the site data for the page, or run `localStorage.removeItem('mb.n')` in the browser console and reload.
