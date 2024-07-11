# useState() Hook in React

- The useState() Hook in React is a fundamental hook in React that allows you to add state management to your functional components. It lets you store and update values that canges over time, enabling dynamic and interactive user interface.

* **Syntax:**
    ```javascript
    const [count, setCouunt] = useState(0);
    ```

* React baches all setStates() inside a event handler and run them at the same time. So, when we access the value immediately after setting a state, then we get the previous state value because of its async nature.