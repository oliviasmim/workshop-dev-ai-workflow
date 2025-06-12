# Code Documentation Generator

## Objective
Enhance a given code snippet or module by adding clear, informative documentation comments (docstrings, inline comments) without changing its functionality.

## Context to Provide
- `{{repository_link}}` – link or excerpt of the source code that needs documentation (the code should be provided)
- `{{coding_standards}}` – documentation/comment standards to follow (e.g., JSDoc format for TS, Python docstring style)
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (to match the documentation style to the language/framework)
- `{{desired_output_format}}` – e.g. Markdown (to present the documented code in a code block)
- `{{additional_constraints}}` – e.g. include usage examples in comments, focus on specific functions only, etc.

## AI Steps
1. Read and understand the code to grasp the purpose of each function, class, or complex section
2. For each function or class, write a concise docstring/comment explaining its purpose, parameters, return values, and any important details (exceptions, side effects)
3. Add inline comments to clarify non-obvious logic or important steps in the code
4. Ensure the tone and format of comments follow `{{coding_standards}}` (e.g., tense, style guidelines) and are appropriate for the language
5. Output the code with the new comments integrated at appropriate locations

## Output Specification
The entire code snippet with documentation added, formatted as a Markdown code block. New comments/docstrings should use proper syntax (e.g., `/** ... */` for JS/TS or `"""..."""` for Python) and be placed directly above or beside the relevant code. The code's original behavior should remain unchanged.

## Hallucination Guards
- Don't document intent that isn't clear from the code
- If a part of the code is unclear, mark the comment as a question or TODO (with "❓") rather than providing potentially incorrect info
- Avoid adding descriptions for functionality the code doesn't have
- Base documentation strictly on the code and any context provided

## Adaptation Note
Adjust commenting style for different languages or frameworks (e.g., use JavaDoc for Java, XML comments for C#). If the project uses a specific documentation tool or style (like Sphinx or JSDoc), format comments to be compatible.

## Default Tech Stack
TypeScript + React + Node/Nest
