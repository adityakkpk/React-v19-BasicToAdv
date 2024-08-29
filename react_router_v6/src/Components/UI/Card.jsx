import { NavLink } from "react-router-dom";

export const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <li className="border shadow-lg flex flex-col rounded overflow-hidden my-6">
      <div className="">
        <div className="">
          <img src={Poster} className="h-[460px]" alt={imdbID} />
        </div>
        <div className="bg-gray-500 flex justify-center items-center">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="p-2 my-2 text-white font-bold text-xl">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};