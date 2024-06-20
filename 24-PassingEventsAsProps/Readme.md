# Passing Events as a Prop in React

* Passing event handlers as props in React.js is a common pattern used to allow child components to communicate with parent components. This patter is useful in various situations, including:
    - *Form Handling* : Passing event handlers like `onChange` or `onSubmit` to form components allows the child components to upload the form data and notify the parent component of changes.
    - *User Interection* : Event handlers like `onclick` can be passsed to interective elemetns (e.g. button, link) to reigger specific action in the parent component, such as opening a modal or navigating to a different page.
    - *State Management*: Event handlers can be used to update state in the parent component which can then be passed down to child components as props to reflect the updated state.
    - *Callback Functions*: Event handlers can be used as callback functions to handle asynchronous operations or to update state based on the result of an operation. 