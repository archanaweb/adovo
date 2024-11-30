
import logo from '../../assest/images/freecash-logo.png';
import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const DashboardHeader = ()=> {
    return (
        <>
        <header className="user-header bg-gray-900 md:py-2 p-2">
        <div className="container-fluid mx-auto flex justify-between items-center">
    <div className="top-wrapper flex md:gap-8 gap-4 justify-between items-center">
        <div className="logo">
            <Link to='/dashboard'><img src={logo} alt="Website Logo" width={150} /></Link>
        </div>
        <div className='header-right'>
            <div className='user-balance'>
                <p>Balance:<span>$0.05</span></p>
            </div>
            <button className='iconbtn'><GoBellFill /></button>
            <Link to='/userprofile'>
            <div className='userProfile'>
                <p>A</p>
                <div className='flex flex-col justify-start items-start md:block hidden'>
                    <h5>Archana Thakur</h5>
                    <span>User</span>
                </div>
                {/* <div className='dropdown'>
                    <IoIosArrowDown />
                </div> */}
            </div>
            </Link>

        </div>
        </div>
        </div>

        </header>
        </>
    )
}
export default DashboardHeader