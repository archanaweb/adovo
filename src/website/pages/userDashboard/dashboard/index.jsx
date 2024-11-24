import DashboardHeader from '../../../components/userDdashboard/DashboardHeader'
import UserSidebar from '../../../components/userDdashboard/UserSidebar'
import './dashboard.css'
import gameimg from '../../../assest/images/userdashboardimg/game1.jpg'
import { IoPlay } from "react-icons/io5";
import partnerimg from '../../../assest/images/userdashboardimg/partner1.png'
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoWallet } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserDashboard = () => {
    const navigate = useNavigate()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    useEffect(()=> {
       if(!auth){
        navigate('/')
       }
    },[])
    return (
        <>
            <DashboardHeader />
            <div className="main flex">
                <UserSidebar />
                <div className='dashboard-wrapper p-6'>
                {/* <p className="text-xl text-white text-left">dashboard</p> */}

                <div className='total-earning mb-6'>
                    <div className='earning-wrapper flex justify-start items-center gap-4'>
                        <div className='item flex justify-start items-center gap-4'>
                            <div className='icon'><IoWallet /></div>
                            <div className='content text-gray-200 text-left'>
                                <h5 className='text-2xl font-bold text-white'>$0.05</h5>
                                <p className='text-sm text-gray-300'>Total Earnings</p>
                            </div>
                        </div>
                        <div className='item flex justify-start items-center gap-4'>
                            <div className='icon'><MdFactCheck /></div>
                            <div className='content text-gray-200 text-left'>
                                <h5 className='text-2xl font-bold text-white'>0</h5>
                                <p className='text-sm text-gray-300'>Completed Offers</p>
                            </div>
                        </div>
                        <div className='item flex justify-start items-center gap-4'>
                            <div className='icon'><FaUserFriends /></div>
                            <div className='content text-gray-200 text-left'>
                                <h5 className='text-2xl font-bold text-white'>0</h5>
                                <p className='text-sm text-gray-300'>Users referred</p>
                            </div>
                        </div>
                        <div className='item flex justify-start items-center gap-4'>
                            <div className='icon'><FaUserFriends /></div>
                            <div className='content text-gray-200 text-left'>
                                <h5 className='text-2xl font-bold text-white'>0</h5>
                                <p className='text-sm text-gray-300'>Users referred</p>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className='offers-box mb-12'>
                    <h5 className='text-2xl text-white text-left pb-6 font-bold'>Featured Offers</h5>
                    <Swiper 
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    navigation={true} modules={[Navigation]} className="mySwiper items-wrapper flex gap-4">
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                <SwiperSlide>
                <div className='item'>
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
                </SwiperSlide>
                </Swiper>
                    
                </div>

                <div className='survey-partner-box mb-12'>
                <h5 className='text-2xl text-white text-left pb-6 font-bold'>Offer Partners</h5>
                    <div className='spItem-wrapper flex justify-between gap-4'>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Offer</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Offer</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Offer</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Offer</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Offer</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Offer</button>
                        </div>
                    </div>
                </div>

                <div className='survey-partner-box mb-12'>
                <h5 className='text-2xl text-white text-left pb-6 font-bold'>Survey Partners</h5>
                    <div className='spItem-wrapper flex justify-between gap-4'>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Surveys</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Surveys</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Surveys</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Surveys</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Surveys</button>
                        </div>
                        <div className='spItem flex justify-between items-center gap-4 flex-col'>
                            <div>
                                <img src={partnerimg} alt='partnerimg'/>
                                <p>Torox</p>
                                <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                            </div>
                            <button className='w-full bg-gray-500 text-white p-2 rounded-md'>View Surveys</button>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}
export default UserDashboard