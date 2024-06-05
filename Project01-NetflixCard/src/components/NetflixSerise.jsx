//Named Export
// export const NetflixCard = () => {

import serisesData from '../api/SeriseData.json'

const NetflixCard = () => {

  return (
    <ul>
      {serisesData.map((data) => {
        return <li key={data.id}>
          <div>
            <img src={data.img_url} alt="" width={"40%"} height="40%" />
          </div>
          <h2>Name: {data.name}</h2>
          <h3>Rating: {data.rating}</h3>
          <p>Summary: {data.description}</p>
          <p>Gener: {data.genre}</p>
          <p>Cast: {data.cast}</p>
          <a href={data.watch_url} target='_blank'>
            <button>Watch Now</button>
          </a>
        </li>
      })}
    </ul>
  );
};

// Default Export
// export default NetflixCard;


// Mixed exports
export default NetflixCard;
// export const Footer = () => {
//     return (
//         <div>
//             <h1>Footer: copywrite @adityakkpk</h1>
//         </div>
//     )
// }
// export const Header = () => {
//     return (
//         <div>
//             <h1>Netflix</h1>
//         </div>
//     )
// }