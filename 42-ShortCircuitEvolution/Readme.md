# Short Circuit Evalution

- It is a technique used in JS where expressions are evaluated from left to right.

- In logical operations, evaluation stops as soon as the result is determined.

- This is often used in React to conditionally render components or execute code baed on the truthiness of certain conditions.

### Rules of Shoer circuit Evolution

- Short circuit evalution involve `logical operators (&&, ||, ??)` and how they evalute expression based on the truthiness of their operands.

### Logical OR (`||`)

* **Syntax:** exp1 || exp2

* **Rule:** if the exp1 is `truthy`, return the exp1. Otherwise, return the exp2.

* Example: 
    ```javascript
    const result1 = false || "Hello"; // "Hello" 
    const result2 = true || "World"; // true
    ```
    
### Logical AND (`&&`)

* **Syntax:** exp1 && exp2

* **Rule:** if the exp1 is `falsy`, return the exp1. Otherwise, return the exp2.

* Example: 
    ```javascript
    const result1 = false && "Hello"; // false
    const result2 = true && "World"; // "World"
    ```

### Nullish Coalescing (`??`)

* **Syntax:** exp1 ?? exp2

* **Rule:** if the exp1 is not `null` or `undefined`, return the exp1. Otherwise, return the exp2

* Example: 
    ```javascript
    const result1 = null ?? "Hello"; // "Hello"
    const result2 = undefined && "World"; // "World"
    const result3 = '"' ?? "Fallback" // "
    ```