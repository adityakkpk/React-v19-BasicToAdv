# Controlled vs Uncontrolled Components

## Controlled Components
* Controlled components in React are those components where form data is handled by the `React component state`.

    **This Means:**
    * **State management:** The value of the input field is controlled by the React state.
    * **Event handling:** Changes in the input field are handled by the React event handlers.
    * **State updates:** When the user interect with the input field, React state is updated through event handlers, and the input value reflects the current state value.


## Uncontrolled Components
*  Uncontrolled Components in React are those components where form data is handled by the `DOM itself`.

    **This Means:**
    * **Direct DOM Manipulation:** The value of the input field is controllled by the DOM. It is not declarative way right.
    * **Event Handling:** Changes are directly handled by the DOM event.
    * **Accessing Form Data:** Form data is acessed through refs of DOM traversal methods, not through React satate.