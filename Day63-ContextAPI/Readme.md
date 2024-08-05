# ContextAPI

* It is a way to pass data through the component tree without having to pass props down manually at every level.

* **createContext** : Create a Context object
* **Provider** : A component that provides the context value to its children
* **useContext** : A hook that allows you to consume a context.


**Initial Value:** We don't pass an initial value directly to the context.

**Context Creation:** createContext returns a Context component, not a variable. The first letter of the Context component's name must be uppercase.

**Provider Component:** The provider is a property of the Context component. We pass the value to the Provider, which makes it accessible to child components. The value should be passed inside *double curly braces*, if it is more than one.


*Note* : In the contextAPI, the data provided by a context can only be accessed by the components that are its children within the component tree. This means that any component outside that needs access to the context data must be a descendent of the provider component that supplies the context value.