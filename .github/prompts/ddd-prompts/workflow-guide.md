# DDD Copilot Workflow Guide

## Overview
This guide provides a step-by-step workflow for using the DDD analysis prompts with GitHub Copilot to analyze any codebase using Domain-Driven Design principles.

## Complete Workflow

### Step 1: Domain Discovery
Start by understanding the core business domain:

```
@copilot I want to analyze this codebase using Domain-Driven Design principles. Please start with ddd-prompt-1 to identify the core domain. Examine the codebase structure, business logic, and identify the primary business domain this application serves.
```

**Expected Outcome:** Domain analysis report with core domain identification and business capabilities.

### Step 2: Subdomain Analysis
Break down the domain into logical subdomains:

```
@copilot Now that we've identified the core domain as [DOMAIN_FROM_STEP_1], please use ddd-prompt-2 to analyze and classify the subdomains. Identify core, supporting, and generic subdomains within this codebase.
```

**Expected Outcome:** Classified list of subdomains with strategic recommendations.

### Step 3: Bounded Context Identification
Define clear boundaries and domain models:

```
@copilot Based on the subdomains identified ([LIST_SUBDOMAINS]), please use ddd-prompt-3 to identify bounded contexts. Look for areas where domain models differ and define explicit boundaries.
```

**Expected Outcome:** Bounded context map with integration patterns and ubiquitous language.

### Step 4: Microservices Design
Design microservices architecture:

```
@copilot Using the bounded contexts from the previous analysis ([LIST_CONTEXTS]), please apply ddd-prompt-4 to design a microservices architecture. Focus on service boundaries, responsibilities, and integration patterns.
```

**Expected Outcome:** Complete microservices architecture with migration strategy.

### Step 5: Tactical DDD Analysis
Analyze domain model patterns for each service:

```
@copilot For the [SERVICE_NAME] microservice identified in the previous step, please use ddd-prompt-5 to perform tactical DDD analysis. Identify entities, value objects, aggregates, and domain services.
```

**Expected Outcome:** Detailed domain model with tactical patterns and refactoring recommendations.

*Repeat Step 5 for each microservice as needed.*

### Step 6: API Design
Generate comprehensive API specifications:

```
@copilot Based on the tactical DDD analysis for [SERVICE_NAME], please use ddd-prompt-6 to design comprehensive RESTful APIs. Generate OpenAPI specifications with realistic examples.
```

**Expected Outcome:** Complete OpenAPI 3.0 specification with documentation and examples.

*Repeat Step 6 for each microservice as needed.*

## Tips for Effective Use

### 1. Iterative Analysis
- Don't try to analyze everything at once
- Start with one subdomain or service and iterate
- Use insights from each step to refine previous analyses

### 2. Context Preservation
- Reference outputs from previous steps in subsequent prompts
- Keep track of key decisions and insights
- Build upon previous analyses rather than starting fresh

### 3. Codebase-Specific Adaptations
- Adjust prompts based on your technology stack
- Include specific framework or library contexts when relevant
- Reference existing patterns and conventions in your codebase

### 4. Collaborative Analysis
- Share outputs with domain experts for validation
- Use the analysis as a starting point for team discussions
- Iterate based on business stakeholder feedback

## Example Complete Session

Here's an example of how a complete DDD analysis session might look:

```
# Session 1: Initial Domain Analysis
@copilot I want to analyze this e-commerce codebase using DDD. Please start with ddd-prompt-1 to identify the core domain.

# Session 2: Subdomain Breakdown  
@copilot The core domain is "E-commerce Platform". Now use ddd-prompt-2 to identify subdomains like order management, payment processing, inventory, etc.

# Session 3: Context Boundaries
@copilot Based on subdomains: Order Management (core), Payment Processing (core), Inventory Management (supporting), User Management (supporting), Notifications (generic) - use ddd-prompt-3 to define bounded contexts.

# Session 4: Service Design
@copilot With bounded contexts identified, use ddd-prompt-4 to design microservices architecture.

# Session 5: Detailed Analysis
@copilot For the Order Management service, use ddd-prompt-5 for tactical DDD analysis.

# Session 6: API Specification
@copilot Based on the Order Management domain model, use ddd-prompt-6 to generate OpenAPI specification.
```

## Output Organization

### Recommended File Structure
```
ddd-analysis/
├── 01-domain-discovery.md
├── 02-subdomain-analysis.md
├── 03-bounded-contexts.md
├── 04-microservices-design.md
├── 05-tactical-analysis/
│   ├── order-service.md
│   ├── payment-service.md
│   └── inventory-service.md
└── 06-api-specifications/
    ├── order-service-api.yaml
    ├── payment-service-api.yaml
    └── inventory-service-api.yaml
```

### Documentation Best Practices
- Save each analysis step as a separate document
- Use consistent naming conventions
- Include analysis date and codebase version
- Reference specific code locations when possible
- Keep business context and technical details separated

## Troubleshooting

### Common Issues and Solutions

**Issue:** Copilot provides generic responses not specific to your codebase
**Solution:** Reference specific files, classes, or modules in your prompts

**Issue:** Analysis seems disconnected between steps
**Solution:** Always reference previous outputs and maintain context across sessions

**Issue:** Too much detail in a single response
**Solution:** Break down analysis into smaller, focused queries

**Issue:** Missing business context
**Solution:** Include domain expert knowledge and business documentation in your prompts

## Next Steps

After completing the DDD analysis:

1. **Validate with Domain Experts:** Review findings with business stakeholders
2. **Prioritize Implementation:** Use strategic recommendations to plan refactoring
3. **Create Migration Plan:** Develop step-by-step implementation strategy
4. **Monitor and Iterate:** Continuously refine the domain model as you learn more

Remember: DDD is an iterative process. Use these prompts as starting points for ongoing domain exploration and refinement.
