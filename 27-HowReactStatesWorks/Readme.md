# How React State Works. (BTS)

## How State Works?

- In React, state is a way to `store` and `manage` data that can change over the `lifetime` of a component. When state `changes`, React `re-renders` the componentro reflect the new state. This ensure the user interface stays in `sync` with the underlying `data`.

- In our Counter application, when we click on the button to update the count, The button calls `setState()` function which notifies React that we are trying to `update` a `state`. React then creates a `new tree` with the new state value.

- `Now how React will find that the which element to update?` 
    - React `Reconcilliation` is the process through which React `updates` the `Browser DOM`. In which `Diffing Algorithum` is used to differentiate the DOM tree for efficient updation.

- Then React will find that the element `<h1>` is different from the old tree, then react will demand ReactDOM to update its value in DOM. React will only update this DOM making it effective instead of rendering whole DOM.

* *Note* - `When React creates an new tree, it will re-run or re-render the affected components and its childrens. So in this case, It will re-run our <State /> component, it won't re-render other components outside`.

## How re-rendering works ?

- *Initial Render:* When the App component is rendered first, React renders the Parent, Child, AnotherChild and SiblingComponent.

- *State Change in ParentComponent:* Suppose there is a state change in ParentComponent. React updates the re-render ParentComponent and its all child components and anotherChild components.

- *Component Outside:* SiblingComponent is not afected by the state change in ParentComponent. Therefore, it will not ne re-rendered.