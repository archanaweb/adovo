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
import { fetchWithdrawRequestList } from "../../../../redux/user/withdrawSlice"

const UserProfile = ()=> {
    const [tab, setTab] = useState('earning')
    const [isEditable, setIsEditable] = useState(false)
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const dispatch = useDispatch() 
    const userDetails = useSelector((state)=> state.user.detail)
    const withdrawList = useSelector((state)=> state.withdraw?.WithdrawRequestList)
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
        dispatch(fetchWithdrawRequestList(auth?.id))
    },[])
    return (
        <>
            <div className="profilesec md:p-6 p-4">
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
                <div className="tabContent">
                    {tab === 'withdraw' && <>

                        {!withdrawList ? <><div className="mx-4"><p className="text-left text-white">Data not found</p></div></> : <div className="mx-4">
                                <div className="overflow-x-auto bg-[#111827]">
                                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden leaderboard-table">
                                        <table className="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    User
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                        Amount
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                       User name
                                                    </th>
                                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    Transaction ID
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {withdrawList?.map((user, index)=> <tr>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm" key={user?._id}>
                                                        <div className="flex">
                                                            <div className="flex-shrink-0 w-5 h-5">
                                                                <span>{user?.userId}</span>
                                                            </div>
                                                            <div className="ml-1">
                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                   {user?.userName}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">${user?.amount}</p>
                                                    </td>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{user?.status}</p>
                                                    </td>
                                                    <td className="md:px-5 md:py-5 px-3 py-3 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{user?.transactionId}</p>
                                                    </td>
                                                </tr> )}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </div>}
                    </>}
                </div>
         <ChangePasswordModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
         <UploadProfileModal isOpenModal={isOpenUploadModal} setIsOpenModal={setIsOpenUploadModal}/>
         <ChangeProfileImgModal isOpenModal={isOpenChangePicModal} setIsOpenModal={setIsOpenChangePicModal} userDetails={userDetails}/>
        </>
    )
}

export default UserProfile