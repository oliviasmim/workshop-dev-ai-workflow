# Pull Request Description Generator

## Objective
Create a comprehensive yet concise pull request description that summarizes the changes and context, easing the review process.

## Context to Provide
- `{{project_description}}` – context or title of the feature/bug the PR addresses
- `{{repository_link}}` – (optional) link to the branch or diff of changes (or a summary of key changes)
- `{{additional_constraints}}` – e.g. a PR template or specific items to include (screenshots, test results, etc.)
- `{{desired_output_format}}` – default: Markdown (to allow headings, lists, and checkboxes)

## AI Steps
1. Summarize the purpose of the PR (what is being added/changed/fixed and why)
2. Itemize major changes in bullet points (e.g., "Added X...", "Refactored Y...")
3. Add any important context for reviewers: reference issue numbers (e.g., "Fixes #123"), note new dependencies or migrations, and outline how to test the changes
4. If a PR template is provided, populate each relevant section (e.g., Description, Changes, Testing, Checklist) using the information above
5. Ensure the tone is clear and professional, focusing on what and why rather than how (the code shows the how)

## Output Specification
A structured PR description in Markdown, for example:

```
## Description  
[Brief summary of the PR's purpose and why it's needed]

## Changes  
- ...

## Testing  
- ...

## Checklist  
- [x] ...  
- [ ] ...  
```

This can be adjusted to match any specific template. It should be ready to paste into the PR.

## Hallucination Guards
- Do not speculate about details not provided. Only include changes that actually occur in the diff
- If certain info isn't clear (e.g., whether docs were updated), leave it out or mark it as needing input instead of assuming
- Include issue references only if provided
- Mark unknown details with a "❓" placeholder for the user to fill in if necessary

## Adaptation Note
Tailor the format to the project's PR template or platform conventions (e.g., different section titles or formatting for GitLab vs GitHub). The key is to maintain clarity and cover all important aspects of the PR regardless of format.

## Default Tech Stack
TypeScript + React + Node/Nest
