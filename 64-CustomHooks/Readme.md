# Custom Hook 

Creating a custom hooks in React is a powerful way to encapsulate logic and ake your components cleaner and more maintainable.

1. *Prefix with use* : Custom hooks must be start with the `use`. This convention ensure that hooks are easily identifiable and adhere to the hook rules.

2. *Use Built-in Hooks* : Custom Hook should utilize React's built in hooks to leverage react's state and lifecycle features.

3. *Avoid Side Effects outside Hooks* : Side Effects should be managed within hooks using useEffect or other appropriate hooks.

4. *Keep Hooks Pure* : Hooks should be free from side effects and return values of the function that the component can use. 