# =============================================================================
# ProspectOS Configuration Guide
# =============================================================================

## PURPOSE

This directory contains every runtime configuration used by ProspectOS.

The purpose of `config.json` is to define **how ProspectOS behaves** without
changing application code.

No module should ever read `config.json` directly.

Always import configuration through:

```javascript
const config = require("../utils/config");
```

This guarantees that every module receives a validated and immutable
configuration object.

---

# DESIGN PHILOSOPHY

Configuration should answer only one question:

> "How should ProspectOS behave?"

Configuration should **NOT** contain:

- Scraped data
- Business logic
- Runtime state
- Lead information
- Temporary values

If a value does not change application behaviour,
it probably belongs in `constants.js` instead.

---

# DIRECTORY STRUCTURE

config/
│
├── config.json
└── README.md

---

# CONFIGURATION SECTIONS

## browser

Controls the Playwright browser.

Properties

| Property | Purpose |
|----------|----------|
| headless | Launch browser with or without UI |
| timeout | Default browser timeout |
| navigationTimeout | Maximum page navigation time |
| executablePath | Custom browser executable |
| userDataDir | Persistent browser profile |
| viewport | Default browser viewport |

---

## scraper

Controls the scraping engine.

Properties

| Property | Purpose |
|----------|----------|
| maxRetries | Retry attempts before failure |
| retryDelay | Delay between retries |
| delayBetweenProfiles | Wait time between processing profiles |
| concurrency | Number of concurrent workers |

This section is intentionally generic.

It should work for:

- Instagram
- LinkedIn
- Google Maps
- Website Crawling
- Future engines

---

## instagram

Instagram-specific configuration.

Properties

| Property | Purpose |
|----------|----------|
| baseUrl | Instagram base URL |
| graphqlTimeout | Maximum wait time for GraphQL response |

Only Instagram-specific values belong here.

---

## website

Controls website crawling behaviour.

Properties

| Property | Purpose |
|----------|----------|
| timeout | Website request timeout |
| maxDepth | Maximum crawl depth |
| maxPages | Maximum pages to analyse |
| followRedirects | Allow HTTP redirects |

---

## output

Controls exported data.

Properties

| Property | Purpose |
|----------|----------|
| directory | Output directory |
| prettyPrint | Pretty-print JSON output |

Future options:

- CSV
- Excel
- Database
- Compression

---

## logging

Controls application logging.

Properties

| Property | Purpose |
|----------|----------|
| level | Logging verbosity |
| timestamps | Include timestamps in logs |

---

# ENGINEERING RULES

## Rule 1

Never import:

```javascript
require("../../config/config.json")
```

Always use:

```javascript
const config = require("../utils/config");
```

---

## Rule 2

Never modify configuration during runtime.

Configuration is read-only.

---

## Rule 3

Every new configuration option must be documented in this file.

---

## Rule 4

If adding a new top-level section, ask:

"Will multiple modules use this?"

If the answer is **no**, it probably belongs somewhere else.

---

# FUTURE EXPANSION

Potential future sections:

- proxy
- cache
- ai
- queue
- database
- security
- notifications

These should only be added when they solve a real engineering problem.

---

# OWNERSHIP

Directory Owner:
Configuration System

Primary Consumer:
src/utils/config.js

Every other module accesses configuration through the Configuration Manager.

Never bypass it.

---

# SUMMARY

Think of this directory as the **control panel** for ProspectOS.

Changing values here changes how ProspectOS behaves.

Changing code changes how ProspectOS works.

Those two responsibilities should always remain separate.

# =============================================================================