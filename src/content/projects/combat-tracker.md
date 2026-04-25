---
title: PF2e Combat Tracker
description: A lightweight combat tracker built around how PF2e actually works — three actions, conditions, and all.
tags: [pf2e, tools]
status: wip
url:
tech: [TypeScript, React, localStorage]
order: 6
---

Most generic combat trackers treat PF2e like D&D with extra steps. This one is built around the PF2e action economy from the ground up — three actions per turn, reactions, conditions, hero points, the works.

## What it does

- Initiative order with drag-and-drop reordering
- Three-action tracker per combatant per turn
- Condition tracking (frightened, stunned, prone, etc.) with automatic value reduction on turn end
- HP tracking with dying/wounded states
- Works in the browser, state saved locally — no account needed

## Why it exists

Running combat in PF2e has a lot of moving parts. Foundry VTT is the full solution but overkill for theatre-of-the-mind games. This sits in a browser tab and handles exactly what needs tracking, nothing more.

*Work in progress.*
