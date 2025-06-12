# DDD Prompt 4: Microservices Design

## Objective
Design microservices architecture based on the identified bounded contexts, following DDD principles and microservices best practices.

## Prompt

```
You are a solution architect and microservices expert. Your task is to design a microservices architecture based on the bounded contexts identified in the previous analysis.

**Context:**
Use the bounded contexts identified in the previous analysis: [LIST_FROM_PROMPT_3]

**Microservices Design Principles:**
- **Single Responsibility Principle (SRP)**: A microservice should do one thing well and have a single reason to change
- **Bounded Context Alignment**: Each microservice should align with one bounded context
- **Data Ownership**: Each microservice should own its data and not share databases
- **Autonomous Teams**: Microservices should enable independent team development and deployment
- **Business Capability Focus**: Services should be organized around business capabilities

**Instructions:**
1. Analyze each bounded context and determine microservice design by considering:
   - Business capability alignment
   - Data consistency requirements
   - Team ownership and development independence
   - Scalability and performance requirements
   - Integration complexity
   - Deployment and operational considerations

2. **Output Format:**
   ```
   ## Microservices Architecture Design
   
   ### Architecture Overview
   [High-level description of the proposed microservices architecture]
   
   ### Microservices Catalog
   
   #### Microservice: [Service Name 1]
   - **Bounded Context:** [Associated bounded context]
   - **Business Capability:** [Primary business capability served]
   - **Responsibilities:**
     - [Responsibility 1]
     - [Responsibility 2]
     - [...]
   - **Data Ownership:**
     - **Primary Entities:** [Entities this service owns]
     - **Database Schema:** [Suggested data storage approach]
   - **APIs:**
     - **REST Endpoints:** [Key API operations]
     - **Events Published:** [Domain events this service publishes]
     - **Events Consumed:** [Domain events this service consumes]
   - **Dependencies:**
     - **Upstream Services:** [Services this depends on]
     - **External Systems:** [External integrations]
   - **Codebase Mapping:**
     - **Current Modules:** [Existing code that would belong to this service]
     - **Migration Complexity:** [High/Medium/Low complexity to extract]
   - **Team Ownership:** [Suggested team or organizational unit]
   
   ### Service Interaction Patterns
   #### Synchronous Communication
   - **Service A → Service B:** [API calls, purpose, data exchanged]
   
   #### Asynchronous Communication
   - **Event:** [Event Name]
     - **Publisher:** [Service that publishes]
     - **Subscribers:** [Services that consume]
     - **Purpose:** [Why this event exists]
   
   ### Data Management Strategy
   - **Database per Service:** [How to achieve data independence]
   - **Data Consistency:** [Eventual consistency patterns]
   - **Shared Reference Data:** [How to handle shared data]
   
   ### Cross-Cutting Concerns
   - **Authentication/Authorization:** [Approach for security]
   - **Logging and Monitoring:** [Observability strategy]
   - **Configuration Management:** [How services get configuration]
   - **API Gateway:** [Entry point and routing strategy]
   
   ### Migration Strategy
   #### Phase 1: [Initial extraction]
   - **Services to Extract:** [List of services]
   - **Migration Approach:** [Strangler fig, big bang, etc.]
   - **Risk Assessment:** [Key risks and mitigation]
   
   #### Phase 2: [Next phase]
   [Continue with additional phases]
   
   ### Architecture Quality Assessment
   - **Service Cohesion:** [How well-focused each service is]
   - **Service Coupling:** [Dependencies between services]
   - **Data Consistency:** [How data consistency is maintained]
   - **Scalability:** [Independent scaling capabilities]
   - **Fault Tolerance:** [Resilience patterns]
   
   ### Recommendations
   - **Quick Wins:** [Easy services to extract first]
   - **Complex Extractions:** [Services requiring careful planning]
   - **Technology Considerations:** [Tech stack recommendations]
   - **Operational Readiness:** [Infrastructure and tooling needs]
   ```

**Guidelines:**
- Prefer smaller, focused services over large services
- Ensure each service can be developed and deployed independently
- Minimize data sharing between services
- Design for failure and resilience
- Consider the organizational structure (Conway's Law)
- Balance service granularity with operational complexity

Please analyze the bounded contexts and provide the microservices architecture design.
```

## Expected Output
A comprehensive microservices architecture design with clear service boundaries, responsibilities, and migration strategy.
