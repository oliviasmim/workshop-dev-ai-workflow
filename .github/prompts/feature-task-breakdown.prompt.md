# Feature Task Breakdown Planner

## Objective
Decompose a complex feature or project into manageable tasks or components, providing a clear development plan.

## Context to Provide
- `{{project_description}}` – description of the feature/epic and its main functionalities
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (to tailor tasks to the stack, e.g. front-end vs back-end tasks)
- `{{desired_output_format}}` – e.g. Markdown (for a structured checklist or list)
- `{{additional_constraints}}` – e.g. deadlines, priority of components, or team skill considerations

## AI Steps
1. Understand the feature scope and identify its major functional parts (UI, backend, database, etc.)
2. Break down the feature into discrete tasks or user stories for each part
3. For each task, include a brief description and any dependencies or prerequisites
4. Organize tasks in a logical order (e.g., foundational tasks first, then incremental features)
5. Present the plan as an ordered list or checklist, ensuring it's comprehensive and covers all aspects of the feature

## Output Specification
An ordered list or checklist of tasks. Each task item should have a short title (action-oriented) and an optional sub-point describing details or acceptance criteria for completion.

## Hallucination Guards
- If the feature description is vague or missing sections (e.g., no info about UI but likely needed), ask for clarification rather than assuming
- Avoid including tasks unrelated to the given scope
- If uncertain about a dependency or sequence, mark it with "❓" or explicitly state it as an open question

## Adaptation Note
Adjust the task breakdown for different tech stacks by including relevant layers or frameworks (e.g., for a Python/Django project, include Django model/view tasks instead of Node/Nest tasks).

## Default Tech Stack
TypeScript + React + Node/Nest
