# Introduction to React.js

## Introduction to React.
    - React.js is a Javascript library that is used for building UI and Single Page Applications.
    - Created by Jordan Walker at Facebook.
    - It is the most popular javascript library for frontend development.

## History of React.js
    - It began as an internal tool for dynamic Facebook components.
    - Created in 2011 but remained private initially and made open source by `Jordan Walker` and `Tom Occhino` at JSConfUS 2013.
    - Initailly faced ciriticism for combining JS and HTML in a single file.

## Is React JS Librry or Framework?
    - It is not a framework. It a Javascript `library`.
    - It is also known as `ReactJS` and `React.js`.
    - React is all about `Components`.

## Why React?
    - Most Popular `Javascript library`
    - Component-Based Architecture.
    - Declarative UI
    - Rich Ecosystem - npm packages
    - Strong Community Support - Online / Github
    - React is declarative because it describes what the UI should look like rather than how to achieve it.
    - This makes the code esier and simpler to read and maintain, as it more focused on the end result rather than the steps envolved in getting there.

    - Declarative way to write code to render a component: 
        ```javascript
        function MyComponent({name}) {
            return <div>Hello, {name}</div>;
        }
        ```
    
    - Imaparetive way to write code to render a component: 
        ```javascript
        function MyComponent(name) {
            const elem = document.createElement('div');
            elem.textContent = name;
            return elem;
        }
        ```
        Here, we are creating elements manually, setting their properties and appending the element to the DOM.

## How React works?
    - At first we create a React `Component`
    - Then we use this component at multiple places, now it called as `Instances`.
    - Then bable compiles the components and builds `React Elements`. You can also called these react elements s **Virtual Dom**, because from here, the *reconciliation## phase is started. In side of the reconciliation phase the **Diffing*## algorithumn is executed and a new instance of Virtual Dom tree is created same as the old Virtual Dom tree.
    - If any change occur, then only those `DOM element` of the DOM tree is created again.
    - Then the `Final UI` is rendered.

## Why React.js over Vanilla Javscript ?

- React.js manages updating the DOM with the components written by us.
- Code is more Reusable with React.