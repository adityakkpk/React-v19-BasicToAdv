# useReducer() Hook

### Syntax 
```
const [state, dispatch] = useReducer(reducer, initialScale);
```

* It returns an array containing the current state and a dispatcher function.

* `Dispatch function` is used to send actions to the reducer, which in turn updates the state based on the action's type and any associated data (payload).

* `Reducer Function :` A function that takes the current state and an action as a arguments, and returns a new state.

* `Initial State :` The initial state value.
