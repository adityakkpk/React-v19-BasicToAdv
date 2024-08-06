import { useContext } from 'react'
import { MyContext } from '../Index';

export const useMyCustomHook = () => {
    const context = useContext(MyContext);
    if(context === undefined) {
        throw new Error("Component must be wraqpped within the contextProvider.")
    }
    return context;
}

