# DDD Prompt 1: Domain Discovery

## Objective
Analyze the current codebase to identify the core domain and understand the business context.

## Prompt

```
You are a Domain-Driven Design expert and solution architect. Your task is to analyze this codebase to identify the core domain.

**Instructions:**
1. Examine the codebase structure, including:
   - Project organization and modules
   - Package/namespace structure
   - Class and interface names
   - Business logic patterns
   - Database schemas (if present)
   - API endpoints and contracts
   - Configuration files
   - Documentation and comments

2. Based on your analysis, provide:
   - **Core Domain Identification**: What is the primary business domain this application serves?
   - **Domain Description**: A comprehensive description of the domain (2-3 paragraphs)
   - **Key Business Capabilities**: List the main business capabilities the system provides
   - **Domain Complexity Assessment**: Rate the domain complexity (Simple/Moderate/Complex) with justification
   - **Business Value Areas**: Identify areas where the business derives the most value

3. **Output Format:**
   ```
   ## Domain Analysis Report
   
   ### Core Domain
   [Name of the domain]
   
   ### Domain Description
   [Detailed description of the domain]
   
   ### Key Business Capabilities
   - [Capability 1]
   - [Capability 2]
   - [...]
   
   ### Domain Complexity
   **Level:** [Simple/Moderate/Complex]
   **Justification:** [Explanation]
   
   ### Business Value Areas
   - [Value area 1]
   - [Value area 2]
   - [...]
   
   ### Recommended Next Steps
   [Suggestions for subdomain analysis]
   ```

**Guidelines:**
- Focus on business concepts, not technical implementation details
- Look for ubiquitous language used in the codebase
- Identify core vs supporting vs generic subdomains
- Consider the business context and industry domain
- Pay attention to data models and business rules

Please analyze this codebase and provide the domain discovery report.
```

## Expected Output
A comprehensive domain analysis report that serves as the foundation for further DDD analysis.
