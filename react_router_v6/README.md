# React Router v6.4

React Router is a popular JavaScript framework used for handling routing in React application.

## createRoutesFromElements Helper Function / (old method)

Creating Browser Routes using 'createRoutesFromElement' method in React.

## React Router App Layout & Outlet Component: Render Nested Elements in Your React App

Creating a Layout for our application.

## Building a Dynamic Navigation Bar with React Router

Building Dynamic Header using <NavLink/> component

## Active Links in React Navigation

- NavLink gives you the `isActive` variable by using this we can create a Active link.
    - We can use `isActive` in class
    - We can use `isActive` in `style` attribute

## Handling Error Pages in React Router

- Creating a page for handling 404(page not found) error with `useRouteError` hook
- we can do it in two ways:
    - by using `errorElement`
    - by using "*" path and `NotFound` page

## useNavigate Hook in React Router: Seamless Page Redirection & Back Button Setup

using this hook we can implement navigators in our page.

## Fetch API Data with React Router Loaders🔥 No useEffect Needed

Step 1 - Function to Fetch Data

Step 2 - Pass the function name as the value to the loader property in that page route

Step 3 - Get the data of the API bu using `useLoaderData()` function.

Step 4 - Display the 

## Create Global Loading States in React Using React Router & useNavigation

* **`useNavigation()` hook:**
    - `Syntax`: const navigation = useNavigation();
    - `navigation.state` : 
        - `idle`
        - `submitting`
        - `loading`


## Secure Your React App: Using ENV Variables to Protect Private Data

* Create a `.env` file.
* Add all your secret data in it.
* And use it by using `import.meta.env.ENV_VARIABLE`

## Dynamic Routing in React: Get Params Value and Fetch API Data for a Single Movie

## Handle Contact Form Data with React Router Form Component & Action

1. Change your `form` tag to `Form` given by react-router-dom
2. Provide `action` and `method` properties to `Form`.
3. Make sure to add name properties to all the child elements of `Form`
4. Create a async Function with a parameter`{request}`. Which have a method called `formData().`
4. Go to your routes and add a property `action` with the value: - function you have created

## Final UI upgrades

Upgrade UI as per your need