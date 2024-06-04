# Conditional Rendering in JSX

## Conditionals in JSX

- You can either return JSX early or you can use `ternary operators` for conditionals in JSX.
- For example:
    > 1. return <p>{age >= 18 ? "Adult" : "Minor"}</p>

    > 2. return <p>{age >= 18 && "You can vote"}</p>

    > 3. return <p>{username || "Guest"}</p>

## Methods to implement Conditional Rendering

- Using `if-else` block. This method is not a good way to implement because it breaks `the Do Not Reapeat Yourself` rule.
- Using `Ternary Operator`.
- Using `changing of variable` with conditons.
- Storing the result of a `conditional function` in the variable.
- For Example code see the `App.jsx` file of `Project01`.


```javascript
// Methods for Conditional Rendering
// ---------------------------------

// 1. Using If-Else block
// let age = 16;
// if(age < 18){
//   return (
//     <div>
//       <div>
//         <img src="killer.jpg" alt="" width={'40%'} height='40%' />
//       </div>
//       <h2>Name: {name}</h2> //Dynamic Variable
//       <h3>Rating: {5 + 3.2}</h3> // Expression
//       <p>
//         Summary: {summary}
//       </p>
//       <p>Gener: {returnGener()}</p>// Function Calls
//       <button>Not Available</button>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <div>
//         <img src="killer.jpg" alt="" width={'40%'} height='40%' />
//       </div>
//       <h2>Name: {name}</h2> //Dynamic Variable
//       <h3>Rating: {5 + 3.2}</h3> // Expression
//       <p>
//         Summary: {summary}
//       </p>
//       <p>Gener: {returnGener()}</p>// Function Calls
//       <button>Watch Now</button>
//     </div>
//   );
// }
// This is violating the DRY rule

// 2. Using Ternary Operator
{
  /* <button>{age>=18 ? "Watch Now" : "Not Availabel"}</button> */
}

// 3. For complex if conditions we have some solutions
// <button>{canWatch}</button>
// let canWatch = "Not Available";
// if(age >= 18 ) canWatch = "Watch Now";

// 4. solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.
// And we can pass some dynamic values as function parameters

// const canWatch = () => {
//   if (age >= 18) {
//     return "Watch Now";
//   } else {
//     return "Not Available";
//   }
// }

// <button>{canWatch()}</button>
```
