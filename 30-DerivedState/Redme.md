# Drived State

- Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. This approach helps avoid duplication and keep the state simpler and more manageable.

Ex: const userCount = users.length;

* *Benigits of Derived State:*
- Avoid Redundancy: By defining values from existing state, you avoid storing redundent data.
- Cinsistancy: Ensure that derived values are always in sync with the underlying state and props.
- Simpicity: Reduces the complexity of state management bu minimizing the 

