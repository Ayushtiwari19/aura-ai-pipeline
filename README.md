# AuraGen AI Prompt Engineering Pipeline

This folder contains the AI generation pipeline for AuraGen's self-healing UI system.
Owned by: Ayush (AI Prompt Engineering)

## What this does

Takes a text description (e.g. "Build a modern React login page with Tailwind CSS")
and returns AI-generated React component code, ready to be rendered or saved.

This is the piece that turns a `HIGH_FRUSTRATION` signal into an actual fix.

## How to use it

```javascript
const { generateComponent } = require('./generate-component');

const result = await generateComponent('Build a modern React login page with Tailwind CSS');

if (result.success) {
  console.log(result.jsx); // the generated component code, ready to use
} else {
  console.log(result.error); // a human-readable error message
}
```

**Always returns** an object: `{ success: boolean, jsx?: string, error?: string }`
**Never throws** — safe to call without wrapping in try/catch
**Takes a few seconds** per call since it's a real AI request

## Files in this folder

| File | Purpose |
|---|---|
| `system-prompt.js` | The instructions that control how the AI behaves — always outputs a `WizardForm` component using Tailwind CSS |
| `generate-component.js` | The main function — call `generateComponent(prompt)` from here |
| `validate-component.js` | Checks AI output is well-formed before it's returned (catches broken code, missing exports, etc.) |
| `test-connection.js` | Confirms the AI API key + connection works |
| `test-login-page.js` | Test case: generates a login page |
| `test-weather-app.js` | Test case: generates a weather app |

## Setup (if running this for the first time)

1. `npm install`
2. Create a `.env` file with: `GEMINI_API_KEY=your-key-here`
3. Run any test file: `node test-login-page.js`

## Integration contract (for Gautham's WebSocket server)

Input: `formDescription` string (from the `HIGH_FRUSTRATION` signal)
Output: pass `result.jsx` into the `GENERATED_COMPONENT` message sent to the frontend

```javascript
const result = await generateComponent(formDescription);

if (result.success) {
  // send: { type: "GENERATED_COMPONENT", jsx: result.jsx }
} else {
  // log result.error, do not send broken JSX to the frontend
}
```

## Current model

Using Google Gemini (`gemini-flash-latest`) as a free placeholder while the team
finalizes an OpenAI key. Swapping to GPT-4o later only requires changing the
import and client setup inside `generate-component.js` — the prompt and logic
stay the same.

## Status

- [x] AI connection tested and working
- [x] System prompt enforces consistent `WizardForm` + Tailwind output
- [x] Login page test passing
- [x] Weather app test passing
- [x] Output validation in place
- [ ] Switch to GPT-4o (pending team API key)
- [ ] Wired into Gautham's WebSocket server