import DashboardHeader from "../../../components/userDdashboard/DashboardHeader"
import UserSidebar from "../../../components/userDdashboard/UserSidebar"

const UserProfile = ()=> {
    return (
        <>
          <DashboardHeader />
         <div className="main flex">
         <UserSidebar />
         <div className='dashboard-wrapper p-6'>
            <div className="profilesec">
                <h5 className='text-2xl text-white text-left pb-6 font-bold'>My Profile</h5>
                <div className="userprofile py-8 px-8 mx-auto bg-slate-700 rounded shadow text-left">
                    <p>Archana Thakur</p>
                </div>
            </div>
         </div>
         </div>
        </>
    )
}

export default UserProfile