import React from 'react'

// const SeriseList = (props) => {
const SeriseList = ({elem}) => {
  // console.log(props);
  // const { elem } = props;
  // const { id, img_url, name, rating, description, cast, genre, watch_url } = props.elem;
  const { id, img_url, name, rating, description, cast, genre, watch_url } = elem;
  return (
    <li>
        <div>
            <img src={img_url} alt="" width={"40%"} height="40%" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <p>Gener: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target='_blank'>
          <button>Watch Now</button>
        </a>
    </li>
  )
}

export default SeriseList
