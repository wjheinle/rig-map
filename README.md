# Rig Map

Map of active North American drilling rigs (data as of 10/14/2026). Click a rig to see the operator and contact details.

- Static single page served by Express (`public/index.html`), no database or volume.
- `railway.json` turns on App Sleeping so the service sleeps when idle.
- Operator headquarters live in the `DIR` object inside `public/index.html`. Entries with `v:0` need confirming.
