# Exchange rate client

An Angular front end for the exchange-rate API: current rates, charted history and
a login screen, in Czech and English.

Talks to [backend_exchange](https://github.com/MiroslavKosek/backend_exchange).

## What it does

- **Dashboard** with current rates for a chosen base currency.
- **History** view that charts a rate over a date range (Chart.js).
- **Login** against the API's JWT endpoint, with a route guard that keeps unauthenticated
  users out of the rest of the app.
- **Czech and English**, switchable at runtime.

## Design notes

**Translations are authored as `.po`, shipped as JSON.** `npm run extract` pulls
translatable strings out of the templates into `extract.pot`, translators work in
`public/i18n/cs.po` and `en.po`, and `scripts/i18n-po-to-json.mjs` converts them to the
JSON that `@ngx-translate` loads at runtime. The point is that nobody hand-edits a JSON
translation file and silently drops a key.

**Route guard, not template guard.** `auth-guard` blocks the route, so a protected view
never starts loading and never fires its API calls for an anonymous visitor.

## Layout

```text
src/app/
  components/
    layout/     navbar/          # shell
    login/                       # JWT login form
    dashboard/                   # current rates
    history/                     # charted history
  guards/auth-guard.ts           # route protection
public/i18n/                     # cs/en, .po sources and generated .json
scripts/i18n-po-to-json.mjs      # .po -> .json conversion
```

Every component has a `.spec.ts` next to it.

## Running it

The API has to be running first, see
[backend_exchange](https://github.com/MiroslavKosek/backend_exchange).

```shell
npm install
npm start                        # dev server on http://localhost:4200
```

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server with live reload |
| `npm run build` | Production build |
| `npm test` | Unit tests |
| `npm run lint` | ESLint |
| `npm run extract` | Pull translatable strings into `extract.pot` |
| `npm run translate` | Regenerate the JSON translations from the `.po` files |

## Stack

Angular, TypeScript, PrimeNG with PrimeFlex and PrimeIcons, Chart.js, `@ngx-translate`,
ngx-logger, ESLint.

## Licence

MIT, see [LICENSE](./LICENSE).
