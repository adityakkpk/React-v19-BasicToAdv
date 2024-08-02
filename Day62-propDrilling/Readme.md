# Prop Drilling

* It is a pattern in react where you pass data from a parent component to deeply nested child components through multiple layers of components, even if some of the intermediate components don't need the data.

* As your component tree deepens, prop drilling can make the code more complex and harder to maintain.

* Passing up to 1 or 2 levels is probably fine but might be harder to maintain more than that.

* When a prop needs to be passed through many levels, making changes to the component hierarchy or adding/removing props can become costly.

* prop drilling may result in boilerplate code as each intermediate component needs to accept and pass down the props even if it does not use them.

* To fix this issue we use **ContextAPI**