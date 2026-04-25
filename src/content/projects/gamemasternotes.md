---
title: Game Master Notes
description: A public digital garden of campaign notes, homebrew, and GM references built on Obsidian and Quartz.
tags: [web, pf2e]
status: live
url: https://gamemasternotes.com
tech: [Obsidian, Quartz, Cloudflare, Markdown]
order: 2
---

A public-facing version of my Obsidian vault — the actual notes I use when running Pathfinder 2e campaigns. Rather than keeping everything locked in a local folder, publishing it forces better organisation and occasionally helps other GMs.

## What's in it

- Session notes and campaign lore for the Ironbound Archipelago (Rusthenge adventure)
- Rules references and clarifications for PF2e mechanics
- Homebrew content, NPC sketches, encounter ideas
- General GM philosophy notes accumulated over years of running games

## How it's built

The vault lives in Obsidian locally. A symlink connects the relevant folders directly to Quartz's content directory, so publishing is just a `git push`. Quartz handles the static site generation, Cloudflare handles the custom domain and CDN.

Zero friction between writing a note and it appearing on the site — which is the whole point.
