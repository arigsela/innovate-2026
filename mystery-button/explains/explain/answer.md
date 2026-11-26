I read `index.html` and did not change it. I worked this out by reading the code, not by running the page in a browser.

## Two tools for checking

- **The reveal panel.** The page has a hidden box that shows its private numbers. In the address bar, add `?reveal` to the end of the address (so it ends in `index.html?reveal`) and press Enter. The box appears under the button and updates on every click.
- **DevTools.** These are the browser's built-in inspection tools. In Chrome, right-click the page and choose **Inspect**. Other browsers have the same tools, with slightly different tab names.

## What one click does

1. **The button shrinks a tiny bit while you hold it down.** It drops to 97% of its size, then springs back when you let go.
   - Check: press and hold the mouse button on it instead of clicking quickly.

2. **The page measures the time since your last click.** It stores the gap in milliseconds (1000 ms = 1 second). For the first click after loading the page, the gap is 0.
   - Check: in the reveal panel, look at `last gap (ms)`.

3. **A click counter goes up by 1 and is saved in your browser.** It is saved in "localStorage", a small notebook the browser keeps for each site, under the name `mb.n`. The count survives reloading the page.
   - Check: in DevTools, open **Application** → **Local Storage** and find `mb.n`. Or reload the page and look at `clicks saved` in the reveal panel.

4. **The page updates a "fast streak".** A click less than 0.4 seconds after the previous one adds 1 to the streak. A slower click resets the streak to 1. If the pause was 1 second or longer, the page also remembers the streak you had before the pause.
   - Check: in the reveal panel, watch `fast streak` and `streak before pause` as you click fast and slow.

5. **The page checks for a secret click pattern.** The pattern is 3 fast clicks, a pause of at least 1 second, then 2 fast clicks. When you get it right, the message "Mischief managed." appears under the button and stays until you reload. The message is stored scrambled in the code, so you cannot spot it by reading the file.
   - Check: do the pattern. The reveal panel will also show `secret unlocked: yes`.

6. **The background colour shifts slightly.** The colour's "hue" is a number on the colour wheel, and each click moves it by 3 (starting from 210, a pale blue). The change fades in over 0.4 seconds and is too small to notice from one click.
   - Check: in the reveal panel, watch `background hue` go up by 3. Or click about 30 times and watch the pale blue turn pale purple.

7. **The tab title is set again.** Normally it is set to "Click me", so nothing looks different. When the saved count is a multiple of 7 (7, 14, 21, ...), the title becomes a star and the count, such as "✦ 7". The next click changes it back.
   - Check: watch the browser tab while you click until `clicks saved` reaches a multiple of 7.

8. **The reveal panel is refreshed.** This only happens if the address contains `reveal`.
   - Check: load the page with and without `?reveal` and compare.

## Good to know

- **Nothing is sent over the internet.** To check, open the **Network** tab in DevTools and click the button; no new lines appear.
- **Your first click today may not be click number 1**, because the count is saved. To start from zero, open the **Console** tab in DevTools, type `localStorage.removeItem('mb.n')`, press Enter, and reload.
- **Only the count is saved.** The streaks, the gap and the unlocked secret are all forgotten when you reload.
