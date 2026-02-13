# Sensitive Artifact Inventory (2026-02-13)

## Medium Severity
- `.build.pid` (local process state file).
- `.dev.pid` (local process state file).
- `build.log` (local runtime/build log output).
- `dev.log` (local runtime/dev log output).

## Remediation Applied
- Hardened ignore rules to block `.pid` and `.log` artifacts.
- Removed tracked PID/log artifacts from git index with `git rm --cached` (local files preserved).
- Added pre-commit and CI secret scanning controls.
