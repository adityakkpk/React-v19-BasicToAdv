# Components

## What is component?
- Component is essentially a `Javascript function` or class that returns JSX, a syntax `extension that allows you to write HTML like code inside Javascript`. 
- Components are the `building blocks` of any React application, allowing for the creation of complex and interactive user interface trough the assembly of isolated, reusable pieces.
- You can use `.js` extention with React.js components but it is recommended to use `.jsx` to differentiate between regular JS files anf React.js components.

## Two ways to create components:
* **Class Based Components**
    - Example:
        ```javascript
        import React {Component} from 'react';

        export class MyComponent extends Component {
            render() {
                return <h1>Hello, world!</h1>;
            }
        }
        ```
    - This is how components were created before functional components.

* **Functional Components**
    - Example:
        ```javascript
        export function MyComponent(){
            return <h1>Hello, world!</h1>;
        }
        ```
    - This is modern and recommended way of writing React components.

## HMR -> HotModuleReplacement
- HMR or HotModuleReplacement is given by Vite.
- Because of this. If you save the file, you will immediately see the changes on the website.

## Best practice:
- `Component Name should always start with a capital letter.`
