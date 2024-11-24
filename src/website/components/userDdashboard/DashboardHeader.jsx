
import logo from '../../assest/images/freecash-logo.png';
import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const DashboardHeader = ()=> {
    return (
        <>
        <header className="user-header bg-gray-900 md:py-2 p-2">
        <div className="container-fluid mx-auto flex justify-between items-center">
    <div className="top-wrapper flex md:gap-8 gap-4 justify-between items-center">
        <div className="logo">
            <img src={logo} alt="Website Logo" width={150} />
        </div>
        <div className='header-right'>
            <div className='user-balance'>
                <p>Balance:<span>$0.05</span></p>
            </div>
            <button className='iconbtn'><GoBellFill /></button>
            <div className='userProfile'>
                <p>A</p>
                <div className='flex flex-col justify-start items-start'>
                    <h5>Archana Thakur</h5>
                    <span>User</span>
                </div>
                <div className='dropdown'>
                    <IoIosArrowDown />
                </div>
            </div>

        </div>
        </div>
        </div>

        </header>
        </>
    )
}
export default DashboardHeader