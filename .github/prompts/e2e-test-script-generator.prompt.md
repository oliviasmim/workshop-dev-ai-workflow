# End-to-End Test Script Generator

## Objective
Generate an automated end-to-end test script for a given user scenario, using the specified testing framework (e.g. Playwright), to validate the application works as expected from the user's perspective.

## Context to Provide
- `{{project_description}}` – description of the user scenario or feature to test (e.g., "User logs in and updates profile")
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (ensure the test language matches the stack; default to Playwright in TS for web UI)
- `{{additional_constraints}}` – e.g. chosen test framework (default Playwright), target browser or environment, any setup/teardown requirements
- `{{desired_output_format}}` – e.g. Markdown (to present the script as a formatted code block)

## AI Steps
1. Break down the scenario into discrete user actions or steps
2. Translate each step into the test framework's commands (e.g., clicks, form inputs, navigations with Playwright API)
3. Apply testing best practices: use stable selectors, include assertions for expected outcomes at key points, and add waits where necessary
4. Write the test script with a clear structure (setup, actions, assertions, teardown), following any `{{coding_standards}}` for test code
5. Review the script to ensure it covers all steps and edge conditions of the scenario and is free of pseudo-code

## Output Specification
The full test script as a Markdown code block. Include comments for clarity on non-obvious steps. Ensure the script is syntactically correct and self-contained (including necessary imports or configurations).

## Hallucination Guards
- Don't assume element selectors or data that aren't provided; use placeholders or ask for them (e.g., `#usernameField ❓`)
- If required test data (like credentials) is missing, request it or mark as a placeholder
- Stick to the capabilities of the specified framework—if a scenario step is not feasible to automate, explain this rather than inventing an unsupported action

## Adaptation Note
To adapt for a different stack or tool, switch the framework and language (e.g., Selenium with Java, Cypress with JS) and adjust the syntax and best practices accordingly. The core process of mapping user steps to automation steps remains the same.

## Default Tech Stack
TypeScript + React + Node/Nest (with Playwright for E2E testing)
