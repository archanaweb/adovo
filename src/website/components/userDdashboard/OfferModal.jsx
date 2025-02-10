import { IoStar } from 'react-icons/io5'
import { IoPlay } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOfferDetail } from '../../../redux/user/offerSlice';
import { IoCloseSharp } from "react-icons/io5";
const OfferModal = ({isOpenModal,setIsOpenModal, id})=> {
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const offerDetail = useSelector(state => state.offer.offerDetail)
    const dispatch = useDispatch()
    const haldleCloseModal = (e)=> {
        setIsOpenModal(false)
    }
    useEffect(() => {
        dispatch(fetchOfferDetail(id))
    }, [id])
    return (
        <>
        <div className={`offermodal modal ${isOpenModal ? 'show-modal' : ''}`}>
            <div className="modal-content">
                <div className='offerDetailContent'>
            <div className='flex justify-between items-center border-b border-[#28354c] pb-3'>
                <h5 className='text-xl text-white'>Start Offer</h5>
                <span className="close-button" onClick={haldleCloseModal}><IoCloseSharp /></span>
            </div>
            <div className="pt-4">
                <h5 className='offer-name text-2xl text-gray-100 font-bold text-left pb-2'>{offerDetail?.offer}</h5>
                <div className='rounded-md border border-[#242e40] overflow-hidden offerDetailImg mb-2'>
                    <img className='offerImg' src={offerDetail?.offer_image} alt='offerimg' width={300} />
                </div>
                <div className='flex flex-col gap-2 text-left offerdesc'>
                    <p className='text-[#ffc75a] text-2xl font-bold'>${offerDetail?.payout}</p>
                    {/* <p className='offer-rating'><span className='flex justify-start items-center gap-1'><IoStar className='text-[#fcba06]' /><IoStar className='text-[#fcba06]'/><IoStar className='text-[#fcba06]'/><IoStar className='text-[#fcba06]' /><IoStar className='text-[#fcba06]' /></span></p> */}
                    <div className='offerEvents'>
                        <h5 className='text-sm text-white font-bold pb-2'>Rewards</h5>
                        <ul>
                            {offerDetail?.events?.map((item)=> 
                                <li key={item?.event_name}><p>{item?.event_name}</p><span className=''>${item?.payout}</span></li>
                            )}
                            </ul>
                    </div>
                    <div className='offerDecs'>
                        <h5 className='text-sm text-white font-bold pb-2'>Description</h5>
                        <p className='text-[#c3c3c3]'>{offerDetail?.offer_desc}</p>
                    </div>
                    <Link target="_blank" className='bg-[#d13d5e] p-4 text-center text-white flex gap-2 justify-center items-center rounded-md' to={`https://api.coinlooty.com/tracking/click?sid=${auth?.id}&o=${id}`}><IoPlay /> <span>Play & Earn ${offerDetail?.payout}</span></Link>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OfferModal