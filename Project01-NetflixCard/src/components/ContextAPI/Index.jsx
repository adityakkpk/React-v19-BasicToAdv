import { createContext } from "react";

// !st Step
export const MyContext = createContext();

//2nd Step
export const MyContextProvider = ({children}) => {
    return <MyContext.Provider value={{name:"Aditya", age:20}}>
        {children}
    </MyContext.Provider>
}