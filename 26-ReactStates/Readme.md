# React States: What is useState Hook & Why we need it in React

## What is State in React ?

- In React, state refers to an object that holds data or information about the component. 
- State is managed within a component (just like variables declared in a fuction). 
- However, unlike regular variables, when state changes, React re-renders the component to reflect these changes, keeping the user interface in sync with the data.
- State is a dynamic and mutable, means it can changed over time in response to the user action, server response or other events.

## Why
1. *Dynamic UI Updation*
2. *Interactivity*
3. *Data Management*
4. *Component Communication*

## Uses
- When we use a normal variable, when the value of the variable changes, the react does not re-renders the components themselves. And the value of the variable does not reflect on the component even after the value of the variable is changed. This leads to performance issues.
- So to tackel this performance issue, we need a hook.
- To tackel this situation we will use this `useState` hook.

## Hook 
- The functions which starts with `use` is called hook.
- This is a special function which has some features provided by React.js.

## useState hook
* Syntax:
    - ```javascript
        const [varName, setterName] = useState(initialState);
      ```