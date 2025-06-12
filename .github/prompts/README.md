# 🔧 AI-SDLC Prompt Toolkit

This directory contains a comprehensive collection of AI prompt templates designed to enhance every phase of the Software Development Life Cycle (SDLC). Each prompt follows a structured format with configurable parameters, clear instructions, and hallucination guards.

## 📂 Prompt Categories

### 1. 🎯 AI-Assisted Planning & Design
- [`user-story-generator.prompt.md`](./user-story-generator.prompt.md) - Transform high-level descriptions into structured user stories with acceptance criteria
- [`feature-task-breakdown.prompt.md`](./feature-task-breakdown.prompt.md) - Decompose complex features into manageable development tasks
- [`system-architecture-blueprint.prompt.md`](./system-architecture-blueprint.prompt.md) - Generate high-level system architecture proposals

### 2. 💻 AI-Augmented Coding & Code Review
- [`feature-implementation-generator.prompt.md`](./feature-implementation-generator.prompt.md) - Generate clean, functional code following best practices
- [`code-review-assistant.prompt.md`](./code-review-assistant.prompt.md) - Analyze code for bugs, smells, and standard deviations
- [`code-refactoring-advisor.prompt.md`](./code-refactoring-advisor.prompt.md) - Improve code quality through intelligent refactoring

### 3. 🧪 AI-Powered Testing & QA
- [`test-case-suite-generator.prompt.md`](./test-case-suite-generator.prompt.md) - Create comprehensive test suites with positive, negative, and edge cases
- [`e2e-test-script-generator.prompt.md`](./e2e-test-script-generator.prompt.md) - Generate automated end-to-end test scripts
- [`qa-risk-coverage-analyzer.prompt.md`](./qa-risk-coverage-analyzer.prompt.md) - Evaluate testing strategy for risks and coverage gaps

### 4. 📚 AI-Assisted Documentation & Knowledge Management
- [`code-documentation-generator.prompt.md`](./code-documentation-generator.prompt.md) - Add clear documentation comments to code
- [`technical-documentation-generator.prompt.md`](./technical-documentation-generator.prompt.md) - Create structured technical documentation pages
- [`project-knowledge-qa-assistant.prompt.md`](./project-knowledge-qa-assistant.prompt.md) - Answer technical questions with evidence-backed responses

### 5. 🔀 AI-Git Interaction
- [`commit-message-generator.prompt.md`](./commit-message-generator.prompt.md) - Generate clear, informative commit messages
- [`pull-request-description-generator.prompt.md`](./pull-request-description-generator.prompt.md) - Create comprehensive PR descriptions
- [`coding-standards-compliance-auditor.prompt.md`](./coding-standards-compliance-auditor.prompt.md) - Audit code for standards compliance

## 🚀 How to Use These Prompts

### Basic Usage
1. Choose the appropriate prompt for your task
2. Replace the `{{parameter}}` placeholders with your specific context
3. Provide the prompt to your AI assistant
4. Review and refine the output as needed

### Parameter Template
Each prompt includes these common parameters:
- `{{project_description}}` - Context about your project/feature
- `{{tech_stack}}` - Your technology stack (default: TypeScript + React + Node/Nest)
- `{{coding_standards}}` - Your coding standards and style guides
- `{{repository_link}}` - Link to relevant code or documentation
- `{{desired_output_format}}` - Output format preference (usually Markdown)
- `{{additional_constraints}}` - Any specific requirements or limitations

### Example Usage
```markdown
Replace: {{project_description}}
With: "E-commerce checkout flow with payment processing and order confirmation"

Replace: {{tech_stack}}
With: "Next.js 14, TypeScript, Tailwind CSS, Stripe API"
```

## 🎯 Default Tech Stack
All prompts are optimized for:
- **Frontend:** React with TypeScript
- **Backend:** Node.js with NestJS
- **Testing:** Playwright for E2E, Jest for unit tests
- **Style:** Airbnb ESLint rules

## 🛡️ Built-in Safety Features
Each prompt includes:
- **Hallucination Guards** - Prevent AI from making assumptions or inventing details
- **Validation Steps** - Ensure output quality and accuracy
- **Adaptation Notes** - Guidelines for customizing to different tech stacks
- **Clear Output Specs** - Defined format and structure expectations

## 📝 Prompt Structure
Every prompt follows this consistent structure:
1. **Objective** - Clear goal statement
2. **Context to Provide** - Required input parameters
3. **AI Steps** - Step-by-step process for the AI to follow
4. **Output Specification** - Expected format and content
5. **Hallucination Guards** - Safety measures and validation rules
6. **Adaptation Note** - Customization guidance
7. **Default Tech Stack** - Technology assumptions

## 🔧 Customization
To adapt these prompts for your specific needs:
1. Update the `{{tech_stack}}` parameter to match your technologies
2. Modify `{{coding_standards}}` to reflect your team's conventions
3. Adjust output formats as needed for your workflow
4. Add project-specific constraints in `{{additional_constraints}}`

## 📋 Legacy Prompts
This directory also contains existing prompts:
- `branch-naming-guide.prompt.md`
- `code-standards.mode.prompt.md`
- `commit-message-guide.prompt.md`
- `git-standards.prompt.md`
- `pr-template-selection.prompt.md`
- `slack-pr-review-automation.prompt.md`

## 🤝 Contributing
When adding new prompts:
1. Follow the established structure template
2. Include comprehensive hallucination guards
3. Provide clear adaptation notes
4. Test with multiple scenarios
5. Update this README with the new prompt

---

*These prompts are designed to work with any AI assistant capable of following structured instructions and handling contextual parameters.*
