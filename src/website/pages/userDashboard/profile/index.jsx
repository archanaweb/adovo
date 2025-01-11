import { useEffect, useState } from "react"
import BaseUrl from "../../../../Api/BaseUrl"
import DashboardHeader from "../../../components/userDdashboard/DashboardHeader"
import UserSidebar from "../../../components/userDdashboard/UserSidebar"
import ChangePasswordModal from "../../../components/userDdashboard/ChangePasswordModal"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDetails, updateUserDetails } from "../../../../redux/user/userSlice"
import { MdPhotoCameraBack } from "react-icons/md";
import UploadProfileModal from "../../../components/userDdashboard/UploadProfileModal" 
import toast from "react-hot-toast"
import ChangeProfileImgModal from "../../../components/userDdashboard/ChangeProfileImgModal"

const UserProfile = ()=> {
    const [tab, setTab] = useState('earning')
    const [isEditable, setIsEditable] = useState(false)
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const dispatch = useDispatch() 
    const userDetails = useSelector((state)=> state.user.detail)
    const [formData, setFormData]  = useState({})
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenUploadModal, setIsOpenUploadModal] = useState(false)
    const [isOpenChangePicModal, setIsOpenChangePicModal] = useState(false)
    const handleClick = (e)=> {
        setIsOpenModal(!isOpenModal)
    }
    const handleUploadModal =()=> {
        setIsOpenUploadModal(true)
    }
    const handleSettingModal =()=> {
        setIsOpenChangePicModal(true)
    }
    const handleInput =(e)=> {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    const handleUpdate = async()=> {
        const form = new FormData();
        form.append('userId', auth.id);
        form.append('firstName', formData?.firstName);
        form.append('lastName', formData?.lastName);
        form.append('email', formData?.email);
        form.append('education', formData?.education);
        const updateUser = await dispatch(updateUserDetails(
            {userId: auth.id, formData: form}
        ));
         const res = updateUser.payload;
         console.log('userupdateres', res)
             if(res?.responseCode === 200){
                 toast.success(res?.responseMesage)
                 setIsEditable(false)
             }else{
                 toast.error(res?.responseMesage || 'something went wrong');
             }
    }
    
    useEffect(()=> {
        setFormData({...userDetails, ...formData})
    },[userDetails])

    useEffect(()=>{
        dispatch(fetchUserDetails(auth.id))
    },[])
    return (
        <>
            <div className="profilesec">
                <div className="secTop md:flex justify-between items-center md:pb-6 pb-2"> 
                <h5 className='text-2xl text-white text-left font-bold'>My Profile</h5>
                    <div className="flex justify-end gap-3 mb-2 mb:mb-0">
                        <button onClick={handleSettingModal} className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all">Setting</button>
                        {!isEditable ? <button className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all" onClick={()=> setIsEditable(true)}>Edit</button> : 
                        <button className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all" onClick={handleUpdate}>Save</button>}
                        <button onClick={handleClick} className="text-gray-300 border rounded-md p-1 px-3 hover:text-[#d13d5e] transition-all">Change Password</button>
                     </div>
                     </div>
                <div className="userprofile md:py-4 md:px-4 py-2 px-2 bg-slate-700 rounded shadow text-left ">
                {/* <div className="secTop flex justify-end gap-3 mb-2 mb:mb-0">
                        {!isEditable ? <button className="text-gray-300 border rounded-md p-1 px-3" onClick={()=> setIsEditable(true)}>Edit</button> : 
                        <button className="text-gray-300 border rounded-md p-1 px-3 " onClick={handleUpdate}>Save</button>}
                        <button onClick={handleClick} className="text-gray-300 border rounded-md p-1 px-3">Change Password</button>
                     </div> */}
                     <div className="flex justify-between items-start">
                    <div className="flex gap-4 md:flex-row flex-col sm:w-full">
                        <div className="profile-img flex items-center justify-center flex-col">
                           {userDetails?.image ? <img src={userDetails?.image} alt="userImg" width={100}/> :
                            <div className="" onClick={handleUploadModal}><MdPhotoCameraBack />
                           <span>Upload </span></div>}
                        </div>
                        <div className="user-prof">
                       {!isEditable ? <h5 className="text-white text-3xl font-semibold">{userDetails?.firstName} {userDetails?.lastName}</h5> : 
                       <><input className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" type="text" name="firstName" value={formData?.firstName} onChange={(e)=>handleInput(e)} placeholder="First name"/>
                       <input className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" type="text" name="lastName" value={formData?.lastName} onChange={(e)=>handleInput(e)} placeholder="Last name"/></>}
                        {!isEditable ? <p>{userDetails?.email}</p> : <input className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" type="email" name="email" value={formData?.email} onChange={(e)=>handleInput(e)} placeholder="Email address" />}
                        </div>
                    </div>
                    </div>
                </div>

                <div className='tabs pt-4'>
                                <button 
                                    className={`tab ${tab === 'earning' ? 'active': ''}`}
                                    onClick={()=> setTab('earning')}>Earnings</button>
                                <button 
                                    className={`tab ${tab === 'withdraw' ? 'active': ''}`}
                                    onClick={()=> setTab('withdraw')}>Withdrawals</button>
                            </div>
            </div>
         <ChangePasswordModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
         <UploadProfileModal isOpenModal={isOpenUploadModal} setIsOpenModal={setIsOpenUploadModal}/>
         <ChangeProfileImgModal isOpenModal={isOpenChangePicModal} setIsOpenModal={setIsOpenChangePicModal} userDetails={userDetails}/>
        </>
    )
}

export default UserProfile