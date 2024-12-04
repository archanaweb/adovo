import { useEffect, useState } from "react"
import BaseUrl from "../../../../Api/BaseUrl"
import DashboardHeader from "../../../components/userDdashboard/DashboardHeader"
import UserSidebar from "../../../components/userDdashboard/UserSidebar"
import ChangePasswordModal from "../../../components/userDdashboard/ChangePasswordModal"

const UserProfile = ()=> {
    const [user, setUser] = useState({})
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const fetchUserProfile = async()=> {
    const response = await fetch(`${BaseUrl}user/viewData?userId=${auth._id}`)
    const resData = await response.json()
    console.log('resData', resData)
        if(resData.responseCode === 200){
            setUser(resData.responseMesage)
        }else{
            setUser({})
        }
    }
    const [isOpenModal, setIsOpenModal] = useState(false)
    const handleClick = (e)=> {
        setIsOpenModal(!isOpenModal)
    }
    useEffect(()=>{
        fetchUserProfile()
    },[])
    return (
        <>
        <DashboardHeader />
         <div className="main flex">
            
         <UserSidebar />
         <div className='dashboard-wrapper p-6'>
            <div className="profilesec">
                <h5 className='text-2xl text-white text-left pb-6 font-bold'>My Profile</h5>
                <div className="userprofile py-8 px-8 mx-auto bg-slate-700 rounded shadow text-left flex justify-between items-start">
                    <div className="">
                    <h5 className="text-white text-2xl">{user.firstName} {user.lastName}</h5>
                    <p>{user.email}</p>
                    <span className="text-gray-300 text-xs">{user.education}</span>
                    </div>
                    <div className="flex gap-2">
                     <button onClick={handleClick} className="text-gray-300 border rounded-md p-2">Edit</button>
                     <button onClick={handleClick} className="text-gray-300 border rounded-md p-2">Change Password</button>
                     </div>
                </div>
            </div>
         </div>
         </div>
         <ChangePasswordModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </>
    )
}

export default UserProfile