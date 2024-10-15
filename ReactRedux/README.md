# React Redux

## 1: Why, When, and How to Use Redux in React

* **Why Redux?**

- In small applications, you can manage data using React's state. But as the application grows, it becomes tricky to pass data between many components.

Redux solves this problem by creating a centralized store that holds all the data. This store can be accessed and updated by any part of the app.

* **When to use Redux?**

- It is used for the large application. 

* **What is Redux?**

- It is a tool the helps manage data (also known as store) in large applications. It allows you to keep all our app's data in a single place known as the *Redux Store*, making it easy to share and update data across different parts of the app.

* **How Redux Works?**

- *Store*
    - This is where redux keeps all your data.
- *Action* 
    - This is an object, which tell the redux what to do.
- *Reducers*
    - How to do. It actually change the data in the store based on the actions.

