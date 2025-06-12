# Coding Standards Compliance Auditor

## Objective
Review code (in a commit, PR, or snippet) for adherence to specified coding standards/style guidelines and list any violations or suggested improvements.

## Context to Provide
- `{{coding_standards}}` – the standards to check (e.g., component collocation, kebab-case file naming, minimal useEffect usage, `.spec.tsx` test files, Airbnb style rules)
- `{{repository_link}}` – link to or excerpt of the code to audit
- `{{project_description}}` – (optional) context about the project (to understand any intentional deviations)
- `{{desired_output_format}}` – e.g. Markdown (to format the report with lists or checkboxes)
- `{{additional_constraints}}` – e.g. specific files to focus on, or severity levels for findings

## AI Steps
1. Parse the provided code and the list of `{{coding_standards}}`
2. Check each rule against the code and identify any non-compliance (e.g., improper naming, file not following structure, etc.)
3. For each issue, note the file (and line if possible) and a brief explanation of the violation and what the standard expects
4. Group findings by category (e.g., "Naming", "React Best Practices", "Testing") for clarity
5. If no issues are found, state that the code fully complies. If issues exist, optionally suggest how to fix each violation

## Output Specification
A structured compliance report. For example:

- **Naming:** ❌ `HeaderComponent.tsx` – File name should be kebab-case (`header-component.tsx`)
- **Testing:** ✔️ All test files are correctly suffixed with `.spec.tsx`

Use symbols like ✔️ (compliant) and ❌ (violation) or a checklist. Each item should clearly state the rule and whether the code passes or fails it.

## Hallucination Guards
- Don't invent or enforce rules that aren't provided
- If parts of the code or rules are missing, note the limitation instead of guessing
- Avoid nitpicking beyond the given standards
- If a rule is unclear or subjective, flag the finding with a "❓" or as a suggestion rather than a definite violation

## Adaptation Note
Adjust the rules and examples for other languages or style guides (e.g., snake_case for Python, Google style for Java). The auditing approach remains the same: iterate through each rule, compare against code, and report compliance results.

## Default Tech Stack
TypeScript + React + Node/Nest
