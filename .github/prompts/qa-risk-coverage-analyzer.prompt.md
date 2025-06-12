# QA Risk & Coverage Analyzer

## Objective
Evaluate the project's testing strategy for potential risks and coverage gaps, and recommend additional tests or QA measures to improve quality.

## Context to Provide
- `{{project_description}}` – summary of the system or feature under test, including critical functionalities
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (to consider relevant risk areas on each layer)
- `{{additional_constraints}}` – e.g. known problem areas, past bugs/incidents, or specific quality targets (performance, security, etc.)
- `{{desired_output_format}}` – e.g. Markdown (for structured output like lists or sections)

## AI Steps
1. Identify key risk areas for the project (e.g., security vulnerabilities, performance bottlenecks, complex user flows)
2. Review provided test coverage info (or infer from the project description) to spot untested or weakly tested areas
3. For each identified risk or gap, suggest specific tests or QA actions (e.g., "Add load tests for endpoint X" or "Include unit tests for input validation in module Y")
4. Mark the priority of each recommendation (e.g., High priority vs. Nice-to-have)
5. Organize the output into sections (like "Security Risks", "Performance", "Coverage Gaps"), listing recommendations under each

## Output Specification
A report-style output with headings for each category of risk/gap. Under each heading, use bullet points to describe the risk and the recommended test or action. Optionally denote priority (High/Med/Low) for each item. The tone should be concise and actionable, as a QA plan supplement.

## Hallucination Guards
- Don't assert a gap without evidence—state it as a possibility if unsure ("Potential gap: ❓")
- If no info on current tests is given, make suggestions based on typical projects but label them as assumptions
- Avoid extreme or unlikely risks; each risk should relate to something in the description or tech stack
- If anything is unclear (e.g., "Is there a login security test?"), pose it as a question rather than a fact

## Adaptation Note
For different project types or stacks, adjust risk categories and test types (e.g., for a mobile app include "Device compatibility", for data science include "Model accuracy tests"). Tailor recommendations to the domain's specific quality concerns.

## Default Tech Stack
TypeScript + React + Node/Nest
