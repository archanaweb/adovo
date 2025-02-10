import { useDispatch, useSelector } from "react-redux"
import { uploadProfileImage } from "../../../redux/user/userSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoClipboard, IoCloseSharp } from "react-icons/io5";

const UploadProfileModal = ({isOpenModal,setIsOpenModal}) => {
    const [img, setImg] = useState()
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const profileImg = useSelector((state)=> state.user.uploadImg);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setImg(e.target.files[0])
    }
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
        if(res?.responseCode === 200){
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
                <h5 className='text-2xl text-white'>Upload Profile Image</h5>
                    <span className="close-button" onClick={haldleCloseModal}><IoClipboard /></span>
                </div>
        <div className="w-full p-2">
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handlesubmit}>
              <div className='text-left'>
                  <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Image</label>
                  <input type="file" name="image" id="image" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose image" required="" onChange={handleChange}/>
              </div>
              <div className="forgetPass flex justify-center pt-4">
          <button className="btn btn-primary bg-[#d13d5e] p-3 rounded-md text-white w-full" type="submit">Save</button>
       </div>
          </form>
      </div>
            </div>
        </div>
        </>
    )
}

export default UploadProfileModal