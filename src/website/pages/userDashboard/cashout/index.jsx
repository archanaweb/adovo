
import { useDispatch, useSelector } from 'react-redux'
import wallet from '../../../assest/images/wallet.png'
import { fetchUserDetails } from '../../../../redux/user/userSlice'
import { useEffect } from 'react'
import { fetchTotalAmount } from '../../../../redux/user/walletSlice'

const Cashout = ()=> {
    const dispatch = useDispatch()
    const auth  =  JSON.parse(localStorage.getItem('opinionUser'))
    const totalAmount= useSelector((state)=> state?.wallet?.totalAmount)

    useEffect(()=> {
           dispatch(fetchTotalAmount(auth.id))
        },[])
    return (
        <>
            <div className="cashoutsec text-left">
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="md:w-1/2 w-full">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Cashout</h5>
                        <p className="text-gray-200">Redeem your Opinion true earnings directly to PayPal, Amazon, Bitcoin and more! Withdraw to your crypto wallet starting at just $0.50, and to Stake starting at $0.25!</p>
                    </div>
                    <div className="dashboard-bg md:w-1/2 w-full flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src={wallet} alt="waaletimg" />
                            <h5 className="text-xl text-white">Balance</h5>
                        </div>
                        <p className="wallet-balance text-[#24a947] text-xl">${totalAmount}</p>
                    </div>
                </div>
                <div className="py-8 px-8 mx-auto rounded shadow text-left">
                </div>
            </div>
        </>
    )
}

export default Cashout