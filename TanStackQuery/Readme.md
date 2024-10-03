# TanStack Query

It is a library that helps you to manage the state of data you fetch from servers, like APIs, in your React applications.

one of the most powerful tools for managing the server-side state in React.

### Advantages

- **Data Fetching made easy :** with a simple useQuery hook, fetching data becomes much more easy than using the standard way of fetching data from server.

- **Built-in Loading and Error States :** No need to write custom code for handling loading and error states.

- **Automatic Caching :** If your data gets stole or out of date, TanStack can refetch in the background.

- **Pagination and Infinite Scrolling :** Handling Pagination or infinite Scrolling are made easy with the TanStack Query.

### Installation, Routing and Components

- **Installation** : `npm i @tanstack/react-query`

## Query Client and Provider in TanStack Query

- In React Query, the QueryClientProvider is a crucial component that provides a QueryClient instance to your react application. This QueryClient is responsible for managing all the data fetching, caching, and state management related to the query.

- Wrap your application with a QueryClientProvider and pass a QueryClient instance as prop.

- **QueryClient :** It is the core part of the react-query library. It manages all the caching, background fetching, data synchronization, and state management related to the query. It provides a centralized store for managing and caching asynchronous data in your application.

## Data Fetching in React-Query

- **useQuery() :** useQuery() hook is used to fetch data in TanStack-Query. It takes an object as input.

- _queryKey_ : It is one of the keys of the object that passed in the useQuery() hook. It is typically an array of string that uniquely identifies a query. It allows React Query to determine if the data in the cache is associated with a particular request.

It is used to cache data with a specific key and refetch or update data when certain dependencies changes.

## Handling Loading and Error States

```javascript
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: getPostsData,
});
```

## React Query Dev Tools for Debugging

* React Query Dev Tools for Debugging is a separate package for debugging purposes. You can use it to by installing it and calling it Inside your application. 

* **useMutation** is used for creating, uploading and deleting data and allows triggering manual side effects.

* React Query caches the data for 30 minutes.

## Garbage Collection Time in React Query: Control Your Data Caching

In React Query v5, the cacheTime option has been renamed to gcTime.

When you use React Query to get data, it saves the result in the cache. This means if you ask for the same data again, the cache data will be served. The cache updates automatically when the data changes. So you always get the latest information.

* *Use Case* - Imagine if you are fetching a list of users. If you go back to the same page, React queries will show the saved list from the cache instead of the making a new request to the server, It makes your application fast. If a new user is added, React query will automatically updates the list.

* *By  Default, inactive queries are garbage collected after 5 minutes.* This means that if query is not being used for 5 minutes, the cache for that query will be cleaned up.