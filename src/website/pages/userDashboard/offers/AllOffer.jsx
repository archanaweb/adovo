import UserSidebar from '../../../components/userDdashboard/UserSidebar'
import '../dashboard/dashboard.css'
import gameimg from '../../../assest/images/userdashboardimg/game1.jpg'
import { IoPlay } from "react-icons/io5";
import partnerimg from '../../../assest/images/userdashboardimg/partner1.png'
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoWallet } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import referimg from '../../../assest/images/referalimg2.png'
import DashboardHeader from '../../../components/userDdashboard/DashboardHeader';
import OfferModal from '../../../components/userDdashboard/OfferModal';
import { useState } from 'react';
const AllOffers = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const handleClick = (e)=> {
        setIsOpenModal(!isOpenModal)
    }
    return (
        <>
        <div className='offers-box mb-12'>
                    <h5 className='text-2xl text-white text-left pb-6 font-bold'>All Offers</h5>
                   <div className="flex gap-4 items-wrapper flex-wrap">
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
                
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
              
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
                
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
               
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
               
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
                
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
                
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
               
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
                
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
               
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
              
                <div className='item' onClick={handleClick}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={gameimg} alt='offerimg' />
                            <div className='offer-content flex justify-between items-end'>
                                <div className='text-left'>
                                <p>Battle Night</p>
                                <span>game</span>
                                </div>
                                <p className='offer-price'>
                                    $32.14
                                </p>
                            </div>
                        </div>
                        </div>
                    
                </div>
                <OfferModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </>
    )
}
export default AllOffers