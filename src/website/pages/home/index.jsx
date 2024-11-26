import { useState } from "react";
import Header from "../../components/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import netflix from "../../assest/images/netflixx.png";
import Howitwork from "../../components/Howitwork";
import Footer from "../../components/Footer"
import Waystoearn from "../../components/Waystoearn";
import Features from "../../components/Features";
import Usercashedout from "../../components/Usercashedout";
import trustpilot from "../../assest/images/trustpilot.png"
import Faq from "../../components/Faq";
import BaseUrl from "../../../Api/BaseUrl";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
      userName: ''
    })

    const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await fetch(`${BaseUrl}user/login`, {
        method: 'POST',
        headers: {
            'accept': 'application/json'
        },
        body: new URLSearchParams(formData)
    }
  )
  const resData = await response.json()
  if(resData.responseCode === 200){
    toast.success(resData.responseMessage)
    localStorage.setItem("opinionUser", JSON.stringify(resData.responsResult))
    navigate('/dashboard')
  }else{
    toast.error(resData.responseMessage)
  }
}

  return (
    <div className="bg-slate-800">
        <div className="main-banner">
            <div className="container mx-auto md:flex items-center md:pb-14 md:pt-8 pb-8 pt-6 px-2">
            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-3xl font-bold text-white p-2 md:py-6 pb-4"><span className="text-[#d13d5e]">Earn Rewards </span> By <br/>Sharing Your Opinion &<br/> Exploring New Apps</h1>  
                <p className="text-indigo-300 text-lg font-medium pb-4">Earn money by testing apps, games and taking surveys. Earn up to <span className="text-white">$50.40 </span>per offer 494 available offers now. Get started today!</p>
            </div>
            <div className="md:w-1/2 w-full">
            <div className="reviews">
              <p className="text-white">See our reviews on</p>
              <img src={trustpilot} alt="reviewsIcon" />
              </div>
            <div className="p-4 sm:p-6 md:p-6 bg-gray-700 rounded-lg shadow-md signup-form">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Sign in for free</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

      <div className="text-left">
         {/* <input 
          type="email" 
          placeholder="Email address" 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white" 
          value={formData?.email}
          onChange={(e) => setFormData({...formData, email: [e.target.value]})}
        />  */}
        <input 
          type="text" 
          name="userName"
          placeholder="Username" 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white mb-2" 
          value={formData?.userName}
          onChange={(e) => setFormData({...formData, userName: [e.target.value]})}
        />
        <input 
          type="password" 
          name="password "
          placeholder="Password" 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white" 
          value={formData?.password}
          onChange={(e) => setFormData({...formData, password: [e.target.value]})}
        />
        </div>
        <button type="submit" className="w-full bg-[#d13d5e] hover:bg-[#00b368] text-white px-3 py-2 rounded-md">
          Start earning now
        </button>
      </form>
      <div className="flex justify-between items-center pt-1">
        <div className="flex justify-start items-center gap-1"> <input type="checkbox" id="rembPass" name="rembPass" />
          <label for="rembPass" className="text-gray-400">Remember me</label></div>
        <Link to='/' className="text-gray-400">Forgot password?</Link>
      </div>
      <div className="my-4 text-center text-gray-300 text-sm flex justify-between items-center gap-2"><div className="to-right-line"></div><span>OR SIGN IN WITH</span><div className="to-left-line"></div></div>
      <div className="flex gap-2 justify-center">
        {/* <button variant="outline" className="w-full bg-red-500 text-white hover:bg-red-700 mb-4">
            <FcGoogle className="w-5 h-5 mr-2" />
        </button> */}
        <div className="cursor-pointer">
            <FcGoogle className="w-6 h-6 mr-2" />
        </div>
        <div className="cursor-pointer">
        <FaFacebook className="w-6 h-6 mr-2 text-white" /> 
        </div>
        {/* <button variant="outline" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            <FaFacebook className="w-5 h-5 mr-2" /> 
        </button> */}
      </div>
      <div className="pt-2 account-btn">
        <p>Don't have an acount yet? <Link to='/signup'>Register Now</Link></p>
      </div>
      <p className="text-gray-400 text-sm mt-2 font-bold">
        1264+ sign ups in the past 24 hours
      </p>
            </div>
            </div>
            </div>
            <div className="offer-demo">
              <div className="container mx-auto flex md:flex-row flex-col p-4 items-center justify-between py-8 bg-slate-900 rounded-md xl:gap-14 lg:gap-4 gap-4">
              <div className="md:w-1/3 w-full border border-gray-700 rounded-md p-4 flex justify-start items-center gap-5">
              <div className="offer-img">
                <img src={netflix} alt="Netflix" className="object-cover rounded-md" width={100}/>
                </div>
                <div className="text-left">
                  <h5 className="text-xl font-bold text-white">Netflix</h5>
                  <p className="text-indigo-300 text-lg font-medium">start a free trial</p>
                  <div>
                  <p className="text-xl font-bold text-white pb-2">$5.00</p>
                  </div>
                  </div>
              </div>
              <div className="md:w-1/3 w-full bg-[#192642] rounded-md p-4 flex justify-start items-center gap-5">
              <div className="offer-img">
              <img src={netflix} alt="Netflix" className="object-cover rounded-md" width={100}/>
              </div>
                <div className="text-left">
                  <h5 className="text-xl font-bold text-white">Netflix</h5>
                  <p className="text-indigo-300 text-lg font-medium">start a free trial</p>
                  <div>
                  <p className="text-xl font-bold text-white pb-2">$5.00</p>
                  </div>
                  </div>
              </div>
              <div className="md:w-1/3 w-full border border-gray-700 rounded-md p-4 flex justify-start items-center gap-5">
              <div className="offer-img">
              <img src={netflix} alt="Netflix" className="object-cover rounded-md" width={100}/>
              </div>
                <div className="text-left">
                  <h5 className="text-xl font-bold text-white">Netflix</h5>
                  <p className="text-indigo-300 text-lg font-medium">start a free trial</p>
                  <div>
                  <p className="text-xl font-bold text-white pb-2">$5.00</p>
                  </div>
                  </div>
              </div>
              </div>
            </div>
        </div>
        <Howitwork />
        <Waystoearn />
        <Features />
        <Usercashedout />
        {/* <Faq /> */}
       
    </div>
  );
}

export default Home;