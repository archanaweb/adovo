import { IoStar } from 'react-icons/io5'
import { IoPlay } from "react-icons/io5";
import gameimg from '../../assest/images/userdashboardimg/game1.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOfferDetail } from '../../../redux/user/offerSlice';
const OfferModal = ({isOpenModal,setIsOpenModal, id})=> {
    const offerDetail = useSelector(state => state.offer.offerDetail)
    const dispatch = useDispatch()
    const haldleCloseModal = (e)=> {
        setIsOpenModal(false)
    }
    useEffect(() => {
        dispatch(fetchOfferDetail(id))
        console.log("offerdetail",offerDetail)
    }, [id])
    return (
        <>
        <div className={`offermodal modal ${isOpenModal ? 'show-modal' : ''}`}>
            <div className="modal-content">
            <div className='flex justify-between items-center border-b border-[#28354c] pb-3'>
                <h5 className='text-xl text-white'>Start Offer</h5>
                <span className="close-button" onClick={haldleCloseModal}>×</span>
                </div>
                <div className="flex md:gap-6 pt-4 md:flex-row flex-col gap-2">
                <div className='rounded-md border border-[#242e40] overflow-hidden'>
                    <img src={offerDetail?.offer_image} alt='offerimg' width={300} />
                </div>
                <div className='flex flex-col gap-2 text-left'>
                    <h5 className='offer-name text-3xl text-gray-100'>{offerDetail?.offer}</h5>
                    <p className=' text-[#24a947] text-2xl'>${offerDetail?.payout}</p>
                    <p className='offer-rating'><span className='flex justify-start items-center gap-1'><IoStar className='text-[#fcba06]' /><IoStar className='text-[#fcba06]'/><IoStar className='text-[#fcba06]'/><IoStar className='text-[#fcba06]' /><IoStar className='text-[#fcba06]' /></span></p>
                    <p className='text-[#c3c3c3]'>{offerDetail?.desc}</p>
                    <Link className='bg-[#d13d5e] p-4 text-center text-white flex gap-2 justify-center items-center rounded-md'><IoPlay /> <span>Play & Earn ${offerDetail?.payout}</span></Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OfferModal