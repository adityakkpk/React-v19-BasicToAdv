import React, { forwardRef, useRef } from "react";

const ForwardRef = () => {
    const username = useRef(null)
    const password = useRef(null)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return <>
    <div className="flex flex-col gap-10 h-[100vh] justify-center items-center">
        <form className="flex flex-col gap-2 text-black" onSubmit={handleFormSubmit}>
            {/* <BeforeReact19 label="username" ref={username} />
            <BeforeReact19 label="password" ref={password} /> */}
            <AfterReact19 label="username" ref={username} />
            <AfterReact19 label="password" ref={password} />
            <button className="px-2 py-1 bg-sky-400 w-fit rounded">Submit</button>
        </form>
    </div>
  </>;
};

export default ForwardRef;

const BeforeReact19 = forwardRef((props, ref) => {
    return (
        <div className="flex gap-3">
            <label className="text-white" htmlFor={props.label}>{props.label}</label>
            <input type="text" ref={ref} className="rounded" />
        </div>
    )
})

const AfterReact19 = (props) => {
    return (
        <div className="flex gap-3">
            <label className="text-white" htmlFor={props.label}>{props.label}</label>
            <input type="text" ref={props.ref} className="rounded" />
        </div>
    )
}
