// generate-component.js
require('dotenv').config();
const { ChatGoogleGenerativeAI } = require('@langchain/google-genai');
const { SYSTEM_PROMPT } = require('./system-prompt');
const { validateComponent } = require('./validate-component');

const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-flash-latest',
  temperature: 0.7,
});

/**
 * Generates a React component based on a user prompt, with validation
 * and error handling built in. This is the function Gautham will call.
 * @param {string} userPrompt
 * @returns {Promise<{ success: boolean, jsx?: string, explanation?: string, error?: string }>}
 */
async function generateComponent(userPrompt) {
  try {
    const response = await model.invoke([
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt },
    ]);

    let raw = response.content;
    raw = raw.replace(/```json?/g, '').replace(/```/g, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (parseErr) {
      console.error('Failed to parse Gemini JSON output:', parseErr.message);
      return {
        success: false,
        error: 'AI response was not valid JSON.',
      };
    }

    const { jsx, explanation } = parsed;

    if (!jsx) {
      return {
        success: false,
        error: 'AI response JSON was missing the "jsx" field.',
      };
    }

    const validation = validateComponent(jsx);

    if (!validation.isValid) {
      console.warn('Validation issues found:', validation.errors);
      return {
        success: false,
        error: `Generated component failed validation: ${validation.errors.join(' ')}`,
      };
    }

    return {
      success: true,
      jsx,
      explanation: explanation || 'Component generated successfully.',
    };
  } catch (err) {
    // Catches network errors, API failures, timeouts, etc.
    console.error('AI generation failed:', err.message);
    return {
      success: false,
      error: `AI generation failed: ${err.message}`,
    };
  }
}

module.exports = { generateComponent };