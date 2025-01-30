import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import offer1 from "../../assest/images/dummyoffers/offer1.jpeg"
import offer2 from "../../assest/images/dummyoffers/offer2.jpeg"
import offer3 from "../../assest/images/dummyoffers/offer3.jpeg"
import trustpilot from "../../assest/images/trustpilot.png"
import BaseUrl from "../../../Api/BaseUrl";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './home.css'
import cardImg from '../../assest/images/dungeon-hunter.jpg'
import icon1 from '../../assest/images/cashout/icon _Amazon_.png'
import icon2 from '../../assest/images/cashout/icon _Bitcoin Cryptocurrency_.png'
import icon3 from '../../assest/images/cashout/icon _Visa_.png'
import icon4 from '../../assest/images/cashout/icon _apple logo_.png'
import icon5 from '../../assest/images/cashout/icon _logo google playstore_.png'
import cashoutImg from "../../assest/images/cashoutImg.png"
import userImg from "../../assest/images/reviewUser.png"
const HomeNew = () => {
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
    localStorage.setItem("opinionUser", JSON.stringify(resData.userDetails))
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
                <h1 className="md:text-4xl text-3xl font-bold text-white p-2 md:py-6 pb-4"><span className="text-[#d13d5e]">Earn Rewards </span> By <br/>Sharing Your Opinion &<br/> Exploring New Apps</h1>  
                <p className="text-white text-sm md:text-lg pb-4">Earn money by testing apps, games and taking surveys. Earn up to <span className="text-white">$50.40 </span>per offer 494 available offers now. Get started today!</p>
                <div className="bannerOffers">
                <div className="container mx-auto md:p-4 p-2">
                    <div className="flex justify-between items-center">
                        <div className="item bg-[#384152] p-3 rounded-xl">
                            <img src={offer3} alt="Netflix" className="object-cover rounded-xl" width={100}/>
                            <div className="offerContent">
                                <h5 className="md:text-lg text-sm md:font-bold font-medium text-white ">Battle Grounds</h5>
                                <p className="text-indigo-400 text-sm">Sign Up</p>
                                <p className="font-bold price">$5.00</p>
                            </div>
                        </div>
                        <div className="item bg-[#384152] p-3 rounded-xl topOffer">
                            <img src={offer1} alt="Netflix" className="object-cover rounded-xl" width={100}/>
                            <div className="offerContent">
                                <h5 className="md:text-lg text-sm md:font-bold font-medium text-white ">Candy Crush</h5>
                                <p className="text-indigo-400 text-sm">Reach level 10</p>
                                <p className="font-bold price">$5.00</p>
                            </div>
                        </div>
                        <div className="item bg-[#384152] p-3 rounded-xl">
                            <img src={offer2} alt="Netflix" className="object-cover rounded-xl" width={100}/>
                            <div className="offerContent">
                                <h5 className="md:text-lg text-sm md:font-bold font-medium text-white ">Free Fire</h5>
                                <p className="text-indigo-400 text-sm">Sign Up</p>
                                <p className="font-bold price">$5.00</p>
                            </div>
                        </div>
                        </div>
                        </div>
            </div>
            </div>
            <div className="md:w-1/2 w-full">
            <div className="reviews">
                <div className="reviewShadow">
              <img src={trustpilot} alt="reviewsIcon" />
              <p className="text-[#E0E6F2] text-sm">See our 100000 reviews on</p>
              </div>
              </div>
            <div className="p-4 sm:p-6 md:p-6 bg-gray-700 rounded-lg shadow-md signup-form">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Sign In for Free</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bannerForm">
      <div className="text-left">
        <input 
          type="text" 
          name="userName"
          placeholder="Username" 
          className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed bg-[#FFFEF8] border-gray-700 text-white mb-2" 
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
        <Link to='/forgotpassword' className="text-gray-400">Forgot password?</Link>
      </div>
      <div className="my-4 text-center text-gray-300 text-sm flex justify-between items-center gap-2"><div className="to-right-line"></div><span>OR SIGN IN WITH</span><div className="to-left-line"></div></div>
      <div className="flex gap-2 justify-center">
        <div className="cursor-pointer">
            <FcGoogle className="w-6 h-6 mr-2" />
        </div>
        <div className="cursor-pointer">
        <FaFacebook className="w-6 h-6 mr-2 text-white" /> 
        </div>
      </div>
      <div className="pt-2 account-btn">
        <p>Don't have an acount yet? <Link to='/signup'>Register Now</Link></p>
      </div>
            </div>
            </div>
            </div>
            {/* <div className="offer-demo">
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
            </div> */}
            
            </div>

            <div class="how-it-works py-5 md:pt-14 px-2">
        <div class="container mx-auto">
        <div class="sec-heading">
            <div className="heading-shadow"> 
            </div>
            <div className="relative">
                <h5>Get paid now</h5>
                <p><span>Easily done </span>in minutes!</p>
                </div>
        </div>
        <div class="steps-sec">
            <div class="items">
                <div>
                    <h5>1. Select an offer</h5>
                    <p>Explore exciting tasks on our 'Earn' page! Discover top offers from leading companies showcasing their apps, surveys, and products.</p>
                </div>
                <div class="img">
                    <img src={cardImg} alt='gameImg' />
                </div>
            </div>
            <div class="items">
                <div>
                    <h5>2. Complete the offer</h5>
                    <p>Our offers are straightforward and have already empowered thousands to earn money. Many can be completed in just a few minutes, making earning quick and convenient for you!</p>
                </div>
                <div class="img">
                    <img src={cardImg} alt='gameImg' />
                </div>
            </div>
            <div class="items">
                <div>
                    <h5>3. Get paid</h5>
                    <p>After finishing each task, you'll be rewarded with coins, where 1000 coins translate to $1.00. Simply redeem your coins to access your free reward!</p>
                </div>
                <div class="img">
                    <img src={cardImg} alt='gameImg' />
                </div>
            </div>
        </div>
        <div class="explore-btn">
            <button>Start earning now</button>
        </div>
        </div>
            </div>
                <div className="casoutSS">
                <div className="bg-shadows">
                </div>
                <div className="cashoutVia py-5 md:px-4 px-2">
            <div class="container mx-auto">
                
            <div class="sec-heading">
                <div className="relative">
                    <h5>Cashout via</h5>
                </div>
            </div>
            <div class="cashout-items">
                <div class="items">
                    <img src={icon1} alt="cashoutIcon"/>
                </div>
                <div class="items">
                    <img src={icon2} alt="cashoutIcon"/>
                </div>
                <div class="items">
                    <img src={icon3} alt="cashoutIcon"/>
                </div>
                <div class="items">
                    <img src={icon4} alt="cashoutIcon"/>
                </div>
                <div class="items">
                    <img src={icon5} alt="cashoutIcon"/>
                </div>

            </div>

            </div>
            </div>
                </div>
            

            <div class="cashoutSec py-5 md:pt-14 px-2">
        <div class="container mx-auto">
        <div class="cashout-wrapper">
        <div className="flex md:flex-row flex-col md:p-4 md:pt-4 pb-6 gap-2">
                    <div className="md:w-1/2 w-full">
                    <div className="flex justify-center items-center cashout-img flex-col">
                        <div className="cashoutAmount">
                            <p className="text">This Year User <span>Cashout</span></p>
                            <p className="amount">$456,786.98</p>
                        </div>
                        <img src={cashoutImg} alt="cashoutimg" />
                    </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                    <div className="relative pb-4 cashout-heading">
                        <span className="live-circle"></span>
                        <h5 className="text-white font-medium text-2xl">Live CashOuts</h5>
                    </div>
        <div className="flex justify-center items-center gap-3 flex-col">
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                                <div className="user-icon">A</div>
                                <p className="user-name">Bilal khan</p>
                            </div>
                            <span className="earn-points">$2</span>
                            <span className="cashout-time"><img src={icon1} alt="cashoutIcon"/></span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                                <div className="user-icon">A</div>
                                <p className="user-name">Bilal khan</p>
                            </div>
                            <span className="earn-points">$2</span>
                            <span className="cashout-time"><img src={icon1} alt="cashoutIcon"/></span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                                <div className="user-icon">A</div>
                                <p className="user-name">Bilal khan</p>
                            </div>
                            <span className="earn-points">$2</span>
                            <span className="cashout-time"><img src={icon1} alt="cashoutIcon"/></span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                                <div className="user-icon">A</div>
                                <p className="user-name">Bilal khan</p>
                            </div>
                            <span className="earn-points">$2</span>
                            <span className="cashout-time"><img src={icon1} alt="cashoutIcon"/></span>
                        </div>
                        <div className="user-item">
                            <div className="flex justify-start items-center md:gap-4 gap-2">
                                <div className="user-icon">A</div>
                                <p className="user-name">Bilal khan</p>
                            </div>
                            <span className="earn-points">$2</span>
                            <span className="cashout-time"><img src={icon1} alt="cashoutIcon"/></span>
                        </div>
                        </div>
                        </div>
        </div>
        </div>
        </div>
            </div>

            <div class="userTestimonialSec py-5 md:pt-14 px-2">
                <div class="container mx-auto">
                <div class="sec-heading">
            <div className="heading-shadow"> 
            </div>
            <div className="relative">
                <h5>User Testimonials</h5>
                <p>What our members say about <span>Coin Looty </span></p>
            </div>
            </div>
            <div class="testi-sec flex md:flex-row flex-col md:p-4 md:pt-4 pb-6 gap-2">
            <div class="items">
                <div class="img">
                    <img src={userImg} alt='gameImg' />
                    <div className="aboutUser">
                        <h5>Nitin Poddar </h5>
                        <span>30|01|2025</span>
                    </div>
                </div>
                <div className="content">
                    <p>"I really enjoy this site I earn quite a bit of money it has alot of offerwalls and surveys its definitely top 5 sites."</p>
                </div> 
            </div>
            <div class="items">
                <div class="img">
                    <img src={userImg} alt='gameImg' />
                    <div className="aboutUser">
                        <h5>Nitin Poddar </h5>
                        <span>30|01|2025</span>
                    </div>
                </div>
                <div className="content">
                    <p>"I really enjoy this site I earn quite a bit of money it has alot of offerwalls and surveys its definitely top 5 sites."</p>
                </div> 
            </div>
            <div class="items">
                <div class="img">
                    <img src={userImg} alt='gameImg' />
                    <div className="aboutUser">
                        <h5>Nitin Poddar </h5>
                        <span>30|01|2025</span>
                    </div>
                </div>
                <div className="content">
                    <p>"I really enjoy this site I earn quite a bit of money it has alot of offerwalls and surveys its definitely top 5 sites."</p>
                </div> 
            </div>
        </div>

                </div>
            </div>
        </div>
    )
}
export default HomeNew