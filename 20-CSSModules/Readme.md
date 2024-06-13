# CSS Modules in React: Scoped and Reusable Styles 

## What is CSS Modules in React?
- Every time you import a CSS file in your react component, they are regarded as global CSS.
- CSS Modules helps you keep styles specific to the component they are used in.
- Wach module encapsulates its stules, prevents unintented style conflicts with other modules 
- `The calclass names in CSS modules are often automaticaly generated for reducing the likely hood of naming clashes`.

## Best Practices
- Name your CSS file with the `.module.css` or `.module.scss` extention.
- Import the CSS module files in your React component. Access class names as Properties of the imported style object.
- Access class names as properties of the imported style object
- Combine multiple class name using the template literals of the class library.
- Dynamically apply class names based on the component state or props.

## Notes
- When using the CSS modules, class names with hyphens can cuse issues that it cannot be accessed properly. IN CSS modules, you need to use bracket `[]` notation for class names with hyphens. - For example:
    ```javascript
    <div className={styles['card-heading']}>Name: {name}</div>
    ```