---
title: PF2e PDF Extractor
description: Pulls structured data out of Pathfinder 2e PDF sourcebooks so you can actually use it.
tags: [pf2e, tools]
status: wip
url:
tech: [TypeScript, PDF parsing]
order: 3
---

Paizo's PDFs are beautifully laid out and completely useless for any kind of automation. This tool extracts structured data — stat blocks, item entries, spell descriptions — from official sourcebooks and turns them into clean JSON you can feed into other tools.

## What it does

- Parses PF2e PDF sourcebooks into structured data
- Extracts stat blocks, items, spells, and other game elements
- Outputs clean JSON for use in other projects

## Why it exists

Half the PF2e tools in this portfolio depend on having game data in a usable format. Rather than hardcoding everything or relying on third-party data sources, this extracts it directly from the source.

*Work in progress — extraction coverage expanding as needed by other tools.*
