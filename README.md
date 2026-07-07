# Aura AI Pipeline

This repository is the AI pipeline for **AuraGen**, a self-healing UI project developed as part of the **Advanced Generative AI Engineering Program** at **Infotact Solutions**.

## My Role

My responsibility is simple:

* Take a natural language prompt.
* Generate a valid, styled React component.
* Return the JSX output.

## Team

* **Ullas** – Frontend (Next.js, Tailwind, Telemetry)
* **Ayush (Team Lead)** – AI Pipeline & Prompt Engineering
* **Goutham** – Backend (WebSocket Integration)

## Project Files

* **system-prompt.js** – Defines the AI system prompt.
* **generate-component.js** – Generates React components from prompts.
* **validate-component.js** – Validates generated JSX.
* **test-login-page.js** & **test-weather-app.js** – Test scripts.
* **test-connection.js** – Checks API connection.

## Current Model

Currently using **Google Gemini Flash** because the OpenAI API key is not yet available. The code can easily be switched to GPT-4o by updating the API call.

## Main Function

```javascript
generateComponent(prompt)
```

Returns:

```javascript
{
  success: true,
  jsx: "...",
  error: null
}
```

or

```javascript
{
  success: false,
  jsx: null,
  error: "..."
}
```

## Setup

```bash
npm install
node test-connection.js
```

## Status

AI pipeline completed and tested.

**Next Step:** Replace Gemini with GPT-4o and integrate with the backend WebSocket server.
