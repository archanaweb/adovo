import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { generateReferralCode } from "../../../redux/user/referralSlice"
import { useDispatch } from "react-redux"

const ReferToFriend = ()=> {
    const {id} = useParams()
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
    const navigate = useNavigate()
    useEffect(()=> {
        navigate(`subuser/signup/${id}`)
    },[])
    return null
}

export default ReferToFriend