# Sailor Piece Code Source Checks

Each daily codes update must add one JSON archive named by the local check date:

```text
src/data/code-source-checks/YYYY-MM-DD.json
```

The archive is the proof trail for `src/data/codes.json`. It should include:

- `checked_at`: the real Asia/Shanghai check time.
- `sources`: official or third-party pages reviewed, with URL and access time.
- `codes_reviewed`: every active code left in `src/data/codes.json`.
- `decisions`: new codes, expired moves, reward changes, level changes, and conflicts.
- `redeem_tests`: only when an actual in-game redemption was performed.

Run `pnpm codes:evidence` before committing a codes update. `pnpm seo:check` also runs this guard.
