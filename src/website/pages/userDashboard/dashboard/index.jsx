
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotalReferl, generateReferralCode } from '../../../../redux/user/referralSlice';
import { fetchTotalAmount, fetchTotalPoint } from '../../../../redux/user/walletSlice';
import { fetchOfferDetail, fetchOfferList } from '../../../../redux/user/offerSlice';
import { GiTakeMyMoney } from "react-icons/gi";
const UserDashboard = () => {

    const surveyColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
    const offerList = useSelector(state => state.offer.offerList)
    const [offerId, setOfferId] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const totalReferal = useSelector((state)=> state?.referal?.totalRef)
    const totalPoint= useSelector((state)=> state?.wallet?.totalPoint)
    const totalAmount= useSelector((state)=> state?.wallet?.totalAmount)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [referralCode, setReferralCode] = useState(false)
    const handleClick = (id)=> {
        setIsOpenModal(!isOpenModal)
        setOfferId(id)
    }
    const generateCode = async()=> {
        const res = await dispatch(generateReferralCode({userId:auth.id, formData: {userId:auth.id}}))
        const resData = res.payload;
        if(resData?.responseCode === 200){
            setReferralCode(resData?.referralCode)
        }
    }

    useEffect(()=> {
       if(!auth){
        navigate('/')
       }
       generateCode()
       dispatch(fetchTotalReferl(auth.id))
       dispatch(fetchTotalPoint(auth.id))
       dispatch(fetchTotalAmount(auth.id))
       console.log('Dispatched fetchTotalAmount action', totalAmount);
    },[])

    const handleOfferClck = (id)=> {
        dispatch(fetchOfferDetail(id))
    }
    
    useEffect(() => {
        dispatch(fetchOfferList ())
    }, [offerList])
    return (
        <>
                <div className='total-earning mb-6'>
                <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Earnings</h5>
                    <div className='flex gap-6 md:flex-row flex-col'>
                        <div className='earning-wrapper flex justify-between gap-4 flex-col md:w-1/2 w-full'>
                            <div className='flex gap-4 justify-between'>
                                <div className='item flex justify-start items-center md:gap-4 gap-2'>
                                    <div className='icon'><IoWallet /></div>
                                    <div className='content text-gray-200 text-left'>
                                        <h5 className='md:text-2xl text-xl font-bold text-white'>${totalAmount}</h5>
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
                                    <h5 className='md:text-2xl text-xl font-bold text-white'>{totalReferal}</h5>
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
                               
                                <h5 className='text-xl text-gray-100'>Your referral link</h5>
                                <div>
                                    <p className='text-gray-200'>Share your referral link to your friends, and get {totalPoint} points.</p>
                                    <img src={referimg} alt='referimg' />
                                </div>
                                <input value={`https://opiniontrue.com/${referralCode}`} readOnly />
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
                        {offerList?.map((item, index)=> <SwiperSlide key={item?.id}>
                <div className='item' onClick={()=> handleClick(item?.id)}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />       
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <img src={item?.offer_image} alt='offerimg' />
                            <div className='offer-content'>
                                <p>{item?.offer}</p>
                                <div className='text-left flex justify-between items-center'>
                                <span>{item?.categories}</span>
                                <p className='offer-price'>
                                    ${item?.payout}
                                </p>
                                </div>
                                
                            </div>
                        </div>
                </SwiperSlide>)}
                </Swiper>
                    
                </div>

                <div className='survey-box md:mb-12 mb-6'>
                    <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Featured Survey</h5>
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
                        {offerList?.map((item, index)=> <SwiperSlide key={item?.id}>
                <div className='item' onClick={()=> handleClick(item?.id)}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />       
                                </div>
                                <p>Start Survey</p>
                            </div>
                            <div className='survey-img' style={{backgroundColor: surveyColors[index]}}>
                                {/* <img src={item?.offer_image} alt='offerimg' /> */}
                                <GiTakeMyMoney />
                            </div>
                            <div className='offer-content'>
                                <p>{item?.offer}</p>
                                <div className='text-left flex justify-between items-center'>
                                <span>{item?.categories}</span>
                                <p className='offer-price'>
                                    ${item?.payout}
                                </p>
                                </div>
                                
                            </div>
                        </div>
                </SwiperSlide>)}
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
            <OfferModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} id={offerId}/>
        </>
    )
}
export default UserDashboard