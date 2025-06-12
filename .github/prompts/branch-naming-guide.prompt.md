# Branch Naming Guidelines

## Format
All branches must follow this naming pattern:
```
<type>/<JIRA-XXX>-<short-description>
```

## Types
Choose one of these types based on the work you're doing:
- `feat`: For new features
- `fix`: For bug fixes
- `chore`: For maintenance tasks
- `refactor`: For code refactoring
- `docs`: For documentation updates
- `test`: For adding or modifying tests

## JIRA ID
Always include the JIRA ticket ID (e.g., SCRUM-123). If you don't have a JIRA ticket, you cannot create a branch.
ASK FOR A TICKET FIRST!

## Short Description
- Use kebab-case (lowercase with hyphens)
- Be concise but descriptive
- Focus on what the change accomplishes

## Examples
✅ Good examples:
```
feat/SCRUM-1-user-authentication
fix/SCRUM-42-login-validation-error
chore/SCRUM-123-update-dependencies
refactor/SCRUM-89-simplify-data-processing
docs/SCRUM-45-update-installation-docs
test/SCRUM-99-add-api-tests
```

❌ Bad examples:
```
feature-login                   // No JIRA ID
SCRUM-42                        // No type or description
fix/bug                         // No JIRA ID, vague description
john/SCRUM-15-new-feature       // Incorrect type
feat/SCRUM-1_user_authentication // Using underscores instead of hyphens
feat/scrum1-login-page          // Incorrect JIRA ID format
```

## Before Creating a Branch
1. Ensure you have an assigned JIRA ticket
2. Pull the latest changes from the main branch
3. Choose the appropriate branch type for your task
4. Create your branch with the correct naming convention

## Command Line Example
```bash
git checkout main
git pull
git checkout -b feat/SCRUM-123-add-login-page
```
