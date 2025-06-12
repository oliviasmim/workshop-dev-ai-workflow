# DDD Analysis with GitHub Copilot: Quick Start

## What This Provides

This collection of prompts transforms your existing DDD analysis notebook into a conversational workflow that works with GitHub Copilot agents. Instead of manually defining domains and bounded contexts, Copilot will analyze your actual codebase and discover these patterns for you.

## Key Benefits

- **Codebase-Aware Analysis**: Copilot examines your actual code, not hypothetical examples
- **Conversational Interface**: Natural step-by-step analysis through chat
- **Contextual Understanding**: Leverages Copilot's knowledge of your entire codebase
- **Iterative Refinement**: Easy to adjust and refine analysis based on insights
- **Documentation Generation**: Produces comprehensive DDD documentation

## Quick Start

### 1. Basic Domain Analysis
```
@copilot Please analyze this codebase using ddd-prompt-1 to identify the core business domain.
```

### 2. Full DDD Analysis Workflow
```
@copilot I want to perform a complete DDD analysis of this codebase. Let's start with ddd-prompt-1 for domain discovery, then move through all 6 prompts systematically.
```

### 3. Focused Analysis
```
@copilot I'm interested in the payment processing part of this system. Use ddd-prompt-3 to identify bounded contexts related to payments.
```

## What Each Prompt Does

| Prompt | Purpose | Output |
|--------|---------|--------|
| **ddd-prompt-1** | Domain Discovery | Core domain identification and business capabilities |
| **ddd-prompt-2** | Subdomain Analysis | Core, supporting, and generic subdomains |
| **ddd-prompt-3** | Bounded Contexts | Context boundaries and integration patterns |
| **ddd-prompt-4** | Microservices Design | Service architecture and migration strategy |
| **ddd-prompt-5** | Tactical DDD | Entities, value objects, aggregates, services |
| **ddd-prompt-6** | API Design | OpenAPI specifications with examples |

## Comparison with Original Notebook

### Original Approach
- Manual domain definition
- Hardcoded examples (Payment Gateway → Fraud Detection)
- LangChain orchestration
- Generic AI responses

### New Copilot Approach
- **Automatic domain discovery** from actual codebase
- **Real code analysis** and pattern recognition
- **Conversational refinement** through Copilot chat
- **Context-aware recommendations** based on your specific architecture

## Example Session

```bash
# Step 1: Start the analysis
@copilot Please analyze this codebase using ddd-prompt-1 to identify the core domain.

# Copilot Response: "Based on analysis of your codebase, I've identified the core domain as 'Financial Transaction Processing'..."

# Step 2: Continue the workflow
@copilot Great! Now use ddd-prompt-2 to break this down into subdomains.

# Copilot Response: "I've identified the following subdomains: Transaction Processing (core), Risk Assessment (core), Compliance Reporting (supporting)..."

# And so on...
```

## Files Created

```
copilot-prompts/
├── README.md                           # Overview and setup
├── ddd-prompt-1-domain-discovery.md    # Domain identification
├── ddd-prompt-2-subdomain-analysis.md  # Subdomain classification  
├── ddd-prompt-3-bounded-context.md     # Context boundaries
├── ddd-prompt-4-microservices-design.md # Service architecture
├── ddd-prompt-5-tactical-ddd.md        # Domain model patterns
├── ddd-prompt-6-api-design.md          # API specifications
├── workflow-guide.md                   # Step-by-step instructions
└── quick-start.md                      # This file
```

## Ready to Start?

1. Open GitHub Copilot Chat
2. Navigate to your codebase
3. Copy and paste any prompt from the prompt files
4. Let Copilot analyze your actual code!

The prompts are designed to be self-contained but work best when used in sequence, building upon previous analysis results.
