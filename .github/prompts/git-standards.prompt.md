# Git Standards

## Branch Naming Convention

All branches should follow this naming pattern:
```
<type>/<JIRA-XXX>-<short-description>
```

Where:
- `<type>` is one of:
  - `feat`: For new features
  - `fix`: For bug fixes
  - `chore`: For maintenance tasks
  - `refactor`: For code refactoring
  - `docs`: For documentation updates
  - `test`: For adding or modifying tests
- `<JIRA-XXX>` is the JIRA ticket ID
- `<short-description>` is a brief, kebab-case description of the change

Examples:
- `feat/SCRUM-1-user-authentication`
- `fix/SCRUM-42-login-validation-error`
- `chore/SCRUM-123-update-dependencies`

## Commit Message Convention

All commit messages should follow this format:
```
<type>(<scope>): [<JIRA-XXX>] <description>
```

Where:
- `<type>` is one of:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `chore`: Routine tasks, maintenance
  - `docs`: Documentation changes
  - `style`: Formatting, missing semicolons, etc; no code change
  - `refactor`: Code refactoring
  - `test`: Adding or modifying tests
  - `perf`: Performance improvements
- `<scope>` is optional and indicates the module or component affected
- `<JIRA-XXX>` is the JIRA ticket ID
- `<description>` is a concise description of the change in present tense

Examples:
- `feat(auth): [SCRUM-1] Add user authentication API`
- `fix(login): [SCRUM-42] Fix validation on login form`
- `chore(deps): [SCRUM-123] Update dependencies to latest versions`

## Pull Request Process

1. Create a branch following the branch naming convention
2. Make your changes and commit them following the commit message convention
3. Push your branch to the remote repository
4. Create a pull request using the appropriate PR template
5. Request reviews from team members
6. Address review feedback
7. Squash commits before merging to main/master
8. Delete the branch after merging
