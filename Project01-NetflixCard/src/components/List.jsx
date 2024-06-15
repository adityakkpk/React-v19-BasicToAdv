import styles from './Netflix.module.css';
import styled from 'styled-components'

// const SeriseList = (props) => {
const SeriseList = ({elem}) => {
  // console.log(props);
  // const { elem } = props;
  // const { id, img_url, name, rating, description, cast, genre, watch_url } = props.elem;
  // eslint-disable-next-line no-unused-vars
  const { id, img_url, name, rating, description, cast, genre, watch_url } = elem;

  // const buttonStyle = {}
  const ButtonStyle = styled.button({
    padding: "0.8rem 1.5rem",
    border: "none",
    fontSize: "1rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: 'black',
    borderRadius: "5px",
  });
  const Rating = styled.h3`
    font-size: 1rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  
  return (
    <li>
        <div>
            <img src={img_url} alt="" width={"40%"} height="40%" />
        </div>
        <h2 className={styles['card-heading']}>Name: {name}</h2>
        <Rating>
          Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className='text-xl font-bold underline'>Summary: {description}</p>
        <p className='text-sky-700'>Gener: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target='_blank'>
          {/* <button style={buttonStyle}>Watch Now</button> */}
          <ButtonStyle>Watch Now</ButtonStyle>
        </a>
    </li>
  )
}

export default SeriseList
