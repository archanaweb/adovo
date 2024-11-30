import { useState } from "react";
import BaseUrl from "../../../Api/BaseUrl";
import icon from "../../assest/images/security-code.png"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import './style.css'

const ResetPassword = () => {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name] : e.target.value});
  }
  const handleSetNewPassword = async (e)=> {
    e.preventDefault()
    const res = await fetch(BaseUrl + 'user/resetPassword', {
      method: 'POST',
      headers: {
          'accept': 'application/json'
      },
      body: new URLSearchParams(formData)
    });
    const resData = await res.json()
    if(resData){
        toast.success(resData?.responseMesage)
        navigate('/')
        
      }else{
        toast.error(resData?.responseMessage);

      }
    console.log("resdata",resData)
  }

    return (
        <>
    <div className="bg-slate-800">
    <div className="py-10 md:px-10 px-4 container mx-auto">
    <div className="verify-otp text-center">
    <div className="icon-bg">
                <img src={icon} alt="iconimg" />
                </div>
                <h2 className="font-bold md:text-4xl text-2xl text-gray-200 gradient-text">Create a new password</h2>
                <p className="text-gray-200">Please enter the OTP sent to your email address and set a new password.</p>
            </div>
    <div className="md:w-2/4 w-full mx-auto pt-6">
    <div className="registration-form py-8 px-8 mx-auto bg-slate-700 rounded shadow text-left">
      <form onSubmit={handleSetNewPassword} className="mb-3">
        <div className="form-group">
        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white mb-2"
          type="number"
          placeholder="otp" 
          name="otp"
          value={formData?.otp}
          onChange={(e) =>
            setFormData(handleChange)
          }
        />
        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white mb-2"
          type="password"
          placeholder="Set new password" 
          name="newPassword"
          value={formData?.newPassword}
          onChange={(e) =>
            setFormData(handleChange)
          }
        />
        </div>
        <div className="forgetPass flex justify-center pt-4">
          <button className="btn btn-primary bg-[#d13d5e] p-3 rounded-md text-white w-full" type="submit">Reset Password</button>
       </div>
      </form>
      </div>
    </div>
    </div>
    </div>
        </>
    )
}
export default ResetPassword;