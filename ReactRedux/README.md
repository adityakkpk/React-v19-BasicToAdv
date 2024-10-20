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

## 2: Create Reducer Functions to Add & Delete Tasks in React

* **Reducer Functions**
    - A reducer function that decides how the state should change based on the action. The reducer takes the current state and an action, and returns a new state.

* *Key things to remember*
    1. Reducer must always return a new state.
    2. They should never modify the old state directly.

* **Syntax:**
```javascript
    function reducer(state = initialState, action) {}
```

The reducer takes two arguments: the state and the action

*State:* This is the current state.
*Action:* This is the action that tells the reducer what to do. It has the type and sometimes a payload(Which is the data).

## 3: Redux Store: Create, Dispatch & Get State in React

* **Redux Store:**
    - The store is where Redux keeps all your application's data/state.

    - It is like a database for your application, but it's only managing data in memory (not saving it permanently).

* *Syntax:*
```javascript
import {} from "redux";

const store = createStore(reducer);
```

The createStore method creates the Redux store using a reducer function that handles how the state changes in response to actions.

* **Dispatch an Action:**

dispatch() is used to send actions to the Redux store. An action describes what change you want to make to the store (such as adding a task).

```javascript   
store.dispatch({type: "ACTION_TYPE", payload: data});
```

* **getState()**

getState() retrieves the current state of the Redux store.

This is useful for accessing the store after it has been updated or to monitor changes.

## 4: How to Create and Dispatch Actions Easily

* **Redux Action:**
    - An action is an object that tells the Redux what to do. It must have a type property that describes the action.

* *Syntax:*
```javascript
{ type: "ACTION_TYPE", payload: someData }
```

* **Action Creators:**
    - An action creator is a function that creates an action object. This makes it easier to create action with different data.

* *Example:*
```javascript
function createAction(data) {
    return { type: 'action', payload: data };
}
```

## 5: Connect Redux with your React App

To use Redux in a React app, we need to connect Redux's store and actions to the React components. This allows components to access the global store and dispatch actions.

* **Steps:**
    * *Step 1:* - Install react-redux
    * *Step 2:* - Wrap the App with Provider

## 6: Access Redux Store data

Redux provide a hook named `useSelector`, which is used to read the Redux store data.

* *Syntax:*
```javascript
const count = useSelector(state => state.property);
```

* *Selector Function:* We define a selector function that takes the entire Redux store state as an argument and returns the specific piece of data that we need.