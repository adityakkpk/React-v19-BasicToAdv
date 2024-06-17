import './EV.css';

export const EventHandling = () => {

    const handleClick = (event) => {
        console.log(event);// SyntheticBaseevent {...}
        console.log(event.target);
        console.log(event.type);
        alert("You clicked me");
    }

    const handleWelcome = (name) => {
        console.log("Welcome :" + name)
    }

    return <>
        {/* ?  Function Components with Named Function */
        /* Remember that we do not have to call this function here, if you call this function here, it will run without even clicking. 
        
        Here you just need to pass the reference of the function.
          */}
        <button onClick={handleClick}>Click me</button>

        <br />

        {/*?  Function Components with Arrow Function 
        
            Here you will not get event object directly in the function. Instead you have to pass the event object inside the arrow function and then to our handler function. 
        */}   
        <button onClick={(e) => handleClick(e)} className='my-2'>Click me again</button>

        <br />

        { /* Inline Event handlers */}
        <button onClick={(e) => console.log(e)} className='my-2'>Inline event</button>

        <br />

        {/* Function Components with Inline Arrow Functions */}
        <button className='my-2' onClick={() => alert('Inline arrow function')}>Inline Arrow Function</button>

        <br />

        {/* Passing Arguments to event Handlers  */}
        <button className='my-2' onClick={() => handleWelcome("Aditya")}>Welcome</button>
    </>
}