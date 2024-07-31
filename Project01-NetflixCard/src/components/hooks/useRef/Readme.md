# useRef Hook

* useRef is a hook that lets you reference a value that is needed for rendering.

*  Unlike states, it is directly mutable.

* You can access value of it's using yourRef.current.

### Uncontrolled Components:

* Uncontrolled components manage their own state internally and are typically use refs.



## forwardRef

* React forwardRef allows parent component to move down (or 'forward') refs to their children. It gives a child component a reference to DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used.