import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import toast from "react-hot-toast";
import { userSubmitDocument } from "../../../redux/user/withdrawSlice";

const SubmitDocumentModal = ({isOpenModal,setIsOpenModal}) => {
    const [img, setImg] = useState()
    const [documentType, setDocumentType] = useState('')
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setImg(e.target.files[0])
    }
    const handleDocument = (e) => {
        setDocumentType(e.target.value)
    }
    const haldleCloseModal = (e)=> {
        setIsOpenModal(false)
    }
    const handlesubmit = async(e)=> {
        e.preventDefault();
        const form = new FormData();
        form.append('documentImage', img)
        form.append('documentType', documentType)
        const uploadRes = await dispatch(userSubmitDocument({...form, userId: auth.id }))
        const res = uploadRes.payload;
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
                <h5 className='text-2xl text-white'>Submit Document</h5>
                    <span className="close-button" onClick={haldleCloseModal}>×</span>
                </div>
        <div className="w-full p-2">
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handlesubmit}>
              <div className='text-left'>
                  <label for="documentType" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Document Type </label>
                  <input type="text" name="documentType" id="documentType" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Document Type" required="" onChange={handleDocument}/>
              </div>
              <div className='text-left'>
                  <label for="documentImage" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Document Image</label>
                  <input type="file" name="documentImage" id="documentImage" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose document image" required="" onChange={handleChange}/>
              </div>
              <div className="forgetPass flex justify-center pt-4">
          <button className="btn btn-primary bg-[#d13d5e] p-3 rounded-md text-white w-full" type="submit">Submit</button>
       </div>
          </form>
      </div>
            </div>
        </div>
        </>
    )
}

export default SubmitDocumentModal