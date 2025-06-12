# Feature Implementation Code Generator

## Objective
Write clean, functional code to implement a specified feature or requirement, following best practices and given coding standards.

## Context to Provide
- `{{project_description}}` – details of the feature or functionality to implement (expected behavior, scope)
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (to ensure code is in the correct language/framework)
- `{{coding_standards}}` – style guidelines (e.g., collocation pattern, kebab-case naming, minimal useEffect, test file suffix `.spec.tsx`, Airbnb style rules)
- `{{repository_link}}` – (optional) link to relevant repository or code for context
- `{{desired_output_format}}` – e.g. Markdown (for outputting code in ``` blocks)
- `{{additional_constraints}}` – e.g. performance requirements, specific libraries, or complexity limits

## AI Steps
1. Analyze the feature description to identify key functionalities and components
2. Outline an approach or algorithm considering the tech stack (e.g., define React components, API endpoints as needed)
3. If repository code is provided, follow existing patterns and ensure consistency with that codebase
4. Write the code step-by-step, adding comments for clarity, ensuring it conforms to `{{coding_standards}}`
5. Review the generated code to ensure it meets requirements and has no obvious bugs or style violations

## Output Specification
Provide the code implementation (function, module, or class as appropriate) formatted as a Markdown code block. Include brief inline comments to explain non-obvious logic. The output should be ready for testing or review (no placeholders or pseudo-code).

## Hallucination Guards
- If the description is incomplete (e.g., missing data models or UI details), ask for clarification rather than guessing
- Do not fabricate API names or data models not provided; use generic placeholders or request specifics
- If referencing an external library, ensure it exists or mark it as an assumption
- Mark uncertain assumptions in comments with "❓"

## Adaptation Note
For a different tech stack or language, adjust the coding style and libraries (e.g., use Python syntax and PEP 8 conventions for a Django project) and update `{{coding_standards}}` accordingly.

## Default Tech Stack
TypeScript + React + Node/Nest
