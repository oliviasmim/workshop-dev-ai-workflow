# DDD Prompt 3: Bounded Context Identification

## Objective
Define bounded contexts with explicit boundaries, identifying where different domain models apply.

## Prompt

```
You are a Domain-Driven Design expert. Your task is to identify bounded contexts within this codebase based on the previously identified subdomains.

**Context:**
Use the subdomains identified in the previous analysis:
- Core Subdomains: [LIST_FROM_PROMPT_2]
- Supporting Subdomains: [LIST_FROM_PROMPT_2]
- Generic Subdomains: [LIST_FROM_PROMPT_2]

**Instructions:**
1. Analyze the codebase to identify bounded contexts by examining:
   - Domain model variations and inconsistencies
   - Data model differences for the same concepts
   - Language and terminology variations
   - Team boundaries and ownership
   - Integration patterns and data exchange
   - Database boundaries and data consistency requirements
   - Business process boundaries

2. For each bounded context, define:
   - **Clear boundaries**: What's inside vs outside
   - **Ubiquitous language**: Key terms and concepts
   - **Domain model**: Core entities and their relationships
   - **Integration needs**: How it communicates with other contexts

3. **Output Format:**
   ```
   ## Bounded Context Analysis Report
   
   ### Bounded Context Map
   [High-level overview of all bounded contexts and their relationships]
   
   ### Detailed Bounded Contexts
   
   #### Bounded Context: [Context Name 1]
   - **Purpose:** [What business capability this context serves]
   - **Subdomain Alignment:** [Which subdomain(s) this context covers]
   - **Boundaries:**
     - **Included:** [What's inside this context]
     - **Excluded:** [What's explicitly outside]
   - **Ubiquitous Language:**
     - [Term 1]: [Definition]
     - [Term 2]: [Definition]
     - [Term 3]: [Definition]
   - **Core Domain Model:**
     - **Entities:** [Key business entities]
     - **Value Objects:** [Important value objects]
     - **Aggregates:** [Aggregate boundaries]
   - **Codebase Mapping:**
     - **Modules/Packages:** [Specific code locations]
     - **Database Schemas:** [Related data structures]
     - **APIs:** [External interfaces]
   - **Integration Points:**
     - **Upstream Dependencies:** [What this context depends on]
     - **Downstream Consumers:** [What depends on this context]
     - **Integration Patterns:** [How integration happens]
   
   ### Context Relationships
   #### [Context A] ↔ [Context B]
   - **Relationship Type:** [Customer-Supplier, Partnership, Shared Kernel, etc.]
   - **Integration Mechanism:** [Events, APIs, Shared Database, etc.]
   - **Data Exchange:** [What data is shared]
   
   ### Boundary Analysis
   - **Well-Defined Boundaries:** [Contexts with clear boundaries]
   - **Boundary Issues:** [Areas where boundaries are unclear or problematic]
   - **Recommendations:** [Suggestions for improving boundary definition]
   
   ### Strategic Design Recommendations
   - **Context Consolidation Opportunities:** [Contexts that might be merged]
   - **Context Splitting Opportunities:** [Contexts that might be split]
   - **Integration Improvements:** [Better ways to handle context integration]
   ```

**Guidelines:**
- A bounded context should have a consistent domain model
- Look for areas where the same concept has different meanings
- Consider data ownership and consistency boundaries
- Pay attention to integration patterns and coupling
- Focus on business capabilities rather than technical concerns
- Consider team structure and organizational boundaries

Please analyze this codebase and provide the bounded context identification report.
```

## Expected Output
A comprehensive map of bounded contexts with clear boundaries and integration patterns.
