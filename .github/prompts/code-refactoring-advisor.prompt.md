# Code Refactoring & Optimization Advisor

## Objective
Improve an existing code snippet's quality (readability, performance, maintainability) by refactoring it while adhering to specified coding standards and without altering its intended functionality.

## Context to Provide
- `{{project_description}}` – context about what the code is supposed to do (helps ensure refactoring doesn't change behavior)
- `{{coding_standards}}` – coding style and best practices to enforce (e.g., modularization, naming conventions, reducing useEffect usage, following Airbnb style)
- `{{repository_link}}` – (optional) link or excerpt of the code to refactor (provide the code directly if possible for analysis)
- `{{desired_output_format}}` – e.g. Markdown (for outputting the refactored code and explanations)
- `{{additional_constraints}}` – e.g. "do not change external API", performance targets, or memory constraints

## AI Steps
1. Examine the provided code and understand its functionality and structure
2. Identify areas for improvement (e.g., long functions, duplicate code, unclear naming, performance hotspots)
3. Create a refactoring plan addressing these areas (e.g., split functions, rename variables, optimize loops)
4. Apply the refactor to the code, ensuring it still meets its original requirements and uses `{{coding_standards}}` guidelines
5. Review the refactored code for correctness and completeness, and prepare a summary of changes made

## Output Specification
The refactored code presented as a Markdown code block, preserving original functionality. Following the code, provide a brief bullet list or paragraph summarizing key changes (e.g., "Renamed X for clarity", "Extracted Y into a helper function"). This helps the user verify and understand the modifications.

## Hallucination Guards
- Do not introduce new functionality or remove essential logic during refactoring
- If any part of the code's intent is unclear, ask for clarification before changing it
- Avoid guessing what an unidentified function or variable does; request context if needed
- If performance changes are speculative, label them as assumptions with "❓"

## Adaptation Note
For different languages or frameworks, tailor refactoring approaches (e.g., in Java, consider design patterns; in JavaScript, consider immutability). Also adjust `{{coding_standards}}` to the conventions of the target language.

## Default Tech Stack
TypeScript + React + Node/Nest
