import React from 'react'

const handleWelcomeUser = (user) => {
    alert(`Hey ${user}.`);
}

const handleHover = () => {
    alert(`Don't Hover on me.`);
}

const EventProps = () => {
  return (
    <>
        <WelcomeUser onClick={() => handleWelcomeUser("Aditya")} onMouseEnter={handleHover} />
    </>
  )
}

export default EventProps

const WelcomeUser = (props) => {
    const handleGreetings = () => {
        console.log(`Hey user, Welcome`)
        props.onClick();
    }
    return (
        <>
            <button onClick={props.onClick}>Click</button>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <button onClick={handleGreetings}>Greeting</button>
        </>
    )
}
