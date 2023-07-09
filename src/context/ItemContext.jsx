import { createContext, useContext, useState } from "react";
import { data } from "../Data";

export const manageItem = createContext();

export function ItemContext({children}){
    const [ continentData, setContinentData ] = useState([...data.continents])

    return <manageItem.Provider value={{continentData}}>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);