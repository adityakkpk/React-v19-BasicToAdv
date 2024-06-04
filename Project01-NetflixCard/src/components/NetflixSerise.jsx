//Named Export
// export const NetflixCard = () => {

const NetflixCard = () => {
  const name = "killer";

  const rating = 8.2;

  const summary = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deleniti id odit accusantium consequatur sint fuga dolorem incidunt, quos quaerat molestias voluptatem, aspernatur neque quasi sit nam. Blanditiis id quasi praesentium tenetur voluptas, cum perferendis laborum provident minima itaque sunt porro est quod! Harum, dolor.`;

  const returnGener = () => {
    const gener = "Thriller";
    return gener;
  };
  

  return (
    <div>
      <div>
        <img src="killer.jpg" alt="" width={"40%"} height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Gener: {returnGener()}</p>
      <button>Watch Now</button>
    </div>
  );
};

// Default Export
// export default NetflixCard;


// Mixed exports
export default NetflixCard;
export const Footer = () => {
    return (
        <div>
            <h1>Footer: copywrite @adityakkpk</h1>
        </div>
    )
}
export const Header = () => {
    return (
        <div>
            <h1>Netflix</h1>
        </div>
    )
}