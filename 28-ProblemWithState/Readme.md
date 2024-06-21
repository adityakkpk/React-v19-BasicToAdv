# Problem (Doubt) With State

## What is the Problem with the State?
* Why the State value is not reset to its initial value on re-render?
    - As in our counter application we initialize a variable using `useState` with initialValue `0`. As we click on the increment button then the value is updated accordingly.
    - So the doubt is that when we click on the button then the value is updated accordingly and the components are re-rendered so the counter value should be re initialized with 0.

## **Solution:**
    - When the components are rendered first, then the counter value is initialized with 0.
    - When we click on the increment button then the value is updated to 1.
    - React re-render the component. (when user clicks on the increment button for 2nd time)
    - At this point, the incremented value 1 is set to the initial value of counter variable.

* `useState` is smart enough to use the initial value the very first time the component is rendered.