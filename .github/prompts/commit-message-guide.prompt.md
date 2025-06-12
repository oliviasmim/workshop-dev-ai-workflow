# Commit Message Guidelines

## Format
All commit messages must follow this format:
```
<type>(<scope>): [<JIRA-XXX>] <description>
```

## Types
Choose one of these types:
- `feat`: A new feature
- `fix`: A bug fix
- `chore`: Routine tasks, maintenance
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc (no code change)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `perf`: Performance improvements

## Scope (Optional)
The scope indicates the module or component affected, such as:
- `auth`
- `api`
- `ui`
- `deps`
- etc.

## JIRA ID
Always include the JIRA ticket ID in square brackets.
if you don't have a JIRA ticket, you cannot commit.
ASK FOR A TICKET FIRST IF THE USER DON'T PROVIDE.

## Description
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Do not end with a period
- Keep it concise (under 72 characters)

## Examples
✅ Good examples:
```
feat(auth): [SCRUM-1] Add user authentication API
fix(login): [SCRUM-42] Fix validation on login form
chore(deps): [SCRUM-123] Update dependencies to latest versions
docs(readme): [SCRUM-45] Update installation instructions
style(component): [SCRUM-67] Format code according to style guide
refactor(utils): [SCRUM-89] Simplify data processing logic
test(api): [SCRUM-99] Add tests for edge cases
perf(rendering): [SCRUM-210] Optimize list rendering performance
```

❌ Bad examples:
```
fixed bug                      // No type, scope, JIRA ID, or clear description
[SCRUM-42] updated some stuff  // No type or clear description
feat: did things               // No JIRA ID or clear description
```

## Pro Tip
Consider using a Git commit template or a tool like Commitizen to help format your commit messages correctly.
