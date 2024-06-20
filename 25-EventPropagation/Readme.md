# Event Propagation

## What is Event Propagation?
- It refers to the process of how events are propagated or travel throgh the DOM hierarchy.
- In JS, there are two phases of event propagation such as `capturing phase` and `bubbling phase`.
- In React.js, event propagation refers to the process by which events propagate or "bubble" up from the target element through its parent elements in the DOM hierarchy.
- When an event occurs on an element in a React component, such as a button click, the event is first captured at the target element and then bubbles up through the parent elements, triggering ant event handlers that have been defined along the way. This allows you to handle events at different levels of the component hierarchy.
- You can use `stopPropagation()` to stop propagation in a React. It can be called on the object within an event handler. This method prevents the event from bubbling up further in the DOM, ensuring that only the event of the target element is triggered.

## Capturing Phase:
- The event starts from the root of the DOM and goes down to the target element.
- In this the events occuerd between the `root of the DOM` and the `target element`, all the events are triggered from top to bottom. Then the event of target element will occur at the end.

## Target Phase:
- The event reaches the target element.

## Bubbling Phase:
- The event starts from the target element and bubbles up to the root of the DOM.
- In this the events are triggered from the target element to root of the DOM.

## Practical Demo for Bubbling Phase:
```javascript
import "./EV.css";
export const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
      console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
```
## Practical Demo for Capturing Phase:
```javascript
import "./EV.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
```