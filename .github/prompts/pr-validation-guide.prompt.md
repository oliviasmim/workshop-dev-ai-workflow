# PR Validation Guide

Before submitting your Pull Request, please verify that you've followed all our Git and code standards.

## PR Title Format
Your PR title should follow this format:
```
<type>: [JIRA-XXX] Description
```
Example: `feat: [SCRUM-123] Add user authentication`

## Branch Name
Check that your branch name follows our convention:
```
<type>/<JIRA-XXX>-<short-description>
```
Example: `feat/SCRUM-123-user-authentication`

## Commit Messages
Ensure all your commit messages follow our format:
```
<type>(<scope>): [<JIRA-XXX>] <description>
```
Example: `feat(auth): [SCRUM-123] Add login form`

## PR Content Checklist

- [ ] Used the correct PR template based on your branch type
- [ ] Filled out all required sections in the PR template
- [ ] Included the JIRA ticket ID in the PR title and description
- [ ] Added the "Closes JIRA-XXX" text to link the PR to the ticket
- [ ] Tagged appropriate reviewers
- [ ] Added necessary labels
- [ ] Provided clear context about your changes
- [ ] Described how the changes were tested
- [ ] Added before/after evidence if applicable

## Quality Verification

- [ ] Code follows our [code standards](./code-standards.mode.prompt.md)
- [ ] Passes all CI checks
- [ ] Has sufficient test coverage
- [ ] Maintains or improves accessibility
- [ ] Performance impact considered
- [ ] Documentation updated if needed
