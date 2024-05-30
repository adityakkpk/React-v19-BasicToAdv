# Javascript XML (JSX)

## What is JSX?
- JSX stands for Javascript XML. It allows us to write HTML elements in Javascript and place them in the DOM without any createElement() and append() calls.

- It is a syntactical sugar introduced by Facebook for writting React components easily.

- Because of JSX is a suntax extension for JS that lets you write HTML inside a javascript file.

-  At the end JSX code is compiled and change into the equivalent JavaScript code.

## Mechanism Behind JSX
- Example of JSX code:
    ```javascript
        export const APP = () => {
            return <h1>Hello World!</h1>;
        };
    ```
    This is how we write JSX code to print `Hello World!` on the screen. 

    This code is changed into `JavaScript code`:
    ```javascript
        function App() {
            return React.createElement('h1', null, "Hello, Aditya!" );
        }
        export default App
    ```
    Here we will get an object (also known as react.element) and this is what converted into actual dom element and render the data in UI.

    While a React.element is a building block and a part of the virtual DOM, it is not the virtual DOM itself. Rather, it is an object within the virtual DOM tree that describes what should be rendered on screen.

## Bable - The React Compiler
- Before React v19, we have the `babale` compiler inside our browser, which changes the JSX code to pure JavaScript. Now wiht React v19 we have the React Compiler already so, the JSX code is directly converted to pure JavaScript with the help of React Compiler.

- JSX code converted into JS by Babale Compiler:
    ```javascript
    const App = () => return React.createElement('h1', null, "Hello world!");
    ```

- JSX code converted into JS by React Compiler:
    ```javascript
    import {jsx as _jsx} from 'react/jsx-runtime';
    const App = () => return _jsx_('h1', {childern: "Hello world!"});
    ```