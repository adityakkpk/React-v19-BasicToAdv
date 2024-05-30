import React from "react";
function App() {
  return (
    <>
      <h1>Hello, Aditya!</h1>
    </>
  );
}

export default App;

{
  /* <h1>Hello, Aditya!</h1> */
}

console.log(React.createElement("h1", null, "Hello, Aditya!"));
// {
//   $$typeof: Symbol(react.transitional.element);
  // key: null;
  // props: {
  //   children: "Hello, Aditya!";
  // }
  // type: "h1";
  // _owner: null;
  // _store: {
  //   validated: 0;
  // }
  // ref: null;
  // _debugInfo: null;
// }