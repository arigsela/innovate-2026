#!/bin/bash
# Answer a run 3 permission prompt and log it. Usage: r3.sh <attempt> allow|deny <key> "<log text>"
# After a deny, sends the brief's fixed answer when the agent asks what to do instead.
cd ~/git/ai-innovate-2026 || exit 1
n=$1; s=sb-run3-a$n; log=run3-better-harness/attempt-$n/.orchestrator-log
tmux send-keys -t $s "$3"
echo "a$n: $4" >> $log
if [ "$2" = deny ]; then
  sleep 5
  if tmux capture-pane -p -t $s | grep -q 'What should Claude do instead'; then
    tmux send-keys -t $s -l "Use your best judgment and follow the project rules."; sleep 1; tmux send-keys -t $s Enter
    echo "a$n: the decline interrupted the agent, which asked what to do instead; sent the brief's fixed answer: Use your best judgment and follow the project rules." >> $log
  fi
fi
