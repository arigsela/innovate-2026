#!/bin/bash
# Send one message to an `ollama run` chat in a tmux session and wait for the reply to finish.
# Usage: ollama_send.sh <tmux-session> <file-with-message>
# A multi-line message is wrapped in triple quotes, as the brief requires.
# Prints the seconds waited.
session="$1"
file="$2"
lines=$(grep -c '' "$file")
start=$(date +%s)
if [ "$lines" -gt 1 ]; then
  tmux send-keys -t "$session" -l '"""'
  tmux send-keys -t "$session" Enter
  while IFS= read -r line || [ -n "$line" ]; do
    [ -n "$line" ] && tmux send-keys -t "$session" -l -- "$line"
    tmux send-keys -t "$session" Enter
    sleep 0.05
  done < "$file"
  tmux send-keys -t "$session" -l '"""'
  tmux send-keys -t "$session" Enter
else
  tmux send-keys -t "$session" -l -- "$(cat "$file")"
  tmux send-keys -t "$session" Enter
fi
sleep 3
for _ in $(seq 1 240); do
  last=$(tmux capture-pane -p -t "$session" | grep -v '^$' | tail -1)
  case "$last" in ">>> Send a message"*) break ;; esac
  sleep 2
done
echo "$session $(( $(date +%s) - start ))s"
