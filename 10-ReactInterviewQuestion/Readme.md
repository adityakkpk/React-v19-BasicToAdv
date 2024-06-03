# React Interview Question

Create a file `Practice.jsx` in `Project01's src folder` and in this file we will put our interview questions and solutions.

## Question 1:
```javascript
    <p>{students.length && "No Student Found"}</p>
```
- Here we will get `0` because here `0` will be printed because && operator gives true when the both the expressions are evaluated in truthy value. And if the first expression is giving truthy values then it will checked the second expression.

- React doesnot render `false`, `null`, `NaN` or `undefined` in the DOM. These values, when used in JSX, will result in nothing being displayed.

- However `0` and `""`  are exceptions.

- **`0`** is rendered in the DOM because it is considered a valid React node. This means if `0` is the result of an expression, it will appear in your UI.

- **Empty Strings** (`""`) are also considered valid React nodes and are rendered as well.