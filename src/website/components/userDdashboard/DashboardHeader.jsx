
import logo from '../../assest/images/freecash-logo.png';
import { GoBellFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { fetchTotalAmount } from '../../../redux/user/walletSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUserDetails } from '../../../redux/user/userSlice';

const DashboardHeader = ()=> {
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
    <div className="top-wrapper flex md:gap-8 gap-4 justify-between items-center">
        <div className="logo">
            <Link to='/dashboard'><img src={logo} alt="Website Logo" width={150} /></Link>
        </div>
        <div className='header-right'>
            <div className='user-balance'>
                <p>Balance:<span>${totalAmount}</span></p>
            </div>
            <button className='iconbtn'><GoBellFill /></button>
            <Link to='/userprofile'>
            <div className='userProfile'>
                {!userDetails?.image ? <p>{name ? name[0] : ''}</p> :
                <img src={userDetails?.image} alt='profileImg'/>}
                <div className='md:block hidden'>
                <div className='flex flex-col justify-start items-start'>
                    <h5>{userDetails?.firstName} {userDetails?.lastName}</h5>
                    <span>User</span>
                    </div>
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