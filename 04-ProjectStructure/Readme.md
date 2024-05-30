# React Project Structure and Naming Conventions

## Project Structure
* **node_modules**
    - This is the folder containing all the `necessary libraries nd dependencies` by React.
* **public**
    - This is the folder  containing all the `static` files like images, fonts, videos etc.
* **src**
    - This is the folder containing all the `source files`.

    - **App.jsx**
        - `App.jsx` is main component of your application, and it's where you define the top-level component that will be rendered in the browser.

    - **main.jsx**
        - This is the entry point of our React Application.
        - `main.jsx` is usually the first file that is executed when the application starts.
    
    - **eslintrc.cjs**
        - This file includes the configuration for the `ESLint`.
        - It is static code analysis tools for identifying problematic patterns found in JS.

    - **.gitignore**
        - This file contains all the files and folders to be ignored by Git.
        - For example, we never want to include `node_modules` to br pushed to Git.

    - **index.html**
        - The main HTML file where your React application is loaded, serving as the `entry point for the browser`.
    
    - **package.json**
        - This file contains all the details or configuration regarding the project.
        - It includes name, version, description, script and all the dependencies.
 
* In dependencies you will see react and react-dom.
    - React is just a library for creating dynamic user interfaces.
    - React DOM is used to render those component.

    - **vite.config.js**
        - This file contains configuration related to the Vite.

## Naming Conventions

- camelCase
    - It is used for variables, functions, file name and properties inside the class.

- PascalCase
    - It i used for component name, class names, types etc.

- snake_case
    - It is not common in JS but is is heavyly used in python

- kebad-case
    - Tt is common for file names, css-classes, ids etc.

## Best practices

- Each JSX expression must have one parent element, which means if you try to return multiple elements, React will throw an error.

- Every JSX tag needs to be closed. You should always use closing tag or self-closing tag. You can use self-closing tag for elements that don't have children. e.g., <img src='url' />