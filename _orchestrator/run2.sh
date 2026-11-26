#!/bin/bash
# Run 2: one-shot capable model, no rules file. Usage: run2.sh <attempt-number>
B=~/git/ai-innovate-2026
d=$B/run2-better-model/attempt-$1
mkdir -p "$d" && cd "$d" || exit 1
start=$(date +%s)
CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 claude --setting-sources project --strict-mcp-config --settings $B/_orchestrator/clean-settings.json --model claude-fable-5-2 --effort high --permission-mode acceptEdits -p "$(cat $B/run2-better-model/prompt-2.md)" > response.txt 2> stderr.txt
echo "exit=$? seconds=$(( $(date +%s) - start ))" > .run-info
