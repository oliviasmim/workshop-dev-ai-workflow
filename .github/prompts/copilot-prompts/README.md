# DDD Analysis Copilot Prompts

This directory contains a series of structured prompts designed to work with GitHub Copilot agents to analyze codebases using Domain-Driven Design (DDD) principles.

## Overview

These prompts enable systematic analysis of existing codebases to identify:
- Domain boundaries and core business logic
- Subdomains and their relationships
- Bounded contexts and their boundaries
- Potential microservices architecture
- Domain entities, value objects, and aggregates
- API design and documentation

## Prompt Sequence

1. **ddd-prompt-1**: Domain Discovery - Analyzes the codebase to identify the core domain
2. **ddd-prompt-2**: Subdomain Analysis - Breaks down the domain into logical subdomains
3. **ddd-prompt-3**: Bounded Context Identification - Defines clear boundaries within the domain
4. **ddd-prompt-4**: Microservices Design - Suggests microservices based on bounded contexts
5. **ddd-prompt-5**: Tactical DDD - Identifies entities, value objects, and domain services
6. **ddd-prompt-6**: API Design - Generates RESTful API specifications

## Usage

Each prompt can be used independently or as part of a complete DDD analysis workflow. The prompts are designed to work with GitHub Copilot's understanding of your codebase.

### Example Usage with Copilot Chat

```
@copilot Please analyze this codebase using the ddd-prompt-1 to identify the core domain.
```

## Prerequisites

- Access to GitHub Copilot Chat
- A codebase that Copilot can analyze
- Basic understanding of Domain-Driven Design concepts
