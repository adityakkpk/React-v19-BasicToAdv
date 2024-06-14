# Styled Components in React JS for Clean and Dynamic UI

## **Installation of Styled-Components**
- Using the `bun i styled-components` command you can install it.

## Usages 
- 1. *Using Template literals*
    -   ```javascript
        const Button = styled.button`color:gray;`;
        ```
- 2. *Using Style Object*
    - ```javascript
        consr Button = styled.button({ color:gray,});
      ```  
- We can pass a function within the template literals to dynamically set CSS properties based on the props and states.