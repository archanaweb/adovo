import DashboardHeader from "../../../components/userDdashboard/DashboardHeader"
import UserSidebar from "../../../components/userDdashboard/UserSidebar"

const Affiliates = ()=> {
    return (
        <>
          <DashboardHeader />
         <div className="main flex">
         <UserSidebar />
         <div className='dashboard-wrapper p-6'>
            <div className="cashoutsec text-left">
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <h5 className='text-2xl text-white text-left pb-6 font-bold'>Affiliates</h5>
                       
                    </div>
                </div>
            </div>
         </div>
         </div>
        </>
    )
}

export default Affiliates