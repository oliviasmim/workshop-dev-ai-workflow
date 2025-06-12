# DDD Prompt 5: Tactical DDD Analysis

## Objective
Analyze the domain model using tactical DDD patterns to identify entities, value objects, aggregates, domain services, and repositories.

## Prompt

```
You are a Domain-Driven Design expert specializing in tactical patterns. Your task is to analyze the codebase and identify tactical DDD patterns within each microservice or bounded context.

**Context:**
Use the microservices design from the previous analysis: [LIST_FROM_PROMPT_4]
Focus on one microservice at a time for detailed tactical analysis.

**Target Microservice:** [SERVICE_NAME_TO_ANALYZE]

**Instructions:**
1. Analyze the codebase for this microservice to identify tactical DDD patterns:
   - **Entities**: Objects with identity that persist over time
   - **Value Objects**: Immutable objects defined by their attributes
   - **Aggregates**: Consistency boundaries that group related entities
   - **Domain Services**: Operations that don't naturally belong to entities or value objects
   - **Repositories**: Abstractions for data access
   - **Domain Events**: Significant business events
   - **Factories**: Complex object creation logic

2. **Output Format:**
   ```
   ## Tactical DDD Analysis: [Microservice Name]
   
   ### Domain Model Overview
   [High-level description of the domain model for this service]
   
   ### Entities
   
   #### Entity: [Entity Name 1]
   - **Identity:** [How this entity is uniquely identified]
   - **Lifecycle:** [Creation, modification, deletion patterns]
   - **Attributes:**
     - [attribute_name]: [type] - [description]
     - [attribute_name]: [type] - [description]
   - **Behaviors:**
     - [method_name()]: [description of business operation]
     - [method_name()]: [description of business operation]
   - **Business Rules:**
     - [Rule 1]: [Description]
     - [Rule 2]: [Description]
   - **Current Implementation:** [Where this exists in the codebase]
   - **Improvements Needed:** [Suggestions for better domain modeling]
   
   ### Value Objects
   
   #### Value Object: [Value Object Name 1]
   - **Purpose:** [What this value object represents]
   - **Attributes:**
     - [attribute_name]: [type] - [description]
   - **Validation Rules:**
     - [Rule 1]: [Validation logic]
   - **Behaviors:**
     - [method_name()]: [description]
   - **Immutability:** [How immutability is ensured]
   - **Current Implementation:** [Where this exists in the codebase]
   
   ### Aggregates
   
   #### Aggregate: [Aggregate Name 1]
   - **Aggregate Root:** [Which entity serves as the root]
   - **Consistency Boundary:** [What invariants this aggregate protects]
   - **Entities Included:**
     - [Entity 1]: [Role in aggregate]
     - [Entity 2]: [Role in aggregate]
   - **Value Objects Included:**
     - [Value Object 1]: [Role in aggregate]
   - **Business Invariants:**
     - [Invariant 1]: [Description]
     - [Invariant 2]: [Description]
   - **Size Consideration:** [Is the aggregate appropriately sized?]
   - **Current Implementation:** [How this is currently modeled]
   
   ### Domain Services
   
   #### Domain Service: [Service Name 1]
   - **Purpose:** [What business operation this service performs]
   - **Operations:**
     - [operation_name()]: [description and parameters]
   - **Stateless Nature:** [Why this is a service vs entity method]
   - **Dependencies:** [What this service depends on]
   - **Current Implementation:** [Where this exists in the codebase]
   
   ### Repositories
   
   #### Repository: [Repository Name 1]
   - **Aggregate Served:** [Which aggregate this repository manages]
   - **Interface:**
     - [method_name()]: [description]
     - [method_name()]: [description]
   - **Query Patterns:** [Common query needs]
   - **Persistence Strategy:** [How data is stored]
   - **Current Implementation:** [Existing data access patterns]
   
   ### Domain Events
   
   #### Domain Event: [Event Name 1]
   - **Trigger:** [What business action causes this event]
   - **Data Payload:**
     - [field_name]: [type] - [description]
   - **Consumers:** [Who handles this event]
   - **Business Significance:** [Why this event matters]
   - **Current Implementation:** [How events are currently handled]
   
   ### Factories
   
   #### Factory: [Factory Name 1]
   - **Purpose:** [What complex objects this factory creates]
   - **Creation Logic:** [Complex rules for object creation]
   - **Input Parameters:** [What's needed to create the object]
   - **Current Implementation:** [How object creation is currently handled]
   
   ### Anti-Patterns Identified
   - **Anemic Domain Model:** [Places where business logic is outside entities]
   - **Primitive Obsession:** [Where value objects should be used instead of primitives]
   - **Large Aggregates:** [Aggregates that might be too big]
   - **Missing Domain Services:** [Business operations not properly encapsulated]
   
   ### Refactoring Recommendations
   1. **High Priority:**
      - [Recommendation 1]: [Why and how to improve]
   2. **Medium Priority:**
      - [Recommendation 2]: [Why and how to improve]
   3. **Low Priority:**
      - [Recommendation 3]: [Why and how to improve]
   
   ### Code Quality Assessment
   - **Domain Logic Encapsulation:** [How well business rules are encapsulated]
   - **Testability:** [How easy it is to test domain logic]
   - **Ubiquitous Language:** [How well code reflects domain language]
   - **Separation of Concerns:** [How well different layers are separated]
   ```

**Guidelines:**
- Focus on business concepts and behaviors, not technical concerns
- Look for rich domain models with behavior, not just data structures
- Identify natural aggregation boundaries based on business invariants
- Consider the ubiquitous language used in the codebase
- Pay attention to data consistency requirements
- Look for missing abstractions and opportunities for value objects

Please analyze the specified microservice and provide the tactical DDD analysis.
```

## Expected Output
A detailed tactical DDD analysis with concrete domain model patterns and refactoring recommendations.
