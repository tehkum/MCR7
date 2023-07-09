import { createContext, useContext, useState } from "react";
import { data } from "../Data";

export const manageItem = createContext();

export function ItemContext({children}){
    // eslint-disable-next-line no-unused-vars
    const [ continentData, setContinentData ] = useState([...data.continents])

    return <manageItem.Provider value={{continentData}}>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);