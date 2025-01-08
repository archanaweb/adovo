import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdPhotoCameraBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfileImage } from "../../../redux/user/userSlice";

const ChangeProfileImgModal = ({isOpenModal,setIsOpenModal, userDetails})=> {
    const fileInputRef = useRef(null);
    const [img, setImg] = useState()
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setImg(e.target.files[0])
    }
    // const auth = JSON.parse(localStorage.getItem('opinionUser'))

    const haldleCloseModal = (e)=> {
        setIsOpenModal(false)
    }

     const handlesubmit = async(e)=> {
        e.preventDefault();
        const form = new FormData();
        form.append('image', img)
        const uploadRes = await dispatch(uploadProfileImage({userId: auth.id, form }))
        const res = uploadRes.payload;
        console.log('upload res', res)
        if(res?.responceCode === 200){
            toast.success(res?.resposneMessage);
            setIsOpenModal(false)
        }else{
            toast.error(res?.resposneMessage || 'something went wrong')
        }
    }
    return (
        <>
        <div className={`offermodal modal ${isOpenModal ? 'show-modal' : ''}`}>
            <div className="chnagepass-modal modal-content">
            <div className='flex justify-between items-center border-b border-[#28354c] pb-3'>
                <h5 className='text-2xl text-white'>Change Profile Picture</h5>
                    <span className="close-button" onClick={haldleCloseModal}>×</span>
                </div>
        <div className="w-full p-2">
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handlesubmit}>
            <div className="flex justify-center items-center profile-picture">
                <div className="updatePic">
                <img src={userDetails?.image} alt="userImg" width={150} />
                <label htmlFor="image">
                <input 
                    ref={fileInputRef} 
                    type="file" 
                    name="image" 
                    id="image" 
                    className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Choose image" required="" 
                    onChange={handleChange} 
                    style={{ display: 'none' }}/>
                    <MdPhotoCameraBack onClick={() => fileInputRef.current.click()}/>
                    </label>
                </div>
            </div>
              <div className="forgetPass flex justify-center pt-4">
                <button className="btn btn-primary bg-[#d13d5e] p-3 rounded-md text-white w-full" type="submit">Update</button>
            </div>
          </form>
      </div>
            </div>
        </div>
        </>
    )
}
export default ChangeProfileImgModal