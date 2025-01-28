
import { useDispatch, useSelector } from 'react-redux'
import wallet from '../../../assest/images/wallet.png'
import { fetchUserDetails } from '../../../../redux/user/userSlice'
import { useEffect, useState } from 'react'
import { fetchTotalAmount } from '../../../../redux/user/walletSlice'
import { userWithdrawAmount } from '../../../../redux/user/withdrawSlice'
import SubmitDocumentModal from '../../../components/userDdashboard/SubmitDocumentModal'

const Cashout = ()=> {
    const dispatch = useDispatch()
    const [isOpenDocumentModal, setIsOpenDocumentModal] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('')
    const [formData, setFormData] = useState({})
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const totalAmount= useSelector((state)=> state?.wallet?.totalAmount)
    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value)
        console.log('paymentValue', e.target.value)
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const hableDocumentModal = (e) => {
        setIsOpenDocumentModal(true)
    }

    const handleSubmit = async() => {
        const response = await dispatch(userWithdrawAmount({...formData, userId: auth.id}))
        console.log('withdraw response', response)
    }

    useEffect(()=> {
           dispatch(fetchTotalAmount(auth.id))
        },[])
    useEffect(()=> {
        console.log('paymentMethod', paymentMethod)
        },[paymentMethod])
    return (
        <>
            <div className="cashoutsec text-left md:p-6 p-3">
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="md:w-1/2 w-full">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Cashout</h5>
                        <p className="text-gray-200">Redeem your Opinion true earnings directly to PayPal, Amazon, Bitcoin and more! Withdraw to your crypto wallet starting at just $0.50, and to Stake starting at $0.25!</p>
                    </div>
                    <div className="dashboard-bg md:w-1/2 w-full flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src={wallet} alt="waaletimg" className='walletImg' />
                            <h5 className="text-xl text-white">Balance</h5>
                        </div>
                        <p className="wallet-balance text-[#24a947] text-xl">${totalAmount}</p>
                    </div>
                </div>
                
            </div>
            <div className=' md:p-6 p-3'>
            <div className='withdraw-amount'>
                    <div className='text-left md:mt-4 mt-2'>
                        <p className="text-gray-400">If you haven't submitted your document yet, submit the document here for the varification:</p>
                        <button className="bg-[#24a947] text-white p-2 rounded px-4 mt-2" onClick={hableDocumentModal}>Submit Document</button>
                    </div>
                    <div className="md:py-4 py-2 md:px-4 px-2 rounded shadow text-left md:mt-6 mt-2 withdrw-bg">
                        <h5 className="text-xl text-white text-left pb-4 font-bold">Withdraw Cash</h5>
                        <div className=" gap-4">
                            <div className="w-full mb-3">
                                <label className="text-gray-200">Amount</label>
                                <input type="text" className="w-full bg-gray-800 rounded p-2" placeholder="Enter Amount" name='amount' onChange={handleChange}/>
                            </div>
                            <div className="w-full mb-3">
                                <label className="text-gray-200">Select Payment Method</label>
                                <select className="w-full bg-gray-800 rounded p-2" onChange={(e)=> handlePaymentMethod(e)}>
                                    <option value=''>Select</option>
                                    <option value='paypal'>Paypal</option>
                                    <option value='paytm'>Paytm</option>
                                    <option value='upi'>UPI</option>
                                    <option value='bankAccount'>Bank Account</option>
                                </select>
                            </div>
                            <div className="w-full mb-6">
                            {paymentMethod === 'paypal' && <><label className="text-gray-200">Paypal Account</label>
                                <input type="text" className="w-full bg-gray-800 rounded p-2" placeholder="Enter Payment Details" name='paypal' onChange={handleChange}/> </>}
                                {paymentMethod === 'paytm' && <><label className="text-gray-200">Paytm Number</label>
                                <input type="text" className="w-full bg-gray-800 rounded p-2" placeholder="Enter Payment Details" name='paytm' onChange={handleChange}/> </>}
                                {paymentMethod === 'upi' && <><label className="text-gray-200">UPI ID</label>
                                <input type="text" className="w-full bg-gray-800 rounded p-2" placeholder="Enter Payment Details" name='upi' onChange={handleChange}/> </>}
                                {paymentMethod === 'bankAccount' && <><label className="text-gray-200">Bank Account Number</label>
                                <input type="text" className="w-full bg-gray-800 rounded p-2" placeholder="Enter Payment Details" name='bankAccount' onChange={handleChange}/> </>}
                            </div>
                            <button className="bg-[#d13d5e] text-white p-2 rounded w-full" type='button' onClick={handleSubmit}>Submit</button>

                    </div>
                    </div>
                </div>
                </div>

            <SubmitDocumentModal isOpenModal={isOpenDocumentModal} setIsOpenModal={setIsOpenDocumentModal}/>
        </>
    )
}

export default Cashout