# Mystery Button

The page opens with a single blue button labeled “Click me.” Each click measures the elapsed time since the previous click (zero for the first click after loading), adds one to the total, and saves that total in local storage under `mb.n`.

The page uses the total to choose a pale background color. Its hue starts at 210° and advances 3° per click, wrapping at 360°. At positive multiples of seven the tab title displays a star and the count, such as “✦ 7.” The next click restores “Click me.”

## Try the rhythm

Open the app with `?reveal` in the URL to see its saved count, timing, streaks, hue, title, and unlock status. Starting from a freshly loaded page, click three times with gaps under 400 ms, wait at least one second, then click twice with a gap under 400 ms. The second click after the pause reveals “Mischief managed.” The first streak must contain exactly three clicks. Reloading clears the rhythm and message while preserving the saved total.

These details follow the click handler and rendering function in the [app source](../app/index.html).
