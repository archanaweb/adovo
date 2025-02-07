import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { userSubmitDocument } from "../../../redux/user/withdrawSlice";
import { IoCloseSharp } from "react-icons/io5";

const SubmitDocumentModal = ({isOpenModal,setIsOpenModal}) => {
    const [img, setImg] = useState()
    const [documentType, setDocumentType] = useState('')
    const auth = JSON.parse(localStorage.getItem('opinionUser'))
    const dispatch = useDispatch()
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setImg(e.target.files[0])
    }
    const handleDocument = (e) => {
        setDocumentType(e.target.value)
    }
    const haldleCloseModal = (e)=> {
        setIsOpenModal(false)
        setDocumentType('')
        setImg(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input field
        }  
    }
    const handlesubmit = async(e)=> {
        e.preventDefault();
        const form = new FormData();
        form.append('documentImage', img)
        form.append('documentType', documentType)
        form.append('userId', auth.id)
        const uploadRes = await dispatch(userSubmitDocument(form))
        console.log('documentuploadRes', uploadRes)
        const res = uploadRes.payload;
        if(res?.responseCode === 200){
            toast.success(res?.responseMessage);
            setIsOpenModal(false)
        }else{
            toast.error(res?.responseMessage || 'something went wrong')
        }
    }
    useEffect(() => {
        if (!isOpenModal) {
            setDocumentType('');
            setImg(null);
        }
        console.log('run1', isOpenModal)
    }, [isOpenModal]);
    return (
        <>
            <div className={`offermodal modal ${isOpenModal ? 'show-modal' : ''}`}>
            <div className="chnagepass-modal modal-content">
            <div className='flex justify-between items-center border-b border-[#28354c] pb-3'>
                <h5 className='text-2xl text-white'>Submit Document</h5>
                    <span className="close-button" onClick={haldleCloseModal}><IoCloseSharp /></span>
                </div>
        <div className="w-full p-2">
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handlesubmit}>
              <div className='text-left'>
                  <label htmlFor="documentType" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Document Type </label>
                  <input type="text" name="documentType" id="documentType" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Document Type" required="" value={documentType} onChange={handleDocument}/>
              </div>
              <div className='text-left'>
                  <label htmlFor="documentImage" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-200">Document Image</label>
                  <input type="file" name="documentImage" ref={fileInputRef}  id="documentImage" className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose document image" required="" onChange={handleChange}/>
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