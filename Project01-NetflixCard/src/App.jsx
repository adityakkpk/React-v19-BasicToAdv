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
  return (
    <div>
      <div>
        <img src="killer.jpg" alt="" width={'40%'} height='40%' />
      </div>
      <h2>Name: {name}</h2> //Dynamic Variable
      <h3>Rating: {5 + 3.2}</h3> // Expression
      <p>
        Summary: {summary}
      </p>
      <p>Gener: {returnGener()}</p>// Function Calls
    </div>
  );
}