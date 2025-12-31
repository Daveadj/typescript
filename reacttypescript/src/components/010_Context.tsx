import { createContext, useContext, type ReactNode } from "react";


export type GlobalType = {
    flag: string;
    setFlag: (flag: string) => void;
}


export const MyGlobalContext = createContext<GlobalType>({
    flag: "Hello",
    setFlag: () => {}
})


export const useGlobalContext = () => useContext(MyGlobalContext)


export function GlobalState({children}: {children: ReactNode}){
    return(
        <MyGlobalContext.Provider value={{flag: "Hello", setFlag: () => {}}}>{children}</MyGlobalContext.Provider>
    )
}