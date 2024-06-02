function App() {

  return (
    <>
      <NetflixCard />
      <NetflixCard />
      <NetflixCard />
      <NetflixCard />
      <NetflixCard />
    </>
  );
    
}

export default App

const NetflixCard = () => {
  const name = 'killer';

  const rating = 8.2;

  const summary = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti id odit accusantium consequatur sint fuga dolorem incidunt, quos quaerat molestias voluptatem, aspernatur neque quasi sit nam. Blanditiis id quasi praesentium tenetur voluptas, cum perferendis laborum provident minima itaque sunt porro est quod! Harum, dolor.`;

  const returnGener = () => {
    const gener = "Thriller";
    return gener;
  }
  
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
  {/* <button>{age>=18 ? "Watch Now" : "Not Availabel"}</button> */}

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

  return (
    <div>
      <div>
        <img src="killer.jpg" alt="" width={'40%'} height='40%' />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {5 + 3.2}</h3>
      <p>
        Summary: {summary}
      </p>
      <p>Gener: {returnGener()}</p>
      <button>Watch Now</button>
    </div>
  );
}