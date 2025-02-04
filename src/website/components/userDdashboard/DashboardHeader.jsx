
import logo from '../../assest/images/logo.png';
import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { fetchTotalAmount } from '../../../redux/user/walletSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserDetails } from '../../../redux/user/userSlice';
import doller from '../../assest/images/dollar.png'
import bell from '../../assest/images/bell.png'
import { useToggleUSD } from '../../../context/ToggleUSDContext';

const DashboardHeader = ()=> {
    const {isUSDChecked, handleUDSChange} = useToggleUSD()
    const [name, setName]  = useState('')
    const dispatch = useDispatch()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const totalAmount= useSelector((state)=> state?.wallet?.totalAmount)
    const userDetails = useSelector((state)=> state.user.detail)

    useEffect(()=> {
           dispatch(fetchTotalAmount(auth.id))
           dispatch(fetchUserDetails(auth.id))
        },[])
    useEffect(()=> {
        const nameCaptilize = userDetails?.firstName.toUpperCase()
        setName(nameCaptilize)
        },[userDetails])
    return (
        <>
        <header className="user-header bg-gray-900 md:py-2 p-2">
        <div className="container-fluid mx-auto flex justify-between items-center">
    <div className="top-wrapper md:gap-8 gap-4 justify-between items-center hidden md:flex desktopHeader">
        <div className="logo">
            <Link to='/dashboard'><img src={logo} alt="Website Logo" width={150} /></Link>
        </div>
        <div className='header-right'>
            <div className='user-balance'>
                    <img src={doller} alt='coin'/>
                    <p><span>{isUSDChecked? `$${totalAmount}` : totalAmount*100 }</span></p>
                {/* <p>Balance:<span>${totalAmount}</span></p> */}
            </div>
            <button className='iconbtn'><img src={bell} alt='bell' /></button>
            <Link to='/userprofile'>
            <div className='userProfile'>
                {!userDetails?.image ? <p>{name ? name[0] : ''}</p> :
                <img src={userDetails?.image} alt='profileImg'/>}
                <div className='md:block hidden'>
                <div className='flex flex-col justify-start items-start'>
                    <h5>{userDetails?.firstName} {userDetails?.lastName}</h5>
                    {/* <span>User</span> */}
                    </div>
                </div>
                {/* <div className='dropdown'>
                    <IoIosArrowDown />
                </div> */}
            </div>
            </Link>

        </div>
        </div>

        <div className="top-wrapper flex md:gap-8 gap-4 justify-between items-center md:hidden mobileHeader">
            <div className='header-left header-right'>
            <Link to='/userprofile'>
            <div className='userProfile'>
                {!userDetails?.image ? <p>{name ? name[0] : ''}</p> :
                <img src={userDetails?.image} alt='profileImg'/>}
                <div className='md:block hidden'>
                <div className='flex flex-col justify-start items-start'>
                    <h5>{userDetails?.firstName} {userDetails?.lastName}</h5>
                    </div>
                </div>
            </div>
            </Link>
            <button className='iconbtn'><img src={bell} alt='bell' /></button>
            </div>
        <div className='header-right'>
            <div className='user-balance'>
                    <img src={doller} alt='coin'/>
                    <p><span>{isUSDChecked? `$${totalAmount}` : totalAmount*100 }</span></p>
            </div>
            <div className='flex justify-end items-center gap-2 showUSD'>
            <p>Show <strong>U<span>$</span>D</strong></p>
            <label className={`onoffbtn ${isUSDChecked ? "active" : ""}`}>
            <input 
                type="checkbox"
                checked={isUSDChecked}
                onChange={handleUDSChange}
            />
         </label>
         </div>
           

        </div>
        </div>
        </div>

        </header>
        </>
    )
}
export default DashboardHeader