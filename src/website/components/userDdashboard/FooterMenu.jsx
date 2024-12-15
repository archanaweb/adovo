import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdVideogameAsset } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const FooterMenu = ()=> {
    const [activeMenu, setActiveMenu] = useState('earn')
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
      };
      const navigate = useNavigate()
      const handleLogout = () => {
        localStorage.removeItem('opinionUser')
        toast.success('User logout successfully!')
        navigate('/')
      }
    return (
        <>
        <div className="footer-menu bg-gray-900 md:py-2 p-2">
            <div className="menu-items">
                <ul>
                    <li onClick={()=> handleMenuClick('earn')} className={activeMenu === 'earn' ? 'active' : ''}><Link to='/dashboard'><button><span className="menu-icon"><RiMoneyDollarCircleFill /></span>Earn</button></Link></li>
                    <li onClick={()=> handleMenuClick('offers')} className={activeMenu === 'offers' ? 'active' : ''}><Link to='/alloffers'><button> <span className="menu-icon"><MdVideogameAsset /></span>Offers</button></Link></li>
                    <li onClick={()=> handleMenuClick('cashout')} className={activeMenu === 'cashout' ? 'active' : ''}><Link to='/cashout'><button> <span className="menu-icon"><PiHandWithdrawFill /></span>Cashout</button></Link></li>
                    <li onClick={()=> handleMenuClick('rewards')} className={activeMenu === 'rewards' ? 'active' : ''}><Link to='/rewards'><button> <span className="menu-icon"><FaAward /></span>Rewards</button></Link></li>
                </ul>
            </div>

            {/* <div className="menu-items">
                <ul>
                    <li onClick={()=> handleMenuClick('surveys')} className={activeMenu === 'surveys' ? 'active' : ''}><Link to='/alloffers'><button> <span className="menu-icon"><IoDocumentText /></span>Surveys</button></Link></li>
                    <li onClick={()=> handleMenuClick('leaderboard')} className={activeMenu === 'leaderboard' ? 'active' : ''}><Link to='/leaderboard'><button> <span className="menu-icon"><FaAward /></span>Leaderboard</button></Link></li>
                    <li onClick={()=> handleMenuClick('affiliates')} className={activeMenu === 'affiliates' ? 'active' : ''}><Link to='/affiliates'><button> <span className="menu-icon"><FaUsers /></span>Affiliates</button></Link></li>
                    <li onClick={handleLogout}><button><span className="menu-icon"><TbLogout /></span>Logout</button></li>
                </ul>
            </div> */}

        </div>
        </>
    )
}
export default FooterMenu