# Conditional Rendering in JSX

## Conditionals in JSX 
- You can either return JSX early or you can use `ternary operators` for conditionals in JSX.
- For example:
> 1. return <p>{age >= 18 ? "Adult" : "Minor"}</p>

> 2. return <p>{age >= 18 && "You can vote"}</p>

> 3. return <p>{username || "Guest"}</p>

## Methods to implement Conditional Rendering
- Using `if-else` block. This method is not a good way to implement because it breaks `the Do Not Reapeat Yourself` rule.
- Using `Ternary Operator`.
- Using `changing of variable` with conditons.
- Storing the result of a `conditional function` in the variable.
- For Example code see the `App.jsx` file of `Project01`.