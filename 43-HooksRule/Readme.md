## React Hooks Rule

- Hooks let you use different React features from your components.

- It starts with `use_ _ _`. (useState, useEffect, etc.)

- It can be only be used at the top level of your component.

- Do not call Hokks inside loops, conditionals, or nested functions.

- Call hooks only fron React Functional Components or custom hooks. Do not call hooks from regular Javascript functions or in class component.

- You can create your own custom hooks by creating a function starting with `use_ _ _` ensures that React can identify it as a Hook.

- Ensure hooks are called in same order. This allows React to properly preserve the state of hooks in between re-renders.