# React Fragments: Remove unwanted Nodes & Speed Up Rendering

## Why we need React Fragments?
- In react, a component can't return multiple elements without a wrapper div.
- You can do this to imitate it: Using an Array of Elements with Keys. For example `return [<p>Ram</p>, <a href=" https://github.com/ ></a>];`
- But this method is tedious, so to fix this, React 16 introduced Fragments, which allows components to `return multiple elements` without adding extra nodes to the DOM.
- For example:
```javascript
import {Fragment} from 'react';
return <Fragment>...</Fragment>
```
- Alternatively, you can use its shorthand syntax: `<>..</>`.

## Why cannot we return multiple elements in React at the same time?
- As after JSX is compiled, it is converted to normal JavaScript object. And you cannot return multiple objects at the same time.