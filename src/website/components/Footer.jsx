import { Link } from "react-router-dom";
import logo from '../assest/images/logo.png';
import trustpilot from "../assest/images/trustpilot.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 pt-12 pb-4 px-6 md:px-12 border-t border-outline-variant px-4 py-8 text-center sm:px-6 lg:px-8 xl:px-10 border-gray-700">
    <div className="container mx-auto max-w-7xl text-center md:text-left">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start lg:items-start gap-8">
        {/* Logo and Ratings Section */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <Link href="/">
            <img
              src={logo}
              alt="Your Logo"
              width={200}
              height={40}
              className="cursor-pointer mb-4"
            />
          </Link>
          <p className="text-gray-400">
          Opinion True is an online rewards website for new generation where you can start earning online today and turn your opinions into Cash!
          </p>
         
        </div>

         {/* Support Section */}
         {/* <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-teal-400 transition duration-300">How does Opinion Views work?</Link></li>
              <li><Link href="/faq" className="hover:text-teal-400 transition duration-300">FAQ</Link></li>
              <li><Link href="/business" className="hover:text-teal-400 transition duration-300">Business Inquiries</Link></li>
              <li><Link href="/support" className="hover:text-teal-400 transition duration-300">Support</Link></li>
            </ul>
          </div> */}
        
        {/* Links Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-center md:text-left">
          {/* Language Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-4">Language</h3>
            <div className="flex items-center justify-center md:justify-start">
              <span className="ml-2">English</span>
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-teal-400 transition duration-300">Blog</Link></li>
              <li><Link href="/terms" className="hover:text-teal-400 transition duration-300">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-400 transition duration-300">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-teal-400 transition duration-300">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Ratings Section */}
          <div className="flex-1 flex-col items-center md:items-start">
            <div className="reviews">
              <p className="text-white">See our reviews on</p>
              <img src={trustpilot} alt="reviewsIcon" />
              </div>
            <ul className="social-icons">
              <li><Link href="/" className="hover:text-teal-400 transition duration-300"><BiLogoFacebook /></Link></li>
              <li><Link href="/" className="hover:text-teal-400 transition duration-300"><FiInstagram /></Link></li>
              <li><Link href="/" className="hover:text-teal-400 transition duration-300"><AiOutlineTwitter /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Text */}
      <div className="mt-12 pt-4 border-t border-gray-700 text-center text-sm">
        <p>Copyright © 2024 OTMR Survey (OPC) PVT LTD. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;