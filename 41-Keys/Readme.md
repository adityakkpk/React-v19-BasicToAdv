# Why keys are Important in ReactJs?

## Keys in React

* A string or number that uninquely identifies it among other items in that array.

* Keys tell react which array item eact component corresponding to, so that it can match them up later. This becomes important if your array item can move, get inserted, or get deleted.

* **Rules**
    - Keys must be unique among siblings
    - Keys must not change

## Example

* When we don't use a key attribute, React will automatically use index.

* As a component will render one after another, it will automatically get the index

* But if we want to add new elements on the begining of the components, keys of all items will be changed. 

* And all the components will render again and again becaue with adding new element, keys of all elements will be changed and if the key changes then the component will render again.

![Example Image](image.png)

* To solve the problem we can add our new element at last. By doing this all the elements which are already rendered will not be rendered again after adding new element.

* And another solution is that we can use `States`.
