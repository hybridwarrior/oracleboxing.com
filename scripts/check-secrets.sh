#!/usr/bin/env bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

usage() {
  echo "Usage: $0 [--staged|--range <base_sha> <head_sha>]" >&2
}

if [[ "${1:-}" == "--staged" ]]; then
  DIFF_CMD=(git diff --cached --unified=0 --no-color --diff-filter=ACMR)
  MODE="staged"
elif [[ "${1:-}" == "--range" ]]; then
  if [[ $# -ne 3 ]]; then
    usage
    exit 2
  fi
  BASE_SHA="$2"
  HEAD_SHA="$3"
  if [[ "$BASE_SHA" =~ ^0+$ ]]; then
    if git rev-parse "${HEAD_SHA}^" >/dev/null 2>&1; then
      BASE_SHA="$(git rev-parse "${HEAD_SHA}^")"
    else
      BASE_SHA="$(git hash-object -t tree /dev/null)"
    fi
  fi
  DIFF_CMD=(git diff --unified=0 --no-color --diff-filter=ACMR "${BASE_SHA}..${HEAD_SHA}")
  MODE="range ${BASE_SHA}..${HEAD_SHA}"
else
  usage
  exit 2
fi

ADDED_LINES="$("${DIFF_CMD[@]}" | rg -n '^\+[^+]' || true)"
if [[ -z "$ADDED_LINES" ]]; then
  echo "Secret scan passed (${MODE}): no added lines."
  exit 0
fi

PATTERN="^\\+[^+].*(-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|xox[baprs]-[A-Za-z0-9-]{10,}|sk-[A-Za-z0-9]{20,}|AIza[0-9A-Za-z\\-_]{20,}|(?i:(api[_-]?key|client[_-]?secret|access[_-]?token|refresh[_-]?token|supabase[_-]service[_-]role[_-]?key|password)\\s*[:=]\\s*[\"'](?=[^\"']*(?:[a-z]|\\d))[A-Za-z0-9_\\-\\/+=.]{12,}[\"']))"

MATCHES="$(printf '%s\n' "$ADDED_LINES" | rg -n --pcre2 "$PATTERN" || true)"
if [[ -z "$MATCHES" ]]; then
  echo "Secret scan passed (${MODE})."
  exit 0
fi

FILTERED="$(printf '%s\n' "$MATCHES" | rg -v "secrets-scan:allow|process\\.env\\.|\\$\\{" || true)"
if [[ -z "$FILTERED" ]]; then
  echo "Secret scan passed (${MODE}) with allowlisted matches."
  exit 0
fi

echo "Potential secrets detected. Remove them or annotate intentional test values with 'secrets-scan:allow'." >&2
printf '%s\n' "$FILTERED" >&2
exit 1
