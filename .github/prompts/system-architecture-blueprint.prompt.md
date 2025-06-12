# System Architecture Blueprint Generator

## Objective
Propose a high-level system or feature architecture, outlining components and their interactions based on the provided requirements.

## Context to Provide
- `{{project_description}}` – summary of the system's purpose, key features, and constraints
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (so architecture aligns with these technologies; e.g., include a Node/Nest API layer, React frontend)
- `{{additional_constraints}}` – e.g. scalability requirements, regulatory constraints, or specific design patterns to use/avoid

## AI Steps
1. Analyze the requirements and identify core modules/services (e.g., frontend UI, backend services, database, third-party integrations)
2. For each module, determine its responsibility and how it will interact with other parts (e.g., REST API calls from frontend to backend)
3. Suggest technology or patterns for each component (e.g., use NestJS for API, design React components following collocation pattern)
4. Highlight any key design decisions or trade-offs (e.g., state management choice, synchronous vs asynchronous communication)
5. Organize the proposal into clear sections (e.g., Overview, Components, Data Flow) using bullet points or short paragraphs for each component

## Output Specification
A structured document with headings like "Overview", "Components", "Data Flow/Integration". Under each, bullet points or subheadings describe each component and interaction. Use clear language and avoid overly technical jargon unless specified.

## Hallucination Guards
- Do not assume requirements that are not given (e.g., if scalability isn't mentioned, do not impose microservices without reason)
- If a needed detail is missing (e.g., type of database), list it as an open question or assumption (with a "❓")
- Cite any known frameworks or patterns accurately; if unsure, flag rather than inventing details

## Adaptation Note
To adapt for a different stack or language, replace technology-specific components (e.g., use Python + Django instead of Node/Nest, or Angular instead of React) and adjust design patterns accordingly.

## Default Tech Stack
TypeScript + React + Node/Nest
