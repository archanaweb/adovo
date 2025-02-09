
import './dashboard.css'
import { IoPlay } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoWallet } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import referimg from '../../../assest/images/referalimg2.png'
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";
import avatar from '../../../assest/images/user.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OfferModal from '../../../components/userDdashboard/OfferModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotalReferEarning, fetchTotalReferl, generateReferralCode } from '../../../../redux/user/referralSlice';
import { fetchTotalAmount, fetchTotalEarning, fetchTotalPoint } from '../../../../redux/user/walletSlice';
import { fetchCompletedOffer, fetchOfferDetail, fetchOfferList, setSelectedDevice } from '../../../../redux/user/offerSlice';
import { GiTakeMyMoney } from "react-icons/gi";
import { fetchSurveyList } from '../../../../redux/user/surveySlice';
import parnerData from './data.js'
import FooterDashboard from '../../../components/userDdashboard/Footer.jsx';
import { useToggleUSD } from '../../../../context/ToggleUSDContext.js';
import { fetchUserLiveMessages } from '../../../../redux/user/userSlice.js';
const UserDashboard = () => {
    const deviceName = localStorage.getItem('selectedDevice')
    const [offerData, setOfferData] = useState([])  
    const [checkedDevices, setCheckedDevices] = useState({
        android: false,
        ios: false,
        desktop: false,
      });
    const {isUSDChecked, handleUDSChange} = useToggleUSD();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const surveyColors = ['#FF6633', '#924c35', '#FF33FF', '#878748', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#4c894c', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
    const offerList = useSelector(state => state.offer.offerList)
    const filteredOfferList = useSelector(state => state.offer.deviceFilterOfferList)
    const liveMessages = useSelector(state => state.user.messageList)
    const surveyList = useSelector(state => state.survey.surveyList)
    const [offerId, setOfferId] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const totalReferal = useSelector((state)=> state?.referal?.totalRef)
    const totalReferaEarning = useSelector((state)=> state?.referal?.referEarnings)
    const totalPoint= useSelector((state)=> state?.wallet?.totalPoint)
    const totalAmount= useSelector((state)=> state?.wallet?.totalAmount)
    const totalEarning= useSelector((state)=> state?.wallet?.totalEarning)
    const totalCompletedOffer= useSelector((state)=> state?.offer?.completedOffer)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [referralCode, setReferralCode] = useState(false)
    const handleClick = (id)=> {
        setIsOpenModal(!isOpenModal)
        setOfferId(id)
    }
    const handleFilterData = (deviceName) => {
        // const filterDeviceOffer = offerList.filter((item)=> item?.offer_type.toLowerCase() !== 'survey');
        const filteredData = offerList.filter((item) => item.devices.toLowerCase().includes(deviceName.toLowerCase()));
        if (checkedDevices.android || checkedDevices.ios || checkedDevices.desktop) {
            setOfferData(filteredData);
        } else {
            setOfferData(offerList);
        }
    };
    const handleCheckboxChange = (e) => {
        dispatch(setSelectedDevice(e.target.value));
        const { id, checked } = e.target;
        setCheckedDevices((prevState) => {
          const updatedState = { ...prevState, [id]: checked }
          let selectedDevice = 'All';
        if (updatedState.android && updatedState.ios) {
            selectedDevice = 'Android|iPhone|iPad';
        } else if (updatedState.android) {
            selectedDevice = 'Android';
        } else if (updatedState.ios) {
            selectedDevice = 'iPhone|iPad';
        }
        localStorage.setItem('selectedDevice', selectedDevice);
        handleFilterData(selectedDevice); 
        return updatedState;
        });
      };
    const generateCode = async()=> {
        const res = await dispatch(generateReferralCode({userId:auth.id, formData: {userId:auth.id}}))
        const resData = res.payload;
        if(resData?.responseCode === 200){
            setReferralCode(resData?.referralCode)
        }
    }

    const handlePartnerIframe = (url) => {
        console.log(url)
    }

    const fetchOffer = async (pageno) => {
        const res = await dispatch(fetchOfferList(pageno))
        const resData = await res.payload;
        if(resData?.responseCode === 200){
            setTotalPages(resData?.totalPages)
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
    },[])
    useEffect(() => {
        dispatch(fetchOfferList(currentPage))
        fetchOffer(currentPage)
        dispatch(fetchSurveyList())
        dispatch(fetchUserLiveMessages())
        dispatch(fetchCompletedOffer(auth.id))
        dispatch(fetchTotalReferEarning(auth.id))
        dispatch(fetchTotalEarning(auth.id))
    }, []);
    useEffect(() => {
        setOfferData(offerList)
    }, [offerList]);
    useEffect(() => {
        if(checkedDevices.android){
            handleFilterData('Android')
        }else if(checkedDevices.ios){
            handleFilterData('iPhone|iPad')
        }else{
            handleFilterData('All')
        }
    }, [checkedDevices]);
    return (
        <>
        <div className='liveMessage'>
                <div className='liveMessageWrapper'>
                <Swiper
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }} 
                className="chatSwiper">
                    {liveMessages?.map((item, index)=> <SwiperSlide key={item?._id}><div className='liveMessageItem'>
                        <img src={avatar} alt='userImg' />
                        <div className='liveMessageContent'>
                            <div className='flex justify-start items-start flex-col'>
                            <p>{item?.userName}</p>
                            <span>Cashout</span>
                            </div>
                            <p className='amount'>{item?.message}</p>
                        </div>
                    </div></SwiperSlide>)}
                </Swiper>
                </div>
            </div>
        <div className='md:p-4 p-2 md:block hidden'>
            <div className='dashboard-top flex justify-between items-center pb-2'>
            <div>
            <div className="setDevice flex gap-4 items-center">
            <h5 className='md:text-xl text-xl text-white text-left md:font-medium font-medium'>Device</h5>
                <form className='flex gap-4'>
                    <div className="form-group">
                    <input
                        type="checkbox"
                        id="android"
                        value="Android"
                        checked={checkedDevices.android}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="android">Android</label>
                    </div>
                    <div className="form-group">
                    <input
                        type="checkbox"
                        id="ios"
                        value="iPhone|iPad"
                        checked={checkedDevices.ios}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="ios">iOS</label>
                    </div>
                    <div className="form-group">
                    <input
                        type="checkbox"
                        id="desktop"
                        value="ALL"
                        checked={checkedDevices.desktop}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="desktop">Desktop</label>
                    </div>
                </form>
                </div>
            </div>
            <div className='md:flex justify-end items-center gap-2 showUSD hidden'>
            <p>Show USD</p>
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
                <div className='total-earning md:p-4 p-3'>
                <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Earnings</h5>
                    <div className='flex gap-6 md:flex-row flex-col'>
                        <div className='earning-wrapper flex justify-between gap-4 flex-col md:w-1/2 w-full'>
                            <div className='flex gap-4 justify-between'>
                                <div className='item flex justify-start items-center md:gap-4 gap-2'>
                                    <div className='icon'><IoWallet /></div>
                                    <div className='content text-gray-200 text-left'>
                                        <h5 className='md:text-2xl text-xl font-bold text-white'>{isUSDChecked? `$${totalEarning}` : totalEarning*100 }</h5>
                                        <p className='text-sm text-gray-300'>Total Earnings</p>
                                    </div>
                                </div>
                                <div className='item flex justify-start items-center  md:gap-4 gap-2'>
                                    <div className='icon'><MdFactCheck /></div>
                                    <div className='content text-gray-200 text-left'>
                                        <h5 className='md:text-2xl text-xl font-bold text-white'>{totalCompletedOffer ? totalCompletedOffer : `0`}</h5>
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
                                    <h5 className='md:text-2xl text-xl font-bold text-white'>{totalReferaEarning ? `$${totalReferaEarning}` : `$0`}</h5>
                                    <p className='text-sm text-gray-300'>Referred earning</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            <div className='refer-user bg-white rounded-md p-4 text-left'>
                               
                                <h5 className='text-xl text-gray-100'>Your referral link</h5>
                                <div>
                                    {/* <p className='text-gray-200'>Share your referral link to your friends, and get {totalPoint} points.</p> */}
                                    <p className='text-gray-200'>Share your referral link to your friends, and get 10% of their lifetime in rewards.</p>
                                    <img src={referimg} alt='referimg' />
                                </div>
                                <Link to={`/subuser/signup/${referralCode}`} className='cursor-pointer' target='_blank'><input className='cursor-pointer' value={`https://coinlooty.com/${referralCode}`} readOnly /></Link>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className='offers-box md:p-6 p-4'>
                    <div className='sec-topHeading'>
                    <h5 className='md:text-2xl text-xl text-white text-left md:font-bold font-medium'>Featured Offers</h5>
                    <Link to='/alloffers' className='text-white text-sm font-medium'>View All</Link>
                    </div>
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
                        {offerData?.map((item, index)=> <SwiperSlide key={item?._id}>
                <div className='item' onClick={()=> handleClick(item?.id)}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />       
                                </div>
                                <p>Start Offer</p>
                            </div>
                            <div className='offer-img'>
                            <img src={item?.offer_image} alt='offerimg' />
                            </div>
                            <div className='device-icon'>
                                {item?.devices === 'All' ? <> <BsAndroid2 className='' />
                                <FaApple className='' />
                                <IoIosDesktop className='' /></> : item?.devices === 'Android' ? <BsAndroid2 className='' /> : item?.devices === 'iPhone|iPad' ? <FaApple className='' /> : <IoIosDesktop className='' />}
                            </div>
                            <div className='offer-content'>
                                <p>{item?.offer}</p>
                                <span>{item?.categories}</span>
                                <p className='offer-price'>
                                    ${item?.payout}
                                </p>
                                <div className='text-left flex justify-between items-center'>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>)}
                </Swiper>
                    
                </div>

                <div className='survey-box md:p-6 p-4'>
                <div className='sec-topHeading'>
                    <h5 className='md:text-2xl text-xl text-white text-left md:font-bold font-medium'>Featured Survey</h5>
                    <Link to='/allsurveys' className='text-white text-sm font-medium'>View All</Link>
                    </div>
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
                        {surveyList?.map((item, index)=> <SwiperSlide key={item?._id}>
                <div className='item'>
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
                                <p className='survey_name'>Live Survey</p>
                                <div className='text-left'>
                                <span>{item?.loi} min</span>
                                <p className='offer-price pt-2'>
                                    ${item?.cpi}
                                </p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>)}
                </Swiper>
                </div>
                <div className='md:p-6 p-4 offerWall'>
                <div className='survey-partner-box'>
                <h5 className='md:text-2xl text-xl text-white text-left md:pb-6 pb-4 md:font-bold font-medium'>Offer Partners</h5>
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
                    navigation={true} modules={[Navigation]} className="partnerSwiper spItem-wrapper flex gap-4">
                         {parnerData?.partners.map((item, index)=> <SwiperSlide key={item?.id}>
                        <div className='item'>
                       <div className='spItem flex justify-between items-center gap-4 flex-col' >
                       <Link to={`/survey/${item?.id}`}>
                            <div className='offer-hover'>
                                <div className='offer-start-icon'>
                                    <IoPlay />       
                                </div>
                                <p>Start Offer</p>
                            </div>
                            </Link>
                                <img src={item?.image} alt='partnerimg'/>
                                <div className='flex flex-col items-center gap-2 w-full'>
                                    <p>{item?.name}</p>
                                    <span className='flex justify-center items-center gap-1'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                                </div>
                        </div>
                            </div>
                            </SwiperSlide> )}
                    </Swiper>
                </div>
                </div>
                <FooterDashboard />
            <OfferModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} id={offerId}/>
        </>
    )
}
export default UserDashboard