# Hook: Setup Instructions

## 🎯 Purpose
Automates the linking of `.claude/hooks/*.sh` scripts to the native `.git/hooks/` directory so they run automatically during developer workflows.

## ⚙️ Setup Process
If the user asks to "setup hooks" or "init hooks", execute the following terminal commands:

1. Make scripts executable: `chmod +x .claude/hooks/*.sh`
2. Configure git to use this directory (if applicable): `git config core.hooksPath .claude/hooks`
3. Verify installation: Output a success message confirming that `pre-commit` and `pre-push` are now active.s