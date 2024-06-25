# Lift state up in React

* **Lifting State Up:** It is the pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow down as props and actions to flow up.

* **Use Cases:**
    - When you have two or more components that need to share the same state, you should lift the state up to their nearest ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.

* **DEMO**
