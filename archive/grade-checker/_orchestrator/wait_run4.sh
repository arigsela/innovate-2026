#!/bin/bash
# Wait until any run 4 pane is at a permission prompt or idle, then print its screen.
# Usage: wait_run4.sh [seconds]   Panes listed in .done-aN files are skipped.
cd "$(dirname "$0")/.."
limit=${1:-540}
end=$(( $(date +%s) + limit ))
while [ "$(date +%s)" -lt "$end" ]; do
  hit=0
  for n in 1 2 3; do
    [ -f run4-better-harness/.done-a$n ] && continue
    scr=$(tmux capture-pane -p -t vibe-run4-a$n)
    if echo "$scr" | grep -q 'Do you want to proceed\|Do you want to'; then
      echo "=================== a$n PERMISSION"; echo "$scr" | grep -v '^$' | tail -${LINES_SHOWN:-30} | cut -c1-200; hit=1
    elif ! echo "$scr" | grep -q 'esc to interrupt'; then
      sleep 4; scr=$(tmux capture-pane -p -t vibe-run4-a$n)
      if ! echo "$scr" | grep -q 'esc to interrupt\|Do you want to'; then
        echo "=================== a$n IDLE at $(date +%s)"; echo "$scr" | grep -v '^$' | tail -${LINES_SHOWN:-30} | cut -c1-200; hit=1
      fi
    fi
  done
  [ "$hit" = 1 ] && exit 0
  sleep 4
done
echo "still working after ${limit}s"
