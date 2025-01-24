
import '../dashboard/dashboard.css'
import { IoPlay } from "react-icons/io5";
import OfferModal from '../../../components/userDdashboard/OfferModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfferList } from '../../../../redux/user/offerSlice';
const AllOffers = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const offerList = useSelector(state => state.offer.offerList)
    const [offerId, setOfferId] = useState(null)
    const dispatch = useDispatch()
    const handleClick = (id)=> {
        setIsOpenModal(!isOpenModal)
        setOfferId(id)
    }
    useEffect(() => {
        dispatch(fetchOfferList())
    }, [])
    return (
        <>
        <div className='offers-box mb-12 md:p-6 p-4'>
                    <h5 className='text-2xl text-white text-left pb-6 font-bold'>All Offers</h5>
                   <div className="flex gap-4 items-wrapper flex-wrap">
                {offerList?.map((item)=> 
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
            </div>) }
                        </div>
                    
                </div>
                <OfferModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} id={offerId}/>
        </>
    )
}
export default AllOffers