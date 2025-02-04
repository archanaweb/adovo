
import '../dashboard/dashboard.css'
import { IoPlay } from "react-icons/io5";
import OfferModal from '../../../components/userDdashboard/OfferModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfferList } from '../../../../redux/user/offerSlice';
import Pagination from '../../../components/userDdashboard/Pagination';
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";
const AllOffers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const offerList = useSelector(state => state.offer.offerList)
    const [filteredOffers, setFilteredOffers] = useState([]);
    const offerListLoading = useSelector(state => state.offer.loading)
    const [offerId, setOfferId] = useState(null)
    const dispatch = useDispatch()
    const handleClick = (id)=> {
        setIsOpenModal(!isOpenModal)
        setOfferId(id)
    }
    const fetchOffer = async (pageno) => {
        const res = await dispatch(fetchOfferList(pageno))
        const resData = res.payload;
        if(resData?.responseCode === 200){
            setTotalPages(resData?.totalPages) 
        }
        const newOffer = offerList.filter((item)=> item?.offer_type.toLowerCase() !== 'survey');
        setFilteredOffers(newOffer)
        console.log('newOffer',newOffer)
    }
    useEffect(() => {
        fetchOffer(currentPage)
    }, [])
    return (
        <>
        <div className='offers-box md:mb-6 mb-2 md:p-6 p-4 relative allOffersPage' >
            <h5 className='text-2xl text-white text-left pb-6 font-bold'>All Offers</h5>
            <div className="flex gap-4 items-wrapper flex-wrap">
                {/* {offerListLoading && <p className='text-white text-2xl'>Loading...</p>} */}
        {offerListLoading ? <p className='loading text-white'>Loading...</p> : filteredOffers?.map((item)=>
        <div className='item' onClick={()=> handleClick(item?.id)} key={item?.id}>
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
        ) }
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} fetchData={fetchOffer} totalPages={totalPages}/>
        </div>
        <OfferModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} id={offerId}/>
                
        </>
    )
}
export default AllOffers