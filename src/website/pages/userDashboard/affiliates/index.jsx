import { useDispatch, useSelector } from 'react-redux'
import referimg from '../../../assest/images/referalimg2.png'
import { useEffect, useState } from 'react'
import { fetchTopReferl, generateReferralCode } from '../../../../redux/user/referralSlice'
import { fetchTotalAmount, fetchTotalPoint } from '../../../../redux/user/walletSlice'
import { IoCopy } from "react-icons/io5";
import toast from 'react-hot-toast'

const Affiliates = ()=> {
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const totalReferal = useSelector((state)=> state?.referal?.totalRef)
    const totalPoint= useSelector((state)=> state?.wallet?.totalPoint)
    const totalAmount= useSelector((state)=> state?.wallet?.totalAmount)
    const [referralCode, setReferralCode] = useState(false)
    const [tab, setTab] = useState('earning')
    const dispatch = useDispatch()

    const handleCopyText = async()=> {
        try {
            await navigator.clipboard.writeText(referralCode) 
            toast.success('Text copied!')
        } catch (error) {
            console.log('error in copy text')
            
        }
    }

     const generateCode = async()=> {
        const res = await dispatch(generateReferralCode({userId:auth.id, formData: {userId:auth.id}}))
        const resData = res.payload;
        if(resData?.responseCode === 200){
            const code = resData?.referralCode
            setReferralCode(`https://opiniontrue.com/${code}`)
        }
    }

    useEffect(()=> {
       generateCode()
       dispatch(fetchTopReferl(auth.id))
        dispatch(fetchTotalPoint(auth.id))
        dispatch(fetchTotalAmount(auth.id))
    },[])
    return (
        <>
            <div className="affiliate text-left">
                <div className="flex gap-6">
                    <div className="w-full">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Affiliates</h5>
                            <div className="statics-box mb-6">
                                <div className="item">
                                    <h4>${totalAmount}</h4>
                                    <p>Total Earnings</p>
                                    <div className="saperater"></div>
                                </div>

                                <div className="item">
                                    <h4>0</h4>
                                    <p>Completed Offers</p>
                                    <div className="saperater"></div>
                                </div>

                                 <div className="item">
                                    <h4>{totalReferal}</h4>
                                    <p>Users Referred</p>
                                    <div className="saperater"></div>
                                </div>

                                 <div className="item">
                                    <h4>0</h4>
                                    <p>Referred Earnings</p>
                                </div>

                            </div>
                            <div className="referral-box">
                                <div className='refer-user bg-white rounded-md p-4 text-left'>
                                <h5 className='text-xl text-gray-100'>Your referral link</h5>
                                <div>
                                    <p className='text-gray-200'>Share your referral link to your friends, and get {totalPoint} points.</p>
                                    <img src={referimg} alt='referimg' />
                                </div>
                                <div className='flex gap-2 justify-start items-center mt-2'>
                                    <input value={referralCode} readOnly />
                                    <IoCopy onClick={handleCopyText} />
                                </div>
                            </div>
                            </div>
                            <div className='tabs'>
                                <button 
                                    className={`tab ${tab === 'earning' ? 'active': ''}`}
                                    onClick={()=> setTab('earning')}>Earnings</button>
                                <button 
                                    className={`tab ${tab === 'withdraw' ? 'active': ''}`}
                                    onClick={()=> setTab('withdraw')}>Withdraws</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Affiliates