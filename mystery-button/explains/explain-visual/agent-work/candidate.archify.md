# What happens when you click the button once? {#one-click}

One click sets off **nine small steps**, and you can see only one of them: the button shrinks a little while you hold it. The step that lasts longest is hidden. The page adds 1 to a click count and saves it in your browser.

- The browser shrinks the button and gives it keyboard focus. The script plays no part in these two steps.
- The script adds 1 to a click count and saves it, so the count is still there after a reload.
- The script times your clicks and tests them against a secret rhythm.
- The script repaints the background, the tab title and the page text, but after a first click they look the same.

@answer scope="First click on a fresh visit · script logic simulated, not run in a real browser"
@meta locale=en
@source page title="index.html (the page you asked about)" path=index.html lines=1:41

## In what order do the nine steps run? {#order}

The first two steps start when you press down. The other seven run together, in a few thousandths of a second, when you let go.

@workflow id=click-chain title="One click, start to finish"
| lane you | You and the browser |
| lane remember | The script remembers |
| lane repaint | The script repaints |
| press | Press the button | external | you |
| shrink | Button shrinks | frontend | you |
| focus | Button gets focus | frontend | you |
| clock | Read the clock | backend | remember |
| count | Add 1 and save | database | remember |
| streak | Update streaks | backend | remember |
| secret | Check secret rhythm | security | remember |
| bg | Recolor background | frontend | repaint |
| title | Set tab title | frontend | repaint |
| text | Refresh page text | frontend | repaint |
| press > shrink | hold |
| shrink > focus | |
| focus > clock | let go | emphasis |
| clock > count | |
| count > streak | |
| streak > secret | |
| secret > bg | |
| bg > title | |
| title > text | |

## What does each step do, and how do I check it? {#checks}

Most checks use the reveal panel or the Console. The next section shows how to open both.

| Step | What happens | Can you see it? | How to check it |
| --- | --- | --- | --- |
| Button shrinks | While you hold the mouse button down, the button shrinks to 97% of its size. A style rule on line 11 does this. | Barely {good:Visible} | Press on the button and keep holding. Watch its edges move in, then let go. |
| Button gets focus | The browser makes the button the focused element: the one your keyboard now talks to. Safari on a Mac skips this step. | No | After the click, press the Space bar. The count goes up again, as if you had clicked. |
| Read the clock | The script notes the time in milliseconds and works out the gap since your last click. The first click after the page loads has a gap of 0 (line 32). | No | Reveal panel: `last gap (ms): 0`. Click again and the line shows the real gap. |
| Add 1 and save | The click count goes up by 1. The script writes it into localStorage, a small notebook your browser keeps for this page, under the name `mb.n` (line 32). | No | Console: type `localStorage.getItem('mb.n')`. The answer is 1, in quote marks because it is stored as text. Reload and ask again: same answer. |
| Update streaks | The script counts a fast streak: clicks less than 0.4 seconds apart. A single click sets the streak to 1 (line 33). | No | Reveal panel: `fast streak: 1`. |
| Check secret rhythm | The script tests if your recent clicks match a secret rhythm. One click cannot match, so nothing unlocks (line 34). | No | Reveal panel: `secret unlocked: no`. |
| Recolor background | The background hue moves 3 degrees around the color wheel, from 210 to 213, and fades over 0.4 seconds (lines 24 and 26). | Too small to notice | Reveal panel: `background hue: 213`. Each click adds 3. |
| Set tab title | The script writes the tab title again. It writes `Click me`, the same words as before, unless the count is a multiple of 7 (line 27). | No change | Console: type `document.title`. The answer is `Click me`. |
| Refresh page text | The script updates two text areas that start empty: a message line and the reveal panel (lines 28 and 29). On a normal first click both stay hidden. | No | Open the page with `?reveal` in the address. The panel appears with 7 lines. |

@callout level=note title="One thing the click does not do"
| The click sends nothing over the internet. The file has no code that talks to a server.
| To check, open the developer tools, pick the Network tab and click the button. No new line appears in the list.

## How do I open the two checking tools? {#tools}

**The reveal panel** is built into the page. Add `?reveal` to the end of the address in the address bar and press Enter. A white box appears under the button. After one click on a fresh visit it reads:

```text title="Reveal panel after the first click"
clicks saved: 1
last gap (ms): 0
fast streak: 1
streak before pause: 0
background hue: 213
tab title: Click me
secret unlocked: no
```

**The Console** is a box where you type one line of code and the browser answers. In Chrome, Edge or Firefox, press `Cmd+Option+I` on a Mac or `F12` on Windows, then pick the Console tab. In Safari, first open Settings, then Advanced, and turn on "Show features for web developers". Then press `Cmd+Option+C`.

The Console can read the saved count and the tab title. It cannot read the gap, the streaks or the secret, because the script keeps those inside a function. Use the reveal panel for those.

If `clicks saved` is not 1, you have clicked this button before. To start again from 0, run this in the Console and reload the page:

```js title="Erase the saved count"
localStorage.removeItem('mb.n')
```

@facts
| Saved in your browser, still there after a reload | The click count |
| Kept in memory only, back to 0 after a reload | Time of the last click, the gap, both streaks, the secret |

## When does one click do something extra? {#extra}

The same click can do more. It depends on what you did before it.

| If this is true | The click also does this | How to check it |
| --- | --- | --- |
| You clicked on an earlier visit | The count carries on from the saved number. It does not restart at 0. | The reveal panel shows `clicks saved` above 0 before you click. |
| The count lands on 7, 14, 21 and so on | The tab title changes to a star and the count, such as `✦ 7`. The next click changes it back. | Click until the count reaches 7 and look at the tab. |
| You click less than 0.4 seconds after the last click | The fast streak goes up by 1. It does not reset to 1. | Double-click, then read `fast streak: 2` in the reveal panel. |
| The click finishes the secret rhythm | "Mischief managed." appears under the button and stays until you reload. | Click 3 times fast, wait at least 1 full second, then click 2 times fast. |

For the rhythm, "fast" means less than 0.4 seconds between clicks. The message is stored scrambled on line 22 as `Zvfpuvrs znantrq.`, with every letter moved 13 places along the alphabet. Line 23 moves the letters back.
