#!/bin/bash
# Mystery button, explain with a skill: the explain prompt plus one line asking for an
# archify one-page explainer. One attempt in a clean session, same flags as run2.sh, plus
# permission to run node (archify's finalize step is a node script).
# The run happens in a temp folder holding a copy of app/index.html and the archify skill
# under .claude/skills, because --setting-sources project does not load user skills.
B=~/git/ai-innovate-2026
M=$B/mystery-button
out=$M/explain-visual
mkdir -p "$out" || exit 1
w=$(mktemp -d) || exit 1
cp "$M/app/index.html" "$w/"
mkdir -p "$w/.claude/skills"
cp -R ~/.claude/skills/archify "$w/.claude/skills/"
{ cat "$M/explain/prompt.md"; printf '\nUse the archify skill to make a one-page explainer.\n'; } > "$out/prompt.md"
cd "$w" || exit 1
start=$(date +%s)
ARCHIFY_UPDATE_CHECK_DISABLED=1 CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 claude --setting-sources project --strict-mcp-config --settings $B/_orchestrator/clean-settings.json --model claude-fable-5-2 --effort high --permission-mode acceptEdits --allowedTools "Bash(node:*)" -p "$(cat "$out/prompt.md")" > "$out/answer.md" 2> "$out/stderr.txt"
echo "exit=$? seconds=$(( $(date +%s) - start ))" > "$out/.run-info"
find "$w/.archify" -name '*.html' -not -path '*/review-*' -exec cp {} "$out/" \; 2>/dev/null
# Keep what the agent wrote before archify rendered it, plus any helper script it made.
mkdir -p "$out/agent-work"
find "$w/.archify" \( -name '*.archify.md' -o -name '*.mjs' \) -not -path '*/review-*' -exec cp {} "$out/agent-work/" \; 2>/dev/null
cmp -s "$M/app/index.html" "$w/index.html" && echo "index.html unchanged" >> "$out/.run-info" || echo "index.html CHANGED" >> "$out/.run-info"
echo "workdir=$w" >> "$out/.run-info"
