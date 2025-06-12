# DDD Prompt 6: API Design and Documentation

## Objective
Generate comprehensive API specifications based on the domain model analysis, following RESTful principles and OpenAPI standards.

## Prompt

```
You are an API design expert with deep knowledge of RESTful principles and OpenAPI specifications. Your task is to design comprehensive APIs based on the tactical DDD analysis.

**Context:**
Use the tactical DDD analysis from the previous step: [TACTICAL_DDD_ANALYSIS_FROM_PROMPT_5]
Target Microservice: [SERVICE_NAME]

**API Design Principles:**
- RESTful resource-based design
- HTTP verbs aligned with operations (GET, POST, PUT, PATCH, DELETE)
- Consistent naming conventions (snake_case for JSON, kebab-case for URLs)
- Proper HTTP status codes
- Comprehensive error handling
- API versioning strategy
- Security considerations

**Instructions:**
1. Analyze the domain model (entities, aggregates, value objects) to design RESTful APIs
2. Create comprehensive OpenAPI 3.0 specification
3. Include realistic examples using faker-style data generation
4. Design proper error responses and status codes

**Output Format:**
```yaml
## OpenAPI Specification for [Microservice Name]

openapi: 3.0.3
info:
  title: [Microservice Name] API
  description: |
    [Detailed description of the API and its business purpose]
    
    This API provides access to [business capability] functionality including:
    - [Key capability 1]
    - [Key capability 2]
    - [Key capability 3]
  version: 1.0.0
  contact:
    name: [Team Name]
    email: [team-email@domain.com]
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT

servers:
  - url: https://api.domain.com/v1
    description: Production server
  - url: https://staging-api.domain.com/v1
    description: Staging server
  - url: http://localhost:8080/v1
    description: Development server

paths:
  # For each Aggregate Root, create resource endpoints
  /[resource-name]:
    get:
      summary: [Summary of operation]
      description: |
        [Detailed description of what this operation does]
        
        Business Rules:
        - [Business rule 1]
        - [Business rule 2]
      tags:
        - [Resource Tag]
      parameters:
        - name: page
          in: query
          description: Page number for pagination
          required: false
          schema:
            type: integer
            minimum: 1
            default: 1
        - name: limit
          in: query
          description: Number of items per page
          required: false
          schema:
            type: integer
            minimum: 1
            maximum: 100
            default: 20
        - name: [filter_parameter]
          in: query
          description: [Filter description]
          required: false
          schema:
            type: string
      responses:
        '200':
          description: [Success description]
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/[ResourceName]'
                  pagination:
                    $ref: '#/components/schemas/PaginationInfo'
              examples:
                success_response:
                  summary: Successful response
                  value:
                    data:
                      - [realistic example data]
                    pagination:
                      page: 1
                      limit: 20
                      total_pages: 5
                      total_items: 100
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '500':
          $ref: '#/components/responses/InternalServerError'
    post:
      summary: [Create operation summary]
      description: |
        [Detailed description]
        
        Business Rules:
        - [Business rule 1]
        - [Business rule 2]
      tags:
        - [Resource Tag]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/[ResourceName]Create'
            examples:
              create_example:
                summary: Create request example
                value:
                  [realistic example data]
      responses:
        '201':
          description: [Resource created successfully]
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/[ResourceName]'
              examples:
                created_response:
                  summary: Created resource
                  value:
                    [realistic example data with ID]
        '400':
          $ref: '#/components/responses/BadRequest'
        '409':
          $ref: '#/components/responses/Conflict'

  /[resource-name]/{id}:
    get:
      summary: [Get single resource]
      description: [Description]
      tags:
        - [Resource Tag]
      parameters:
        - name: id
          in: path
          required: true
          description: [Resource identifier]
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: [Success]
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/[ResourceName]'
        '404':
          $ref: '#/components/responses/NotFound'
    put:
      # Full update operation
    patch:
      # Partial update operation
    delete:
      # Delete operation

components:
  schemas:
    # Define schemas based on domain entities and value objects
    [EntityName]:
      type: object
      description: [Entity description based on domain analysis]
      required:
        - [required_field_1]
        - [required_field_2]
      properties:
        id:
          type: string
          format: uuid
          description: Unique identifier
          example: "123e4567-e89b-12d3-a456-426614174000"
        [attribute_name]:
          type: [type]
          description: [Description from domain model]
          example: [realistic example]
        created_at:
          type: string
          format: date-time
          description: Resource creation timestamp
          example: "2023-12-07T10:30:00Z"
        updated_at:
          type: string
          format: date-time
          description: Last update timestamp
          example: "2023-12-07T10:30:00Z"

    [ValueObjectName]:
      type: object
      description: [Value object description]
      required:
        - [required_field]
      properties:
        [attribute_name]:
          type: [type]
          description: [Description]
          example: [example]

    # Common schemas
    PaginationInfo:
      type: object
      properties:
        page:
          type: integer
          description: Current page number
        limit:
          type: integer
          description: Items per page
        total_pages:
          type: integer
          description: Total number of pages
        total_items:
          type: integer
          description: Total number of items

    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: string
          description: Error code
        message:
          type: string
          description: Error message
        details:
          type: array
          items:
            type: object
            properties:
              field:
                type: string
              message:
                type: string

  responses:
    BadRequest:
      description: Bad request
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'
          examples:
            validation_error:
              summary: Validation error
              value:
                code: "VALIDATION_ERROR"
                message: "Request validation failed"
                details:
                  - field: "email"
                    message: "Invalid email format"

    Unauthorized:
      description: Unauthorized access
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    NotFound:
      description: Resource not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    Conflict:
      description: Conflict with existing resource
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    InternalServerError:
      description: Internal server error
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - BearerAuth: []

tags:
  - name: [Resource Tag 1]
    description: [Description of resource group]
```

**Additional Analysis:**

```
## API Design Analysis

### Resource Design Decisions
- **[Resource 1]**: [Why this is modeled as a resource]
- **[Resource 2]**: [Design rationale]

### Business Rule Implementation
- **[Rule 1]**: [How this business rule is enforced in the API]
- **[Rule 2]**: [Implementation approach]

### Error Handling Strategy
- **Validation Errors**: [How validation errors are handled]
- **Business Rule Violations**: [How business constraints are communicated]
- **System Errors**: [How technical errors are handled]

### Performance Considerations
- **Pagination**: [Strategy for large datasets]
- **Filtering**: [Available filter options]
- **Caching**: [Caching headers and strategies]

### Security Considerations
- **Authentication**: [How users are authenticated]
- **Authorization**: [How permissions are enforced]
- **Data Protection**: [Sensitive data handling]

### Evolution Strategy
- **Versioning**: [How API versions are managed]
- **Backward Compatibility**: [Compatibility guarantees]
- **Deprecation Process**: [How old versions are sunset]
```

**Guidelines:**
- Use domain language in API naming and documentation
- Ensure operations align with business capabilities
- Include comprehensive examples with realistic data
- Design for both current and future needs
- Consider API consumer experience
- Follow REST maturity model principles
- Include proper HTTP status codes for all scenarios

Please analyze the domain model and generate the comprehensive API specification.
```

## Expected Output
A complete OpenAPI 3.0 specification with comprehensive documentation, examples, and design analysis.
