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
import referimg from '../../../assest/images/referalimg2.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OfferModal from '../../../components/userDdashboard/OfferModal';
const UserDashboard = () => {
    const navigate = useNavigate()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const [isOpenModal, setIsOpenModal] = useState(false)
    const handleClick = (e)=> {
        setIsOpenModal(!isOpenModal)
    }

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
                <div className='dashboard-wrapper MD:p-6 p-4'>
                {/* <p className="text-xl text-white text-left">dashboard</p> */}
                <div className='total-earning mb-6'>
                <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Earnings</h5>
                    <div className='flex gap-6 md:flex-row flex-col'>
                        <div className='earning-wrapper flex justify-between gap-4 flex-col md:w-1/2 w-full'>
                            <div className='flex gap-4 justify-between'>
                                <div className='item flex justify-start items-center md:gap-4 gap-2'>
                                    <div className='icon'><IoWallet /></div>
                                    <div className='content text-gray-200 text-left'>
                                        <h5 className='md:text-2xl text-xl font-bold text-white'>$0.05</h5>
                                        <p className='text-sm text-gray-300'>Total Earnings</p>
                                    </div>
                                </div>
                                <div className='item flex justify-start items-center  md:gap-4 gap-2'>
                                    <div className='icon'><MdFactCheck /></div>
                                    <div className='content text-gray-200 text-left'>
                                        <h5 className='md:text-2xl text-xl font-bold text-white'>0</h5>
                                        <p className='text-sm text-gray-300'>Completed Offers</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                            <div className='item flex justify-start items-center  md:gap-4 gap-2'>
                                <div className='icon'><FaUserFriends /></div>
                                <div className='content text-gray-200 text-left'>
                                    <h5 className='md:text-2xl text-xl font-bold text-white'>0</h5>
                                    <p className='text-sm text-gray-300'>Users referred</p>
                                </div>
                            </div>
                            <div className='item flex justify-start items-center  md:gap-4 gap-2'>
                                <div className='icon'><FaUserFriends /></div>
                                <div className='content text-gray-200 text-left'>
                                    <h5 className='md:text-2xl text-xl font-bold text-white'>0</h5>
                                    <p className='text-sm text-gray-300'>Referred earning</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <div className='refer-user bg-white rounded-md p-4 text-left'>
                                <img src={referimg} alt='referimg' />
                                <h5 className='text-xl text-gray-100'>Your referral link</h5>
                                <p className='text-gray-200'>Share your referral link to your friends, and <br />    get 10 points.</p>
                                <input value='https://opiniontrue.com/r/37b8562dd17d4f2f34c8' readOnly />
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className='offers-box md:mb-12 mb-6'>
                    <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Featured Offers</h5>
                    <Swiper 
                        breakpoints={{
                            576: {
                            width: 576,
                            slidesPerView: 4,
                            },
                            768: {
                            width: 768,
                            slidesPerView: 4,
                            },
                        }}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    navigation={true} modules={[Navigation]} className="mySwiper items-wrapper flex gap-4">
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                </Swiper>
                    
                </div>

                <div className='survey-partner-box md:mb-12 mb-6'>
                <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Offer Partners</h5>
                    <div className='spItem-wrapper'>
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

                <div className='survey-partner-box md:mb-12 mb-6'>
                <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Survey Partners</h5>
                    <div className='spItem-wrapper'>
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
            <OfferModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </>
    )
}
export default UserDashboard