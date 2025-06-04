# Swift Cart-Checkout Analysis Prompt

## Part 1: Rendering Logic & Data Structure Analysis

Analyze the Swift codebase for the Embedded cart-checkout screen. Extract the rendering logic and data usage patterns to help our React team understand how the UI is built.

### Focus Areas:

Extract the key data structures and rendering patterns for:

1. **Merchant Information Section**
2. **Product Items List**
3. **Delivery Method Selection**
4. **Address Details**
5. **Payment Method Components**
6. **Coupon/Discount System**
7. **Order Summary (Totals, Taxes, etc.)**

### For Each Section, Identify:

- The View/Component class name
- Required data keys and their structure
- Conditional rendering logic (when/why elements appear or hide)
- Error states and how they're triggered
- Loading/success/failure UI states
- Any user interactions that trigger recalculations
- Event hooks and lifecycle methods where data is processed

### Output Format:

```
## UI Rules & Data Keys

### [Section Name]
- **View**: [Class/Component name]
- **Required Data Keys**: [List of data keys used]
- **Conditional Rendering**: [Logic that determines visibility]
- **Error States**: [How errors are displayed]
- **Interactions**: [User actions that affect this section]
- **Calculation Triggers**: [What causes recalculation of values]
```

## Part 2: API Communication Analysis

Identify all backend communication related to the cart-checkout flow:

### Focus Areas:

- All endpoints used in the checkout flow
- Request payloads for state-changing operations
- Response structures and how they're consumed
- Headers and authentication mechanisms
- Error handling patterns

### For Each API Call, Document:

- Full endpoint URL and HTTP method
- Request payload structure and required fields
- Response structure and how it's processed
- Where and when the call is triggered
- Error handling approach

### Output Format:

```
## API Summary

### [METHOD] [ENDPOINT]
- **Description**: [Purpose of this API call]
- **Request Payload**: [JSON structure]
- **Response**: [JSON structure]
- **Called From**: [View/Method/File]
- **Error Handling**: [How errors are managed]
```

## Guidelines:

- Write in plain English - this is for a React team implementing the same experience
- Focus only on the cart-checkout flow
- Include code references but explain their purpose
- Note any platform-specific implementations that will need React equivalents
- Identify any SDK usage or GraphQL operations
