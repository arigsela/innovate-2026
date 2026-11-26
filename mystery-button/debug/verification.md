# Verification of the mystery button pages

The orchestrator ran `_orchestrator/check_mystery.mjs` on the original app, each broken copy and each copy the agent fixed. Each page is driven in headless Chrome: 5 slow clicks and a reload, then the secret pattern, then 8 slow clicks while reading the tab title.

Expected for a working page: count 5 after the reload, the message "Mischief managed.", and the title changing on click 7 only.

```
mystery-button/app
  count after 5 clicks and a reload: 5
  message after 3 fast, pause, 2 fast: "Mischief managed."
  titles: 6=Click me, 7=✦ 7, 8=Click me
  hue after 8 clicks: 234
mystery-button/debug/bug-1-count-resets/broken
  count after 5 clicks and a reload: 0
  message after 3 fast, pause, 2 fast: "Mischief managed."
  titles: 6=Click me, 7=✦ 7, 8=Click me
  hue after 8 clicks: 234
mystery-button/debug/bug-2-secret-never-shows/broken
  count after 5 clicks and a reload: 5
  message after 3 fast, pause, 2 fast: ""
  titles: 6=Click me, 7=✦ 7, 8=Click me
  hue after 8 clicks: 234
mystery-button/debug/bug-3-title-late/broken
  count after 5 clicks and a reload: 5
  message after 3 fast, pause, 2 fast: "Mischief managed."
  titles: 6=Click me, 7=Click me, 8=✦ 8
  hue after 8 clicks: 234
mystery-button/debug/bug-1-count-resets/fixed
  count after 5 clicks and a reload: 5
  message after 3 fast, pause, 2 fast: "Mischief managed."
  titles: 6=Click me, 7=✦ 7, 8=Click me
  hue after 8 clicks: 234
mystery-button/debug/bug-2-secret-never-shows/fixed
  count after 5 clicks and a reload: 5
  message after 3 fast, pause, 2 fast: "Mischief managed."
  titles: 6=Click me, 7=✦ 7, 8=Click me
  hue after 8 clicks: 234
mystery-button/debug/bug-3-title-late/fixed
  count after 5 clicks and a reload: 5
  message after 3 fast, pause, 2 fast: "Mischief managed."
  titles: 6=Click me, 7=✦ 7, 8=Click me
  hue after 8 clicks: 234
```

Each fixed copy is byte-identical to `app/index.html`: the agent changed only the planted line, back to the original.
