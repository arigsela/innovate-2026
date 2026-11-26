# Claims to check

The agent's answer is in `answer.md`. It says it read the code and did not run the page. So do not take its word: check each claim yourself.

Open `../app/index.html?reveal` (add `?reveal` to the end of the address) to see the page's hidden numbers.

| # | The agent's claim | How to check | True? |
| --- | --- | --- | --- |
| 1 | The button shrinks a little while you hold it down | Press and hold the button | |
| 2 | The page measures the time since your last click, in milliseconds | Watch `last gap (ms)` in the reveal panel | |
| 3 | A click counter is saved in the browser and survives a reload | Click 5 times, reload, read `clicks saved` | |
| 4 | A click less than 0.4 seconds after the last one adds 1 to a "fast streak" | Click fast, then slow, and watch `fast streak` | |
| 5 | 3 fast clicks, a pause of 1 second or more, then 2 fast clicks shows a secret message | Do the pattern | |
| 6 | Each click moves the background colour by 3 on the colour wheel | Watch `background hue`, or click 30 times | |
| 7 | The tab title changes when the count is a multiple of 7 | Click slowly and watch the browser tab | |
| 8 | Only the count is saved. The streak and the secret are forgotten on reload | Unlock the secret, then reload | |

## Answer key (for the presenter)

All eight claims are true. The orchestrator checked claims 3, 5, 6 and 7 with a script (see `../debug/verification.md`) and the others by reading the code.

The lesson when the agent is right: it was right, and we know that because we checked, not because it said so.
