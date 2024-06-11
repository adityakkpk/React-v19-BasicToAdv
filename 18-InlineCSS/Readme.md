# Inline CSS

## Rules
- Inline styles in react are specified using Javascript object. Property names are written in camelCase insted of the kebab-case.
- For example:
```javascript
const styles = {
    backgroundColor : 'blue',
    fontSize: '16px',
}
```

- For the most of the numeric values, you need to specify units as a `string` (e.g., '16px'). Some properties like `zIndex`, can take `numeric` values directly.
- For example:
```javascript
const styles = {
    zIndex : 1,
    padding: '16px',
}
```

- Defining inline styles within the JSX can lead to performance issues because a new object is created on every rende. To avoid this, define styles outside of the render method or as a constant.
- For example:
```javascript
const buttonStyles = {
    backgroundColor : 'blue',
    color: 'white',
}