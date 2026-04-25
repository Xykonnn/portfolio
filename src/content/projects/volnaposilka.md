---
title: VolnaPosilka
description: Real-time gym slot availability tracker for Prague. Stop refreshing four tabs at once.
tags: [web, tools]
status: live
url: https://your-volnaposilka-url.railway.app
tech: [Bun, TypeScript, Hono, Cheerio, SSE, Railway]
order: 1
---

Prague gyms all run different booking platforms. FitForMe, GYMIFY, Virtuagym, 3pgym — none of them talk to each other, and checking availability across all of them meant keeping four tabs open and refreshing manually.

VolnaPosilka aggregates live slot data from all of them in one place, streamed in real-time using Server-Sent Events so the page updates without reloading.

## What it does

- Polls multiple gym provider APIs on a schedule
- Streams live availability updates to the browser via SSE
- Shows all Prague gym slots in a single unified view
- Planned: map-based discovery with pin-based gym selection

## How it was built

Started with Playwright-based scraping, then pivoted to direct API calls after realising most providers expose their data over HTTP anyway — no headless browser needed, much lighter on resources. Deployed on Railway which handles the always-on server requirement.

The project is ongoing — a map view (v0.7) is in progress.
