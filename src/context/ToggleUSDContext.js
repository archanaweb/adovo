import { use, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { generateReferralCode } from "../redux/user/referralSlice";

const ToggleUSDContext = createContext();

export const ToggleUSDProvider = ({children})=> {
    const [isUSDChecked, setIsUSDChecked] = useState(true);
    const [referralCode, setReferralCode] = useState(false)
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const dispatch = useDispatch()
     const generateCode = async()=> {
            const res = await dispatch(generateReferralCode({userId:auth?.id, formData: {userId:auth?.id}}))
            const resData = res.payload;
            if(resData?.responseCode === 200){
                setReferralCode(resData?.referralCode)
            }
        }
    const handleUDSChange = (event) => {
        setIsUSDChecked(event.target.checked);
      };
      useEffect(()=> {
              generateCode()
          },[])
    return (
        <ToggleUSDContext.Provider value={{isUSDChecked, handleUDSChange, referralCode}}>
            {children}
        </ToggleUSDContext.Provider>
    )
};

export const useToggleUSD = () => {
    return useContext(ToggleUSDContext);
}