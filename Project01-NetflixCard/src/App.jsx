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
  return (
    <div>
      <div>
        <img src="killer.jpg" alt="" width={'40%'} height='40%' />
      </div>
      <h2>Name: </h2>
      <h3>Rating: 8</h3>
      <p>
        Summary: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti id odit accusantium consequatur sint fuga dolorem incidunt, quos quaerat molestias voluptatem, aspernatur neque quasi sit nam. Blanditiis id quasi praesentium tenetur voluptas, cum perferendis laborum provident minima itaque sunt porro est quod! Harum, dolor.
      </p>
    </div>
  );
}