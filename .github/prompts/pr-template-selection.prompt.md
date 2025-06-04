# PR Template Selection Guide

Based on your branch name, please select the appropriate PR template:

## Branch Type to Template Mapping

- If your branch starts with `feat/` → Use the [Feature PR Template](../PULL_REQUEST_TEMPLATE/feature.md)
- If your branch starts with `fix/` → Use the [Bug Fix PR Template](../PULL_REQUEST_TEMPLATE/bug.md)
- If your branch starts with `chore/` → Use the [Chore PR Template](../PULL_REQUEST_TEMPLATE/chore.md)
- If your branch starts with `refactor/` → Use the [Refactor PR Template](../PULL_REQUEST_TEMPLATE/refactor.md)
- If your branch starts with `docs/` → Use the [Feature PR Template](../PULL_REQUEST_TEMPLATE/feature.md)
- If your branch starts with `test/` → Use the [Feature PR Template](../PULL_REQUEST_TEMPLATE/feature.md)

## How to Select a Specific Template

When creating your PR, append `?template=TYPE.md` to the URL, where TYPE is one of:
- `feature`
- `bug`
- `chore`
- `refactor`

Example: `https://github.com/your-org/your-repo/compare/main...your-branch?template=feature.md`

## Reminder

Make sure your PR follows our [Git Standards](./git-standards.prompt.md) and includes:
1. A proper title that includes the JIRA ticket ID
2. All required sections filled out
3. Appropriate labels
4. Requested reviewers

Remember that PRs should be focused on a single feature, fix, or task to make review easier.
