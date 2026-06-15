# Mangrove Developer API Focus Group: Participant Brief

Welcome! You're one of 10-20 developers and quants helping us pressure-test the Mangrove Developer Portal (mangrovedeveloper.ai) before launch. This document has everything you need for the week. Read it before the kickoff.

## Schedule at a glance

| When | What | Time required |
|---|---|---|
| [kickoff date] | Live kickoff (Zoom) | 30-45 min |
| [kickoff date] - June 25 | Async testing over two weeks, on your schedule | 4-6 hours total |
| End of week 1 | Check-in post in Discord + short survey | 10 min |
| By June 24 | Loom feedback video | 10-20 min |
| **June 26** | Live debrief (Zoom) | ~1 hour |

## What we're trying to learn

We are pre-launch. Your feedback directly shapes what ships and in what order. We specifically want to find:

1. How long it takes to go from signup to your first successful API call, and what slows you down
2. Where the documentation fails to answer your first question
3. Where the Python or TypeScript SDK fights you on real integration work
4. How the API behaves when you push on it: rate limits, errors, edge cases

Blunt feedback is the deliverable. "This was confusing and here's why" is worth more to us than politeness.

## Before the kickoff

- Confirm you can log in at mangrovedeveloper.ai and generate an API key
- Join the Discord and post a one-line intro in #intros (name, stack, what you've built)
- Have a terminal and your preferred environment (Python or TypeScript) ready; we'll all make a first API call together during the kickoff

## Your testing tasks

Pick **2-3 tasks** from this menu based on your background. Quality beats coverage; we'd rather have a deep log on two tasks than a skim of five.

1. **Cold start.** From a clean environment, install the SDK and make your first authenticated call. Time yourself from signup to first 200 response. Log every moment of confusion, however small.
2. **Data pipeline.** Pull data from 3+ providers through the single key. Compare the experience to integrating those providers directly.
3. **Strategy lifecycle.** Create a strategy via the AI-assisted endpoint, backtest it, and run it in market simulation. Log where the loop breaks or surprises you.
4. **Execution and risk.** Set up automated execution and deliberately try to violate the risk limits. Does enforcement match what the docs promise?
5. **Break it on purpose.** Malformed requests, expired keys, rate-limit hammering, concurrent calls. Tell us whether the error messages actually helped you recover.
6. **Agent track.** If you work with AI agents or MCP: run mangrove-agent with Claude Code against the API (links on the portal). Log where the agent gets stuck in ways a human wouldn't.

## How to log feedback

Log in your personal thread in **#testing-log** on Discord, **while you're testing**, not at the end of the week. Real-time notes are far more useful than reconstructed ones. Use this format for each entry:

```
TASK: (which task from the menu)
WHAT I TRIED:
WHAT HAPPENED:
EXPECTED:
SEVERITY: blocker / friction / nitpick
DOCS: did the docs help? what was missing?
```

Screenshots, code snippets, and stack traces are all welcome. There's no minimum or maximum number of entries; log whatever you hit.

**Stuck or blocked?** Post in #questions. We monitor it daily and a blocker for you is a finding for us, so never grind silently.

## Your Loom video (10-20 min)

Record a screen walkthrough before the debrief covering:

1. The thing you built or attempted
2. Your worst 10 minutes of the week
3. What you expected the API to do that it didn't
4. The one thing you'd change before launch
5. Your verdict: would you build on this with your own capital or strategies? Why or why not?

Drop the link in your #testing-log thread.

## The debrief

We'll come with the top themes from everyone's logs and videos and dig into the biggest ones together. Come ready to tell the story behind your toughest log entries and to rank your #1 fix-before-launch.

## Discord channels

- **#announcements**: schedule and updates from us
- **#intros**: say hi
- **#testing-log**: your personal feedback thread lives here
- **#questions**: anything blocking you, answered daily

Questions before kickoff? Post in #questions or reply to the email that delivered this brief. Thanks for helping us build this right.

Tim and the Mangrove team
