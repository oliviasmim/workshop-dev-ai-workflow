# DDD Prompt 2: Subdomain Analysis

## Objective
Break down the identified domain into logical subdomains and classify them according to DDD patterns.

## Prompt

```
You are a Domain-Driven Design expert. Based on the previous domain analysis, your task is to identify and analyze subdomains within this codebase.

**Context:**
Use the domain identified in the previous analysis: [DOMAIN_NAME_FROM_PROMPT_1]

**Instructions:**
1. Analyze the codebase to identify distinct subdomains by examining:
   - Functional modules and their responsibilities
   - Data models and their relationships
   - Business processes and workflows
   - Team ownership and organizational boundaries
   - External integrations and dependencies
   - User interfaces and user journeys

2. For each identified subdomain, classify it as:
   - **Core Subdomain**: Provides competitive advantage, core to business success
   - **Supporting Subdomain**: Important but not core, supports business operations
   - **Generic Subdomain**: Commodity functionality, could be replaced by third-party solutions

3. **Output Format:**
   ```
   ## Subdomain Analysis Report
   
   ### Core Subdomains
   #### [Subdomain Name 1]
   - **Description:** [What this subdomain does]
   - **Business Importance:** [Why it's core to the business]
   - **Key Responsibilities:** [Main functions]
   - **Codebase Evidence:** [Specific modules/classes/packages that support this]
   
   ### Supporting Subdomains
   #### [Subdomain Name 2]
   - **Description:** [What this subdomain does]
   - **Business Importance:** [How it supports the core business]
   - **Key Responsibilities:** [Main functions]
   - **Codebase Evidence:** [Specific modules/classes/packages that support this]
   
   ### Generic Subdomains
   #### [Subdomain Name 3]
   - **Description:** [What this subdomain does]
   - **Business Importance:** [Generic nature and replaceability]
   - **Key Responsibilities:** [Main functions]
   - **Codebase Evidence:** [Specific modules/classes/packages that support this]
   - **Replacement Options:** [Potential third-party alternatives]
   
   ### Subdomain Relationships
   [Describe how subdomains interact and depend on each other]
   
   ### Strategic Recommendations
   - **Investment Priority:** [Which subdomains deserve most attention]
   - **Outsourcing Candidates:** [Generic subdomains that could be externalized]
   - **Integration Points:** [Key interfaces between subdomains]
   ```

**Guidelines:**
- A subdomain should have clear boundaries and responsibilities
- Look for natural seams in the codebase where functionality can be separated
- Consider business value and competitive advantage when classifying
- Pay attention to data ownership and consistency boundaries
- Consider team structure and Conway's Law implications

Please analyze this codebase and provide the subdomain analysis report.
```

## Expected Output
A detailed breakdown of subdomains with clear classification and strategic recommendations.
