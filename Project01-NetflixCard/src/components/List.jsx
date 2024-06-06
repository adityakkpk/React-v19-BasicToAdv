import React from 'react'

const SeriseList = (props) => {
  return (
    <li>
        <div>
            <img src={props.elem.img_url} alt="" width={"40%"} height="40%" />
        </div>
        <h2>Name: {props.elem.name}</h2>
        <h3>Rating: {props.elem.rating}</h3>
        <p>Summary: {props.elem.description}</p>
        <p>Gener: {props.elem.genre}</p>
        <p>Cast: {props.elem.cast}</p>
        <a href={props.elem.watch_url} target='_blank'>
        <button>Watch Now</button>
        </a>
    </li>
  )
}

export default SeriseList
