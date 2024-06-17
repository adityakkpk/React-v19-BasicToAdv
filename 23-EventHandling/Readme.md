# Event Handling in React

## Event Handling
- Event handling in React is the process of capturing and responding to user interactions, such as clicks, keystrokes, od form submissions, within a react application.
- Event handling in React follows a similar pattern to standard JS event handling but with some key differences, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers.

## What is SyntheticBaseEvent in React?
- When you handle events in react, like clicking on a button or typing in an input box, `React wraps the native browser even in something called a SyntheticEvent`. 
- This SyntheticEvent is a wrapper around the browser's native event, maki sure that events behave consistently across different browser implementations.

## Some widely used events:

1. **onClick**  : Triggered when the user clicks
2. **onChange** : Triggered when the value of an input element changes
3. **onSubmit** : Triggered when a form is submitted 
4. **onMouseEvent** : Triggered when a mouse pointer enters an element
5. **onMouseLeave** : Triggered when a mouse pointer leaves an element
6. **onKeyDown**    : Triggered when a key is pressed down
7. **onKeyUp**  : Triggered when a key is released 
8. **onFocus**  : Triggered when a element is focused
9. **onBlur**  : Triggered when the element loses focus
10. **onInput** : Trigger when the value of an input element is changed.

## Event Naming Conventions
- *CamelCase*: Event name in JSX should be written in camelCase. For example: onClick, onChange
- `Prefix with 'on'` : Event handlers should be prefixed with "on".

## Function Naming Conventions
- `Prefix with 'handle'` : It is a common to prefix event handlers functions with "handle" to clearly indicate their purpose.
- `Descriptive Names` : Function names should be descriptive and reflect what the function does. For example: handleFormSubmit, handleSubmit.