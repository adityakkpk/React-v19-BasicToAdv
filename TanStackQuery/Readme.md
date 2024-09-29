# TanStack Query

It is a library that helps you to manage the state of data you fetch from servers, like APIs, in your React applications.

one of the most powerful tools for managing the server-side state in React.

### Advantages

* **Data Fetching made easy :** with a simple useQuery hook, fetching data becomes much more easy than using the standard way of fetching data from server.

* **Built-in Loading and Error States :** No need to write custom code for handling loading and error states.

* **Automatic Caching :** If your data gets stole or out of date, TanStack can refetch in the background.

* **Pagination and Infinite Scrolling :** Handling Pagination or infinite Scrolling are made easy with the TanStack Query.

### Installation, Routing and Components

* **Installation** : `npm i @tanstack/react-query`

## Query Client and Provider in TanStack Query

* In React Query, the QueryClientProvider is a crucial component that provides a QueryClient instance to your react application. This QueryClient is responsible for managing all the data fetching, caching, and state management related to the query.

* Wrap your application with a QueryClientProvider and pass a QueryClient instance as prop.

* **QueryClient :** It is the core part of the react-query library. It manages all the caching, background fetching, data synchronization, and state management related to the query. It provides a centralized store for managing and caching asynchronous data in your application.

## Data Fetching in React-Query

* **useQuery() :** useQuery() hook is used to fetch data in TanStack-Query. It takes an object as input.

* *queryKey* : It is one of the keys of the object that passed in the useQuery() hook. It is typically an array of string that uniquely identifies a query. It allows React Query to determine if the data in the cache is associated with a particular request.

It is used to cache data with a specific key and refetch or update data when certain dependencies changes.
