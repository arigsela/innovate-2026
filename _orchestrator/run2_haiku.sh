#!/bin/bash
# Run 2 variant: same one-shot command and prompt as run 2, with the smaller Claude model. Usage: run2_haiku.sh <attempt-number>
B=~/git/ai-innovate-2026
d=$B/run2-haiku/attempt-$1
mkdir -p "$d" && cd "$d" || exit 1
start=$(date +%s)
CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 claude --setting-sources project --strict-mcp-config --settings $B/_orchestrator/clean-settings.json --model claude-haiku-5-5 --effort high --permission-mode acceptEdits -p "$(cat $B/run2-haiku/prompt-2.md)" > response.txt 2> stderr.txt < /dev/null
echo "exit=$? seconds=$(( $(date +%s) - start ))" > .run-info
