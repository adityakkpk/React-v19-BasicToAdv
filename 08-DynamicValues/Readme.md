# Testing the production Application by POSTMAN

## Dynamic Values in JSX
- You can add any variables in your JSX component using `{} syntax`. 
- For example:
    ```javascript
    function MyComponent() {
        const val = 'hey';
        return <p>{ val }</p>;
    }
    ```
- JSX allows you to write JS expression inside `curly braces {}` which includes operations, function calls and other JS expression that produce a value. For example: `return <p>This is result: { 1+2+3 }</p>;`

## Key Points
* **1. Variables**
    - You can add any JS variable in your JSX component by enclosing it in `curly braces`. The value of the variable will be inserted into the `DOM at the respective location`.

* **2. Expression**
    - JSX allows you to write JS expression inside `curly braces {}` which includes operations, function calls and other JS expression that produce a value.

* **3. Function Calls**
    - Function that return JSX, can be invoked directly within your JSX.

## Updating Project
- Added some dynamic variabls in our Project-01
- Added some dynamic expression in our Project-01