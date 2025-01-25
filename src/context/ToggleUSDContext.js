import { use, useContext, useState } from "react";
import { createContext } from "react";

const ToggleUSDContext = createContext();

export const ToggleUSDProvider = ({children})=> {
    const [isUSDChecked, setIsUSDChecked] = useState(true);
    const handleUDSChange = (event) => {
        setIsUSDChecked(event.target.checked);
      };
    return (
        <ToggleUSDContext.Provider value={{isUSDChecked, handleUDSChange}}>
            {children}
        </ToggleUSDContext.Provider>
    )
};

export const useToggleUSD = () => {
    return useContext(ToggleUSDContext);
}