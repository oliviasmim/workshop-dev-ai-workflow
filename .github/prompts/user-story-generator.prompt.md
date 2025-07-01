# User Story & Acceptance Criteria Generator

## Objective
Transform product requirements or feature descriptions into comprehensive user stories with behavior-driven development (BDD) scenarios and clear acceptance criteria.

## Input Parameters
- `{{feature_description}}`: Detailed description of the feature or requirement
- `{{user_roles}}`: List of relevant user personas/roles who will interact with the feature
- `{{business_value}}`: The business goals this feature addresses
- `{{priority_level}}`: Priority designation (Critical/High/Medium/Low)
- `{{technical_constraints}}`: Any technical limitations or considerations

## Template Structure

```markdown
# User Story: [ID] - [Concise Title]

## User Story
As a [user role],
I want to [perform an action/achieve a goal],
So that [benefit/value received].

## Business Value
[Explain how this story contributes to business objectives]

## Priority
[Priority level] - [Justification for priority]

## Acceptance Criteria
1. GIVEN [initial context/state]
   WHEN [action performed]
   THEN [expected outcome]
   
2. GIVEN [another context]
   WHEN [another action]
   THEN [another outcome]
   
3. [Additional criteria as needed]

## Edge Cases and Error Scenarios
- [Description of edge case 1]
  - GIVEN [edge case context]
    WHEN [action in edge case]
    THEN [expected handling]
    
- [Description of error scenario 1]
  - GIVEN [error context]
    WHEN [action causing error]
    THEN [expected error handling]

## Technical Notes
- [Implementation considerations]
- [API endpoints needed]
- [Data requirements]

## Definition of Done
- [ ] Code implements all acceptance criteria
- [ ] Unit tests cover main scenarios
- [ ] Integration tests cover edge cases
- [ ] Documentation updated
- [ ] UX review completed
- [ ] Accessibility requirements met
- [ ] Performance benchmarks satisfied

## Dependencies
- [Dependent on story/feature X]
- [Blocking story/feature Y]

## Estimations
- Story points: [number]
- Estimated development time: [timeframe]
```

## Instructions
1. Replace all bracketed text with specific content relevant to the feature
2. Ensure each acceptance criterion follows the GIVEN-WHEN-THEN format
3. Include both happy path and error/edge case scenarios
4. Be specific and measurable in criteria - avoid subjective language
5. Keep user stories independent, negotiable, valuable, estimable, small, and testable
6. Align criteria with business requirements and user expectations
7. For frontend stories, consider adding wireframe/mockup references
8. For backend stories, include API contract expectations

## Examples
Include at least one acceptance criterion for each of:
- Input validation
- User feedback/messaging
- State transitions
- System integration points
- Error handling

## Adaptation Options
- For agile teams: Focus more on the story and acceptance criteria sections
- For BDD-focused teams: Expand the GIVEN-WHEN-THEN scenarios with more detail
- For technical stories: Add technical implementation details and architecture considerations
- For UI/UX stories: Include usability criteria and design references

