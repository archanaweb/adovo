import DashboardHeader from "../../../components/userDdashboard/DashboardHeader"
import UserSidebar from "../../../components/userDdashboard/UserSidebar"
import wallet from '../../../assest/images/wallet.png'

const Cashout = ()=> {
    return (
        <>
          <DashboardHeader />
         <div className="main flex">
         <UserSidebar />
         <div className='dashboard-wrapper p-6'>
            <div className="cashoutsec text-left">
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Cashout</h5>
                        <p className="text-gray-200">Redeem your Opinion true earnings directly to PayPal, Amazon, Bitcoin and more! Withdraw to your crypto wallet starting at just $0.50, and to Stake starting at $0.25!</p>
                    </div>
                    <div className="dashboard-bg w-1/2 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src={wallet} alt="waaletimg" />
                            <h5 className="text-xl text-white">Balance</h5>
                        </div>
                        <p className="wallet-balance text-[#24a947] text-xl">$0.05</p>
                    </div>
                </div>
                <div className="py-8 px-8 mx-auto rounded shadow text-left">
                </div>
            </div>
         </div>
         </div>
        </>
    )
}

export default Cashout