import { useContext, use } from 'react'
import { MyContext } from '../Index';

export const useMyCustomHook = () => {
    const context = use(MyContext);
    if(context === undefined) {
        throw new Error("Component must be wrapped within the contextProvider.")
    }
    return context;
}

