# Design Wireframes & Rationale

## Wireframe 1: Home/Greeting Screen
**Interaction Flow:**
On page load, JavaScript immediately prompts the user for their name, displays an alert with "Karibu" message, and updates the greeting heading with the personalized name. The page shows two primary action buttons for running the estimator and toggling theme.

**JavaScript Responsibility:**
- Captures name via `prompt()` on load
- Updates `#greeting` element with `textContent`
- Logs name entry to console
- Displays welcome alert

## Wireframe 2: Estimator Input Flow
**Interaction Flow:**
When the "Run Estimator" button is clicked, JavaScript sequentially prompts the user for four inputs: days per week on campus, transport cost per trip, snacks per day, and snack price. Each prompt includes example values to guide realistic input.

**JavaScript Responsibility:**
- Triggered by click event on `#run` button
- Executes four `prompt()` calls sequentially
- Converts string inputs to numbers using `Number()`
- Validates inputs are numeric (basic type coercion)

## Wireframe 3: Summary Display
**Interaction Flow:**
After all inputs are collected, JavaScript performs calculations and displays a formatted summary in the pre-formatted text section. The summary shows weekly transport, weekly snacks, total cost, and a 10% savings suggestion with rounded amounts.

**JavaScript Responsibility:**
- Performs arithmetic operations (multiplication, addition, percentage)
- Formats output string with template literals
- Updates `#summary` element using `innerText`
- Logs all calculation values to console as an object
- Displays completion alert

## Design Decisions

### Mobile-First Layout
Simple, single-column layout ensures readability on all devices. Large touch-friendly buttons (minimum 44×44px touch target) accommodate mobile users during orientation.

### Color Scheme
Uses USIU accent color (#3a86ff) for brand consistency. Theme toggle switches between light (white/black) and dark (#111/white) modes for accessibility in different lighting conditions.

### Typography
System font stack ensures fast loading and native feel across devices. Clear hierarchy with distinct heading sizes guides user attention.

### Interaction Patterns
Sequential prompts create a guided experience for first-time users. Pre-formatted text display preserves spacing for readable cost breakdown. Buttons clearly labeled with action verbs.
