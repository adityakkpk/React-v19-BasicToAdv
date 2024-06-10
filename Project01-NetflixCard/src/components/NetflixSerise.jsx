//Named Export
// export const NetflixCard = () => {

import serisesData from '../api/SeriseData.json'
import SeriseList from './List';

const NetflixCard = () => {

  return (
    <ul className='grid grid-three-cols'>
      {serisesData.map((data) =>  <SeriseList key={data.id} elem={data} /> )}
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