import { useState } from "react";
import Header from "../../components/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import netflix from "../../assest/images/netflixx.png";
import Footer from "../../components/Footer";

const Home = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <div>
        <Header />
        <div className="bg-slate-800">
            <div className="container mx-auto flex p-4 items-center py-8 pb-20 pt-14">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold text-white p-2 py-6"><span className="text-[#d13d5e]">Get paid </span> for testing apps,<br/> games & surveys</h1>
                <p className="text-indigo-300 text-lg font-medium">Earn money by testing apps, games and taking surveys. Earn up to <span className="text-white">$50.40 </span>per offer 494 available offers now. Get started today!</p>
            </div>
            <div className="w-1/2">
            <div className="p-4 sm:p-6 md:p-6 bg-gray-700 rounded-lg shadow-md signup-form">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-100">Sign up for free</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-left">
        <input 
          type="email" 
          placeholder="Email address" 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#252837] border-gray-700 text-white" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <button type="submit" className="w-full bg-[#d13d5e] hover:bg-[#00b368] text-white px-3 py-2 rounded-md">
          Start earning now
        </button>
      </form>
      <div className="my-4 text-center text-gray-300 text-sm flex justify-between items-center gap-2"><div className="to-right-line"></div><span>OR SIGN UP WITH</span><div className="to-left-line"></div></div>
      <div className="flex gap-2 justify-center">
        {/* <button variant="outline" className="w-full bg-red-500 text-white hover:bg-red-700 mb-4">
            <FcGoogle className="w-5 h-5 mr-2" />
        </button> */}
        <div className="">
            <FcGoogle className="w-8 h-8 mr-2" />
        </div>
        <div className="">
        <FaFacebook className="w-8 h-8 mr-2 text-white" /> 
        </div>
        {/* <button variant="outline" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            <FaFacebook className="w-5 h-5 mr-2" /> 
        </button> */}
      </div>
      <p className="text-gray-400 text-sm mt-4 font-bold">
        1264+ sign ups in the past 24 hours
      </p>
            </div>
            </div>
            </div>
            <div className="container mx-auto flex p-4 items-center justify-between py-8 bg-slate-900 rounded-md gap-14">
            <div className="w-1/3 border border-gray-700 rounded-md p-4 flex justify-between items-center">
               <img src={netflix} alt="Netflix" className="object-cover rounded-md" width={100}/>
               <div className="text-left">
                <h5 className="text-xl font-bold text-white">Netflix</h5>
                <p className="text-indigo-300 text-lg font-medium">start a free trial</p>
                <div>
                <p className="text-xl font-bold text-white pb-2">$5.00</p>
                </div>
                </div>
            </div>
            <div className="w-1/3 bg-[#d93156] rounded-md p-4 p-4 flex justify-between items-center">
            <img src={netflix} alt="Netflix" className="object-cover rounded-md" width={100}/>
               <div className="text-left">
                <h5 className="text-xl font-bold text-white">Netflix</h5>
                <p className="text-indigo-300 text-lg font-medium">start a free trial</p>
                <div>
                <p className="text-xl font-bold text-white pb-2">$5.00</p>
                </div>
                </div>
            </div>
            <div className="w-1/3 border border-gray-700 rounded-md p-4 p-4 flex justify-between items-center">
            <img src={netflix} alt="Netflix" className="object-cover rounded-md" width={100}/>
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
        <Footer />
    </div>
  );
}

export default Home;