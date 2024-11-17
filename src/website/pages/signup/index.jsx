
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../../Api/BaseUrl";
import toast from "react-hot-toast";

const Signup = ()=> {
    const [successfullMsg, setSuccessfullMsg] = useState()
    const [formData, setFormData] = useState()
    const [planList, setPlanList] = useState([])
    const navigate = useNavigate()

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value} )
    }
    const handleClose = ()=> {
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const contactRes = await fetch(`${BaseUrl}user/signup`, {
            method: 'POST',
            headers: {
                'accept': 'application/json'
            },
            body: new URLSearchParams(formData)
        });
        const responseData = await contactRes.json();
        if(responseData.responseCode === 200){
            localStorage.setItem('verifyotp', responseData.responseResult.otp)
            localStorage.setItem('email', responseData.responseResult.email)
            toast.success('User register successfully')
            setSuccessfullMsg('Thank you for contact!! Your message have been send sucessfully. Our team contact you soon')
            navigate('/verifyotp')
        }else{
            toast.error(responseData.responseMessage)
            setSuccessfullMsg(responseData.resposneMessage)
        }
    }
    return (
        <>
        <div className="bg-slate-800">
         <div className="py-10 md:px-10 px-4 container mx-auto">
            <div className="contant text-center">
                <span className="uppercase text-sky-500 font-bold small-heading">Sign Up</span>
                <h2 className="font-bold md:text-4xl text-2xl pb-4 text-gray-200 md:pt-4 gradient-text">Create an account</h2>
            </div>
        <div className="md:w-3/4 w-full mx-auto">
        <div className="registration-form py-8 px-8 mx-auto bg-white rounded shadow text-left">
                <form onSubmit={handleSubmit}>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="firstname">First Name</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="firstname" name="firstName" type="text" required placeholder="Your first name" onChange={handleChange} value={formData?.firstName} />
                        </div>
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="lastName" name="lastName" type="text" required placeholder="Your last name" onChange={handleChange} value={formData?.lastName} />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="userName">User Name</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="userName" name="userName" type="text" required placeholder="User name" onChange={handleChange} value={formData?.userName} />
                        </div>
                        <div className="mb-4 md:w-1/2 w-full">
                        <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" name="email" required placeholder="Your email address" onChange={handleChange} value={formData?.email} autoComplete="off"/>
                    </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="mobile">Mobile</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="mobile" type="number" name="mobileNumber" required placeholder="Your contact" onChange={handleChange} value={formData?.mobileNumber}/>
                        </div>
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="address">Address</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="address" type="text" name="address" required placeholder="Your address" onChange={handleChange} value={formData?.address} />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                    <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="city">City</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="city" type="text" name="city" required placeholder="Your city" onChange={handleChange} value={formData?.city} />
                        </div>
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="country">Country</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="country" type="text" name="country" required placeholder="Your country" onChange={handleChange} value={formData?.country} />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                    <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="zipCode">Zip code</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="zipCode" type="text" name="zipCode" required placeholder="Your zipCode" onChange={handleChange} value={formData?.zipCode} />
                        </div>
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="education">Education</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="education" type="text" name="education" required placeholder="Your education" onChange={handleChange} value={formData?.education} />
                        </div>
                    </div>
                        
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="password">Password</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="password" type="password" name="password" required placeholder="Your password" onChange={handleChange} value={formData?.password} autoComplete="new-password" />
                        </div>
                        <div className="mb-4 md:w-1/2 w-full">
                            <label className="block text-grey-darker text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm password</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black-700" id="confirm_password" type="password" name="confirm_password" required placeholder="Your confirm password" onChange={handleChange} value={formData?.confirm_password} />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                        <div className="w-1/4">
                            <button type="submit" className="bg-slate-800 btn-bg text-white w-full py-3 rounded">Submit</button>
                        </div>
                    </div>
{successfullMsg && <div className="flex justify-between items-center gap-4 shadow bg-white mt-2 px-2">
                        <p className="py-4 text-left text-green-500 px-2">{successfullMsg}</p>
                        <button className="px-2 border border-gray-300 rounded text-gray-700" onClick={handleClose}>X</button>
                    </div>}
                </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Signup;