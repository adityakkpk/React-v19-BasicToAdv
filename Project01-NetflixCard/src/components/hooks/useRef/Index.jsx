import { useRef } from "react";

export const UseRef = () => {

    const nameRef = useRef(null);
    const passRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, passRef.current.value);
    }

    return(
        <div className="flex flex-col gap-10 h-[100vh] justify-center items-center">
            <h1 className="text-4xl">Hello useRef</h1>
            <form className="flex flex-col gap-2 text-black" onSubmit={handleFormSubmit}>
                <input type="text" id="username" className="rounded px-1" ref={nameRef} />
                <input type="password" id="password" className="rounded px-1" ref={passRef} />
                <button className="px-2 py-1 bg-sky-400 w-fit rounded">Submit</button>
            </form>
        </div>
    )
}