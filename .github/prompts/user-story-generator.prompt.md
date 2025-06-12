# User Story & Acceptance Criteria Generator

## Objective
Transform high-level product or feature descriptions into well-structured user stories each with clear acceptance criteria.

## Context to Provide
- `{{project_description}}` – overview of the product/feature and its user goals
- `{{desired_output_format}}` – e.g. Markdown (for listing stories and criteria)
- `{{additional_constraints}}` – e.g. specific user roles or compliance requirements

## AI Steps
1. Extract key features and user goals from the provided description
2. Derive distinct user stories (format: "As a [user], I want [goal], so that [benefit]")
3. For each story, formulate 3-5 acceptance criteria that are specific and testable
4. Ensure criteria cover normal, edge, and error scenarios for completeness
5. Review the stories and criteria for clarity and alignment with the context; refine if needed

## Output Specification
A list of user stories with sub-bulleted acceptance criteria. Each user story is a bold title or bullet, followed by its acceptance criteria as a nested list.

## Hallucination Guards
- If any needed detail (user role, specific functionality) is missing, ask for clarification before writing the story
- Don't introduce features not mentioned in the context
- Mark any assumptions with a "❓" and clearly state them as assumptions

## Adaptation Note
To adapt for another tech stack or domain, adjust the story details and terminology (e.g., mobile app vs. web platform) and update any format conventions as needed.

## Default Tech Stack
TypeScript + React + Node/Nest
