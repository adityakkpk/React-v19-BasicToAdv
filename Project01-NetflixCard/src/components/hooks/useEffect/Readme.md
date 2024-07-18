# useState Hook

The `useEffect` hook in React is used for handling side effects in functional components.

## **Syntax**

    ```javascript
    useEffect(() => {
        // Your side effect code

        return () => {
            //Cleanup code [optional]
        }
    }, [dependencies])

    ```
## **Uses:**
**1. Initial Rendering:** When the component mounts, useEffect can run its effect function to perform operations like data fetching.

**2. Dependencies:** The second argument, an `array of dependencies`, which determines when the effect should re-run. if any value in this array changes, the effect will be re-run.

**3. Cleanup:** It can return cleanup function to cleanup the effect, such as unsubscribing from an event or clearing the timer.

### **What is this 'side effect'?**
- A side effect is any operation that `affects something outside the scope of a function`. 
- In React, side effects are managed using hooks like useEffect to ensure they are handled in a controlled and predictable manner. 
- This includes tasks like fetching data, subscribing to etc..

### *Pure Function:*
    - In React, functions are pure, meaning that they return the same output for the same input without causing any side effect.