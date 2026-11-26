"""Turn a tmux capture of an `ollama run` chat into transcript.md and code-block files.

Usage: python3 extract.py <pane-capture.txt> <attempt-folder>

Writes:
  transcript.md             every prompt and response, in order, text unchanged
  blocks/tN-bM-<name>       each fenced code block of response N, content unchanged
Prints one line per block so the orchestrator can copy blocks to their final names.
Nothing is edited or assembled here.
"""
import re
import sys
from pathlib import Path

capture = Path(sys.argv[1]).read_text()
attempt = Path(sys.argv[2])
lines = capture.split("\n")

# Split the session into turns. A prompt starts at ">>> " and may continue on "... " lines.
turns = []  # list of [prompt_lines, response_lines]
started = False
for line in lines:
    if line.startswith(">>> "):
        text = line[4:].rstrip()
        if text.startswith("Send a message"):
            continue
        turns.append([[text], []])
        started = True
        in_prompt = True
    elif started and in_prompt and line.startswith("... "):
        turns[-1][0].append(line[4:].rstrip())
    elif started:
        in_prompt = False
        turns[-1][1].append(line)

out = ["# Transcript", "", "Model: `llama3.2:1b` through `ollama run llama3.2:1b --nowordwrap`.",
       "Captured from the tmux pane. Prompts and responses are unchanged.", ""]
blocks_dir = attempt / "blocks"
for n, (prompt, response) in enumerate(turns, 1):
    while response and not response[-1].strip():
        response.pop()
    while response and not response[0].strip():
        response.pop(0)
    out += [f"## Prompt {n}", "", "~~~text", *prompt, "~~~", "", f"## Response {n}", "", *response, ""]

    # Find fenced blocks and the file name given just above each one, if any.
    i, m = 0, 0
    while i < len(response):
        opened = re.match(r"^\s*```(\w*)\s*$", response[i])
        if not opened:
            i += 1
            continue
        end = i + 1
        while end < len(response) and not re.match(r"^\s*```\s*$", response[end]):
            end += 1
        m += 1
        name = ""
        for back in range(i - 1, max(i - 4, -1), -1):
            found = re.search(r"([\w.-]+\.(?:html|css|js))", response[back])
            if found:
                name = found.group(1)
                break
            if response[back].strip():
                break
        label = name or (opened.group(1) or "txt")
        blocks_dir.mkdir(exist_ok=True)
        target = blocks_dir / f"t{n}-b{m}-{label}"
        closed = end < len(response)
        target.write_text("\n".join(response[i + 1:end]) + "\n")
        print(f"turn {n} block {m}: lang={opened.group(1) or '-'} name={name or '-'} "
              f"lines={end - i - 1} closed={closed} -> {target}")
        i = end + 1

(attempt / "transcript.md").write_text("\n".join(out))
print(f"{len(turns)} turn(s) -> {attempt / 'transcript.md'}")
