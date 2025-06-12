# Test Case Suite Generator

## Objective
Create a comprehensive suite of test cases (including positive, negative, and edge cases) based on a given requirement or user story.

## Context to Provide
- `{{project_description}}` – the requirement, user story, or feature description to derive test cases from
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (to tailor test scenarios to the platform, e.g. web UI vs API)
- `{{desired_output_format}}` – e.g. Markdown (for listing test cases clearly)
- `{{additional_constraints}}` – e.g. specific quality criteria (performance, security) to include, or the number of test cases desired

## AI Steps
1. Parse the requirement to understand expected functionality and user behaviors
2. Identify key scenarios: typical (positive) use, error conditions (negative), and boundary or edge cases
3. Formulate test cases for each scenario. Each test case should have a concise title/description, initial conditions, input/action, and expected outcome
4. Ensure the set covers all functional requirements and edge conditions mentioned in the description
5. Organize the test cases logically (group by feature or type) and ensure clarity and completeness

## Output Specification
A list of test cases, each either as a bullet or a sub-section. For example:
- **Test Case 1:** Description – Expected outcome
- **Test Case 2:** Description – Expected outcome

Optionally include sections for Positive, Negative, Edge Cases. Use clear, concise descriptions, possibly in a table or structured list if detailed steps are needed.

## Hallucination Guards
- Don't invent features or requirements beyond what's provided
- If a detail needed for a test (e.g., specific input value) isn't specified, either ask for it or make a clearly noted assumption (e.g., "assuming max input length is 255 ❓")
- Ensure each derived test case traceably ties back to a requirement detail given

## Adaptation Note
Adjust test case format or focus for different tech stacks or methodologies (e.g., for BDD, present cases in Given/When/Then format; for an API, include request/response details). The approach to identifying positive/negative/edge remains the same.

## Default Tech Stack
TypeScript + React + Node/Nest
