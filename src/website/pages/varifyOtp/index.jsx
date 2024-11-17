import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BaseUrl from "../../../Api/BaseUrl";
import verifyicon from '../../assest/images/password.png'

const VerifyOtp = ()=> {
  const authOtp = localStorage.getItem("varifyotp")
  const authEmail = localStorage.getItem("email")
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

      const handleOtp = (e)=> {
        e.preventDefault()
        if(formData.otp === authOtp) {
          navigate('/')
          toast.success('Otp varified')
        }else{
          toast.error('Otp did not match')
        }
      }
      const handleResend = async()=> {
        const resendRes = await fetch(BaseUrl + `user/resendOtp`, {
          method: 'PUT',
          headers: {
              'accept': 'application/json'
          },
          body: new URLSearchParams({email: authEmail})
              })
        const resMessage  = await resendRes.json()
        if(resMessage.responseCode === 200){
          toast.success(resMessage.responseMesage)
          localStorage.setItem("varifyotp", resMessage.responseResult.otp)
        }else{
          toast.error(resMessage.responseMesage);
        }
      }
    return (
        <>
        <div className="bg-slate-800">
    <div className="py-10 md:px-10 px-4 container mx-auto">
    <div className="contant text-center">
        <img src={verifyicon} alt="verificationimg"/>
                <h2 className="font-bold md:text-4xl text-2xl pb-4 text-gray-200 md:pt-4 gradient-text">Verification</h2>
                <p className="text-gray-200">Please enter the OTP sent to your email address</p>
            </div>
    <div className="md:w-3/4 w-full mx-auto">
    <div className="registration-form py-8 px-8 mx-auto bg-white rounded shadow text-left">
      <form onSubmit={handleOtp} className="mb-3">
        <div className="form-group">
        <input className="form-control"
          type="number"
          placeholder="otp"
          onChange={(e) =>
            setFormData({ ...formData, otp: e.target.value })
          }
        />
        </div>
        <div className="forgetPass flex justify-between">
          <button  className="btn btn-primary" type="submit">Verify OTP</button>
       </div>
        <div className="forgetPass flex justify-between">
        <p className="text-gray-200">Did't receive the verification OTP? <span onClick={handleResend}>Resend again</span></p>
        {/* <button type="button" className="btn btn-outline-secondary" ><i className="fa-solid fa-rotate-right"></i> </button> */}
       </div>
      </form>
      </div>
    </div>
    </div>
    </div>
        </>
    )
}

export default VerifyOtp