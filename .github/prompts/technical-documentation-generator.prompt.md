# Technical Documentation Page Generator

## Objective
Create a well-structured documentation page (for a wiki or Confluence) that clearly explains a technical topic or project feature for future reference.

## Context to Provide
- `{{project_description}}` – details of the topic or feature to document (e.g. module overview, API, design decision)
- `{{tech_stack}}` – default: TypeScript + React + Node/Nest (to include relevant technical context in the doc)
- `{{coding_standards}}` – (optional) documentation style guide or template to follow
- `{{desired_output_format}}` – e.g. Markdown (suitable for Confluence or GitHub Wiki)
- `{{additional_constraints}}` – e.g. target audience (devs, QA), required sections (like "Usage", "Architecture"), or length limits

## AI Steps
1. Outline the document with logical sections (e.g., Overview, Architecture, Usage, Limitations)
2. For each section, draft clear and concise content using the provided context and general knowledge of the `{{tech_stack}}`
3. Include examples like code snippets or pseudo-diagrams in Markdown if they aid understanding (using proper formatting)
4. If any important detail is missing, insert a placeholder or note for the user (e.g., "<Details on X here>" or a "❓" for unknown info)
5. Review and format the page for readability, using subheadings, bullet points, and tables where appropriate

## Output Specification
A Markdown-formatted document with hierarchical headings and well-organized sections. Use `#` for the main title and `##`/`###` for subsections. Content under each heading should be paragraphs, lists, or code blocks as needed, providing a polished, ready-to-publish article.

## Hallucination Guards
- Use only the facts given or common knowledge of the tech stack – do not invent project-specific details not provided
- If a section requires information that isn't available, clearly mark it as needing input (rather than guessing)
- Use placeholders or ❓ for unknowns to signal where user input is needed

## Adaptation Note
Adjust the sections and terminology for different domains. For example, a data science document might include a "Model Overview" section instead of "API Endpoints." Align the structure with any known templates or standards of the target domain.

## Default Tech Stack
TypeScript + React + Node/Nest
