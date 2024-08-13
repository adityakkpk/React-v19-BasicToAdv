# React.memo() 

* It is used for memoization of function components.
* If the props of a memoized component have not changed, React skip the rendering for that component, using cached result instead.

* Do memoization only when necessary.

OR 

* React.memo() is a `higher-order component` that we can use to wrap components that we do not want to re-render unless props within them changed.